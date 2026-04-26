/**
 * /system/coordinate
 * IDENTITY AS COORDINATE — GPS FORMALIZATION
 * standingstate.com
 */

import Head from 'next/head'
import KTex from '../../components/KTex'

const PRIMITIVES = [
  { sym: 'I',     def: 'Identity (target coordinate)' },
  { sym: 'x',     def: 'Current state (position)' },
  { sym: '\\pi',  def: 'Structure (action trajectory)' },
  { sym: 'F',     def: 'Dynamics — how action moves state' },
  { sym: 'x^*',   def: 'Target state (destination)' },
]

const SECTIONS = [
  {
    num: 'II', title: 'GPS Analog',
    equations: ['I \\;\\equiv\\; x^*'],
    note: 'Entering a destination does not move the system. It defines direction, path constraints, and destination.',
  },
  {
    num: 'III', title: 'Motion Requirement',
    equations: [
      'x_{t+1} \\;=\\; F(x_t,\\,\\pi_t)',
      'I = x^* \\;\\wedge\\; \\pi = 0 \\;\\Rightarrow\\; x \\neq x^*',
    ],
    note: 'No movement. No convergence.',
  },
  {
    num: 'IV', title: 'Law',
    equations: ['I \\;\\Rightarrow\\; \\pi(I) \\;\\Rightarrow\\; x \\rightarrow x^*'],
    note: 'Identity selects the coordinate. Structure executes the trajectory. Reality updates through motion.',
  },
  {
    num: 'V', title: 'Failure Condition',
    equations: ['I = x^* \\;\\wedge\\; \\pi^{\\text{misaligned}} \\;\\Rightarrow\\; x \\not\\rightarrow x^*'],
    note: 'Wrong route · no movement · boundary violation.',
  },
  {
    num: 'VII', title: 'Completion Condition',
    equations: ['\\pi \\in S(I) \\;\\Rightarrow\\; x \\rightarrow x^*'],
    note: null,
  },
]

export default function CoordinatePage() {
  return (
    <>
      <Head>
        <title>Identity as Coordinate — Standing State Press</title>
        <meta name="description" content="GPS Formalization. Claiming identity is selecting the destination. It is not traveling to it. Structure moves the system to that coordinate." />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/interpretation">Interpretation</a></li>
            <li><a href="/system/pain">Pain</a></li>
            <li><a href="/essays">Essays</a></li><li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/#system">System</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Coordinate</span>
          </div>
          <div className="glossEyebrow">GPS Formalization</div>
          <h1 className="glossH1">Identity as Coordinate</h1>
          <p className="glossIntro">
            Claiming identity is selecting the destination.
            It is not traveling to it. The GPS does not move the car.
            It defines the coordinate. Structure — action aligned with
            that coordinate — moves the system.
          </p>
          <div className="glossMandate">
            Claiming identity does not create reality. It selects the coordinate.
            Structure moves the system to that coordinate.
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* Primitives */}
      <section className="glossVarSec" style={{ paddingBottom: '3rem' }}>
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">I · Primitives</span>
            <div className="secRule" />
          </div>
          <div className="interpPrimitives reveal">
            {PRIMITIVES.map(p => (
              <div key={p.sym} className="interpPrimRow">
                <span className="interpPrimSym"><KTex math={p.sym} /></span>
                <span className="interpPrimDef">{p.def}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Sections */}
      <section className="interpSections">
        <div className="wrap">
          {SECTIONS.map((sec, i) => (
            <div key={sec.num} className={`interpSection reveal d${i > 4 ? 4 : i}`}>
              <div className="interpSecHeader">
                <span className="interpSecNum">{sec.num}</span>
                <span className="interpSecTitle">{sec.title}</span>
              </div>
              <div className="interpSecBody">
                {sec.equations.map((eq, j) => (
                  <div key={j} className="interpEq">
                    <KTex math={eq} display />
                  </div>
                ))}
                {sec.note && <p className="interpSecNote">{sec.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* Biblical Lock */}
      <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">VI · Biblical Lock</span>
            <div className="secRule" />
          </div>
          <div className="coordBiblical reveal">
            <div className="coordQuote">
              "Faith without works is dead."
              <span className="coordQuoteRef">— Epistle of James, 2:17</span>
            </div>
            <div className="coordEquiv">
              <div className="interpEq" style={{ marginBottom: '1rem' }}>
                <KTex math="I \\;\\wedge\\; \\pi = 0 \\;\\Rightarrow\\; \\text{no realization}" display />
              </div>
              <div className="coordTermTable">
                <div className="coordTermRow">
                  <span className="coordTermWord">Faith</span>
                  <span className="coordTermEq">=</span>
                  <span className="coordTermDef">coordinate (identity)</span>
                </div>
                <div className="coordTermRow">
                  <span className="coordTermWord">Works</span>
                  <span className="coordTermEq">=</span>
                  <span className="coordTermDef">structure (action)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Closure */}
      <section className="interpClosure">
        <div className="wrap">
          <div className="interpClosureInner reveal">
            <div className="secHead" style={{ marginBottom: '2rem' }}>
              <span className="secLabel">Closure</span>
              <div className="secRule" />
            </div>
            <p className="interpClosureNote">
              Claiming identity is selecting the destination.<br />
              It is not traveling to it.
            </p>
            <div className="interpEq" style={{ marginBottom: '1.5rem', textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              <span><KTex math="I" /> alone &nbsp;⇒&nbsp; no state change</span>
            </div>
            <p className="interpClosureNote">
              Movement requires: action · alignment · persistence.
            </p>
            <div className="interpClosureEq" style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              <span><KTex math="A" />&nbsp;→&nbsp;<KTex math="A" />&nbsp;&nbsp;because&nbsp;&nbsp;<KTex math="A" /> knows it is <KTex math="A" /></span>
            </div>
            <div className="interpNsrlBadge" style={{ marginTop: '1rem' }}>
              Identity → Structure → Reality
            </div>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid var(--border)' }}>
        <div className="wrap">
          <div className="platesSystemNavInner reveal">
            <a href="/system/interpretation" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Previous Layer</span>
              <span className="platesSystemLinkTitle">Architecture of Interpretation →</span>
              <span className="platesSystemLinkSub">The full causal pipeline.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/system/pain" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Next Layer</span>
              <span className="platesSystemLinkTitle">Pain as Decoherence Signal →</span>
              <span className="platesSystemLinkSub">What fires when the coordinate is missed.</span>
            </a>
          </div>
        </div>
      </section>


      <script dangerouslySetInnerHTML={{__html: `
        const obs = new IntersectionObserver(
          entries => entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
          }), { threshold: 0.06 }
        );
        document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
      `}} />
    </>
  )
}
