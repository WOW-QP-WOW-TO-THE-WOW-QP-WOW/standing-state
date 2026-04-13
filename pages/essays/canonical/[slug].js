/**
 * /essays/canonical/[slug]
 * CANONICAL ESSAY DETAIL — Standing State Press
 */

import Head from 'next/head'
import { CANONICAL_ESSAYS } from '../../../components/canonicalEssaysData'

export async function getStaticPaths() {
  return {
    paths: CANONICAL_ESSAYS.map(e => ({ params: { slug: e.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const essay = CANONICAL_ESSAYS.find(e => e.slug === params.slug)
  const idx   = CANONICAL_ESSAYS.findIndex(e => e.slug === params.slug)
  return {
    props: {
      essay,
      prev: CANONICAL_ESSAYS[idx - 1] || null,
      next: CANONICAL_ESSAYS[idx + 1] || null,
    }
  }
}

export default function CanonicalEssayPage({ essay, prev, next }) {
  if (!essay) return null

  return (
    <>
      <Head>
        <title>{essay.title} — Standing State Press</title>
        <meta name="description" content={essay.thesis} />
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

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">

          {/* Breadcrumb */}
          <div className="glossBreadcrumb" style={{ marginBottom: '3rem' }}>
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays/canonical">Canonical</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>{essay.number}</span>
          </div>

          {/* Header */}
          <div className="canonEssayHeader">
            <div className="canonEssayNum">{essay.number}</div>
            <h1 className="canonEssayTitle">{essay.title}</h1>
            <p className="canonEssaySub">{essay.subtitle}</p>
            <div className="canonEssayRule" />
          </div>

          {/* Thesis */}
          <p className="canonEssayThesis">{essay.thesis}</p>

          {/* Body */}
          <div className="canonEssayBody">
            {essay.body.map((block, i) => (
              <p key={i} className="canonEssayPara">{block.paragraph}</p>
            ))}
          </div>

          {/* Equation */}
          <div className="canonEssayEqBlock">
            <div className="canonEssayEq">{essay.equation}</div>
          </div>

          {/* Final statement */}
          <div className="canonEssayFinal">
            <div className="canonEssayFinalRule" />
            <p className="canonEssayFinalText">{essay.finalStatement}</p>
            <div className="canonEssayFinalRule" />
          </div>

          {/* Axiom */}
          <div className="canonEssayAxiom">
            A becomes A, because A knows it is A.
          </div>

          {/* Author */}
          <div className="canonEssayAuthor">
            Leon Powdar · Standing State Press
          </div>

          {/* Navigation */}
          <div className="canonEssayNav">
            {prev ? (
              <a href={`/essays/canonical/${prev.slug}`} className="canonNavLink canonNavPrev">
                <span className="canonNavDir">← Previous</span>
                <span className="canonNavTitle">{prev.title}</span>
              </a>
            ) : <div />}
            <a href="/essays/canonical" className="canonNavIndex">All Essays</a>
            {next ? (
              <a href={`/essays/canonical/${next.slug}`} className="canonNavLink canonNavNext">
                <span className="canonNavDir">Next →</span>
                <span className="canonNavTitle">{next.title}</span>
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
