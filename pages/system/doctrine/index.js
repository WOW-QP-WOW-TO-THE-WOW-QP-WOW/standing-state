import Head from 'next/head'

const DOCTRINE_ITEMS = [
  {
    id: 'D001',
    slug: 'ethics-of-invariance',
    type: 'Execution Doctrine',
    title: 'Ethics of Invariance',
    subtitle: 'Executive Summary · Standing State Architecture Packet',
    note: 'A structural standard for safe autonomous systems: explicit disturbance, invariant safety parameters, forward invariance enforcement, and deterministic halt.',
    axis1: 'SYS-GOV',
    axis2: 'VOL-CROSS',
    axis3: 'REG-EXEC',
    href: '/system/doctrine/ethics-of-invariance',
  },
  {
    id: 'D002',
    slug: 'admissibility-delta',
    type: 'Execution Doctrine',
    title: 'Δ Control Law',
    subtitle: 'OAGI v1.2 · Admissibility Governance Infrastructure',
    note: 'Governance capacity must outpace effective exploit-pressure. Δ = γ − αₑff > 0 is the expansion constraint law for scaling systems under exploit pressure. Defines the SIEM-enforced control loop with hysteresis, gating, fail-safe contraction, and the staleness guard.',
    axis1: 'SYS-GOV',
    axis2: 'VOL-SS',
    axis3: 'REG-EXEC',
    href: '/system/doctrine/admissibility-delta',
  },
  {
    id: 'D003',
    slug: 'admissibility-gate',
    type: 'Constitutional Doctrine',
    title: 'The Admissibility Gate',
    subtitle: 'The Constitutional Boundary of Lawful Action',
    note: 'The constitutional boundary between governance and execution. Execution does not establish legitimacy — execution expresses legitimacy already established. No system may cross this boundary without satisfying Φ(x; I*) ≤ 0. The gate is not self-authorizing: constitutional authority originates in the invariant reference and is formalized by D005. D003 expresses that judgment as boundary enforcement. D006 governs differentiated offices after admission. Historical registration order: D003 → D005 → D006. Constitutional operating order: D005 → D003 → D006. Jurisdiction: Rank-0 · NSRL-12.',
    axis1: 'SYS-GOV',
    axis2: 'VOL-CROSS',
    axis3: 'REG-CONST',
    href: '/system/doctrine/admissibility-gate',
  },
  {
    id: 'D004',
    slug: 'fulfillment-of-the-gospel',
    type: 'Fulfillment Doctrine',
    title: 'The Fulfillment of the Gospel',
    subtitle: 'Published as “D003 — Fulfillment of the Gospel” · From Garden to River',
    note: 'The Gospel fulfilled as restoration of the original pattern in completed form — not the restoration of the beginning. One distinction operation unfolding across ten scale-invariant stages: Differentiation → Garden → Extension → Psalms → Proverbs → Gospel → Revelation → River → Tree → Propagation. Psalms restore orientation, Proverbs restore governance, Revelation completes the audit, and the River carries the completed pattern into propagation. The pattern expands without losing itself.',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-SPIRIT',
    href: '/system/doctrine/fulfillment-of-the-gospel',
  },
  {
    id: 'D005',
    slug: 'i-star-guardian-doctrine',
    type: 'Constitutional Doctrine',
    title: 'The I* Guardian Doctrine',
    subtitle: 'Constitutional Whitepaper · Identity Preservation, Admissibility, Restoration, and Lawful Development',
    note: 'Synthesizes the Engine 2 Canonical Lineage (M073–M079) into a single constitutional framework. Identity remains invariant. Reality verifies interpretation. Attention governs admission. Restoration governs continuation. The I* Guardian preserves the coordinate while reality teaches lawful navigation. Canonical lineage reaches closure at M079. Future domains — trajectory, motion, identity-coupled execution — recorded as emerging inquiry from a completed coordinate.',
    axis1: 'ENGINE-2',
    axis2: 'VOL-CROSS',
    axis3: 'REG-CONST',
    href: '/system/doctrine/i-star-guardian-doctrine',
  },
  {
    id: 'D006',
    slug: 'constitutional-integration',
    type: 'Constitutional Doctrine',
    title: 'The Doctrine of Constitutional Integration',
    subtitle: 'The Syntheos Effect · Constitutional Foundation of the Standing State Executive Architecture',
    note: 'Every identity-defined system capable of pursuing objectives requires constitutional admission before navigation. The I* Guardian admits only lawful objectives before navigation begins. Governance precedes optimization. The Syntheos Effect is the realization of outcomes unattainable by any individual office, arising through the lawful integration of differentiated jurisdictions under a common invariant reference. Constitutional sequence: Identity → Objective Admission → Navigation → Execution → Feedback → Restoration → Constitutional Integration → Syntheos Effect. Depends upon: D003 · D005 · M057 · M088 · M089 · C013. Jurisdiction: Rank-0 · NSRL-12. Engine 2 is the constitutional executive — not another intelligence, but the operating architecture through which differentiated intelligences cooperate under invariant governance.',
    axis1: 'ENGINE-2',
    axis2: 'VOL-CROSS',
    axis3: 'REG-CONST',
    href: '/system/doctrine/constitutional-integration',
  },
  {
    id: 'D007',
    slug: 'constitutional-development',
    type: 'Constitutional Doctrine',
    title: 'The Doctrine of Constitutional Development',
    subtitle: 'Sequence · Continuity · Visibility · The Lawful Maturation of the Standing State Corpus',
    note: 'D007 governs the constitutional development of the corpus itself — one jurisdictional level above D003, D005, and D006. Those doctrines govern constitutional operation within the architecture. D007 governs the lawful development of the architecture across time. Three constitutional principles: I. The Sequence of Constitutional Development — Reality → Inquiry → Thesis → Doctrine → Book → Corpus; II. The Return Arc — the corpus returns to reality, generating new inquiry; III. The Visibility of Development — scaffolding is governance made visible; the developmental history remains auditable. Verification: provenance visible; jurisdictions differentiated; auditability preserved; reality the final verifier; new inquiry always possible. Companion plate: P047.',
    axis1: 'CORPUS-GOV',
    axis2: 'VOL-CROSS',
    axis3: 'REG-CONST',
    href: '/system/doctrine/constitutional-development',
  },
]

