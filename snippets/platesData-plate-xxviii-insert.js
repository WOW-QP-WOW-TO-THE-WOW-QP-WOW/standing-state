/**
 * SNIPPET: P028 plate data entry
 * Insert into components/platesData.js after the P027 entry,
 * before the closing `]` of the PLATES array.
 *
 * Convention matches snippets/platesData-plate-xxvii-insert.js
 * and the P025/P026/P027 round.
 *
 * P028 is a built canonical plate with a supplied SVG asset
 * (canonical Standing State Press grammar; 1600×2200; gold/black/cream).
 * This snippet registers it in the data layer so the existing
 * PlateCard renderer and [slug] route activate together.
 *
 * STRUCTURAL FIELDS (pinned by the SVG and the M060 thesis):
 *   id, number, title, slug, image, summary, governingCondition,
 *   description, volume, chapter, linkedVars, linkedGlossary, relatedEssay
 *
 * linkedGlossary: [] per Path B ruling (no glossary mutation;
 * no editorial substitution; future binding patch will add
 * the appropriate anchors once new glossary entries are ruled).
 *
 * linkedVars draws only from existing live glossary anchors:
 *   xstar (I*), phi (Φ), sigma (Σ), kauto (K_auto)
 *
 * After insertion, also update PLATES_META.count from 27 to 28
 * and PLATES_META.description from "Twenty-seven plates..." to
 * "Twenty-eight plates...". See platesData-count-update-p028.txt.
 */

{
  id: 'P028',
  number: 'XXVIII',
  title: 'Lawful Motion Under Invariant Identity',
  slug: 'lawful-motion-under-invariant-identity',
  image: '/plates/plate-xxviii-lawful-motion-under-invariant-identity.svg',
  summary: 'The Standing State as lawful motion under invariant identity. The basin S(I*) is rendered as the admissible region within which execution proceeds; identity stands at the center as the invariant coordinate; motion flows lawfully within scope.',
  governingCondition: 'I^{*} = \\text{constant} \\;\\wedge\\; x_{t} \\in S(I^{*}) \\Rightarrow \\text{EXECUTE} \\leftrightarrow \\text{RESTORE} \\leftrightarrow \\text{HALT}',
  description: 'Plate XXVIII renders the Standing State at its synthesis-canonical resolution. The architectural sequence — measure, identity, admissibility, execution — is shown in lawful order at the top register. The basin S(I*) is rendered with the identity coordinate at the center and admissible trajectories flowing within scope. RESTORE returns the system inside capacity when admissibility is threatened; HALT refuses motion at boundary breach. The operational seal compresses the architecture to four lines: stand under load, remain oriented to the coordinate, surrender what is not yours, continue lawfully. The Standing State is not stillness and not force — it is lawful motion under invariant identity. Companion to essay M060.',
  volume: 'Volume I',
  chapter: 'Synthesis & Lawful Motion',
  linkedVars: ['xstar', 'phi', 'sigma', 'kauto'],
  linkedGlossary: [],
  relatedEssay: 'M060',
},
