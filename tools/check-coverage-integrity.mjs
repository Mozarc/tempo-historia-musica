import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCatalog } from "./load-catalog.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const coveragePath = path.join(repoRoot, "data", "coverage.json");
const schemaPath = path.join(repoRoot, "data", "coverage.schema.json");
const catalogPath = path.join(repoRoot, "data", "catalog-manifest.json");
const coverage = JSON.parse(fs.readFileSync(coveragePath, "utf8"));
const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
const catalog = fs.existsSync(catalogPath) ? loadCatalog(catalogPath) : null;

const entries = coverage.entries;
const parts = entries.filter(({ level }) => level === "part");
const chapters = entries.filter(({ level }) => level === "chapter");
const ids = entries.map(({ id }) => id);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const allowedMissing = new Set(schema.$defs.entry.properties.missing.items.enum);
const allowedTopicKinds = new Set(schema.$defs.topic.properties.kind.enum);
const catalogIds = new Set(
  catalog
    ? ["parts", "chapters", "sections", "people", "works", "concepts", "sources"]
      .flatMap(collection => (catalog[collection] || []).map(({ id }) => id))
    : [],
);

const issues = {
  duplicateIds,
  chaptersWithoutKnownParent: chapters
    .filter(({ parentId }) => !parts.some(({ id }) => id === parentId))
    .map(({ id }) => id),
  chaptersWithoutTopics: chapters
    .filter(({ topics }) => !Array.isArray(topics) || topics.length === 0)
    .map(({ id }) => id),
  invalidMissingValues: chapters.flatMap(({ id, missing = [] }) =>
    missing.filter(value => !allowedMissing.has(value)).map(value => `${id}: ${value}`)
  ),
  invalidTopicKinds: chapters.flatMap(({ id, topics = [] }) =>
    topics
      .filter(({ kind }) => kind && !allowedTopicKinds.has(kind))
      .map(({ kind }) => `${id}: ${kind}`)
  ),
  developedEntriesWithoutCatalogIds: entries
    .filter(({ status, catalogIds: refs }) =>
      ["drafted", "reviewed", "published"].includes(status) && refs.length === 0
    )
    .map(({ id }) => id),
  unknownCatalogIds: entries.flatMap(({ id, catalogIds: refs }) =>
    refs.filter(ref => !catalogIds.has(ref)).map(ref => `${id}: ${ref}`)
  ),
};

const issueCount = Object.values(issues).reduce((total, values) => total + values.length, 0);
const report = {
  status: issueCount === 0 ? "consistent" : "review-needed",
  sourceId: coverage.sourceId,
  counts: {
    parts: parts.length,
    chapters: chapters.length,
    topics: chapters.reduce((total, { topics = [] }) => total + topics.length, 0),
  },
  expected: {
    parts: 6,
    chapters: 39,
  },
  issues,
};

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
if (issueCount > 0 || parts.length !== 6 || chapters.length !== 39) process.exitCode = 1;
