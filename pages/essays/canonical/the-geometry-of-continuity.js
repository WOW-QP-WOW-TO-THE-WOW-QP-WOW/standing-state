import Head from "next/head";
import Link from "next/link";
import { geometryOfContinuity } from "../../../content/essays/the-geometry-of-continuity";

// Canonical public page for M082 — "The Geometry of Continuity"
//
// Audit Status: CANONICAL_ADMIT
// Primary Gate Score:    1.000
// Structural Score:      1.000
// Canonical Value Score: 1.000
// Access Status: RECOMMENDED_FOR_ON_SITE_CORPUS
//
// This page retains full site navigation, footer, related content,
// and share UI. Semantic boundaries mark the canonical essay body
// so reader tooling (and the /listen route) can locate the speech
// stream without guessing.

const essay = geometryOfContinuity;

export default function GeometryOfContinuityPage() {
  return (
    <>
      <Head>
        <title>{essay.title} — standingstate.com</title>
        <meta name="description" content={essay.subtitle} />
      </Head>

      {/* Site navigation remains here as existing layout provides */}

      <article
        id="canonical-essay"
        itemScope
        itemType="https://schema.org/Article"
      >
        <header>
          <h1 id="essay-title" itemProp="headline">
            {essay.title}
          </h1>
          <p>{essay.subtitle}</p>
          <p itemProp="author">{essay.author}</p>

          <Link
            href="/listen/the-geometry-of-continuity"
            aria-label="Open clean reader mode for this essay"
          >
            Listen / Reader Mode
          </Link>
        </header>

        {/* Reader start marker: canonical speech stream begins here */}
        <span id="essay-reader-start" aria-hidden="true" />

        <section id="essay-body" itemProp="articleBody">
          {essay.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>

        {/* Reader end marker: canonical speech stream ends here */}
        <span id="essay-reader-end" aria-hidden="true" />
      </article>

      {/* Related posts, cards, share buttons, sidebar, footer
          remain here as provided by the existing site layout.
          These are excluded from the reader stream via the manifest's
          exclude selectors and via the /listen route. */}
    </>
  );
}
