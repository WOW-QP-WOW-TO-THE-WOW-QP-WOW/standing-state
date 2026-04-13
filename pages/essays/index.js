/**
 * /essays
 * MEDIUM ESSAY INDEX — Standing State Press
 * Cross-indexed by plate, volume, and register
 * standingstate.com
 */

import Head from 'next/head'
import { useState, useMemo } from 'react'

// ── AXIS DEFINITIONS ─────────────────────────────────────────
const PLATES = [
  { code: 'PLT-I',       label: 'Fed–Stress–Output Loop' },
  { code: 'PLT-IIB',     label: 'The Scab Condition' },
  { code: 'PLT-INTERP',  label: 'Architecture of Interpretation' },
  { code: 'PLT-COORD',   label: 'Identity as Coordinate' },
  { code: 'PLT-PAIN',    label: 'Pain as Decoherence Signal' },
  { code: 'PLT-CONSENT', label: 'The Consent Engine' },
  { code: 'VAR-Σ',       label: 'Total Load (Σ)' },
  { code: 'VAR-Φ',       label: 'Completion Functional (Φ)' },
  { code: 'VAR-B',       label: 'Boundary Integrity (B)' },
  { code: 'VAR-K',       label: 'Autophagic Correction (K)' },
  { code: 'VAR-∇c',      label: 'Conscience Gradient (∇c)' },
  { code: 'VAR-C',       label: 'Consent Scalar (𝒞)' },
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
  M: { label: 'Mirrored', color: '#c4a44a' },
  U: { label: 'Update',   color: '#6a5a3a' },
  E: { label: 'Expand',   color: '#5a6a3a' },
  X: { label: 'Archive',  color: '#3a3a3a' },
}

