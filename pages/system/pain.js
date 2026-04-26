/**
 * /system/pain
 * PAIN AS DECOHERENCE SIGNAL
 * standingstate.com
 */

import Head from 'next/head'
import KTex from '../../components/KTex'

const PRIMITIVES = [
  { sym: 'x',                 def: 'Realized state' },
  { sym: 'I',                 def: 'Identity (reference coordinate)' },
  { sym: '\\Phi(x;\\,I)',    def: 'Deviation from identity-aligned coherence' },
  { sym: '\\nabla_c',        def: '∂Φ / ∂x — the conscience gradient' },
]

const SECTIONS = [
  {
    num: 'II', title: 'Definition',
    equations: [
      '\\text{Pain} \\;\\equiv\\; \\nabla_c > 0',
      '\\dfrac{\\partial \\Phi}{\\partial x} > 0 \\;\\Rightarrow\\; \\text{movement away from admissible set}',
    ],
    note: 'Pain is the signal of decoherence.',
  },
  {
    num: 'III', title: 'Coherence Condition',
    equations: ['\\text{Coherence} \\;\\equiv\\; \\nabla_c \\le 0'],
    note: 'Alignment with identity coordinate. Reduction in systemic deviation.',
  },
  {
    num: 'IV', title: 'Admissible Set',
    equations: [
      'S(I) \\;:=\\; \\bigl\\{\\,x : \\Phi(x;\\,I) \\le 0\\,\\bigr\\}',
      'x \\notin S(I) \\;\\Rightarrow\\; \\text{decoherence (pain)}',
    ],
    note: null,
  },
  {
    num: 'V', title: 'Functional Role',
    equations: ['\\nabla_c > 0 \\;\\Rightarrow\\; \\text{corrective signal}'],
    note: 'Pain does not define identity. It flags deviation requiring correction.',
  },
  {
    num: 'VI', title: 'Propagation Under Load',
    equations: [
      '\\Sigma \\uparrow \\;\\Rightarrow\\; \\nabla_c \\uparrow',
      'B(t)\\ \\text{violated} \\;\\Rightarrow\\; \\text{decoherence amplifies}',
    ],
    note: null,
  },
  {
    num: 'VII', title: 'Correction Path',
    equations: [
      '\\Sigma \\downarrow \\;\\wedge\\; B(t)\\ \\text{holds} \\;\\Rightarrow\\; K_{\\text{auto}} \\uparrow \\;\\Rightarrow\\; \\Phi(x) \\rightarrow 0',
    ],
    note: 'Pain decreases as coherence is restored.',
  },
  {
    num: 'VIII', title: 'Failure Mode',
    equations: [
      '\\text{Pain ignored} \\;\\Rightarrow\\; \\pi^{\\text{misaligned}} \\;\\Rightarrow\\; \\Phi(x) \\uparrow \\;\\Rightarrow\\; \\text{system instability}',
    ],
    note: null,
  },
]

const TERMINAL_ROWS = [
  { signal: '\\nabla_c > 0',            state: 'Pain — deviation from S(I)' },
  { signal: '\\nabla_c \\le 0',         state: 'Coherence — alignment with I' },
  { signal: '\\Phi(x) \\rightarrow 0',  state: 'Convergence — correction complete' },
]

const CLOSURE_STEPS = [
  'Respect the signal.',
  'Restore the boundary.',
  'Allow convergence.',
]

export default function PainPage() {
  return (
    <>
      <Head>
        <title>Pain as Decoherence Signal — Standing State Press</title>
        <meta name="description" content="Pain is not an enemy. It is the system's measurement of misalignment. The formal signal theory of pain as decoherence." />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/interpretation">Interpretation</a></li>
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
            <span style={{ color: 'var(--gold-dim)' }}>Pain</span>
          </div>
          <div className="glossEyebrow">Decoherence Signal Theory</div>
          <h1 className="glossH1">Pain as Decoherence Signal</h1>
          <p className="glossIntro">
            Pain is not an enemy. It is the system's measurement of misalignment —
            a gradient signal indicating that the realized state has moved
            away from the identity-aligned admissible set.
          </p>
          <div className="glossMandate">
            Pain flags deviation. Coherence confirms alignment. Correction requires respecting the signal.
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

      {/* Terminal form */}
      <section className="interpNsrlSec">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">IX · Terminal Form</span>
            <div className="secRule" />
          </div>
          <div className="interpNsrlTable reveal">
            <div className="interpNsrlRow interpNsrlHead">
              <span>Signal</span>
              <span>System State</span>
            </div>
            {TERMINAL_ROWS.map((row, i) => (
              <div key={i} className={`interpNsrlRow ${i === 2 ? 'interpNsrlValid' : i === 0 ? 'interpNsrlInvalid' : 'interpNsrlValid'}`}
                   style={{ gridTemplateColumns: '1fr 1fr' }}>
                <span className="interpNsrlCond"><KTex math={row.signal} /></span>
                <span className="interpNsrlResult">{row.state}</span>
              </div>
            ))}
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
            <p className="interpClosureNote" style={{ marginBottom: '1.5rem' }}>
              Pain is not an enemy.<br />
              It is the system's measurement of misalignment.
            </p>
            <div className="interpClosureTable" style={{ marginBottom: '2rem' }}>
              {CLOSURE_STEPS.map((step, i) => (
                <div key={i} className="interpClosureRow">
                  <span className="interpClosureTerm">{`0${i+1}`}</span>
                  <span className="interpClosureDef">{step}</span>
                </div>
              ))}
            </div>
            <div className="interpClosureEq">
              <KTex math="A \\;\\rightarrow\\; A \\quad \\text{because} \\quad A\\ \\text{knows it is}\\ A" display />
            </div>
            <div className="interpNsrlBadge" style={{ marginTop: '1rem' }}>
              Signal → Correction → Convergence
            </div>
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
