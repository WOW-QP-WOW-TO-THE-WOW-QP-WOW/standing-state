# DD06 — Canonical Deployment Doctrine
# Standing State Press · standingstate.com
#
# Registry Classification: DD06 (Deployment Doctrine)
# D-series reserved for Constitutional Doctrine.
# DD-series reserved for Deployment and Operational Engineering Doctrine.
# Constitutional Doctrine Registry: D003 · D005 · D006
# Deployment Doctrine Registry: DD06

## Purpose

Deploy canonical essays, plates, and doctrine pages to standingstate.com without
rediscovering repository structure each time.

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
- Corpus position at last audit: M089 · C015 · D006 · P046 · 76 Engine 2 modules
- Content module pattern (`content/essays/`) is legacy/unused — do not introduce

---

## 8. Plate Registration Pattern

Plates are registered in `components/platesData.js` as entries in the `PLATES` array.

**Before registering a new plate:**
- Read `components/platesData.js` tail to confirm the last plate ID and number
- Confirm the next available slot — do not assume from corpus position alone
- Check `PLATES_META.count` at the bottom of the file — update it to match

Entry shape (confirmed from P044–P046):

```js
{
  id: 'P046',
  number: 'XLVI',
  title: 'The Doctrine of Constitutional Integration',
  slug: 'constitutional-integration',
  image: '/plates/p046-constitutional-integration.png',
  summary: '...',
  governingCondition: '...',
  description: '...',
  volume: 'Cross-Volume · ...',
  chapter: 'Doctrine · ...',
  linkedVars: ['xstar', 'phi'],
  linkedGlossary: [
    { label: 'I*', anchor: 'xstar' },
    { label: 'Φ(x; I*)', anchor: 'phi' },
  ],
  relatedEssay: 'D006',
},
```

**PLATES_META** — update description text and count together:
```js
export const PLATES_META = {
  count: 46,                           // must match actual plate count
  description: 'Forty-six plates...',  // update prose number to match
  ...
}
```

**Plate image path:** `/public/plates/[filename]` → referenced as `/plates/[filename]` in data
- PNG plates are raster — confirm dimensions before deploying
- Landscape PNG plates (wider than tall) use stacked layout (see §9)

**Route:** `/system/plates/[slug]` — dynamic route, no new page file needed.
Plate appears automatically once registered in `components/platesData.js`.

**Bracket balance:** Check `{}`, `()`, `[]` on `components/platesData.js` after every edit.

---

## 9. Plate Layout Architecture

**The plate detail page uses a shared dynamic template:** `pages/system/plates/[slug].js`

Do not create per-plate page files. Registration in `platesData.js` is sufficient.

**Layout:** `styles/globals.css` — `.plateDetailGrid` governs the visual layout.

**Current canonical layout:**

```css
.plateDetailGrid {
  display: flex;
  flex-direction: column;  /* image stacks ABOVE detail panel */
  gap: 2.5rem;
}
```

**Why stacked, not side-by-side:**
- PNG landscape plates lose legibility at half-width
- Stacked layout works correctly for all plate types and aspect ratios
- Mobile collapse is automatic

**Known failure pattern (do not repeat):**
- Side-by-side grid clips landscape plates
- The fix is `flex / column`, not adjusting grid proportions

---

## 10. Canonical Publication Standard (Three-Layer Architecture)

A canonical essay is not complete when only the written thesis is deployed.

**Layer I — Constitutional Thesis**
The complete essay. Authoritative source.

**Layer II — Canonical Compression**
Near the conclusion, a brief constitutional compression distilling the governing
architecture into essential principles.

**Layer III — Canonical Plate**
The companion plate is not decorative — it is the geometric compression of the thesis.

**Canonical Template — established this session:**

```
Classification block
↓
Companion Plate (full width) + Caption
↓
Abstract
↓
Essay body
↓
Constitutional Compression
↓
TFAL
↓
Colophon / Signature block
```

**Plate position rule:** The plate renders BEFORE the Abstract, not at the close.
The plate is the visual authority layer — a co-primary encoding, not an illustration.
The reader sees the full structural map before entering the detailed exposition.

