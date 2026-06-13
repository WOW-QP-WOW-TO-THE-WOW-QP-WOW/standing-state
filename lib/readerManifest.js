// Reader manifest loader — Pages Router compatible (JavaScript).
//
// Intended for use inside getStaticProps / getStaticPaths (Node.js
// runtime, server-side only). Reads JSON manifest files from
// /public/reader-manifests at build time.

import fs from "fs";
import path from "path";

const MANIFEST_DIR = path.join(process.cwd(), "public", "reader-manifests");

export function getAllManifests() {
  if (!fs.existsSync(MANIFEST_DIR)) return [];
  return fs
    .readdirSync(MANIFEST_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(MANIFEST_DIR, f), "utf-8")));
}

export function getManifestBySlug(slug) {
  const manifests = getAllManifests();
  return manifests.find((m) => m.readerRoute === `/listen/${slug}`) ?? null;
}
