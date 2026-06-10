/**
 * /essays/canonical/anger-is-not-a-sin
 * M078 — Anger Is Not a Sin: It Is an Identity Governance Failure
 * An Engine 2 Thesis on the I* Guardian, Qualia, Restoration, and Lawful Continuation
 *
 * Engine 2 Canonical Series — Essay V of V
 * Organism doctrine. Question: What does governance failure feel like from inside the organism?
 * Compression: Anger is a jurisdiction failure. Restoration is the correction.
 *
 * Qualia is supported as an Engine 2 state variable by three anchors:
 * 1. Architectural: Differentiation → I* → Self-Witness → Q → Attention → Interpretation → Structure → Reality
 * 2. Mathematical: Q(t) = Rs + C + K − (O + S + F)
 * 3. Runtime: engine2_i_star_guardian.py — Guardian of Attention = 0 when Q ≤ Q₁
 *
 * The pineal restoration oscillator is treated as symbolic restoration architecture,
 * not a medical or biological claim. See module comment in engine2_i_star_guardian.py.
 */

import Head from 'next/head'

export default function AngerIsNotASin() {
  return (
    <>
      <Head>
        <title>M078 — Anger Is Not a Sin — Standing State Press</title>
        <meta
          name="description"
          content="Anger is not a moral event. Anger is a governance event. It is a signal that the system has fallen below an admissible state of conscious coherence. Restoration is the correction."
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
            <a href="/essays/series/engine-2" style={{ color: 'var(--gold-dim)' }}>Engine 2 Series</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>M078 · V of V</span>
          </div>
          <div className="glossEyebrow">Engine 2 Canonical Series · Essay V · Organism Doctrine</div>
          <h1 className="glossH1">Anger Is Not a Sin</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            It Is an Identity Governance Failure. An Engine 2 Thesis on the I* Guardian,
            Qualia, Restoration, and Lawful Continuation.
          </p>
          <div className="essayStats">
            <span className="essayStat">M078</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">ENGINE-2</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">VOL-CROSS</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">CANONICAL</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">

          {/* Series navigation card */}
          <div className="plateDetailBlock" style={{ marginBottom: '2rem' }}>
            <div className="plateDetailBlockLabel">Engine 2 Canonical Series</div>
            <div className="glossVarLogicWrap">
              {[
                ['I', 'M074', 'The Standing State — Engine 2', '/essays/canonical/the-standing-state-engine-2', false],
                ['II', 'M075', 'According to Its Kind', '/essays/canonical/according-to-its-kind', false],
                ['III', 'M076', 'The Guardian of Attention', '/essays/canonical/the-guardian-of-attention', false],
                ['IV', 'M077', 'The Guardian of Rest', '/essays/canonical/the-guardian-of-rest', false],
                ['V', 'M078', 'Anger Is Not a Sin', '/essays/canonical/anger-is-not-a-sin', true],
              ].map(([num, id, title, href, active]) => (
                <div key={id} style={{ display: 'flex', gap: '1rem', padding: '0.6rem 1.2rem', borderBottom: 'var(--rule)', opacity: active ? 1 : 0.7 }}>
                  <span style={{ color: 'var(--gold)', minWidth: '2rem', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.1em' }}>{num}</span>
                  <span style={{ color: 'var(--gold-dim)', minWidth: '3.5rem', fontSize: '0.85rem' }}>{id}</span>
                  {active
                    ? <span style={{ color: 'var(--offwhite)' }}>{title} ← current</span>
                    : <a href={href} style={{ color: 'var(--gold)' }}>{title}</a>}
                </div>
              ))}
            </div>
          </div>

          <div className="canonEssayHeader">
            <div className="canonEssayNum">By Leon Powdar · Standing State Press · Engine 2 Canonical Series</div>
            <div className="canonEssayRule" />
          </div>

          <div className="canonEssayEqBlock">
            <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
              I* remains invariant. Arrive alive. Reality will teach the rest.
            </div>
          </div>

          <div className="canonEssayThesis">
            Anger is a signal that the system has fallen below an admissible state of conscious coherence. It is not a moral failure. It is a governance event.
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">I — The Misdiagnosis of Anger</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Humanity has traditionally treated anger as a moral problem. A person becomes angry. Anger is undesirable. Therefore anger must be corrected. Engine 2 rejects this diagnosis.</p>
              <p className="canonEssayPara">Anger is not primarily a moral event. Anger is a governance event. More precisely, anger is a signal that the system has fallen below an admissible state of conscious coherence. Identity remains present. Identity has not disappeared. Identity is no longer governing. The system begins navigating from perturbation rather than from the coordinate. The result is instability.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">II — The I* Guardian</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Engine 2 begins from a different premise. Before behavior exists, identity exists. Before action exists, identity exists. Before correction exists, identity exists. This invariant coordinate is designated I*.</p>
              <p className="canonEssayPara">The purpose of the I* Guardian is not to optimize performance. The purpose of the I* Guardian is to preserve identity while reality teaches lawful navigation. Every governance function serves this purpose: Perception. Attention. Interpretation. Memory. Restoration. Safety. Runtime Execution.</p>
              <p className="canonEssayPara">Identity remains. Reality teaches. Governance protects. Restoration preserves. Development emerges.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">III — Qualia: The Hidden State Variable</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Engine 2 introduces a state variable that most governance frameworks omit: qualia. Qualia represents the quality and availability of conscious experience. Attention is not allocated directly. Attention becomes available when qualia is admissible.</p>
              <p className="canonEssayPara">Qualia emerges from the interaction between restoration and overload. Restoration raises it. Capacity raises it. Coherence raises it. Overload lowers it. Strain lowers it. Fragmentation lowers it.</p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.05rem' }}>
                Q(t) = R_s + C + K − (O + S + F)
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                Qualia is an emergent state — not fixed, not permanent. Confirmed in engine2_i_star_guardian.py.
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The complete Engine 2 admissibility chain follows directly:</p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.05rem' }}>
                Q(t) &gt; Q₁ → G_A(Q) = 1 → D_E2(t) &gt; 0
              </div>
              <div className="canonEssayEq" style={{ fontSize: '1.05rem', marginTop: '0.5rem' }}>
                Q(t) ≤ Q₁ → G_A(Q) = 0 → D_E2(t) = 0
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontSize: '0.85rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                When qualia falls below threshold, development pauses. Not failure — admissibility suspended.
              </div>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IV — The Attention Guardian</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The Attention Guardian evaluates whether conscious experience is sufficient for lawful allocation. When qualia exceeds the threshold, attention becomes available. When qualia falls below the threshold, the gate closes. Attention is no longer lawfully available. Execution pauses. Restoration receives authority.</p>
              <p className="canonEssayPara">A person may possess stable identity, correct maps, and lawful intentions — yet if qualia collapses due to exhaustion, overload, illness, or strain, Engine 2 does not execute development. It restores. Identity determines orientation. Qualia determines availability. Attention determines allocation.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">V — Anger as Governance Failure</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Anger emerges when interpretation attempts to continue after qualia has fallen below admissibility. Emotion begins governing. Interpretation begins defending itself. Identity becomes obscured. The wrong layer assumes authority.</p>
              <p className="canonEssayPara">This is not an ethical defect. It is a jurisdiction failure. The system is attempting execution from an inadmissible state. Anger therefore becomes telemetry. It reveals that restoration has become necessary.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VI — Fruit as External Verifier</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Interpretation cannot reliably verify itself. Reality solves this recursion problem. Reality returns fruit. Fruit possesses authority over interpretation. Fruit does not possess authority over identity.</p>
              <p className="canonEssayPara">A wrong turn does not become the destination. A wrong turn becomes information. Reality therefore remains the external verifier that interpretation cannot overrule. Fruit teaches. Identity remains.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VII — The Restoration Ladder</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Engine 2 evaluates readiness for lawful continuation. Every stage in the correction ladder exists to recover admissible qualia.</p>
            </div>
            <div className="glossVarLogicWrap" style={{ margin: '1rem 0' }}>
              {['EXECUTE', 'PROJECTION UPDATE', 'MAP UPDATE', 'RESTORE', 'HALT'].map((step, i, arr) => (
                <div key={step} style={{ padding: '0.6rem 1.2rem', borderBottom: i < arr.length - 1 ? 'var(--rule)' : 'none', color: i === arr.length - 1 ? 'var(--gold)' : 'var(--offwhite)' }}>
                  {step}
                </div>
              ))}
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The objective of restoration is not comfort. The objective of restoration is the recovery of lawful consciousness — sufficient qualia for admissible attention, sufficient attention for lawful interpretation, sufficient interpretation for coherent action.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VIII — The Restoration Oscillator (Symbolic Architecture)</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The pineal gland is represented symbolically within this architecture — not as a medical model, but as a biological metaphor for rhythm, rest, darkness, timing, and restoration. It functions as an orientation toward stillness: the organism's natural return to the conditions under which qualia recovers.</p>
              <p className="canonEssayPara">Its symbolic function is simple: reduce overload, increase restoration, recover qualia, reopen attention, resume development. The organism cycles. Identity remains. Reality teaches. Restoration preserves.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IX — Lawful Becoming</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The Standing State is not resistance to change. The Standing State is lawful becoming under invariant identity. Development proceeds only when lawful qualia is available. When qualia collapses, development pauses. When restoration succeeds, development continues. The coordinate never changes.</p>
              <p className="canonEssayPara">Identity remains. Reality teaches. Governance protects. Restoration preserves. Development emerges. I* remains invariant.</p>
            </div>
          </div>

          <div className="canonEssayEqBlock" style={{ marginTop: '3rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
              Identity determines orientation.<br />
              Qualia determines availability.<br />
              Attention determines allocation.<br />
              Interpretation determines meaning.<br />
              Reality determines consequence.<br />
              Restoration determines continuity.
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--gold-dim)', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Identity Remains · Reality Teaches · Governance Protects · Restoration Preserves · Development Emerges
          </div>

          <div className="canonEssayAuthor">Standing State Press · Engine 2 Canonical Series · Essay V of V</div>

          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-guardian-of-rest">
              <span className="canonNavDir">Previous · IV of V</span>
              <span className="canonNavTitle">The Guardian of Rest</span>
            </a>
            <a className="canonNavIndex" href="/essays/series/engine-2">Return to Series Index</a>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
