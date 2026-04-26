/**
 * /system/glossary
 * THE INVARIANT DEFINITION LAYER
 * standingstate.com
 *
 * Definition precedes expression.
 * Every symbol on this page is the canonical definition for the entire site.
 */

import Head from 'next/head'
import KTex from '../../components/KTex'
import { VARIABLES, GOVERNING_EQUATION, AXIOM, EXTENDED_TERMS } from '../../components/glossaryData'

export default function Glossary() {
  return (
    <>
      <Head>
        <title>Variable Glossary — Standing State Press</title>
        <meta
          name="description"
          content="The invariant definition layer. Every governing variable defined once. Definition precedes expression."
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary" style={{ color: 'var(--gold)' }}>Glossary</a></li>
            <li><a href="/essays">Essays</a></li><li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      {/* ── PAGE HEADER ── */}
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/#system">System</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Glossary</span>
          </div>
          <div className="glossEyebrow">The Invariant Definition Layer</div>
          <h1 className="glossH1">Variable Glossary</h1>
          <p className="glossIntro">
            Definition precedes expression. Every governing variable is defined once on this page.
            No symbol drifts. No term is left open to reinterpretation.
            This is the semantic foundation of the Standing State system.
          </p>
          <div className="glossMandate">
            The variable never governed. The sequence did.
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── GOVERNING EQUATIONS ── */}
      <section className="glossEqSec">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">Governing Equations</span>
            <div className="secRule" />
          </div>
          <div className="glossEqGrid reveal">

            <div className="glossEqCard">
              <div className="glossEqLabel">Full Equation</div>
              <div className="glossEqDisplay">
                <KTex math={GOVERNING_EQUATION.full} display />
              </div>
              <div className="glossEqNote">
                The complete governing equation. Load amplified by boundary failure, normalized by cellular voltage, reduced by autophagic correction.
              </div>
            </div>

            <div className="glossEqCard">
              <div className="glossEqLabel">Convergence Condition</div>
              <div className="glossEqDisplay">
                <KTex math={GOVERNING_EQUATION.convergence} display />
              </div>
              <div className="glossEqNote">
                The operational condition for Volume II. When total load decreases and completion is allowed, the system converges.
              </div>
            </div>

            <div className="glossEqCard">
              <div className="glossEqLabel">Coherence Condition</div>
              <div className="glossEqDisplay">
                <KTex math={GOVERNING_EQUATION.coherence} display />
              </div>
              <div className="glossEqNote">
                When the completion functional reaches zero or below, the manifested state converges toward the reference state.
              </div>
            </div>

            <div className="glossEqCard">
              <div className="glossEqLabel">Identity Invariance</div>
              <div className="glossEqDisplay">
                <KTex math={GOVERNING_EQUATION.identity} display />
              </div>
              <div className="glossEqNote">
                The reference state is constant for all time. NSRL-11. Pathology does not corrupt identity — it degrades expression capacity.
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── VARIABLE DEFINITIONS ── */}
      <section className="glossVarSec">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">Governing Variables</span>
            <div className="secRule" />
          </div>

          <div className="glossVarList">
            {VARIABLES.map((v, i) => (
              <div
                key={v.id}
                id={v.anchor}
                className={`glossVarCard reveal d${i > 4 ? 4 : i}`}
              >
                {/* Symbol + Name */}
                <div className="glossVarHeader">
                  <div className="glossVarSymbol">
                    <KTex math={v.symbol} />
                  </div>
                  <div className="glossVarMeta">
                    <div className="glossVarName">{v.name}</div>
                    <div className="glossVarRole">{v.role}</div>
                  </div>
                  <div className="glossVarAnchor">#{v.anchor}</div>
                </div>

                {/* Definition */}
                <div className="glossVarBody">
                  <div className="glossVarSection">
                    <span className="glossVarSectionLabel">Definition</span>
                    <p className="glossVarDef">{v.definition}</p>
                  </div>

                  {/* System logic equation */}
                  <div className="glossVarSection">
                    <span className="glossVarSectionLabel">System Logic</span>
                    <div className="glossVarLogicWrap">
                      <div className="glossVarLogicEq">
                        <KTex math={v.logic} display />
                      </div>
                      <div className="glossVarLogicNote">{v.logicLabel}</div>
                    </div>
                  </div>

                  {/* Activation / Suppression */}
                  {(v.activation || v.suppression) && (
                    <div className="glossVarConditions">
                      {v.activation && (
                        <div className="glossVarCond glossVarCondOn">
                          <span className="glossVarCondLabel">Activated by</span>
                          <p className="glossVarCondText">{v.activation}</p>
                        </div>
                      )}
                      {v.suppression && (
                        <div className="glossVarCond glossVarCondOff">
                          <span className="glossVarCondLabel">Suppressed by</span>
                          <p className="glossVarCondText">{v.suppression}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── TERMINAL ── */}
      <section className="glossTerminal">
        <div className="wrap">
          <div className="glossTerminalInner reveal">
            <div className="glossTerminalEq">
              <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--gold)' }}>
                Φ(x) → K<sub style={{ fontSize: '0.75em' }}>auto</sub> &nbsp;·&nbsp; under &nbsp;·&nbsp; Σ ↓
              </span>
            </div>
            <div className="glossTerminalChain">
              Signal → Completion → Repair
            </div>
            <div className="glossTerminalAxiom">{AXIOM}</div>
            <a className="btnB" href="/" style={{ display: 'inline-block', marginTop: '2rem' }}>
              ← Return to Standing State Press
            </a>
          </div>
        </div>
      </section>

      {/* ── EXTENDED GLOSSARY ── */}
      {EXTENDED_TERMS && EXTENDED_TERMS.length > 0 && (
        <section style={{ paddingBottom: '6rem' }}>
          <div className="wrap">
            <div className="glossSectionHead" style={{ marginTop: '4rem', marginBottom: '2.5rem' }}>
              <span className="glossEyebrow">Extended Definitions — M019 through M044 · C012</span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 400, color: 'var(--white)', marginTop: '0.5rem' }}>
                Corpus Glossary
              </h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--gray-lt)', fontStyle: 'italic', marginTop: '0.75rem' }}>
                Formal terms introduced across the essay corpus. Each entry is keyed to its source essay.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
              {EXTENDED_TERMS.map(term => (
                <div key={term.id} style={{ background: 'var(--black)', padding: '1.75rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                      <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                        {term.symbol}
                      </span>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--white)' }}>
                        {term.name}
                      </span>
                    </div>
                    <span style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.15rem 0.5rem' }}>
                      {term.source}
                    </span>
                  </div>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--gray-lt)', lineHeight: 1.8 }}>
                    {term.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap footerInner">
          <div className="fMark">Standing State Press</div>
          <div className="fCopy">© Leon Powdar · All rights reserved</div>
          <div className="fSig">Signal → Completion → Repair</div>
        </div>
      </footer>

      {/* scroll reveal */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const obs = new IntersectionObserver(
              entries => entries.forEach(e => {
                if (e.isIntersecting) { e.target.classList.add('vis'); obs.unobserve(e.target); }
              }),
              { threshold: 0.06 }
            );
            document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
          `,
        }}
      />
    </>
  )
}
