/**
 * /essays/canonical/the-guardian-of-rest
 * M077 — The Guardian of Rest
 * Engine 2 and the Sabbath of Restoration
 *
 * Engine 2 Canonical Series — Essay IV of V
 * Restoration governance. Question: When is continuation lawful?
 * Compression: Restoration precedes expansion.
 */

import Head from 'next/head'

export default function TheGuardianOfRest() {
  return (
    <>
      <Head>
        <title>M077 — The Guardian of Rest — Standing State Press</title>
        <meta
          name="description"
          content="Restoration precedes expansion. A lawful halt protects the coordinate. The purpose of rest is the preservation of lawful continuation. Engine 2 and the Sabbath of Restoration."
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
            <span style={{ color: 'var(--gold-dim)' }}>M077 · IV of V</span>
          </div>
          <div className="glossEyebrow">Engine 2 Canonical Series · Essay IV · Restoration Governance</div>
          <h1 className="glossH1">The Guardian of Rest</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            Engine 2 and the Sabbath of Restoration. A Thesis on Lawful Halt,
            Restoration, and the Preservation of Identity.
          </p>
          <div className="essayStats">
            <span className="essayStat">M077</span>
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
                ['IV', 'M077', 'The Guardian of Rest', '/essays/canonical/the-guardian-of-rest', true],
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
              Identity remains. Restoration protects. Arrive alive.
            </div>
          </div>

          <div className="canonEssayThesis">
            The purpose of rest is not the absence of work. The purpose of rest is the preservation of lawful continuation.
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">I — The Forgotten Governance Function</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Most systems understand execution. Few understand restoration. Modern culture celebrates acceleration, optimization, productivity, and expansion. Motion becomes evidence of value. Activity becomes evidence of purpose.</p>
              <p className="canonEssayPara">Engine 2 begins from a different principle. Before execution, preserve. Before expansion, restore. Before optimization, survive. The first principle is not speed. The first principle is arriving alive.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">II — The Invariant Coordinate</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Every governance architecture requires an authority that remains stable while reality applies correction. Engine 2 designates this authority as I*. I* is not an outcome. I* is not a performance metric. I* is not a prediction. I* is the invariant identity coordinate from which lawful continuation becomes possible.</p>
              <p className="canonEssayPara">Reality may modify projections. Reality may modify expectations. Reality may modify allocation. Reality may never rewrite identity. Identity remains.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">III — The Organism Participates</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Reality does not interact with abstractions. Reality interacts with organisms. Every organism possesses limits — biological, cognitive, emotional, energetic, temporal. A coherent map cannot compensate for a depleted organism. A correct interpretation cannot compensate for exhausted capacity.</p>
              <p className="canonEssayPara">Engine 2 therefore recognizes embodiment as a governance input. The organism participates in authority.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IV — The Restoration Ladder</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">When reality returns increasing strain, Engine 2 does not immediately increase effort. It evaluates admissibility. Can lawful execution continue? If yes, continue. If no, restore. If restoration succeeds, execution resumes. If restoration remains unavailable, lawful halt becomes necessary.</p>
            </div>
            <div className="glossVarLogicWrap" style={{ margin: '1rem 0' }}>
              {['EXECUTE', 'PROJECTION UPDATE', 'MAP UPDATE', 'RESTORE', 'HALT'].map((step, i, arr) => (
                <div key={step} style={{ padding: '0.6rem 1.2rem', borderBottom: i < arr.length - 1 ? 'var(--rule)' : 'none', color: i === arr.length - 1 ? 'var(--gold)' : 'var(--offwhite)' }}>
                  {step}
                </div>
              ))}
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Each level protects the same thing: the continuity of I*. The ladder does not exist to maximize output. The ladder exists to preserve lawful continuation.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">V — The Meaning of Lawful Halt</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Most systems interpret halt as failure. Engine 2 interprets halt differently. A lawful halt protects the coordinate. A lawful halt preserves future execution. A lawful halt prevents the destruction of the substrate required for future development.</p>
              <p className="canonEssayPara">The swimmer exits the water. The pilot aborts the takeoff. The organism enters Sabbath. Nothing has failed. Identity has been preserved. The coordinate remains available for future correction, restoration, and development. HALT is not collapse. HALT is protection.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VI — The Sabbath Principle</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The Sabbath is not inactivity. The Sabbath is governance. The Sabbath is the temporary suspension of expansion to preserve coherence. The purpose of Sabbath is not comfort. The purpose of Sabbath is restoration. Accumulated strain dissipates. Capacity returns. Admissibility is restored. The organism becomes capable of lawful execution once again. Restoration protects.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VII — The Guardian of Rest</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">The Guardian of Attention governs admission. The Guardian of Rest governs continuation. The Guardian asks: does execution remain lawful? Does the organism possess sufficient capacity? Does reality currently permit continuation?</p>
              <p className="canonEssayPara">If the answer is yes, execution proceeds. If the answer is no, restoration receives authority. When restoration receives authority, execution waits. Identity remains. Reality continues to teach. The organism recovers. Development remains possible.</p>
            </div>
          </div>

          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VIII — Lawful Becoming</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Engine 2 does not seek endless activity. Engine 2 seeks lawful becoming. Identity remains invariant. Reality continuously returns fruit. Governance evaluates admissibility. Restoration preserves capacity. Development emerges through correction.</p>
              <p className="canonEssayPara">A system that refuses restoration eventually loses coherence. A system that honors restoration preserves the possibility of future growth.</p>
            </div>
          </div>

          <div className="canonEssayEqBlock" style={{ marginTop: '2rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.1rem' }}>
              Identity remains. Reality teaches.<br />
              Governance protects. Restoration preserves.<br />
              Development emerges.
            </div>
          </div>

          <div className="plateDetailBlock" style={{ marginTop: '1.5rem' }}>
            <div className="canonEssayBody">
              <p className="canonEssayPara" style={{ fontStyle: 'italic', color: 'var(--gold-dim)' }}>
                The purpose of Sabbath is maintaining the conditions under which reality may continue to teach without destroying the substrate that receives the lesson. The Guardian protects admission. The Guardian protects rest. The coordinate remains. The organism restores. Lawful becoming continues. I* remains invariant.
              </p>
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Engine 2 Canonical Series · Essay IV of V</div>

          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-guardian-of-attention">
              <span className="canonNavDir">Previous · III of V</span>
              <span className="canonNavTitle">The Guardian of Attention</span>
            </a>
            <a className="canonNavIndex" href="/essays/series/engine-2">Series Index</a>
            <a className="canonNavLink canonNavNext" href="/essays/canonical/anger-is-not-a-sin">
              <span className="canonNavDir">Next · V of V</span>
              <span className="canonNavTitle">Anger Is Not a Sin</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
