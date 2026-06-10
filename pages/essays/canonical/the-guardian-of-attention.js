/**
 * /essays/canonical/the-guardian-of-attention
 * M076 — The Guardian of Attention
 * Engine 2 and the Governance of Consciousness
 *
 * Engine 2 Canonical Series — Essay III of V
 * Admission governance. Question: What enters consciousness?
 * Compression: Identity precedes admission.
 */

import Head from 'next/head'

export default function TheGuardianOfAttention() {
  return (
    <>
      <Head>
        <title>M076 — The Guardian of Attention — Standing State Press</title>
        <meta
          name="description"
          content="Identity precedes admission. Attention is not sovereign — identity is sovereign. Attention is merely the resource identity allocates. Engine 2 and the governance of consciousness."
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
            <span style={{ color: 'var(--gold-dim)' }}>M076 · III of V</span>
          </div>
          <div className="glossEyebrow">Engine 2 Canonical Series · Essay III · Admission Governance</div>
          <h1 className="glossH1">The Guardian of Attention</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            Engine 2 and the Governance of Consciousness. The question is no longer
            what captured my attention. The question becomes: who authorized entry?
          </p>
          <div className="essayStats">
            <span className="essayStat">M076</span>
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
                ['III', 'M076', 'The Guardian of Attention', '/essays/canonical/the-guardian-of-attention', true],
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
            <div className="canonEssayEq" style={{ fontSize: '1.15rem' }}>
              Identity precedes admission.
            </div>
          </div>

          <div className="canonEssayThesis">
            Attention is not sovereign. Identity is sovereign. Attention is merely the resource identity allocates.
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Governance Problem</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Modern civilization speaks endlessly about information, productivity, influence, and engagement. Engine 2 begins elsewhere. Before information. Before productivity. Before action. There is identity.</p>
              <p className="canonEssayPara">The greatest challenge of the modern age is not misinformation. It is governance failure. Most systems permit attention to be allocated before identity has spoken. Notifications arrive before deliberation. Headlines arrive before reflection. Emotional triggers arrive before interpretation. The result is predictable: attention becomes occupied by forces that were never granted jurisdiction.</p>
              <p className="canonEssayPara">Engine 2 establishes a different order: Differentiation → Identity (I*) → Attention → Interpretation → Action → Reality Contact → Correction → Restoration.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Guardian</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">In Engine 2, I* functions as the Guardian of Consciousness. Its purpose is simple: nothing enters by default. Every signal must negotiate for admission. Every claim must pass through jurisdiction. Every stimulus must justify its occupancy.</p>
              <p className="canonEssayPara">Most modern systems operate through push architecture. Engine 2 operates through pull architecture. The world pushes. The guardian decides. The world requests. The guardian grants or denies admission.</p>
              <p className="canonEssayPara">Without the gate, consciousness becomes a battleground of competing signals. With the gate, signals are evaluated against identity before entry. The gate does not ask: "Is this good?" The gate asks: "Is this admissible relative to I*?" This is the difference between reaction and governance.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Signal and Jurisdiction</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The modern world often frames information as a conflict between truth and falsehood. Engine 2 frames the problem differently. Reality contains countless signals. Some are coherent. Some are incoherent. Some are useful. Some are irrelevant. Some are lawful for the present coordinate. Others belong elsewhere.</p>
              <p className="canonEssayPara">The guardian does not exist to eliminate information. The guardian exists to establish jurisdiction. Every signal seeks attention. Not every signal deserves occupancy.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Purpose of Silence</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">One of the most misunderstood resources in modern civilization is silence. Silence is not emptiness. Silence is unoccupied capacity. Silence is consciousness free from unauthorized occupation.</p>
              <p className="canonEssayPara">The Sabbath state is not inactivity. It is restoration of jurisdiction. A clearing of accumulated residue. A restoration of admissibility. A reaffirmation that I* remains invariant. Without silence, signals accumulate. Without restoration, interpretation degrades. Without governance, identity becomes reactive. Silence restores the gate.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Reality and Revelation</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The gate governs admission. Reality governs manifestation. Reality does not negotiate with identity. Reality does not change itself to accommodate preference. Reality serves as the field through which consequences become visible.</p>
              <p className="canonEssayPara">Identity determines kind. Environment influences expression. Time reveals outcome. The tree remains an apple tree. The sweetness of the fruit reveals the season. A poor harvest does not change what the tree is. It reveals what the season provided.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Objective Boundary</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Engine 2 establishes a single immovable boundary: identity precedes admission. Nothing enters consciousness by default. Every signal must negotiate. Every interpretation must be tested. Every action must encounter reality. Every outcome provides information. Every correction strengthens coherence.</p>
              <p className="canonEssayPara">When attention is governed, interpretation improves. When interpretation improves, action becomes lawful. When action becomes lawful, reality reveals more clearly. When reality reveals more clearly, restoration becomes possible.</p>
            </div>
          </div>

          <div className="canonEssayEqBlock" style={{ marginTop: '2rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
              Attention is the resource.<br />
              Identity is the authority.<br />
              Consciousness is the domain.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--gold)', fontStyle: 'italic' }}>
              Integrity becomes the root. Results follow as its natural fruit. According to its kind.
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gold-dim)', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Identity Remains · Reality Teaches · Governance Protects · Restoration Preserves · Development Emerges
          </div>

          <div className="canonEssayAuthor">Standing State Press · Engine 2 Canonical Series · Essay III of V</div>

          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/according-to-its-kind">
              <span className="canonNavDir">Previous · II of V</span>
              <span className="canonNavTitle">According to Its Kind</span>
            </a>
            <a className="canonNavIndex" href="/essays/series/engine-2">Series Index</a>
            <a className="canonNavLink canonNavNext" href="/essays/canonical/the-guardian-of-rest">
              <span className="canonNavDir">Next · IV of V</span>
              <span className="canonNavTitle">The Guardian of Rest</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
