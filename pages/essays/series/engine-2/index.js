/**
 * /essays/series/engine-2
 * Engine 2 Canonical Series Landing Page
 *
 * Five-essay series on identity-prior governance, reality verification,
 * restoration, and lawful becoming.
 *
 * Series IDs: M074–M078
 */

import Head from 'next/head'

const SERIES = [
  {
    num: 'I',
    id: 'M073',
    title: 'The Geometry of Memory, Projection, and Reality',
    subtitle: 'A Thesis on Navigation, Verification, and the Architecture of Wisdom',
    role: 'Memory geometry',
    question: 'How does the living system navigate reality without losing its map?',
    compression: 'Seed forecasts fruit. Fruit reveals seed. Reality audits the loop.',
    href: '/essays/canonical/the-geometry-of-memory-projection-and-reality',
  },
  {
    num: 'II',
    id: 'M074',
    title: 'The Standing State — Engine 2',
    subtitle: 'A Mechanical Architecture of Invariance, Correction, and Lawful Becoming',
    role: 'Constitutional document',
    question: 'What is Engine 2?',
    compression: 'Identity preserves. Reality corrects. Governance allocates. Restoration protects. Development emerges.',
    href: '/essays/canonical/the-standing-state-engine-2',
  },
  {
    num: 'III',
    id: 'M075',
    title: 'According to Its Kind',
    subtitle: 'A Thesis on Identity Coordinates, Interpretation, and Reality Verification',
    role: 'Identity doctrine',
    question: 'How does identity develop without drift?',
    compression: 'Fruit may correct interpretation. Fruit may not redefine identity.',
    href: '/essays/canonical/according-to-its-kind',
  },
  {
    num: 'IV',
    id: 'M076',
    title: 'The Guardian of Attention',
    subtitle: 'Engine 2 and the Governance of Consciousness',
    role: 'Admission governance',
    question: 'What enters consciousness?',
    compression: 'Identity precedes admission.',
    href: '/essays/canonical/the-guardian-of-attention',
  },
  {
    num: 'V',
    id: 'M077',
    title: 'The Guardian of Rest',
    subtitle: 'Engine 2 and the Sabbath of Restoration',
    role: 'Restoration governance',
    question: 'When is continuation lawful?',
    compression: 'Restoration precedes expansion.',
    href: '/essays/canonical/the-guardian-of-rest',
  },
  {
    num: 'VI',
    id: 'M078',
    title: 'Anger Is Not a Sin',
    subtitle: 'An Engine 2 Thesis on the I* Guardian, Qualia, Restoration, and Lawful Continuation',
    role: 'Organism doctrine',
    question: 'What does governance failure feel like from inside the organism?',
    compression: 'Anger is a jurisdiction failure. Restoration is the correction.',
    href: '/essays/canonical/anger-is-not-a-sin',
  },
  {
    num: 'VII',
    id: 'M079',
    title: 'The Architecture of Identity Phase Space',
    subtitle: 'A Synthesis of Memory, Attention, Restoration, Reality, and Lawful Becoming',
    role: 'Series closure · Synthesis',
    question: 'What is the landscape within which Engine 2 operates?',
    compression: 'M073–M078 establish the components. M079 establishes the landscape.',
    href: '/essays/canonical/the-architecture-of-identity-phase-space',
  },
]

