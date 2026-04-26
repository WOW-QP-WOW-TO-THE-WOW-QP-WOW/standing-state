/**
 * /sources
 * SOURCE REGISTRY — Standing State Press
 * Precursor and reference material cross-indexed by plate, volume, and register
 * standingstate.com
 */

import Head from 'next/head'
import { useState, useMemo } from 'react'
import { SOURCES, SOURCE_TYPES } from '../../components/sourcesData'

// ── AXIS DEFINITIONS ─────────────────────────────────────────
const PLATES = [
  { code: 'PLT-I',       label: 'Fed–Stress–Output Loop' },
  { code: 'PLT-IIB',     label: 'The Scab Condition' },
  { code: 'PLT-INTERP',  label: 'Architecture of Interpretation' },
  { code: 'PLT-COORD',   label: 'Identity as Coordinate' },
  { code: 'PLT-PAIN',    label: 'Pain as Decoherence Signal' },
  { code: 'PLT-CONSENT', label: 'The Consent Engine' },
  { code: 'SYS-GEN',     label: 'General System' },
]

const VOLUMES = [
  { code: 'VOL-MW',    label: 'The Measure Within' },
  { code: 'VOL-SS',    label: 'The Standing State: Vol I' },
  { code: 'VOL-LG',    label: 'The Law of Growth' },
  { code: 'VOL-BSH1',  label: 'Biological Sabbath Vol I' },
  { code: 'VOL-BSH2',  label: 'Biological Sabbath Vol II' },
  { code: 'VOL-CROSS', label: 'Cross-Volume' },
]

const REGISTERS = [
  { code: 'REG-MATH',   label: 'Mathematical' },
  { code: 'REG-BIO',    label: 'Biological' },
  { code: 'REG-PSY',    label: 'Psychological' },
  { code: 'REG-PHIL',   label: 'Philosophical' },
  { code: 'REG-SPIRIT', label: 'Spiritual' },
  { code: 'REG-MIXED',  label: 'Mixed' },
]

const FLAGS = {
  A: { label: 'Aligned',  color: '#7a6428' },
  M: { label: 'Mirror',   color: '#c4a44a' },
  U: { label: 'Update',   color: '#6a5a3a' },
  E: { label: 'Expand',   color: '#5a6a3a' },
}

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.3rem 0.8rem',
        border: active ? '1px solid var(--gold)' : '1px solid var(--border)',
        background: active ? 'rgba(196,164,74,0.12)' : 'transparent',
        color: active ? 'var(--gold)' : 'var(--gray-lt)',
        fontFamily: 'var(--display)',
        fontSize: '9px',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </button>
  )
}

