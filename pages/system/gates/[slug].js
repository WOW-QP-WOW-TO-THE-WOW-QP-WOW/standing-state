/**
 * /system/gates/[slug]
 * Individual gate detail — one per register
 */

import Head from 'next/head'
import { gateCategories, getGateBySlug } from '../../../components/gatesData'

export async function getStaticPaths() {
  return {
    paths: gateCategories.map((gate) => ({ params: { slug: gate.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const gate = getGateBySlug(params.slug)
  const currentIndex = gateCategories.findIndex((g) => g.slug === params.slug)
  const prev = currentIndex > 0 ? gateCategories[currentIndex - 1] : null
  const next = currentIndex < gateCategories.length - 1 ? gateCategories[currentIndex + 1] : null
  return { props: { gate: gate || null, prev, next } }
}

export default function GateDetailPage({ gate, prev, next }) {
  if (!gate) {
    return (
      <main style={{ minHeight: '100vh', background: 'var(--black)', color: 'var(--white)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h1>Gate not found</h1>
          <a href="/system/gates" style={{ color: 'var(--gold)' }}>Return to Gates</a>
        </div>
      </main>
    )
  }

  return (
    <>
      <Head>
        <title>{gate.title} — Gates — Standing State Press</title>
        <meta name="description" content={gate.summary} />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/gates" style={{ color: 'var(--gold)' }}>Gates</a></li>
            <li><a href="/essays">Essays</a></li><li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      <main className="gateDetailPage">
        <div className="wrap">

          {/* Breadcrumb */}
          <div className="glossBreadcrumb" style={{ paddingTop: '6rem' }}>
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/gates">Gates</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>{gate.title}</span>
          </div>

          {/* Header */}
          <div className="glossEyebrow" style={{ marginTop: '1.5rem' }}>{gate.title}</div>
          <h1 className="gateDetailEquation">{gate.equation}</h1>
          <p className="gateDetailDesc">{gate.description}</p>
          <p className="gateDetailSummary">{gate.summary}</p>

          <hr className="divider" style={{ margin: '2.5rem 0' }} />

          {/* Linked items */}
          <div className="gateItemsSection">
            <div className="gateItemsLabel">Linked Items</div>
            <div className="gateItemsGrid">
              {gate.items.map((item) => (
                <a key={item.href} href={item.href} className="gateItemCard">
                  <span className="gateItemTitle">{item.title}</span>
                  <span className="gateItemArrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Prev / Next navigation */}
          <div className="gateNavRow">
            {prev ? (
              <a href={`/system/gates/${prev.slug}`} className="gateNavLink">
                <span className="gateNavDir">← Previous Gate</span>
                <span className="gateNavTitle">{prev.title}</span>
              </a>
            ) : (
              <a href="/system/gates" className="gateNavLink">
                <span className="gateNavDir">← All Gates</span>
                <span className="gateNavTitle">Gates Index</span>
              </a>
            )}

            <a href="/system/gates" className="gateNavAll">All Gates</a>

            {next ? (
              <a href={`/system/gates/${next.slug}`} className="gateNavLink gateNavRight">
                <span className="gateNavDir">Next Gate →</span>
                <span className="gateNavTitle">{next.title}</span>
              </a>
            ) : (
              <a href="/system/glossary" className="gateNavLink gateNavRight">
                <span className="gateNavDir">System Layer →</span>
                <span className="gateNavTitle">Glossary</span>
              </a>
            )}
          </div>

        </div>
      </main>

      {/* ── FOOTER ── */}
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
