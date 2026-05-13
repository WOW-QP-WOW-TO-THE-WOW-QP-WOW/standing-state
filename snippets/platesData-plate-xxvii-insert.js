/**
 * SNIPPET: P027 plate data entry
 * Insert into components/platesData.js after the P026 entry,
 * before the closing `]` of the PLATES array.
 *
 * Convention matches snippets/platesData-plate-xi-insert.js
 * and the P026 round (platesData-plate-xxvi-insert.js).
 *
 * P027 is a built canonical plate with a supplied SVG asset.
 * This snippet registers it in the data layer so the existing
 * PlateCard renderer and [slug] route activate together.
 *
 * STRUCTURAL FIELDS (pinned by the SVG and the M059 thesis):
 *   id, number, title, slug, image, governingCondition,
 *   linkedVars, linkedGlossary, relatedEssay
 *
 * linkedGlossary: [] per Path B ruling (no glossary mutation;
 * no editorial substitution; future binding patch will add
 * the appropriate anchors once new glossary entries are ruled).
 *
 * After insertion, also update PLATES_META.count from 26 to 27.
 * See platesData-count-update-p027.txt.
 */

{
  id: 'P027',
  number: 'XXVII',
  title: 'Deterministic Governance',
  slug: 'deterministic-governance',
  image: '/plates/plate-xxvii-deterministic-governance.svg',
  summary: 'Forward invariance for autonomous systems. The Standing State becomes an executable governance protocol: predict the next state, compute coherence, and execute only within the certified operating envelope.',
  governingCondition: '\\hat{\\mathcal{I}}_{k+1} \\ge \\epsilon \\Rightarrow \\text{EXECUTE};\\; \\hat{\\mathcal{I}}_{k+1} < \\epsilon \\Rightarrow \\text{HARDEN or HALT}',
  description: 'Plate XXVII defines deterministic governance as the institutional form of Standing State invariance. Autonomous systems do not fail only by explosion; they fail by silent drift. The governance protocol prevents drift before execution by predicting the next state, computing identity coherence, and allowing action only when the predicted state remains inside the certified operating envelope. When coherence approaches the boundary, the system hardens. When coherence violates the threshold, the system halts. Availability becomes negotiable; identity does not. The HALT is not failure — it is mandate completion. Companion to essay M059.',
  volume: 'Volume I',
  chapter: 'Governance & Forward Invariance',
  linkedVars: ['xstar', 'phi'],
  linkedGlossary: [],
  relatedEssay: 'M059',
},
