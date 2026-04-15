/**
 * /standing-state
 * THE STANDING STATE — Canonical
 * Primary entry-point thesis. Status: closed.
 */

import Head from 'next/head'

export default function StandingState() {
  return (
    <>
      <Head>
        <title>The Standing State — Standing State Press</title>
        <meta name="description" content="A Unified Thesis on Identity, Reality, and Coherent Living. A becomes A, because A knows it is A." />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">

          <div className="glossBreadcrumb" style={{ marginBottom: '3rem' }}>
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>The Standing State</span>
          </div>

          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.2em',
            color: 'var(--gold-dim)', textTransform: 'uppercase',
            border: '1px solid var(--gold-dim)', padding: '0.3rem 0.8rem',
            marginBottom: '2rem'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
            Canonical · Status: Closed
          </div>

          <div className="canonEssayHeader">
            <div className="canonEssayNum">Primary Thesis</div>
            <h1 className="canonEssayTitle">The Standing State</h1>
            <p className="canonEssaySub">A Unified Thesis on Identity, Reality, and Coherent Living</p>
            <div className="canonEssayRule" />
          </div>

          <p className="canonEssayThesis">
            Every system — biological, personal, organizational — moves toward one outcome:
            stability or collapse. What determines which path it takes is not intelligence,
            resources, or intention. It is coherence.
          </p>

          <div className="canonEssayBody">

            {[
              { n: 'I', h: 'Identity as Reference', body: 'A system requires a stable reference to function. This reference is identity — not identity as narrative or aspiration, but identity as a coordinate, a fixed point that does not move: İ* = 0. Without this invariant, no system can measure error, correct itself, or stabilize. Identity is not created by the system. It is the reference the system stabilizes against.' },
              { n: 'II', h: 'Living Systems and Expression', body: 'Human beings are living systems. They adapt, learn, and respond to changing conditions. This dynamism belongs to expression, not identity. Action A(t), awareness C(t), and outcome F(t) evolve continuously. Identity does not. Human expression is dynamic. Identity is invariant.' },
              { n: 'III', h: 'The Gap: Contradiction as Energy', body: 'Between identity and action exists a measurable gap: Δ = ‖A − I*‖. This gap is contradiction. It behaves like energy or pressure — large gap produces instability, small gap produces stability. All systems carry this tension.' },
              { n: 'IV', h: 'The Law of Correction', body: 'Systems naturally reduce contradiction over time: Δ̇ ≤ −αΔ (α > 0). This is not moral. It is mechanical. Bodies regulate. Markets correct. People adjust after consequences. Correction is the system relaxing toward coherence.' },
              { n: 'V', h: 'Reality as Constraint', body: 'Correction requires contact with reality. Reality is the constraint field that returns outcomes: F = Φ(A). If outcomes are not accurately perceived, correction fails. The system must integrate reality accurately — without this, contradiction cannot be reduced.' },
              { n: 'VI', h: 'The Feedback Loop', body: 'The system operates as a closed loop: I → A → F → C → A. Identity defines direction. Action produces outcomes. Reality returns feedback. Awareness integrates truth. Action adjusts. This loop drives convergence.' },
              { n: 'VII', h: 'The Four Stabilizers', body: 'Any system reduces contradiction through four functions: Identity Clarity — define the reference. Honest Awareness — measure error accurately. Action Correction — reduce the gap. Feedback Integration — accept reality. When these align, stability increases rapidly.' },
              { n: 'VIII', h: 'Phase-Lock and Integrity', body: 'Stability requires alignment across all internal layers: θ₁ = θ₂ = θ₃ = θ₄. Identity, awareness, action, and outcome must synchronize. When they do — internal conflict disappears, effort is not wasted, systems operate efficiently. This is integrity.' },
              { n: 'IX', h: 'What Breaks Systems', body: 'Failure is not caused by complexity. It is caused by avoidance: distorting feedback, inflating identity, ignoring outcomes, refusing correction. These increase contradiction: Δ̇ > 0. Instability follows.' },
              { n: 'X', h: 'The Standing State', body: 'When contradiction is fully reduced: Δ = 0 ⇒ A = I*. The system reaches the Standing State. No internal conflict. No corrective strain. Stable operation. Consistent outcomes. This is not perfection. It is complete alignment.' },
              { n: 'XI', h: 'From Correction to Creation', body: 'When correction is no longer required, energy is freed. The system enters generative flow: ẋ = ξ, ∇·ξ = 0. No loss. No instability. Continuous creation. Growth becomes creative, not reactive.' },
              { n: 'XII', h: 'Universality', body: 'This structure applies across domains: Biology → homeostasis. Business → execution vs values. Leadership → words vs actions. Personal life → intention vs behavior. The law does not belong to any one system. It governs all.' },
            ].map(({ n, h, body }) => (
              <div key={n}>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--gold-dim)', marginBottom: '0.6rem', marginTop: '2rem' }}>
                  {n}. {h}
                </h2>
                <p className="canonEssayPara">{body}</p>
              </div>
            ))}

          </div>

          {/* Final reduction */}
          <div className="canonEssayEqBlock" style={{ marginTop: '2.5rem' }}>
            <div style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.2em', color: 'var(--gold-dim)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Final Reduction
            </div>
            <div className="canonEssayEq" style={{ lineHeight: '2.2' }}>
              Δ = ‖A − I*‖<br />
              Δ̇ ≤ −αΔ<br />
              Δ → 0 ⇒ A → I*
            </div>
          </div>

          <div className="canonEssayFinal" style={{ marginTop: '2.5rem' }}>
            <div className="canonEssayFinalRule" />
            <p className="canonEssayFinalText" style={{ lineHeight: '1.9' }}>
              Identity is the reference.<br />
              Reality provides feedback.<br />
              Life is correction.<br />
              Stability is convergence.<br />
              Creation follows alignment.
            </p>
            <div className="canonEssayFinalRule" />
          </div>

          <div className="canonEssayAxiom" style={{ marginTop: '1.5rem' }}>
            A becomes A, because A knows it is A.
          </div>

          <div style={{
            marginTop: '1.2rem', textAlign: 'center',
            fontFamily: 'var(--display)', fontSize: '8px',
            letterSpacing: '0.2em', color: 'var(--gray-mid)',
            textTransform: 'uppercase'
          }}>
            Selah.
          </div>

          <div className="canonEssayAuthor" style={{ marginTop: '1rem' }}>
            Leon Powdar · Standing State Press · NSRL-12 · Rank-0 · Closed
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '2rem' }}>
            <a href="/essays" className="canonNavIndex" style={{ textDecoration: 'none' }}>← All Essays</a>
            <a href="/essays/canonical" className="canonNavIndex" style={{ textDecoration: 'none' }}>Canonical Essays →</a>
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