**Caption standard:**
```
[Plate ID] · [Title] · Companion architectural plate.
The visual authority layer compresses the governing structure developed
throughout this essay. View full plate →
```

**Plate Integration Rules:**
- Search for an existing canonical plate before building the essay page
- If one exists, integrate it before the Abstract
- If no canonical plate exists, preserve the standard layout and register as future work
- Never fabricate a plate · Never omit an available canonical plate

**Corpus plate upgrade status:**
- M002 P044 ✅ · M057 P026 ✅ · M085 P043 ✅ · M086 P038 ✅
- M087 P039 ✅ · C013 P037 ✅ · C015 P045 ✅ · D006 P046 ✅
- Pending: M066 · M067 · M073 · M074–M078

---

## 11. Canonical Completeness Audit Checklist

Every deployment must pass this checklist before the zip is delivered:

**Essay Layer**
- [ ] Essay deployed at `pages/essays/canonical/[slug].js`
- [ ] Route resolves: `/essays/canonical/[slug]`
- [ ] Standalone pattern confirmed (no content-module import)
- [ ] Companion plate present BEFORE the Abstract
- [ ] Canonical caption present beneath plate
- [ ] Constitutional Compression present near conclusion
- [ ] TFAL present
- [ ] Colophon present (if applicable)

**Plate Layer**
- [ ] Canonical plate identified (existing or registered as future work)
- [ ] Plate embedded before Abstract (if plate exists)
- [ ] Caption formatted correctly
- [ ] Plate registered in `components/platesData.js` (if new)
- [ ] Plate image at correct path: `public/plates/[filename]`
- [ ] `PLATES_META.count` updated (if new plate)
- [ ] Plate route resolves: `/system/plates/[slug]`

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

**Verification Layer**
- [ ] Bracket balance verified: `{}` and `()` both 0 on all modified JS files
- [ ] No unrelated files changed
- [ ] Mobile rendering verified (or flagged for post-deploy check)
- [ ] Repository zip regenerated with all changed files at exact repo paths

**Known Failure Patterns (do not repeat)**
- Unescaped apostrophes in single-quoted JS strings
- Content-module import pattern instead of standalone page
- Invented mirror URLs — always mark Pending if URL not supplied
- `flag` value not defined in FLAGS object (silently falls back)
- `PLATES_META.count` not updated after adding a plate
- Zip missing changed files or using wrong repo paths
- **Plate after Abstract** — plate must be BEFORE the Abstract per canonical template

---

## 12. Doctrine Page Deployment

**Route:** `/system/doctrine/[slug]` — dynamic route via `pages/system/doctrine/[slug].js`

**Registration:** Entries go inside `const DOCTRINE_PAGES = { ... }` in `[slug].js`
AND as cards in `pages/system/doctrine/index.js` DOCTRINE_ITEMS array.

**Entry shape:**
```js
'doctrine-slug': {
  id: 'D006',
  title: 'The Doctrine of Constitutional Integration',
  subtitle: 'The Syntheos Effect · ...',
  eyebrow: 'Constitutional Doctrine',
  axis1: 'ENGINE-2',
  axis2: 'VOL-CROSS',
  axis3: 'REG-CONST',
  equation: '...',
  intro: '...',
  thesis: '...',
  executionConditions: [...],
  body: [...],
  principles: [{ label: '...', text: '...' }],
  canonicalLineage: [{ id: '...', title: '...', route: '...' }],
  crossLinks: [{ label: '...', route: '...' }],
  plateImage: '/plates/p046-constitutional-integration.png',
  plateSlug: 'constitutional-integration',
  pdfHref: null,
},
```

**Plate rendering in doctrine template:**
- Template renders `{item.plateImage && ...}` conditionally — no template change needed
- Plate renders at BOTTOM of doctrine page (after crossLinks, before author)
- This is the INVERSE of the essay standard (essays: plate before Abstract; doctrine: plate at bottom)

