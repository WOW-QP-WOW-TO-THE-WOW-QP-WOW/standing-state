import Head from 'next/head'

export default function Rank0ArchitecturePage() {
  return (
    <>
      <Head>
        <title>Rank-0 Architecture — Standing State Press</title>
        <meta
          name="description"
          content="The master architecture of the Standing State: identity invariance, gain collapse, admissibility, jurisdictional separation, autonomous restoration, and multi-domain projection."
        />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/gates">Gates</a></li>
            <li><a href="/system/rank-0-architecture" style={{ color: 'var(--gold)' }}>Rank-0</a></li>
            <li><a href="/essays">Essays</a></li>
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
            <span style={{ color: 'var(--gold-dim)' }}>Rank-0 Architecture</span>
          </div>

          <div className="glossEyebrow">Master Architecture</div>
          <h1 className="glossH1">Rank-0 Architecture</h1>
          <p className="glossIntro">
            The Standing State rendered as one master diagram: identity invariance,
            gain collapse, admissibility before execution, jurisdictional separation,
            autonomous restoration, and multi-domain projection under one fixed
            reference.
          </p>
        </div>
      </header>

      <hr className="divider" />

      <section style={{ padding: '3rem 0 2rem' }}>
        <div className="wrap">
          <div
            style={{
              border: '1px solid var(--border)',
              background: 'var(--panel)',
              padding: '1.25rem',
            }}
          >
            <img
              src="/plates/rank-0-architecture.jpg"
              alt="The Standing State Rank-0 Architecture"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                border: '1px solid rgba(196,164,74,0.18)',
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: '1rem 0 3rem' }}>
        <div className="wrap" style={{ display: 'grid', gap: '1.5rem' }}>

          <div style={{
            border: '1px solid var(--border)',
            background: 'var(--panel)',
            padding: '1.5rem'
          }}>
            <div style={{
              fontFamily: 'var(--display)',
              fontSize: '9px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.8rem'
            }}>
              What this shows
            </div>
            <p style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', lineHeight: 1.8, margin: 0 }}>
              The image compresses the full Standing State into one view. Identity is
              fixed as invariant reference. State loses write-access to identity.
              Proposed trajectories are evaluated before execution. Output is prevented
              from ascending into the identity layer. Restoration is not forced; it is
              released when load falls and boundary holds.
            </p>
          </div>

          <div style={{
            border: '1px solid var(--border)',
            background: 'var(--panel)',
            padding: '1.5rem'
          }}>
            <div style={{
              fontFamily: 'var(--display)',
              fontSize: '9px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.8rem'
            }}>
              Canonical lines
            </div>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              <p style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: 'var(--gold-dim)' }}>Identity invariant:</strong>{' '}
                I* = constant
              </p>
              <p style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: 'var(--gold-dim)' }}>Gain collapse:</strong>{' '}
                ∂I / ∂S = 0
              </p>
              <p style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: 'var(--gold-dim)' }}>Admissibility gate:</strong>{' '}
                x ∈ S(I*) ⇒ execute · x ∉ S(I*) ⇒ halt
              </p>
              <p style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: 'var(--gold-dim)' }}>Jurisdiction:</strong>{' '}
                x ⇏ I*
              </p>
              <p style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: 'var(--gold-dim)' }}>Autonomous restoration:</strong>{' '}
                Σ ↓ ∧ B(t) ↑ ⇒ K_auto ↑
              </p>
            </div>
          </div>

          <div style={{
            border: '1px solid var(--border)',
            background: 'var(--panel)',
            padding: '1.5rem'
          }}>
            <div style={{
              fontFamily: 'var(--display)',
              fontSize: '9px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.8rem'
            }}>
              Why it matters
            </div>
            <p style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', lineHeight: 1.8, margin: 0 }}>
              Biology, finance, cognition, and relation are not new coordinates. They
              are projections under the same invariant. The architecture separates
              reference from expression, integrity from execution, and signal from
              authority. It is not a mood map. It is a boundary law of coherent
              existence.
            </p>
          </div>

          <div style={{
            border: '1px solid var(--border)',
            background: 'var(--panel)',
            padding: '1.5rem'
          }}>
            <div style={{
              fontFamily: 'var(--display)',
              fontSize: '9px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '0.8rem'
            }}>
              System links
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a className="gateBtn" href="/essays/canonical/the-standing-state">The Standing State</a>
              <a className="gateBtn" href="/essays/canonical/the-admissibility-gate">The Admissibility Gate</a>
              <a className="gateBtn" href="/system/plates">Plates</a>
              <a className="gateBtn" href="/system/glossary">Glossary</a>
              <a className="gateBtn" href="/essays/medium/the-bull-was-never-the-animal">M035</a>
              <a className="gateBtn" href="/essays/medium/lens-of-contradiction">M037</a>
              <a className="gateBtn" href="/essays/medium/thesis-the-mechanical-priority-of-being">M039</a>
            </div>
          </div>

          <div style={{
            marginTop: '0.5rem',
            padding: '1.75rem 2rem',
            border: '2px solid var(--gold)',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: 'var(--serif)',
              fontStyle: 'italic',
              fontSize: '1rem',
              color: 'var(--gold)',
              margin: '0 0 0.8rem'
            }}>
              Identity is not stabilized. Identity makes instability non-authoritative.
            </p>
            <p style={{
              fontFamily: 'var(--display)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--gold-dim)',
              margin: 0
            }}>
              A becomes A, because A knows it is A.
            </p>
          </div>

        </div>
      </section>

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
