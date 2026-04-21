import Head from 'next/head'
import Link from 'next/link'
import { CANONICAL_ESSAYS as ESSAYS } from '../../../components/canonicalEssaysData'

function renderBodyItem(item, idx) {
  if (!item) return null

  if (item.paragraph) {
    return <p key={idx}>{item.paragraph}</p>
  }

  if (item.quote) {
    return (
      <blockquote key={idx}>
        {item.quote}
      </blockquote>
    )
  }

  if (item.equation) {
    return (
      <div key={idx} className="essayEquation">
        {item.equation}
      </div>
    )
  }

  if (item.list && Array.isArray(item.list)) {
    return (
      <ul key={idx}>
        {item.list.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    )
  }

  if (item.heading) {
    return <h2 key={idx}>{item.heading}</h2>
  }

  return null
}

export default function CanonicalEssayPage({ essay }) {
  if (!essay) return null

  const pageTitle = `${essay.title} | Standing State`
  const pageDescription =
    essay.subtitle ||
    essay.thesis ||
    'Canonical essay from Standing State Press.'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      <main className="essayPage">
        <div className="essayWrap">
          <div className="essayBack">
            <Link href="/essays">← Back to Essays</Link>
          </div>

          <div className="essayMeta">
            {essay.number && <div className="essayNumber">{essay.number}</div>}
            {essay.axis1 && (
              <div className="essayAxes">
                {essay.axis1}
                {essay.axis2 ? ` · ${essay.axis2}` : ''}
                {essay.axis3 ? ` · ${essay.axis3}` : ''}
              </div>
            )}
          </div>

          <h1>{essay.title}</h1>

          {essay.subtitle && <p className="essaySubtitle">{essay.subtitle}</p>}

          {essay.equation && (
            <div className="essayEquation heroEquation">{essay.equation}</div>
          )}

          {essay.thesis && <p className="essayThesis">{essay.thesis}</p>}

          {Array.isArray(essay.body) &&
            essay.body.map((item, idx) => renderBodyItem(item, idx))}

          {essay.finalStatement && (
            <div className="essayFinalStatement">{essay.finalStatement}</div>
          )}
        </div>
      </main>

      <style jsx>{`
        .essayPage {
          min-height: 100vh;
          background: #0a0a0a;
          color: #ede9e1;
          padding: 48px 20px 80px;
        }

        .essayWrap {
          max-width: 860px;
          margin: 0 auto;
        }

        .essayBack {
          margin-bottom: 24px;
        }

        .essayBack :global(a) {
          color: #c4a44a;
          text-decoration: none;
        }

        .essayMeta {
          margin-bottom: 18px;
        }

        .essayNumber {
          font-size: 0.95rem;
          color: #c4a44a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .essayAxes {
          font-size: 0.9rem;
          color: rgba(237, 233, 225, 0.72);
        }

        h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.08;
          margin: 0 0 16px;
        }

        .essaySubtitle {
          font-size: clamp(1.15rem, 2.5vw, 1.5rem);
          line-height: 1.45;
          color: rgba(237, 233, 225, 0.72);
          margin: 0 0 22px;
          font-style: italic;
        }

        .essayThesis {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #c4a44a;
          margin: 0 0 28px;
        }

        .essayEquation {
          margin: 24px 0;
          padding: 18px 20px;
          border: 1px solid rgba(196, 164, 74, 0.4);
          background: rgba(196, 164, 74, 0.06);
          border-radius: 10px;
          color: #ede9e1;
          overflow-x: auto;
          white-space: pre-wrap;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
        }

        .heroEquation {
          margin-top: 10px;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.9;
          margin: 0 0 22px;
        }

        h2 {
          font-size: 1.45rem;
          line-height: 1.3;
          margin: 34px 0 14px;
          color: #c4a44a;
        }

        ul {
          margin: 0 0 24px 20px;
          padding: 0;
        }

        li {
          margin: 0 0 10px;
          line-height: 1.8;
        }

        blockquote {
          margin: 28px 0;
          padding: 12px 0 12px 18px;
          border-left: 3px solid #c4a44a;
          color: rgba(237, 233, 225, 0.86);
          font-style: italic;
        }

        .essayFinalStatement {
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid rgba(237, 233, 225, 0.12);
          font-size: 1.15rem;
          line-height: 1.85;
          color: #c4a44a;
        }
      `}</style>
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: ESSAYS.map((essay) => ({
      params: { slug: essay.slug }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const essay = ESSAYS.find((e) => e.slug === params.slug) || null

  return {
    props: {
      essay
    }
  }
}
