// MERGE NOTE for pages/listen/[slug].js
//
// The /listen/[slug] route already exists from the Reader Protocol patch.
// To add M082, make two additions to that existing file:
//
// 1. Add the import at the top of the file:
//
//    import { geometryOfContinuity } from "../../content/essays/the-geometry-of-continuity";
//
// 2. Add one entry to the ESSAY_CONTENT registry object:
//
//    const ESSAY_CONTENT = {
//      "the-geometry-of-inquiry": geometryOfInquiry,
//      "the-geometry-of-continuity": geometryOfContinuity,   // <-- add this line
//    };
//
// No other changes to [slug].js are needed. getStaticPaths will
// automatically pick up the new manifest from
// public/reader-manifests/m082-geometry-of-continuity.json and
// generate the /listen/the-geometry-of-continuity route at build time.
//
// If the /listen/[slug].js route does not yet exist (fresh repo),
// use the full [slug].js file from the Reader Protocol patch and
// add both essay entries to ESSAY_CONTENT as shown above.
export {};
