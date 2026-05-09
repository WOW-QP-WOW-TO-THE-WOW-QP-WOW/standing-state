/**
 * /pages/system/glossary/[slug].js
 * Dynamic glossary deep-route — canonical definition resolution.
 *
 * Reads from components/glossaryData.js (VARIABLES + EXTENDED_TERMS).
 * Generates static paths for all glossary entries.
 *
 * Static overrides take precedence over this dynamic route:
 *   - admissibility-delta.js
 *   - gate-of-admissibility.js
 *
 * Renders schema-faithfully — only fields present in the data.
 * No content fabrication. No data mutation.
 *
 * Status: Backbone repair. Definition layer made operational.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'
import { VARIABLES, EXTENDED_TERMS } from '../../../components/glossaryData'

// Merged ordered list: VARIABLES first (foundational), then EXTENDED_TERMS.
// Order is stable and used for prev/next navigation.
const ALL_ENTRIES = [...VARIABLES, ...EXTENDED_TERMS]

// Slugs that have static override pages — exclude from dynamic paths.
// These routes are handled by their own static .js files at the same path.
// The entries remain in ALL_ENTRIES so prev/next navigation still flows through them.
const STATIC_OVERRIDE_SLUGS = new Set([
  'admissibility-delta',
  'gate-of-admissibility',
])

export async function getStaticPaths() {
  return {
    paths: ALL_ENTRIES
      .filter((entry) => !STATIC_OVERRIDE_SLUGS.has(entry.id))
      .map((entry) => ({ params: { slug: entry.id } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const index = ALL_ENTRIES.findIndex((e) => e.id === params.slug)
  if (index === -1) {
    return { notFound: true }
  }
  const entry = ALL_ENTRIES[index]
  const prev = index > 0 ? ALL_ENTRIES[index - 1] : null
  const next = index < ALL_ENTRIES.length - 1 ? ALL_ENTRIES[index + 1] : null
  return { props: { entry, prev, next } }
}

export default function GlossaryEntry({ entry, prev, next }) {
  if (!entry) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--black)', color: 'var(--white)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1>Entry not found</h1>
          <a href="/system/glossary" style={{ color: 'var(--gold)' }}>Return to Glossary</a>
        </div>
      </main>
    )
  }

  // Optional fields — render only when present.
  const hasLogic = !!entry.logic
  const hasLogicLabel = !!entry.logicLabel
  const hasRole = !!entry.role
  const hasActivation = !!entry.activation
  const hasSuppression = !!entry.suppression
  const hasSource = !!entry.source

  return (
    <>
      <Head>
        <title>{entry.symbol} — {entry.name} — Glossary — Standing State Press</title>
        <meta
          name="description"
          content={entry.definition || `${entry.symbol} — ${entry.name}`}
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary" style={{ color: 'var(--gold)' }}>Glossary</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/glossary">Glossary</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>{entry.symbol}</span>
          </div>
          <div className="glossEyebrow">
            Definition Layer · Canonical Entry
          </div>
          <h1 className="glossH1">
            <span style={{ marginRight: '0.75rem' }}>{entry.symbol}</span>
            <span style={{ color: 'var(--gold-dim)', fontWeight: 'normal' }}>— {entry.name}</span>
          </h1>
          {hasSource && (
            <p className="glossIntro" style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--gold-dim)' }}>
              Source: {entry.source}
            </p>
          )}
        </div>
      </header>

      <hr className="divider" />

      <article className="essayBody">
        <div className="wrap" style={{ maxWidth: '820px' }}>

          {/* ── Definition ── */}
          {entry.definition && (
            <section
              className="essaySection"
              style={{
                marginTop: '2rem',
                padding: '2rem',
                border: '2px solid var(--gold)',
                background: 'rgba(201, 168, 76, 0.04)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dim)',
                  marginBottom: '1rem',
                  textAlign: 'center',
                }}
              >
                Definition
              </div>
              <p className="essayP" style={{ marginBottom: 0 }}>
                {entry.definition}
              </p>
            </section>
          )}

          {/* ── Logic / Governing Form (VARIABLES only) ── */}
          {hasLogic && (
            <section className="essaySection">
              <h2 className="essayH2">Governing Form</h2>
              <div
                style={{
                  marginTop: '1rem',
                  padding: '1.5rem',
                  border: '1px solid var(--gold-dim)',
                  background: 'rgba(201, 168, 76, 0.04)',
                  textAlign: 'center',
                }}
              >
                <div className="essayEq" style={{ marginBottom: hasLogicLabel ? '1rem' : 0 }}>
                  <span style={{ fontFamily: 'var(--display)', fontSize: '1.4rem', color: 'var(--gold)' }}>
                    {entry.logic}
                  </span>
                </div>
                {hasLogicLabel && (
                  <p className="essayP" style={{ marginBottom: 0, fontSize: '0.95rem', color: 'var(--gold-dim)' }}>
                    {entry.logicLabel}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* ── Role (VARIABLES only) ── */}
          {hasRole && (
            <section className="essaySection">
              <h2 className="essayH2">Role</h2>
              <p className="essayP">{entry.role}</p>
            </section>
          )}

          {/* ── Activation / Suppression (VARIABLES only) ── */}
          {(hasActivation || hasSuppression) && (
            <section className="essaySection">
              <h2 className="essayH2">State Conditions</h2>

              {hasActivation && (
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid var(--gold-dim)',
                    background: 'rgba(76, 175, 130, 0.04)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-dim)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Activation
                  </div>
                  <p className="essayP" style={{ marginBottom: 0 }}>
                    {entry.activation}
                  </p>
                </div>
              )}

              {hasSuppression && (
                <div
                  style={{
                    marginTop: '1rem',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid #8B4444',
                    background: 'rgba(139, 68, 68, 0.04)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-dim)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Suppression
                  </div>
                  <p className="essayP" style={{ marginBottom: 0 }}>
                    {entry.suppression}
                  </p>
                </div>
              )}
            </section>
          )}

          <hr className="divider" style={{ margin: '3rem 0 2rem' }} />

          {/* ── Navigation ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr',
              gap: '1rem',
              alignItems: 'center',
              marginTop: '2rem',
            }}
          >
            {prev ? (
              <a
                href={`/system/glossary/${prev.id}`}
                style={{
                  padding: '1rem',
                  border: '1px solid var(--border)',
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.4rem' }}>
                  ← Previous
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1rem' }}>
                  {prev.symbol} — {prev.name}
                </div>
              </a>
            ) : (
              <div />
            )}

            <a
              href="/system/glossary"
              style={{
                padding: '1rem 1.5rem',
                border: '1px solid var(--gold-dim)',
                color: 'var(--gold)',
                textDecoration: 'none',
                fontFamily: 'var(--display)',
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              All Definitions
            </a>

            {next ? (
              <a
                href={`/system/glossary/${next.id}`}
                style={{
                  padding: '1rem',
                  border: '1px solid var(--border)',
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'right',
                }}
              >
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.4rem' }}>
                  Next →
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '1rem' }}>
                  {next.symbol} — {next.name}
                </div>
              </a>
            ) : (
              <div />
            )}
          </div>

        </div>
      </article>
    </>
  )
}
