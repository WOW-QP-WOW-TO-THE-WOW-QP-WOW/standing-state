/**
 * /system/plates
 * CANONICAL STRUCTURAL ARTIFACTS
 * standingstate.com
 *
 * Plates fix form. Glossary fixes meaning.
 * This is a technical archive, not a design portfolio.
 *
 * P025 ↔ P026 RELATION LAYER
 * The connective inscription renders between P025 and P026
 * only when both plates exist in PLATES data. Otherwise the
 * grid renders exactly as before. No new route. No orphan markup.
 */

import Head from 'next/head'
import KTex from '../../components/KTex'
import PlateCard from '../../components/PlateCard'
import { PLATES, PLATES_META } from '../../components/platesData'

export default function PlatesGallery() {
  // Resolve the paired indices once. If either plate is absent,
  // pairIndex stays null and the inscription does not render.
  const p025Index = PLATES.findIndex(p => p.id === 'P025')
  const p026Index = PLATES.findIndex(p => p.id === 'P026')
  const pairIndex =
    p025Index !== -1 && p026Index === p025Index + 1 ? p025Index : null

  return (
    <>
      <Head>
        <title>System Plates — Standing State Press</title>
        <meta
          name="description"
          content="Eight canonical structural artifacts. Each plate encodes a governing condition of the Standing State system."
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
            <span style={{ color: 'var(--gold-dim)' }}>Plates</span>
          </div>
          <div className="glossEyebrow">Visual Authority Layer</div>
          <h1 className="glossH1">System Plates</h1>
          <p className="glossIntro">
            {PLATES_META.description}
          </p>
          <div className="platesMetaRow">
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Count</span>
              <span className="platesMetaVal">{PLATES_META.count} Plates</span>
            </div>
            <div className="platesMetaDivider" />
            <div className="platesMetaItem">
              <span className="platesMetaLabel">Source</span>
              <span className="platesMetaVal">{PLATES_META.volume}</span>
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

      {/* ── PLATES GRID ── */}
      <section className="platesSec">
        <div className="wrap">
          <div className="platesGrid">
            {PLATES.map((plate, i) => [
              <PlateCard key={plate.id} plate={plate} index={i} />,
              /*
                Connective inscription — renders only after the P025 card,
                immediately before P026. The pairing reads in DOM order
                P025 → inscription → P026 within the vertical plates stack.
              */
              pairIndex !== null && i === pairIndex
                ? <PairedInscription key="pair-p025-p026" />
                : null,
            ])}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── SYSTEM NAV ── */}
      <section className="platesSystemNav">
        <div className="wrap">
          <div className="platesSystemNavInner reveal">
            <a href="/system/glossary" className="platesSystemLink">
              <span className="platesSystemLinkLabel">Previous Layer</span>
              <span className="platesSystemLinkTitle">Variable Glossary →</span>
              <span className="platesSystemLinkSub">Semantic authority. Every symbol defined.</span>
            </a>
            <div className="platesSystemDivider" />
            <a href="/#corpus" className="platesSystemLink">
              <span className="platesSystemLinkLabel">The Corpus</span>
              <span className="platesSystemLinkTitle">Standing State Press →</span>
              <span className="platesSystemLinkSub">All published titles. One unified framework.</span>
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

/**
 * PairedInscription
 *
 * The connective inscription that sits between the P025 and P026 cards.
 * Spatial phase-lock: the inscription occupies the same column-width as a
 * plate card so the relation reads inline within the stack.
 *
 * No new route. No new doctrine. No glossary mutation.
 * Removes the adjacency residue per Operational Rule 19.
 */
function PairedInscription() {
  return (
    <div className="pairInscription reveal" role="note" aria-label="P025 ↔ P026 connective inscription">
      <div className="pairInscriptionAccent" />
      <div className="pairInscriptionBody">
        <div className="pairInscriptionOrnament" aria-hidden="true">
          <span className="pairInscriptionRule" />
          <span className="pairInscriptionSeal">☉</span>
          <span className="pairInscriptionRule" />
        </div>

        <div className="pairInscriptionPrimary">
          ONE INVARIANT · TWO LAWFUL OPERATIONS
        </div>
        <div className="pairInscriptionSecondary">
          Containment under pressure · Return through stillness
        </div>

        <div className="pairInscriptionFormula" aria-hidden="true">
          <KTex math={'\\text{Standing State} \\;=\\; \\mathcal{C}_{\\text{hold}} \\,\\cap\\, \\mathcal{C}_{\\text{clarify}}'} />
        </div>

        <div className="pairInscriptionCompression">
          <span>The axiom contains what the plates unfold.</span>
          <span>P025 holds the becoming.</span>
          <span>P026 clarifies the knowing.</span>
          <span>Their intersection is the Standing State.</span>
        </div>

        <div className="pairInscriptionTerminal">
          <em>A becomes A, because A knows it is A.</em>
        </div>

        <div className="pairInscriptionOrnament" aria-hidden="true">
          <span className="pairInscriptionRule" />
          <span className="pairInscriptionSeal">☉</span>
          <span className="pairInscriptionRule" />
        </div>
      </div>
    </div>
  )
}
