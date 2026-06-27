# DD06 — Canonical Deployment Doctrine
# Standing State Press · standingstate.com
#
# Registry Classification: DD06 (Deployment Doctrine)
# D-series reserved for Constitutional Doctrine.
# DD-series reserved for Deployment and Operational Engineering Doctrine.
# Constitutional Doctrine Registry: D003 · D005 · D006
# Deployment Doctrine Registry: DD06

## Purpose

Deploy canonical essays and plates to standingstate.com without rediscovering repository
structure each time.

Core command: **Read DEPLOYMENT_DOCTRINE.md and execute.**

---

## 1. Source Before Action

Before writing any file, read the following from the current source zip:

- `pages/essays/index.js` — understand the ESSAYS array structure and insertion point
- At least one current standalone canonical essay page (not import-based) — confirm active pattern
- Any registry or metadata file involved (e.g. `data/essays/`)

Do not assume repo structure from prior chats. The source zip is the authority.

**Known failure pattern:** Prior sessions built content-module import pages
(`import { essay } from '../../../content/essays/...'`) that do not match the
corpus pattern. Always verify the active pattern from source before building.

---

## 2. Canonical Essay Completion Checklist

A canonical essay is not complete until ALL of the following are true:

- [ ] Standalone page exists at `pages/essays/canonical/[slug].js`
- [ ] Route resolves: `/essays/canonical/[slug]`
- [ ] Page follows current repo-native standalone pattern:
  - Full nav inline (`<nav className="nav">`)
  - Header inline (`<header className="glossHeader canonMonument">`)
  - Breadcrumb inline
  - Body inline — no content module import
  - CSS classes: `canonEssayWrap`, `canonEssayBlock`, `canonEssayLabel`,
    `canonEssayBody`, `canonEssayPara`, `canonEssayNav`, `canonNavLink`
- [ ] Essay registered in `pages/essays/index.js` ESSAYS array
- [ ] Registry/metadata updated if repo uses one (`data/essays/`)
- [ ] Read / Site / Mirror / Lineage navigation present in header
- [ ] Mirror status audited (use repo metadata URL if present; mark Pending if not; never invent a URL)
- [ ] Semantic boundaries preserved:
  - `article#canonical-essay` (or `article className="canonEssay"`)
  - `h1#essay-title` (or `h1 className="glossH1"`)
  - `section#essay-body`
- [ ] Reader markers preserved if used by repo:
  - `<span id="essay-reader-start" aria-hidden="true" />`
  - `<span id="essay-reader-end" aria-hidden="true" />`
- [ ] Lineage stated in header and nav footer
- [ ] No unrelated files changed
- [ ] Bracket balance verified: `{}` and `()` both 0 on all modified JS files
- [ ] GitHub upload zip produced

---

## 3. Failure Rule

Do not declare completion until the checklist is satisfied.

If a prior session produced a file that fails the checklist, rebuild it.
Do not patch a non-compliant file — replace it.

---

## 4. Validation Report

Every deployment must report:

- Files changed (list each)
- Page route confirmed
- Index updated (yes / no — which entries added)
- Registry updated (yes / no / not applicable)
- Mirror status (URL or Pending — source cited)
- Lineage confirmed (full chain)
- Reader markers confirmed (present / absent)
- Semantic boundaries confirmed (present / absent)
- Bracket balance (pass / fail)
- Zip filename
- Assumptions made (explicit list)

---

## 5. Packaging Convention

Zip name: `standing_state_[essay_id_or_slug]_deployment_patch.zip`

Zip must contain files at their exact repo paths, e.g.:
- `pages/essays/canonical/the-geometry-of-continuity.js`
- `pages/essays/index.js`
- `DEPLOYMENT_DOCTRINE.md`

---

## 6. Index Registration Pattern

In `pages/essays/index.js`, entries follow this shape:

```js
{
  id: 'M081',
  title: 'The Geometry of Inquiry',
  mediumUrl: '',
  axis1: 'INQUIRY-ARCH',
  axis2: 'VOL-CROSS',
  axis3: 'REG-CONST',
  flag: 'M',
  note: '...',
  mirrorUrl: '/essays/canonical/[slug]',
},
```

- `mediumUrl`: Medium URL if published there; empty string if not
- `mirrorUrl`: canonical site route
- `flag`: use `'M'` for mirrored to site
- Append new entries before the closing `]` of the ESSAYS array

---

## 7. Known Repo Facts (update when source changes)

