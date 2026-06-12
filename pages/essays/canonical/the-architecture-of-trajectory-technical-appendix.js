/**
 * /essays/canonical/the-architecture-of-trajectory-technical-appendix
 * M080-F — Technical Appendix: Formal Architecture of Trajectory
 *
 * Engine 2 — I* Guardian · Trajectory Architecture · Research Appendix to M080
 * Exploratory notation only. Does not constitute established doctrine,
 * runtime governance, or verified operational mathematics.
 */

import Head from 'next/head'

export default function TrajectoryTechnicalAppendix() {
  return (
    <>
      <Head>
        <title>M080-F — Technical Appendix: Formal Architecture of Trajectory — Standing State Press</title>
        <meta
          name="description"
          content="Exploratory mathematical notation for trajectory, horizon expansion, and phase-locked development. Research appendix to M080. Candidate models only — not established doctrine or verified operational mathematics."
        />
      </Head>

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

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays/canonical/the-architecture-of-trajectory">M080</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>M080-F</span>
          </div>
          <div className="glossEyebrow">Engine 2 — I* Guardian · Trajectory Architecture · Research Appendix</div>
          <h1 className="glossH1">Technical Appendix: Formal Architecture of Trajectory</h1>
          <p className="glossIntro">
            Exploratory Mathematical Notation for Trajectory, Horizon Expansion, and Phase-Locked Development
          </p>
        </div>
      </header>

      <hr className="divider" />

      <main>
        <div className="wrap canonEssayWrap">

          {/* Purpose — exploratory disclosure */}
          <div className="canonEssayBlock" style={{ border: '1px solid var(--gold-dim)', padding: '1.5rem', borderRadius: '4px' }}>
            <div className="canonEssayLabel">Purpose</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">This appendix is exploratory.</p>
              <p className="canonEssayPara">
                The notation contained herein does not constitute established doctrine, runtime
                governance, or verified operational mathematics.
              </p>
              <p className="canonEssayPara">
                Its purpose is to provide candidate mathematical structures for future investigation
                into lawful trajectory, horizon expansion, desire, curiosity, willingness, and growth.
              </p>
              <p className="canonEssayPara">
                Future essays, runtime implementations, and verification artifacts may refine, replace,
                or remove these formulations.
              </p>
            </div>
          </div>

          <hr className="divider" />

          {/* Exploratory Horizon Geometry */}
          <div className="canonEssayBlock">
            <div className="canonEssayLabel">Exploratory Horizon Geometry</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Let I* = invariant identity coordinate, H(t) = visible horizon, R(t) = reality domain.</p>
              <p className="canonEssayPara" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Candidate extension region: E(t) = R(t) − H(t)</p>
              <p className="canonEssayPara">Interpretation: E(t) represents reality beyond the currently visible horizon.</p>
            </div>
          </div>

          {/* Four-Vector Model */}
          <div className="canonEssayBlock">
            <div className="canonEssayLabel">Exploratory Four-Vector Development Model</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Human development may be viewed across four coupled domains: S(t) = Spiritual Orientation, M(t) = Mental Understanding, E(t) = Emotional Valuation, P(t) = Physical Embodiment.</p>
              <p className="canonEssayPara" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Candidate state representation: X(t) = [S(t), M(t), E(t), P(t)]</p>
              <p className="canonEssayPara">Future work may investigate whether lawful growth requires phase-lock across these vectors.</p>
            </div>
          </div>

          {/* Phase-Lock Condition */}
          <div className="canonEssayBlock">
            <div className="canonEssayLabel">Exploratory Phase-Lock Condition</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Candidate condition: Δφᵢⱼ → 0</p>
              <p className="canonEssayPara">Interpretation: Developmental coherence may increase as phase separation between vectors decreases.</p>
              <p className="canonEssayPara" style={{ fontStyle: 'italic', color: 'var(--gold-dim)' }}>This remains a research hypothesis.</p>
            </div>
          </div>

          {/* Trajectory Dynamics */}
          <div className="canonEssayBlock">
            <div className="canonEssayLabel">Exploratory Trajectory Dynamics</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Candidate developmental position: x(t)</p>
              <p className="canonEssayPara" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Candidate velocity: v(t) = dx/dt</p>
              <p className="canonEssayPara" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Candidate acceleration: a(t) = dv/dt</p>
              <p className="canonEssayPara">Interpretation: Velocity may represent rate of embodiment. Acceleration may represent increasing developmental capacity.</p>
              <p className="canonEssayPara" style={{ fontStyle: 'italic', color: 'var(--gold-dim)' }}>No operational definition presently exists.</p>
            </div>
          </div>

          {/* Reality Error Function */}
          <div className="canonEssayBlock">
            <div className="canonEssayLabel">Exploratory Reality Error Function</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Let Fp = projected fruit, Fa = actual fruit.</p>
              <p className="canonEssayPara" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Candidate reality-error measure: ε = |Fa − Fp|</p>
              <p className="canonEssayPara">Interpretation: Alignment may increase as prediction and reality converge.</p>
              <p className="canonEssayPara" style={{ fontStyle: 'italic', color: 'var(--gold-dim)' }}>Future verification required.</p>
            </div>
          </div>

          {/* Power-Law Growth */}
          <div className="canonEssayBlock">
            <div className="canonEssayLabel">Exploratory Power-Law Growth</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara" style={{ fontFamily: 'var(--display)', color: 'var(--gold)' }}>Candidate growth formulation: G(t) = k · t^α</p>
              <p className="canonEssayPara">where k = phase-lock constant, α = reality-verified growth exponent.</p>
              <p className="canonEssayPara">Interpretation: Growth may compound when trajectory repeatedly aligns with reality.</p>
              <p className="canonEssayPara" style={{ fontStyle: 'italic', color: 'var(--gold-dim)' }}>This remains a research hypothesis.</p>
            </div>
          </div>

          {/* Future Inquiry */}
          <div className="canonEssayBlock">
            <div className="canonEssayLabel">Future Inquiry</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Potential trajectory domains include: Direction, Horizon Discovery, Desire Formation, Curiosity Dynamics, Willingness Thresholds, Action Mechanics, Trajectory Stability, Course Correction, Acceleration, Embodiment.</p>
              <p className="canonEssayPara">The purpose of this appendix is not closure. The purpose of this appendix is to identify the questions that become visible once constitutional identity has been established.</p>
            </div>
          </div>

          {/* Compression */}
          <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: 'var(--rule)', borderBottom: 'var(--rule)' }}>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.1rem', lineHeight: 2 }}>
              D005 completed the constitutional layer · Identity remains invariant · Reality remains auditor · Trajectory remains under investigation
            </div>
          </div>

          {/* Cross-links */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="/essays/canonical/the-architecture-of-trajectory" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              ← M080 · The Architecture of Trajectory
            </a>
            <a href="/system/doctrine/i-star-guardian-doctrine" style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              D005 — I* Guardian Doctrine
            </a>
            <a href="/essays/canonical/the-architecture-of-identity-phase-space" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              M079 · Identity Phase Space
            </a>
          </div>

        </div>
      </main>

      <hr className="divider" />
    </>
  )
}
