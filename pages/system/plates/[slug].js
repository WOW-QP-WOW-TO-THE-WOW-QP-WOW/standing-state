/**
 * /system/plates/[slug]
 * Individual plate detail page
 * Dynamic route — one page per plate
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'
import { PLATES } from '../../../components/platesData'

export async function getStaticPaths() {
  return {
    paths: PLATES.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const plate = PLATES.find(p => p.slug === params.slug)
  const currentIndex = PLATES.findIndex(p => p.slug === params.slug)
  const prev = currentIndex > 0 ? PLATES[currentIndex - 1] : null
  const next = currentIndex < PLATES.length - 1 ? PLATES[currentIndex + 1] : null
  return { props: { plate, prev, next } }
}

export default function PlateDetail({ plate, prev, next }) {
  const hasImage = plate.image && !plate.image.includes('placeholder')

  return (
    <>
      <Head>
        <title>{plate.number} — {plate.title} — Standing State Press</title>
        <meta name="description" content={plate.summary} />
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
            <a href="/system/plates">Plates</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>{plate.number}</span>
          </div>
          <div className="glossEyebrow">{plate.volume} · {plate.chapter}</div>
          <div className="plateDetailNum">{plate.number}</div>
          <h1 className="glossH1">{plate.title}</h1>
          <p className="glossIntro">{plate.summary}</p>
        </div>
      </header>

      <hr className="divider" />

      {/* ── PLATE DISPLAY ── */}
      <section className="plateDetailSec">
        <div className="wrap">
          <div className="plateDetailGrid">

            {/* Image / Visual */}
            <div className="plateDetailVisual">
              {hasImage ? (
                <div className="plateDetailImgWrap">
                  <img src={plate.image} alt={`${plate.number} — ${plate.title}`} />
                </div>
              ) : (
                <div className="plateDetailImgPlaceholder">
                  <div className="plateDetailPlaceholderLabel">{plate.number}</div>
                  <div className="plateDetailPlaceholderTitle">{plate.title}</div>
                  <div className="plateDetailPlaceholderEq">
                    <KTex math={plate.governingCondition} display />
                  </div>
                  <div className="plateDetailPlaceholderNote">
                    Plate image will appear here when uploaded to <code>/public/plates/{plate.slug}.jpg</code>
                  </div>
                </div>
              )}
            </div>

            {/* Detail panel */}
            <div className="plateDetailPanel">

              {/* Governing condition */}
              <div className="plateDetailBlock">
                <div className="plateDetailBlockLabel">Governing Condition</div>
                <div className="plateDetailEqWrap">
                  <KTex math={plate.governingCondition} display />
                </div>
              </div>

              {/* Description */}
              <div className="plateDetailBlock">
                <div className="plateDetailBlockLabel">System Description</div>
                <p className="plateDetailDesc">{plate.description}</p>
              </div>

              {/* Linked variables */}
              {plate.linkedGlossary && plate.linkedGlossary.length > 0 && (
                <div className="plateDetailBlock">
                  <div className="plateDetailBlockLabel">Governing Variables</div>
                  <div className="plateDetailVars">
                    {plate.linkedGlossary.map(v => (
                      <a
                        key={v.anchor}
                        href={`/system/glossary#${v.anchor}`}
                        className="plateDetailVar"
                      >
                        <span className="plateDetailVarSym">
                          <KTex math={
                            v.anchor === 'sigma' ? '\\Sigma' :
                            v.anchor === 'phi'   ? '\\Phi(x)' :
                            v.anchor === 'kauto' ? 'K_{\\text{auto}}' :
                            v.anchor === 'bt'    ? 'B(t)' :
                            v.anchor === 'xstar' ? 'x^*' : v.label
                          } />
                        </span>
                        <span className="plateDetailVarLabel">
                          {v.anchor === 'sigma' ? 'Total Stress Load' :
                           v.anchor === 'phi'   ? 'Completion Functional' :
                           v.anchor === 'kauto' ? 'Autophagic Correction' :
                           v.anchor === 'bt'    ? 'Boundary Integrity' :
                           v.anchor === 'xstar' ? 'Reference State' : v.label}
                        </span>
                        <span className="plateDetailVarLink">→ Glossary</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Source */}
              <div className="plateDetailBlock">
                <div className="plateDetailBlockLabel">Source</div>
                <div className="plateDetailSource">
                  <div className="plateDetailSourceVol">{plate.volume}</div>
                  <div className="plateDetailSourceCh">{plate.chapter}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── PLATE NAVIGATION ── */}
      <nav className="plateNav">
        <div className="wrap">
          <div className="plateNavInner">
            {prev ? (
              <a href={`/system/plates/${prev.slug}`} className="plateNavLink plateNavPrev">
                <span className="plateNavDir">← Previous</span>
                <span className="plateNavTitle">{prev.number} — {prev.title}</span>
              </a>
            ) : (
              <a href="/system/plates" className="plateNavLink plateNavPrev">
                <span className="plateNavDir">← All Plates</span>
                <span className="plateNavTitle">Plates Gallery</span>
              </a>
            )}

            <a href="/system/plates" className="plateNavIndex">
              All Plates
            </a>

            {next ? (
              <a href={`/system/plates/${next.slug}`} className="plateNavLink plateNavNext">
                <span className="plateNavDir">Next →</span>
                <span className="plateNavTitle">{next.number} — {next.title}</span>
              </a>
            ) : (
              <a href="/system/glossary" className="plateNavLink plateNavNext">
                <span className="plateNavDir">Next Layer →</span>
                <span className="plateNavTitle">Variable Glossary</span>
              </a>
            )}
          </div>
        </div>
      </nav>

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
