/**
 * /essays/canonical/the-geometry-of-lawful-arrival
 * M061 — The Geometry of Lawful Arrival:
 * Identity, Consequence, and the Architecture of Return
 *
 * Canonical mirror of the M061 essay.
 * Companion to Plate XXIX (P029). Sibling synthesis essay to M060.
 *
 * Governing forms:
 *   I* = constant
 *   Φ(x; I*) ≤ 0
 *   𝒫* = argmax(Arrival ∩ Integrity)
 *
 * The first principle is not speed.
 * The first principle is arriving alive.
 * Straight lines belong to worlds without consequence.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function GeometryOfLawfulArrivalCanonical() {
  return (
    <>
      <Head>
        <title>M061 — The Geometry of Lawful Arrival — Standing State Press</title>
        <meta
          name="description"
          content="The Standing State exists because consequence exists. If reality carried no cost, straight lines would always suffice. Because consequence is real, movement must become lawful. The first principle is not speed; the first principle is arriving alive."
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
            <span style={{ color: 'var(--gold-dim)' }}>M061</span>
          </div>
          <div className="glossEyebrow">Volume I · Synthesis &amp; Lawful Arrival</div>
          <h1 className="glossH1">The Geometry of Lawful Arrival</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            Identity, consequence, and the architecture of return.
            The first principle is not speed. The first principle is arriving alive.
            Straight lines belong to worlds without consequence.
          </p>
          <div className="essayStats">
            <span className="essayStat">M061</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">PLT-COORD</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">VOL-CROSS</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">REG-STRUCT</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">

          <div className="canonEssayHeader">
            <div className="canonEssayNum">By Leon Powdar · Standing State Press</div>
            <div className="canonEssayRule" />
          </div>

          {/* ── Governing condition block ── */}
          <div className="canonEssayEqBlock">
            <div className="canonEssayEq">
              <KTex math="\mathcal{P}^{*} \;=\; \arg\max\,(\text{Arrival} \,\cap\, \text{Integrity})" display />
            </div>
          </div>

          <div className="canonEssayThesis">
            The Standing State exists because consequence exists. The lawful path is the
            survivable one. Identity holds while traversal bends through cost — arriving
            alive is the first principle, not speed.
          </div>

          {/* ── I. The Error of Straight-Line Thinking ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">I. The Error of Straight-Line Thinking</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                If reality had no consequence, every path would be simple. The shortest
                distance would always win. The fastest motion would always dominate.
                Optimization would collapse into one equation:
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="\arg\min(d) \;=\; \arg\max(\text{success})" display />
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                In a world without cost, resistance, uncertainty, fragility, or failure,
                the straight line would always be the correct answer. Yet reality does
                not operate this way.
              </p>
              <p className="canonEssayPara">
                Bodies fatigue. Systems overload. Relationships fracture. Civilizations
                fail. Signal accumulates. Load compounds. Movement carries consequence.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                And because consequence exists, the shortest path is not always the
                lawful one.
              </p>
              <p className="canonEssayPara">
                The Standing State emerges from this condition. Not as preference.
                Not as philosophy alone. As geometry.
              </p>
            </div>
          </div>

          {/* ── II. Identity as Coordinate ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">II. Identity as Coordinate</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Movement only becomes meaningful relative to what remains invariant.
                Without an orienting reference, motion becomes drift.
              </p>
              <p className="canonEssayPara">
                Within the Standing State, identity functions as an invariant coordinate:
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="I^{*} \;=\; \text{invariant coordinate}" display />
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Identity is not a frozen state and not a fixed moment in time. It is the
                invariant coordinate through which living motion remains coherent.
              </p>
              <p className="canonEssayPara">
                State changes. Conditions change. Pressure changes. Yet identity remains.
                The system moves; the coordinate holds.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                The task is not to move infinitely. The task is to move lawfully relative
                to the coordinate.
              </p>
              <p className="canonEssayPara">
                Admissibility determines whether movement preserves coherence:
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="\Phi(x;\, I^{*}) \le 0" display />
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                When admissibility fails, restoration becomes necessary. When admissibility
                holds, movement continues.
              </p>
            </div>
          </div>

          {/* ── III. Why Consequence Creates Wisdom ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">III. Why Consequence Creates Wisdom</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Consequence is not punishment. Consequence is instruction.
              </p>
              <p className="canonEssayPara">
                If reality imposed no cost, wisdom would be unnecessary. Every path would
                succeed. Every motion would survive. Every system could accelerate
                endlessly.
              </p>
              <p className="canonEssayPara">
                Yet consequence introduces geometry. Some trajectories preserve integrity.
                Others fragment the system attempting to travel them.
              </p>
              <p className="canonEssayPara">
                This is why speed alone cannot be the governing principle. A system that
                reaches the destination destroyed has not succeeded.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                The first principle is not speed. The first principle is arriving alive.
              </p>
            </div>
          </div>

          {/* ── IV. The Geometry of Lawful Arrival ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IV. The Geometry of Lawful Arrival</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Lawful movement is not the straightest line. It is the survivable one.
              </p>
              <p className="canonEssayPara">
                The lawful path is:
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="\mathcal{P}^{*} \;=\; \arg\max\,(\text{Arrival} \,\cap\, \text{Integrity})" display />
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Arrival without integrity is collapse. Integrity without movement is
                stagnation. Lawful traversal requires both.
              </p>
              <p className="canonEssayPara">
                This is why the Five Gates of Convergence exist:
              </p>
              <p className="canonEssayPara" style={{ paddingLeft: '1.5rem' }}>
                Recognition.<br/>
                Orientation.<br/>
                Admissibility.<br/>
                Execution.<br/>
                Resolution.
              </p>
              <p className="canonEssayPara">
                The path bends because consequence exists.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                Straight lines belong to worlds without consequence.
              </p>
            </div>
          </div>

          {/* ── V. WOW — The Recognition of Home ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">V. WOW — The Recognition of Home</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                There is a moment when contradiction no longer demands reconciliation.
              </p>
              <p className="canonEssayPara">
                Not because tension was ignored. Not because conflict disappeared.
                Because coherence resolved.
              </p>
              <p className="canonEssayPara">
                The path phase-locks. Home is recognized.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
                WOW.
              </p>
              <p className="canonEssayPara">
                Not stimulation. Not novelty. Not excitement.
              </p>
              <p className="canonEssayPara">
                Phase-lock recognized. The felt recognition that movement remained lawful.
                That integrity survived traversal. That the coordinate held.
              </p>
              <p className="canonEssayPara">
                The system recognizes:
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="x \;\rightarrow\; I^{*}" display />
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                And words briefly pause.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                Not because nothing remains to say. Because contradiction no longer
                requires reconciliation.
              </p>
            </div>
          </div>

          {/* ── Final Thesis ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Final Thesis</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                The Standing State exists because consequence exists.
              </p>
              <p className="canonEssayPara">
                If reality carried no cost, straight lines would always suffice. Yet
                because consequence is real, movement must become lawful.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq" style={{ fontSize: '1.15rem', fontStyle: 'italic' }}>
                The first principle is not speed.
              </div>
              <div className="canonEssayEq" style={{ marginTop: '0.5rem', fontSize: '1.15rem', fontStyle: 'italic' }}>
                The first principle is arriving alive.
              </div>
              <div className="canonEssayEq" style={{ marginTop: '0.5rem', fontSize: '1.15rem', fontStyle: 'italic' }}>
                Straight lines belong to worlds without consequence.
              </div>
            </div>
          </div>

          {/* ── Closing axiom ── */}
          <div className="canonEssayEqBlock" style={{ marginTop: '3rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.5rem' }}>
              A becomes A, because A knows it is A.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gold-dim)', fontStyle: 'italic', fontSize: '1rem' }}>
              Amen. Selah.
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Canonical · Synthesis &amp; Lawful Arrival</div>

          {/* ── Companion Plate ── */}
          <div className="plateDetailBlock" style={{ marginTop: '2rem' }}>
            <div className="plateDetailBlockLabel">Companion Plate</div>
            <div className="glossVarLogicWrap">
              <div style={{ padding: '1rem 1.2rem' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', display: 'block', marginBottom: '0.4rem' }}>Visual Authority Layer</span>
                <a href="/system/plates/the-geometry-of-lawful-arrival" style={{ color: 'var(--gold)' }}>P029 — The Geometry of Lawful Arrival (Plate XXIX)</a>
              </div>
            </div>
          </div>

          {/* ── Sibling Synthesis Essay ── */}
          <div className="plateDetailBlock" style={{ marginTop: '1.5rem' }}>
            <div className="plateDetailBlockLabel">Sibling Synthesis Essay</div>
            <div className="glossVarLogicWrap">
              <div style={{ padding: '1rem 1.2rem' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', display: 'block', marginBottom: '0.4rem' }}>Lawful Motion · Lawful Arrival</span>
                <a href="/essays/canonical/standing-state-lawful-motion" style={{ color: 'var(--gold)' }}>M060 — Lawful Motion Under Invariant Identity</a>
                <div style={{ marginTop: '0.5rem', color: 'var(--gray-lt)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  M060 names the architecture of motion. M061 names the geometry of arrival. Together they render the Standing State at synthesis resolution — motion under identity, arrival through consequence.
                </div>
              </div>
            </div>
          </div>

          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/standing-state-lawful-motion">
              <span className="canonNavDir">Sibling</span>
              <span className="canonNavTitle">M060 · Lawful Motion Under Invariant Identity</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays Index</a>
            <a className="canonNavLink canonNavNext" href="/system/plates/the-geometry-of-lawful-arrival">
              <span className="canonNavDir">Plate</span>
              <span className="canonNavTitle">P029 · The Geometry of Lawful Arrival</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />

    </>
  )
}
