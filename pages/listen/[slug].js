import Head from "next/head";
import { getAllManifests, getManifestBySlug } from "../../lib/readerManifest";
import { geometryOfInquiry } from "../../content/essays/the-geometry-of-inquiry";

// /listen/[slug]  (Pages Router, JavaScript)
//
// Dedicated Reader Mode route.
//
// Renders ONLY the canonical essay content:
//   - no navigation
//   - no footer
//   - no cards
//   - no sidebar
//   - no share buttons
//   - no related posts
//
// This gives Android TalkBack / Select to Speak (and any other
// reading tool) a single, unambiguous, linear speech stream:
//
//   h1#essay-title -> author -> #essay-reader-start ->
//   section#essay-body (paragraphs in order) -> #essay-reader-end

// Registry mapping reader slugs to their shared content module.
// Add one entry per essay onboarded into the reader protocol.
const ESSAY_CONTENT = {
  "the-geometry-of-inquiry": geometryOfInquiry,
};

export default function ListenPage({ essay }) {
  return (
    <>
      <Head>
        <title>{essay.title} — Reader Mode</title>
        <meta name="robots" content="noindex" />
      </Head>

      <main id="reader-root">
        <article
          id="canonical-essay"
          itemScope
          itemType="https://schema.org/Article"
        >
          <header>
            <h1 id="essay-title" itemProp="headline">
              {essay.title}
            </h1>
            {essay.subtitle ? <p>{essay.subtitle}</p> : null}
            <p itemProp="author">{essay.author}</p>
          </header>

          {/* Reader start marker */}
          <span id="essay-reader-start" aria-hidden="true" />

          <section id="essay-body" itemProp="articleBody">
            {essay.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </section>

          {/* Reader end marker */}
          <span id="essay-reader-end" aria-hidden="true" />
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const manifests = getAllManifests();
  const paths = manifests
    .filter((m) => ESSAY_CONTENT[m.readerRoute.replace("/listen/", "")])
    .map((m) => ({
      params: { slug: m.readerRoute.replace("/listen/", "") },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const manifest = getManifestBySlug(slug);
  const essay = ESSAY_CONTENT[slug];

  if (!manifest || !essay) {
    return { notFound: true };
  }

  return {
    props: { manifest, essay },
  };
}
