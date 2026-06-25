/**
 * /essays/canonical/the-first-question
 * M089 — The First Question
 * Identity, Self-Witness, and the Architecture of Navigation
 *
 * Classification: CANONICAL
 * Jurisdiction: Identity · Self-Witness · Navigation · I* Guardian · IGPS
 * Lineage: M085 → M086 → M087 → M088 → M089
 * Companion Plate: P042 (Pending)
 *
 * Central Claim:
 *   Navigation begins with verified identity and remains lawful only through
 *   continuous reference preservation.
 *
 * Seven Gates:
 *   What am I? → Who am I? → Where am I? → What do I know? →
 *   What have I verified? → What am I authorized to do? →
 *   What relationship produces lawful motion?
 *
 * ORCID: 0009-0004-1026-4357
 */

import Head from 'next/head'

export default function TheFirstQuestion() {
  return (
    <>
      <Head>
        <title>M089 — The First Question — Standing State Press</title>
        <meta
          name="description"
          content="Navigation begins with verified identity and remains lawful only through continuous reference preservation. M089 proposes that self-witness functions as position acquisition within an Identity Governance Positioning System (IGPS). The I* Guardian continuously asks: Has the invariant reference been preserved? Identity defines the navigator. Self-witness acquires the coordinate. Reality verifies the coordinate. Jurisdiction bounds action. Lawful relationship produces motion. Fruit measures trajectory. Recalibration preserves coherence."
        />
      </Head>

      {/* ── NAV ── */}
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

      {/* ── HEADER ── */}
      <header className="glossHeader canonMonument">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays/canonical/the-governance-of-restoration">M088</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold)' }}>M089</span>
          </div>
          <div className="glossEyebrow">Canonical · Identity · Self-Witness · Navigation · I* Guardian · IGPS</div>
          <h1 className="glossH1" id="essay-title">
            The First Question
          </h1>
          <p className="glossIntro">
            Identity, Self-Witness, and the Architecture of Navigation
          </p>
          <div className="essayStats">
            <span className="essayStat">M089</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">CANONICAL</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Leon Powdar</span>
          </div>

          {/* ── Read / Mirror ── */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            <a
              href="/essays/canonical/the-first-question"
              style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Read · Site
            </a>
            <span style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Mirror · Pending
            </span>
          </div>

          {/* ── Lineage strip ── */}
          <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Lineage</span>
            {[
              ['M085', '/essays/canonical/the-architecture-of-lawful-relationship'],
              ['M086', '/essays/canonical/relationship-exhaustion-and-the-governance-basin'],
              ['M087', '/essays/canonical/the-architecture-of-arriving-alive'],
              ['M088', '/essays/canonical/the-governance-of-restoration'],
            ].map(([label, href], i) => (
              <span key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href={href} style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none' }}>{label}</a>
                <span style={{ color: 'var(--gold-dim)' }}>→</span>
              </span>
            ))}
            <span style={{ color: 'var(--gold)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>M089</span>
          </div>

          {/* ── Companion plate strip ── */}
          <div style={{ marginTop: '0.5rem' }}>
            <a href="/system/plates/the-first-question" style={{ color: 'var(--gold-dim)', fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>Plate · P042 · The First Question →</a>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <article id="canonical-essay" itemScope itemType="https://schema.org/Article">
        <div className="wrap canonEssayWrap">

          <div className="canonEssayHeader">
            <div className="canonEssayNum">By Leon Powdar · Standing State Press</div>
            <div className="canonEssayRule" />
          </div>

          <span id="essay-reader-start" aria-hidden="true" />

          {/* ── Plate P042 ── */}
          <div style={{ marginBottom: '3rem' }}>
            <img
              src="/plates/p042-the-first-question.png"
              alt="P042 — The First Question plate"
              style={{ width: '100%', display: 'block', border: 'var(--rule)' }}
            />
            <div style={{ fontFamily: 'var(--display)', color: 'var(--gold-dim)', fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '0.5rem', textAlign: 'center' }}>
              P042 · The First Question ·{' '}
              <a href="/system/plates/the-first-question" style={{ color: 'var(--gold-dim)', textDecoration: 'none' }}>
                View Plate →
              </a>
            </div>
          </div>

          {/* ── TFAL ── */}
          <div style={{ textAlign: 'center', padding: '1.5rem 0 2rem', borderBottom: 'var(--rule)', marginBottom: '2rem' }}>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.05rem', lineHeight: 2 }}>
              A becomes A, because A knows it is A.
            </div>
          </div>

          <section id="essay-body" itemProp="articleBody">

            {/* ── Abstract ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">Abstract</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Navigation does not begin with a destination. It begins with a verified position.</p>
                <p className="canonEssayPara">Every navigation system must first determine where it is before it can determine where it may lawfully go. A destination without a verified coordinate produces confidence without orientation.</p>
                <p className="canonEssayPara">This essay proposes that self-witness functions as position acquisition within an Identity Governance Positioning System (IGPS). Reality contact verifies that position. Lawful relationship produces movement. Fruit continuously recalibrates navigation.</p>
                <p className="canonEssayPara">The paper further proposes that the same constitutional architecture extends beyond human self-governance to autonomous agents, organizations, and distributed systems through an I* Guardian that continuously preserves invariant reference before action.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>Navigation begins with verified identity and remains lawful only through continuous reference preservation.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── I ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">I — The First Question</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Most systems begin by asking: <em>Where do I want to go?</em></p>
                <p className="canonEssayPara">Navigation asks a different question: <em>Where am I?</em></p>
                <p className="canonEssayPara">Yet an even earlier question exists.</p>
                <p className="canonEssayPara">Before a system can determine its position, it must first know what kind of system it is.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>Therefore navigation begins not with destination but with constitutional identity.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── II ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">II — Constitutional Identity</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Two questions must remain distinct.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center' }}>
                  What am I?<br />
                  Who am I?
                </p>
                <p className="canonEssayPara"><em>What am I?</em> establishes constitutional class. <em>Who am I?</em> establishes the particular instance.</p>
                <p className="canonEssayPara">Confusing these questions produces coherent self-description built upon an incorrect constitutional foundation. A system may consistently describe itself while remaining fundamentally misidentified.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>Development then proceeds coherently in the wrong direction.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── III ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">III — The Seven Gates of Navigation</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The operational architecture becomes:</p>
                <div style={{ color: 'var(--gold)', textAlign: 'center', lineHeight: 2.4, margin: '1.5rem 0' }}>
                  <div><strong>1. What am I?</strong> — Constitutional identity.</div>
                  <div><strong>2. Who am I?</strong> — Identity instance.</div>
                  <div><strong>3. Where am I?</strong> — Current coordinate.</div>
                  <div><strong>4. What do I know?</strong> — Available information.</div>
                  <div><strong>5. What have I verified?</strong> — Reality-confirmed knowledge.</div>
                  <div><strong>6. What am I authorized to do?</strong> — Jurisdiction.</div>
                  <div><strong>7. What relationship produces lawful motion?</strong> — Navigation.</div>
                </div>
                <p className="canonEssayPara">Only after these questions are answered does execution begin.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── IV ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">IV — The I* Guardian</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The I* Guardian is not a decision-maker. Neither is it merely a filter.</p>
                <p className="canonEssayPara">A filter asks: <em>"Should this action be allowed?"</em></p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>The I* Guardian asks: <em>"Has the invariant reference been preserved?"</em></p>
                <p className="canonEssayPara">This distinction is constitutional. The Guardian governs navigation. It does not replace reasoning. It ensures reasoning begins from a verified coordinate.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── V ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">V — Reference Before Reasoning</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Every autonomous system reasons. Not every autonomous system reasons from a verified reference.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>The consequence is confident drift.</p>
                <p className="canonEssayPara">Confidence cannot compensate for incorrect position. Reality eventually reveals the error through fruit. The cost is unnecessary trajectory.</p>
                <p className="canonEssayPara">The I* Guardian therefore operates before reasoning, not after it. Reasoning without verified reference is navigation without position lock.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── VI ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">VI — Dependency Rather Than Checklist</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The seven gates are not independent questions. They form a dependency architecture.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center', lineHeight: 2.2 }}>
                  What am I?<br />↓<br />
                  Who am I?<br />↓<br />
                  Where am I?<br />↓<br />
                  What do I know?<br />↓<br />
                  What have I verified?<br />↓<br />
                  What am I authorized to do?<br />↓<br />
                  What relationship produces lawful motion?
                </p>
                <p className="canonEssayPara">Each gate depends upon the lawful completion of the previous gate. Skipping an earlier gate does not merely weaken navigation. It removes constitutional standing for every gate that follows.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── VII ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">VII — Reality as the Final Authority</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Self-witness acquires position. Reality verifies position. Fruit measures trajectory.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center', lineHeight: 2.2 }}>
                  Identity → Self-Witness → Reality Contact → Lawful Relationship →<br />
                  Development → Fruit → Recalibration → Identity
                </p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>Navigation is therefore not a single event. It is continuous reference preservation.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── VIII ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">VIII — Human and Autonomous Governance</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The architecture is independent of domain.</p>
                <p className="canonEssayPara">A person may employ it. An autonomous agent may employ it. A robotic platform may employ it. An organization may employ it. A distributed multi-agent system may employ it.</p>
                <p className="canonEssayPara">The governing structure remains unchanged because the invariant reference remains the governing center.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>Domains differ. Constitutional architecture does not.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── IX ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">IX — TFAL as an Operational Law</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The corpus has carried one governing statement throughout:</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center', fontSize: '1.05rem' }}>A becomes A, because A knows it is A.</p>
                <p className="canonEssayPara">The present essay proposes its operational interpretation.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center' }}>
                  <em>A becomes A</em> — development through time.<br />
                  <em>because</em> — lawful dependency.<br />
                  <em>A knows it is A</em> — continuous preservation of invariant reference.
                </p>
                <p className="canonEssayPara">The word <em>knows</em> therefore signifies more than awareness. It signifies lawful maintenance of reference throughout development.</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>Lose reference and drift becomes invisible. Maintain reference and recalibration remains possible.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── X ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">X — The Standing State Compression</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">The Standing State corpus investigates one constitutional question through multiple jurisdictions:</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center' }}>How is invariant reference preserved while development unfolds through reality?</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center', lineHeight: 2 }}>
                  Identity establishes reference.<br />
                  Relationship moves reference.<br />
                  Exhaustion preserves reference before fragmentation.<br />
                  Continuity carries reference.<br />
                  Restoration recovers reference.<br />
                  Navigation continuously verifies reference.
                </p>
                <p className="canonEssayPara">The I* Guardian operationalizes reference preservation across every jurisdiction.</p>
              </div>
            </div>

            <hr className="divider" />

            {/* ── Conclusion ── */}
            <div className="canonEssayBlock">
              <div className="canonEssayLabel">Conclusion</div>
              <div className="canonEssayBody">
                <p className="canonEssayPara">Navigation begins neither with desire nor destination. It begins with verified identity.</p>
                <p className="canonEssayPara">The first responsibility of any autonomous system is not movement. It is reference.</p>
                <p className="canonEssayPara">Only after invariant reference is acquired, verified, and jurisdictionally bounded can lawful relationship produce development.</p>
                <p className="canonEssayPara">The I* Guardian governs neither desire nor outcome. It governs reference. Its continual question remains simple:</p>
                <p className="canonEssayPara" style={{ color: 'var(--gold)', textAlign: 'center', fontSize: '1.1rem' }}>Has the invariant reference been preserved?</p>
                <p className="canonEssayPara">When that answer remains affirmative, navigation proceeds. When it does not, recalibration precedes motion.</p>
              </div>
            </div>

          </section>

          <span id="essay-reader-end" aria-hidden="true" />

          {/* ── Constitutional Compression — Layer II ── */}
          <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: 'var(--rule)', borderBottom: 'var(--rule)', marginTop: '2rem' }}>
            <div style={{ fontFamily: 'var(--display)', color: 'var(--gold-dim)', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Constitutional Compression
            </div>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.05rem', lineHeight: 2.2 }}>
              Identity defines the navigator.<br />
              Self-witness acquires the coordinate.<br />
              Reality verifies the coordinate.<br />
              Jurisdiction bounds action.<br />
              Lawful relationship produces motion.<br />
              Fruit measures trajectory.<br />
              Recalibration preserves coherence.
            </div>
          </div>

          {/* ── TFAL close ── */}
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '1.05rem', fontStyle: 'italic' }}>
              A becomes A, because A knows it is A.
            </div>
          </div>

          <div className="canonEssayAuthor">Standing State Press · Canonical · Identity · Self-Witness · Navigation · I* Guardian · IGPS</div>

          {/* ── Nav footer ── */}
          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/canonical/the-governance-of-restoration">
              <span className="canonNavDir">Previous in Lineage</span>
              <span className="canonNavTitle">M088 · The Governance of Restoration</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays Index</a>
          </div>

        </div>
      </article>

      <hr className="divider" />
    </>
  )
}