**Known failure pattern — CRITICAL:**
Python insertion targeting `export default function` as marker places entry AFTER
the object closes, producing: `SyntaxError: Expected ';', '}' or <eof>`

**Correct insertion:**
```python
# Find the last entry's pdfHref: null,\n  },
# Insert D006 block BEFORE the closing } of DOCTRINE_PAGES
old_close = "    pdfHref: null,\n  },\n}\n"  # last entry before object close
new_close = "    pdfHref: null,\n  },\n\n  'new-slug': { ... },\n}\n"
```

**Verification after insertion:**
```python
pages_open = content.find("const DOCTRINE_PAGES = {")
pages_close = content.find("\nexport default function")
new_entry_pos = content.find("'new-slug'")
assert pages_open < new_entry_pos < pages_close  # must be TRUE
```

Also check for double comma `},,` after insertion — fix to `},`.

---

## 13. Registry Separation Doctrine

Two registries govern the Standing State corpus. They are complementary and must not be conflated.

**Constitutional Registry (D-series)**
Records the meaning, principles, and governing architecture of the corpus.
Authority: semantic and constitutional.
- D003 — The Admissibility Gate
- D005 — The I* Guardian Doctrine
- D006 — The Doctrine of Constitutional Integration

**Deployment Registry (DD-series)**
Records the engineering procedures that preserve constitutional integrity during implementation.
Authority: operational.
- DD06 — This file

**Three-layer corpus architecture:**

| Layer | Prefix | Question answered | Authority |
|---|---|---|---|
| Essays | M / C / SA | What does this jurisdiction reveal? | Semantic · Exploratory |
| Constitutional Doctrine | D | What governs? | Semantic · Constitutional |
| Deployment Doctrine | DD | How is it faithfully realized? | Operational · Engineering |

**Rule:** Deployment does not define doctrine. Doctrine does not prescribe implementation details.
One preserves meaning. The other preserves faithful realization.

---

## 14. Engine 2 Runtime Registry

Engine 2 is a Python runtime at `standing_state_243_usb/` — not in the web repo.
Web repo contains only dashboard pages and visual artifacts.

**Current runtime status:**
- Module count: 76
- Suite: ENGINE_2_GOVERNANCE_STACK_PASS
- Navigation: ENGINE_2_M089_NAVIGATION_STACK_PASS
- Constitutional admission: ENGINE_2_CONSTITUTIONAL_ADMISSION_PASS

**Constitutional admission module (Module 76):**
```
engine2_constitutional_admission_243.py
Status: PASS
Category: Constitutional Admission
Sequence: D005 → D003 → D006
```

**Constitutional operating order (runtime):**
```
D005 — IStarGuardian.evaluate()              Constitutional authority
D003 — AdmissibilityGate.test()              Constitutional boundary
D006 — ConstitutionalIntegrationEngine.execute()  Constitutional execution
```

**Historical registration order (doctrine numbering):**
```
D003 → D005 → D006
(Records emergence, not operation)
```

**Dashboard update pattern:**
To register a new module, add entry to the MODULES list in `engine2_dashboard_243.py`
and update the count variable (search for `MODULE_COUNT`, `ENGINE_2_RUNTIME_MODULES`,
or the count tuple — pattern varies; grep for the current count to locate).

---

## 15. CSS Class Existence Verification (Silent-Fallback Defect)

**Provenance:** M044 Updated Edition deployment. This section records a defect
that was reproduced, not theorized.

**The defect.** The former M044 body used the classes `essayBody`, `essayP`,
`essayH2`, `essayH3`, `essayEq`, `essayEqBoxed`, `essaySignature`. **None of
these exist in `styles/globals.css`.** The page still rendered — with unstyled
browser defaults, no content-width control, and excessive line wrapping on
mobile. The header classes (`glossHeader`, `glossH1`) *did* exist, so the top of
the page looked correct while the body was broken. The failure presented as a
"mobile wrapping bug" but the actual cause was that **the body's entire class
layer was absent from the stylesheet.**

