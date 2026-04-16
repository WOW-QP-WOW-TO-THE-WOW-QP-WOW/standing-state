/**
 * /sources/[slug]
 * SOURCE DETAIL PAGE — Standing State Press
 * Full registry entry, structural reading, practice-layer integration
 * standingstate.com/sources/[slug]
 */

import Head from 'next/head'
import { SOURCES } from '../../components/sourcesData'

const FLAGS = {
  A: { label: 'Aligned',  color: '#7a6428' },
  M: { label: 'Mirror',   color: '#c4a44a' },
  U: { label: 'Update',   color: '#6a5a3a' },
  E: { label: 'Expand',   color: '#5a6a3a' },
}

export async function getStaticPaths() {
  return {
    paths: SOURCES.map(s => ({ params: { slug: s.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const idx = SOURCES.findIndex(s => s.slug === params.slug)
  const source = SOURCES[idx] || null
  return {
    props: {
      source,
      prev: SOURCES[idx - 1] || null,
      next: SOURCES[idx + 1] || null,
    }
  }
}

export default function SourceDetailPage({ source, prev, next }) {
  if (!source) return null
  const flag = FLAGS[source.flag] || FLAGS.A

  return (
    <>
      <Head>
        <title>{source.title} — Standing State Press</title>
        <meta name="description" content={source.summary} />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/gates">Gates</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/sources" style={{ color: 'var(--gold)' }}>Sources</a></li>
          </ul>
        </div>
      </nav>

      <article style={{ paddingTop: '58px' }}>
        <div className="wrap" style={{ maxWidth: '760px' }}>

          {/* ── BREADCRUMB ── */}
          <div className="glossBreadcrumb" style={{ paddingTop: '3rem', marginBottom: '3rem' }}>
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/sources">Sources</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>{source.id}</span>
          </div>

          {/* ── HEADER ── */}
          <div style={{ marginBottom: '3.5rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              {source.sourceType} · {source.author}
              {source.series && <span style={{ color: 'var(--gray-lt)', marginLeft: '0.75rem' }}>· {source.series}</span>}
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 400, color: 'var(--white)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              {source.title}
            </h1>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'var(--gray-lt)', lineHeight: 1.75, fontStyle: 'italic' }}>
              {source.summary}
            </p>
          </div>

          {/* ── REGISTRY METADATA ── */}
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gray-lt)', marginBottom: '1.25rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border)' }}>
              Registry Entry
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              {[
                ['ID',       source.id],
                ['Flag',     `${source.flag} — ${flag.label}`],
                ['Axis 1',   source.axis1],
                ['Axis 2',   source.axis2],
                ['Axis 3',   source.axis3],
                ['Note',     source.note],
              ].map(([label, val]) => (
                <tr key={label} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gray-lt)', padding: '0.75rem 1.5rem 0.75rem 0', verticalAlign: 'top', width: '110px', paddingTop: '0.9rem' }}>
                    {label}
                  </td>
                  <td style={{ fontFamily: label === 'ID' ? 'var(--display)' : 'var(--serif)', fontSize: label === 'ID' ? '1.1rem' : '0.9rem', color: label === 'ID' ? 'var(--gold)' : 'var(--offwhite)', padding: '0.75rem 0', letterSpacing: label === 'ID' ? '0.1em' : 'normal' }}>
                    {val}
                  </td>
                </tr>
              ))}
            </table>
          </section>

          {/* ── SECTIONS ── */}
          {source.sections && source.sections.map((section, i) => (
            <section key={i} style={{ marginBottom: '4rem' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gray-lt)', marginBottom: '0.5rem' }}>
                {section.label}
              </div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1.75rem' }}>
                {section.title}
              </h2>

              {/* Translation rows */}
              {section.rows && (
                <div style={{ border: '1px solid var(--border)' }}>
                  {section.rows.map((row, j) => (
                    <div key={j} style={{ display: 'grid', gridTemplateColumns: '1fr 20px 1fr', alignItems: 'start', padding: '1.25rem 1.5rem', borderBottom: j < section.rows.length - 1 ? '1px solid var(--border)' : 'none', gap: '1rem' }}>
                      <div>
                        <div style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-lt)', marginBottom: '0.3rem' }}>Leon</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--white)' }}>{row.source}</div>
                        {row.note && <div style={{ fontFamily: 'var(--serif)', fontSize: '0.78rem', color: 'var(--gray-lt)', marginTop: '0.4rem', lineHeight: 1.5 }}>{row.note}</div>}
                      </div>
                      <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '0.7rem', paddingTop: '1.4rem' }}>→</div>
                      <div>
                        <div style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.3rem' }}>Standing State</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--gold)', fontWeight: 500 }}>{row.target}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Body text */}
              {section.body && (
                <div style={{ background: 'rgba(196,164,74,0.04)', border: '1px solid var(--border)', borderLeft: '2px solid var(--gold-dim)', padding: '1.5rem 1.75rem' }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--offwhite)', lineHeight: 1.85 }}>
                    {section.body}
                  </p>
                </div>
              )}
            </section>
          ))}

          {/* ── EQUATION / FINAL STATEMENT ── */}
          {source.equation && (
            <div style={{ margin: '3rem 0', padding: '2rem', border: '1px solid var(--border)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray-lt)', marginBottom: '1rem' }}>
                Identity Equation
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--gold)', letterSpacing: '0.05em' }}>
                {source.equation}
              </div>
            </div>
          )}

          {/* ── CROSS-REFS ── */}
          {source.crossRefs && source.crossRefs.length > 0 && (
            <section style={{ marginBottom: '4rem' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gray-lt)', marginBottom: '1.25rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border)' }}>
                Cross-References
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {source.crossRefs.map(ref => (
                  <span key={ref} style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.3rem 0.75rem' }}>
                    {ref}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* ── FINAL STATEMENT ── */}
          <div style={{ margin: '3rem 0 4rem', textAlign: 'center' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)', margin: '0 auto 1.5rem' }} />
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--offwhite)' }}>
              {source.finalStatement}
            </p>
            <div style={{ width: '40px', height: '1px', background: 'var(--gold-dim)', margin: '1.5rem auto 0' }} />
          </div>

          <div style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gray-lt)', textAlign: 'center', marginBottom: '4rem' }}>
            {source.author} · {source.id} · Standing State Press
          </div>

          {/* ── PREV / NEXT ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'center', paddingTop: '2rem', paddingBottom: '5rem', borderTop: '1px solid var(--border)' }}>
            {prev ? (
              <a href={prev.mirrorUrl} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-lt)' }}>← Previous</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', color: 'var(--gold)', lineHeight: 1.3 }}>{prev.shortTitle || prev.title}</span>
              </a>
            ) : <div />}

            <a href="/sources" style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-lt)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
              All Sources
            </a>

            {next ? (
              <a href={next.mirrorUrl} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem', textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-lt)' }}>Next →</span>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', color: 'var(--gold)', lineHeight: 1.3 }}>{next.shortTitle || next.title}</span>
              </a>
            ) : <div />}
          </div>

        </div>
      </article>

      <footer className="footer">
        <div className="wrap footerInner">
          <div className="fMark">Standing State Press</div>
          <div className="fCopy">© Leon Powdar · All rights reserved</div>
          <div className="fSig">Signal → Completion → Repair</div>
        </div>
      </footer>
    </>
  )
}
