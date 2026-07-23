# SA-020 — DD06 Deployment Manifest

**Artifact:** SA-020 — The Lawful Unpacking of Wisdom
**Subtitle:** An Open Constitutional Inquiry into Intelligence, Reality Contact, and the Governance of Arrival
**Author:** Leon Powdar (Phase Reference)
**Publisher:** Standing State Press
**Package:** `standing-state-sa020-dd06-deployment.zip`
**Governing doctrine:** `DEPLOYMENT_DOCTRINE 4.md` (see Appendix B)

---

## 1. Terminal classification

```
REGISTRATION COMPLETE
STRUCTURAL VERIFICATION PASS
BUILD PENDING
LIVE REALITY CONTACT PENDING
REALITY VERDICT PENDING
IDENTITY PRESERVED
INQUIRY CONTINUES
```

This deployment is **NOT closed as complete.** Source structure passing is not
deployment. Build and live verification remain outstanding.

---

## 2. Routes

| Item | Value |
|---|---|
| Final public essay route | `/essays/canonical/the-lawful-unpacking-of-wisdom` |
| Final plate route | `/system/plates/the-path-of-constitutional-inquiry` |
| Plate ID | **P056** |
| Roman numeral | **LVI** |
| Plate title | The Path of Constitutional Inquiry |

---

## 3. Constitutional status

```
DOCUMENT ID      : SA-020
SERIES           : SA-Series · Synthesis Inquiry
CLASSIFICATION   : CONSTRUCT · OPEN INQUIRY
STATUS           : CANDIDATE CONSTITUTIONAL INQUIRY
REGISTRATION     : COMPLETE
REALITY VERDICT  : PENDING
IDENTITY         : PRESERVED
INQUIRY          : CONTINUES
```

Registration records lawful entry into the corpus. It does not record that
reality has confirmed the candidate architecture. These remain separate acts.

---

## 4. Modified files (repo-relative)

| Path | Action | Detail |
|---|---|---|
| `pages/essays/canonical/the-lawful-unpacking-of-wisdom.js` | **NEW** | SA-020 canonical essay page |
| `pages/essays/index.js` | **MODIFIED** | SA-020 appended to ESSAYS array (+11 / -0) |
| `components/platesData.js` | **MODIFIED** | P056 appended; `PLATES_META.count` 55 to 56; prose Fifty-five to Fifty-six (+20 / -2) |
| `public/plates/p056-the-path-of-constitutional-inquiry.png` | **HELD — NOT PACKAGED** | see section 5 |

No other repository file is touched. Confirmed by full recursive diff.

---

## 5. PLATE ASSET HELD — BLOCKING

**The plate raster is deliberately excluded from this package.**

The supplied source image carries the embedded placeholder **`PLATE POXX`** in its
top-left badge, baked into the image pixels. Per the governing instruction —
do not publish that placeholder — the asset is **not** included in this ZIP so
that it cannot reach production by accident.

A font patch was attempted and **rejected**: the available serif faces do not match
the Cinzel-like display face; the result showed wrong letterspacing, flat fill, and a
visible patch rectangle. It was a degradation of the visual authority layer, not a
repair. It was discarded. **No claim of correction is made.**

### Required action before publication

Install the corrected raster at exactly:

```
public/plates/p056-the-path-of-constitutional-inquiry.png
```

The corrected image must read **`PLATE P056 · LVI`**.

### Re-run after installing the corrected asset

1. File existence at the exact path above
2. Image dimensions (source was 1024 x 1536, portrait, RGB)
3. Registry reference — `components/platesData.js` entry `image: '/plates/p056-the-path-of-constitutional-inquiry.png'`
4. Page reference — SA-020 `img src="/plates/p056-the-path-of-constitutional-inquiry.png"`
5. Metadata image reference — `og:image` and `twitter:image` absolute URLs
6. Placeholder scan — `P0XX` and `POXX` must return zero, including inside the raster
7. ZIP manifest verification — asset present, SHA-256 recomputed

### Consequence while held

All repository-side references — filename, caption, alt text, registry entry,
metadata — already use the correct **P056 / LVI** designation. Only the image
interior is wrong. Until the corrected file is installed at that path, the plate
route and the essay plate figure will render a missing image. **Essay and plate
publication are therefore held together.**

---

## 6. Structural validation results

Toolchain: `node_modules` **ABSENT** · network egress **OFF**.

| Check | Result |
|---|---|
| Bracket balance — 3 modified JS files | `{}` 0 · `()` 0 · `[]` 0 |
| JSX structural parse (attribute strings stripped) | 0 unclosed tags, 0 errors |
| DD06 section 15 CSS class-existence (SA-020) | **0 missing** |
| Internal link verification | 17 of 17 resolve |
| Essay-index registration | Present, `mirrorUrl` correct, `flag: 'M'` defined in FLAGS |
| Plate registry entry | P056 / LVI present; `PLATES_META.count` = 56 |
| Metadata key alignment vs `_app.js` | 6 of 7 overridden; `title` inherits by design |
| Placeholder scan (page + registry) | 0 hits |
| Forbidden verdict terms (ADMITTED / PASS / VALIDATED) | Absent |
| Required phrase — not presented as a conclusion established by this inquiry | Present |
| Unrelated files changed | None |
| Note-field apostrophes in single-quoted strings | None used |

