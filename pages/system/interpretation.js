/**
 * /system/interpretation
 * ARCHITECTURE OF HUMAN INTERPRETATION
 * NSRL-11 Certified — Identity Coordinate Law
 * standingstate.com
 */

import Head from 'next/head'
import KTex from '../../components/KTex'

const PRIMITIVES = [
  { sym: 'I',                   def: 'Identity (reference coordinate)' },
  { sym: '\\nabla_c',           def: 'Conscience gradient (coherence signal)' },
  { sym: '\\mathcal{I}',        def: 'Interpretation (evaluation operator)' },
  { sym: '\\pi',                def: 'Structure (action policy)' },
  { sym: 'x',                   def: 'Realized state (reality)' },
  { sym: '\\Phi(x;\\,I)',       def: 'Deviation from identity-aligned coherence' },
]

const SECTIONS = [
  {
    num: 'II',
    title: 'Law — Identity Coordinate',
    equations: ['I \\;\\Rightarrow\\; \\pi(I) \\;\\Rightarrow\\; x'],
    note: 'Identity selects the coordinate. Structure is induced from identity. Reality is propagated structure over time.',
  },
  {
    num: 'III',
    title: 'Full Causal Pipeline',
    equations: ['I \\;\\Rightarrow\\; \\mathcal{I}(I,\\,\\nabla_c) \\;\\Rightarrow\\; \\pi \\;\\Rightarrow\\; x'],
    note: 'This pipeline is unidirectional and dependent. Each stage is a prerequisite for the next.',
  },
  {
    num: 'IV',
    title: 'Interpretation Operator',
    equations: ['\\pi \\;=\\; \\arg\\min_{\\pi}\\; \\Phi\\!\\bigl(F(x,\\pi);\\,I\\bigr)'],
    note: 'Interpretation selects the action policy that minimizes deviation from the identity coordinate.',
  },
  {
    num: 'V',
    title: 'Conscience Gradient',
    equations: [
      '\\nabla_c \\;=\\; \\dfrac{\\partial \\Phi}{\\partial x}',
    ],
    note: 'Conscience does not define identity. It measures alignment relative to identity.',
    cases: [
      { cond: '\\nabla_c > 0', result: 'pain (deviation signal)' },
      { cond: '\\nabla_c \\le 0', result: 'coherence (alignment signal)' },
    ],
  },
  {
    num: 'VI',
    title: 'State Propagation',
    equations: [
      'x_{t+1} \\;=\\; F(x_t,\\,\\pi_t) \\qquad,\\qquad \\pi_t \\;=\\; \\pi(I)',
    ],
    note: null,
  },
  {
    num: 'VII',
    title: 'Reality Formation',
    equations: ['x(T) \\;=\\; \\int_{0}^{T} \\pi(t)\\,dt'],
    note: 'Reality is accumulated structured action.',
  },
  {
    num: 'VIII',
    title: 'Admissible Set',
    equations: [
      'S(I) \\;:=\\; \\bigl\\{\\,x : \\Phi(x;\\,I) \\le 0\\,\\bigr\\}',
      'x \\in S(I) \\;\\Rightarrow\\; \\text{forward invariance}',
    ],
    note: null,
  },
  {
    num: 'IX',
    title: 'Failure Mode — Interpretation Drift',
    equations: [
      '\\nabla_c^{\\text{distorted}} \\;\\Rightarrow\\; \\mathcal{I}^{\\text{misaligned}} \\;\\Rightarrow\\; \\pi^{\\text{unstable}} \\;\\Rightarrow\\; \\Phi(x) > 0',
    ],
    note: 'Causes: distorted gradient · unstable identity (I ≠ I*) · boundary violation',
  },
  {
    num: 'XI',
    title: 'Completion Regime',
    equations: [
      '\\Sigma \\downarrow \\;\\wedge\\; B(t)\\ \\text{holds} \\;\\Rightarrow\\; K_{\\text{auto}} \\uparrow \\;\\Rightarrow\\; \\Phi(x) \\rightarrow 0',
    ],
    note: null,
  },
  {
    num: 'XII',
    title: 'Terminal Form',
    equations: [
      'I \\;\\Rightarrow\\; \\nabla_c \\;\\Rightarrow\\; \\mathcal{I} \\;\\Rightarrow\\; \\pi \\;\\Rightarrow\\; x',
    ],
    note: null,
  },
]

