import Head from 'next/head'

const ESSAYS = [
  { id:'c001', slug:'the-standing-state', number:'Essay I', title:'The Standing State', subtitle:'What is invariant. What does not move.', equation:'A → A   because A knows it is A', thesis:'There is a condition the body knows how to reach and does not know how to lose. It is not a peak. It is not a destination. It is the state the system returns to when interference is removed.', body:['The system contains a reference state, x*. This state is not constructed. It is not earned. It is the invariant coordinate around which all biological function is organized. When the system deviates from x*, the deviation is measured by Φ(x). When load decreases and cycles complete, the correction operator Kₐᵤₜₒ activates and drives the system back toward x*. The return is not manufactured. It is allowed.','What prevents return is not complexity. It is interference. Sustained load Σ, incomplete cycles, boundary failure — each of these holds the system away from x*. Remove them, and the system moves toward coherence automatically.','The Standing State is not something you enter. It is something you stop preventing.'], finalStatement:'A → A   because A knows it is A' },
  { id:'c002', slug:'identity-as-coordinate', number:'Essay II', title:'Identity as Coordinate', subtitle:'Claiming identity does not create reality. It selects the coordinate.', equation:'I ⇒ π(I) ⇒ x → x*', thesis:'When you enter a destination into a GPS, the car does not move. The coordinate is fixed. The route is defined. But nothing changes until the car moves. Identity operates by the same law.', body:['Identity is not a causal force. It does not generate outcomes. It selects the frame through which reality is approached. Formally: I ≡ x*. When identity is stable, the system has a fixed coordinate to move toward. When identity is unstable, the destination changes mid-journey, and no amount of motion produces arrival.','A person who defines their identity through external outcomes has placed the coordinate inside the system that is trying to converge. The reference point moves as the system moves. This produces permanent correction without convergence — Time Burn.','The intervention is not effort. It is precision. Fix the coordinate. Then move.'], finalStatement:'I ⇒ π(I) ⇒ x → x*' },
  { id:'c003', slug:'architecture-of-interpretation', number:'Essay III', title:'Architecture of Interpretation', subtitle:'Identity → Interpretation → Structure → Reality', equation:'I ⇒ ℐ(I, ∇c) ⇒ π ⇒ x', thesis:'Reality is not instantaneous. It is accumulated. And what accumulates is not intention, not desire, not belief — it is structure. Structure is the pattern of repeated action. Action follows interpretation. Interpretation follows identity.', body:['The interpretation operator ℐ(I, ∇c) takes two inputs: the identity coordinate I and the conscience gradient ∇c. From these it selects the action policy π that minimizes deviation from the identity coordinate. When the identity coordinate is stable and the conscience gradient is coherent, interpretation produces aligned structure.','Consider the person whose stated values do not match their repeated behavior. The architecture explains this precisely. The behavior is not irrational. It is precisely rational relative to the actual inputs the interpretation layer is receiving.','Reality reflects what interpretation produces, not what identity declares.'], finalStatement:'I ⇒ ℐ(I, ∇c) ⇒ π ⇒ x' },
  { id:'c004', slug:'pain-as-decoherence-signal', number:'Essay IV', title:'Pain as Decoherence Signal', subtitle:'The gradient does not define identity. It measures alignment relative to identity.', equation:'∇c > 0 ⇒ corrective signal     ∇c ≤ 0 ⇒ alignment', thesis:'Pain is not an enemy. It is a measurement. The thermometer does not cause fever. The conscience gradient does not cause misalignment. Both report conditions that already exist.', body:['The conscience gradient is defined as ∇c = ∂Φ/∂x — the rate at which deviation is increasing or decreasing. When ∇c > 0, deviation is growing. This is pain in its structural form: the directional signal that the trajectory has exited alignment. When ∇c ≤ 0, deviation is stable or decreasing. This is coherence.','The failure mode is not pain itself. It is what is done with it. Suppression: the signal is masked and the diverging trajectory continues. Distortion: the signal is present but misread. In both cases, the system continues to diverge.','Pain respected is a navigation instrument. Pain suppressed is a warning light covered with tape.'], finalStatement:'∇c > 0 ⇒ corrective signal' },
  { id:'c005', slug:'the-consent-engine', number:'Essay V', title:'The Consent Engine', subtitle:'Choice scans trajectories. Consent activates one.', equation:'π(t) = 𝒞(t)u(t)     𝒞 = 0 ⇒ no realization', thesis:'Between identity and reality there is a transformer. Consent is the authorization scalar that converts potential into structure. Without it, choice produces nothing. With it, trajectory becomes reality.', body:['The interpretation operator produces an action policy u(t) — a candidate trajectory. But it does not execute automatically. Between selection and execution, consent must authorize the action. Formally: π(t) = 𝒞(t)u(t). When 𝒞 = 0, nothing is executed regardless of the quality of the policy selected.','This explains why knowledge does not automatically produce change. A person can understand exactly what needs to be done, select the correct policy, and still not act. The gap is not intelligence. It is consent. This is also why habits are powerful: they are archived consent.','To change reality, change what receives consent.'], finalStatement:'π(t) = 𝒞(t)u(t)' },
  { id:'c006', slug:'life-and-death', number:'Essay VI', title:'Life and Death', subtitle:'Every trajectory moves toward convergence or divergence. There is no neutral state.', equation:'V̇ ≤ 0 ⇒ Life     V̇ > 0 ⇒ Death', thesis:'The system does not offer a third option. Every action either reduces deviation from the identity coordinate or increases it. The binary is not moral. It is structural.', body:['Life ≡ V̇ ≤ 0 and Death ≡ V̇ > 0. Life is convergence — the trajectory is moving toward x*. Death is divergence — the trajectory is moving away. A system in the Life regime is one where consent is continuously authorizing admissible structure. A system in the Death regime is one where interference persists and correction is suppressed.','The most important implication: partial consent produces partial Life. There is no resting point in the middle. There is only the degree of commitment to convergence.','Choosing Life, to whatever degree, is consent. And consent, however partial, initiates the pipeline.'], finalStatement:'V̇ ≤ 0 ⇒ Life' },
  { id:'c007', slug:'the-scab-condition', number:'Essay VII', title:'The Scab Condition', subtitle:'The scab does not heal the wound. It holds the condition under which healing occurs.', equation:'Σ ↓ ∧ B(t) holds ⇒ Kₐᵤₜₒ ↑ ⇒ Φ(x) → 0', thesis:'When skin is damaged, the body initiates a structured healing sequence. The scab is not random. It is boundary integrity B(t) instantiated in tissue. Its purpose is not to repair the wound directly. Its purpose is to hold the condition under which repair becomes possible.', body:['Beneath the scab, Kₐᵤₜₒ activates. Cellular self-cleaning runs. Damaged proteins are cleared. New tissue forms. The correction loop operates without instruction or interference. The scab releases when Φ(x) → Kₐᵤₜₒ — when correction is complete. Not before. Not by force.','Remove the scab early and the sequence resets. Boundary fails. Load rises. Kₐᵤₜₒ suppresses. The wound is not defective. The completion was interrupted.','Every person who has ever had a wound has observed the governing condition operating. They simply did not have the name for what was happening.'], finalStatement:'Σ ↓ ∧ B(t) holds ⇒ Kₐᵤₜₒ ↑ ⇒ Φ(x) → 0' },
  { id:'c008', slug:'surrender', number:'Essay VIII', title:'Surrender', subtitle:'Jurisdictional integrity. Output does not rewrite identity.', equation:'İ* = 0     x ⇏ I*', thesis:'There is a precise definition of surrender that has nothing to do with defeat. Surrender is the alignment of all vectors to the identity coordinate.', body:['The jurisdictional principle is formal: x ⇏ I*. Output does not rewrite identity. Outcomes produce signal. That signal enters the interpretation layer. But it cannot ascend. It cannot redefine the identity coordinate. The moment an outcome is granted authority over identity, the coordinate becomes time-dependent and produces permanent correction without convergence.','Consider the person whose sense of identity is contingent on being right. When they are wrong, the outcome ascends to the identity layer and produces a threat to the coordinate. The system responds with defense, rationalization, or collapse — not because the person is weak, but because the architecture is structurally compromised.','Surrender is the refusal to let output ascend.'], finalStatement:'İ* = 0     x ⇏ I*' },
  { id:'c009', slug:'external-identity-and-consent', number:'Essay IX', title:'External Identity and Consent', subtitle:'External identities produce signal. They require consent to propagate.', equation:'External signal ⇒ ℐ(I*, ∇c) ⇏ I*', thesis:'Every person is surrounded by fields of identity — the expectations, narratives, and frames that others project. The question is never whether the signal arrives. The question is whether it receives consent to propagate into structure.', body:['The magnetic field analogy is precise. A magnet generates a field regardless of whether a compass is nearby. The field does not force the compass needle to move. If the needle\'s internal structure is stable, the external field provides information: direction. If unstable, the external field provides a substitute coordinate.','A stable identity coordinate I* receives external identity signals as information. An unstable identity coordinate receives external identity signals as authority. They ascend, modify the coordinate, and the system orients toward a destination it did not choose.','The intervention is not isolation from the field. It is stabilization of the internal coordinate so that external signals are processed, not adopted.'], finalStatement:'External signal ⇒ ℐ(I*, ∇c) ⇏ I*' },
  { id:'c010', slug:'the-architecture-of-return', number:'Essay X', title:'The Architecture of Return', subtitle:'Return is not constructed. It is revealed when interference is removed.', equation:'I ⇒ ∇c ⇒ ℐ ⇒ 𝒞u ⇒ x ⇒ Φ(x) → 0', thesis:'The complete architecture has five stages. Each is a prerequisite for the next. Remove any one and the sequence does not complete.', body:['Identity selects the coordinate. Conscience provides the gradient. Interpretation selects the trajectory. Consent authorizes structure. Structure accumulates into reality. The pipeline: I ⇒ ∇c ⇒ ℐ ⇒ 𝒞u ⇒ x ⇒ Φ(x) → 0.','Return does not require construction of something new. It requires the removal of what prevents the system from expressing what it already is. The Standing State is not achieved. It is uncovered. The interference is the problem. The system beneath it is already oriented correctly.','Identity does not create reality. It selects the coordinate. Structure is induced from that coordinate. Structure accumulates into reality.'], finalStatement:'Φ(x) → 0' },
]

