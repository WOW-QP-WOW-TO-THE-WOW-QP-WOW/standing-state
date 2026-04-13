/**
 * /essays/canonical
 * TEN CANONICAL ESSAYS — Standing State Press
 * Authored directly from the system architecture.
 * standingstate.com
 */

import Head from 'next/head'
import Link from 'next/link'
import { CANONICAL_ESSAYS } from '../../components/canonicalEssaysData'

export default function CanonicalEssaysIndex() {
  return (
    <>
      <Head>
        <title>Canonical Essays — Standing State Press</title>
        <meta name="description" content="Ten foundational essays authored directly from the system architecture. These are not blog posts. They are system declarations." />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/essays" style={{ color: 'var(--gold)' }}>Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Canonical</span>
          </div>
          <div className="glossEyebrow">System Declarations — Ten Foundational Essays</div>
          <h1 className="glossH1">Canonical Essays</h1>
          <p className="glossIntro">
            Ten essays authored directly from the system architecture.
            Not blog posts. System declarations. Each essay instantiates
            one layer of the Standing State framework into language.
          </p>
        </div>
      </header>

      <hr className="divider" />

      <section style={{ padding: '4rem 0' }}>
        <div className="wrap">
          <div className="canonGrid">
            {CANONICAL_ESSAYS.map((essay, i) => (
              <Link key={essay.id} href={`/essays/canonical/${essay.slug}`}
                className="canonCard" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="canonCardNum">{essay.number}</div>
                <h2 className="canonCardTitle">{essay.title}</h2>
                <p className="canonCardSub">{essay.subtitle}</p>
                <div className="canonCardEq">{essay.equation}</div>
                <div className="canonCardArrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