export default function Engine2SeriesIndex() {
  return (
    <>
      <Head>
        <title>Engine 2 Canonical Series — Standing State Press</title>
        <meta
          name="description"
          content="Five essays on identity-prior governance, reality verification, restoration, and lawful becoming. Identity remains. Reality teaches. Governance protects. Restoration preserves. Development emerges."
        />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/doctrine">Doctrine</a></li>
            <li><a href="/essays" style={{ color: 'var(--gold)' }}>Essays</a></li>
            <li><a href="/sources">Sources</a></li>
          </ul>
        </div>
      </nav>

      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Engine 2 Series</span>
          </div>
          <div className="glossEyebrow">Canonical Series · M073–M079 · Engine 2 Doctrine</div>
          <h1 className="glossH1">Engine 2 Canonical Series</h1>
          <p className="glossIntro">
            Seven essays on memory geometry, identity-prior governance, reality verification, attention admission, restoration, disturbance, and lawful navigation.
          </p>
        </div>
      </header>

      <hr className="divider" />

      <main>
        <div className="wrap" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>

          {/* Hero plate */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <img
              src="/engine2/guardian-cycle-plate.png"
              alt="Engine 2 — The Guardian Cycle: Two Guardians, One Coordinate, Lawful Becoming"
              style={{ maxWidth: '100%', width: '720px', borderRadius: '8px', opacity: 0.95 }}
            />
            <div style={{ color: 'var(--gold-dim)', fontStyle: 'italic', marginTop: '0.75rem', fontSize: '0.9rem' }}>
              Two Guardians. One Coordinate. Lawful Becoming.
            </div>
          </div>

          {/* Series introduction */}
          <div className="plateDetailBlock" style={{ marginBottom: '3rem' }}>
            <div className="plateDetailBlockLabel">Series Introduction</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Engine 2 is a developmental architecture in which identity remains invariant while
                reality continuously provides correction. These seven essays establish the architecture
                in sequence: the geometry of memory and projection, what Engine 2 is, how identity
                develops without drift, what governs admission to consciousness, what governs lawful
                continuation, what governance failure looks and feels like from inside the organism,
                and finally the unified landscape within which all of these operate.
              </p>
              <p className="canonEssayPara">
                M073 opens the series by establishing how the living system navigates reality.
                M074–M078 establish the governing components. M079 closes the series by establishing
                the landscape. The essays are best read in order.
              </p>
            </div>
          </div>

          {/* Architecture summary */}
          <div className="plateDetailBlock" style={{ marginBottom: '3rem' }}>
            <div className="plateDetailBlockLabel">Core Architecture</div>
            <div className="glossVarLogicWrap">
              {[
                ['Architecture of Being', 'Differentiation → Identity (I*) → Self-Witness → Qualia → Attention → Interpretation → Structure → Reality'],
                ['Architecture of Becoming', 'Identity → Projection → Fruit → Correction → Restoration → Development'],
                ['Admissibility Chain', 'Q(t) > Q₁ → Attention admissible → Development possible'],
                ['Correction Ladder', 'EXECUTE → PROJECTION UPDATE → MAP UPDATE → RESTORE → HALT'],
              ].map(([label, value], i, arr) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', padding: '0.9rem 1.2rem', borderBottom: i < arr.length - 1 ? 'var(--rule)' : 'none' }}>
                  <span style={{ fontFamily: 'var(--display)', color: 'var(--gold)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</span>
                  <span style={{ color: 'var(--offwhite)', fontSize: '0.9rem' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Essay cards */}
          <div style={{ marginBottom: '3rem' }}>
            {SERIES.map((essay, i) => (
              <div key={essay.id} className="plateDetailBlock" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontFamily: 'var(--display)', color: 'var(--gold)', fontSize: '10px', letterSpacing: '0.2em' }}>{essay.num} of VII</span>
                  <span style={{ color: 'var(--gold-dim)', fontSize: '0.85rem' }}>{essay.id}</span>
                  <span style={{ color: 'var(--gold-dim)', fontSize: '0.8rem', fontStyle: 'italic' }}>{essay.role}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', color: 'var(--offwhite)', fontSize: '1.2rem', fontWeight: 'normal', margin: '0 0 0.25rem 0' }}>
                  <a href={essay.href} style={{ color: 'var(--offwhite)', textDecoration: 'none' }}>{essay.title}</a>
                </h2>
                <div style={{ color: 'var(--gold-dim)', fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '0.75rem' }}>{essay.subtitle}</div>
                <div style={{ color: 'var(--gray-lt)', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', marginRight: '0.5rem' }}>Question</span>
                  {essay.question}
                </div>
                <div style={{ color: 'var(--gold)', fontStyle: 'italic', fontSize: '0.875rem', marginBottom: '1rem' }}>{essay.compression}</div>
                <a
                  href={essay.href}
                  style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '1px' }}
                >
                  Read Essay {essay.num}
                </a>
              </div>
            ))}
          </div>

          {/* Series compression */}
          <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: 'var(--rule)', borderBottom: 'var(--rule)' }}>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.1rem', lineHeight: 2 }}>
              Identity Remains · Reality Teaches · Governance Protects · Restoration Preserves · Development Emerges
            </div>
            <div style={{ color: 'var(--gold-dim)', fontStyle: 'italic', marginTop: '1.5rem', fontSize: '0.9rem' }}>
              A becomes A, because A knows it is A.
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/essays" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>← Essays Index</a>
            <span style={{ margin: '0 1rem', color: 'var(--border)' }}>·</span>
            <a href="/system/engine2" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Engine 2 System →</a>
          </div>

        </div>
      </main>

      <hr className="divider" />
    </>
  )
}
