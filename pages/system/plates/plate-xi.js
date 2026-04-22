import Head from 'next/head'

export default function PlateXI() {
  return (
    <>
      <Head>
        <title>Plate XI — Rank-0 Architecture — Standing State Press</title>
        <meta
          name="description"
          content="Plate XI — the master architecture of the Standing State: identity invariance, gain collapse, admissibility before execution, jurisdictional separation, autonomous restoration, and multi-domain projection."
        />
      </Head>

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

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/system/plates">Plates</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Plate XI</span>
          </div>
          <div className="glossEyebrow">Cross-Volume · Canonical Plate</div>
          <h1 className="glossH1">Plate XI — Rank-0 Architecture</h1>
          <p className="glossIntro">
            The Standing State rendered as one master diagram: identity invariance,
            gain collapse, admissibility before execution, jurisdictional separation,
            autonomous restoration, and multi-domain projection under one fixed reference.
          </p>

          <div className="platesMetaRow">
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Plate</span>
              <span className="platesMetaVal">XI</span>
            </div>
            <div className="platesMetaDivider" />
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Layer</span>
              <span className="platesMetaVal">Master Architecture</span>
            </div>
            <div className="platesMetaDivider" />
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Governing Condition</span>
              <span className="platesMetaVal" style={{ fontStyle: 'italic' }}>
                <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: 'var(--gold)' }}>
                  Φ(x) → K<sub style={{ fontSize: '0.75em' }}>auto</sub> &nbsp;·&nbsp; under &nbsp;·&nbsp; Σ ↓
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <section className="platesSec">
        <div className="wrap">
          <div className="reveal" style={{ border: '1px solid var(--border)', background: 'var(--panel)', padding: '1.1rem' }}>
            <img
              src="/plates/rank-0-architecture.jpg"
              alt="Plate XI — Rank-0 Architecture"
              style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid rgba(196,164,74,0.18)' }}
            />
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="platesSec">
        <div className="wrap">
          <div className="platesSystemNavInner reveal" style={{ display: 'grid', gap: '1.25rem' }}>

            <div className="platesSystemLink" style={{ cursor: 'default' }}>
              <span className="platesSystemLinkLabel">What this shows</span>
              <span className="platesSystemLinkTitle">Identity, jurisdiction, restoration</span>
              <span className="platesSystemLinkSub">
                The diagram compresses the full Standing State into one view. Identity is fixed as invariant reference.
                State loses write-access to identity. Proposed trajectories are evaluated before execution. Output is
                prevented from ascending into the identity layer. Restoration is not forced; it is released when load
                falls and boundary holds.
              </span>
            </div>

            <div className="platesSystemDivider" />

            <div className="platesSystemLink" style={{ cursor: 'default' }}>
              <span className="platesSystemLinkLabel">Canonical lines</span>
              <span className="platesSystemLinkTitle">Five non-negotiable conditions</span>
              <span className="platesSystemLinkSub">
                I* = constant<br />
                ∂I / ∂S = 0<br />
                x ∈ S(I*) ⇒ execute · x ∉ S(I*) ⇒ halt<br />
                x ⇏ I*<br />
                Σ ↓ ∧ B(t) ↑ ⇒ K_auto ↑
              </span>
            </div>

            <div className="platesSystemDivider" />

            <div className="platesSystemLink" style={{ cursor: 'default' }}>
              <span className="platesSystemLinkLabel">Why it matters</span>
              <span className="platesSystemLinkTitle">One invariant, many projections</span>
              <span className="platesSystemLinkSub">
                Biology, finance, cognition, and relation are not new coordinates. They are expressions under the same
                invariant reference. The architecture separates reference from expression, integrity from execution, and
                signal from authority.
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="platesSystemNav">
        <div className="wrap">
          <div className="platesSystemNavInner reveal">
            <a href="/system/plates/plate-x" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Previous Layer</span>
              <span className="platesSystemLinkTitle">Plate X — Admissibility & Execution →</span>
              <span className="platesSystemLinkSub">The governing law of the execution layer.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/essays/canonical/the-standing-state" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Canonical Link</span>
              <span className="platesSystemLinkTitle">The Standing State →</span>
              <span className="platesSystemLinkSub">Identity invariant. Return uncovered, not constructed.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/essays/medium/standing-state-identity-does-not-move" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Linguistic Expansion</span>
              <span className="platesSystemLinkTitle">M040 — The Standing State →</span>
              <span className="platesSystemLinkSub">Readable synthesis of the full Rank-0 architecture.</span>
            </a>
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
