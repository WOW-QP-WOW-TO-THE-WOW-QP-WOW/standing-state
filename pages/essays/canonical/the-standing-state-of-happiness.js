/**
 * /essays/canonical/the-standing-state-of-happiness
 * C013 — The Standing State of Happiness
 *
 * Canonical · Apex+1 · Expression Under the Gate
 * Source register: structural rewrite of M045 (medium narrative).
 * Position: C012 (Gate) → C013 (Expression).
 *
 * H is the residual output of a system satisfying the admissibility gate.
 * H is not pursued. H is revealed when contradiction is removed.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function StandingStateOfHappinessCanonical() {
  return (
    <>
      <Head>
        <title>C013 — The Standing State of Happiness — Standing State Press</title>
        <meta
          name="description"
          content="H is the stable output residual of a system satisfying the admissibility gate. H is not pursued. H is revealed when Φ(x; I*) ≤ 0."
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
            <span style={{ color: 'var(--gold-dim)' }}>C013</span>
          </div>
          <div className="glossEyebrow">Canonical Essay · Apex+1 · Expression Under the Gate</div>
          <h1 className="glossH1">The Standing State of Happiness</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            H is the residual output of a system satisfying the admissibility gate.
          </p>
          <div className="essayStats">
            <span className="essayStat">C013</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">PLT-GATE</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">VOL-SS</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">REG-STRUCT</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">

          <div className="canonEssayHeader">
            <div className="canonEssayNum">By Leon Powdar (Phase Reference) · Standing State Press</div>
            <div className="canonEssayRule" />
          </div>

          {/* ── Governing condition block ── */}
          <div className="canonEssayEqBlock">
            <div className="canonEssayEq">
              <KTex math="\Phi(x;\, I^{*}) \le 0 \;\Rightarrow\; H" display />
            </div>
          </div>

          <div className="canonEssayThesis">
            H is not pursued. H is the residual condition when the gate holds.
          </div>

          {/* ── I. Definition ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">I. Definition</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                H denotes the stable output of a system whose state lies within the admissible
                set under identity invariant.
              </p>
              <p className="canonEssayPara">
                H is not pursued. H is not produced.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                H is the residual condition when <KTex math="\Phi(x;\, I^{*}) \le 0" />.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="H \;:=\; \text{stable output under } \Phi(x;\, I^{*}) \le 0" display />
              </div>
            </div>
          </div>

          {/* ── II. Governing Condition ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">II. Governing Condition</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Admissibility is binary. The output is binary.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="\Phi(x;\, I^{*}) \le 0 \;\Rightarrow\; H \text{ stable}" display />
              </div>
              <div className="canonEssayEq" style={{ marginTop: '0.75rem' }}>
                <KTex math="\Phi(x;\, I^{*}) > 0 \;\Rightarrow\; H \text{ unavailable}" display />
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                There are no gradients of H. There are no partial states. The system either
                satisfies the gate or does not. H is a function of admissibility, not of effort.
              </p>
            </div>
          </div>

          {/* ── III. Elimination of Pursuit ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">III. Elimination of Pursuit</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Targeting H as an input is a category error.
              </p>
              <p className="canonEssayPara">
                When <KTex math="\Phi(x;\, I^{*}) > 0" />, action directed at acquiring H increases
                deviation from <KTex math="I^{*}" />. The system interprets the pursuit as additional
                load, raising Φ further. H recedes as it is sought.
              </p>
              <p className="canonEssayPara">
                H cannot be optimized.<br />
                H cannot be acquired.<br />
                H is not in the action space.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                H is in the output space, conditional on the gate.
              </p>
            </div>
          </div>

          {/* ── IV. Misclassification Layer ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IV. Misclassification Layer</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Several states are commonly identified as H. They are not H.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="\text{Pleasure} \;\ne\; H" display />
              </div>
              <div className="canonEssayEq" style={{ marginTop: '0.75rem' }}>
                <KTex math="\text{Relief} \;\ne\; H" display />
              </div>
              <div className="canonEssayEq" style={{ marginTop: '0.75rem' }}>
                <KTex math="\text{Stimulation} \;\ne\; H" display />
              </div>
              <div className="canonEssayEq" style={{ marginTop: '0.75rem' }}>
                <KTex math="\text{Escape} \;\ne\; H" display />
              </div>
            </div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Each is a transient state observed under unresolved Φ. Each terminates when its
                proximal cause terminates. None survive substrate change. None hold under load.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                H holds.
              </p>
            </div>
          </div>

          {/* ── V. Expression Layer ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">V. Expression Layer</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                H is the system at rest under identity alignment.
              </p>
              <p className="canonEssayPara">
                H does not fluctuate with external input.<br />
                H is invariant across substrate when <KTex math="\Phi \le 0" />.<br />
                H requires no maintenance.<br />
                H produces no demand.
              </p>
              <p className="canonEssayPara">
                H is not a feeling registered by the system. H is the operating condition of the
                system when contradiction has been removed.
              </p>
            </div>
          </div>

          {/* ── VI. Closure ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VI. Closure</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                H is not created.<br />
                H is revealed when contradiction is removed.
              </p>
              <p className="canonEssayPara">
                The gate selects. The state expresses.
              </p>
            </div>
            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                <KTex math="\Phi(x;\, I^{*}) \le 0 \;\Rightarrow\; H" display />
              </div>
            </div>
          </div>

          {/* ── Closing axiom ── */}
          <div className="canonEssayEqBlock" style={{ marginTop: '3rem' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.5rem' }}>
              A becomes A, because A knows it is A.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gold-dim)', fontStyle: 'italic', fontSize: '1rem' }}>
              Selah.
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Canonical · Expression Under the Gate</div>

          {/* ── Companion link to mirror ── */}
          <div className="plateDetailBlock" style={{ marginTop: '2rem' }}>
            <div className="plateDetailBlockLabel">Paired Mirror</div>
            <div className="glossVarLogicWrap">
              <div style={{ padding: '1rem 1.2rem' }}>
                <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', display: 'block', marginBottom: '0.4rem' }}>Narrative Layer</span>
                <a href="/essays/medium/standing-state-of-happiness" style={{ color: 'var(--gold)' }}>M045 — The Standing State of Happiness (Mirror)</a>
              </div>
            </div>
          </div>

          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/gate-of-admissibility">
              <span className="canonNavDir">Previous</span>
              <span className="canonNavTitle">C012 · The Gate of Admissibility</span>
            </a>
            <a className="canonNavIndex" href="/essays/canonical">Canonical Index</a>
            <a className="canonNavLink canonNavNext" href="/essays/medium/standing-state-of-happiness">
              <span className="canonNavDir">Mirror</span>
              <span className="canonNavTitle">M045 · Narrative</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />

    </>
  )
}
