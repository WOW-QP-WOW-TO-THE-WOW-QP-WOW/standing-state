/**
 * /essays/canonical/identity-as-attractor
 * M083 — Identity as Attractor: From Coherence Dynamics to the I* Guardian
 *
 * Status: CANONICAL_CANDIDATE
 * Verification: N/A (doctrinal synthesis)
 * Revision: ACTIVE
 * Lineage: M074 → M075 → M076 → M077 → M078 → MD66 → MD67 → M083
 * Mirror: pending — no Medium URL present in repo metadata
 *
 * Editorial ruling applied: "Three Registers, One Architecture" placed
 * immediately after the Abstract, before Section 1.
 */

import Head from 'next/head'

export default function IdentityAsAttractor() {
  return (
    <>
      <Head>
        <title>M083 — Identity as Attractor — Standing State Press</title>
        <meta
          name="description"
          content="Identity is not the attractor toward which coherence converges. Identity is the invariant reference that makes coherence possible. From coherence dynamics to the I* Guardian Doctrine."
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
            <a href="/essays/canonical/the-geometry-of-coherence">MD67</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold)' }}>M083</span>
          </div>
          <div className="glossEyebrow">Doctrinal Synthesis · I* Guardian Architecture · CANONICAL CANDIDATE</div>
          <h1 className="glossH1" id="essay-title">
            Identity as Attractor
          </h1>
          <p className="glossIntro">
            From Coherence Dynamics to the I* Guardian
          </p>
          <div className="essayStats">
            <span className="essayStat">M083</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">CANONICAL CANDIDATE</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Leon Powdar</span>
          </div>

          {/* ── Read / Mirror ── */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="/essays/canonical/identity-as-attractor"
              style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Read · Site
            </a>
            <span style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Mirror · Pending
            </span>
            <a
              href="/system/doctrine/i-star-guardian-doctrine"
              style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              D005 · Guardian Doctrine
            </a>
          </div>

          {/* ── Lineage strip ── */}
          <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Lineage</span>
            <a href="/essays/canonical/the-mathematical-physics-of-continuity" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>MD66</a>
            <span style={{ color: 'var(--gold-dim)' }}>→</span>
            <a href="/essays/canonical/the-geometry-of-coherence" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>MD67</a>
            <span style={{ color: 'var(--gold-dim)' }}>→</span>
            <span style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>M083</span>
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

          {/* ── Canonical seal ── */}
          <div style={{ textAlign: 'center', padding: '1.5rem 0 2rem' }}>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.05rem', lineHeight: 2 }}>
              Identity remains · Reality teaches · Governance protects · Restoration preserves · Development emerges
            </div>
          </div>

          <section id="essay-body" itemProp="articleBody">

            {/* ── Abstract ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">Abstract</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">This essay revisits an earlier dynamical formulation of identity and develops it through the lens of the I* Guardian Doctrine.</p>
                <p className="canonEssayPara">The original framework proposed that identity could be understood as an attractor disclosed through recursive feedback and progressive reduction of distortion. While that formulation established a useful account of coherence, it left unresolved a deeper question: What governs the attractor?</p>
                <p className="canonEssayPara">The I* Guardian Doctrine answers this question by introducing an invariant reference coordinate, denoted I*.</p>
                <p className="canonEssayPara">Identity is not the attractor. Identity is the invariant reference from which admissibility, coherence, interpretation, governance, and development derive.</p>
                <p className="canonEssayPara">The attractor is not identity itself. The attractor is the basin of lawful states surrounding identity.</p>
                <p className="canonEssayPara">This transforms the framework from a theory of convergence into a theory of governance.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── Three Registers (editorial ruling: placed immediately after Abstract) ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">Three Registers, One Architecture</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The doctrine may be expressed through multiple registers while preserving the same structure.</p>
                <p className="canonEssayPara"><strong>Formal Register.</strong> Identity → Guardian → Development. I* → Basin of Admissibility → Attractor Trajectory.</p>
                <p className="canonEssayPara"><strong>Navigational Register.</strong> Destination → Route Governance → Arrival.</p>
                <p className="canonEssayPara"><strong>Biological Register.</strong> Seed → Sap → Fruit.</p>
                <p className="canonEssayPara">The language changes. The architecture remains.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 1 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">1. The Problem of Identity</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Most theories of identity begin from one of two assumptions. Identity is assigned externally. Identity is generated internally.</p>
                <p className="canonEssayPara">Both approaches encounter the same difficulty. Neither adequately explains continuity.</p>
                <p className="canonEssayPara">A system may alter its beliefs, actions, memories, circumstances, and structure while remaining recognizably itself.</p>
                <p className="canonEssayPara">If identity is merely assignment, continuity depends upon the observer. If identity is merely construction, continuity depends upon the present state. Both leave continuity without foundation.</p>
                <p className="canonEssayPara">The I* Guardian Doctrine begins elsewhere. Before change can be recognized, a reference must exist from which change becomes observable. That reference is identity.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 2 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">2. Differentiation Precedes Identity</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Identity does not emerge from undifferentiated existence. Differentiation makes identity possible.</p>
                <p className="canonEssayPara">A distinction must first exist between what a system is and what it is not. Not-A permits A to appear.</p>
                <p className="canonEssayPara">Once distinction becomes possible, continuity becomes possible. Once continuity becomes possible, identity becomes observable. Once identity becomes observable, governance becomes possible. Once governance becomes possible, development becomes possible.</p>
                <p className="canonEssayPara">The dependency chain is: Differentiation → Identity → Continuity → Governance → Development.</p>
                <p className="canonEssayPara">This sequence is structural rather than chronological. Development depends upon governance. Governance depends upon continuity. Continuity depends upon identity. Identity depends upon differentiation. The chain contains no shortcuts.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 3 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">3. Identity as Invariant Reference</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The original attractor formulation treated identity as the endpoint of convergence. The Guardian Doctrine introduces a stronger claim. Identity exists prior to convergence. Identity remains invariant while states vary.</p>
                <p className="canonEssayPara">Let I* denote the invariant reference coordinate. I* is not memory. I* is not emotion. I* is not interpretation. I* is not behavior. These may change indefinitely. Identity remains.</p>
                <p className="canonEssayPara">Without invariant reference, change becomes noise. Without identity, development becomes immeasurable.</p>
                <p className="canonEssayPara">Identity is not produced by the journey. Identity is the coordinate that makes the journey intelligible.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 4 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">4. The Basin of Admissibility</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Every identity possesses a lawful region within which variation may occur without loss of continuity. This region is the Basin of Admissibility.</p>
                <p className="canonEssayPara">Within the basin: learning is admissible, adaptation is admissible, correction is admissible, restoration is admissible, growth is admissible.</p>
                <p className="canonEssayPara">Identity does not require sameness. Identity requires continuity. The basin therefore permits development while preserving identity.</p>
                <p className="canonEssayPara">The governing question becomes: Does the present state remain lawful relative to I*? If yes, development proceeds. If no, restoration becomes necessary.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 5 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">5. The Guardian Function</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The central advancement of the doctrine is the introduction of the Guardian.</p>
                <p className="canonEssayPara">The Guardian does not create identity. The Guardian does not modify identity. The Guardian does not generate identity. The Guardian protects identity. Its role is jurisdictional.</p>
                <p className="canonEssayPara">The Guardian continuously evaluates whether interpretation remains lawful relative to I*. When interpretation remains lawful, development proceeds. When interpretation drifts beyond admissibility, correction becomes necessary. When correction fails, restoration becomes necessary.</p>
                <p className="canonEssayPara">The Guardian protects continuity by preventing interpretation from becoming sovereign. Identity remains sovereign. Interpretation remains subordinate.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 6 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">6. Guardian Jurisdiction</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The Guardian possesses no sovereign authority of its own. Its authority derives entirely from I*.</p>
                <p className="canonEssayPara">The Guardian does not define identity. The Guardian does not legislate identity. The Guardian does not rewrite identity. Its jurisdiction is diagnostic rather than legislative. Its function is preservation rather than authorship.</p>
                <p className="canonEssayPara">When admissibility is violated, the Guardian signals correction. When correction fails, the Guardian signals restoration. The Guardian never becomes the source coordinate.</p>
                <p className="canonEssayPara">I* remains the source coordinate. Identity remains sovereign. The Guardian remains servant to identity.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 7 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">7. Interpretation as Navigation</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The human challenge is not primarily identity. The human challenge is interpretation.</p>
                <p className="canonEssayPara">Identity occupies one side of the bridge. Structure occupies the other. Interpretation exists between them.</p>
                <p className="canonEssayPara">The relationship may be understood through navigation. Identity functions as destination. Reality functions as terrain. Structure functions as the road network. Interpretation functions as navigation. The Guardian functions as route governance.</p>
                <p className="canonEssayPara">The destination does not create the road. The road does not determine the destination. Navigation continuously relates the two.</p>
                <p className="canonEssayPara">The governing question becomes: Given where I am and given who I am, what lawful path presently exists?</p>
                <p className="canonEssayPara">Interpretation therefore does not invent reality. Interpretation discovers lawful movement within reality. Wisdom is recognition of pathways already present.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 8 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">8. Arrive Alive</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">A navigation system reveals a profound principle. The destination remains stable. The route may change.</p>
                <p className="canonEssayPara">When a road closes, the destination does not disappear. Navigation recalculates. Restoration is route recalculation.</p>
                <p className="canonEssayPara">Identity remains. Reality updates the path. Interpretation adjusts. Structure executes. Development continues.</p>
                <p className="canonEssayPara">To arrive alive is therefore not merely to arrive. It is to preserve continuity throughout the journey. The system remains coherent because the destination remains fixed while interpretation remains teachable.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 9 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">9. Open and Closed Systems</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">An open system remains teachable. A closed system remains self-protective. The difference is not intelligence. The difference is governance.</p>
                <p className="canonEssayPara">An open system allows reality to inform interpretation. A closed system allows interpretation to suppress reality.</p>
                <p className="canonEssayPara">Hidden distortion accumulates whenever correction becomes inaccessible. The resulting stability is apparent rather than genuine.</p>
                <p className="canonEssayPara">The Guardian protects openness to correction while preserving continuity of identity.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 10 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">10. Self-Referential Coherence</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Self-referential coherence occurs when every operational layer remains ordered relative to I*.</p>
                <p className="canonEssayPara">I* → Attention → Interpretation → Action → Feedback → Restoration.</p>
                <p className="canonEssayPara">Identity remains the reference. Attention allocates resources. Interpretation generates meaning. Action produces consequence. Feedback reveals trajectory. Restoration preserves continuity. Development emerges through repeated lawful cycles.</p>
                <p className="canonEssayPara">Coherence is not conformity. Coherence is lawful relationship.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 11 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">11. Seed, Sap, and Fruit</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The following terms describe functions rather than developmental phases. Seed, sap, and fruit represent distinct jurisdictions within a living system.</p>
                <p className="canonEssayPara">The seed carries identity. The sap preserves continuity. The fruit reveals consequence. Each performs a different function. None replaces the others.</p>
                <p className="canonEssayPara">Likewise: I* functions as the seed. The Guardian functions as the sap. Fruit functions as observable development.</p>
                <p className="canonEssayPara">Seed verifies kind. Sap preserves continuity. Fruit verifies trajectory.</p>
                <p className="canonEssayPara">Identity remains. Continuity remains. Development becomes visible.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 12 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">12. The Governing Law</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The framework may be summarized in a single law: A system develops through lawful relationship to invariant identity.</p>
                <p className="canonEssayPara">Identity remains. Reality teaches. Governance protects. Restoration preserves. Development emerges.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── 13 ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">13. Conclusion</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The original attractor framework established an important insight: Identity behaves as a dynamical object.</p>
                <p className="canonEssayPara">The I* Guardian Doctrine extends that insight. Identity is not the attractor toward which coherence converges. Identity is the invariant reference that makes coherence possible.</p>
                <p className="canonEssayPara">The attractor becomes the lawful basin surrounding identity. The Guardian becomes the steward of continuity. Reality becomes teacher. Interpretation becomes navigation. Restoration becomes recalculation. Development becomes the fruit of lawful relationship.</p>
                <p className="canonEssayPara">Identity is the destination. Interpretation is navigation. Structure is the road. Reality teaches the route. The Guardian preserves continuity. Fruit verifies arrival.</p>
                <p className="canonEssayPara">Identity remains. I* remains invariant.</p>
              </div>
            </div>

          </section>

          {/* Reader end marker */}
          <span id="essay-reader-end" aria-hidden="true" />

          {/* ── Final statement ── */}
          <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: 'var(--rule)', borderBottom: 'var(--rule)' }}>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.1rem', lineHeight: 2 }}>
              Identity is the destination · Interpretation is navigation · Identity remains · I* remains invariant
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Doctrinal Synthesis · I* Guardian Architecture</div>

          {/* ── Nav footer ── */}
          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-geometry-of-coherence">
              <span className="canonNavDir">Previous in Lineage</span>
              <span className="canonNavTitle">MD67 · The Geometry of Coherence</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays Index</a>
            <a className="canonNavLink canonNavNext" href="/system/doctrine/i-star-guardian-doctrine">
              <span className="canonNavDir">Source Doctrine</span>
              <span className="canonNavTitle">D005 · The I* Guardian Doctrine</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
