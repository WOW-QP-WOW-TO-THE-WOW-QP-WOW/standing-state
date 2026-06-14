// CORPUS INDEX MERGE SNIPPET
//
// Add the M082 entry wherever the canonical essay index/list is
// maintained in the repo (e.g. data/essays.js, lib/corpus.js,
// pages/essays/index.js, or a similar registry file).
//
// The exact field names below should match whatever schema the
// existing corpus index already uses. Adjust as needed.

export const m082Entry = {
  id: "m082",
  slug: "the-geometry-of-continuity",
  title: "M082 — The Geometry of Continuity",
  subtitle: "An Essay on Identity, Invariance, and the Bridge Between States",
  author: "Leon Powdar (Phase Reference)",
  status: "CANONICAL_ADMIT",
  accessStatus: "RECOMMENDED_FOR_ON_SITE_CORPUS",
  canonicalRoute: "/essays/canonical/the-geometry-of-continuity",
  readerRoute: "/listen/the-geometry-of-continuity",
  auditScores: {
    primaryGate: 1.000,
    structural: 1.000,
    canonicalValue: 1.000,
  },
};

// Example: if essays are exported as an array in the index file,
// append m082Entry to that array:
//
//   import { m082Entry } from "./m082Entry";
//   export const canonicalEssays = [
//     ...existingEssays,
//     m082Entry,
//   ];
