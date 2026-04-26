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
    type: 'Execution Doctrine',
    title: 'Admissibility Gate',
    subtitle: 'Apex Doctrine · Governance Precedes Execution',
    note: 'Φ(x; I*) ≤ 0 is the boundary. Admissibility must be computed before execution, not after. Halt is sovereign — proof that unsafe effect did not pass. Navigable movement lives only at 𝒩(x_t) = 𝒜 ∩ 𝓡(x_t). Apex of the Standing State doctrine layer.',
    axis1: 'SYS-GOV',
    axis2: 'VOL-SS',
    axis3: 'REG-EXEC',
    href: '/system/doctrine/admissibility-gate',
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
