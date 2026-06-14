/**
 * /essays/canonical/the-mathematical-physics-of-continuity
 * MD66-PROV-MATH-001 — The Mathematical Physics of Continuity:
 * Differentiation, Identity, Lineage, and the Geometry of Propagation
 *
 * Audit Status: CANONICAL_ADMIT
 * Lineage: M081 → M082 → MD66
 * Mirror: pending — no Medium URL present in repo metadata
 */

import Head from 'next/head'

export default function MathematicalPhysicsOfContinuity() {
  return (
    <>
      <Head>
        <title>MD66 — The Mathematical Physics of Continuity — Standing State Press</title>
        <meta
          name="description"
          content="Continuity is not located in the persistence of instances, but in the lineage relation linking admissible trajectories under a differentiated identity coordinate across discontinuous spacetime."
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
            <a href="/essays/canonical/the-geometry-of-continuity">M082</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold)' }}>MD66</span>
          </div>
          <div className="glossEyebrow">Mathematical Physics · Continuity Architecture · Canonical Essay</div>
          <h1 className="glossH1" id="essay-title">
            The Mathematical Physics of Continuity
          </h1>
          <p className="glossIntro">
            Differentiation, Identity, Lineage, and the Geometry of Propagation
          </p>
          <div className="essayStats">
            <span className="essayStat">MD66-PROV-MATH-001</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">CANONICAL_ADMIT</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Leon Powdar</span>
          </div>

          {/* ── Read / Mirror ── */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="/essays/canonical/the-mathematical-physics-of-continuity"
              style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Read · Site
            </a>
            <span style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Mirror · Pending
            </span>
          </div>

          {/* ── Lineage strip ── */}
          <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Lineage</span>
            <a href="/essays/canonical/the-geometry-of-inquiry" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>M081 — Geometry of Inquiry</a>
            <span style={{ color: 'var(--gold-dim)' }}>→</span>
            <a href="/essays/canonical/the-geometry-of-continuity" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>M082 — Geometry of Continuity</a>
            <span style={{ color: 'var(--gold-dim)' }}>→</span>
            <span style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>MD66 — Mathematical Physics of Continuity</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <article id="canonical-essay" itemScope itemType="https://schema.org/Article">
        <div className="wrap canonEssayWrap">

          <div className="canonEssayHeader">
            <div className="canonEssayNum">By Leon Powdar · Standing State Press</div>
            <div className="canonEssayRule" />
          </div>

          {/* Reader start marker */}
          <span id="essay-reader-start" aria-hidden="true" />

          <section id="essay-body" itemProp="articleBody">

            {/* ── Abstract ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">Abstract</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Continuity is commonly understood as persistence through time. This paper proposes a broader framework. States may change, trajectories may terminate, and individual instances may disappear while continuity remains observable.</p>
                <p className="canonEssayPara">We introduce a layered architecture beginning with Differentiation (D), the condition that makes identity possible. From differentiation emerges an identity coordinate (I*), which governs a lawful transformation space. Admissibility is defined through a basin S(I*) constrained by differentiated identity. Individual development occurs through spacetime trajectories x(t), while continuity across generations is established through a lineage relation L(I*).</p>
                <p className="canonEssayPara">For interpreting systems, continuity depends not only on lineage but also on interpretation θ and governance G(θ, I*). Verification occurs through fruit, propagation through seed, and continuity persists when admissible propagation remains possible.</p>
                <p className="canonEssayPara">The central claim is that continuity is not located in the persistence of instances, but in the lineage relation linking admissible trajectories under a differentiated identity coordinate across discontinuous spacetime.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 1 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">1. The Prior Problem</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Most continuity theories begin with persistence.</p>
                <p className="canonEssayPara">They ask what remains unchanged through change.</p>
                <p className="canonEssayPara">This assumes identity already exists.</p>
                <p className="canonEssayPara">This paper argues that identity itself requires a prior condition: differentiation.</p>
                <p className="canonEssayPara">Without differentiation there is no identity. Without identity there is no admissibility. Without admissibility there is no continuity.</p>
                <p className="canonEssayPara">Continuity therefore begins not with persistence, but with distinction.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 2 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">2. Layer 0 — Differentiation</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Let D denote differentiation.</p>
                <p className="canonEssayPara">Differentiation establishes distinguishable regions within possibility space.</p>
                <p className="canonEssayPara">An apple is not an orange. Water is not land. A tree is not a human.</p>
                <p className="canonEssayPara">These distinctions are not secondary observations. They are the conditions that make identity possible.</p>
                <p className="canonEssayPara">The phrase "according to its kind" may be understood as an observational description of differentiated identity maintained across transformation.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 3 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">3. Layer 1 — Identity Coordinate</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Let I* denote the identity coordinate.</p>
                <p className="canonEssayPara">I* is not a state. I* is a governing reference.</p>
                <p className="canonEssayPara">A seed, tree, blossom, and fruit are distinct states. Their continuity does not arise from identical form. Their continuity arises from relation to the same identity coordinate.</p>
                <p className="canonEssayPara">Identity therefore governs transformation without requiring state persistence.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 4 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">4. Layer 2 — Admissible Basin</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Associated with each identity coordinate is a set of kind-constraints:</p>
                <p className="canonEssayPara">K(I*) = &#123;k₁, k₂, ..., kₙ&#125;</p>
                <p className="canonEssayPara">These constraints define what must remain preserved for a trajectory to remain according to its kind.</p>
                <p className="canonEssayPara">Define: Φ(x; I*) = sup&#123;k ∈ K(I*)&#125; violation(x, k)</p>
                <p className="canonEssayPara">Φ(x; I*) ≤ 0 indicates admissibility. Φ(x; I*) &gt; 0 indicates violation of differentiated identity.</p>
                <p className="canonEssayPara">The admissible basin is: S(I*) = &#123;x : Φ(x; I*) ≤ 0&#125;</p>
                <p className="canonEssayPara">The basin preserves lawful transformation rather than static form.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 5 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">5. Layer 3 — Spacetime Trajectory</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Let x(t) denote a spacetime trajectory.</p>
                <p className="canonEssayPara">Continuity within a generation is defined by: x(t) ∈ S(I*) for all admissible times.</p>
                <p className="canonEssayPara">Continuity is therefore not persistence of state. Continuity is lawful development relative to identity.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 6 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">6. Layer 4 — Lineage Relation</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The deepest continuity object is not the trajectory.</p>
                <p className="canonEssayPara">The deepest continuity object is the lineage relation.</p>
                <p className="canonEssayPara">Let L(I*) denote the lineage relation.</p>
                <p className="canonEssayPara">Two trajectories x(t) and x′(t′) stand in relation L(I*) if and only if: (1) x(t) ∈ S(I*), (2) x′(t′) ∈ S(I*), (3) x′(t′) originates through propagation from x(t), (4) K(I*) remains preserved across the propagation event.</p>
                <p className="canonEssayPara">The lineage is not any individual trajectory. The lineage is the relation connecting admissible trajectories across generations.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 7 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">7. Continuity Types</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Preservation and propagation are distinct. A system may preserve one continuity type while failing another.</p>
                <p className="canonEssayPara">Lineage Continuity preserves Identity. Energy Continuity preserves Material and Energy. Interpretive Continuity preserves Meaning. Inquiry Continuity preserves Knowledge Lineage.</p>
                <p className="canonEssayPara">Energy may persist while lineage terminates. Information may remain preserved while propagation ceases.</p>
                <p className="canonEssayPara">Preservation alone is insufficient for continuity. Continuity requires admissible propagation.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 8 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">8. Verification and Propagation</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Fruit performs verification. Seed performs propagation.</p>
                <p className="canonEssayPara">Fruit confirms that a trajectory remained admissible. Seed carries differentiated identity into future trajectories.</p>
                <p className="canonEssayPara">Energy disperses broadly. Identity propagates specifically.</p>
                <p className="canonEssayPara">Verification closes one cycle. Propagation opens the next.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 9 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">9. Interpretation and Governance</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">For many systems, interpretation is effectively fixed.</p>
                <p className="canonEssayPara">For interpreting systems, continuity depends upon interpretation.</p>
                <p className="canonEssayPara">Let θ denote interpretation. The continuity architecture becomes: I* → θ → S(θ, I*) → x(t)</p>
                <p className="canonEssayPara">Interpretation influences admissibility.</p>
                <p className="canonEssayPara">Define G(θ, I*) as the degree of alignment between interpretation and identity.</p>
                <p className="canonEssayPara">Governance is high when interpretation generates admissible trajectories. Governance fails when interpretation systematically produces trajectories outside the admissible basin.</p>
                <p className="canonEssayPara">The governance problem is not that interpretation exists. The governance problem is maintaining alignment between interpretation and identity.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 10 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">10. Lineage States</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">A lineage may exist in one of three states.</p>
                <p className="canonEssayPara">Active: Propagation continues.</p>
                <p className="canonEssayPara">Dormant: Propagation is not occurring, yet reactivation remains possible through preserved structures, information, or inheritance.</p>
                <p className="canonEssayPara">Extinct: No admissible propagation path remains.</p>
                <p className="canonEssayPara">Dormancy permits recovery. Extinction does not.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 11 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">11. Genesis as Independent Observation</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The framework does not depend upon scriptural authority.</p>
                <p className="canonEssayPara">However, ancient texts record observations structurally consistent with this framework.</p>
                <p className="canonEssayPara">"According to its kind" describes differentiated identity. Genealogies record lineage relations. Seed-bearing fruit identifies propagation as structurally significant.</p>
                <p className="canonEssayPara">The narratives of Cain, Abel, and Seth demonstrate continuity surviving the termination of individual trajectories.</p>
                <p className="canonEssayPara">These observations are treated as independent records of continuity structures rather than sources of proof.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 12 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">12. Falsification Conditions</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">This framework is intended to be challengeable.</p>
                <p className="canonEssayPara">It fails if: (1) A trajectory crosses a differentiated kind-boundary while Φ(x; I*) remains non-positive. (2) A propagation event preserves lineage while violating K(I*).</p>
                <p className="canonEssayPara">Either condition requires revision of the framework.</p>
                <p className="canonEssayPara">The framework therefore predicts that continuity requires both Φ(x; I*) ≤ 0 and preservation of L(I*) across propagation events.</p>
                <p className="canonEssayPara">A system satisfying one condition without the other does not exhibit continuity in the sense defined here.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 13 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">13. Conclusion</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Differentiation makes identity possible. Identity makes lineage possible. Lineage makes continuity observable. Interpretation determines trajectory. Governance constrains interpretation. Fruit verifies. Seed propagates. Successive generations reveal continuity across time.</p>
                <p className="canonEssayPara">Continuity is not the persistence of an instance.</p>
                <p className="canonEssayPara">Continuity is the lawful persistence of differentiated identity through lineage relations linking admissible trajectories across discontinuous spacetime.</p>
              </div>
            </div>

          </section>

          {/* Reader end marker */}
          <span id="essay-reader-end" aria-hidden="true" />

          {/* ── Final statement ── */}
          <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: 'var(--rule)', borderBottom: 'var(--rule)' }}>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.1rem', lineHeight: 2 }}>
              Differentiation makes identity possible · Identity makes lineage possible · Lineage makes continuity observable
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Canonical · Mathematical Physics · Continuity Architecture</div>

          {/* ── Nav footer ── */}
          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-geometry-of-continuity">
              <span className="canonNavDir">Previous in Lineage</span>
              <span className="canonNavTitle">M082 · The Geometry of Continuity</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays Index</a>
            <span className="canonNavLink" style={{ opacity: 0.4, cursor: 'default' }}>
              <span className="canonNavDir">Next</span>
              <span className="canonNavTitle">MD67 · The Geometry of Coherence</span>
            </span>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
