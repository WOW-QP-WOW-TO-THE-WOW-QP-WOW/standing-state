/**
 * /system/scripture/proverbs
 * PROVERBS 1–25 VOLUME LANDING
 * standingstate.com
 *
 * Derivative of sealed master proverbs-1-25-canonical.md
 */

import Head from 'next/head'
import Link from 'next/link'
import { PROVERBS_CHAPTERS, PROVERBS_META } from '../../../../data/proverbs-chapters'

export default function ProverbsIndexPage() {
  return (
    <>
      <Head>
        <title>Proverbs 1–25 — Scripture · Standing State Press</title>
        <meta
          name="description"
          content="Proverbs 1–25 (KJV) decoded through the Romantic Philosophy of the Living Soul and the Oracle Codex. Twenty-five canonical chapters."
        />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/system">System</a></li>
            <li><a href="/system/scripture">Scripture</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/essays">Essays</a></li>
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
            <a href="/system/scripture">Scripture</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Proverbs 1–25</span>
          </div>
          <div className="glossEyebrow">Volume I · Canonical First Edition · 25 Chapters</div>
          <h1 className="glossH1">{PROVERBS_META.volumeTitle}</h1>
          <p className="glossIntro">
            {PROVERBS_META.volumeSubtitle}. Each chapter unfolds through eight canonical sections — Chapter Thesis, Four Plane Interpretation, Codex Integration, Triune Eye Integration, Verse Decoding, Identity / Law Synthesis, and Closing Declaration — anchored in the invariant axiom.
          </p>
          <div className="glossMandate">
            {PROVERBS_META.axiom}
          </div>
        </div>
      </header>

      <hr className="divider" />

      <section className="canonEssayWrap" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">Chapters</span>
            <div className="secRule" />
          </div>
          <div className="systemLinksGrid" style={{ marginTop: '2rem' }}>
            {PROVERBS_CHAPTERS.map((ch, i) => (
              <Link
                key={ch.id}
                href={`/system/scripture/proverbs/${ch.slug}`}
                className={`systemLinkCard reveal d${i % 5}`}
              >
                <span className="systemLinkLabel">Proverbs {ch.number} · Chapter {ch.numberRoman}</span>
                <span className="systemLinkTitle">{ch.title} →</span>
                <span className="systemLinkSub">{ch.thesis.replace(/\*\*/g, '').slice(0, 180)}…</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="platesSystemNav">
        <div className="wrap">
          <div className="platesSystemNavInner reveal">
            <a href="/system/scripture" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Back to</span>
              <span className="platesSystemLinkTitle">Scripture →</span>
              <span className="platesSystemLinkSub">Return to the Scripture portal.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/system/doctrine" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Governing Law</span>
              <span className="platesSystemLinkTitle">Doctrine →</span>
              <span className="platesSystemLinkSub">The law beneath the scripture.</span>
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
