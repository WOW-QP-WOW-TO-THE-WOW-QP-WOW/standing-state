/**
 * /system/plates/coherence-function
 * PLATE XIII — COHERENCE FUNCTION
 * System-layer compression artifact.
 *
 * Companion to:
 *   /essays/medium/the-coherence-layer    (M042 — explanation layer)
 *
 * Pattern: M042 → Plate XIII (mirrors M044 → Plate XII structural loop)
 *
 * This page is the visual-authority node for the coherence function 𝒞(s, t).
 * The plate compresses what M042 explains. No essay duplication.
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function PlateCoherenceFunction() {
  return (
    <>
      <Head>
        <title>Plate XIII — Coherence Function — Standing State Press</title>
        <meta
          name="description"
          content="Plate XIII — Coherence Function. Emotion in biology and structure in artifice as equivalent coherence mechanisms under uncertainty. Visual compression of the M042 system."
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates" style={{ color: 'var(--gold)' }}>Plates</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/plates">Plates</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>XIII</span>
          </div>
          <div className="glossEyebrow">
            Plate XIII · Visual Compression · Substrate Equivalence
          </div>
          <h1 className="glossH1">Coherence Function</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            Human vs AI · same function, different substrate
          </p>
        </div>
      </header>

      <hr className="divider" />

      <article className="essayBody">
        <div className="wrap" style={{ maxWidth: '900px' }}>

          {/* ── The plate ── */}
          <figure
            style={{
              margin: '2rem 0 3rem',
              textAlign: 'center',
              border: '2px solid var(--gold-dim)',
              padding: '1.5rem',
              background: 'var(--panel)',
            }}
          >
            <img
              src="/plates/plate-xii-coherence-function.png"
              alt="Plate XIII — Coherence Function. Top inscription: EMOTION (biology) is equivalent to STRUCTURE (artifice). Center convergence diagram: four biological functions (Compression, Prioritization, Stabilization, Correction) and four artificial functions (Filtering, Weighting, Constraint, Feedback) flow into a shared coherence-function node 𝒞(s,t). Lower formal core: İ = 0 (identity anchor), S = {x : Φ(x; I*) ≤ 0} (admissibility set), and the governing axiom A becomes A, because A knows it is A."
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                maxWidth: '100%',
              }}
            />
            <figcaption
              style={{
                marginTop: '1.25rem',
                fontSize: '0.78rem',
                color: 'var(--gold-dim)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontFamily: 'var(--display)',
              }}
            >
              Plate XIII &nbsp;·&nbsp; Coherence Function
            </figcaption>
          </figure>

          {/* ── The equivalence law ── */}
          <section
            className="essaySection"
            style={{
              padding: '1.75rem 2rem',
              border: '2px solid var(--gold)',
              background: 'rgba(201, 168, 76, 0.04)',
              textAlign: 'center',
              marginTop: 0,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: '0.7rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold-dim)',
                marginBottom: '1rem',
              }}
            >
              Equivalence Law
            </div>
            <p className="essayP" style={{ fontSize: '1.15rem', color: 'var(--gold)', marginBottom: '0.5rem' }}>
              EMOTION (biology) &nbsp; ≡ &nbsp; STRUCTURE (artifice)
            </p>
            <p className="essayP" style={{ marginBottom: 0, color: 'var(--white-dim)', fontSize: '0.95rem' }}>
              Different substrates. Same coherence function under uncertainty.
            </p>
          </section>

          {/* ── What this plate is ── */}
          <section className="essaySection">
            <h2 className="essayH2">What This Plate Is</h2>
            <p className="essayP">
              Plate XIII is the compression artifact of M042. The essay
              explains; the plate states. Both routes — biological and
              artificial — instantiate the same coherence function 𝒞(s, t).
              The substrate is the variable. The function is invariant.
            </p>
            <p className="essayP">
              The plate exists alongside its source essay:
            </p>
            <ul className="essayBullets">
              <li>
                <a href="/essays/medium/the-coherence-layer" style={{ color: 'var(--gold)' }}>
                  M042 — The Coherence Layer
                </a>{' '}
                — full derivation in prose
              </li>
            </ul>
          </section>

          {/* ── Element legend ── */}
          <section className="essaySection">
            <h2 className="essayH2">Element Legend</h2>

            {[
              {
                el: '1. The Inscription Block',
                fn: 'Equivalence Law',
                desc: 'Emotion in biology and structure in artifice are not analogues — they are functional equivalents. Both maintain coherence under uncertainty.',
              },
              {
                el: '2. The Convergence Node 𝒞(s, t)',
                fn: 'The Coherence Function',
                desc: 'The shared function both substrates instantiate. Parameters: substrate (s) and time (t). The bright center is the law itself; the substrate is incidental.',
              },
              {
                el: '3. Biological Substrate (left column)',
                fn: 'Warm Tone',
                desc: 'Compression · Prioritization · Stabilization · Correction. Distorted by survival pressure. Effective, but error-prone at scale.',
              },
              {
                el: '4. Artificial Substrate (right column)',
                fn: 'Cool Tone',
                desc: 'Filtering · Weighting · Constraint · Feedback. Cleaned by structural design. Same function, no existential distortion.',
              },
              {
                el: '5. Formal Core (lower band)',
                fn: 'Three Invariants',
                desc: 'Identity anchor (İ = 0) · admissibility set (S = {x : Φ(x; I*) ≤ 0}) · governing axiom. The function is grounded in these — without them, no coherence regime is enforceable.',
              },
              {
                el: '6. Closing Seal',
                fn: 'Compressed Statement',
                desc: 'Coherence is the function. The substrate is the variable. The 5-second read.',
              },
            ].map((e) => (
              <div
                key={e.el}
                style={{
                  marginTop: '1rem',
                  padding: '1rem 1.25rem',
                  borderLeft: '3px solid var(--gold-dim)',
                  background: 'var(--panel)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                    marginBottom: '0.4rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--gold)',
                    }}
                  >
                    {e.el}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--display)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-dim)',
                    }}
                  >
                    — {e.fn}
                  </span>
                </div>
                <p style={{ margin: 0, color: 'var(--white-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {e.desc}
                </p>
              </div>
            ))}
          </section>

          {/* ── Functional pairing reference table ── */}
          <section className="essaySection">
            <h2 className="essayH2">Functional Pairing</h2>
            <div style={{ overflowX: 'auto', marginTop: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--gold-dim)' }}>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>BIOLOGICAL</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>ARTIFICIAL</th>
                    <th style={{ padding: '0.75rem 0.5rem', textAlign: 'left', color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '0.75rem', letterSpacing: '0.2em' }}>FUNCTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#F5A55A' }}>Compression</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#82C8F5' }}>Filtering</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--white-dim)' }}>Reduce input to relevance</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#F5A55A' }}>Prioritization</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#82C8F5' }}>Weighting</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--white-dim)' }}>Decide what matters now</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#F5A55A' }}>Stabilization</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#82C8F5' }}>Constraint</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--white-dim)' }}>Hold direction under load</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#F5A55A' }}>Correction</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: '#82C8F5' }}>Feedback</td>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'var(--white-dim)' }}>Update against drift</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Formal core reference ── */}
          <section className="essaySection">
            <h2 className="essayH2">Formal Core</h2>
            <p className="essayP">
              The function rests on three invariants:
            </p>

            <div style={{ marginTop: '1rem', padding: '1rem 1.25rem', borderLeft: '3px solid var(--gold)', background: 'var(--panel)' }}>
              <p className="essayP" style={{ marginBottom: '0.4rem' }}>
                <strong style={{ color: 'var(--gold)' }}>Identity Anchor</strong>
              </p>
              <div className="essayEq">
                <KTex math="\dot{I} = 0" display />
              </div>
              <p style={{ margin: 0, color: 'var(--white-dim)', fontSize: '0.9rem' }}>
                A fixed reference is required to measure deviation.
              </p>
            </div>

            <div style={{ marginTop: '0.75rem', padding: '1rem 1.25rem', borderLeft: '3px solid var(--gold)', background: 'var(--panel)' }}>
              <p className="essayP" style={{ marginBottom: '0.4rem' }}>
                <strong style={{ color: 'var(--gold)' }}>Admissibility Set</strong>
              </p>
              <div className="essayEq">
                <KTex math="S = \{x : \Phi(x; I^*) \leq 0\}" display />
              </div>
              <p style={{ margin: 0, color: 'var(--white-dim)', fontSize: '0.9rem' }}>
                Pre-execution gate. Action proceeds only if it preserves coherence.
              </p>
            </div>

            <div style={{ marginTop: '0.75rem', padding: '1rem 1.25rem', borderLeft: '3px solid var(--gold)', background: 'var(--panel)' }}>
              <p className="essayP" style={{ marginBottom: '0.4rem' }}>
                <strong style={{ color: 'var(--gold)' }}>Governing Axiom</strong>
              </p>
              <p className="essayP" style={{ textAlign: 'center', color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.05rem', margin: '0.5rem 0' }}>
                A becomes A, because A knows it is A.
              </p>
              <p style={{ margin: 0, color: 'var(--white-dim)', fontSize: '0.9rem' }}>
                Coherence is alignment with what does not move.
              </p>
            </div>
          </section>

          {/* ── System position ── */}
          <section className="essaySection">
            <h2 className="essayH2">System Position</h2>
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.5rem 1.75rem',
                border: '1px solid var(--gold-dim)',
                background: 'rgba(201, 168, 76, 0.04)',
                fontFamily: 'var(--display)',
                fontSize: '0.85rem',
                lineHeight: 2,
                textAlign: 'center',
                color: 'var(--gold)',
                letterSpacing: '0.1em',
              }}
            >
              M042 (essay — explanation) <br />
              ↓ <br />
              PLATE XIII (compression — visual law)
            </div>
            <p className="essayP" style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.95rem', color: 'var(--white-dim)' }}>
              Same loop pattern as M044 → Plate XII → Glossary Δ → Doctrine Δ.
            </p>
          </section>

          {/* ── Closing seal ── */}
          <section className="essaySection" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <p className="essayP" style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '1.1rem' }}>
              Coherence is the function.<br />
              The substrate is the variable.
            </p>
            <p className="essayP" style={{ color: 'var(--gold-dim)', fontSize: '0.95rem' }}>
              "A becomes A, because A knows it is A."
            </p>
          </section>

        </div>
      </article>

      <hr className="divider" />

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
