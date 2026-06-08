/**
 * /essays/canonical/the-geometry-of-memory-projection-and-reality
 * M073 — The Geometry of Memory, Projection, and Reality
 *
 * A Formal Thesis on Fruit, Audit, and the Evolution of Maps.
 *
 * Three-layer architecture: Map (long-term memory) · Projection (short-term memory) · Reality (the territory).
 * Fruit is the audit artifact of reality.
 * Temporary fruit updates projection. Persistent fruit updates memory.
 * Wisdom is the progressive refinement of projection and memory through reality.
 *
 * Visual monument: P033 (The Geometry of Memory, Projection, and Reality).
 * Status: Rank-0 · Standing State · Closed
 */

import Head from 'next/head'

export default function TheGeometryOfMemoryProjectionAndReality() {
  return (
    <>
      <Head>
        <title>M073 — The Geometry of Memory, Projection, and Reality — Standing State Press</title>
        <meta
          name="description"
          content="The map is not the territory. The projection is not the map. Reality verifies both. Fruit audits projection. Persistent fruit audits memory. Wisdom is the progressive refinement of projection and memory through reality. A becomes A, because A knows it is A."
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
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>M073</span>
          </div>
          <div className="glossEyebrow">Cross-Volume · Navigational Architecture · Fruit · Audit · Wisdom</div>
          <h1 className="glossH1">The Geometry of Memory, Projection, and Reality</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            A Formal Thesis on Fruit, Audit, and the Evolution of Maps. Memory and
            projection occupy distinct jurisdictions. Reality alone verifies both.
            Fruit is the audit artifact of the territory.
          </p>
          <div className="essayStats">
            <span className="essayStat">M073</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">PLT-COORD</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">VOL-CROSS</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">REG-MATH</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">RANK-0</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">

          <div className="canonEssayHeader">
            <div className="canonEssayNum">By Leon Powdar · Standing State Press · Navigational Architecture</div>
            <div className="canonEssayRule" />
          </div>

          {/* ── Governing law ── */}
          <div className="canonEssayEqBlock">
            <div className="canonEssayEq" style={{ fontSize: '1.15rem' }}>
              The map is not the territory.<br />
              The projection is not the map.<br />
              Reality verifies both.
            </div>
          </div>

          {/* ── Abstract ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Abstract</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                This thesis formalizes the relationship between memory, projection,
                reality, and fruit within the architecture of the Living Soul.
              </p>
              <p className="canonEssayPara">
                Traditional frameworks often treat memory as truth and prediction as
                certainty. The present work demonstrates that memory and projection occupy
                distinct jurisdictions. Memory preserves historical structure. Projection
                anticipates future structure. Reality alone verifies both.
              </p>
              <p className="canonEssayPara">
                Fruit functions as the audit artifact of reality. Fruit does not create
                identity; fruit reveals identity. Temporary fruit updates projection.
                Persistent fruit updates memory.
              </p>
            </div>
          </div>

          {/* ── I. Three-Layer Architecture ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">I — The Three-Layer Architecture</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                The Living Soul navigates reality through three distinct layers.
              </p>
            </div>
            <div className="glossVarLogicWrap" style={{ margin: '1.5rem 0' }}>
              {[
                ['Layer 1 — Map', 'Long-term memory. Historical observations, accumulated audits, validated routes, persistent patterns. The map changes slowly. Its purpose is stability.'],
                ['Layer 2 — Projection', 'Short-term memory. Expectations, forecasts, route selections, immediate predictions. The projection changes rapidly. Its purpose is navigation.'],
                ['Layer 3 — Reality', 'The territory. Not inferred — encountered. Reality possesses audit authority over both map and projection.'],
              ].map(([label, desc], i, arr) => (
                <div key={label} style={{ display: 'flex', gap: '1rem', padding: '0.9rem 1.2rem', borderBottom: i < arr.length - 1 ? 'var(--rule)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--display)', color: 'var(--gold)', minWidth: '12rem', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', paddingTop: '0.2rem' }}>{label}</span>
                  <span style={{ color: 'var(--offwhite)', fontSize: '0.95rem' }}>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── II. Bridge Problem ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">II — The New York Bridge Problem</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Consider a traveler navigating toward New York. The map records: a bridge
                exists. The projection states: cross the bridge now. Reality reveals:
                construction blocks the bridge.
              </p>
              <p className="canonEssayPara">
                The bridge still exists. Only the immediate route has changed. Therefore:
                projection updates, map remains.
              </p>
              <p className="canonEssayPara">
                Now consider a second case. The bridge is permanently removed. Reality
                repeatedly reveals: bridge absent. Repeated fruit accumulates. The audit
                concludes: structural change detected. The map itself updates. The route is
                removed from memory. The new route becomes canonical.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.05rem' }}>
                Temporary fruit updates projection.<br />
                Persistent fruit updates memory.
              </div>
            </div>
          </div>

          {/* ── III. Fruit as Audit Artifact ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">III — Fruit as Audit Artifact</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Identity is informational. Fruit is physical. Identity may shift rapidly.
                Fruit occupies time and space. Fruit therefore becomes an audit artifact.
              </p>
              <p className="canonEssayPara">
                A seed may claim: I am an apple seed. Fruit reveals whether the claim
                corresponds to reality. The audit consults fruit rather than declaration.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
                Fruit = 𝒜(Identity, Time)
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                Identity is cause. Fruit is evidence.
              </div>
            </div>
          </div>

          {/* ── IV. Physics of Projection Error ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IV — The Physics of Projection Error</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Let M(t) represent the map, P(t) represent the projection, and R(t)
                represent reality.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
                Eₚ(t) = |P(t) − R(t)|
              </div>
              <div className="canonEssayEq" style={{ fontSize: '1.1rem', marginTop: '0.75rem' }}>
                Eₘ(t) = |M(t) − R(t)|
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Coherence requires minimizing both. Projection adapts rapidly: dP/dt =
                −α·Eₚ, where α is the adaptation rate. Maps update more conservatively:
                dM/dt = −β·Eₘ, with β ≪ α. Memory evolves slowly. Projection evolves
                rapidly. The greater the mismatch, the faster projection updates.
              </p>
            </div>
          </div>

          {/* ── V. Geometry of Coherence ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">V — Geometry of Coherence</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Let I* represent the identity coordinate. Reality may be represented as a
                trajectory through state space: γ(t). Projection becomes a tangent
                estimate: P(t) ≈ γ′(t). The map becomes an integrated history: M(t) = ∫₀ᵗ
                γ(τ) dτ.
              </p>
              <p className="canonEssayPara">
                Projection predicts motion. Memory preserves motion. Reality generates
                motion. Coherence exists when P(t) ≈ γ′(t) and accumulated memory remains
                consistent with repeated reality audits.
              </p>
            </div>
          </div>

          {/* ── VI. Law of Surrender ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VI — The Law of Surrender</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                A system becomes unstable when memory overrides reality, desire overrides
                reality, or expectation overrides reality. A system becomes coherent when
                reality retains audit authority.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
                Coherence ∝ Surrender / Attachment
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                Surrender: willingness to update projection.<br />
                Attachment: insistence that reality conform to memory.
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                The map is retained. Attachment is released. Projection is upgraded.
              </p>
            </div>
          </div>

          {/* ── VII. Power Law of Wisdom ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VII — The Power Law of Wisdom</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Wisdom accumulates through repeated audits. Let N represent successful
                reality corrections.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.2rem' }}>
                W = k · Nᵞ
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                W = wisdom · k = learning coefficient · λ &gt; 0
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Each successful surrender increases future navigational accuracy. Wisdom
                is memory updated by fruit.
              </p>
            </div>
          </div>

          {/* ── VIII. Sovereignty and Integration ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VIII — Sovereignty and Integration</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                A coherent system contains multiple sovereign systems. Heart remains heart.
                Lung remains lung. Neither loses identity. Integration occurs because
                sovereignty is preserved.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
                A + B → C
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                A remains A · B remains B · C emerges
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                The emergent system possesses properties unavailable to either constituent
                alone. Sovereignty precedes integration. Two sovereign systems may generate
                a third system.
              </p>
            </div>
          </div>

          {/* ── IX. Terminal Reduction ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IX — Terminal Reduction</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Identity establishes the coordinate. Memory preserves the map. Projection
                selects the route. Action enters reality. Fruit records consequence. Audit
                compares fruit to projection. Projection updates. Repeated fruit updates
                memory. Wisdom accumulates. Coherence increases. Standing State emerges.
              </p>
            </div>
          </div>

          {/* ── VI. Identity / Law Synthesis ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Identity · Law Synthesis</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                The projection is not the map. The map is not the territory. Reality
                verifies both. Fruit audits projection. Persistent fruit audits memory.
                Wisdom is the progressive refinement of projection and memory through
                reality. Identity establishes the coordinate. Reality verifies the lock.
                Coherence reveals the result.
              </p>
              <p className="canonEssayPara">
                Sovereign among sovereigns. The whole emerges because the parts remain
                themselves.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.25rem' }}>
                A becomes A, because A knows it is A.
              </div>
              <div style={{ textAlign: 'center', color: 'var(--gold-dim)', fontSize: '0.9rem', marginTop: '0.5rem', fontStyle: 'italic' }}>
                The Objective Moral Law of Life
              </div>
            </div>
          </div>

          {/* ── Closing Declaration ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Closing Declaration</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.1rem' }}>
                I am the Living Soul, the Sabbath of Knowing, the law made flesh.
              </p>
            </div>
          </div>

          {/* ── Closing axiom ── */}
          <div className="canonEssayEqBlock" style={{ marginTop: '3rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.5rem' }}>
              A becomes A, because A knows it is A.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gold-dim)', fontStyle: 'italic', fontSize: '1rem' }}>
              Rank-0 · Standing State · Closed
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Canonical · Navigational Architecture</div>

          {/* ── Visual Monument ── */}
          <div className="plateDetailBlock" style={{ marginTop: '2rem' }}>
            <div className="plateDetailBlockLabel">Visual Monument</div>
            <div className="glossVarLogicWrap">
              <div style={{ padding: '0.7rem 1.2rem' }}>
                <a href="/system/plates/the-geometry-of-memory-projection-and-reality" style={{ color: 'var(--gold)' }}>
                  P033 — The Geometry of Memory, Projection, and Reality
                </a>
              </div>
            </div>
          </div>

          {/* ── Companion Essays ── */}
          <div className="plateDetailBlock" style={{ marginTop: '1.5rem' }}>
            <div className="plateDetailBlockLabel">Companion Essays</div>
            <div className="glossVarLogicWrap">
              {[
                ['M070', '/essays/canonical/architecture-of-prayer', 'The Architecture of Prayer'],
                ['M071', '/essays/canonical/the-river-beyond-the-city', 'The River Beyond the City'],
                ['M072', '/essays/canonical/the-thermodynamics-of-the-living-soul', 'The Thermodynamics of the Living Soul'],
              ].map(([id, href, label], i, arr) => (
                <div key={id} style={{ padding: '0.7rem 1.2rem', borderBottom: i < arr.length - 1 ? 'var(--rule)' : 'none' }}>
                  <a href={href} style={{ color: 'var(--gold)' }}>{id} — {label}</a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Nav ── */}
          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-thermodynamics-of-the-living-soul">
              <span className="canonNavDir">Predecessor</span>
              <span className="canonNavTitle">M072 · The Thermodynamics of the Living Soul</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays Index</a>
          </div>

        </div>
      </article>

      <hr className="divider" />

    </>
  )
}
