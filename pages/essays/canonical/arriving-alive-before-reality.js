/**
 * SA-023 — Arriving Alive Before Reality
 * Wisdom, Individuation, Phenomenal Fruit, and the Constitutional Governance of the Unknown
 *
 * Canonical essay page. Manuscript content lives in
 *   data/essays/sa-023-arriving-alive-before-reality.js
 * and is rendered faithfully here. The phenomenal bridge ("?") is preserved.
 *
 * Lineage: SA-020 → SA-021 → SA-023
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'
import {
  SA023_META,
  SA023_SECTIONS,
  SA023_DISPOSITION,
} from '../../../data/essays/sa-023-arriving-alive-before-reality'

// Render prose that may contain inline math delimited by \( ... \)
function Prose({ text }) {
  const parts = text.split(/\\\(|\\\)/)
  // Even indices are prose, odd indices are inline math
  return (
    <>
      {parts.map((seg, i) =>
        i % 2 === 1 ? (
          <KTex key={i} math={seg} />
        ) : (
          <span key={i}>{seg}</span>
        )
      )}
    </>
  )
}

function Block({ block }) {
  if (block.t === 'eq') {
    return (
      <div className="canonEssayEqBlock" style={{ margin: '1.4rem 0', textAlign: 'center' }}>
        <KTex math={block.tex} display />
      </div>
    )
  }
  if (block.t === 'quote') {
    return (
      <blockquote
        className="canonEssayPara"
        style={{
          borderLeft: '3px solid var(--gold)',
          paddingLeft: '1rem',
          margin: '1rem 0',
          fontStyle: 'italic',
          color: 'var(--gold)',
        }}
      >
        <Prose text={block.text} />
      </blockquote>
    )
  }
  if (block.t === 'list') {
    return (
      <ul className="canonEssayPara" style={{ paddingLeft: '1.4rem', margin: '0.8rem 0' }}>
        {block.items.map((it, i) => (
          <li key={i} style={{ marginBottom: '0.35rem' }}>
            <Prose text={it} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className="canonEssayPara">
      <Prose text={block.text} />
    </p>
  )
}

export default function ArrivingAliveBeforeReality() {
  const M = SA023_META
  return (
    <>
      <Head>
        <title>SA-023 — Arriving Alive Before Reality — Standing State Press</title>
        <meta
          name="description"
          content="Wisdom, Individuation, Phenomenal Fruit, and the Constitutional Governance of the Unknown. An open constitutional inquiry: the phenomenal bridge remains unresolved; reality remains the ultimate evidentiary judge."
          key="description"
        />
        <link rel="canonical" href="https://standingstate.com/essays/canonical/arriving-alive-before-reality" />
        <meta property="og:type" content="article" key="og:type" />
        <meta
          property="og:title"
          content="SA-023 — Arriving Alive Before Reality — Standing State Press"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Wisdom, Individuation, Phenomenal Fruit, and the Constitutional Governance of the Unknown. Open Constitutional Inquiry · Candidate Constitutional Synthesis."
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://standingstate.com/plates/p058-arriving-alive-before-reality.png"
          key="og:image"
        />
        <meta
          name="twitter:title"
          content="SA-023 — Arriving Alive Before Reality — Standing State Press"
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content="Wisdom, Individuation, Phenomenal Fruit, and the Constitutional Governance of the Unknown. The phenomenal bridge remains unresolved."
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content="https://standingstate.com/plates/p058-arriving-alive-before-reality.png"
          key="twitter:image"
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/doctrine">Doctrine</a></li>
            <li><a href="/essays" style={{ color: 'var(--gold)' }}>Essays</a></li>
            <li><a href="/sources">Sources</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="glossHeader canonMonument">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays/canonical/the-constitutional-stewardship-of-functional-emergence">SA-021</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold)' }}>SA-023</span>
          </div>
          <div className="glossEyebrow">
            SA-Series · Synthesis Inquiry · Constitutional Thesis · Open Constitutional Inquiry · Candidate Constitutional Synthesis
          </div>
          <h1 className="glossH1" id="essay-title">
            Arriving Alive Before Reality
          </h1>
          <p className="glossIntro">
            Wisdom, Individuation, Phenomenal Fruit, and the Constitutional Governance of the Unknown.
          </p>
          <div className="essayStats">
            <span className="essayStat">SA-023 · V.01</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">CONSTRUCT · REALITY CONTACT REQUIRED</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Leon Powdar (Phase Reference)</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Reality Verdict · Pending</span>
          </div>

          {/* ── Read / Mirror / Plate ── */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="/essays/canonical/arriving-alive-before-reality"
              style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Read · Site
            </a>
            <span style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Mirror · Pending
            </span>
            <a
              href="/system/plates/arriving-alive-before-reality"
              style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              P058 · Arriving Alive Before Reality →
            </a>
          </div>

          {/* ── Lineage strip ── */}
          <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: 'var(--gray-lt)', lineHeight: 1.6 }}>
            Lineage: SA-020 → SA-021 → SA-023 &nbsp;·&nbsp; Predecessor: SA-021 · The Constitutional
            Stewardship of Functional Emergence
          </div>
        </div>
      </header>

      <span id="essay-reader-start" aria-hidden="true" />

      <article className="canonEssay" id="canonical-essay">
        <div className="wrap canonEssayWrap">

          <div className="canonEssayHeader">
            <div className="canonEssayNum">SA-023</div>
            <div className="canonEssayRule" />
          </div>

          {/* ── CLASSIFICATION BLOCK ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Classification</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara"><strong>Document ID:</strong> SA-023</p>
              <p className="canonEssayPara"><strong>Version:</strong> V.01</p>
              <p className="canonEssayPara"><strong>Series:</strong> SA-Series · Synthesis Inquiry</p>
              <p className="canonEssayPara"><strong>Classification:</strong> {M.classification}</p>
              <p className="canonEssayPara"><strong>Registration Status:</strong> {M.registrationStatus}</p>
              <p className="canonEssayPara"><strong>Evidence Status:</strong> {M.evidenceStatus}</p>
              <p className="canonEssayPara"><strong>Canonical Status:</strong> {M.canonicalStatus}</p>
              <p className="canonEssayPara"><strong>Jurisdiction:</strong> {M.jurisdiction}</p>
              <p className="canonEssayPara"><strong>Companion Plate:</strong> P058 — Arriving Alive Before Reality</p>
              <p className="canonEssayPara">
                <strong>Registration:</strong> COMPLETE &nbsp;·&nbsp;
                <strong>Reality Verdict:</strong> PENDING &nbsp;·&nbsp;
                <strong>Identity:</strong> PRESERVED &nbsp;·&nbsp;
                <strong>Inquiry:</strong> CONTINUES
              </p>
              <p className="canonEssayPara"><strong>Lineage:</strong> SA-020 → SA-021 → SA-023</p>
            </div>
          </div>

          {/* ── COMPANION PLATE ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Companion Plate · P058</div>
            <div className="canonEssayBody">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <img
                  src="/plates/p058-arriving-alive-before-reality.png"
                  alt="P058 — Arriving Alive Before Reality"
                  style={{ maxWidth: '100%', borderRadius: '4px' }}
                />
              </div>
              <p className="canonEssayPara" style={{ fontSize: '0.82rem', color: 'var(--gray-lt)', textAlign: 'center' }}>
                P058 · Arriving Alive Before Reality · Companion architectural plate. The visual
                authority layer compresses the governing structure developed throughout this inquiry:
                the traveler is preserved, the map is honored, and the verdict belongs to reality.{' '}
                <a href="/system/plates/arriving-alive-before-reality" style={{ color: 'var(--gold)' }}>
                  View full plate →
                </a>
              </p>
            </div>
          </div>

          {/* ── EDITORIAL NOTICE ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Editorial Notice · Open Constitutional Inquiry</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                This manuscript presents an open constitutional inquiry into consciousness,
                individuation, reality contact, and phenomenal experience.
              </p>
              <p className="canonEssayPara">
                It does not claim to solve the hard problem of consciousness. It does not establish
                that biological organisms, artificial systems, dreams, or other entities possess
                phenomenal consciousness merely because they exhibit intelligence, memory,
                self-reference, boundary maintenance, or relational behavior.
              </p>
              <p className="canonEssayPara">
                The ontological ordering Identity → Structure → Reality is presented as a proposition
                of the framework, not as an established result of contemporary physics. The phenomenal
                bridge is preserved as an unresolved question. Where reality has not answered, the
                inquiry remains open.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                Registration records lawful entry into the constitutional corpus. It does not
                establish the candidate architecture as confirmed doctrine. Reality retains final
                authority over correspondence.
              </p>
            </div>
          </div>

          {/* ── MANUSCRIPT ── */}
          {SA023_SECTIONS.map((section, si) => (
            <div className="plateDetailBlock" id={si === 0 ? 'essay-body' : undefined} key={section.label}>
              <div className="plateDetailBlockLabel">{section.label}</div>
              <div className="canonEssayBody">
                {section.blocks.map((block, bi) => (
                  <Block block={block} key={bi} />
                ))}
              </div>
            </div>
          ))}

          {/* ── CONSTITUTIONAL DISPOSITION ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">SA-023 · V.01 — Constitutional Disposition</div>
            <div className="canonEssayBody">
              <div className="canonEssayEqBlock" style={{ margin: '0.5rem 0', textAlign: 'center' }}>
                <KTex math={SA023_DISPOSITION} display />
              </div>
            </div>
          </div>

          {/* ── CLOSING AXIOM ── */}
          <div className="canonEssayEqBlock" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.35rem' }}>
              Wisdom preserves the traveler, not the traveler's errors.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gray-lt)', fontSize: '1rem' }}>
              Open constitutional inquiry. Reality verdict pending.
            </div>
          </div>

          {/* ── COLOPHON ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Colophon</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara" style={{ fontWeight: 600 }}>Leon Powdar (Phase Reference)</p>
              <p className="canonEssayPara">SA-023 — Arriving Alive Before Reality · Version V.01 · Standing State Press</p>
              <p className="canonEssayPara" style={{ fontStyle: 'italic' }}>
                Integrity is the geometry. Reality is the metric.
              </p>
              <p className="canonEssayPara">NSRL-12 · Standing State · Rank-0 · Non-Sacrificial · Stationary</p>
              <p className="canonEssayPara">ORCID: {M.orcid}</p>
            </div>
          </div>

          <div className="canonEssayAuthor">
            Standing State Press · SA-Series · Synthesis Inquiry · Open Constitutional Inquiry · Candidate Constitutional Synthesis
          </div>

          {/* ── PREVIOUS / NEXT NAVIGATION ── */}
          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-constitutional-stewardship-of-functional-emergence">
              <span className="canonNavDir">Previous</span>
              <span className="canonNavTitle">SA-021 · The Constitutional Stewardship of Functional Emergence</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays</a>
            <span className="canonNavLink canonNavNext" style={{ opacity: 0.55 }}>
              <span className="canonNavDir">Next</span>
              <span className="canonNavTitle">Inquiry continues · No successor registered</span>
            </span>
          </div>

        </div>
      </article>

      <span id="essay-reader-end" aria-hidden="true" />

      <hr className="divider" />

    </>
  )
}
