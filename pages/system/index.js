/**
 * /system
 * SYSTEM LANDING PAGE
 * standingstate.com
 */

import Head from 'next/head'

const SYSTEM_LINKS = [
  {
    label: 'Visual Authority Layer',
    title: 'System Plates',
    href: '/system/plates',
    sub: 'Canonical visual artifacts. Structure fixed in form.'
  },
  {
    label: 'Definition Layer',
    title: 'Variable Glossary',
    href: '/system/glossary',
    sub: 'Every symbol defined once. No term drifts.'
  },
  {
    label: 'Doctrine Layer',
    title: 'Doctrine',
    href: '/system/doctrine',
    sub: 'System law, governance, and invariant commitments.'
  },
  {
    label: 'Entry Layer',
    title: 'Gates',
    href: '/system/gates',
    sub: 'Five register entry points into the Standing State system.'
  },
  {
    label: 'Coordinate Layer',
    title: 'Coordinate',
    href: '/system/coordinate',
    sub: 'Identity as reference coordinate and stabilizing frame.'
  },
  {
    label: 'Interpretation Layer',
    title: 'Interpretation',
    href: '/system/interpretation',
    sub: 'Meaning governed by structure, not projection.'
  }
]

export default function SystemIndexPage() {
  return (
    <>
      <Head>
        <title>System — Standing State Press</title>
        <meta
          name="description"
          content="The Standing State system index: plates, glossary, doctrine, gates, and governing structural layers."
        />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/system" style={{ color: 'var(--gold)' }}>System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>System</span>
          </div>
          <div className="glossEyebrow">Structural Index</div>
          <h1 className="glossH1">System</h1>
          <p className="glossIntro">
            The Standing State system is organized through fixed layers: plates, glossary, doctrine, gates, and governing coordinates.
            This page is the central index for the architecture.
          </p>
          <div className="glossMandate">
            Identity → Structure → Control → Coherence → Gate
          </div>
        </div>
      </header>

      <hr className="divider" />

      <section className="systemLinksSection">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">System Layers</span>
            <div className="secRule" />
          </div>
          <div className="systemLinksGrid">
            {SYSTEM_LINKS.map((item, i) => (
              <a key={item.href} href={item.href} className={`systemLinkCard reveal d${i > 4 ? 4 : i}`}>
                <span className="systemLinkLabel">{item.label}</span>
                <span className="systemLinkTitle">{item.title} →</span>
                <span className="systemLinkSub">{item.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="platesSystemNav">
        <div className="wrap">
          <div className="platesSystemNavInner reveal">
            <a href="/essays" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Corpus Layer</span>
              <span className="platesSystemLinkTitle">Essays →</span>
              <span className="platesSystemLinkSub">Canonical and mirrored writings.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/system/plates" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Companion Layer</span>
              <span className="platesSystemLinkTitle">Plates →</span>
              <span className="platesSystemLinkSub">The visual authority archive.</span>
            </a>
          </div>
        </div>
      </section>

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
