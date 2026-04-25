/**
 * /system/doctrine/admissibility-delta
 * Δ Control Law — OAGI v1.2
 * Execution-Layer Doctrine for the Admissibility Manifesto
 *
 * Source essay: M044 — The Admissibility Manifesto
 * Companion: /system/glossary/admissibility-delta
 *
 * This is the execution layer. The glossary defines what Δ is.
 * This file defines how Δ is enforced.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function AdmissibilityDeltaDoctrine() {
  return (
    <>
      <Head>
        <title>Δ Control Law (OAGI v1.2) — Doctrine — Standing State Press</title>
        <meta
          name="description"
          content="Execution-layer specification for the admissibility delta. OAGI v1.2: telemetry schema, hysteresis, gating, fail-safe contraction. Industrial admissibility primitive."
        />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
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
            <a href="/system/doctrine">Doctrine</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Δ Control Law</span>
          </div>
          <div className="glossEyebrow">
            Execution Layer · Industrial Admissibility · OAGI v1.2
          </div>
          <h1 className="glossH1">Δ Control Law</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            OAGI v1.2 — Operational Admissibility Governance Infrastructure
          </p>
        </div>
      </header>

      <hr className="divider" />

      <article className="essayBody">
        <div className="wrap" style={{ maxWidth: '820px' }}>

          {/* ── Header invariant ── */}
          <section className="essaySection" style={{ marginTop: '2rem' }}>
            <div
              style={{
                padding: '1.75rem 2rem',
                border: '2px solid var(--gold)',
                background: 'rgba(201, 168, 76, 0.04)',
                textAlign: 'center',
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
                }}
              >
                Governing Inequality
              </div>
              <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
                <KTex math="\Delta = \gamma_{\text{obs}} - \alpha_{\text{eff}} > 0" display />
              </div>
              <p className="essayP" style={{ marginBottom: 0, color: 'var(--gold)', fontSize: '0.95rem' }}>
                System is admissible iff governance velocity exceeds effective exploit-pressure.
              </p>
            </div>
          </section>

          {/* ── Scope ── */}
          <section className="essaySection">
            <h2 className="essayH2">Scope</h2>
            <p className="essayP">
              This doctrine applies to any system that scales:
            </p>
            <ul className="essayBullets">
              <li>Capability surface (R) growing</li>
              <li>Throughput (T) increasing</li>
              <li>Interconnectedness (L) compounding</li>
            </ul>
            <p className="essayP">
              Where governance velocity is human-limited, organizationally
              constrained, or politically throttled, the gap between expansion
              and response widens. The Δ control law is the enforcement
              boundary that prevents that gap from becoming a fracture.
            </p>
          </section>

          {/* ── OAGI Versioning ── */}
          <section className="essaySection">
            <h2 className="essayH2">OAGI Versioning</h2>

            <div
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border)',
                background: 'var(--panel)',
                marginBottom: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--gold-dim)' }}>OAGI v1.0</span>
                <span style={{ color: 'var(--white-dim)' }}>Conceptual bridge — admissibility as principle</span>
              </div>
            </div>

            <div
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border)',
                background: 'var(--panel)',
                marginBottom: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--gold-dim)' }}>OAGI v1.1</span>
                <span style={{ color: 'var(--white-dim)' }}>Dimensional correction — Δ formalized with consistent units</span>
              </div>
            </div>

            <div
              style={{
                padding: '1.25rem 1.5rem',
                border: '2px solid var(--gold)',
                background: 'rgba(201, 168, 76, 0.05)',
                marginBottom: '0.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--gold)' }}>OAGI v1.2 · CURRENT</span>
                <span style={{ color: 'var(--gold)' }}>Resilient hysteresis + fail-safe loop — production-ready primitive</span>
              </div>
            </div>
          </section>

          {/* ── The three pillars ── */}
          <section className="essaySection">
            <h2 className="essayH2">The Three Pillars</h2>

            {/* Pillar 1 */}
            <div style={{ marginTop: '1.5rem' }}>
              <h3 className="essayH3">1️⃣ The Formula</h3>
              <div className="essayEq essayEqBoxed">
                <KTex math="\Delta = \gamma_{\text{obs}} - \alpha_{\text{eff}}" display />
              </div>
              <p className="essayP">
                All variables dimensionally consistent. Δ, γ, and α expressed
                in the same time-rate units (events / second, mitigations /
                hour, etc.). No unit mismatch is permitted at the boundary.
              </p>
            </div>

            {/* Pillar 2 */}
            <div style={{ marginTop: '2rem' }}>
              <h3 className="essayH3">2️⃣ The Instrument</h3>
              <p className="essayP">
                A machine-ingestible telemetry schema:
              </p>
              <ul className="essayBullets">
                <li><strong>Self-describing</strong> — schema versioned, fields typed</li>
                <li><strong>Auditable</strong> — every Δ computation traceable to source telemetry</li>
                <li><strong>Immutable</strong> — append-only ledger; no retroactive correction</li>
              </ul>
              <p className="essayP">
                Without instrumentation, Δ is unmeasurable. Without
                measurability, the law has no enforcement surface.
              </p>
            </div>

            {/* Pillar 3 */}
            <div style={{ marginTop: '2rem' }}>
              <h3 className="essayH3">3️⃣ The Gate</h3>
              <p className="essayP">
                A SIEM-enforced control loop with five mandatory states:
              </p>
              <div style={{ marginTop: '1rem' }}>
                {[
                  ['WARN', 'Δ approaching boundary; signal-only; no contraction yet'],
                  ['THROTTLE', 'Δ inside hysteresis band; reduce expansion rate'],
                  ['TRIP', 'Δ < 0; immediate contraction; halt non-essential expansion'],
                  ['FAIL-SAFE ON SILENCE', 'No telemetry within staleness window → safe mode'],
                  ['HYSTERESIS', 'Asymmetric thresholds for entry/exit to prevent oscillation'],
                ].map(([state, desc]) => (
                  <div
                    key={state}
                    style={{
                      padding: '0.85rem 1rem',
                      borderLeft: '3px solid var(--gold-dim)',
                      background: 'var(--panel)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--display)', fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.25rem' }}>
                      {state}
                    </div>
                    <div style={{ fontSize: '0.92rem', color: 'var(--white-dim)' }}>
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
              <p className="essayP" style={{ marginTop: '1rem', color: 'var(--gold)' }}>
                No discretion at the boundary.
              </p>
            </div>
          </section>

          {/* ── Staleness guard ── */}
          <section className="essaySection">
            <h2 className="essayH2">The Staleness Guard</h2>
            <p className="essayP">
              Governance is time-bound. A Δ value computed five minutes ago is
              not a current admissibility statement. The 60-second timer
              encodes this:
            </p>
            <div className="essayEq essayEqBoxed">
              <KTex math="t_{\text{telemetry}} > T_{\text{stale}} \;\Rightarrow\; \text{contract}" display />
            </div>
            <p className="essayP">
              No telemetry → contraction. The default state under information
              loss is <em>not</em> trust. It is safe mode.
            </p>
            <p className="essayP" style={{ color: 'var(--gold)', textAlign: 'center', fontStyle: 'italic', marginTop: '1rem' }}>
              No data → Safe mode.<br />
              That is maturity.
            </p>
          </section>

          {/* ── Hysteresis specification ── */}
          <section className="essaySection">
            <h2 className="essayH2">Hysteresis Specification</h2>
            <p className="essayP">
              Single-threshold gates oscillate. The Δ control law uses
              asymmetric thresholds with a deliberate band:
            </p>
            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--gold-dim)' }}>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>TRANSITION</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>ENTRY</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>EXIT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 0.5rem' }}>NORMAL → WARN</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><KTex math="\Delta < \theta_w" /></td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><KTex math="\Delta > \theta_w + \epsilon" /></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 0.5rem' }}>WARN → THROTTLE</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><KTex math="\Delta < \theta_t" /></td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><KTex math="\Delta > \theta_t + \epsilon" /></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 0.5rem' }}>THROTTLE → TRIP</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><KTex math="\Delta < 0" /></td>
                    <td style={{ padding: '0.75rem 0.5rem' }}><KTex math="\Delta > \epsilon" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="essayP" style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--white-dim)' }}>
              Where <KTex math="\theta_w > \theta_t > 0" /> and{' '}
              <KTex math="\epsilon > 0" /> is the dead-band tuned to the
              system's natural variance.
            </p>
          </section>

          {/* ── Enforcement principles ── */}
          <section className="essaySection">
            <h2 className="essayH2">Enforcement Principles</h2>
            <ul className="essayBullets">
              <li><strong>Measured</strong> — every variable has a sensor</li>
              <li><strong>Computed</strong> — Δ continuously recalculated within the staleness window</li>
              <li><strong>Logged</strong> — every state transition recorded immutably</li>
              <li><strong>Enforced</strong> — gates act mechanically, not advisorially</li>
            </ul>
            <p className="essayP">
              Ethics cannot scale. Prompt alignment cannot scale. Human
              review alone cannot scale. The control law is mechanical or it
              is not a law.
            </p>
          </section>

          {/* ── Failure modes ── */}
          <section className="essaySection">
            <h2 className="essayH2">Failure Modes</h2>
            <p className="essayP">
              The control law fails in four canonical ways:
            </p>
            <ul className="essayBullets">
              <li><strong>Sensor failure:</strong> γ or α unmeasured → staleness guard contracts the system</li>
              <li><strong>Threshold gaming:</strong> system tunes itself to ride just above θ → audit ledger required</li>
              <li><strong>Discretionary override:</strong> human bypasses gate → undermines mechanical enforcement; doctrine forbids it</li>
              <li><strong>Dimensional drift:</strong> γ and α units diverge → recalibration required; OAGI v1.1 closure</li>
            </ul>
          </section>

          {/* ── Companions ── */}
          <section className="essaySection">
            <h2 className="essayH2">Companions</h2>
            <ul className="essayBullets">
              <li>
                <a href="/system/glossary/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Glossary — Δ (admissibility delta)
                </a>{' '}
                — definition layer
              </li>
              <li>
                <a href="/essays/medium/admissibility-manifesto" style={{ color: 'var(--gold)' }}>
                  Source essay — M044: The Admissibility Manifesto
                </a>{' '}
                — full derivation
              </li>
            </ul>
          </section>

          {/* ── Closing ── */}
          <section className="essaySection" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p className="essayP" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.05rem' }}>
              The Standing State is not stillness.<br />
              It is controlled expansion inside enforceable bounds.
            </p>
            <p className="essayP" style={{ color: 'var(--gold-dim)', fontSize: '0.95rem', marginTop: '1rem' }}>
              The manifold is no longer symbolic. It is executable.
            </p>
          </section>

        </div>
      </article>

      <hr className="divider" />

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