**Why the existing checklist missed it.** Bracket balance passes, JSX parses,
the route resolves, the build (if run) succeeds — a page referencing
non-existent CSS classes is valid JavaScript and valid React. Nothing in the
prior checklist inspects whether the classes a page *uses* are classes that
*exist*. A green structural check is not a green visual check.

**Required verification — run before declaring any essay/page deployment complete:**

```bash
# Extract every className token used in the page
grep -oE 'className="[^"]*"' pages/essays/<path>.js \
  | sed -E 's/className="([^"]*)"/\1/' | tr ' ' '\n' | sort -u \
  > /tmp/used_classes.txt

# For each, confirm a definition exists in globals.css
while read cls; do
  [ -z "$cls" ] && continue
  n=$(grep -c "\.$cls\b" styles/globals.css)
  [ "$n" -eq 0 ] && echo "MISSING: .$cls"
done < /tmp/used_classes.txt
```

**Rule:** Every `className` token a page uses must resolve to a definition in
`styles/globals.css` (or an inline `style={{}}`). Any `MISSING:` line is a
blocking defect. **Migrate to a class layer that exists — do not invent new
CSS.** The canonical body layer known to exist and to be mobile-responsive is:
`canonEssay`, `canonEssayWrap`, `canonEssayHeader`, `canonEssayThesis`,
`plateDetailBlock`, `plateDetailBlockLabel`, `canonEssayBody`, `canonEssayPara`,
`canonEssayEqBlock`, `canonEssayEq`, `canonEssayAuthor`, `canonEssayNav`,
`canonNavLink`, `canonNavPrev`, `canonNavNext`, `canonNavIndex`.

**Known failure pattern:** the legacy `essay*` body class family
(`essayBody` / `essayP` / `essayH2` / `essayEq` / `essaySignature`) is NOT
defined in the current stylesheet. Any page still using it is rendering
unstyled. Treat its presence as a migration trigger.

---

## 16. Verification Honesty — Name What Was Not Run

**Provenance:** M044 deployment, performed in an environment where
`node_modules` was absent and network egress was disabled.

**The distinction.** `python -m py_compile` compiles Python; it does not build
Next.js. Bracket balance and a JSX structural parse detect structural breakage;
they are **not** `next build`. A deployment run may be unable to execute the
real build. When it cannot, the report must say so — an unrun check is reported
as PENDING, never silently as PASS.

**Required in every §4 Validation Report — the verification-tier line:**

- State the toolchain actually available (`node_modules` present/absent;
  network on/off).
- For each verification, mark which tier it reached:
  - `COMPILED` — real `next build` / `npm run build` executed and passed
  - `STRUCTURAL` — bracket balance + JSX parse only (build not run)
  - `PENDING` — could not be run in this environment; names the blocker
- If the build was not run, the deployment is `STRUCTURAL — build PENDING`,
  and the report must state: "Run `npm run build` locally before deploy."

**Rule (extends §3 Failure Rule):** Do not report a verification tier higher
than the one actually reached. "Bracket balance PASS" and "build PASS" are
different claims. Reporting the first as if it were the second is the deployment
equivalent of certifying internal integrity as external validation — the exact
error the constitutional corpus forbids.

**Adversarial-coverage caveat.** A self-authored test suite that goes green
proves the code resists the failures its author anticipated. It does not
establish that those are the failures that matter. Report a green suite as
"internally verified as tested by its author," not as "verified." Independent
adversarial coverage requires a reviewer outside the authoring loop and is
always `PENDING` until one exists.

---

## 17. Metadata Override Mechanism (Per-Page OG / Twitter)

**Provenance:** M044 metadata-defect fix.

**The mechanism, stated exactly.** `pages/_document.js` emits site-default
`og:*` and `twitter:*` tags via `next/document`'s `<Head>`. Those defaults
**do not carry `key=` attributes.** Tags emitted from a page via `next/head`
are **not** deduplicated against `next/document` tags. Consequence: a page that
adds its own `og:title` produces the page value AND the default value in the
rendered `<head>`. Most crawlers resolve duplicates by last-wins, and
`next/head` tags render after `_document` tags — so the per-page value is the
one scrapers pick up.

