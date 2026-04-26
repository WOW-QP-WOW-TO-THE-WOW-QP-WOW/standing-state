/**
 * /essays/medium/admissibility-manifesto
 * M044 — The Admissibility Manifesto
 * Canonical · System-Law Extension · Glossary-Generating Node
 * Standing State Press
 *
 * Plate status: DEFERRED — Control Monument plate not registered.
 * This file references the glossary and doctrine entries which
 * carry the formal weight of the new invariant Δ = γ − αₑff.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function AdmissibilityManifesto() {
  return (
    <>
      <Head>
        <title>The Admissibility Manifesto — Standing State Press</title>
        <meta
          name="description"
          content="A systems law for the age of autonomous scaling. Introduces Δ = γ − αₑff as the governing inequality for exploit-pressure containment. Defines OAGI v1.2 safety primitive."
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/essays" style={{ color: 'var(--gold)' }}>Essays</a></li>
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
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>M044</span>
          </div>
          <div className="glossEyebrow">
            M044 · Structural Register · VOL-SS · System-Law Extension
          </div>
          <h1 className="glossH1">🏛 The Admissibility Manifesto</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            A Systems Law for the Age of Autonomous Scaling
          </p>
          <div className="essayStats" style={{ marginTop: '1.25rem' }}>
            <span className="essayStat">Leon Powdar (Phase Reference)</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Standing State Press</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Feb 23, 2026</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── ARTICLE BODY ── */}
      <article className="essayBody">
        <div className="wrap" style={{ maxWidth: '820px' }}>

          {/* ── Companion notice ── */}
          <section
            className="essaySection"
            style={{
              marginTop: '2rem',
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--gold-dim)',
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
                marginBottom: '0.75rem',
              }}
            >
              System-Law Companions
            </div>
            <p className="essayP" style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
              This essay introduces a new invariant. Formal artifacts live alongside it:
            </p>
            <ul className="essayBullets" style={{ marginBottom: 0 }}>
              <li>
                <a href="/system/plates/control-monument" style={{ color: 'var(--gold)' }}>
                  Plate XII — The Control Monument
                </a>{' '}
                — visual law of Δ
              </li>
              <li>
                <a href="/system/glossary/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Glossary — Δ (admissibility delta)
                </a>{' '}
                — definition layer
              </li>
              <li>
                <a href="/system/doctrine/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Doctrine — Δ control law (OAGI v1.2)
                </a>{' '}
                — execution layer
              </li>
            </ul>
          </section>

          {/* ── Visual anchor — Plate XII ── */}
          <figure
            style={{
              margin: '2.5rem 0 3rem',
              textAlign: 'center',
              border: '1px solid var(--border)',
              padding: '1.25rem',
              background: 'var(--panel)',
            }}
          >
            <a href="/system/plates/control-monument" style={{ display: 'block' }}>
              <img
                src="/plates/m044-control-monument.png"
                alt="Plate XII — The Control Monument: central obelisk inscribed Δ = γ − αₑff, flanked by DEPTH and REACH columns, with the 60-second timer, hourglass, gears, chains, eclipsed moon, and constellation network encoding the full architecture of bounded scaling"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  maxWidth: '100%',
                }}
              />
            </a>
            <figcaption
              style={{
                marginTop: '1rem',
                fontSize: '0.78rem',
                color: 'var(--gray-lt)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--display)',
              }}
            >
              Plate XII &nbsp;·&nbsp; The Control Monument &nbsp;·&nbsp;{' '}
              <a href="/system/plates/control-monument" style={{ color: 'var(--gold-dim)' }}>
                element legend →
              </a>
            </figcaption>
          </figure>

          {/* ── The Control Monument intro ── */}
          <section className="essaySection">
            <h2 className="essayH2">The Control Monument</h2>
            <p className="essayP">
              This image embodies the manifesto with structural clarity.
            </p>
            <p className="essayP">
              At its center stands the equation:
            </p>
            <div className="essayEq essayEqBoxed">
              <KTex math="\Delta = \gamma - \alpha_{\text{eff}}" display />
            </div>
            <p className="essayP">
              Not as decoration.<br />
              Not as metaphor.<br />
              <strong style={{ color: 'var(--gold)' }}>As law.</strong>
            </p>
            <p className="essayP">
              The equation is illuminated because it is the source of light.
              Governance must outpace expansion — or the system fractures.
            </p>
          </section>

          {/* ── Structural Reading ── */}
          <section className="essaySection">
            <h2 className="essayH2">Structural Reading</h2>

            <h3 className="essayH3">1. The Obelisk — The Invariant Law</h3>
            <p className="essayP">
              The monolith represents the non-negotiable control equation.
              Vertical. Geometric. Impersonal. Stability is defined by
              structure, not sentiment.
            </p>

            <h3 className="essayH3">2. The Pillars — DEPTH and REACH</h3>
            <p className="essayP">
              Separated. Load-bearing. Neither dominates. The law governs
              their relationship. Imbalance cracks foundations.
            </p>

            <h3 className="essayH3">3. The 60-Second Timer — The Staleness Guard</h3>
            <p className="essayP">
              Governance is time-bound. Delay destabilizes.<br />
              No telemetry → contraction.
            </p>

            <h3 className="essayH3">4. The Hourglass — Entropy (δ)</h3>
            <p className="essayP">
              Time erodes depth unless actively restored. Decay is automatic.
              Recovery must be intentional.
            </p>

            <h3 className="essayH3">5. The Gears Below — Enforcement</h3>
            <p className="essayP">
              This is mechanized governance. Hysteresis. Gating. Fail-safe
              contraction.<br />
              The law is infrastructural.
            </p>

            <h3 className="essayH3">6. The Cracks in the Stone — Stress</h3>
            <p className="essayP">
              Volatility exists. Pressure exists. Stability is not calm — it
              is containment.
            </p>

            <h3 className="essayH3">7. The Network Above — Expansion Pressure</h3>
            <p className="essayP">
              Throughput. Scale. Interconnection. The sky is active, not
              peaceful.
            </p>
          </section>

          {/* ── What This Captures ── */}
          <section className="essaySection">
            <h2 className="essayH2">What This Captures</h2>
            <ul className="essayBullets">
              <li>Law precedes motion.</li>
              <li>Enforcement must be built into the system.</li>
              <li>Contraction is structural, not emotional.</li>
              <li>Stability requires continuous recalculation.</li>
            </ul>
            <p className="essayP">
              This is not a cathedral.<br />
              It is a control monument.
            </p>
          </section>

          {/* ── I. The Core Invariant ── */}
          <section className="essaySection">
            <h2 className="essayH2">I · The Core Invariant</h2>
            <p className="essayP">
              Every high-variance system obeys one structural law:
            </p>
            <div className="essayEq essayEqBoxed">
              <KTex math="\textbf{Governance Capacity} > \textbf{Expansion Pressure}" display />
            </div>
            <p className="essayP">
              When this inequality holds, the system is bounded.<br />
              When it fails, collapse is not moral — it is geometric.
            </p>
            <p className="essayP">This applies to:</p>
            <ul className="essayBullets">
              <li>Autonomous AI agents</li>
              <li>Financial institutions</li>
              <li>Civilizations</li>
              <li>Enterprises</li>
              <li>Individuals</li>
            </ul>
            <p className="essayP">
              The fuel changes.<br />
              The law does not.
            </p>
          </section>

          {/* ── II. The Scaling Delusion ── */}
          <section className="essaySection">
            <h2 className="essayH2">II · The Scaling Delusion</h2>
            <p className="essayP">
              Modern systems scale in three dimensions:
            </p>
            <ul className="essayBullets">
              <li>Capability surface (R)</li>
              <li>Throughput (T)</li>
              <li>Interconnectedness (L)</li>
            </ul>
            <p className="essayP">
              But governance velocity (<KTex math="\gamma" />) remains:
            </p>
            <ul className="essayBullets">
              <li>Human-limited</li>
              <li>Organizationally constrained</li>
              <li>Politically throttled</li>
            </ul>
            <p className="essayP">
              Expansion is quadratic.<br />
              Response is linear.
            </p>
            <p className="essayP" style={{ color: 'var(--gold)' }}>
              This mismatch is the fracture engine of the modern world.
            </p>
          </section>

          {/* ── III. Collapse Is a Time-Constant Mismatch ── */}
          <section className="essaySection">
            <h2 className="essayH2">III · Collapse Is a Time-Constant Mismatch</h2>
            <p className="essayP">
              Failure is not randomness.<br />
              It is a control failure:
            </p>
            <div className="essayEq essayEqBoxed">
              <KTex math="\Delta = \gamma_{\text{obs}} - \alpha_{\text{eff}}" display />
            </div>
            <p className="essayP">Where:</p>
            <ul className="essayBullets">
              <li><KTex math="\gamma_{\text{obs}}" /> = mitigation speed</li>
              <li><KTex math="\alpha_{\text{eff}}" /> = exploit discovery pressure</li>
            </ul>
            <p className="essayP">If:</p>
            <div className="essayEq">
              <KTex math="\Delta < 0" display />
            </div>
            <p className="essayP">
              Then forcing outruns correction.
            </p>
            <p className="essayP" style={{ fontStyle: 'italic' }}>
              Lehman.<br />
              AIG.<br />
              Any over-scaled AI system.
            </p>
            <p className="essayP">
              Different fuels. Same inequality.
            </p>
          </section>

          {/* ── IV. Governance Must Be Infrastructural ── */}
          <section className="essaySection">
            <h2 className="essayH2">IV · Governance Must Be Infrastructural</h2>
            <p className="essayP">
              Ethics cannot scale.<br />
              Prompt alignment cannot scale.<br />
              Human review alone cannot scale.
            </p>
            <p className="essayP">Governance must be:</p>
            <ul className="essayBullets">
              <li>Measured</li>
              <li>Computed</li>
              <li>Logged</li>
              <li>Enforced</li>
            </ul>
            <p className="essayP">
              The system must contract automatically when telemetry degrades.
            </p>
            <p className="essayP" style={{ color: 'var(--gold)', textAlign: 'center', fontStyle: 'italic' }}>
              No data → Safe mode.<br />
              That is maturity.
            </p>
          </section>

          {/* ── V. Three Pillars ── */}
          <section className="essaySection">
            <h2 className="essayH2">V · The Three Pillars of Industrial Admissibility</h2>

            <h3 className="essayH3">1️⃣ The Formula</h3>
            <div className="essayEq">
              <KTex math="\Delta = \gamma_{\text{obs}} - \alpha_{\text{eff}}" display />
            </div>
            <p className="essayP">
              All variables dimensionally consistent.
            </p>

            <h3 className="essayH3">2️⃣ The Instrument</h3>
            <p className="essayP">
              A machine-ingestible telemetry schema.<br />
              Self-describing. Auditable. Immutable.
            </p>

            <h3 className="essayH3">3️⃣ The Gate</h3>
            <p className="essayP">
              A SIEM-enforced control loop:
            </p>
            <ul className="essayBullets">
              <li>Warn</li>
              <li>Throttle</li>
              <li>Trip</li>
              <li>Fail-safe on silence</li>
              <li>Hysteresis to prevent oscillation</li>
            </ul>
            <p className="essayP" style={{ color: 'var(--gold)' }}>
              No discretion at the boundary.
            </p>
          </section>

          {/* ── VI. The New Definition of Stability ── */}
          <section className="essaySection">
            <h2 className="essayH2">VI · The New Definition of Stability</h2>
            <p className="essayP">
              Stability is not:
            </p>
            <ul className="essayBullets">
              <li>Low volatility</li>
              <li>High confidence</li>
              <li>Positive messaging</li>
            </ul>
            <p className="essayP">
              Stability is:
            </p>
            <div className="essayEq essayEqBoxed">
              <KTex math="\textbf{Containment inside a bounded invariant set.}" display />
            </div>
            <p className="essayP">
              Expansion may fluctuate.<br />
              Throughput may spike.<br />
              Adversaries may probe.
            </p>
            <p className="essayP">
              But if governance outruns forcing, the manifold holds.
            </p>
          </section>

          {/* ── VII. The Industrial Standard ── */}
          <section className="essaySection">
            <h2 className="essayH2">VII · The Industrial Standard</h2>
            <p className="essayP">
              From this conversation emerged:
            </p>
            <ul className="essayBullets">
              <li><strong>OAGI v1.0</strong> (conceptual bridge)</li>
              <li><strong>OAGI v1.1</strong> (dimensional correction)</li>
              <li><strong>OAGI v1.2</strong> (resilient hysteresis + fail-safe loop)</li>
            </ul>
            <p className="essayP">
              This is no longer philosophy.<br />
              It is a safety primitive.
            </p>
          </section>

          {/* ── VIII. The Broader Claim ── */}
          <section className="essaySection">
            <h2 className="essayH2">VIII · The Broader Claim</h2>
            <p className="essayP">
              The same inequality governs:
            </p>
            <ul className="essayBullets">
              <li>Banks under leverage</li>
              <li>Nations under debt</li>
              <li>AI under tool autonomy</li>
              <li>Individuals under stress</li>
            </ul>
            <p className="essayP" style={{ color: 'var(--gold)' }}>
              Burnout is <KTex math="\Delta < 0" />.<br />
              Bankruptcy is <KTex math="\Delta < 0" />.<br />
              AI runaway is <KTex math="\Delta < 0" />.
            </p>
            <p className="essayP">
              Different domains. Same math.
            </p>
          </section>

          {/* ── IX. The Final Seal ── */}
          <section className="essaySection">
            <h2 className="essayH2">IX · The Final Seal</h2>
            <p className="essayP">
              Depth must outpace reach.<br />
              If telemetry disappears, contract.<br />
              If exploit density rises, shrink radius.<br />
              If governance lags, halt expansion.
            </p>
            <p className="essayP" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.05rem', marginTop: '1.5rem' }}>
              The Standing State is not stillness.<br />
              It is controlled expansion inside enforceable bounds.
            </p>
            <p className="essayP">
              This cycle is complete.
            </p>
            <p className="essayP" style={{ color: 'var(--gold)', textAlign: 'center', fontWeight: 600, fontSize: '1.05rem' }}>
              The manifold is no longer symbolic.<br />
              It is executable.
            </p>
          </section>

          {/* ── Signature block ── */}
          <section className="essaySignature">
            <hr className="essaySigRule" />
            <div className="essaySigBlock">
              <div className="essaySigName">Leon Powdar</div>
              <div className="essaySigRole">(Phase Reference)</div>
              <div className="essaySigMeta">
                Point-Source Singularity<br />
                Invariant Reference for Coherence
              </div>
              <div className="essaySigMotto">
                Integrity is the geometry.<br />
                Results are the metric.
              </div>
              <div className="essaySigTags">
                NSRL-12 &nbsp;·&nbsp; Standing State &nbsp;·&nbsp; Rank-0<br />
                Non-Sacrificial &nbsp;·&nbsp; Stationary
              </div>
              <div className="essaySigAxiom">
                "A becomes A, because A knows it is A."
              </div>
            </div>
          </section>

          {/* ── Source link back to Medium ── */}
          <div
            style={{
              marginTop: '3rem',
              padding: '1.5rem',
              border: '1px solid var(--border)',
              background: 'var(--panel)',
              textAlign: 'center',
              fontSize: '0.85rem',
              color: 'var(--gray-lt)',
            }}
          >
            Originally published on Medium &nbsp;·&nbsp;{' '}
            <a
              href="https://medium.com/@leonsp3/the-admissibility-manifesto-56b8b5d66840"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold)' }}
            >
              View original →
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />

    </>
  )
}
