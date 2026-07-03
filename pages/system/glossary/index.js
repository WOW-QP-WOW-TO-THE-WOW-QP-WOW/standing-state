/**
 * /system/glossary
 * THE INVARIANT DEFINITION LAYER
 * standingstate.com
 *
 * Definition precedes expression.
 * Every symbol on this page is the canonical definition for the entire site.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'
import { CORE_TERMS, VARIABLES, GOVERNING_EQUATION, AXIOM, EXTENDED_TERMS } from '../../../components/glossaryData'

export default function Glossary() {
  return (
    <>
      <Head>
        <title>Constitutional Language Registry — Standing State Press</title>
        <meta
          name="description"
          content="The constitutional language registry. Every term defined once, with register, jurisdiction, evidence status, and lineage. Definition precedes expression."
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
          <div className="glossEyebrow">The Constitutional Language Registry</div>
          <h1 className="glossH1">Glossary v3</h1>
          <p className="glossIntro">
            This glossary is not merely a dictionary. It is the constitutional registry of meaning for the entire corpus.
            Every term is defined with register, jurisdiction, evidence status, and lineage.
            The glossary answers not only what a term means, but where it applies, what kind of claim it makes,
            what reality contact supports it, and how it developed across the corpus.
          </p>
          <p className="glossIntro" style={{ fontSize: '0.9rem', color: 'var(--gray-lt)', marginTop: '0.75rem' }}>
            Evidence status is recorded honestly. A model construct is not inferior to an empirically supported claim —
            it is a different kind of claim requiring different evaluation.
            No term's epistemic status has been upgraded merely because the schema was upgraded.
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
                {GOVERNING_EQUATION.identityNote}
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── CORE TERMS — CONSTITUTIONAL METHODOLOGY ── */}
      {CORE_TERMS && CORE_TERMS.length > 0 && (
        <section style={{ paddingBottom: '2rem' }}>
          <div className="wrap">
            <div className="secHead reveal" style={{ marginTop: '3rem' }}>
              <span className="secLabel">Core Constitutional Terms</span>
              <div className="secRule" />
            </div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', color: 'var(--gray-lt)', fontStyle: 'italic', marginBottom: '2rem' }}>
              Methodological and architectural terms that govern the registry itself.
            </p>
            <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
              {CORE_TERMS.map(term => (
                <div key={term.id} style={{ background: 'var(--black)', padding: '1.75rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                        {term.symbol}
                      </span>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--white)' }}>
                        {term.name}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {term.register && (
                        <span style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.15rem 0.5rem' }}>
                          {term.register}
                        </span>
                      )}
                      {term.evidenceStatus && (
                        <span style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.15rem 0.5rem', background: 'rgba(201,168,76,0.06)' }}>
                          {term.evidenceStatus}
                        </span>
                      )}
                    </div>
                  </div>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--gray-lt)', lineHeight: 1.8, marginBottom: term.distinctions ? '0.75rem' : 0 }}>
                    {term.definition}
                  </p>
                  {term.distinctions && term.distinctions.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {term.distinctions.map((d, i) => (
                        <li key={i} style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', color: 'var(--gold-dim)', fontStyle: 'italic', marginTop: '0.35rem' }}>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <hr className="divider" />

      {/* ── VARIABLE DEFINITIONS ── */}
      <section className="glossVarSec">
        <div className="wrap">
          <div className="secHead reveal">
            <span className="secLabel">Governing Variables — Biological Register</span>
            <div className="secRule" />
          </div>

          <div className="glossVarList">
            {VARIABLES.map((v, i) => (
              <div
                key={v.id}
                id={v.anchor}
                className={`glossVarCard reveal d${i > 4 ? 4 : i}`}
              >
                {/* Symbol + Name + Schema Badges */}
                <div className="glossVarHeader">
                  <div className="glossVarSymbol">
                    <KTex math={v.symbol} />
                  </div>
                  <div className="glossVarMeta">
                    <div className="glossVarName">{v.name}</div>
                    <div className="glossVarRole">{v.role}</div>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
                      {v.register && (
                        <span style={{ fontFamily: 'var(--display)', fontSize: '7px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.1rem 0.4rem' }}>
                          {v.register}
                        </span>
                      )}
                      {v.evidenceStatus && (
                        <span style={{ fontFamily: 'var(--display)', fontSize: '7px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.1rem 0.4rem', background: 'rgba(201,168,76,0.06)' }}>
                          {v.evidenceStatus}
                        </span>
                      )}
                      {v.canonicalStatus && v.canonicalStatus !== 'Canonical' && (
                        <span style={{ fontFamily: 'var(--display)', fontSize: '7px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold-dim)', padding: '0.1rem 0.4rem' }}>
                          {v.canonicalStatus}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="glossVarAnchor">#{v.anchor}</div>
                </div>

                {/* Definition */}
                <div className="glossVarBody">
                  <div className="glossVarSection">
                    <span className="glossVarSectionLabel">Definition</span>
                    <p className="glossVarDef">{v.definition}</p>
                  </div>

                  {/* Reality Contact (v3 field) */}
                  {v.realityContact && (
                    <div className="glossVarSection">
                      <span className="glossVarSectionLabel">Reality Contact</span>
                      <p className="glossVarDef" style={{ fontStyle: 'italic', color: 'var(--gray-lt)' }}>{v.realityContact}</p>
                    </div>
                  )}

                  {/* System logic equation */}
                  {v.logic && (
                    <div className="glossVarSection">
                      <span className="glossVarSectionLabel">System Logic</span>
                      <div className="glossVarLogicWrap">
                        <div className="glossVarLogicEq">
                          <KTex math={v.logic} display />
                        </div>
                        {v.logicLabel && <div className="glossVarLogicNote">{v.logicLabel}</div>}
                      </div>
                    </div>
                  )}

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

                  {/* Distinctions (v3 field) */}
                  {v.distinctions && v.distinctions.length > 0 && (
                    <div className="glossVarSection">
                      <span className="glossVarSectionLabel">Distinctions</span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {v.distinctions.map((d, i) => (
                          <li key={i} style={{ fontFamily: 'var(--serif)', fontSize: '0.87rem', color: 'var(--gold-dim)', fontStyle: 'italic', marginTop: '0.35rem' }}>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Lineage (v3 field) */}
                  {v.lineage && v.lineage.note && (
                    <div className="glossVarSection" style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                      <span className="glossVarSectionLabel">Lineage</span>
                      <p className="glossVarDef" style={{ fontSize: '0.85rem', color: 'var(--gray-lt)', fontStyle: 'italic' }}>
                        First appearance: {v.lineage.firstAppearance}. {v.lineage.note}
                      </p>
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
              <span className="glossEyebrow">The Invariant Definition Layer</span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 400, color: 'var(--white)', marginTop: '0.5rem' }}>
                Corpus Glossary
              </h2>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--gray-lt)', fontStyle: 'italic', marginTop: '0.75rem' }}>
                Canonical definitions governing variables, structures, and terms across the Standing State corpus. Definition precedes traversal.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
              {EXTENDED_TERMS.map(term => (
                <div key={term.id} style={{ background: 'var(--black)', padding: '1.75rem 2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                        {term.symbol}
                      </span>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--white)' }}>
                        {term.name}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      {term.evidenceStatus && (
                        <span style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.15rem 0.5rem', background: 'rgba(201,168,76,0.06)' }}>
                          {term.evidenceStatus}
                        </span>
                      )}
                      {term.source && (
                        <span style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', border: '1px solid var(--border)', padding: '0.15rem 0.5rem' }}>
                          {term.source}
                        </span>
                      )}
                    </div>
                  </div>
                  {term.register && (
                    <div style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontFamily: 'var(--display)', fontSize: '7px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dim)', borderLeft: '2px solid var(--gold-dim)', paddingLeft: '0.5rem' }}>
                        Register: {term.register}
                      </span>
                    </div>
                  )}
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: 'var(--gray-lt)', lineHeight: 1.8, marginBottom: term.distinctions ? '0.75rem' : 0 }}>
                    {term.definition}
                  </p>
                  {term.distinctions && term.distinctions.length > 0 && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {term.distinctions.map((d, i) => (
                        <li key={i} style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', color: 'var(--gold-dim)', fontStyle: 'italic', marginTop: '0.35rem' }}>
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                  {term.lineage && term.lineage.note && (
                    <p style={{ fontFamily: 'var(--serif)', fontSize: '0.82rem', color: 'var(--gray-lt)', fontStyle: 'italic', marginTop: '0.75rem', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                      Lineage: {term.lineage.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


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