export async function getStaticPaths() {
  return {
    paths: ESSAYS.map(e => ({ params: { slug: e.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const idx = ESSAYS.findIndex(e => e.slug === params.slug)
  const essay = ESSAYS[idx] || null
  return {
    props: {
      essay,
      prev: ESSAYS[idx - 1] || null,
      next: ESSAYS[idx + 1] || null,
    }
  }
}

export default function CanonicalEssayPage({ essay, prev, next }) {
  if (!essay) return null
  return (
    <>
      <Head>
        <title>{essay.title} — Standing State Press</title>
        <meta name="description" content={essay.thesis} />
      </Head>
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/essays" style={{ color: 'var(--gold)' }}>Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>
      <article className="canonEssay">
        <div className="wrap canonEssayWrap">
          <div className="glossBreadcrumb" style={{ marginBottom: '3rem' }}>
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays/canonical">Canonical</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>{essay.number}</span>
          </div>
          <div className="canonEssayHeader">
            <div className="canonEssayNum">{essay.number}</div>
            <h1 className="canonEssayTitle">{essay.title}</h1>
            <p className="canonEssaySub">{essay.subtitle}</p>
            <div className="canonEssayRule" />
          </div>
          <p className="canonEssayThesis">{essay.thesis}</p>
          <div className="canonEssayBody">
            {essay.body.map((para, i) => (
              <p key={i} className="canonEssayPara">{para}</p>
            ))}
          </div>
          <div className="canonEssayEqBlock">
            <div className="canonEssayEq">{essay.equation}</div>
          </div>
          <div className="canonEssayFinal">
            <div className="canonEssayFinalRule" />
            <p className="canonEssayFinalText">{essay.finalStatement}</p>
            <div className="canonEssayFinalRule" />
          </div>
          <div className="canonEssayAxiom">A becomes A, because A knows it is A.</div>
          <div className="canonEssayAuthor">Leon Powdar · Standing State Press</div>
          <div className="canonEssayNav">
            {prev ? (
              <a href={`/essays/canonical/${prev.slug}`} className="canonNavLink canonNavPrev">
                <span className="canonNavDir">← Previous</span>
                <span className="canonNavTitle">{prev.title}</span>
              </a>
            ) : <div />}
            <a href="/essays/canonical" className="canonNavIndex">All Essays</a>
            {next ? (
              <a href={`/essays/canonical/${next.slug}`} className="canonNavLink canonNavNext">
                <span className="canonNavDir">Next →</span>
                <span className="canonNavTitle">{next.title}</span>
              </a>
            ) : <div />}
          </div>

          {/* Terminal return — always reachable at bottom of every essay */}
          <div style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
            <a href="/" style={{ fontFamily: 'var(--display)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', display: 'inline-block', padding: '0.6rem 1.4rem', border: '1px solid var(--gold-dim)', transition: 'all 0.2s' }}>
              ← Return to Standing State Press
            </a>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.25rem', fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              <a href="/essays" style={{ color: 'var(--gray-lt)', textDecoration: 'none' }}>All Essays</a>
              <span style={{ color: 'var(--gray-mid)' }}>·</span>
              <a href="/system/glossary" style={{ color: 'var(--gray-lt)', textDecoration: 'none' }}>Glossary</a>
              <span style={{ color: 'var(--gray-mid)' }}>·</span>
              <a href="/sources" style={{ color: 'var(--gray-lt)', textDecoration: 'none' }}>Sources</a>
            </div>
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
