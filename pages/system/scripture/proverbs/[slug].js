/**
 * /system/scripture/proverbs/[slug]
 * PROVERBS CHAPTER DETAIL — eight-section canonical view
 * standingstate.com
 *
 * Derivative of sealed master proverbs-1-25-canonical.md
 * Renders the eight-section architecture per chapter.
 */

import Head from 'next/head'
import { PROVERBS_CHAPTERS, PROVERBS_META, findChapter, adjacentChapters } from '../../../../data/proverbs-chapters'

export async function getStaticPaths() {
  return {
    paths: PROVERBS_CHAPTERS.map(ch => ({ params: { slug: ch.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const chapter = findChapter(params.slug)
  if (!chapter) return { notFound: true }
  const { prev, next } = adjacentChapters(params.slug)
  return { props: { chapter, prev, next } }
}

// Render Markdown-ish inline emphasis (**bold**, *italic*) as React fragments.
// The data preserves the master's source markup verbatim; we render it inline.
function renderInline(text) {
  if (!text) return null
  const parts = []
  let i = 0
  let key = 0
  while (i < text.length) {
    // **bold**
    if (text.substr(i, 2) === '**') {
      const end = text.indexOf('**', i + 2)
      if (end > -1) {
        parts.push(<strong key={key++}>{text.substring(i + 2, end)}</strong>)
        i = end + 2
        continue
      }
    }
    // *italic* (single-star) — only if next char is NOT another star
    if (text[i] === '*' && text[i + 1] !== '*') {
      const end = text.indexOf('*', i + 1)
      if (end > -1) {
        parts.push(<em key={key++}>{text.substring(i + 1, end)}</em>)
        i = end + 1
        continue
      }
    }
    // Plain run
    let end = i
    while (end < text.length && text.substr(end, 2) !== '**' && !(text[end] === '*' && text[end + 1] !== '*')) {
      end++
    }
    parts.push(<span key={key++}>{text.substring(i, end)}</span>)
    i = end < i + 1 ? i + 1 : end
  }
  return parts
}

// A "section paragraph block" preserves blank-line-separated paragraphs and blockquotes.
function SectionProse({ source }) {
  if (!source) return null
  const blocks = source.split(/\n\n+/).filter(b => b.trim().length > 0)
  return (
    <>
      {blocks.map((block, i) => {
        const trimmed = block.trim()
        if (trimmed.startsWith('> ')) {
          const quoted = trimmed.replace(/^> /gm, '')
          return (
            <blockquote key={i} className="canonEssayEqBlock" style={{ margin: '1.6rem 0' }}>
              <div className="canonEssayEq" style={{ fontStyle: 'italic' }}>{renderInline(quoted)}</div>
            </blockquote>
          )
        }
        return (
          <p key={i} className="canonEssayPara">{renderInline(trimmed)}</p>
        )
      })}
    </>
  )
}

export default function ProverbsChapterPage({ chapter, prev, next }) {
  if (!chapter) return null

  const ch = chapter
  const planes = ch.fourPlanes

  return (
    <>
      <Head>
        <title>Proverbs {ch.number} — {ch.title} · Scripture · Standing State Press</title>
        <meta
          name="description"
          content={`Proverbs ${ch.number} — ${ch.title}. ${ch.thesis.replace(/\*\*/g, '').slice(0, 180)}`}
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

      <article className="canonEssayWrap">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/system">System</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/scripture">Scripture</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/scripture/proverbs">Proverbs 1–25</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Proverbs {ch.number}</span>
          </div>

          <div className="canonEssayHeader">
            <div className="canonEssayNum">Proverbs {ch.number} · Chapter {ch.numberRoman}</div>
            <h1 className="canonEssayTitle">{ch.title}</h1>
            <p className="canonEssaySub">{PROVERBS_META.volumeSubtitle}</p>
            <div className="canonEssayRule" />
          </div>

          {/* Section I — Chapter Thesis */}
          <section>
            <h2 className="canonEssayPara" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginTop: '2.4rem' }}>
              I. Chapter Thesis
            </h2>
            <SectionProse source={ch.thesis} />
          </section>

          {/* Section II — Four Plane Interpretation */}
          <section>
            <h2 className="canonEssayPara" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginTop: '2.4rem' }}>
              II. Four Plane Interpretation
            </h2>
            <div className="plateDetailBlock" style={{ marginTop: '1rem' }}>
              <div className="plateDetailBlockLabel">Living Consciousness — Spiritual</div>
              <p className="canonEssayPara">{renderInline(planes.living)}</p>
            </div>
            <div className="plateDetailBlock" style={{ marginTop: '1rem' }}>
              <div className="plateDetailBlockLabel">Resonance — Emotional</div>
              <p className="canonEssayPara">{renderInline(planes.resonance)}</p>
            </div>
            <div className="plateDetailBlock" style={{ marginTop: '1rem' }}>
              <div className="plateDetailBlockLabel">Mind and Motion — Mental</div>
              <p className="canonEssayPara">{renderInline(planes.mind)}</p>
            </div>
            <div className="plateDetailBlock" style={{ marginTop: '1rem' }}>
              <div className="plateDetailBlockLabel">Creation and Growth — Physical</div>
              <p className="canonEssayPara">{renderInline(planes.creation)}</p>
            </div>
          </section>

          {/* Section III — Codex Integration */}
          <section>
            <h2 className="canonEssayPara" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginTop: '2.4rem' }}>
              III. Codex Integration
            </h2>
            <SectionProse source={ch.codexIntegration} />
          </section>

          {/* Section IV — Triune Eye Integration */}
          <section>
            <h2 className="canonEssayPara" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginTop: '2.4rem' }}>
              IV. Triune Eye Integration
            </h2>
            <SectionProse source={ch.triuneEye} />
          </section>

          {/* Section V — Verse Decoding */}
          <section>
            <h2 className="canonEssayPara" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginTop: '2.4rem' }}>
              V. Verse Decoding
            </h2>
            <SectionProse source={ch.verseDecoding} />
          </section>

          {/* Section VI — Identity / Law Synthesis */}
          <section>
            <h2 className="canonEssayPara" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginTop: '2.4rem' }}>
              VI. Identity / Law Synthesis
            </h2>
            <SectionProse source={ch.synthesis.body} />
            {ch.synthesis.invariant && (
              <div className="canonEssayEqBlock scriptureSeal">
                <div className="canonEssayEq">{PROVERBS_META.axiom}</div>
              </div>
            )}
          </section>

          {/* Section VII — Closing Declaration */}
          <section>
            <h2 className="canonEssayPara" style={{ fontSize: '1.4rem', color: 'var(--gold)', marginTop: '2.4rem' }}>
              VII. Closing Declaration
            </h2>
            <div className="canonEssayFinal scriptureFinal">
              <div className="canonEssayFinalRule" />
              <p className="canonEssayFinalText">{ch.closing}</p>
              <div className="canonEssayFinalRule" />
            </div>
          </section>

          <div className="canonEssayAxiom">{PROVERBS_META.axiom}</div>
          <div className="canonEssayAuthor">{ch.author} · {ch.imprint}</div>

          <div className="canonEssayNav">
            {prev ? (
              <a href={`/system/scripture/proverbs/${prev.slug}`} className="canonNavLink canonNavPrev">
                <span className="canonNavDir">← Previous</span>
                <span className="canonNavTitle">Proverbs {prev.number} — {prev.title}</span>
              </a>
            ) : <div />}
            <a href="/system/scripture/proverbs" className="canonNavIndex">All Chapters</a>
            {next ? (
              <a href={`/system/scripture/proverbs/${next.slug}`} className="canonNavLink canonNavNext">
                <span className="canonNavDir">Next →</span>
                <span className="canonNavTitle">Proverbs {next.number} — {next.title}</span>
              </a>
            ) : <div />}
          </div>
        </div>
      </article>
    </>
  )
}