const NSRL_ROWS = [
  {
    state: 'Valid',
    condition: 'Identity ∧ boundary-aligned action',
    result: 'x ∈ S → Φ → 0',
    valid: true,
  },
  {
    state: 'Invalid',
    condition: 'Identity ∧ boundary violation',
    result: 'HALT → Φ ↛ 0',
    valid: false,
  },
]

const CLOSURE = [
  { term: 'Identity',        def: 'fixes the reference.' },
  { term: 'Conscience',      def: 'provides the gradient.' },
  { term: 'Interpretation',  def: 'selects the trajectory.' },
  { term: 'Structure',       def: 'executes the trajectory.' },
  { term: 'Reality',         def: 'is the accumulated result.' },
]

export default function InterpretationPage() {
  return (
    <>
      <Head>
        <title>Architecture of Human Interpretation — Standing State Press</title>
        <meta name="description" content="NSRL-11 Certified. Identity Coordinate Law. The causal pipeline from identity to reality." />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/gates">Gates</a></li>
            <li><a href="/essays">Essays</a></li><li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/#system">System</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Interpretation</span>
          </div>
          <div className="glossEyebrow">NSRL-11 Certified · Identity Coordinate Law</div>
          <h1 className="glossH1">Architecture of Human Interpretation</h1>
          <p className="glossIntro">
            A rigorous causal pipeline distinguishing declarative signal from structural realization.
            Identity is not a causal override. It is a coordinate selector that determines
            the trajectory of the system's structural evolution.
          </p>
          <div className="glossMandate">
            Identity fixes the reference. Reality is the accumulated result.
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── I. PRIMITIVES ── */}
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

      {/* ── SECTIONS II–XII ── */}
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
                {sec.cases && (
                  <div className="interpCases">
                    {sec.cases.map(c => (
                      <div key={c.cond} className="interpCaseRow">
                        <span className="interpCaseCond"><KTex math={c.cond} /></span>
                        <span className="interpCaseArr">⇒</span>
                        <span className="interpCaseResult">{c.result}</span>
                      </div>
                    ))}
                  </div>
                )}
                {sec.note && <p className="interpSecNote">{sec.note}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="divider" />

      {/* ── X. NSRL-11 CONSTRAINT ── */}
      <section className="interpNsrlSec">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">X · NSRL-11 Constraint — Under Pressure</span>
            <div className="secRule" />
          </div>
          <div className="interpNsrlTable reveal">
            <div className="interpNsrlRow interpNsrlHead">
              <span>State</span>
              <span>Condition</span>
              <span>Result</span>
            </div>
            {NSRL_ROWS.map(row => (
              <div
                key={row.state}
                className={`interpNsrlRow ${row.valid ? 'interpNsrlValid' : 'interpNsrlInvalid'}`}
              >
                <span className="interpNsrlState">{row.state}</span>
                <span className="interpNsrlCond">{row.condition}</span>
                <span className="interpNsrlResult">{row.result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CLOSURE ── */}
      <section className="interpClosure">
        <div className="wrap">
          <div className="interpClosureInner reveal">
            <div className="secHead" style={{ marginBottom: '2rem' }}>
              <span className="secLabel">Closure</span>
              <div className="secRule" />
            </div>
            <div className="interpClosureTable">
              {CLOSURE.map(row => (
                <div key={row.term} className="interpClosureRow">
                  <span className="interpClosureTerm">{row.term}</span>
                  <span className="interpClosureDef">{row.def}</span>
                </div>
              ))}
            </div>
            <p className="interpClosureNote">
              Identity does not override reality.<br />
              It determines whether the system moves with reality or against it.
            </p>
            <div className="interpClosureEq" style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
              <span><KTex math="A" />&nbsp;→&nbsp;<KTex math="A" />&nbsp;&nbsp;because&nbsp;&nbsp;<KTex math="A" /> knows it is <KTex math="A" /></span>
            </div>
            <div className="interpNsrlBadge">NSRL-11: CLOSED</div>
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
