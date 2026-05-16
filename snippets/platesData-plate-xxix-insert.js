/**
 * SNIPPET: P029 plate data entry
 * Insert into components/platesData.js after the P028 entry,
 * before the closing `]` of the PLATES array.
 *
 * Convention matches snippets/platesData-plate-xxviii-insert.js
 * and the P025/P026/P027/P028 round.
 *
 * P029 is a built canonical plate with a supplied SVG asset
 * (canonical Standing State Press grammar; 1600×2200; gold/black/cream;
 * render-time artifacts resolved: ≠ ∩ ≤ glyphs correct; INVARIANT
 * COORDINATE label clean; LOAD fully visible; Σ contextualized as
 * INTERFERENCE LOAD).
 *
 * STRUCTURAL FIELDS (pinned by the SVG and the M061 thesis):
 *   id, number, title, slug, image, summary, governingCondition,
 *   description, volume, chapter, linkedVars, linkedGlossary, relatedEssay
 *
 * linkedGlossary: [] per Path B ruling (no glossary mutation;
 * no editorial substitution; future binding patch will add
 * the appropriate anchors once new glossary entries are ruled).
 *
 * linkedVars draws only from existing live glossary anchors:
 *   xstar (I*), phi (Φ), sigma (Σ)
 *
 * After insertion, also update PLATES_META.count from 28 to 29
 * and PLATES_META.description from "Twenty-eight plates..." to
 * "Twenty-nine plates...". See platesData-count-update-p029.txt.
 */

{
  id: 'P029',
  number: 'XXIX',
  title: 'The Geometry of Lawful Arrival',
  slug: 'the-geometry-of-lawful-arrival',
  image: '/plates/plate-xxix-the-geometry-of-lawful-arrival.svg',
  summary: 'The Standing State at the phenomenological-synthesis register: lawful traversal navigates consequence, interference load, and capacity bounds through five gates of convergence to arrive at the identity coordinate. The straight line belongs to worlds without consequence.',
  governingCondition: '\\mathcal{P}^{*} = \\arg\\max\\,(\\text{Arrival} \\cap \\text{Integrity})',
  description: 'Plate XXIX renders the geometry of lawful arrival. A dashed straight line of imagined optimization runs from start to terminus, valid only in worlds without consequence — argmin(d) = argmax(success) only when cost is zero. The lawful path curves through five gates — Recognition · Orientation · Admissibility · Execute · Resolution — navigating around the three fields reality imposes: Consequence, Σ (interference load), and capacity bounds. The terminus is I* — the invariant identity coordinate — reached not by shortest distance but by survivable arrival. The first principle is not speed; the first principle is arriving alive. WOW marks the moment x → I* resolves into phase-lock recognition. Motion proceeds only while Φ(x; I*) ≤ 0. Companion to essay M061.',
  volume: 'Volume I',
  chapter: 'Synthesis & Lawful Arrival',
  linkedVars: ['xstar', 'phi', 'sigma'],
  linkedGlossary: [],
  relatedEssay: 'M061',
},