- Framework: Next.js, Pages Router, JavaScript (no TypeScript)
- Deploy: Vercel
- Canonical essays: standalone static files, `pages/essays/canonical/[slug].js`
- Dynamic routes: plates (`pages/system/plates/[slug].js`), doctrine (`pages/system/doctrine/[slug].js`)
- Essay index: `pages/essays/index.js`, ESSAYS array
- Corpus position at last audit: M084, P035, D006
- Content module pattern (`content/essays/`) is legacy/unused — do not introduce

---

## 8. Plate Registration Pattern

Plates are registered in `components/platesData.js` as entries in the `PLATES` array.

**Before registering a new plate:**
- Read `components/platesData.js` tail to confirm the last plate ID and number
- Confirm the next available slot — do not assume from corpus position alone
- Check `PLATES_META.count` at the bottom of the file — update it to match

Entry shape (confirmed from P034, P035):

```js
{
  id: 'P035',
  number: 'XXXV',
  title: 'The Geometry of Restoration',
  slug: 'the-geometry-of-restoration',
  image: '/plates/p035-geometry-of-restoration.png',
  summary: '...',
  governingCondition: '\\text{Differentiation} \\to ...',
  description: '...',
  volume: 'Cross-Volume · Identity · Continuity · Restoration',
  chapter: 'Architecture · Admissible Relationship · Restoration',
  linkedVars: ['xstar', 'phi', 'kauto'],
  linkedGlossary: [
    { label: 'I*', anchor: 'xstar' },
    { label: 'Φ(x)', anchor: 'phi' },
    { label: 'K_auto', anchor: 'kauto' },
  ],
  relatedEssay: 'M084',
},
```

**PLATES_META** — update description text and count together:
```js
export const PLATES_META = {
  count: 35,                          // must match actual plate count
  description: 'Thirty-five plates...', // update prose number to match
  ...
}
```

**Plate image path:** `/public/plates/[filename]` → referenced as `/plates/[filename]` in data
- SVG plates scale to any width without loss — preferred for diagram plates
- PNG plates are raster — confirm dimensions before deploying (read with Python/bash)
- Landscape PNG plates (wider than tall) require the stacked layout (see §9)

**Route:** `/system/plates/[slug]` — dynamic route, no new page file needed.
Plate appears automatically once registered in `components/platesData.js`.

**Bracket balance:** Check `{}`, `()`, `[]` on `components/platesData.js` after every edit.

---

## 9. Plate Layout Architecture

**The plate detail page uses a shared dynamic template:** `pages/system/plates/[slug].js`

Do not create per-plate page files. Registration in `platesData.js` is sufficient.

**Layout:** `styles/globals.css` — `.plateDetailGrid` governs the visual layout.

**Current canonical layout (as of P035 deployment):**

```css
.plateDetailGrid {
  display: flex;
  flex-direction: column;  /* image stacks ABOVE detail panel */
  gap: 2.5rem;
}
```

**Why stacked, not side-by-side:**
- SVG plates scale without constraint at any width
- PNG landscape plates (e.g. P035 at 1536×1024) lose legibility at half-width
- Stacked layout works correctly for all plate types and aspect ratios
- Mobile collapse is automatic — no additional breakpoint needed

**Known failure pattern (do not repeat):**
- Side-by-side grid (`grid-template-columns: 1fr 1fr` or `3fr 2fr`) clips landscape plates
- Looks correct for SVG plates but fails for dense PNG landscape plates
- The fix is `flex / column`, not adjusting grid proportions

**CSS bracket balance:** Check `{}` balance on `styles/globals.css` after every edit.
Check for duplicate rules (e.g. `.plateDetailPanel` appearing twice) after any insertion.

---

---

## 10. Canonical Publication Standard (Three-Layer Architecture)

A canonical essay is not complete when only the written thesis is deployed.

The complete publication consists of three constitutional layers:

**Layer I — Constitutional Thesis**
The complete essay. This remains the authoritative source.

**Layer II — Canonical Compression**
Near the conclusion, provide a brief constitutional compression that distills the
governing architecture into its essential principles. This section should allow readers
to mentally reconstruct the thesis from its compressed form.

Examples:
- Identity remains.
- Reality teaches.
- Governance protects.
- Restoration preserves.
- Development emerges.

**Layer III — Canonical Plate**
Immediately following the compression and before the signature block, embed the
corresponding canonical plate. The plate is not decorative artwork — it is the
geometric compression of the thesis.

*If the essay disappeared, the plate should allow reconstruction of the constitutional architecture.*

The plate therefore becomes part of the essay itself.