**What this means for a deployment:**

- Setting page-specific `og:title`, `og:description`, `og:image`, `twitter:*`,
  and a `<link rel="canonical">` in the page's `next/head` **is** the working
  fix. It matches every existing per-page-OG essay in the corpus.
- Adding `key=` attributes to the page tags is harmless but **not** the
  load-bearing mechanism here — the repo relies on last-wins, not key-dedup,
  because `_document` has no matching keys. Do not report the fix as a clean
  key-based override; report it as "per-page tags, last-wins over unkeyed
  document defaults."
- **Verify the OG image path resolves to a real file** under `public/` before
  deploying (`ls -la public/plates/<file>.png`). A per-page `og:image` pointing
  at a missing file is worse than the default.

**Site-wide fix (do NOT bundle into a single-page deployment).** The clean
resolution — adding matching `key` attributes to the `_document.js` defaults so
`next/head` genuinely dedupes them — touches a shared file affecting every page.
It is a deliberate, separately-reviewed commit, not an unreviewed rider on an
essay migration. Flag it; do not silently make it.

---

## 18. Route Compatibility Is Load-Bearing

**Provenance:** M044. The task described migrating a "medium-style" page to the
"DD06 essay layout." The DD06 canonical pattern lives at
`pages/essays/canonical/[slug].js`. The literal reading — move the file to
`canonical/` — would have **broken three inbound links**: the ESSAYS-array
`mirrorUrl`, the page's own self-reference, and an inbound link from
`pages/system/glossary/admissibility-delta.js`.

**Rule:** "Migrate to the DD06 layout" means migrate the *layout* (the body
class architecture, the editorial structure), **in place**, at the existing
route — unless a route change is explicitly requested AND every inbound
reference is updated in the same patch. Before any file move, run:

```bash
grep -rln "<existing-route-without-leading-slash>" pages/ components/ data/
```

Every hit is a link that breaks on a move. If the count is nonzero and the move
is not explicitly authorized with those references included in the changed-files
list, keep the route and migrate the layout in place.

---

## 19. Updated-Edition Migration Checklist (Historical Artifact, Present Annotation)

**Provenance:** M044. For migrating a historical essay to current layout while
preserving — not rewriting — its original inquiry.

- [ ] Original argument and voice preserved where architectural or rhetorical
- [ ] Wording amended ONLY where it implied: demonstrated universal law,
      completed execution, established cross-domain mechanism, or validated
      safety primitive
- [ ] Editorial Notice present, before the Constitutional Abstract, dating the
      original and clarifying present standing
- [ ] Constitutional Abstract present, stating candidate vs demonstrated status
- [ ] Registration Notes present: Historical / Architectural / Operational /
      Referential status each stated separately
- [ ] Cross-domain claims labeled `CANDIDATE_CORRESPONDENCE — EXPLICIT
      MECHANISM MAPPING REQUIRED`, not asserted as established
- [ ] References to later maturation (Engine 2, SA-018, Package 244A, etc.)
      indicate lineage only — never imply the historical essay executed them
- [ ] Body migrated to a class layer that exists (§15)
- [ ] Route preserved; inbound links intact (§18)
- [ ] Metadata per-page and image-verified (§17)
- [ ] Verification tier reported honestly (§16)
- [ ] Diff confirms only intended files changed

**Governing objective:** preserve the inquiry, clarify the tense, accurately
label the maturity. Historical legitimacy, present accuracy, and current
canonical standing are three separate verdicts on one artifact; an Updated
Edition records all three without collapsing them.

---

*DD06 — Deployment Doctrine. Read this file before every deployment.*
*Updated: Constitutional trilogy session — D003 replacement · D006 deployment · C015 · M057 · canonical plate template · Engine 2 Module 76.*
*Updated: M044 Updated-Edition session — §15 CSS class-existence verification · §16 verification-honesty tiers · §17 metadata override mechanism · §18 route compatibility · §19 Updated-Edition checklist. Each section traces to a defect reproduced during the M044 deployment, not to prediction.*
