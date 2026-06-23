# D006 — Canonical Essay Deployment Doctrine
# Standing State Press · standingstate.com

## Purpose

Deploy canonical essays and plates to standingstate.com without rediscovering repository
structure each time.

Core command: **Read DEPLOYMENT_DOCTRINE.md and execute.**

---

## 1. Source Before Action

Before writing any file, read the following from the current source zip:

- `pages/essays/index.js` — understand the ESSAYS array structure and insertion point
- `components/canonicalEssaysData.js` — determine whether new essay needs an entry here (see §6b)
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
- [ ] `components/canonicalEssaysData.js` audited — entry added only if essay uses data-driven render (see §6b)
- [ ] Registry/metadata updated if repo uses one (`data/essays/`)
- [ ] Read / Site / Mirror / Plate (if applicable) / Lineage navigation present in header
- [ ] Mirror status audited (use repo metadata URL if present; mark Pending if not; never invent a URL)
- [ ] Plate link added to header if companion plate exists
- [ ] Semantic boundaries preserved:
  - `article#canonical-essay` (or `article className="canonEssay"`)
  - `h1#essay-title` (or `h1 className="glossH1"`)
  - `section#essay-body`
- [ ] Reader markers preserved if used by repo:
  - `<span id="essay-reader-start" aria-hidden="true" />`
  - `<span id="essay-reader-end" aria-hidden="true" />`
- [ ] Lineage stated in header and nav footer
- [ ] No unrelated files changed
- [ ] Bracket balance verified: `{}`, `()`, and `[]` all 0 on all modified JS files
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
- canonicalEssaysData.js updated (yes / no / not applicable — reason stated)
- Registry updated (yes / no / not applicable)
- Mirror status (URL or Pending — source cited)
- Plate registered (yes / no / not applicable — P-number if yes)
- Lineage confirmed (full chain)
- Reader markers confirmed (present / absent)
- Semantic boundaries confirmed (present / absent)
- Bracket balance (pass / fail — all three: `{}`, `()`, `[]`)
- Zip filename
- Assumptions made (explicit list)

---

## 5. Packaging Convention

Zip name: `standing_state_[essay_id_or_slug]_deployment_patch.zip`

For version updates to an existing essay (e.g. text revision after initial deployment):
Zip name: `standing_state_[essay_id]_v[N]_update_patch.zip`

**Multi-patch sequencing:** When a deployment produces more than one ZIP (e.g. initial
registration patch + subsequent text update), state the required application order
explicitly in the validation report. Patches must be applied in the order produced.
A later patch applied first may conflict with or overwrite the registration the first patch
was intended to establish.

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

**Valid axis3 values observed in corpus:**
- `'REG-STRUCT'` — canonical structural essay
- `'REG-CONST'` — construct (CONSTRUCT status, OPEN verification)
- `'REG-INQUIRY'` — inquiry / ASK-register essay (MD-series)
- `'REG-MATH'` — mathematical appendix

---

## 6b. canonicalEssaysData.js — When to Add an Entry

`components/canonicalEssaysData.js` is a **data registry** used by data-driven essay renders.

**Do NOT add an entry** when the essay uses a standalone static page file
(`pages/essays/canonical/[slug].js`). Most canonical essays from M073 onward use
static pages with `override: true` or no entry at all in canonicalEssaysData.js.

**DO add an entry** only if the essay is rendered through the data-driven template
(older essays that import from canonicalEssaysData).

**How to determine which pattern applies:**
1. Check whether the essay's slug already has a file in `pages/essays/canonical/`
2. If yes → static page pattern → no canonicalEssaysData.js entry needed
3. If no → check whether a data-driven render path exists → add entry only then

When in doubt, read the existing canonicalEssaysData.js tail and compare the most recent
entries. Entries with `override: true` or `mirrorUrl` only are index references, not
data-driven renders.

---

## 7. Known Repo Facts (update when source changes)

- Framework: Next.js, Pages Router, JavaScript (no TypeScript)
- Deploy: Vercel
- Canonical essays: standalone static files, `pages/essays/canonical/[slug].js`
- Dynamic routes: plates (`pages/system/plates/[slug].js`), doctrine (`pages/system/doctrine/[slug].js`)
- Essay index: `pages/essays/index.js`, ESSAYS array
- **Corpus position at last audit: M085, C013, P037, D006** ← update this after every deployment
- Content module pattern (`content/essays/`) is legacy/unused — do not introduce