**Verification tier achieved: `STRUCTURAL`.**

---

## 7. Build status

```
next build / npm run build : NOT RUN — PENDING
Blocker                    : node_modules absent, network egress disabled
```

**Run `npm run build` locally before deploy.** Bracket balance and JSX parse are
not a build. Per DD06 section 16, an unrun check is reported as PENDING, never as PASS.

---

## 8. Live-verification status

```
LIVE REALITY CONTACT : PENDING
```

Not yet performed and not performable from the build environment. After deploy:

- Fetch the live essay route and inspect the **rendered production head**.
  Confirm `og:title`, `og:description`, `og:image`, `twitter:*` show the **SA-020**
  values, not the site defaults. Per DD06 section 17 the rendered production head is
  the final verification surface; a green local build does not establish it.
- Confirm the **actual share card** renders the P056 plate and the SA-020 title.
  The share card is the governing surface for Open Graph behaviour.
- Confirm mobile rendering: readable paragraph measure, plate scaling, block labels
  styled rather than unstyled fallback.
- Confirm the plate route resolves and the plate image loads.

---

## 9. Remaining reality-contact steps

1. Install corrected P056 raster (section 5) — **blocking**
2. `npm run build` locally — **blocking**
3. Deploy
4. Verify rendered production head on the live essay route
5. Verify actual share-card render
6. Verify plate route and image load
7. Verify mobile layout on device
8. Only then may BUILD PENDING and LIVE REALITY CONTACT PENDING be cleared

**REALITY VERDICT remains PENDING regardless.** Deployment verification concerns
whether the artifact renders as intended. It does not and cannot establish
correspondence of the candidate constitutional architecture. Those are separate
jurisdictions.

---

# APPENDIX A — Audit finding recorded, NOT remediated in this patch

**DD06 section 2 prescribes CSS classes absent from the stylesheet.**

Running the DD06 section 15 class-existence verifier against
`pages/essays/canonical/wisdom-in-the-age-of-artificial-intelligence.js`
(C021 — the newest deployed canonical essay and the nominal reference
implementation) returns **10 missing classes**:

```
canonEssayBlock      canonEssayLabel
essaySignature       essaySigBlock       essaySigName
essaySigRole         essaySigRule        essaySigMeta
essaySigTags         essaySigAxiom
```

`canonEssayBlock` and `canonEssayLabel` are named by **DD06 section 2 itself** as
required canonical vocabulary. They are not defined in `styles/globals.css`. C021 is
therefore rendering those blocks with unstyled browser fallback — the same
silent-fallback defect class that section 15 was written to catch.

**SA-020 does not use that vocabulary.** It uses the verified M044/DD06 rendering
set (`plateDetailBlock`, `plateDetailBlockLabel`, `canonEssayBody`, `canonEssayPara`,
`canonEssayEqBlock`, `canonEssayEq`, `canonEssay`, `canonEssayWrap`, `canonEssayNav`,
`canonNavLink`), whose live rendering was confirmed on device. SA-020 returns
**0 missing classes**.

**No remediation is performed here.** C021 and `styles/globals.css` are NOT modified
by this package. Remediation — either defining the missing classes or migrating the
affected essays — is a separately governed repository-maintenance action. SA-020
does not absorb unrelated remediation jurisdiction.

---

# APPENDIX B — Doctrine versioning warning (no files modified)

The repository contains **two** deployment-doctrine files whose filename numbering
does not track their content:

| File | Section 17 content | Standing |
|---|---|---|
| `DEPLOYMENT_DOCTRINE 4.md` | **Corrected** section 17 — records the last-wins claim as `REASONED_NOT_VERIFIED — REFUTED BY PRODUCTION` and states the coordinated-key mechanism | **PRESENTLY GOVERNING** |
| `DEPLOYMENT_DOCTRINE 6.md` | **Superseded** section 17 — still asserts the withdrawn last-wins mechanism | **SUPERSEDED (section 17 only)** |

The two files are otherwise identical; they diverge **only** in section 17.

**Neither file is erased and neither is modified by this package.** This is a
manifest-level warning only, per the archive-never-delete rule. A reader who
opens `DEPLOYMENT_DOCTRINE 6.md` will find withdrawn doctrine presented as current.

Recommended as a **separately governed repository-maintenance action** — not
performed here, so that SA-020 does not absorb unrelated jurisdiction:

- add an explicit supersession header inside `DEPLOYMENT_DOCTRINE 6.md` section 17, and/or
- rename so the governing file is unambiguous, preserving both under lineage.

---

*Registration is complete. Reality contact is not. The destination remains before us.*