function SourceCard({ source }) {
  const flag = FLAGS[source.flag] || FLAGS.A
  return (
    <a
      href={source.mirrorUrl}
      style={{
        display: 'block',
        border: '1px solid var(--border)',
        padding: '1.6rem 1.8rem',
        textDecoration: 'none',
        transition: 'border-color 0.2s, background 0.2s',
        background: 'transparent',
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold-dim)'
        e.currentTarget.style.background = 'rgba(196,164,74,0.03)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      {/* ID + Flag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.9rem' }}>
        <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>
          {source.id}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.15em', color: flag.color, textTransform: 'uppercase', border: `1px solid ${flag.color}`, padding: '0.15rem 0.45rem' }}>
            {source.flag} — {flag.label}
          </span>
        </div>
      </div>

      {/* Source type + author */}
      <div style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.18em', color: 'var(--gray-lt)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
        {source.sourceType} · {source.author}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--white)', lineHeight: 1.3, marginBottom: '0.8rem' }}>
        {source.title}
      </h3>

      {/* Note */}
      <p style={{ fontFamily: 'var(--serif)', fontSize: '0.85rem', color: 'var(--gray-lt)', lineHeight: 1.6, marginBottom: '1rem', fontStyle: 'italic' }}>
        {source.note}
      </p>

      {/* Axis tags */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {[source.axis1, source.axis2, source.axis3].filter(Boolean).map(ax => (
          <span key={ax} style={{ fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.15em', color: 'var(--gold-dim)', textTransform: 'uppercase', border: '1px solid var(--border)', padding: '0.15rem 0.5rem' }}>
            {ax}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function SourcesPage() {
  const [filterPlate, setFilterPlate] = useState(null)
  const [filterVol,   setFilterVol]   = useState(null)
  const [filterReg,   setFilterReg]   = useState(null)
  const [filterFlag,  setFilterFlag]  = useState(null)
  const [filterType,  setFilterType]  = useState(null)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return SOURCES.filter(s => {
      if (filterPlate && s.axis1 !== filterPlate) return false
      if (filterVol   && s.axis2 !== filterVol)   return false
      if (filterReg   && s.axis3 !== filterReg)   return false
      if (filterFlag  && s.flag  !== filterFlag)   return false
      if (filterType  && s.sourceType !== filterType) return false
      if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [filterPlate, filterVol, filterReg, filterFlag, filterType, search])

  const toggle = (current, value, setter) =>
    setter(current === value ? null : value)

  return (
    <>
      <Head>
        <title>Sources — Standing State Press</title>
        <meta name="description" content="Precursor and reference material absorbed into the Standing State system. Cross-referenced by plate, volume, and register." />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/gates">Gates</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/sources" style={{ color: 'var(--gold)' }}>Sources</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Sources</span>
          </div>
          <div className="glossEyebrow">Source Layer — Precursor Material</div>
          <h1 className="glossH1">Sources</h1>
          <p className="glossIntro">
            Reference and precursor texts absorbed into the Standing State system.
            Each source is upstream of at least one formal layer — translated,
            cross-referenced, and indexed to the system architecture.
          </p>
          <div className="essayStats">
            <span className="essayStat">{SOURCES.length} indexed</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">{SOURCES.filter(s => s.flag === 'M').length} mirrored</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">{filtered.length} shown</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── FILTERS ── */}
      <section className="essayFilters">
        <div className="wrap">

          <div className="essaySearch">
            <input
              type="text"
              placeholder="Search sources..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="essaySearchInput"
            />
          </div>

          <div className="essayFilterGroup">
            <div className="essayFilterLabel">Source Type</div>
            <div className="essayFilterPills">
              {SOURCE_TYPES.map(t => (
                <FilterPill key={t.code} label={t.label}
                  active={filterType === t.code}
                  onClick={() => toggle(filterType, t.code, setFilterType)} />
              ))}
            </div>
          </div>

          <div className="essayFilterGroup">
            <div className="essayFilterLabel">Plate / Concept</div>
            <div className="essayFilterPills">
              {PLATES.map(p => (
                <FilterPill key={p.code} label={p.label}
                  active={filterPlate === p.code}
                  onClick={() => toggle(filterPlate, p.code, setFilterPlate)} />
              ))}
            </div>
          </div>

          <div className="essayFilterGroup">
            <div className="essayFilterLabel">Volume</div>
            <div className="essayFilterPills">
              {VOLUMES.map(v => (
                <FilterPill key={v.code} label={v.label}
                  active={filterVol === v.code}
                  onClick={() => toggle(filterVol, v.code, setFilterVol)} />
              ))}
            </div>
          </div>

          <div className="essayFilterGroup">
            <div className="essayFilterLabel">Register</div>
            <div className="essayFilterPills">
              {REGISTERS.map(r => (
                <FilterPill key={r.code} label={r.label}
                  active={filterReg === r.code}
                  onClick={() => toggle(filterReg, r.code, setFilterReg)} />
              ))}
            </div>
          </div>

          <div className="essayFilterGroup">
            <div className="essayFilterLabel">Flag</div>
            <div className="essayFilterPills">
              {Object.entries(FLAGS).map(([code, f]) => (
                <FilterPill key={code} label={`${code} — ${f.label}`}
                  active={filterFlag === code}
                  onClick={() => toggle(filterFlag, code, setFilterFlag)} />
              ))}
            </div>
          </div>

          {(filterPlate || filterVol || filterReg || filterFlag || filterType || search) && (
            <button
              onClick={() => { setFilterPlate(null); setFilterVol(null); setFilterReg(null); setFilterFlag(null); setFilterType(null); setSearch('') }}
              style={{ fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gray-lt)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}
            >
              Clear filters ×
            </button>
          )}
        </div>
      </section>

      <hr className="divider" />

      {/* ── GRID ── */}
      <section style={{ padding: '3rem 0 6rem' }}>
        <div className="wrap">
          {filtered.length === 0 ? (
            <p style={{ fontFamily: 'var(--serif)', color: 'var(--gray-lt)', fontStyle: 'italic' }}>
              No sources match the current filters.
            </p>
          ) : (
            <div style={{ display: 'grid', gap: '1px', background: 'var(--border)' }}>
              {filtered.map(source => (
                <SourceCard key={source.id} source={source} />
              ))}
            </div>
          )}
        </div>
      </section>

    </>
  )
}
