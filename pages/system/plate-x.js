import Head from 'next/head'

export default function PlateX() {
  return (
    <>
      <Head>
        <title>Plate X — Admissibility & Execution — Standing State Press</title>
        <meta
          name="description"
          content="Plate X — the governing law of the execution layer: identity defines admissible space, the boundary evaluates membership before execution, and inadmissible trajectories halt."
        />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/plates">Plates</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Plate X</span>
          </div>

          <div className="glossEyebrow">Cross-Volume · Canonical Plate</div>
          <h1 className="glossH1">Plate X — Admissibility &amp; Execution</h1>
          <p className="glossIntro">
            The governing law of the execution layer. Identity defines admissible space.
            The boundary evaluates membership before movement. Execution follows the verdict.
          </p>

          <div className="platesMetaRow">
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Plate</span>
              <span className="platesMetaVal">X</span>
            </div>
            <div className="platesMetaDivider" />
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Layer</span>
              <span className="platesMetaVal">Execution Boundary</span>
            </div>
            <div className="platesMetaDivider" />
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Governing Condition</span>
              <span className="platesMetaVal" style={{ fontStyle: 'italic' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
                  x ∈ S(I*) ⇒ execute &nbsp;·&nbsp; x ∉ S(I*) ⇒ halt
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <section className="platesSec">
        <div className="wrap">
          <div
            className="reveal"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--panel)',
              padding: '1.1rem',
            }}
          >
            <img
              src="/plates/plate-x.svg"
              alt="Plate X — Admissibility and Execution"
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

      <hr className="divider" />

      <section className="platesSec">
        <div className="wrap">
          <div className="platesSystemNavInner reveal" style={{ display: 'grid', gap: '1.25rem' }}>

            <div className="platesSystemLink" style={{ cursor: 'default' }}>
              <span className="platesSystemLinkLabel">System Description</span>
              <span className="platesSystemLinkTitle">Identity defines. Boundary evaluates.</span>
              <span className="platesSystemLinkSub">
                The admissible manifold S(I*) is defined from the invariant reference, not from mood,
                pressure, or outcome. A proposed trajectory is evaluated against that manifold before
                authorization. If the path is admissible, execution proceeds. If not, execution halts.
                This is the decisive difference between design and enforcement.
              </span>
            </div>

            <div className="platesSystemDivider" />

            <div className="platesSystemLink" style={{ cursor: 'default' }}>
              <span className="platesSystemLinkLabel">Failure Mode</span>
              <span className="platesSystemLinkTitle">Defined without evaluated</span>
              <span className="platesSystemLinkSub">
                A boundary not checked does not exist operationally. Constraint may be named,
                documented, or admired, yet if membership is not evaluated at the point of action,
                the system moves first and explains later. This is policy theatre: symbolic law
                without governing force.
              </span>
            </div>

            <div className="platesSystemDivider" />

            <div className="platesSystemLink" style={{ cursor: 'default' }}>
              <span className="platesSystemLinkLabel">Jurisdiction</span>
              <span className="platesSystemLinkTitle">x ⇏ I*</span>
              <span className="platesSystemLinkSub">
                Outcomes produce signal, not identity. Signal may inform interpretation, yet it may
                not ascend and rewrite the coordinate. Execution belongs to structure. Identity remains
                fixed. Restoration remains non-forced: Σ ↓ and B(t) ↑ release K_auto by removing
                interference rather than initiating repair through effort.
              </span>
            </div>

          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="platesSystemNav">
        <div className="wrap">
          <div className="platesSystemNavInner reveal">
            <a href="/system/plates" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Previous Layer</span>
              <span className="platesSystemLinkTitle">System Plates →</span>
              <span className="platesSystemLinkSub">Canonical structural artifacts. Visual authority layer.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/essays/canonical/the-admissibility-gate" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Canonical Link</span>
              <span className="platesSystemLinkTitle">The Admissibility Gate →</span>
              <span className="platesSystemLinkSub">A boundary not checked does not exist operationally.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/system/rank-0-architecture" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Next Layer</span>
              <span className="platesSystemLinkTitle">Plate XI — Rank-0 Architecture →</span>
              <span className="platesSystemLinkSub">Execution law integrated into the full invariant system.</span>
            </a>
          </div>
        </div>
      </section>


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
