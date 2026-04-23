import Head from 'next/head'
import { useEffect } from 'react'
import KTex from '../components/KTex'
import GateGrid from '../components/GateGrid'

// ── Corpus data ───────────────────────────────────────────
const CORPUS = [
  {
    index: 'I',
    tag: 'Identity · Coherence · Return',
    title: 'The Measure Within',
    subtitle: 'The Architecture of Identity, Coherence, and Return',
    desc: 'A formal foundation for how systems maintain identity and remain coherent under constraint. The foundational text of the Standing State framework.',
    href: 'https://a.co/d/02xBGtln',
  },
  {
    index: 'II',
    tag: 'Scripture · Structure · Identity',
    title: 'The Standing State: Volume I',
    subtitle: 'Genesis 1–12 and the Architecture of Identity',
    desc: 'A structural reading of origin — identity as invariant, not narrative. The same governing law applied to the architecture of Genesis.',
    href: 'https://a.co/d/05VrS9WN',
  },
  {
    index: 'III',
    tag: 'Growth · Emergence · Identity',
    title: 'The Law of Growth',
    subtitle: 'The Emergence of the Living Self',
    desc: 'Growth as lawful emergence, not accumulation. The self does not construct itself — it unfolds from a reference state that does not drift.',
    href: 'https://a.co/d/0iCFD5Th',
  },
  {
    index: 'IV',
    tag: 'Biology · Signal · Completion',
    title: 'The Biological Sabbath of Being Healthier',
    subtitle: 'Entering the Standing State of the Human Body — Volume I',
    desc: 'The Standing State framework applied to biological function. Identity invariance, signal-based control, and the correction loop — expressed through cellular biology, hormonal allocation, and repair.',
    href: 'https://a.co/d/015jiwmw',
  },
  {
    index: 'V',
    tag: 'Completion · Practice · Repair',
    title: 'The Biological Sabbath of Being Healthier',
    subtitle: 'Entering the Completion State of the Human Body — Volume II',
    desc: 'The practice edition. Completion-governed. No wellness narrative. A control-system model in which total load, boundary integrity, and autophagic correction determine whether the system converges or remains incomplete.',
    href: 'https://a.co/d/027yPDUS',
  },
]

// ── Registers data ────────────────────────────────────────
const REGISTERS = [
  {
    name: 'Mathematical',
    slug: 'mathematical',
    expr: null,
    exprKatex: '\\Sigma \\downarrow \\Rightarrow \\Phi(x) \\rightarrow K_{\\text{auto}}',
    sub: 'Convergence to invariant',
  },
  {
    name: 'Biological',
    slug: 'biological',
    expr: 'Insulin ↓ · Autophagy ↑\nRepair active',
    sub: 'Homeostatic completion',
  },
  {
    name: 'Psychological',
    slug: 'psychological',
    expr: 'Conflict ↓\nPerception stabilizes',
    sub: 'Resolution',
  },
  {
    name: 'Philosophical',
    slug: 'philosophical',
    expr: 'Self-consistency.\nBeing remains itself.',
    sub: 'Coherence',
  },
  {
    name: 'Spiritual',
    slug: 'spiritual',
    expr: '"I am" — Stillness',
    sub: 'Absence of interference',
  },
]

