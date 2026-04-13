import Head from 'next/head'
import Link from 'next/link'

const ESSAYS = [
  { id:'c001', slug:'the-standing-state', number:'Essay I', title:'The Standing State', subtitle:'What is invariant. What does not move.', equation:'A → A   because A knows it is A' },
  { id:'c002', slug:'identity-as-coordinate', number:'Essay II', title:'Identity as Coordinate', subtitle:'Claiming identity does not create reality. It selects the coordinate.', equation:'I ⇒ π(I) ⇒ x → x*' },
  { id:'c003', slug:'architecture-of-interpretation', number:'Essay III', title:'Architecture of Interpretation', subtitle:'Identity → Interpretation → Structure → Reality', equation:'I ⇒ ℐ(I, ∇c) ⇒ π ⇒ x' },
  { id:'c004', slug:'pain-as-decoherence-signal', number:'Essay IV', title:'Pain as Decoherence Signal', subtitle:'The gradient does not define identity. It measures alignment relative to identity.', equation:'∇c > 0 ⇒ corrective signal' },
  { id:'c005', slug:'the-consent-engine', number:'Essay V', title:'The Consent Engine', subtitle:'Choice scans trajectories. Consent activates one.', equation:'π(t) = 𝒞(t)u(t)' },
  { id:'c006', slug:'life-and-death', number:'Essay VI', title:'Life and Death', subtitle:'Every trajectory moves toward convergence or divergence. There is no neutral state.', equation:'V̇ ≤ 0 ⇒ Life     V̇ > 0 ⇒ Death' },
  { id:'c007', slug:'the-scab-condition', number:'Essay VII', title:'The Scab Condition', subtitle:'The scab does not heal the wound. It holds the condition under which healing occurs.', equation:'Σ ↓ ∧ B(t) holds ⇒ Kₐᵤₜₒ ↑ ⇒ Φ(x) → 0' },
  { id:'c008', slug:'surrender', number:'Essay VIII', title:'Surrender', subtitle:'Jurisdictional integrity. Output does not rewrite identity.', equation:'İ* = 0     x ⇏ I*' },
  { id:'c009', slug:'external-identity-and-consent', number:'Essay IX', title:'External Identity and Consent', subtitle:'External identities produce signal. They require consent to propagate.', equation:'External signal ⇒ ℐ(I*, ∇c) ⇏ I*' },
  { id:'c010', slug:'the-architecture-of-return', number:'Essay X', title:'The Architecture of Return', subtitle:'Return is not constructed. It is revealed when interference is removed.', equation:'I ⇒ ∇c ⇒ ℐ ⇒ 𝒞u ⇒ x ⇒ Φ(x) → 0' },
]

export default function CanonicalEssaysIndex() {
  return (
    <>
      <Head>
        <title>Canonical Essays — Standing State Press</title>
        <meta name="description" content="Ten foundational essays authored directly from the system architecture." />
      </Head>
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/#corpus">Corpus</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
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
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>Canonical</span>
          </div>
          <div className="glossEyebrow">System Declarations — Ten Foundational Essays</div>
          <h1 className="glossH1">Canonical Essays</h1>
          <p className="glossIntro">
            Ten essays authored directly from the system architecture.
            Not blog posts. System declarations.
          </p>
        </div>
      </header>
      <hr className="divider" />
      <section style={{ padding: '4rem 0' }}>
        <div className="wrap">
          <div className="canonGrid">
            {ESSAYS.map((essay, i) => (
              <Link key={essay.id} href={`/essays/canonical/${essay.slug}`}
                className="canonCard">
                <div className="canonCardNum">{essay.number}</div>
                <h2 className="canonCardTitle">{essay.title}</h2>
                <p className="canonCardSub">{essay.subtitle}</p>
                <div className="canonCardEq">{essay.equation}</div>
                <div className="canonCardArrow">→</div>
              </Link>
            ))}
          </div>
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