**Canonical Closing Order** — all mature canonical essays conclude using this sequence:

1. Constitutional Compression
2. Canonical Plate
3. Signature Block / TFAL
4. Standing State Press Colophon

**Plate Integration Rules:**
- Search for an existing canonical plate before building the essay page
- If one exists, integrate it into the essay
- If no canonical plate exists, preserve the standard layout and register the plate as future work
- Never fabricate a plate
- Never omit an available canonical plate

**Legacy Canonical Upgrade Program:**
Earlier canonical essays should be upgraded to this standard as deployment work occurs.

Priority order: M002, M066, M067, M073, M074, M075, M076, M077, M078, M085, M086, M087, C013, and subsequent canonical essays.

The objective is constitutional consistency, not cosmetic consistency.

---

## 11. Canonical Completeness Audit Checklist

Every deployment must pass this checklist before the zip is delivered:

**Essay Layer**
- [ ] Essay deployed at `pages/essays/canonical/[slug].js`
- [ ] Route resolves: `/essays/canonical/[slug]`
- [ ] Standalone pattern confirmed (no content-module import)
- [ ] Constitutional Compression present near conclusion
- [ ] TFAL present
- [ ] Colophon present (if applicable)

**Plate Layer**
- [ ] Canonical plate identified (existing or registered as future work)
- [ ] Plate embedded in essay (if plate exists)
- [ ] Plate registered in `components/platesData.js` (if new)
- [ ] Plate image at correct path: `public/plates/[filename]`
- [ ] `PLATES_META.count` updated (if new plate)
- [ ] Plate route resolves: `/system/plates/[slug]` (dynamic — no new page file needed)

**Registry Layer**
- [ ] Essay registered in `pages/essays/index.js` ESSAYS array
- [ ] `mediumUrl` field populated or explicitly empty
- [ ] `mirrorUrl` field populated
- [ ] `flag` field set correctly and defined in FLAGS object
- [ ] `note` field: all apostrophes escaped (`\'`) in single-quoted strings

**Navigation Layer**
- [ ] Lineage stated in header and nav footer
- [ ] Previous / Next navigation present
- [ ] Medium mirror status verified (URL or Pending — never invented)
- [ ] Homepage / gate index updated if required

**Verification Layer**
- [ ] Bracket balance verified: `{}` and `()` both 0 on all modified JS files
- [ ] No unrelated files changed
- [ ] Mobile rendering verified (or flagged for post-deploy check)
- [ ] Repository zip regenerated with all changed files at exact repo paths

**Known Failure Patterns (do not repeat)**
- Unescaped apostrophes in single-quoted JS strings (e.g. `Noah's Ark` → `Noah\'s Ark`)
- Content-module import pattern instead of standalone page
- Invented mirror URLs — always mark Pending if URL not supplied
- `flag` value not defined in FLAGS object (silently falls back)
- `PLATES_META.count` not updated after adding a plate
- Zip missing changed files or using wrong repo paths

---

*DD06 — Deployment Doctrine. Read this file before every deployment.*

---

## 12. Registry Separation Doctrine

Two registries govern the Standing State corpus. They are complementary and must not be conflated.

**Constitutional Registry (D-series)**
Records the meaning, principles, and governing architecture of the corpus.
Authority: semantic and constitutional.
Examples: D003 — Admissibility Gate · D005 — I* Guardian Doctrine · D006 — The Doctrine of Constitutional Integration

**Deployment Registry (DD-series)**
Records the engineering procedures that preserve constitutional integrity during implementation.
Authority: operational.
Examples: DD06 — This file

**Rule:** Deployment does not define doctrine. Doctrine does not prescribe implementation details.
One preserves meaning. The other preserves faithful realization.

---

## 13. Known Failure Patterns — Doctrine Page Deployment

When adding entries to `pages/system/doctrine/[slug].js`:

- Entries must be inserted **inside** the `const DOCTRINE_PAGES = { ... }` object — before the closing `}`
- **Known failure pattern:** Python insertion targeting `export default function` marker places the entry **after** the object closes, producing a SyntaxError: `Expected ';', '}' or <eof>`
- **Correct pattern:** Insert before the final `}` of `DOCTRINE_PAGES`, not before `export default`
- Always verify bracket balance AND confirm the new entry position is between `const DOCTRINE_PAGES = {` and its closing `}`
- Check: `content.find('new-slug') < content.find('export default')` is necessary but not sufficient — also verify `content.find('new-slug') < content.find('^}\n\nexport')` (the object close)

*DD06 updated after D006 deployment session.*