// ── Main page ─────────────────────────────────────────────
export default function Home() {

  // scroll reveal
  const revealRef = undefined // unused — kept for future ref
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('vis')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.08 }
    )
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Standing State Press — Leon Powdar</title>
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="#system">System</a></li>
            <li><a href="#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/gates">Gates</a></li>
            <li><a href="#registers">Registers</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/sources">Sources</a></li><li><a href="#about">Author</a></li>
          <li><a href="/system/doctrine">Doctrine</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="top">
        <div className="heroAField" />
        <div className="wrap heroContent">
          <h1 className="h1">A Body<br />of <em>Work.</em></h1>
          <p className="heroSub">Not separate books — a unified framework expressed across multiple domains.</p>
          <p className="heroStatement">
            Identity is invariant.<br />
            Expression drifts under load.<br />
            <strong>The system returns when interference is removed.</strong>
          </p>
          <p className="heroDelta">Δ = ‖A − I‖</p>
          <div className="ctaRow">
            <a className="btnA" href="/standing-state">The System</a>
            <a className="btnB" href="#corpus">The Corpus</a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── SYSTEM CHAIN ── */}
      <section className="chainSec" id="system">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">The Governing Logic</span>
            <div className="secRule" />
          </div>
          <div className="chainGrid">
            {[
              {
                n: '01', t: 'Signal',
                b: 'The nervous system generates signal continuously. Signal determines allocation. Allocation determines whether the body builds, repairs, or remains in triage.',
                arr: true,
              },
              {
                n: '02', t: 'Completion',
                b: null,
                bNode: (
                  <>
                    Health is not the result of input accumulation. It is the result of cycles that complete.
                    When <KTex math="\\Sigma \\downarrow" /> and <KTex math="B(t)" /> holds,{' '}
                    <KTex math="\\Phi(x)" /> converges toward <KTex math="K_{\\text{auto}}" />.
                  </>
                ),
                arr: true,
              },
              {
                n: '03', t: 'Repair',
                b: null,
                bNode: (
                  <>
                    Repair is the natural outcome of resolved cycles. The body does not require instruction to return to{' '}
                    <KTex math="x^*" />. It requires conditions under which return becomes possible.
                  </>
                ),
                arr: false,
              },
            ].map((cell, i) => (
              <div className={`chainCell reveal d${i}`} key={cell.n}>
                <span className="chainN">{cell.n}</span>
                <div className="chainT">{cell.t}</div>
                <p className="chainB">{cell.b || cell.bNode}</p>
                {cell.arr && <div className="chainArr">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOVERNING CONDITION ── */}
      <section className="govCondSec">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">Governing Condition</span>
            <div className="secRule" />
          </div>
          <div className="eqFrame reveal">
            <div style={{ textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.3rem', color: '#dfc27a', lineHeight: '2', padding: '0.5rem 0' }}>
              Φ(x) → K<sub style={{ fontSize: '0.7em' }}>auto</sub>
              <br />
              <span style={{ fontSize: '0.85rem', letterSpacing: '0.08em', fontStyle: 'normal' }}>under</span>
              <br />
              Σ ↓
            </div>
            <p className="eqBridge">
              The system returns to baseline when total load decreases<br />
              and completion is allowed.
            </p>
            <div className="eqField">
              <div className="eqCausal">
                <div className="efRow">
                  <span className="efVar">Σ</span>
                  <span className="efArr">→</span>
                  <span className="efVar">Φ(x)</span>
                  <span className="efArr">→</span>
                  <span className="efVar">
                    K<sub style={{ fontSize: '0.75em' }}>auto</sub>
                  </span>
                </div>
                <div className="efStack">
                  <span className="efTick">↑</span>
                  <span className="efSideVar"><KTex math="B(t)" /></span>
                  <span className="efTick">↓</span>
                  <span className="efSideVar"><KTex math="x^*" /></span>
                </div>
              </div>
              <div className="eqDefs">
                {[
                  ['\\Sigma', 'Total integrated stress load'],
                  ['\\Phi(x)', 'Completion functional — deviation from coherence'],
                  ['K_{\\text{auto}}', 'Autophagic correction baseline'],
                  ['B(t)', 'Boundary integrity — amplifies or reduces load'],
                  ['x^*', 'Reference state — invariant'],
                ].map(([v, d]) => (
                  <div className="eqDefRow" key={v}>
                    <span className="ev"><KTex math={v} /></span>
                    <span className="ed">{d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="signalFoot">Signal → Completion → Repair</div>
            <a className="btnEnter" href="#registers">Enter the System →</a>
          </div>
        </div>
      </section>

      {/* ── SYSTEM LINKS ── */}
      <section className="systemLinksSection">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">System</span>
            <div className="secRule" />
          </div>
          <div className="systemLinksGrid reveal">
            <a href="/system/glossary" className="systemLinkCard">
              <span className="systemLinkLabel">Definition Layer</span>
              <span className="systemLinkTitle">Glossary →</span>
              <span className="systemLinkSub">Every governing variable defined once.</span>
            </a>
            <a href="/system/plates" className="systemLinkCard">
              <span className="systemLinkLabel">Visual Authority</span>
              <span className="systemLinkTitle">Plates →</span>
              <span className="systemLinkSub">Canonical structural artifacts and governing conditions.</span>
            </a>
            <a href="/system/gates" className="systemLinkCard">
              <span className="systemLinkLabel">Navigation Layer</span>
              <span className="systemLinkTitle">Gates →</span>
              <span className="systemLinkSub">Registered pathways into each part of the system.</span>
            </a>
            <a href="/essays" className="systemLinkCard">
              <span className="systemLinkLabel">Commentary Layer</span>
              <span className="systemLinkTitle">Essays →</span>
              <span className="systemLinkSub">Canonical essays and indexed interpretation archive.</span>
            </a>
            <a href="/sources" className="systemLinkCard">
              <span className="systemLinkLabel">Source Layer</span>
              <span className="systemLinkTitle">Sources →</span>
              <span className="systemLinkSub">Precursor and reference material absorbed into the system.</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CORPUS ── */}
      <section className="corpusSec" id="corpus">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">The Publication System</span>
            <div className="secRule" />
          </div>
          <div className="corpusFrame reveal">
            Not separate books —<br />
            a <em>unified framework</em> expressed across multiple domains.<br />
            Across all of them, one law remains.
          </div>
          <div className="corpusList">
            {CORPUS.map((book, i) => {
              const inprod = !book.href
              const Tag = inprod ? 'div' : 'a'
              const props = inprod
                ? {}
                : { href: book.href, target: '_blank', rel: 'noopener noreferrer' }
              return (
                <Tag
                  key={book.index}
                  className={`bookRow reveal d${i} ${inprod ? 'bookRowInprod' : ''}`}
                  {...props}
                >
                  <div className={`bookIndex ${inprod ? 'bookIndexDim' : ''}`}>{book.index}</div>
                  <div className="bookBody">
                    <span className={`bookTag ${inprod ? 'bookTagDim' : ''}`}>{book.tag}</span>
                    <div className={`bookTitle ${inprod ? 'bookTitleDim' : ''}`}>{book.title}</div>
                    <div className="bookSubtitle">{book.subtitle}</div>
                    <p className="bookDesc">{book.desc}</p>
                  </div>
                  <div className="bookAction">
                    {inprod
                      ? <span className="bookStatus">In Production</span>
                      : <span className="bookLink">On Amazon →</span>
                    }
                  </div>
                </Tag>
              )
            })}
          </div>
          <div className="corpusAxiom reveal d5">
            A becomes A, because A knows it is A.
          </div>
        </div>
      </section>

      {/* ── REGISTERS / GATES ── */}
      <section className="regSec" id="registers">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">The Standing State Across Registers</span>
            <div className="secRule" />
          </div>
          <p className="regIntro reveal">
            The same invariant appears across domains. Different language. Same function.
            The domains do not define identity — they reveal it.
          </p>
          <div className="regGrid reveal">
            {REGISTERS.map(r => (
              <a
                href={`/system/gates/${r.slug}`}
                className="regCell regCellLink"
                key={r.name}
              >
                <span className="regName">{r.name}</span>
                <div className="regExpr">
                  {r.exprKatex
                    ? <KTex math={r.exprKatex} />
                    : r.expr.split('\n').map((line, i) => (
                        <span key={i}>{line}{i < r.expr.split('\n').length - 1 && <br />}</span>
                      ))
                  }
                </div>
                <div className="regSub">{r.sub}</div>
                <div className="regCellCta">Enter →</div>
              </a>
            ))}
          </div>

          {/* Gate Grid — enter each register */}
          <div style={{ marginTop: '3rem' }} className="reveal">
            <div className="secHead" style={{ marginBottom: '1.5rem' }}>
              <span className="secLabel">Enter a Register</span>
              <div className="secRule" />
              <a href="/system/gates" className="gatesFootLink" style={{ whiteSpace: 'nowrap', marginLeft: '1rem' }}>All Gates →</a>
            </div>
            <GateGrid />
          </div>

          <div className="regAxiom reveal">
            The invariant was never divided. Only the lenses were.<br />
            When the lenses align, the system is seen as one.
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="aboutSec" id="about">
        <div className="wrap">
          <div className="aboutGrid reveal">
            <div className="aboutSticky">
              <div className="aboutName">Leon Powdar</div>
              <div className="aboutRole">Phase Reference</div>
              <div className="aboutSep" />
            </div>
            <div className="aboutBody">
              <p>Everything expressed in this work is not theoretical. It is lived — observed within my own body through direct application of the principles defined throughout this system.</p>
              <p>The Standing State is not a framework I constructed from the outside. It is a condition I learned to enter, sustain, and observe over time. The shift began with one principle: the body responds to conditions. Remove what prevents completion, and the system returns.</p>
              <p>I did not rebuild the system. I allowed the system to rebuild itself.</p>
              <p>Standing State Press publishes the formal architecture of this work across multiple domains: identity theory, scriptural architecture, developmental law, and biological coherence. These are not separate subjects. They are one invariant expressed through different substrates.</p>
              <div className="aboutAxiom">A becomes A, because A knows it is A.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap footerInner">
          <div className="fMark">Standing State Press</div>
          <div className="fCopy">© Leon Powdar · All rights reserved</div>
          <div className="fSig">Signal → Completion → Repair</div>
        </div>
      </footer>
    </>
  )
}
