import fs from "node:fs";
import path from "node:path";
import { loadCatalog } from "./load-catalog.mjs";

const catalogPath = path.resolve(process.argv[2] || "data/catalog-manifest.json");

if (!fs.existsSync(catalogPath)) {
  console.error(`No existeix el catàleg: ${catalogPath}`);
  process.exit(2);
}

const catalog = loadCatalog(catalogPath);
const errors = [];
const collections = [
  "parts",
  "chapters",
  "sections",
  "people",
  "works",
  "concepts",
  "sources",
];

const byCollection = Object.fromEntries(
  collections.map((name) => [
    name,
    new Map((catalog[name] || []).map((item) => [item.id, item])),
  ]),
);

const add = (location, message) => errors.push({ location, message });
const requireReferences = (location, ids, collection) => {
  for (const id of ids || []) {
    if (!byCollection[collection].has(id)) {
      add(location, `Referència inexistent a ${collection}: ${id}`);
    }
  }
};
const checkSourceRefs = (location, refs) => {
  for (const [index, ref] of (refs || []).entries()) {
    if (!byCollection.sources.has(ref.sourceId)) {
      add(`${location}.sourceRefs[${index}]`, `Font inexistent: ${ref.sourceId}`);
    }
  }
};

for (const name of collections) {
  const items = catalog[name] || [];
  const ids = items.map(({ id }) => id);
  for (const id of new Set(ids.filter((value, index) => ids.indexOf(value) !== index))) {
    add(name, `Identificador duplicat: ${id}`);
  }
}

for (const [index, part] of (catalog.parts || []).entries()) {
  requireReferences(`parts[${index}].chapterIds`, part.chapterIds, "chapters");
  checkSourceRefs(`parts[${index}]`, part.sourceRefs);
}

for (const [index, chapter] of (catalog.chapters || []).entries()) {
  if (!byCollection.parts.has(chapter.partId)) {
    add(`chapters[${index}].partId`, `Part inexistent: ${chapter.partId}`);
  }
  requireReferences(`chapters[${index}].sectionIds`, chapter.sectionIds, "sections");
  requireReferences(`chapters[${index}].personIds`, chapter.personIds, "people");
  requireReferences(`chapters[${index}].workIds`, chapter.workIds, "works");
  requireReferences(`chapters[${index}].conceptIds`, chapter.conceptIds, "concepts");
  checkSourceRefs(`chapters[${index}]`, chapter.sourceRefs);
}

for (const [index, section] of (catalog.sections || []).entries()) {
  if (!byCollection.chapters.has(section.chapterId)) {
    add(`sections[${index}].chapterId`, `Capítol inexistent: ${section.chapterId}`);
  }
  checkSourceRefs(`sections[${index}]`, section.sourceRefs);
}

for (const [index, person] of (catalog.people || []).entries()) {
  requireReferences(`people[${index}].workIds`, person.workIds, "works");
  checkSourceRefs(`people[${index}]`, person.sourceRefs);
}

for (const [index, work] of (catalog.works || []).entries()) {
  requireReferences(`works[${index}].personIds`, work.personIds, "people");
  checkSourceRefs(`works[${index}]`, work.sourceRefs);

  for (const [recordingIndex, recording] of (work.recordings || []).entries()) {
    const location = `works[${index}].recordings[${recordingIndex}]`;
    if (/open\.spotify\.com\/search\//.test(recording.spotifyUrl || "")) {
      add(location, "Cal un enregistrament concret, no una cerca de Spotify.");
    }
    if (
      Number.isInteger(recording.excerptStart) &&
      Number.isInteger(recording.excerptEnd) &&
      recording.excerptEnd <= recording.excerptStart
    ) {
      add(location, "El final del fragment ha de ser posterior a l'inici.");
    }
  }
}

for (const [index, concept] of (catalog.concepts || []).entries()) {
  requireReferences(
    `concepts[${index}].exampleWorkIds`,
    concept.exampleWorkIds,
    "works",
  );
  checkSourceRefs(`concepts[${index}]`, concept.sourceRefs);
}

if (errors.length > 0) {
  console.error(JSON.stringify({ status: "review-needed", errors }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify(
    {
      status: "consistent",
      path: catalogPath,
      counts: Object.fromEntries(
        collections.map((name) => [name, (catalog[name] || []).length]),
      ),
    },
    null,
    2,
  ),
);
