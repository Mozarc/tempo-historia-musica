import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadCatalog } from "./load-catalog.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scriptPath = path.join(repoRoot, "script.js");
const deepCatalogPath = path.join(repoRoot, "data", "catalog-manifest.json");
const source = fs.readFileSync(scriptPath, "utf8");
const deepCatalog = fs.existsSync(deepCatalogPath)
  ? loadCatalog(deepCatalogPath)
  : null;
const dataEnd = source.indexOf("const timeline =");

if (dataEnd === -1) {
  throw new Error("No s'ha trobat el final del catàleg estàtic a script.js.");
}

const context = {};
vm.runInNewContext(
  `${source.slice(0, dataEnd)}
  this.__catalog = {
    eras,
    eraProfiles,
    composerProfiles,
    styleProfiles,
    eraSoundtracks
  };`,
  context,
  { filename: scriptPath },
);

const {
  eras,
  eraProfiles,
  composerProfiles,
  styleProfiles,
  eraSoundtracks,
} = context.__catalog;
const composers = eras.flatMap((era) =>
  era.composers.map((composer) => ({ ...composer, eraId: era.id })),
);
const eraStyles = eras.flatMap((era) =>
  era.styles.map((style) => ({ style, eraId: era.id })),
);
const unique = (values) => [...new Set(values)];
const duplicates = (values) =>
  unique(values.filter((value, index) => values.indexOf(value) !== index));

const composerNames = composers.map(({ name }) => name);
const styleNames = eraStyles.map(({ style }) => style);
const profileComposerNames = Object.keys(composerProfiles);
const profileStyleNames = Object.keys(styleProfiles);
const profileWorkMentions = Object.values(composerProfiles).reduce(
  (total, profile) => total + (Array.isArray(profile?.[2]) ? profile[2].length : 0),
  0,
);

const checks = {
  duplicateEraIds: duplicates(eras.map(({ id }) => id)),
  duplicateComposerNames: duplicates(composerNames),
  duplicateStyleNamesAcrossEras: duplicates(styleNames),
  erasWithoutProfiles: eras
    .filter(({ id }) => !eraProfiles[id])
    .map(({ id }) => id),
  orphanEraProfiles: Object.keys(eraProfiles).filter(
    (id) => !eras.some((era) => era.id === id),
  ),
  composersWithoutProfiles: unique(
    composerNames.filter((name) => !composerProfiles[name]),
  ),
  orphanComposerProfiles: profileComposerNames.filter(
    (name) => !composerNames.includes(name),
  ),
  stylesWithoutProfiles: unique(
    styleNames.filter((name) => !styleProfiles[name]),
  ),
  orphanStyleProfiles: profileStyleNames.filter(
    (name) => !styleNames.includes(name),
  ),
  composerProfilesWithoutThreeWorks: profileComposerNames.filter(
    (name) =>
      !Array.isArray(composerProfiles[name]?.[2]) ||
      composerProfiles[name][2].length !== 3,
  ),
  erasWithoutSoundtracks: eras
    .filter(({ id }) => !eraSoundtracks[id])
    .map(({ id }) => id),
  soundtrackLinksThatAreNotConcreteSpotifyItems: Object.entries(eraSoundtracks)
    .filter(([, soundtrack]) => !/^spotify:(track|album|playlist):/.test(soundtrack.uri))
    .map(([id]) => id),
};

const issueCount = Object.values(checks).reduce(
  (total, values) => total + values.length,
  0,
);

const report = {
  generatedAt: new Date().toISOString(),
  source: "script.js",
  status: issueCount === 0 ? "consistent" : "review-needed",
  counts: {
    eras: eras.length,
    eraProfiles: Object.keys(eraProfiles).length,
    composerEntries: composers.length,
    uniqueComposers: unique(composerNames).length,
    composerProfiles: profileComposerNames.length,
    styleEntries: eraStyles.length,
    uniqueStyles: unique(styleNames).length,
    styleProfiles: profileStyleNames.length,
    featuredWorks: composers.length,
    profileWorkMentions,
    eraSoundtracks: Object.keys(eraSoundtracks).length,
  },
  migrationReadiness: {
    catalogCanBeExtracted: true,
    currentSpotifyLinksAreSearchQueries: true,
    concreteEraSoundtracksAvailable: Object.keys(eraSoundtracks).length,
    concreteDeepCatalogRecordingsAvailable: deepCatalog
      ? deepCatalog.works.reduce(
        (total, work) => total + (work.recordings || []).length,
        0,
      )
      : 0,
    deepCatalogSourceReferencesArePagePrecise: Boolean(
      deepCatalog?.chapters.every(chapter =>
        chapter.sourceRefs.length > 0 &&
        chapter.sourceRefs.every(ref => typeof ref.pages === "string" && ref.pages.length > 0)
      )
    ),
    sourceDocumentsIndexed: fs.existsSync(path.join(repoRoot, "data", "coverage.json")),
  },
  checks,
};

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
