/**
 * /system/scripture
 * SCRIPTURE PORTAL — Source text interpretation layer
 * standingstate.com
 *
 * Architecture: Scripture is the source-text interpretation layer.
 * Oracle Codex is the interpretive lens.
 * Doctrine is the governing law.
 * Essays are thesis objects.
 */

import Head from 'next/head'

const SCRIPTURE_VOLUMES = [
  {
    label: 'Volume I',
    title: 'Proverbs 1–25',
    href: '/system/scripture/proverbs',
    sub: 'Decoded through the Romantic Philosophy of the Living Soul and the Oracle Codex. Twenty-five chapters, eight-section canonical architecture.',
    status: 'CANONICAL',
    chapters: 25
  }
]

export default function ScriptureIndexPage() {
  return (
    <>
      <Head>
        <title>Scripture — Standing State Press</title>
        <meta
          name="description"
          content="Source-text interpretation layer. KJV scripture decoded through the Romantic Philosophy of the Living Soul and the Oracle Codex."
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
            <a href="/system">System</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Scripture</span>
          </div>
          <div className="glossEyebrow">Source-Text Interpretation Layer</div>
          <h1 className="glossH1">Scripture</h1>
          <p className="glossIntro">
            Scripture is the source-text interpretation layer of the Standing State system. The Oracle Codex is the interpretive lens; Doctrine is the governing law; Essays are thesis objects. The Scripture layer holds the canonical decoding of source texts as identity-coded structure.
          </p>
          <div className="glossMandate">
            Scripture → Oracle Codex → Doctrine → Essays
          </div>
        </div>
      </header>

      <hr className="divider" />

      <section className="systemLinksSection">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">Canonical Volumes</span>
            <div className="secRule" />
          </div>
          <div className="systemLinksGrid">
            {SCRIPTURE_VOLUMES.map((vol, i) => (
              <a key={vol.href} href={vol.href} className={`systemLinkCard reveal d${i > 4 ? 4 : i}`}>
                <span className="systemLinkLabel">{vol.label} · {vol.chapters} Chapters · {vol.status}</span>
                <span className="systemLinkTitle">{vol.title} →</span>
                <span className="systemLinkSub">{vol.sub}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="platesSystemNav">
        <div className="wrap">
          <div className="platesSystemNavInner reveal">
            <a href="/system/doctrine" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Governing Law</span>
              <span className="platesSystemLinkTitle">Doctrine →</span>
              <span className="platesSystemLinkSub">The law beneath the scripture.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/essays/canonical" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Thesis Objects</span>
              <span className="platesSystemLinkTitle">Canonical Essays →</span>
              <span className="platesSystemLinkSub">Essays authored from the architecture.</span>
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
