/**
 * /essays/canonical/according-to-its-kind
 * M075 — According to Its Kind
 * A Thesis on Identity Coordinates, Interpretation, and Reality Verification
 *
 * Engine 2 Canonical Series — Essay II of V
 * Identity doctrine. Question: How does identity develop without drift?
 * Compression: Fruit may correct interpretation. Fruit may not redefine identity.
 */

import Head from 'next/head'

export default function AccordingToItsKind() {
  return (
    <>
      <Head>
        <title>M075 — According to Its Kind — Standing State Press</title>
        <meta
          name="description"
          content="Fruit may correct interpretation. Fruit may not redefine identity. Development is the progressive expression of identity through reality-tested correction. According to its kind."
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
            <span style={{ color: 'var(--gold-dim)' }}>M075 · II of V</span>
          </div>
          <div className="glossEyebrow">Engine 2 Canonical Series · Essay II · Identity Doctrine</div>
          <h1 className="glossH1">According to Its Kind</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            A Thesis on Identity Coordinates, Interpretation, and Reality Verification.
            The seed does not become something other than itself. The seed becomes more fully what it already is.
          </p>
          <div className="essayStats">
            <span className="essayStat">M075</span>
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
                ['II', 'M075', 'According to Its Kind', '/essays/canonical/according-to-its-kind', true],
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
              Fruit may correct interpretation.<br />
              Fruit may not redefine identity.
            </div>
          </div>

          <div className="canonEssayThesis">
            Development is not identity replacement. Development is identity expression.
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Human GPS Problem</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">A GPS system cannot operate until locations are differentiated. 1006 East Marlton Pike is not 1000 East Marlton Pike. The distinction appears trivial, yet navigation depends entirely upon it. Without differentiation there is no address space. Without address space there is no coordinate. Without a coordinate there is no route.</p>
              <p className="canonEssayPara">Human development follows the same geometry. Before interpretation can occur, identity coordinates must exist. "I am loved." "I am abandoned." "I am healthy." "I am honest." These are not routes. These are coordinates within identity phase space. Interpretation generates routes from those coordinates. Structure embodies those routes. Reality returns consequence.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Differentiation Before Identity</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The first act of any coherent system is differentiation. A becomes distinguishable from not-A. Only then can identity emerge. A coordinate is meaningful because it is not another coordinate. The seed of an oak differs from the seed of a pine. The distinction precedes expression. Likewise, identity precedes interpretation.</p>
              <p className="canonEssayPara">A human being may hold many identity commitments simultaneously. Honesty. Stewardship. Compassion. Courage. Responsibility. Love. These commitments form an identity constellation rather than a single attribute. The task is not eliminating multiplicity. The task is establishing coherence among them. Contradictory commitments create internal conflict. Coherent commitments create lawful motion.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Self-Witness Layer</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Human beings possess something unusual among living systems: interpretive freedom. A tree does not reinterpret what it is. A tree simply expresses according to its kind. Human beings continuously generate interpretations. This creates both creativity and drift. Therefore a self-witness layer becomes necessary.</p>
              <p className="canonEssayPara">Self-witness does not create identity. Self-witness observes identity. It asks: which coordinates are active? Which commitments are synchronized? Which commitments are contradicting one another? Without self-witness, interpretation begins rewriting identity. With self-witness, interpretation remains subordinate to identity.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Attention and Interpretation</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Interpretation functions much like a GPS routing engine. Identity provides the coordinate. Attention provides projection force. Interpretation generates routes. Structure executes movement. Reality returns consequence.</p>
              <p className="canonEssayPara">What receives sustained attention receives energy. What receives energy receives structure. What receives structure eventually produces fruit. Identity chooses the destination. Attention supplies the force. Interpretation generates the route. Reality returns the result.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Fruit Inversion</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Most human suffering involves a jurisdictional inversion. Fruit begins rewriting identity. A person loses money and concludes: "I am a failure." A person is rejected and concludes: "I am unworthy." A person becomes sick and concludes: "I am sickness." This reverses the proper order.</p>
              <p className="canonEssayPara">Fruit has authority to correct interpretation. Fruit does not have authority to redefine identity. A wrong turn does not become the destination. Traffic does not become the destination. A route failure does not become the destination. The destination remains the destination.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Reality Verification</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">What keeps interpretation honest? Interpretation cannot verify itself. A map cannot certify itself as accurate. Only territory can do that. Reality therefore occupies a unique jurisdiction. Reality returns fruit independent of preference, narrative, ideology, doctrine, desire, sentiment, or intention.</p>
              <p className="canonEssayPara">Projection may be mistaken. Interpretation may drift. Structure may be incomplete. Reality nevertheless returns consequence. Fruit becomes the external verifier that interpretation cannot overrule. The map may guide navigation. The map is not the territory. Reality verifies the route.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Architecture of Being · Architecture of Becoming</div>
            <div className="glossVarLogicWrap" style={{ margin: '1rem 0' }}>
              <div style={{ padding: '0.8rem 1.2rem', borderBottom: 'var(--rule)' }}>
                <span style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Architecture of Being</span>
                <span style={{ color: 'var(--offwhite)' }}>Differentiation → Identity → Self-Witness → Attention → Interpretation → Structure → Reality</span>
              </div>
              <div style={{ padding: '0.8rem 1.2rem' }}>
                <span style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>Architecture of Becoming</span>
                <span style={{ color: 'var(--offwhite)' }}>Identity → Projection → Fruit → Correction → Restoration → Development</span>
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The bridge between them is fruit. Fruit is where reality speaks. Fruit is where interpretation is audited. Fruit is where development becomes possible without identity loss.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Standing State</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The Standing State is not resistance to change. The Standing State is lawful becoming under invariant identity. Identity provides permanence. Reality provides adaptation. Fruit binds them together. Through fruit, reality teaches without rewriting identity. Through identity, learning occurs without drift.</p>
              <p className="canonEssayPara">Development is not the replacement of identity. Development is the progressive expression of identity through reality-tested correction. A tree does not become a tree through instruction. A tree becomes a tree through expression. Reality verifies the expression. Fruit reveals the result.</p>
            </div>
          </div>

          <div className="canonEssayEqBlock" style={{ marginTop: '3rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.4rem' }}>
              According to its kind.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gold-dim)', fontStyle: 'italic' }}>
              Identity Remains · Reality Teaches · Governance Protects · Restoration Preserves · Development Emerges
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Engine 2 Canonical Series · Essay II of V</div>

          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-standing-state-engine-2">
              <span className="canonNavDir">Previous · I of V</span>
              <span className="canonNavTitle">The Standing State — Engine 2</span>
            </a>
            <a className="canonNavIndex" href="/essays/series/engine-2">Series Index</a>
            <a className="canonNavLink canonNavNext" href="/essays/canonical/the-guardian-of-attention">
              <span className="canonNavDir">Next · III of V</span>
              <span className="canonNavTitle">The Guardian of Attention</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
