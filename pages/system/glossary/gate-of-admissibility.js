/**
 * /system/glossary/gate-of-admissibility
 * Gate of Admissibility — Apex Operator
 * Standing State — Unified System
 *
 * Definition layer for the apex operator.
 * Source essay: C012 — The Gate of Admissibility (canonical)
 * Companion: /system/plates/gate-of-admissibility (Plate XIV)
 * Doctrine: /system/doctrine/admissibility-gate (D003)
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function GateOfAdmissibilityGlossary() {
  return (
    <>
      <Head>
        <title>Gate of Admissibility — Glossary — Standing State Press</title>
        <meta
          name="description"
          content="The apex operator. Φ(x; I*) ≤ 0. The unified admissibility gate that governs every prior plate."
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
            <span style={{ color: 'var(--gold-dim)' }}>Gate of Admissibility</span>
          </div>
          <div className="glossEyebrow">
            Definition Layer · Apex Operator · Unified System
          </div>
          <h1 className="glossH1">Gate of Admissibility</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            The unified operator. The gate that governs every prior plate.
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
              <KTex math="\Phi(x;\, I^{*}) \le 0" display />
            </div>
            <p className="essayP" style={{ textAlign: 'center', color: 'var(--gold)', marginBottom: 0, fontSize: '1rem' }}>
              The admissibility condition. Movement is permitted only within the gate.
            </p>
          </section>

          {/* ── Composite operator structure ── */}
          <section className="essaySection">
            <h2 className="essayH2">Composite Operator Structure</h2>
            <p className="essayP">
              The gate is not a single equation. It is a three-tier composite operator that binds
              invariant, flow, and topology into one admissibility condition.
            </p>

            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--gold)',
                background: 'rgba(255, 217, 122, 0.04)',
              }}
            >
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '0.75rem' }}>
                Tier I · Invariant
              </div>
              <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                <KTex math="I^{*} \;=\; \text{constant} \quad \forall\, t" display />
              </div>
              <p className="essayP" style={{ marginBottom: 0, color: 'var(--gold)' }}>
                The reference does not move. Identity is the fixed coordinate.
              </p>
            </div>

            <div
              style={{
                marginTop: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid #5fbf85',
                background: 'rgba(95, 191, 133, 0.04)',
              }}
            >
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#5fbf85', marginBottom: '0.75rem' }}>
                Tier II · Admissible Flow
              </div>
              <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                <KTex math="\Phi(x;\, I^{*}) \le 0 \;\Rightarrow\; x \to I^{*}" display />
              </div>
              <p className="essayP" style={{ marginBottom: 0, color: '#7be0a8' }}>
                When the condition holds, expression converges toward the reference.
              </p>
            </div>

            <div
              style={{
                marginTop: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid #bf5f5f',
                background: 'rgba(191, 95, 95, 0.04)',
              }}
            >
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#bf5f5f', marginBottom: '0.75rem' }}>
                Tier III · Topology · Trigger
              </div>
              <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                <KTex math="x \notin S(I^{*}) \;\Rightarrow\; \dagger" display />
              </div>
              <p className="essayP" style={{ marginBottom: 0, color: '#ff9a9a' }}>
                When state leaves the admissible set, the path terminates. The field persists.
              </p>
            </div>
          </section>

          {/* ── Navigable set ── */}
          <section className="essaySection">
            <h2 className="essayH2">Navigable Set</h2>
            <p className="essayP">
              Admissibility alone does not guarantee traversal. A path may be admissible yet unreachable.
              The system separates admissibility from realizability:
            </p>
            <div
              style={{
                marginTop: '1.5rem',
                padding: '2rem',
                border: '1px solid var(--gold)',
                background: 'rgba(201, 168, 76, 0.04)',
              }}
            >
              <div className="essayEq" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                <KTex math="\mathcal{N}(x_t) \;=\; \mathcal{A} \;\cap\; \mathcal{R}(x_t)" display />
              </div>
              <p className="essayP" style={{ textAlign: 'center', marginBottom: 0, color: 'var(--gold-dim)', fontStyle: 'italic' }}>
                Traversal occurs only within 𝒩(x_t)
              </p>
            </div>

            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--gold)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      <KTex math="\mathcal{N}(x_t)" />
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      Navigable set — paths the system may actually take
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--gold)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      <KTex math="\mathcal{A}" />
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      Admissible set — <KTex math="\{x : \Phi(x;\, I^{*}) \le 0\}" />
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.85rem 0.5rem', color: 'var(--gold)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      <KTex math="\mathcal{R}(x_t)" />
                    </td>
                    <td style={{ padding: '0.85rem 0.5rem' }}>
                      Reachable set — states reachable from <KTex math="x_t" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="essayP" style={{ marginTop: '1rem', color: 'var(--gold)' }}>
              Capability alone is not enough. Reach alone is not enough.
              Power without admissibility becomes drift.
            </p>
          </section>

          {/* ── Termination dagger ── */}
          <section className="essaySection">
            <h2 className="essayH2">Termination — The Dagger</h2>
            <div
              style={{
                marginTop: '1rem',
                padding: '1.5rem 2rem',
                border: '1px solid #ff7a7a',
                background: 'rgba(255, 122, 122, 0.04)',
              }}
            >
              <div className="essayEq" style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#ff9a9a' }}>
                <KTex math="\dagger \;=\; \text{Path termination (trajectory halts, field persists)}" display />
              </div>
            </div>
            <p className="essayP" style={{ marginTop: '1.5rem' }}>
              The dagger is exact. Termination is not annihilation. The trajectory halts —
              the field persists. The reference remains. Re-entry remains possible when conditions
              return to admissibility.
            </p>
            <p className="essayP" style={{ color: 'var(--gold)' }}>
              This is the difference between correction and collapse.
            </p>
          </section>

          {/* ── Return operator ── */}
          <section className="essaySection">
            <h2 className="essayH2">Return Operator</h2>
            <p className="essayP">
              Return does not occur by adding more pressure. Return occurs by clearing what
              obstructs coherence:
            </p>
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.5rem 2rem',
                border: '1px solid #5fbf85',
                background: 'rgba(95, 191, 133, 0.04)',
              }}
            >
              <div className="essayEq" style={{ textAlign: 'center', marginBottom: '0.5rem', color: '#7be0a8' }}>
                <KTex math="\Phi(x) \to 0 \quad \text{as} \quad \Sigma \downarrow \quad \text{and} \quad K_{\text{auto}} \uparrow" display />
              </div>
              <p className="essayP" style={{ textAlign: 'center', marginBottom: 0, color: '#7be0a8', fontStyle: 'italic' }}>
                Return is subtractive (autophagy / mitophagy)
              </p>
            </div>
            <p className="essayP" style={{ marginTop: '1.5rem' }}>
              In biological language, this is the logic of autophagy and mitophagy.
              In system language, it is subtractive repair. Stress load must fall.
              Correction must rise. The body, mind, institution, or machine cannot return to
              coherence while continuously adding load without allowing clearing.
            </p>
          </section>

          {/* ── Compression dichotomy ── */}
          <section className="essaySection">
            <h2 className="essayH2">Compression Has Two Outcomes</h2>
            <p className="essayP">
              Every system compresses. The question is whether compression remains admissible.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
              <div style={{ padding: '1.25rem', border: '1px solid #5fbf85', background: 'rgba(95, 191, 133, 0.04)' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#5fbf85', marginBottom: '0.5rem' }}>
                  Admissible
                </div>
                <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                  <KTex math="\Phi \le 0" display />
                </div>
                <p className="essayP" style={{ marginBottom: 0, fontSize: '0.9rem', color: '#7be0a8' }}>
                  expression authorized · reference preserved
                </p>
              </div>
              <div style={{ padding: '1.25rem', border: '1px solid #bf5f5f', background: 'rgba(191, 95, 95, 0.04)' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#bf5f5f', marginBottom: '0.5rem' }}>
                  Deviant
                </div>
                <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                  <KTex math="\Phi > 0" display />
                </div>
                <p className="essayP" style={{ marginBottom: 0, fontSize: '0.9rem', color: '#ff9a9a' }}>
                  expression blocked · reference distorted
                </p>
              </div>
            </div>
          </section>

          {/* ── Cross-domain instantiation ── */}
          <section className="essaySection">
            <h2 className="essayH2">Cross-Domain Instantiation</h2>
            <p className="essayP">
              The same gate appears across domains. Different fuels, same law.
            </p>
            <ul className="essayBullets">
              <li><strong>Biology:</strong> stress load (Σ) · boundary integrity (B(t)) · correction (K_auto) · return</li>
              <li><strong>Computation:</strong> execution authority · topology · admissibility set · halt</li>
              <li><strong>Finance:</strong> leverage · exposure · liquidity · failure propagation</li>
              <li><strong>Personal development:</strong> attention from identity vs attention from fear thinking</li>
            </ul>
            <p className="essayP" style={{ color: 'var(--gold)' }}>
              The substrate changes. The gate remains.
            </p>
          </section>

          {/* ── Why governance must precede execution ── */}
          <section className="essaySection">
            <h2 className="essayH2">Governance Precedes Execution</h2>
            <p className="essayP">
              Modern systems audit after output, regulate after deployment, explain after damage,
              apologize after drift. That is backward.
            </p>
            <p className="essayP" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
              The question is not what the system did. The question is whether the system
              was permitted to move there in the first place.
            </p>
            <p className="essayP">
              Standing State places governance at the boundary before action crosses into
              consequence. That is the function of the gate.
            </p>
          </section>

          {/* ── Companions ── */}
          <section className="essaySection">
            <h2 className="essayH2">Companions</h2>
            <ul className="essayBullets">
              <li>
                <a href="/system/plates/gate-of-admissibility" style={{ color: 'var(--gold)' }}>
                  Plate XIV — The Gate of Admissibility (Unified System)
                </a>{' '}
                — visual law of the apex operator with three-tier composite, navigable set, biological mirror, return operator, and termination node
              </li>
              <li>
                <a href="/system/doctrine/admissibility-gate" style={{ color: 'var(--gold)' }}>
                  Doctrine D003 — Admissibility Gate
                </a>{' '}
                — execution-layer specification: governance must precede execution
              </li>
              <li>
                <a href="/essays/canonical/gate-of-admissibility" style={{ color: 'var(--gold)' }}>
                  Source essay — C012: The Gate of Admissibility
                </a>{' '}
                — full canonical thesis and structural reading
              </li>
            </ul>
          </section>

          {/* ── Closing ── */}
          <section className="essaySection" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p className="essayP" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.05rem' }}>
              The Standing State is not stillness. It is movement that does not betray the reference.
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
