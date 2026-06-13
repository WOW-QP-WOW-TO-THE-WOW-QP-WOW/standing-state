/*
 * MERGE SNIPPET — DO NOT DROP THIS FILE INTO pages/ AS-IS.
 *
 * Target file (already exists, do NOT overwrite):
 *   pages/essays/canonical/the-geometry-of-inquiry.js
 *
 * Goal: merge the semantic reader markup below into the existing
 * page's JSX, around the existing essay content, WITHOUT replacing
 * the existing content/layout/imports.
 *
 * Steps:
 *
 * 1. Add this import near the top of the existing file:
 *
 *      import Link from "next/link"; // JS, no types
 *
 * 2. Wrap the essay's root content in <article id="canonical-essay">
 *    with schema.org Article itemScope/itemType, as shown below.
 *
 * 3. Wrap the title in <header>, give the <h1> id="essay-title" and
 *    itemProp="headline". Give the author element itemProp="author".
 *
 * 4. Add the "Listen / Reader Mode" link inside the header.
 *
 * 5. Insert <span id="essay-reader-start" aria-hidden="true" />
 *    immediately before the essay body content begins.
 *
 * 6. Wrap the essay body paragraphs in
 *    <section id="essay-body" itemProp="articleBody"> ... </section>
 *
 * 7. Insert <span id="essay-reader-end" aria-hidden="true" />
 *    immediately after the essay body content ends.
 *
 * 8. Leave everything else (nav, footer, related posts, cards,
 *    share buttons, sidebar) exactly where it is — these are
 *    excluded from the reader stream via the manifest's `exclude`
 *    selectors and via the separate /listen route, not by removing
 *    them from the canonical page.
 *
 * -----------------------------------------------------------------
 * Example shape after merging (illustrative — adapt to the existing
 * file's actual structure, components, and styling):
 * -----------------------------------------------------------------
 *
 * <article
 *   id="canonical-essay"
 *   itemScope
 *   itemType="https://schema.org/Article"
 * >
 *   <header>
 *     <h1 id="essay-title" itemProp="headline">
 *       M081 — The Geometry of Inquiry
 *     </h1>
 *     <p>An Essay on ASK, STATE, and Constitutional Knowledge</p>
 *     <p itemProp="author">Leon Powdar (Phase Reference)</p>
 *
 *     <Link
 *       href="/listen/the-geometry-of-inquiry"
 *       aria-label="Open clean reader mode for this essay"
 *     >
 *       Listen / Reader Mode
 *     </Link>
 *   </header>
 *
 *   {// ... existing intro / hero / metadata blocks stay here ... }
 *
 *   <span id="essay-reader-start" aria-hidden="true" />
 *
 *   <section id="essay-body" itemProp="articleBody">
 *     {// existing essay paragraphs / content render here, * unchanged * }
 *   </section>
 *
 *   <span id="essay-reader-end" aria-hidden="true" />
 *
 *   {// ... existing share buttons, related posts, etc. stay here ... }
 * </article>
 *
 * -----------------------------------------------------------------
 * Notes:
 * -----------------------------------------------------------------
 * - If the existing page already renders paragraphs from
 *   `content/essays/the-geometry-of-inquiry.ts` (geometryOfInquiry),
 *   great — just wrap that render in <section id="essay-body">.
 * - If the existing page has its own hardcoded text, you can either
 *   leave it as-is (just add the wrapper/ids/markers around it), or
 *   switch it to import { geometryOfInquiry } from
 *   "@/content/essays/the-geometry-of-inquiry" so the canonical page
 *   and /listen/the-geometry-of-inquiry stay in sync. Either is
 *   acceptable; switching to the shared module is recommended.
 * - Do not place nav, footer, cards, sidebar, or share buttons
 *   between #essay-reader-start and #essay-reader-end.
 */
export {};