**Deployment history (most recent first):**
- Session ending 2026-06-22: M085 (canonical), C013 v2 update (construct), P037 (plate)
- Prior session: C013 initial (construct), P036 (plate), MD68 (inquiry)
- Prior session: M084 (canonical), P035 (plate)

---

## 8. Plate Registration Pattern

Plates are registered in `components/platesData.js` as entries in the `PLATES` array.

**Before registering a new plate:**
- Read `components/platesData.js` tail to confirm the last plate ID and number
- Confirm the next available slot — do not assume from corpus position alone
- Check `PLATES_META.count` at the bottom of the file — update it to match
- Confirm plate image dimensions: portrait (taller than wide) or landscape (wider than tall)

Entry shape (confirmed from P034, P035, P037):

```js
{
  id: 'P037',
  number: 'XXXVII',
  title: 'The Seventh Flame and the Threshold of Syntheos',
  slug: 'the-seventh-flame-and-the-threshold-of-syntheos',
  image: '/plates/p037-seventh-flame-syntheos.png',
  summary: '...',
  governingCondition: '\\text{Differentiation} \\to ...',
  description: '...',
  volume: 'Cross-Volume · Identity · Coherence · Emergence',
  chapter: 'Gradient of Consciousness · Phase-Lock · Emergence Inquiry',
  linkedVars: ['xstar', 'phi'],
  linkedGlossary: [
    { label: 'I*', anchor: 'xstar' },
    { label: 'Φ(x)', anchor: 'phi' },
  ],
  relatedEssay: 'C013',
},
```

**PLATES_META** — update description text and count together:
```js
export const PLATES_META = {
  count: 37,                           // must match actual plate count
  description: 'Thirty-seven plates...', // update prose number to match
  ...
}
```

**Plate image path:** `/public/plates/[filename]` → referenced as `/plates/[filename]` in data
- SVG plates scale to any width without loss — preferred for diagram plates
- PNG plates are raster — confirm dimensions before deploying (read with Python/bash)
- Portrait PNG plates (taller than wide, e.g. P037 at 1024×1536) work correctly with stacked layout
- Landscape PNG plates (wider than tall, e.g. P035 at 1536×1024) also require stacked layout

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
- PNG portrait plates (e.g. P037 at 1024×1536) render correctly in stacked layout
- Stacked layout works correctly for all plate types and aspect ratios
- Mobile collapse is automatic — no additional breakpoint needed

**Known failure pattern (do not repeat):**
- Side-by-side grid (`grid-template-columns: 1fr 1fr` or `3fr 2fr`) clips landscape plates
- Looks correct for SVG plates but fails for dense PNG landscape plates
- The fix is `flex / column`, not adjusting grid proportions

**CSS bracket balance:** Check `{}` balance on `styles/globals.css` after every edit.
Check for duplicate rules (e.g. `.plateDetailPanel` appearing twice) after any insertion.

---

## 10. Essay Classification Reference

| axis3 value | Classification | Verification State |
|---|---|---|
| `REG-STRUCT` | CANONICAL | Established |
| `REG-CONST` | CONSTRUCT | OPEN |
| `REG-INQUIRY` | INQUIRY / ASK | OPEN |
| `REG-MATH` | Mathematical Appendix | Per parent essay |

**ID series conventions observed in corpus:**
- `M0xx` — Main essay series
- `MD0x` — Mathematical / Metaphysical Development inquiry
- `C0xx` — Constitutional / coherence inquiry series
- `P0xx` — Plates

**DI (Dependent Inquiry) notation:** When an essay carries a dependency on an open inquiry,
record it as `DI: [SA-id] V-[version]` in the essay header comment and in the ESSAYS array
`note` field. Example: `DI: SA-003 V-001` (M085 depends on SA-003's information/differentiation
question without requiring its resolution).

---

*D006 updated after M085/C013/P037 deployment session (2026-06-22). Read this file before every deployment.*
