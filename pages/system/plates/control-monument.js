/**
 * /system/plates/control-monument
 * PLATE XI — THE CONTROL MONUMENT
 * Visual law of Δ = γ − αₑff
 *
 * Canonical companion to:
 *   /essays/medium/admissibility-manifesto      (M044 — derivation)
 *   /system/glossary/admissibility-delta        (Δ — definition)
 *   /system/doctrine/admissibility-delta        (Δ — execution / OAGI v1.2)
 *
 * This page is the visual-authority node. The plate is the law.
 * The page contextualizes the plate's structural elements and links
 * back to the system loop. No logic duplication from doctrine.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function PlateControlMonument() {
  return (
    <>
      <Head>
        <title>Plate XI — The Control Monument — Standing State Press</title>
        <meta
          name="description"
          content="Plate XI — visual law of Δ = γ − αₑff. Governance capacity versus expansion pressure. Control architecture for bounded scaling."
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
            <li><a href="/system/plates" style={{ color: 'var(--gold)' }}>Plates</a></li>
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
            <a href="/system/plates">Plates</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>XI</span>
          </div>
          <div className="glossEyebrow">
            Plate XI · Visual Authority · System-Law Extension
          </div>
          <h1 className="glossH1">The Control Monument</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            Visual law of Δ = γ − αₑff
          </p>
        </div>
      </header>

      <hr className="divider" />

      <article className="essayBody">
        <div className="wrap" style={{ maxWidth: '900px' }}>

          {/* ── The plate itself ── */}
          <figure
            style={{
              margin: '2rem 0 3rem',
              textAlign: 'center',
              border: '2px solid var(--gold-dim)',
              padding: '1.5rem',
              background: 'var(--panel)',
            }}
          >
            <img
              src="/plates/m044-control-monument.png"
              alt="Plate XI — The Control Monument. Central obelisk inscribed with Δ = γ − αₑff, flanked by columns labeled DEPTH and REACH. A 60-second timer at lower left, an hourglass at lower right, gears beneath the cracked stone platform, chains across the foundation, an eclipsed moon above, and a constellation network stretching across the night sky."
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxWidth: '100%',
              }}
            />
            <figcaption
              style={{
                marginTop: '1.25rem',
                fontSize: '0.78rem',
                color: 'var(--gold-dim)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'var(--display)',
              }}
            >
              Plate XI &nbsp;·&nbsp; The Control Monument
            </figcaption>
          </figure>

          {/* ── Governing inscription ── */}
          <section
            className="essaySection"
            style={{
              padding: '1.75rem 2rem',
              border: '2px solid var(--gold)',
              background: 'rgba(201, 168, 76, 0.04)',
              textAlign: 'center',
              marginTop: 0,
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
              Inscribed on the Obelisk
            </div>
            <div className="essayEq" style={{ marginBottom: '0.5rem' }}>
              <KTex math="\Delta = \gamma - \alpha_{\text{eff}}" display />
            </div>
            <p className="essayP" style={{ marginBottom: 0, color: 'var(--gold)', fontSize: '0.95rem' }}>
              Governance capacity minus effective exploit-pressure
            </p>
          </section>

          {/* ── What the plate is ── */}
          <section className="essaySection">
            <h2 className="essayH2">What This Plate Is</h2>
            <p className="essayP">
              Plate XI is not illustration. It is the visual statement of a
              system law. Each element carries function, not metaphor. The
              monument as a whole encodes the conditions under which a
              scaling system remains admissible.
            </p>
            <p className="essayP">
              The plate exists alongside three companion artifacts that carry
              the same law in different registers:
            </p>
            <ul className="essayBullets">
              <li>
                <a href="/essays/medium/admissibility-manifesto" style={{ color: 'var(--gold)' }}>
                  M044 — The Admissibility Manifesto
                </a>{' '}
                — derivation in prose
              </li>
              <li>
                <a href="/system/glossary/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Glossary — Δ (admissibility delta)
                </a>{' '}
                — definition layer
              </li>
              <li>
                <a href="/system/doctrine/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Doctrine — Δ Control Law (OAGI v1.2)
                </a>{' '}
                — execution layer
              </li>
            </ul>
          </section>

          {/* ── Element legend ── */}
          <section className="essaySection">
            <h2 className="essayH2">Element Legend</h2>

            {[
              {
                el: '1. The Obelisk',
                fn: 'The Invariant Law',
                desc: 'The monolith carries the non-negotiable control equation. Vertical, geometric, impersonal. Stability is defined by structure, not sentiment.',
              },
              {
                el: '2. The Pillars — DEPTH and REACH',
                fn: 'Load-Bearing Variables',
                desc: 'Separated. Neither dominates. The law governs their relationship. Imbalance cracks foundations.',
              },
              {
                el: '3. The 60-Second Timer',
                fn: 'The Staleness Guard',
                desc: 'Governance is time-bound. Delay destabilizes. No telemetry → contraction.',
              },
              {
                el: '4. The Hourglass',
                fn: 'Entropy (δ)',
                desc: 'Time erodes depth unless actively restored. Decay is automatic. Recovery must be intentional.',
              },
              {
                el: '5. The Gears Below',
                fn: 'Mechanized Enforcement',
                desc: 'Hysteresis. Gating. Fail-safe contraction. The law is infrastructural, not advisory.',
              },
              {
                el: '6. The Cracks in the Stone',
                fn: 'Stress',
                desc: 'Volatility exists. Pressure exists. Stability is not calm — it is containment.',
              },
              {
                el: '7. The Network Above',
                fn: 'Expansion Pressure',
                desc: 'Throughput. Scale. Interconnection. The sky is active, not peaceful.',
              },
              {
                el: '8. The Chains',
                fn: 'Constraint Binding',
                desc: 'The boundary holds. Mechanical, not negotiable. Bindings are the operational form of the inequality.',
              },
              {
                el: '9. The Eclipsed Moon',
                fn: 'Bounded Set',
                desc: 'The bounded invariant set the system must contain itself within. Visible, finite, governed.',
              },
            ].map((e) => (
              <div
                key={e.el}
                style={{
                  marginTop: '1rem',
                  padding: '1rem 1.25rem',
                  borderLeft: '3px solid var(--gold-dim)',
                  background: 'var(--panel)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--gold)',
                    }}
                  >
                    {e.el}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-dim)',
                    }}
                  >
                    — {e.fn}
                  </span>
                </div>
                <p style={{ margin: 0, color: 'var(--white-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </section>

          {/* ── What the plate captures ── */}
          <section className="essaySection">
            <h2 className="essayH2">What the Plate Captures</h2>
            <ul className="essayBullets">
              <li>Law precedes motion.</li>
              <li>Enforcement must be built into the system.</li>
              <li>Contraction is structural, not emotional.</li>
              <li>Stability requires continuous recalculation.</li>
            </ul>
            <p className="essayP">
              This is not a cathedral.<br />
              <strong style={{ color: 'var(--gold)' }}>It is a control monument.</strong>
            </p>
          </section>

          {/* ── System loop ── */}
          <section className="essaySection">
            <h2 className="essayH2">System Loop</h2>
            <p className="essayP">
              Plate XI sits inside a closed structural loop. Each node points
              to all the others. Removal of any one breaks the loop.
            </p>
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.5rem 1.75rem',
                border: '1px solid var(--gold-dim)',
                background: 'rgba(201, 168, 76, 0.04)',
                fontFamily: 'var(--display)',
                fontSize: '0.85rem',
                lineHeight: 2,
                textAlign: 'center',
                color: 'var(--gold)',
                letterSpacing: '0.1em',
              }}
            >
              M044 (law) <br />
              ↓ <br />
              PLATE XI (visual law) <br />
              ↓ <br />
              GLOSSARY Δ (definition) <br />
              ↓ <br />
              DOCTRINE Δ (execution)
            </div>
          </section>

          {/* ── Closing seal ── */}
          <section className="essaySection" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p className="essayP" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.05rem' }}>
              The Standing State is not stillness.<br />
              It is controlled expansion inside enforceable bounds.
            </p>
            <p className="essayP" style={{ color: 'var(--gold-dim)', fontSize: '0.95rem' }}>
              "A becomes A, because A knows it is A."
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