function DoctrineCard({ item }) {
  return (
    <a
      href={item.href}
      className="essayCard"
      style={{ textDecoration: 'none' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--gold-dim)'
        e.currentTarget.style.background = 'rgba(196,164,74,0.03)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <div className="essayCardTop">
        <span className="essayId">{item.id}</span>
        <span className="essayFlag" style={{ color: '#c4a44a' }}>
          DOCTRINE
        </span>
      </div>

      <div className="essayNote" style={{ fontStyle: 'normal', color: 'var(--gray-mid)' }}>
        {item.type}
      </div>

      <div className="essayTitle">{item.title}</div>
      <div className="essayNote">{item.subtitle}</div>
      <div className="essayNote" style={{ lineHeight: 1.7 }}>{item.note}</div>

      <div className="essayTags">
        {[item.axis1, item.axis2, item.axis3].filter(Boolean).map(ax => (
          <span key={ax} className="essayTag essayTagPlate">{ax}</span>
        ))}
      </div>

      <div className="essayLinks">
        <span className="essayLinkMedium">Open doctrine →</span>
      </div>
    </a>
  )
}

export default function DoctrineIndexPage() {
  return (
    <>
      <Head>
        <title>System Doctrine — Standing State Press</title>
        <meta
          name="description"
          content="Execution standards and doctrine pages for the Standing State architecture."
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
            <li><a href="/essays">Essays</a></li>
            <li><a href="/sources">Sources</a></li>
          </ul>
        </div>
      </nav>

      <main style={{ paddingTop: '58px' }}>
        <section className="glossHeader">
          <div className="wrap">
            <div className="glossBreadcrumb">
              <a href="/">Standing State Press</a>
              <span className="glossBreadSep">→</span>
              <span>Doctrine</span>
            </div>

            <div className="glossEyebrow">Execution Layer · Enforcement Standards</div>
            <h1 className="glossH1">System Doctrine</h1>
            <p className="glossIntro">
              Engineering standards that enforce the Standing State at execution.
              Doctrine is the enforcement layer: the place where admissibility,
              forward invariance, and halt become executable design requirements.
            </p>

            <div className="essayStats">
              <span className="essayStat">{DOCTRINE_ITEMS.length} doctrine pages</span>
              <span className="essayStatDiv">·</span>
              <span className="essayStat">Execution governance</span>
              <span className="essayStatDiv">·</span>
              <span className="essayStat">Standing State enforcement</span>
            </div>
          </div>
        </section>

        <section className="essayGrid">
          <div className="wrap">
            <div className="canonEssayEqBlock" style={{ marginBottom: '2.4rem' }}>
              <div className="canonEssayEq">
                A system is safe not when it behaves correctly,<br />
                but when incorrect behavior cannot execute.
              </div>
            </div>

            <div className="essayCards">
              {DOCTRINE_ITEMS.map(item => (
                <DoctrineCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
