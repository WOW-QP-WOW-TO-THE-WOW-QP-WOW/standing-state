import Head from 'next/head'
import Link from 'next/link'
import { mathematicalPhysicsOfContinuity } from '../../../content/essays/the-mathematical-physics-of-continuity'

// Canonical public page for MD66-PROV-MATH-001
// "The Mathematical Physics of Continuity:
//  Differentiation, Identity, Lineage, and the Geometry of Propagation"
//
// Audit Status: CANONICAL_ADMIT
// Lineage: M081 → M082 → MD66
// Mirror: pending — no Medium URL present in repo metadata

const essay = mathematicalPhysicsOfContinuity

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
  padding: '0.75rem 0',
  borderTop: 'var(--rule)',
  borderBottom: 'var(--rule)',
  marginBottom: '1.5rem',
}

const navLinkStyle = {
  color: 'var(--gold)',
  fontFamily: 'var(--display)',
  fontSize: '10px',
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  textDecoration: 'none',
}

const navDimStyle = {
  ...navLinkStyle,
  color: 'var(--gold-dim)',
}

const navSepStyle = {
  color: 'var(--gold-dim)',
  fontFamily: 'var(--display)',
  fontSize: '10px',
}

const lineageStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  flexWrap: 'wrap',
  marginTop: '0.5rem',
}

export default function MathematicalPhysicsOfContinuity() {
  return (
    <>
      <Head>
        <title>{essay.title} — standingstate.com</title>
        <meta
          name="description"
          content="Continuity is not located in the persistence of instances, but in the lineage relation linking admissible trajectories under a differentiated identity coordinate across discontinuous spacetime."
        />
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

          {/* Read / Site / Mirror navigation */}
          <div style={navStyle}>
            <a
              href="/essays/canonical/the-mathematical-physics-of-continuity"
              style={navLinkStyle}
              aria-label="Read this essay on site"
            >
              Read · Site
            </a>
            <span style={navSepStyle}>·</span>
            <span style={navDimStyle} title="Mirror not yet available">
              Mirror · Pending
            </span>
          </div>

          {/* Lineage strip */}
          <div style={lineageStyle}>
            <span style={navDimStyle}>Lineage</span>
            <Link href="/essays/canonical/the-geometry-of-inquiry" style={navDimStyle}>
              M081 — Geometry of Inquiry
            </Link>
            <span style={navSepStyle}>→</span>
            <Link href="/essays/canonical/the-geometry-of-continuity" style={navDimStyle}>
              M082 — Geometry of Continuity
            </Link>
            <span style={navSepStyle}>→</span>
            <span style={navLinkStyle}>
              MD66 — Mathematical Physics of Continuity
            </span>
          </div>
        </header>

        {/* Reader start marker: canonical speech stream begins here */}
        <span id="essay-reader-start" aria-hidden="true" />

        <section id="essay-body" itemProp="articleBody">
          {essay.sections.map((section, i) => (
            <div key={i}>
              <h2>{section.label}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          ))}

          {/* Final statement */}
          <p><em>{essay.finalStatement}</em></p>
        </section>

        {/* Reader end marker: canonical speech stream ends here */}
        <span id="essay-reader-end" aria-hidden="true" />

        {/* Post-body cross-links — outside reader stream */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap', gap: '1rem', borderTop: 'var(--rule)', paddingTop: '1rem' }}>
          <Link href="/essays/canonical/the-geometry-of-continuity" style={navDimStyle}>
            ← M082 · The Geometry of Continuity
          </Link>
          <span style={navDimStyle}>MD66-PROV-MATH-001 · CANONICAL_ADMIT</span>
          <span style={navDimStyle}>
            MD67 · The Geometry of Coherence →
          </span>
        </div>
      </article>

      {/* Related posts, cards, share buttons, sidebar, footer
          remain here as provided by the existing site layout.
          These are excluded from the reader stream via the manifest's
          exclude selectors. */}
    </>
  )
}
