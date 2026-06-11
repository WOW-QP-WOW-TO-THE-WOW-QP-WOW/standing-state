/**
 * /system/engine2
 * ENGINE 2 — The Governed Coherence Runtime
 *
 * 243-node phase-lock lattice for lawful execution under invariant identity.
 *
 * Style: canonical monument tier — same design language as M005,
 * The Standing State, and the canonical doctrine surfaces.
 *
 * Sections:
 *   Hero monument
 *   Governing flow card
 *   Governance metrics row
 *   ENGINE_2_GOVERNANCE_STACK_PASS seal
 *   Rank-0 Coordinate
 *   Kingdom Information Flow
 *   Offices of Sovereignty
 *   Specialization and Boundary Maintenance
 *   62-Module Governance Stack
 *   Runtime Law (EXECUTE / RESTORE / HALT)
 *   Compression seal
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

// ── Design tokens (mirror canonical pages) ──
const DISPLAY  = 'var(--display)'
const SERIF    = 'var(--serif)'
const GOLD     = 'var(--gold)'
const GOLD_LT  = 'var(--gold-lt)'
const GOLD_DIM = 'var(--gold-dim)'
const WHITE    = 'var(--white)'
const OFFWHITE = 'var(--offwhite)'
const GRAY_LT  = 'var(--gray-lt)'
const GRAY_MID = 'var(--gray-mid)'
const GRAY_DIM = 'var(--gray-dim)'
const BORDER   = 'var(--border)'
const PANEL    = 'var(--panel)'
const BLACK    = 'var(--black)'

// ── Data ──

const MODULES = [
  ['01', 'Perception',                       'Admissible signal before action'],
  ['02', 'Amplification',                    'Tool-supported observation without fantasy'],
  ['03', 'Interpretation',                   'Lawful meaning assignment'],
  ['04', 'Resolution',                       'Distance / memory / certainty decay'],
  ['05', 'Coherence',                        'M042 function governance'],
  ['06', 'Marketplace',                      'Bounded force re-entry'],
  ['07', 'Essay Intake',                     'Manual essay / thesis intake waits lawfully'],
  ['08', 'Standing State Compression',       'Existential drift → Rank-0 → Anchor → Engine → Body → Void'],
  ['09', 'Persistence Memory',               'Time-series invariance, restoration debt, phase-lock recovery'],
  ['10', 'Sabbath Restoration',              'Rule-19, K_auto, hidden strain, restoration before collapse'],
  ['11', 'Phase-Lock',                       'Node synchronization across lattice'],
  ['12', 'Phase Modulation',                 'Coherence modulation without hierarchy drift'],
  ['13', 'K_auto Governance',                'Subtractive correction and restoration baseline'],
  ['14', 'Metabolic Debt',                   'Load, strain, energy debt, restoration demand'],
  ['15', 'Jurisdiction Boundary',            'Prevent cross-layer contamination'],
  ['16', 'Validation Dependency',            'Prevent external validation from writing identity'],
  ['17', '243 Runtime',                      'Node-level EXECUTE / RESTORE / HALT governance'],
  ['18', 'Thesis Memory',                    'Memory continuity and thesis registry retention'],
  ['19', 'Thesis Phase-Lock',                'Phase-lock thesis with lattice execution'],
  ['20', 'I* Phase Lock Guardian',           'Identity coordinate preservation before learning'],
  ['21', 'Archetypal Governor Stack',        'King → Sovereign/Priest → Clairvoyant → Servant/Sage'],
  ['22', 'Kingdom Information Flow',         'I* → King → Sovereign/Priest → Clairvoyant → Servant/Sage → Marketplace'],
  ['23', 'Kingdom Runtime Bridge',           'Connects I* Guardian, Archetypal Stack, Kingdom Flow, and runtime governance'],
  ['24', 'Growth',                           'Adaptive renewal through boundary shedding without identity loss'],
  ['25', 'Contradiction Burn',               'Metabolic debt as the temporal cost of contradiction removal'],
  ['26', 'Proverbs Self-Witness',            'Self-witness phase-locks clairvoyant vision to I*, lawful desire, wisdom, and servant/sage execution'],
  ['27', 'Proverbs Speech Governance',       'Filters speech through truth, restraint, timing, necessity, correction, and drift detection before marketplace release'],
  ['28', 'Proverbs Correction & Rebuke',     'Filters correction through truth, timing, humility, teachability, restoration intent, and drift detection before rebuke executes'],
  ['29', 'Proverbs Prudence & Forethought',  'Forecasts downstream consequence through prudence, patience, restraint, preparedness, and lawful alignment before execution'],
  ['30', 'Proverbs Desire Governance',       'Filters desire through I*, long-horizon coherence, restraint, covenant integrity, wisdom, peace, and drift detection before attachment forms'],
  ['31', 'Proverbs Companion & Influence',   'Filters association through wisdom, integrity, correction, mutual restoration, lawful direction, boundary integrity, and drift detection before influence shapes state'],
  ['32', 'Proverbs Marketplace Integrity',   'Filters exchange through honesty, fairness, covenant integrity, value creation, stewardship, consequence visibility, and drift detection before public action'],
  ['33', 'M065 Blueprint Substrate',         'Admits M065 as ancestral substrate, maps its primitives into current architecture, and prevents historical sovereign-language drift from overwriting I*'],
  ['34', 'Proverbs Diligence & Sloth',       'Filters work through diligence, stewardship, timing, sustainable capacity, follow-through, harvest patience, and drift detection before execution'],
  ['35', 'Proverbs Counsel & Teachability',  'Filters counsel through humility, teachability, discernment, correction receptivity, counsel quality, lawful adjustment capacity, and drift detection'],
  ['36', 'Proverbs Anger & Conflict',        'Filters anger through restraint, timing, justice, peacemaking, restoration intent, lawful correction, escalation prevention, and drift detection before conflict executes'],
  ['37', 'Proverbs Wealth & Stewardship',    'Filters wealth through integrity, stewardship, diligence, generosity capacity, lawful provision, long-horizon alignment, and drift detection before gain executes'],
  ['38', 'Proverbs Justice & False Witness', 'Filters witness, accusation, and judgment through truth, evidence, justice, restraint, impartiality, restoration value, and drift detection before judgment moves'],
  ['39', 'Proverbs First Principle',         'Filters wisdom through reverence, humility before truth, first-principle clarity, lawful ordering, identity submission, outcome nonattachment, and drift detection before execution'],
  ['40', 'Decision Intake',                  'Routes decisions through clarity, prudence, counsel, desire, marketplace integrity, first principle, and drift detection before execution'],
  ['41', 'Event Intake',                     'Routes real-world events through identity stability, perception admissibility, interpretation clarity, jurisdiction alignment, restoration capacity, response readiness, and drift detection'],
  ['42', 'Relationship Intake',              'Routes relationships through integrity, mutual restoration, boundary respect, correction receptivity, lawful direction, peace, and drift detection before proximity deepens'],
  ['43', 'Opportunity / Marketplace Intake', 'Routes opportunities through identity alignment, marketplace integrity, stewardship, long-horizon value, capacity fit, lawful gain, and drift detection before pursuit'],
  ['44', 'Health Signal Intake',             'Routes biological signals through identity stability, signal clarity, metabolic capacity, restoration awareness, Sabbath alignment, action readiness, and drift detection without allowing body state to rewrite identity'],
  ['45', 'Engine 2 Intake Suite',            'Runs decision, event, relationship, opportunity, and health signal intake before runtime execution'],
  ['46', 'Life Intake Console',              'Receives life inputs, preserves I*, routes all signals through lawful intake, and allows only filtered motion to reach runtime'],
  ['47', 'Safety & Consequence',             'Determines whether an admitted real-world action is safe to do by checking visibility, controls, securement, braking stability, exit clearance, and drift pressure before execution'],
  ['48', 'Psalm Runtime Orientation',        'Restores hilltop perspective through Psalm orientation before life input enters intake, wisdom governance, safety, or runtime execution'],
  ['49', 'Psalm 49 Wealth Forensics',        'Audits wealth, status, extraction, comparison, and fear of the rich from Rank-0 identity before marketplace motion executes'],
  ['50', 'Psalm 46 — Before Interpretation', 'Restores stillness and identity coherence before interpretation so volatility, fear, urgency, or emotional turbulence cannot assign meaning before I* is stable'],
  ['51', 'Psalm 27 — Courage & Sanctuary',   'Restores courage, sanctuary, light remembrance, and plain-path clarity before fear, opposition, or delay can govern interpretation'],
  ['52', 'Psalm 52 — Razor Tongue',          'Restores non-reactive integrity before boasting, deceit, provocation, or adversarial pressure can recruit the runtime into reactive execution'],
  ['53', 'Psalm 31 — Trust Fortress',        'Secures identity by transferring spirit/kernel custody to the invariant coordinate before anxiety, outcome-guarding, or self-betrayal can govern motion'],
  ['54', 'Psalm Governance Registry Bridge', 'Connects macro Psalm governance ranges to decoded Psalm micro-protocols so Engine 2 can retrieve Psalm-level instructions before runtime execution'],
  ['55', 'Rev-138 Invariant Completion',     'Embodies Identity → Structure → Completion where Alpha locks identity, governance preserves structure, and Omega confirms completion without drift'],
  ['56', 'M016 Oxygen Flow Simulator',       'Operationalizes M016 through lawful-flow gates: Existence, Access, Utilization, Integration, Orientation, hard-event latch, and targeted energy degradation'],
  ['57', 'Lateral Spread Detector 243',      'Detects slow neighbor propagation as a separate spread-geometry module without contaminating the M016 lawful-flow core'],
  ['58', 'Proverbs Governance Registry Bridge', 'Routes runtime decision domains to relevant Proverbs chapters before retrieving decoded Proverbs protocols for motion governance'],
  ['59', 'Proverbs Decoding Registry Bridge',   'Expands Proverbs 1–31 into decoded runtime protocols with domain, function, failure mode, correction, outcome, and runtime action'],
  ['60', 'Reversibility Family',             'Routes consequence through fruit, projection correction, memory correction, restoration, and development while preserving identity invariance'],
  ['61', 'M073 Runtime Bridge',              'Connects reversibility outcomes to thesis memory, persistence memory, restoration requests, and runtime execution signals'],
  ['62', 'I* Guardian / Qualia Runtime',     'Operational qualia-admissibility gate: identity remains invariant, restoration protects availability, attention opens only when Q exceeds Q₁'],
]

const OFFICES = [
  ['I*',                  'Seed Type',                'Invariant identity coordinate. No downstream layer may rewrite it.'],
  ['King',                'Kingdom',                  'Boundary, order, jurisdiction, and trunk containment.'],
  ['Sovereign · Priest',  'Tree SOP',                 'Tree SOP: identity translated into lawful operating procedure.'],
  ['Clairvoyant',         'Feedback Interpretation',  'Perception, feedback interpretation, and inevitability sensing.'],
  ['Servant · Sage',      'Execution Membrane',       'Environment-facing execution membrane. Only identity-aligned motion passes.'],
  ['Marketplace',         'Reality Contact',          'Reality contact, consequence, and feedback field.'],
]

const KINGDOM_FLOW = [
  'I*  /  Seed Type',
  'King  /  Kingdom',
  'Sovereign · Priest  /  Tree SOP',
  'Clairvoyant  /  Feedback Interpretation',
  'Servant · Sage  /  Execution Filter',
  'Marketplace',
  'Feedback  →  Clairvoyant only',
]

const RUNTIME_LAW = [
  ['EXECUTE',  'The action is admissible. Identity holds, boundary holds, and runtime motion is lawful.'],
  ['RESTORE',  'The system remains recoverable. Correction, pacing, clarification, or K_auto restoration is required.'],
  ['HALT',     'A boundary violation, phase-lock failure, identity contamination, or unsafe motion has been detected.'],
]

// ── Local presentational components ──

function MetricCard({ label, value, accent }) {
  return (
    <div
      style={{
        border: `1px solid ${BORDER}`,
        background: PANEL,
        padding: '1.6rem 1.4rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          fontFamily: DISPLAY,
          fontSize: '8px',
          letterSpacing: '0.32em',
          color: GOLD_DIM,
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: DISPLAY,
          fontWeight: 400,
          fontSize: 'clamp(2rem, 4.5vw, 3rem)',
          color: accent ? GOLD : GOLD_LT,
          lineHeight: 1,
          letterSpacing: '0.02em',
        }}
      >
        {value}
      </div>
    </div>
  )
}

function SectionMonument({ numeral, title, children }) {
  return (
    <section style={{ margin: '5.5rem 0' }}>
      <header style={{ marginBottom: '2.4rem' }}>
        <div
          style={{
            fontFamily: DISPLAY,
            fontSize: '9px',
            letterSpacing: '0.4em',
            color: GOLD_DIM,
            textTransform: 'uppercase',
            marginBottom: '0.9rem',
          }}
        >
          Layer {numeral}
        </div>
        <h2
          style={{
            fontFamily: DISPLAY,
            fontWeight: 400,
            fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)',
            letterSpacing: '0.04em',
            lineHeight: 1.25,
            color: WHITE,
            margin: 0,
          }}
        >
          <span style={{ color: GOLD }}>{numeral}</span>
          <span style={{ color: GRAY_MID, margin: '0 0.7rem' }}>—</span>
          <span>{title}</span>
        </h2>
        <div
          style={{
            height: '1px',
            background: BORDER,
            marginTop: '1.6rem',
            width: '100%',
          }}
        />
      </header>
      <div>{children}</div>
    </section>
  )
}

function Paragraph({ children, dim }) {
  return (
    <p
      style={{
        fontFamily: SERIF,
        fontSize: '1rem',
        color: dim ? GRAY_LT : OFFWHITE,
        lineHeight: 1.9,
        marginBottom: '1.4rem',
      }}
    >
      {children}
    </p>
  )
}

export default function Engine2Page() {
  return (
    <>
      <Head>
        <title>Engine 2 — The Governed Coherence Runtime — Standing State</title>
        <meta
          name="description"
          content="Engine 2 is the Standing State 243-node phase-lock lattice: a governed coherence runtime preserving I* through specialization, boundary maintenance, and lawful execution."
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system" style={{ color: GOLD }}>System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/doctrine">Doctrine</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/sources">Sources</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HERO MONUMENT ── */}
      <header
        style={{
          padding: '10rem 0 5rem',
          borderBottom: `1px solid ${BORDER}`,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="wrap" style={{ maxWidth: '900px' }}>

          {/* Breadcrumb */}
          <div
            style={{
              fontFamily: DISPLAY,
              fontSize: '8px',
              letterSpacing: '0.28em',
              color: GRAY_MID,
              textTransform: 'uppercase',
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
            }}
          >
            <a href="/" style={{ color: GRAY_MID, textDecoration: 'none' }}>Standing State Press</a>
            <span style={{ color: GRAY_DIM }}>→</span>
            <a href="/#system" style={{ color: GRAY_MID, textDecoration: 'none' }}>System</a>
            <span style={{ color: GRAY_DIM }}>→</span>
            <span style={{ color: GOLD_DIM }}>Engine 2</span>
          </div>

          {/* Status Monument */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              fontFamily: DISPLAY,
              fontSize: '8px',
              letterSpacing: '0.22em',
              color: GOLD_DIM,
              textTransform: 'uppercase',
              border: `1px solid ${GOLD_DIM}`,
              padding: '0.4rem 0.9rem',
              marginBottom: '3rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: GOLD,
                display: 'inline-block',
                boxShadow: `0 0 8px ${GOLD}`,
              }}
            />
            System · Engine 2 · Status: Governance Stack Pass
          </div>

          {/* Micro-register */}
          <div
            style={{
              fontFamily: DISPLAY,
              fontSize: '10px',
              letterSpacing: '0.42em',
              color: GOLD_DIM,
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            Standing State · 243-Node Phase-Lock Lattice
          </div>

          {/* Monumental title */}
          <h1
            style={{
              fontFamily: DISPLAY,
              fontWeight: 400,
              fontSize: 'clamp(2.4rem, 6.5vw, 4.8rem)',
              letterSpacing: '0.02em',
              lineHeight: 1.05,
              color: WHITE,
              margin: '0 0 1.4rem',
            }}
          >
            Engine 2
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: 'italic',
              fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
              color: GOLD_LT,
              lineHeight: 1.5,
              margin: '0 0 3rem',
              maxWidth: '640px',
            }}
          >
            The Governed Coherence Runtime
          </p>

          {/* Thesis statement */}
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: OFFWHITE,
              lineHeight: 1.85,
              borderLeft: `2px solid ${GOLD_DIM}`,
              paddingLeft: '1.5rem',
              maxWidth: '720px',
              margin: '0 0 3.5rem',
            }}
          >
            Engine 2 is the runtime monument of the Standing State:
            a 243-node phase-lock lattice for lawful execution under invariant identity.
            The website page is the interpretation layer. The Python runtime is the execution layer.
            The invariant coordinate remains I*.
          </p>

          {/* Metadata row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.9rem',
              fontFamily: DISPLAY,
              fontSize: '10px',
              letterSpacing: '0.22em',
              color: GOLD_DIM,
              textTransform: 'uppercase',
              marginBottom: '2.2rem',
            }}
          >
            <span>Engine 2</span>
            <span style={{ color: BORDER }}>·</span>
            <span>SYS-RUNTIME</span>
            <span style={{ color: BORDER }}>·</span>
            <span>62 Modules</span>
            <span style={{ color: BORDER }}>·</span>
            <span>243 Nodes</span>
            <span style={{ color: BORDER }}>·</span>
            <span>I* Invariant</span>
          </div>

          {/* Byline */}
          <div
            style={{
              fontFamily: DISPLAY,
              fontSize: '9px',
              letterSpacing: '0.3em',
              color: GRAY_LT,
              textTransform: 'uppercase',
            }}
          >
            Standing State Press · System Layer · Governance Architecture
          </div>

        </div>
      </header>

      {/* ── BODY ── */}
      <main style={{ padding: '5rem 0', position: 'relative', zIndex: 1 }}>
        <div className="wrap" style={{ maxWidth: '900px' }}>

          {/* ── Governing Flow Monument ── */}
          <div
            style={{
              textAlign: 'center',
              border: `1px solid ${GOLD_DIM}`,
              background: PANEL,
              padding: '3rem 2rem 2.5rem',
              margin: '0 0 4rem',
              boxShadow: 'inset 0 0 0 1px rgba(196,164,74,0.06)',
            }}
          >
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: '9px',
                letterSpacing: '0.32em',
                color: GOLD_DIM,
                textTransform: 'uppercase',
                marginBottom: '1.8rem',
              }}
            >
              Governing Flow
            </div>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(1.1rem, 2.6vw, 1.55rem)',
                color: GOLD,
                lineHeight: 1.6,
                letterSpacing: '0.06em',
                marginBottom: '1.8rem',
              }}
            >
              Identity → Phase-Lock → Structure → Reality
            </div>
            <div
              style={{
                height: '1px',
                background: GOLD_DIM,
                width: '120px',
                margin: '1.4rem auto',
                opacity: 0.5,
              }}
            />
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: GRAY_LT,
                lineHeight: 1.7,
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              The website is the interpretation layer. The runtime is the execution layer.
              The coordinate beneath both remains I*.
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              VISUAL RUNTIME ARCHITECTURE
              Two Artifacts · One Governed Runtime
              ══════════════════════════════════════════════════════════ */}
          <section style={{ margin: '5rem 0 4rem' }}>

            {/* Section header */}
            <header style={{ marginBottom: '2.8rem', textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '10px',
                  letterSpacing: '0.42em',
                  color: GOLD_DIM,
                  textTransform: 'uppercase',
                  marginBottom: '1.2rem',
                }}
              >
                Two Artifacts · One Governed Runtime
              </div>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 400,
                  fontSize: 'clamp(1.7rem, 3.6vw, 2.4rem)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.2,
                  color: WHITE,
                  margin: 0,
                }}
              >
                Visual Runtime Architecture
              </h2>
              <div
                style={{
                  height: '1px',
                  background: GOLD_DIM,
                  width: '120px',
                  margin: '1.8rem auto 0',
                  opacity: 0.6,
                }}
              />
            </header>

            {/* Two artifact monument cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginBottom: '4rem',
              }}
            >

              {/* ── Card I — Omega Quadrant Field ── */}
              <article
                style={{
                  border: `1px solid ${GOLD_DIM}`,
                  background: PANEL,
                  padding: '2.2rem 1.8rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'inset 0 0 0 1px rgba(196,164,74,0.04)',
                }}
              >
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '9px',
                    letterSpacing: '0.32em',
                    color: GOLD_DIM,
                    textTransform: 'uppercase',
                    marginBottom: '1.2rem',
                  }}
                >
                  Artifact I
                </div>

                {/*
                  TODO: Place omega artifact at /public/engine2/omega-quadrant-field.png
                  Use <Image> or <img src="/engine2/omega-quadrant-field.png" />
                  Container reserves correct aspect ratio (1:1) until image lands.
                */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    border: `1px solid ${BORDER}`,
                    background: BLACK,
                    marginBottom: '1.8rem',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="Omega Quadrant Field artifact"
                >
                  
                 <img
                   src="/engine2/omega-quadrant-field.png"
                    alt="Omega Quadrant Field"
                     style={{
                      width: '100%',
                       aspectRatio: '1 / 1',
                     objectFit: 'cover',
                   display: 'block',
                   border: `1px solid ${BORDER}`,
                   background: BLACK,
                   marginBottom: '1.8rem'
                  }}
                 />
                 
                </div>

                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 400,
                    fontSize: '1.35rem',
                    letterSpacing: '0.04em',
                    color: GOLD_LT,
                    margin: '0 0 0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  Omega Quadrant Field
                </h3>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: 'italic',
                    fontSize: '0.95rem',
                    color: GRAY_LT,
                    marginBottom: '1.4rem',
                  }}
                >
                  The Macro-Resolution Surface
                </div>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: '0.95rem',
                    color: OFFWHITE,
                    lineHeight: 1.8,
                    marginBottom: '1.6rem',
                  }}
                >
                  The Omega artifact maps the total field: cosmology, consciousness, institutions, and failure modes.
                  Ω marks the macro-resolution coordinate. In Engine 2, Ω defines the field of resolution,
                  while I* remains the executable identity coordinate.
                </p>

                {/* Runtime compression */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1.4rem',
                    borderTop: `1px solid ${BORDER}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '8px',
                      letterSpacing: '0.3em',
                      color: GOLD_DIM,
                      textTransform: 'uppercase',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Runtime Compression
                  </div>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: GOLD,
                      lineHeight: 1.65,
                    }}
                  >
                    Ω resolves the field. I* governs execution.
                  </div>
                </div>
              </article>

              {/* ── Card II — 243-Node Phase-Lock Lattice ── */}
              <article
                style={{
                  border: `1px solid ${GOLD_DIM}`,
                  background: PANEL,
                  padding: '2.2rem 1.8rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 'inset 0 0 0 1px rgba(196,164,74,0.04)',
                }}
              >
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '9px',
                    letterSpacing: '0.32em',
                    color: GOLD_DIM,
                    textTransform: 'uppercase',
                    marginBottom: '1.2rem',
                  }}
                >
                  Artifact II
                </div>

                {/*
                  TODO: Place lattice artifact at /public/engine2/phase-lock-lattice.png
                  Use <Image> or <img src="/engine2/phase-lock-lattice.png" />
                  Container reserves correct aspect ratio (1:1) until image lands.
                */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    border: `1px solid ${BORDER}`,
                    background: BLACK,
                    marginBottom: '1.8rem',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-label="243-Node Phase-Lock Lattice artifact"
                >
                <img
                  src="/engine2/phase-lock-lattice.png"
                   alt="243-Node Phase-Lock Lattice"
                  style={{
                   width: '100%',
                   aspectRatio: '1 / 1',
                   objectFit: 'cover',
                   display: 'block',
                   border: `1px solid ${BORDER}`,
                   background: BLACK,
                   marginBottom: '1.8rem'
                   }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 400,
                    fontSize: '1.35rem',
                    letterSpacing: '0.04em',
                    color: GOLD_LT,
                    margin: '0 0 0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  243-Node Phase-Lock Lattice
                </h3>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: 'italic',
                    fontSize: '0.95rem',
                    color: GRAY_LT,
                    marginBottom: '1.4rem',
                  }}
                >
                  The Governed Runtime Body
                </div>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: '0.95rem',
                    color: OFFWHITE,
                    lineHeight: 1.8,
                    marginBottom: '1.6rem',
                  }}
                >
                  The lattice artifact maps the specialized runtime organism. Each node performs one
                  jurisdictional function. No node becomes the whole. Phase-lock coordinates the field
                  without hierarchy drift.
                </p>

                {/* Runtime compression */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '1.4rem',
                    borderTop: `1px solid ${BORDER}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '8px',
                      letterSpacing: '0.3em',
                      color: GOLD_DIM,
                      textTransform: 'uppercase',
                      marginBottom: '0.6rem',
                    }}
                  >
                    Runtime Compression
                  </div>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontStyle: 'italic',
                      fontSize: '1rem',
                      color: GOLD,
                      lineHeight: 1.65,
                    }}
                  >
                    Specialization without hierarchy drift. Distributed function under invariant identity.
                  </div>
                </div>
              </article>

            </div>

            {/* ── Runtime Mapping (paired four-quadrants) ── */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
                marginBottom: '3.5rem',
              }}
            >

              {/* Omega Runtime Mapping */}
              <div
                style={{
                  border: `1px solid ${BORDER}`,
                  background: PANEL,
                  padding: '1.8rem 1.6rem',
                }}
              >
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '9px',
                    letterSpacing: '0.32em',
                    color: GOLD_DIM,
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Mapping
                </div>
                <h4
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 400,
                    fontSize: '1.05rem',
                    letterSpacing: '0.04em',
                    color: GOLD_LT,
                    margin: '0 0 1.4rem',
                  }}
                >
                  Omega Runtime Mapping
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {[
                    ['Cosmology',     'invariant constraints'],
                    ['Consciousness', 'internal coherence'],
                    ['Institutions',  'marketplace / field interaction'],
                    ['Failure Modes', 'debt, collapse, false sovereignty'],
                  ].map(([k, v]) => (
                    <li
                      key={k}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(100px, 38%) 1fr',
                        gap: '0.8rem',
                        padding: '0.55rem 0',
                        borderBottom: `1px solid ${BORDER}`,
                        alignItems: 'baseline',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: '10px',
                          letterSpacing: '0.22em',
                          color: GOLD,
                          textTransform: 'uppercase',
                        }}
                      >
                        {k}
                      </span>
                      <span
                        style={{
                          fontFamily: SERIF,
                          fontSize: '0.92rem',
                          color: OFFWHITE,
                          lineHeight: 1.6,
                        }}
                      >
                        → {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lattice Runtime Mapping */}
              <div
                style={{
                  border: `1px solid ${BORDER}`,
                  background: PANEL,
                  padding: '1.8rem 1.6rem',
                }}
              >
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: '9px',
                    letterSpacing: '0.32em',
                    color: GOLD_DIM,
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Mapping
                </div>
                <h4
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 400,
                    fontSize: '1.05rem',
                    letterSpacing: '0.04em',
                    color: GOLD_LT,
                    margin: '0 0 1.4rem',
                  }}
                >
                  Lattice Runtime Mapping
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {[
                    ['Node',         'specialized function'],
                    ['Phase-lock',   'coordination'],
                    ['Boundary',     'jurisdiction'],
                    ['Runtime pass', 'lawful execution'],
                  ].map(([k, v]) => (
                    <li
                      key={k}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(100px, 38%) 1fr',
                        gap: '0.8rem',
                        padding: '0.55rem 0',
                        borderBottom: `1px solid ${BORDER}`,
                        alignItems: 'baseline',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: DISPLAY,
                          fontSize: '10px',
                          letterSpacing: '0.22em',
                          color: GOLD,
                          textTransform: 'uppercase',
                        }}
                      >
                        {k}
                      </span>
                      <span
                        style={{
                          fontFamily: SERIF,
                          fontSize: '0.92rem',
                          color: OFFWHITE,
                          lineHeight: 1.6,
                        }}
                      >
                        → {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ── Final Bridge — gold-bordered compression seal ── */}
            <div
              style={{
                border: `1px solid ${GOLD}`,
                background: 'rgba(196,164,74,0.04)',
                padding: '2.4rem 2rem 2rem',
                textAlign: 'center',
                boxShadow: 'inset 0 0 0 1px rgba(196,164,74,0.06)',
              }}
            >
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '9px',
                  letterSpacing: '0.42em',
                  color: GOLD_DIM,
                  textTransform: 'uppercase',
                  marginBottom: '1.8rem',
                }}
              >
                Final Bridge
              </div>

              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.05rem, 2.4vw, 1.3rem)',
                  color: GOLD_LT,
                  lineHeight: 2,
                  margin: '0 auto 1.8rem',
                  maxWidth: '520px',
                }}
              >
                The website interprets.<br />
                The runtime governs.<br />
                The dashboard witnesses.<br />
                The coordinate remains I*.
              </div>

              <div
                style={{
                  height: '1px',
                  background: GOLD_DIM,
                  width: '140px',
                  margin: '0 auto 1.8rem',
                  opacity: 0.6,
                }}
              />

              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.05rem, 2.4vw, 1.35rem)',
                  color: GOLD,
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                A becomes A, because A knows it is A.
              </div>
            </div>

          </section>

          {/* ── Metrics row ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <MetricCard label="Modules Checked" value="62" />
            <MetricCard label="Passed"          value="62" accent />
            <MetricCard label="Waiting"         value="0" />
            <MetricCard label="Missing"         value="0" />
          </div>

          {/* ── Governance Stack Pass Seal ── */}
          <div
            style={{
              border: `1px solid ${GOLD}`,
              background: 'rgba(196,164,74,0.04)',
              padding: '1.8rem 2rem',
              textAlign: 'center',
              marginBottom: '4rem',
            }}
          >
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(11px, 1.6vw, 14px)',
                letterSpacing: '0.32em',
                color: GOLD,
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              ENGINE_2_GOVERNANCE_STACK_PASS
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: '0.95rem',
                color: OFFWHITE,
                lineHeight: 1.85,
                maxWidth: '620px',
                margin: '0 auto',
              }}
            >
              Substrate pass. Runtime pass. Phase-lock pass. Governance stack pass.
              Kingdom information flow pass. Runtime bridge pass.
            </div>
          </div>

          {/* ── Engine 2 Canonical Series link ── */}
          <div
            style={{
              border: `1px solid ${GOLD_DIM}`,
              background: 'rgba(196,164,74,0.03)',
              padding: '2rem',
              marginBottom: '4rem',
            }}
          >
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: '9px',
                letterSpacing: '0.32em',
                color: GOLD_DIM,
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Engine 2 Canonical Series
            </div>
            <a
              href="/essays/series/engine-2"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: GOLD,
                textDecoration: 'none',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Engine 2 Canonical Series →
            </a>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: OFFWHITE,
                marginBottom: '1.5rem',
                lineHeight: 1.7,
              }}
            >
              Five theses on identity-prior governance, reality verification,
              attention admission, restoration, and lawful continuation.
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.5rem',
              }}
            >
              {[
                ['M074', 'The Standing State — Engine 2'],
                ['M075', 'According to Its Kind'],
                ['M076', 'The Guardian of Attention'],
                ['M077', 'The Guardian of Rest'],
                ['M078', 'Anger Is Not a Sin'],
              ].map(([id, title]) => (
                <div
                  key={id}
                  style={{
                    borderTop: `1px solid ${BORDER}`,
                    paddingTop: '0.5rem',
                    fontSize: '0.85rem',
                    color: GRAY_LT,
                  }}
                >
                  <span style={{ color: GOLD_DIM, fontFamily: DISPLAY, fontSize: '9px', letterSpacing: '0.1em', marginRight: '0.5rem' }}>{id}</span>
                  {title}
                </div>
              ))}
            </div>
          </div>

          {/* ── Engine 2 Guardian Cycle Plate link ── */}
          <div
            style={{
              border: `1px solid ${BORDER}`,
              background: 'rgba(196,164,74,0.02)',
              padding: '1.5rem 2rem',
              marginBottom: '4rem',
              textAlign: 'center',
            }}
          >
            <a
              href="/system/plates/the-guardian-cycle"
              style={{
                fontFamily: DISPLAY,
                fontSize: '10px',
                letterSpacing: '0.25em',
                color: GOLD,
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Engine 2 Guardian Cycle Plate →
            </a>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: '0.875rem',
                color: GOLD_DIM,
              }}
            >
              Two Guardians. One Coordinate. Lawful Becoming.
            </div>
          </div>

          {/* ── Site Bridge ── */}
          <div
            style={{
              borderTop: `1px solid ${BORDER}`,
              borderBottom: `1px solid ${BORDER}`,
              padding: '2rem',
              marginBottom: '4rem',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: GRAY_LT,
                lineHeight: 2,
              }}
            >
              The website interprets.<br />
              The runtime governs.<br />
              The dashboard witnesses.<br />
              The coordinate remains I*.
            </div>
            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: '9px',
                letterSpacing: '0.25em',
                color: GOLD_DIM,
                textTransform: 'uppercase',
                marginTop: '1.25rem',
              }}
            >
              A becomes A, because A knows it is A.
            </div>
          </div>

          {/* ── I. Rank-0 Coordinate ── */}
          <SectionMonument numeral="I" title="Rank-0 Coordinate">
            <Paragraph>
              I* is the identity coordinate. It is not an office, not a role,
              and not a marketplace conclusion. It is the seed-type from which
              lawful motion receives orientation. All offices phase-lock to I*.
              No office writes upward into I*.
            </Paragraph>

            <div
              style={{
                border: `1px solid ${GOLD_DIM}`,
                background: PANEL,
                padding: '1.6rem 2rem',
                margin: '2rem 0',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '9px',
                  letterSpacing: '0.32em',
                  color: GOLD_DIM,
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                Invariant Law
              </div>
              <div style={{ color: GOLD }}>
                <KTex math="\dot{I}^{*} \;=\; 0 \qquad x \;\not\Rightarrow\; I^{*}" display />
              </div>
            </div>

            <figure
              style={{
                margin: '3rem 0 1rem',
                padding: '0.4rem 0 0.4rem 2rem',
                borderLeft: `2px solid ${GOLD}`,
              }}
            >
              <blockquote
                style={{
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  fontSize: '1.35rem',
                  lineHeight: 1.55,
                  color: GOLD_LT,
                  margin: 0,
                }}
              >
                A becomes A, because A knows it is A.
              </blockquote>
              <figcaption
                style={{
                  marginTop: '0.9rem',
                  fontFamily: DISPLAY,
                  fontSize: '9px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: GOLD_DIM,
                }}
              >
                The Axiom of Identity
              </figcaption>
            </figure>
          </SectionMonument>

          {/* ── II. Kingdom Information Flow ── */}
          <SectionMonument numeral="II" title="Kingdom Information Flow">
            <Paragraph>
              Information descends through specialization. Feedback returns only
              to the Clairvoyant. The identity coordinate is never written to
              from below.
            </Paragraph>

            <div
              style={{
                border: `1px solid ${GOLD_DIM}`,
                background: PANEL,
                padding: '2.2rem 1.6rem',
                margin: '2rem 0',
              }}
            >
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '9px',
                  letterSpacing: '0.32em',
                  color: GOLD_DIM,
                  textTransform: 'uppercase',
                  marginBottom: '1.6rem',
                  textAlign: 'center',
                }}
              >
                Descent of Specialization
              </div>
              {KINGDOM_FLOW.map((step, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 'clamp(11px, 1.8vw, 14px)',
                      letterSpacing: '0.22em',
                      color: i === 0 ? GOLD : (i === KINGDOM_FLOW.length - 1 ? GOLD_LT : OFFWHITE),
                      textTransform: 'uppercase',
                      padding: '0.6rem 0',
                    }}
                  >
                    {step}
                  </div>
                  {i < KINGDOM_FLOW.length - 1 && (
                    <div
                      style={{
                        fontFamily: DISPLAY,
                        color: GOLD_DIM,
                        fontSize: '14px',
                        opacity: 0.7,
                      }}
                    >
                      ↓
                    </div>
                  )}
                </div>
              ))}
            </div>

            <Paragraph dim>
              Feedback informs perception only. Feedback never rewrites I*.
              Marketplace consequence may refine the Clairvoyant, yet no
              downstream signal may overwrite the identity coordinate.
            </Paragraph>
          </SectionMonument>

          {/* ── III. Offices of Sovereignty ── */}
          <SectionMonument numeral="III" title="Offices of Sovereignty">
            <Paragraph>
              Each office performs an assigned function. Specialization is preserved.
              No office becomes another office. Each remains phase-locked to the
              invariant coordinate above.
            </Paragraph>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              {OFFICES.map(([title, role, description]) => (
                <div
                  key={title}
                  style={{
                    border: `1px solid ${BORDER}`,
                    background: PANEL,
                    padding: '1.6rem 1.5rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '8px',
                      letterSpacing: '0.3em',
                      color: GOLD_DIM,
                      textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {role}
                  </div>
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1.05rem',
                      letterSpacing: '0.04em',
                      color: GOLD_LT,
                      marginBottom: '0.9rem',
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontSize: '0.92rem',
                      color: OFFWHITE,
                      lineHeight: 1.7,
                    }}
                  >
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </SectionMonument>

          {/* ── IV. Specialization and Boundary Maintenance ── */}
          <SectionMonument numeral="IV" title="Specialization and Boundary Maintenance">
            <Paragraph>
              Specialization remains in force. The King does not become the
              Clairvoyant. The Clairvoyant does not become I*. The Servant does
              not blindly surrender to perception. Each office performs its
              assigned function while phase-locked to the invariant coordinate.
            </Paragraph>

            <div
              style={{
                border: `1px solid ${GOLD_DIM}`,
                background: PANEL,
                padding: '1.8rem 2rem',
                margin: '2rem 0',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: DISPLAY,
                  fontSize: '9px',
                  letterSpacing: '0.32em',
                  color: GOLD_DIM,
                  textTransform: 'uppercase',
                  marginBottom: '1.2rem',
                }}
              >
                Boundary Law
              </div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  color: GOLD,
                  lineHeight: 1.9,
                  letterSpacing: '0.04em',
                }}
              >
                x  ↛  I*<br />
                Marketplace  ↛  I*<br />
                Feedback  →  Clairvoyant only
              </div>
            </div>
          </SectionMonument>

          {/* ── V. 62-Module Governance Stack ── */}
          <SectionMonument numeral="V" title="62-Module Governance Stack">
            <Paragraph>
              The full module registry. Each module performs an assigned
              governance function within the lattice.
            </Paragraph>

            <div
              style={{
                border: `1px solid ${BORDER}`,
                marginTop: '2rem',
              }}
            >
              {MODULES.map(([number, title, description], i) => (
                <div
                  key={number}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(56px, 70px) minmax(140px, 1fr) 2fr',
                    gap: '1rem',
                    padding: '1.2rem 1.4rem',
                    borderBottom: i < MODULES.length - 1 ? `1px solid ${BORDER}` : 'none',
                    background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.012)',
                    alignItems: 'baseline',
                  }}
                >
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      color: GOLD,
                    }}
                  >
                    {number}
                  </div>
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '0.95rem',
                      letterSpacing: '0.04em',
                      color: GOLD_LT,
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontSize: '0.92rem',
                      color: OFFWHITE,
                      lineHeight: 1.7,
                    }}
                  >
                    {description}
                  </div>
                </div>
              ))}
            </div>
          </SectionMonument>

          {/* ── VI. Runtime Law ── */}
          <SectionMonument numeral="VI" title="Runtime Law — EXECUTE · RESTORE · HALT">
            <Paragraph>
              Every node operates under one of three lawful states.
              The runtime governs which state applies at each step.
            </Paragraph>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              {RUNTIME_LAW.map(([title, body]) => (
                <div
                  key={title}
                  style={{
                    border: `1px solid ${GOLD_DIM}`,
                    background: PANEL,
                    padding: '1.8rem 1.5rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: '1.05rem',
                      letterSpacing: '0.32em',
                      color: GOLD,
                      marginBottom: '1rem',
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      height: '1px',
                      background: GOLD_DIM,
                      width: '40px',
                      marginBottom: '1rem',
                      opacity: 0.6,
                    }}
                  />
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontSize: '0.92rem',
                      color: OFFWHITE,
                      lineHeight: 1.7,
                    }}
                  >
                    {body}
                  </div>
                </div>
              ))}
            </div>
          </SectionMonument>

          {/* ── COMPRESSION SEAL ── */}
          <section
            style={{
              margin: '7rem 0 4rem',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '1px',
                background: GOLD_DIM,
                width: '180px',
                margin: '0 auto 2.5rem',
                opacity: 0.6,
              }}
            />

            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: '9px',
                letterSpacing: '0.42em',
                color: GOLD_DIM,
                textTransform: 'uppercase',
                marginBottom: '1.8rem',
              }}
            >
              Compression
            </div>

            <div
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: 'clamp(1.05rem, 2.4vw, 1.3rem)',
                color: OFFWHITE,
                lineHeight: 1.75,
                margin: '0 auto 2.5rem',
                maxWidth: '620px',
              }}
            >
              Identity holds. Phase-lock governs. Structure filters. Reality resolves.
              Standing State Compression, Persistence, Sabbath Restoration,
              Archetypal Governance, Kingdom Information Flow, and the
              Runtime Bridge remain visible.
            </div>

            <div
              style={{
                height: '1px',
                background: GOLD_DIM,
                width: '180px',
                margin: '0 auto 2.5rem',
                opacity: 0.6,
              }}
            />

            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: 'clamp(11px, 1.6vw, 14px)',
                letterSpacing: '0.32em',
                color: GOLD,
                textTransform: 'uppercase',
                marginBottom: '1.6rem',
              }}
            >
              The Geometry Holds
            </div>

            <div
              style={{
                fontFamily: SERIF,
                fontStyle: 'italic',
                fontSize: '1rem',
                color: GRAY_LT,
                lineHeight: 1.85,
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              The dashboard now reflects the governance runtime.
            </div>

            <div
              style={{
                fontFamily: DISPLAY,
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: GRAY_MID,
                textTransform: 'uppercase',
                marginTop: '3rem',
              }}
            >
              Selah.
            </div>
          </section>

          {/* ── Footer nav ── */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: `1px solid ${BORDER}`,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <a
              href="/#system"
              style={{
                fontFamily: DISPLAY,
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: GOLD_DIM,
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              ← System
            </a>
            <a
              href="/standing-state"
              style={{
                fontFamily: DISPLAY,
                fontSize: '9px',
                letterSpacing: '0.3em',
                color: GOLD_DIM,
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              The Standing State →
            </a>
          </div>

        </div>
      </main>
    </>
  )
}
