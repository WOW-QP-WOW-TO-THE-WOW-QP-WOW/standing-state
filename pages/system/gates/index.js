/**
 * /system/gates
 * THE FIVE REGISTER ENTRY POINTS
 * standingstate.com
 */

import Head from 'next/head'
import GateGrid from '../../../components/GateGrid'

export default function GatesIndexPage() {
  return (
    <>
      <Head>
        <title>The Gates — Standing State Press</title>
        <meta
          name="description"
          content="Five register entry points into the Standing State system. The invariant was never divided. Only the lenses were."
        />
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

      <main className="gatesPage">
        <div className="wrap">

          {/* Header */}
          <header className="gatesHeader">
            <div className="glossBreadcrumb">
              <a href="/">Standing State Press</a>
              <span className="glossBreadSep">→</span>
              <a href="/#system">System</a>
              <span className="glossBreadSep">→</span>
              <span style={{ color: 'var(--gold-dim)' }}>Gates</span>
            </div>
            <div className="glossEyebrow">Five Register Entry Points</div>
            <h1 className="glossH1">The Gates</h1>
            <p className="gatesIntro">
              The invariant was never divided. Only the lenses were.<br />
              When the lenses align, the system is seen as one.
            </p>
          </header>

          <hr className="divider" style={{ marginBottom: '3rem' }} />

          {/* Grid */}
          <GateGrid />

          {/* System nav */}
          <div className="gatesFootNav reveal">
            <a href="/system/glossary" className="gatesFootLink">← Glossary</a>
            <a href="/system/plates" className="gatesFootLink">Plates →</a>
          </div>

        </div>
      </main>


      <script
        dangerouslySetInnerHTML={{
          __html: `
            const obs = new IntersectionObserver(
              entries => entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              }),
              { threshold: 0.06 }
            );
            document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
          `,
        }}
      />
    </>
  )
}