// ── ESSAY DATA ───────────────────────────────────────────────
// Populated during audit. Structure defined — ready to receive 400 entries.
const ESSAYS = [
  // ── CANONICAL SET ─────────────────────────────────────────
  {
    id: '001',
    title: 'The Standing State',
    mediumUrl: '',
    axis1: 'SYS-GEN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Defines x* and non-constructed return condition. The system returns when interference is removed.',
    mirrorUrl: '/essays/canonical/the-standing-state',
  },
  {
    id: '002',
    title: 'Identity as Coordinate',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Identity fixes reference; does not generate motion. GPS formalization. Time Burn as cost of unstable coordinate.',
    mirrorUrl: '/essays/canonical/identity-as-coordinate',
  },
  {
    id: '003',
    title: 'Architecture of Interpretation',
    mediumUrl: '',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Defines full causal pipeline I → ℐ(I,∇c) → π → x. Reality reflects what interpretation produces, not what identity declares.',
    mirrorUrl: '/essays/canonical/architecture-of-interpretation',
  },
  {
    id: '004',
    title: 'Pain as Decoherence Signal',
    mediumUrl: '',
    axis1: 'PLT-PAIN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Defines ∇c as deviation gradient signal. Pain respected is navigation. Pain suppressed is a warning light covered with tape.',
    mirrorUrl: '/essays/canonical/pain-as-decoherence-signal',
  },
  {
    id: '005',
    title: 'The Consent Engine',
    mediumUrl: '',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Consent as structure authorization operator π(t) = 𝒞(t)u(t). Habits are archived consent.',
    mirrorUrl: '/essays/canonical/the-consent-engine',
  },
  {
    id: '006',
    title: 'Life and Death',
    mediumUrl: '',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Binary field via V̇ convergence/divergence. No neutral state. Every consent authorizes a trajectory.',
    mirrorUrl: '/essays/canonical/life-and-death',
  },
  {
    id: '007',
    title: 'The Scab Condition',
    mediumUrl: '',
    axis1: 'PLT-IIB',
    axis2: 'VOL-BSH2',
    axis3: 'REG-BIO',
    flag: 'M',
    note: 'Physical proof of Σ↓ ∧ B(t) ⇒ Kₐᵤₜₒ↑. The scab holds the condition under which healing occurs.',
    mirrorUrl: '/essays/canonical/the-scab-condition',
  },
  {
    id: '008',
    title: 'Surrender',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Enforces x ⇏ I* and fixed identity coordinate. Surrender is the refusal to let output ascend.',
    mirrorUrl: '/essays/canonical/surrender',
  },
  {
    id: '009',
    title: 'External Identity and Consent',
    mediumUrl: '',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-PHIL',
    flag: 'E',
    note: 'External signal vs internal authorization. Magnetic field analogy. Stable coordinate processes signal; unstable coordinate adopts it.',
    mirrorUrl: '/essays/canonical/external-identity-and-consent',
  },
  {
    id: '010',
    title: 'The Architecture of Return',
    mediumUrl: '',
    axis1: 'SYS-GEN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Full system synthesis pipeline and closure. Return is not constructed — it is revealed when interference is removed.',
    mirrorUrl: '/essays/canonical/the-architecture-of-return',
  },
  // ── MEDIUM ESSAYS ─────────────────────────────────────────
  {
    id: 'M001',
    title: 'The Measure Within — A Structural Thesis on Self-Relation, Compassion, and Generative Multiplication',
    mediumUrl: 'https://medium.com/@leonsp3/the-measure-within-e7e42eecf288',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Foundational thesis — coherence as condition of generativity; identity as invariant across scripture, contemplative practice, and natural process',
    mirrorUrl: '',
  },
  {
    id: 'M002',
    title: 'Time, Identity, and the End of Contradiction — From Relativity to the Sabbath of Coherent Being',
    mediumUrl: 'https://medium.com/@leonsp3/time-identity-and-the-end-of-contradiction-3ed0b965b75e',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Derives identity invariance formally from forward invariance; introduces Time Burn; Sabbath as coherence threshold C=1',
    mirrorUrl: '',
  },
  {
    id: 'M003',
    title: 'Identity, Law, and the Messiah — A Rendering within the Romantic Philosophy of the Living Soul',
    mediumUrl: 'https://medium.com/@leonsp3/identity-law-and-the-messiah-69f6cfde235a',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Five-stage sequence: source → law → mediation → stillness → recognition. Departs from Plato and Augustine — identity is dynamic achievement not formal given',
    mirrorUrl: '',
  },
  {
    id: 'M004',
    title: 'Asynchronous Thesis — The Standing State Conversation Stack',
    mediumUrl: 'https://medium.com/@leonsp3/asynchronous-thesis-the-standing-state-conversation-stack-7c8dc0bd2ca1',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MATH',
    flag: 'M',
    note: 'Lyapunov-resource closure; surrender as zero-input control u=0; identity as dissipative attractor',
    mirrorUrl: '',
  },
  {
    id: 'M005',
    title: 'Stop Buying Your Life: The Case for a Non-Sacrificial Architecture',
    mediumUrl: 'https://medium.com/@leonsp3/stop-buying-your-life-the-case-for-a-non-sacrificial-architecture-d864b0d5849f',
    axis1: 'VAR-Σ',
    axis2: 'VOL-BSH1',
    axis3: 'REG-BIO',
    flag: 'A',
    note: 'Sacrifice Logic as sustained Σ; Qualia as coherence yield; Zero-Sacrifice Invariant as boundary condition',
    mirrorUrl: '',
  },
  {
    id: 'M006',
    title: 'The Governing Invariant Stands',
    mediumUrl: 'https://medium.com/@leonsp3/the-governing-invariant-stands-9f2aedde29c1',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MATH',
    flag: 'E',
    note: 'Spectral-geometric stability for recursive AI; alignment reframed as stability theorem — seed for Plate IX',
    mirrorUrl: '',
  },
]

// ── FILTER COMPONENT ─────────────────────────────────────────
function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.35rem 0.9rem',
        border: `1px solid ${active ? 'var(--gold-dim)' : 'var(--border)'}`,
        background: active ? 'var(--panel)' : 'transparent',
        color: active ? 'var(--gold)' : 'var(--gray-lt)',
        fontFamily: 'var(--display)',
        fontSize: '8px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all .2s',
      }}
    >
      {label}
    </button>
  )
}

