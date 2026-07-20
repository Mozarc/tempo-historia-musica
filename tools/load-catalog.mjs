import fs from "node:fs";
import path from "node:path";

const collectionNames = [
  "parts",
  "chapters",
  "sections",
  "people",
  "works",
  "concepts",
  "sources",
];

export function mergeCatalogs(catalogs) {
  const merged = {
    schemaVersion: 1,
    metadata: {
      title: "Tempo — Catàleg historiogràfic",
      language: "ca",
      lastReviewed: catalogs
        .map(catalog => catalog.metadata?.lastReviewed)
        .filter(Boolean)
        .sort()
        .at(-1),
      editorialNote: catalogs
        .map(catalog => catalog.metadata?.editorialNote)
        .filter(Boolean)
        .join(" "),
    },
  };

  for (const collection of collectionNames) {
    const byId = new Map();
    for (const catalog of catalogs) {
      for (const item of catalog[collection] || []) {
        if (!byId.has(item.id)) byId.set(item.id, item);
      }
    }
    merged[collection] = [...byId.values()];
  }

  return merged;
}

export function loadCatalog(inputPath) {
  const resolvedPath = path.resolve(inputPath);
  const input = JSON.parse(fs.readFileSync(resolvedPath, "utf8"));
  if (!Array.isArray(input.files)) return input;

  const baseDir = path.dirname(resolvedPath);
  const catalogs = input.files.map(file =>
    JSON.parse(fs.readFileSync(path.resolve(baseDir, file), "utf8"))
  );
  return mergeCatalogs(catalogs);
}
