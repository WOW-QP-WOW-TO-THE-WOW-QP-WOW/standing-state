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
  { id:'c008', slug:'surrender', number:'Essay VIII', title:'Surrender', subtitle:'Jurisdictional integrity. Output does not rewrite identity.', equation:'I* = 0     x ⇏ I*' },
  { id:'c009', slug:'external-identity-and-consent', number:'Essay IX', title:'External Identity and Consent', subtitle:'External identities produce signal. They require consent to propagate.', equation:'External signal ⇒ ℐ(I*, ∇c) ⇏ I*' },
  { id:'c010', slug:'the-architecture-of-return', number:'Essay X', title:'The Architecture of Return', subtitle:'Return is not constructed. It is revealed when interference is removed.', equation:'I ⇒ ∇c ⇒ ℐ ⇒ 𝒞u ⇒ x ⇒ Φ(x) → 0' },
  { id:'c011', slug:'the-admissibility-gate', number:'Essay XI', title:'The Admissibility Gate', subtitle:'Identity defines. Admissibility filters. Execution manifests.', equation:'Defined(S) ∧ Evaluated(x_t ∈ S) ⇒ Enforcement' },
  { id:'c012', slug:'gate-of-admissibility', number:'Essay XII', title:'The Gate of Admissibility', subtitle:'The Unified System Behind Standing State', equation:'Φ(x; I*) ≤ 0' },
]

export default function CanonicalEssaysIndex() {
  return (
    <>
      <Head>
        <title>Canonical Essays — Standing State Press</title>
        <meta name="description" content="Twelve foundational essays authored directly from the system architecture." />
      </Head>
      <main style={{ padding: '4rem', color: '#fff', background: '#000', minHeight: '100vh' }}>
        <h1>Canonical Essays</h1>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {ESSAYS.map((essay) => (
            <Link key={essay.id} href={`/essays/canonical/${essay.slug}`} style={{ color: '#d4af37', textDecoration: 'none' }}>
              {essay.number} — {essay.title}
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
