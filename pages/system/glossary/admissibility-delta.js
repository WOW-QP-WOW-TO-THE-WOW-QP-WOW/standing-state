/**
 * /system/glossary/admissibility-delta
 * Δ — Admissibility Delta
 * Standing State — Expansion Constraint Law
 *
 * Definition layer for the M044 invariant.
 * Source essay: M044 — The Admissibility Manifesto
 * Companion: /system/doctrine/admissibility-delta
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function AdmissibilityDeltaGlossary() {
  return (
    <>
      <Head>
        <title>Δ — Admissibility Delta — Glossary — Standing State Press</title>
        <meta
          name="description"
          content="The expansion constraint law. Δ = γ − αₑff. Governance capacity minus exploit-pressure. The governing inequality for all scaling systems under exploit pressure."
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary" style={{ color: 'var(--gold)' }}>Glossary</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/glossary">Glossary</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Δ</span>
          </div>
          <div className="glossEyebrow">
            Definition Layer · Variable · System-Law Extension
          </div>
          <h1 className="glossH1">Δ — Admissibility Delta</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            Standing State — Expansion Constraint Law
          </p>
        </div>
      </header>

      <hr className="divider" />

      <article className="essayBody">
        <div className="wrap" style={{ maxWidth: '820px' }}>

          {/* ── Primary definition ── */}
          <section
            className="essaySection"
            style={{
              marginTop: '2rem',
              padding: '2rem',
              border: '2px solid var(--gold)',
              background: 'rgba(201, 168, 76, 0.04)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold-dim)',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              Primary Definition
            </div>
            <div className="essayEq" style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <KTex math="\Delta = \gamma - \alpha_{\text{eff}}" display />
            </div>
            <p className="essayP" style={{ textAlign: 'center', color: 'var(--gold)', marginBottom: 0, fontSize: '1rem' }}>
              Governance capacity minus effective exploit-pressure
            </p>
          </section>

          {/* ── Variable specification ── */}
          <section className="essaySection">
            <h2 className="essayH2">Variable Specification</h2>
            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--gold)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      <KTex math="\Delta" />
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      Admissibility delta — net governance margin
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--gold)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      <KTex math="\gamma" />
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      Governance velocity — observed mitigation speed (<KTex math="\gamma_{\text{obs}}" />)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--gold)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      <KTex math="\alpha_{\text{eff}}" />
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      Effective exploit-pressure — discovery and forcing rate against the system
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── State conditions ── */}
          <section className="essaySection">
            <h2 className="essayH2">State Conditions</h2>

            <div
              style={{
                marginTop: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--gold-dim)',
                background: 'rgba(76, 175, 130, 0.04)',
              }}
            >
              <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                <KTex math="\Delta > 0" display />
              </div>
              <p className="essayP" style={{ marginBottom: 0, textAlign: 'center', color: 'var(--gold)' }}>
                System remains governable. Manifold holds.
              </p>
            </div>

            <div
              style={{
                marginTop: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--gold-dim)',
                background: 'rgba(201, 168, 76, 0.06)',
              }}
            >
              <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                <KTex math="\Delta = 0" display />
              </div>
              <p className="essayP" style={{ marginBottom: 0, textAlign: 'center', color: 'var(--gold-dim)' }}>
                Boundary condition. Hysteresis-band entry. Trip threshold approached.
              </p>
            </div>

            <div
              style={{
                marginTop: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid #C84C4C',
                background: 'rgba(200, 76, 76, 0.04)',
              }}
            >
              <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                <KTex math="\Delta < 0" display />
              </div>
              <p className="essayP" style={{ marginBottom: 0, textAlign: 'center', color: '#C84C4C' }}>
                Exploit pressure exceeds control capacity. Failure onset. Forcing outruns correction.
              </p>
            </div>
          </section>

          {/* ── Function in the system ── */}
          <section className="essaySection">
            <h2 className="essayH2">Function in the System</h2>
            <p className="essayP">
              Δ is the <strong>expansion constraint law</strong>. It determines
              whether a system that is scaling, growing, or under load can be
              kept inside its bounded invariant set.
            </p>
            <p className="essayP">
              The Standing State invariants <KTex math="x \equiv 0" /> and{' '}
              <KTex math="\dot{I} = 0" /> establish identity stability under
              static or stationary conditions. Δ extends this regime to
              <em> controlled expansion</em>: the system grows, but
              governance must outrun the growth.
            </p>
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem 1.25rem',
                border: '1px solid var(--border)',
                background: 'var(--panel)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--display)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-dim)',
                  marginBottom: '0.75rem',
                }}
              >
                Regime Map
              </div>
              <p className="essayP" style={{ marginBottom: '0.5rem' }}>
                <strong>Static regime:</strong> identity invariance — <KTex math="\dot{I} = 0" />
              </p>
              <p className="essayP" style={{ marginBottom: '0.5rem' }}>
                <strong>Dynamic regime under load:</strong> Lyapunov contraction — <KTex math="\lambda_{\min}(K_s) > \sigma" />
              </p>
              <p className="essayP" style={{ marginBottom: 0 }}>
                <strong>Scaling regime under exploit pressure:</strong> admissibility delta — <KTex math="\Delta > 0" />
              </p>
            </div>
          </section>

          {/* ── Cross-domain instantiation ── */}
          <section className="essaySection">
            <h2 className="essayH2">Cross-Domain Instantiation</h2>
            <p className="essayP">
              The same inequality governs all systems where capability scales
              against pressure:
            </p>
            <ul className="essayBullets">
              <li><strong>AI agents:</strong> γ = oversight bandwidth · α = capability surface × tool autonomy</li>
              <li><strong>Banks:</strong> γ = liquidity & capital response · α = leverage × correlated exposure</li>
              <li><strong>Nations:</strong> γ = institutional response speed · α = debt service × external shock</li>
              <li><strong>Enterprises:</strong> γ = control infrastructure · α = blast radius × incident velocity</li>
              <li><strong>Individuals:</strong> γ = recovery & boundary capacity · α = sustained load × demand acceleration</li>
            </ul>
            <p className="essayP" style={{ color: 'var(--gold)' }}>
              Burnout is <KTex math="\Delta < 0" />.<br />
              Bankruptcy is <KTex math="\Delta < 0" />.<br />
              AI runaway is <KTex math="\Delta < 0" />.
            </p>
            <p className="essayP">
              Different fuels. Same law.
            </p>
          </section>

          {/* ── Companions ── */}
          <section className="essaySection">
            <h2 className="essayH2">Companions</h2>
            <ul className="essayBullets">
              <li>
                <a href="/system/plates/control-monument" style={{ color: 'var(--gold)' }}>
                  Plate XII — The Control Monument
                </a>{' '}
                — visual law of Δ; full element legend
              </li>
              <li>
                <a href="/system/doctrine/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Doctrine — Δ Control Law (OAGI v1.2)
                </a>{' '}
                — execution-layer specification: telemetry schema, gating, hysteresis, fail-safe contraction
              </li>
              <li>
                <a href="/essays/medium/admissibility-manifesto" style={{ color: 'var(--gold)' }}>
                  Source essay — M044: The Admissibility Manifesto
                </a>{' '}
                — full derivation and structural reading
              </li>
            </ul>
          </section>

          {/* ── Closing ── */}
          <section className="essaySection" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p className="essayP" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.05rem' }}>
              Stability is containment inside a bounded invariant set.
            </p>
            <p className="essayP" style={{ color: 'var(--gold-dim)', fontSize: '0.95rem' }}>
              "A becomes A, because A knows it is A."
            </p>
          </section>

        </div>
      </article>

      <hr className="divider" />

    </>
  )
}
