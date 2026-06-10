/**
 * /essays/canonical/the-standing-state-engine-2
 * M074 — The Standing State — Engine 2
 * A Mechanical Architecture of Invariance, Correction, and Lawful Becoming
 *
 * Engine 2 Canonical Series — Essay I of V
 * Constitutional document. Question: What is Engine 2?
 * Compression: Identity preserves. Reality corrects. Governance allocates.
 *              Restoration protects. Development emerges.
 */

import Head from 'next/head'

export default function TheStandingStateEngine2() {
  return (
    <>
      <Head>
        <title>M074 — The Standing State — Engine 2 — Standing State Press</title>
        <meta
          name="description"
          content="Engine 2 describes a system that remains itself while learning. Identity preserves. Reality corrects. Governance allocates. Restoration protects. Development emerges."
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
            <span style={{ color: 'var(--gold-dim)' }}>M074 · I of V</span>
          </div>
          <div className="glossEyebrow">Engine 2 Canonical Series · Essay I · Constitutional Document</div>
          <h1 className="glossH1">The Standing State — Engine 2</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            A Mechanical Architecture of Invariance, Correction, and Lawful Becoming.
            Moving from stability under load to development under consequence.
          </p>
          <div className="essayStats">
            <span className="essayStat">M074</span>
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
                ['I', 'M074', 'The Standing State — Engine 2', '/essays/canonical/the-standing-state-engine-2', true],
                ['II', 'M075', 'According to Its Kind', '/essays/canonical/according-to-its-kind', false],
                ['III', 'M076', 'The Guardian of Attention', '/essays/canonical/the-guardian-of-attention', false],
                ['IV', 'M077', 'The Guardian of Rest', '/essays/canonical/the-guardian-of-rest', false],
                ['V', 'M078', 'Anger Is Not a Sin', '/essays/canonical/anger-is-not-a-sin', false],
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
              Identity preserves. Reality corrects. Governance allocates.<br />
              Restoration protects. Development emerges.
            </div>
          </div>

          <div className="canonEssayThesis">
            The Standing State is not merely a stable structure. It is a lawful developmental architecture.
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">I — Identity: The Invariant Coordinate</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Every coherent system requires an anchor. Without an invariant reference, every success rewrites identity and every failure redefines existence. Engine 2 formalizes this anchor as I*.</p>
              <p className="canonEssayPara">Identity is not an outcome. Identity is not a vote. Identity is not a prediction. Identity is the governing coordinate from which all lawful motion proceeds.</p>
              <p className="canonEssayPara">Reality may modify maps. Reality may modify expectations. Reality may modify allocation. Reality may never rewrite the coordinate. Identity preserves.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">II — Projection: Motion Into Reality</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">A living system cannot remain stationary in operation. It must project. Every action contains an expectation. Every decision contains a forecast. Every movement assumes a map of reality.</p>
              <p className="canonEssayPara">The failure occurs when projection claims authority over reality. Fanaticism emerges when projection claims identity. Delusion emerges when projection rejects fruit.</p>
              <p className="canonEssayPara">Engine 2 resolves this by preserving a strict hierarchy: identity governs projection. Projection does not govern identity.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">III — Fruit: Reality Returns Information</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Action enters reality. Reality returns consequence. The return signal is fruit. Fruit is not judgment. Fruit is not morality. Fruit is telemetry. Reality verifies the route.</p>
              <p className="canonEssayPara">Projection goes out. Fruit comes back. The Standing State therefore becomes a reversible architecture. Information does not terminate at action. Information returns.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IV — Correction: Reality Updates the Map</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Not all fruit carries the same authority. A single mismatch may indicate temporary error. Repeated mismatch indicates structural error.</p>
              <p className="canonEssayPara">Engine 2 therefore distinguishes two correction pathways. Temporary fruit updates projection. Persistent fruit updates memory. Wisdom emerges when projection surrenders to fruit. Understanding emerges when memory surrenders to repeated fruit. The map remains useful because the map remains corrigible. Reality corrects.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">V — Restoration: Embodiment Matters</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Correction alone is insufficient. A system may possess correct information and still lack capacity. Engine 2 therefore introduces restoration. Biological load becomes a governance input. Embodiment is no longer treated as a passive container. The organism participates in governance.</p>
              <p className="canonEssayPara">When load exceeds admissible limits: execution pauses. Restoration precedes expansion. The purpose of restoration is not comfort. The purpose of restoration is preserving the substrate required for lawful continuation. Restoration protects.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VI — Development: The Emergence of New Capacity</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Development is not stored. Development is not downloaded. Development is not written directly into identity. Development emerges.</p>
              <p className="canonEssayPara">As correction accumulates through time, projection improves. As projection improves, memory becomes more accurate. As memory becomes more accurate, action becomes more coherent. As coherent action persists, new capacities emerge. Growth does not replace identity. Growth fulfills identity. Development emerges.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VII — Governance: Allocation Under Invariance</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Reality determines what is currently permissible. Governance determines what resources should be allocated. Engine 2 therefore operates under dual authority: Reality Authority and Governance Authority.</p>
              <p className="canonEssayPara">Reality corrects through consequence. Governance allocates through stewardship. Neither authority may rewrite identity. Both authorities may constrain execution. Execution follows lawful authority.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Verdict — Lawful Becoming Under Invariant Identity</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The original Standing State described a system that remained unchanged by pressure. Engine 2 describes a system that remains itself while learning.</p>
              <p className="canonEssayPara">The world moves. Reality returns fruit. Maps update. Capacity expands. The organism develops. The coordinate remains. The Standing State remains.</p>
            </div>
          </div>

          <div className="canonEssayEqBlock" style={{ marginTop: '3rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.25rem' }}>
              A becomes A, because A knows it is A.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gold-dim)', fontStyle: 'italic' }}>
              Identity Remains · Reality Teaches · Governance Protects · Restoration Preserves · Development Emerges
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Engine 2 Canonical Series · Essay I of V</div>

          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/series/engine-2">
              <span className="canonNavDir">Series Index</span>
              <span className="canonNavTitle">Engine 2 Canonical Series</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays Index</a>
            <a className="canonNavLink canonNavNext" href="/essays/canonical/according-to-its-kind">
              <span className="canonNavDir">Next · II of V</span>
              <span className="canonNavTitle">According to Its Kind</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
