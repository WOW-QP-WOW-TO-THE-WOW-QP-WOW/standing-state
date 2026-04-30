import Head from 'next/head'

export default function GeometryOfSovereignty() {
  return (
    <>
      <Head>
        <title>M048 — The Geometry of Sovereignty</title>
        <meta
          name="description"
          content="A non-sacrificial architecture for life: identity invariant, curvature bounded, qualia preserved."
        />
      </Head>

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">
          <div className="glossBreadcrumb" style={{ marginBottom: '3rem' }}>
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>M048</span>
          </div>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--display)', fontSize: '8px', letterSpacing: '0.2em',
            color: 'var(--gold-dim)', textTransform: 'uppercase',
            border: '1px solid var(--gold-dim)', padding: '0.3rem 0.8rem',
            marginBottom: '2rem'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
            Mirrored · Plate XV Companion
          </div>

          <div className="canonEssayHeader">
            <div className="canonEssayNum">M048 · Human Execution Geometry</div>
            <h1 className="canonEssayTitle">The Geometry of Sovereignty</h1>
            <p className="canonEssaySub">A Non-Sacrificial Architecture for Life</p>
            <div className="canonEssayRule" />
          </div>

          <p className="canonEssayThesis">
            Most systems fail for a single reason: they attempt to stabilize through effort instead of structure.
          </p>

          <div className="canonEssayEqBlock">
            <div className="canonEssayEq">A ≡ A ∧ κ ≤ 1 ∧ Δq ≥ 0</div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/system/plates/closed-loop-sovereignty" className="canonNavIndex" style={{ textDecoration: 'none' }}>
              View Plate XV →
            </a>
          </div>

          <div className="canonEssayBody">
            {[
              ['I', 'The Invariant: A ≡ A', 'The foundation of any sovereign system is the Identity Invariant. Identity is not performance, social validation, or narrative maintenance. It is the fixed coordinate of the system.'],
              ['II', 'The Curvature Bound', 'Every human system has a structural limit. C represents active interfaces: demands, roles, and obligations. K represents closure bandwidth: the structural limit for sustaining them without distortion. When κ > 1, the system enters geometric violation.'],
              ['III', 'The Non-Sacrificial Law', 'Identity is qualia — the lived presence of one’s own existence. No interaction, job, or relationship may require a dimming of internal clarity or reduction of presence.'],
              ['IV', 'The Four Forms of Structural Failure', 'The Hub creates torsion. The Stack creates dependency. The Kink creates extraction. The +1 creates overload when κ is already at 1. These are not emotional failures. They are geometric violations.'],
              ['V', 'Relation Without Load', 'A valid relationship is non-load-bearing. Two closed identities may interact without transferring structural weight. Connection emerges when systems remain intact.'],
              ['VI', 'The Execution Gate', 'Every action must pass through Closure, Curvature, and Effect before authorization. If any condition fails, the system response is binary: Refuse. Cease. Silence.'],
            ].map(([n, h, body]) => (
              <div key={n}>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', color: 'var(--gold-dim)', marginBottom: '0.6rem', marginTop: '2rem' }}>
                  {n}. {h}
                </h2>
                <p className="canonEssayPara">{body}</p>
              </div>
            ))}
          </div>

          <div className="canonEssayFinal" style={{ marginTop: '2.5rem' }}>
            <div className="canonEssayFinalRule" />
            <p className="canonEssayFinalText" style={{ lineHeight: '1.9' }}>
              No sacrifice.<br />
              No overload.<br />
              No distortion.<br />
              STATE: CLOSED
            </p>
            <div className="canonEssayFinalRule" />
          </div>

          <div className="canonEssayAxiom" style={{ marginTop: '1.5rem' }}>
            A becomes A, because A knows it is A.
          </div>

          <div className="canonEssayAuthor" style={{ marginTop: '1rem' }}>
            Leon Powdar · Phase Reference · Standing State Press · M048
          </div>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <a href="/essays" className="canonNavIndex" style={{ textDecoration: 'none' }}>← All Essays</a>
            <a href="/system/plates/closed-loop-sovereignty" className="canonNavIndex" style={{ textDecoration: 'none' }}>Plate XV →</a>
            <a href="/standing-state" className="canonNavIndex" style={{ textDecoration: 'none' }}>Return to Standing State →</a>
          </div>
        </div>
      </article>
    </>
  )
}