// ── ESSAY CARD ────────────────────────────────────────────────
function EssayCard({ essay }) {
  const flag = FLAGS[essay.flag] || FLAGS.A
  const plate = PLATES.find(p => p.code === essay.axis1)
  const vol   = VOLUMES.find(v => v.code === essay.axis2)
  const reg   = REGISTERS.find(r => r.code === essay.axis3)

  return (
    <div className="essayCard">
      <div className="essayCardTop">
        <span className="essayId">{essay.id}</span>
        <span className="essayFlag" style={{ color: flag.color }}>
          {flag.label}
        </span>
      </div>
      <h3 className="essayTitle">{essay.title}</h3>
      {essay.note && <p className="essayNote">{essay.note}</p>}
      <div className="essayTags">
        {plate && <span className="essayTag essayTagPlate">{plate.label}</span>}
        {vol   && <span className="essayTag essayTagVol">{vol.label}</span>}
        {reg   && <span className="essayTag essayTagReg">{reg.label}</span>}
      </div>
      <div className="essayLinks">
        {essay.mirrorUrl ? (
          <a href={essay.mirrorUrl} className="essayLinkMirror">
            Read on Site →
          </a>
        ) : essay.mediumUrl ? (
          <a href={essay.mediumUrl} target="_blank" rel="noopener noreferrer"
             className="essayLinkMedium">Read on Medium →</a>
        ) : null}
        {essay.mirrorUrl && essay.mediumUrl && (
          <a href={essay.mediumUrl} target="_blank" rel="noopener noreferrer"
             className="essayLinkMedium">Medium →</a>
        )}
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────
export default function EssaysPage() {
  const [filterPlate, setFilterPlate] = useState(null)
  const [filterVol,   setFilterVol]   = useState(null)
  const [filterReg,   setFilterReg]   = useState(null)
  const [filterFlag,  setFilterFlag]  = useState(null)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return ESSAYS.filter(e => {
      if (filterPlate && e.axis1 !== filterPlate) return false
      if (filterVol   && e.axis2 !== filterVol)   return false
      if (filterReg   && e.axis3 !== filterReg)   return false
      if (filterFlag  && e.flag  !== filterFlag)   return false
      if (search && !e.title.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [filterPlate, filterVol, filterReg, filterFlag, search])

  const toggle = (current, value, setter) =>
    setter(current === value ? null : value)

  return (
    <>
      <Head>
        <title>Essays — Standing State Press</title>
        <meta name="description" content="400 essays indexed to the Standing State system. Cross-referenced by plate, volume, and register." />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/essays" style={{ color: 'var(--gold)' }}>Essays</a></li>
            <li><a href="/#about">Author</a></li>
          </ul>
        </div>
      </nav>

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Essays</span>
          </div>
          <div className="glossEyebrow">Commentary Layer — Medium × Standing State</div>
          <h1 className="glossH1">Essays</h1>
          <p className="glossIntro">
            400 essays written on Medium — audited, tagged, and indexed
            to the formal system. Each essay is downstream of at least
            one plate. Filter by concept, volume, or register.
          </p>
          <div className="essayStats">
            <span className="essayStat">{ESSAYS.length} indexed</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">{ESSAYS.filter(e=>e.flag==='M').length} mirrored</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">{filtered.length} shown</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      {/* ── FILTERS ── */}
      <section className="essayFilters">
        <div className="wrap">

          {/* Search */}
          <div className="essaySearch">
            <input
              type="text"
              placeholder="Search essays..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="essaySearchInput"
            />
          </div>

          {/* Plate filter */}
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

          {/* Volume filter */}
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

          {/* Register filter */}
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

          {/* Flag filter */}
          <div className="essayFilterGroup">
            <div className="essayFilterLabel">Status</div>
            <div className="essayFilterPills">
              {Object.entries(FLAGS).map(([code, f]) => (
                <FilterPill key={code} label={f.label}
                  active={filterFlag === code}
                  onClick={() => toggle(filterFlag, code, setFilterFlag)} />
              ))}
            </div>
          </div>

          {/* Clear */}
          {(filterPlate || filterVol || filterReg || filterFlag || search) && (
            <button className="essayClear"
              onClick={() => {
                setFilterPlate(null); setFilterVol(null)
                setFilterReg(null); setFilterFlag(null); setSearch('')
              }}>
              Clear all filters
            </button>
          )}
        </div>
      </section>

      <hr className="divider" />

      {/* ── ESSAY GRID ── */}
      <section className="essayGrid">
        <div className="wrap">
          {ESSAYS.length === 0 ? (
            <div className="essayEmpty">
              <p>Audit in progress. Essays will appear here as they are indexed.</p>
              <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--gray-lt)' }}>
                400 essays · audit begins with batch submission
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="essayEmpty">
              <p>No essays match the current filters.</p>
            </div>
          ) : (
            <div className="essayCards">
              {filtered.map(e => <EssayCard key={e.id} essay={e} />)}
            </div>
          )}
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
