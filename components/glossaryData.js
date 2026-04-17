/**
 * GLOSSARY DATA — THE INVARIANT DEFINITION LAYER
 * standingstate.com/system/glossary
 *
 * Definition precedes expression.
 * Every symbol defined here is the canonical definition for the entire site.
 * No symbol is defined elsewhere.
 */

export const VARIABLES = [
  {
    id: 'phi',
    symbol: 'Φ(x)',
    name: 'Completion Functional',
    anchor: 'phi',
    definition:
      'The primary measure of deviation from biological coherence. When Φ(x) converges toward Kₐᵤₜₒ under reduced load, the system enters the completion state.',
    logic: 'Φ(x) → Kₐᵤₜₒ   under   Σ ↓',
    logicLabel: 'Convergence condition — the governing equation of the system.',
    role: 'State variable. Measures how far the system is from its reference state.',
    activation: 'Decreases when Σ ↓ and B(t) holds.',
    suppression: 'Remains elevated when load is sustained and cycles do not complete.',
  },
  {
    id: 'sigma',
    symbol: 'Σ',
    name: 'Total Integrated Stress Load',
    anchor: 'sigma',
    definition:
      'The integrated sum of mental, physical, and chemical stress running continuously. All three forms converge into a single load variable. The body does not distinguish stress by source — it responds to accumulated signal.',
    logic: 'Σ ↑  ⟹  Φ(x) ↑',
    logicLabel: 'Stress amplifies system deviation. Elevated load prevents convergence.',
    role: 'Primary input variable. The master load term.',
    activation: 'Mental stress, physical overload, chemical instability, blood sugar volatility.',
    suppression: 'Reduced by parasympathetic dominance, metabolic pause, sleep, signal correction.',
  },
  {
    id: 'kauto',
    symbol: 'Kₐᵤₜₒ',
    name: 'Autophagic Correction Baseline',
    anchor: 'kauto',
    definition:
      'The rate at which the cell identifies damaged components, breaks them down, and recovers raw materials for reuse. The only subtractive term in the governing equation. When Kₐᵤₜₒ is active, the system clears and repairs.',
    logic: 'Σ ↓  ⟹  Kₐᵤₜₒ ↑  ⟹  Φ(x) → Kₐᵤₜₒ',
    logicLabel: 'Reduced load activates correction. Correction enables convergence.',
    role: 'Correction operator. The only term that moves the system toward x*.',
    activation: 'Low insulin, metabolic pause (fasting window), deep sleep, parasympathetic dominance.',
    suppression: 'Elevated insulin, continuous intake, sustained Σ, mTORC1 activation.',
  },
  {
    id: 'bt',
    symbol: 'B(t)',
    name: 'Boundary Integrity',
    anchor: 'bt',
    definition:
      'The selective permeability of the gut lining, skin barrier, and cellular membranes at time t. Range: [0, 1]. Boundary failure acts as a multiplicative amplifier — it does not add to load, it scales it.',
    logic: '(1 − B(t)) ↑  ⟹  Σ ↑',
    logicLabel: 'Boundary degradation amplifies total load. Integrity reduction is not additive — it is multiplicative.',
    role: 'Constraint variable. Modulates the effective load on the system.',
    activation: 'Maintained by anti-inflammatory inputs, stable blood glucose, omega-3 membrane architecture.',
    suppression: 'Degraded by processed inputs, toxin exposure, chronic sympathetic activation, blood sugar instability.',
  },
  {
    id: 'xstar',
    symbol: 'x*',
    name: 'Reference State',
    anchor: 'xstar',
    definition:
      'The invariant biological reference state. Constant for all time. Identity does not drift — only the system\'s capacity to express it does. Pathology degrades expression capacity. It does not corrupt x*.',
    logic: 'x* = constant   ∀t',
    logicLabel: 'The reference state is invariant under all conditions. x(t) drifts. x* does not.',
    role: 'Identity attractor. The terminal condition toward which the system converges when Φ(x) → Kₐᵤₜₒ.',
    activation: null,
    suppression: null,
  },
]

export const GOVERNING_EQUATION = {
  full: 'Φ(x) = Σ(1 − B(t)) / Vᶜ − Kₐᵤₜₒ',
  convergence: 'Φ(x) → Kₐᵤₜₒ   under   Σ ↓',
  coherence: 'Φ(x) ≤ 0  ⟹  x(t) → x*',
  identity: 'x* = constant   ∀t',
}

export const AXIOM = 'A becomes A, because A knows it is A.'

// ── EXTENDED GLOSSARY — ENTRIES FROM M019–M027 ───────────────

export const EXTENDED_TERMS = [
  {
    id: 'c-int',
    symbol: 'C_int',
    name: 'Internal Cost / Contradiction Metric',
    definition: 'The accumulated cost of sustained misalignment between stated identity and enacted behavior. Rises continuously when action policy does not match I*. When C_int crosses the Rupture Threshold ρ, the system can no longer maintain coherent output.',
    source: 'M019',
  },
  {
    id: 'rho',
    symbol: 'ρ',
    name: 'Rupture Threshold',
    definition: 'The admissibility boundary in the social and relational register. When C_int ≥ ρ, high-performance incoherence collapses. The system cannot sustain output that contradicts I* beyond this point. Social-register expression of Φ(x; I*) ≤ 0.',
    source: 'M019',
  },
  {
    id: 'automatic-refusal',
    symbol: '∅ → R',
    name: 'Automatic Refusal Sequence',
    definition: 'The four-stage consent withdrawal protocol: Cease → Sever → Recenter → Void. Activates when C_int breaches ρ. Circuit breaker for sustained identity violation. Parallel: Seal → Lock → Express (NSRL-10, M024).',
    source: 'M019',
  },
  {
    id: 'law-of-erosion',
    symbol: '∂I*/∂t < 0',
    name: 'Law of Erosion',
    definition: 'Structural depletion produced when action originates from derivative or fear-based identity. C_int accumulates. Output contracts. The depletion register: giving from an unstable or borrowed I*.',
    source: 'M020',
  },
  {
    id: 'law-of-growth',
    symbol: '∂I*/∂t ≥ 0',
    name: 'Law of Growth',
    definition: 'Multiplication produced when action originates from stable I*. Output expands without depleting the source. The sun does not lose its light by shining — it radiates from fullness. Investment register of Φ(x; I*) ≤ 0.',
    source: 'M020',
  },
  {
    id: 'nsrl-12',
    symbol: 'NSRL-12',
    name: 'Twelve-Band Canonical Architecture',
    definition: 'Twelve persistent functional bands: Identity · Law · Witness · Judgment · Covenant · Priesthood · Kingship · Wisdom · Prophetic Constraint · Suffering · Redemption · Sabbath. Each is a simultaneous operator, not a sequential chapter. Terminal state: Sabbath [12] achieves irreversible lock.',
    source: 'M021',
  },
  {
    id: 'derivative-identity',
    symbol: 'I*(t)',
    name: 'Derivative Identity',
    definition: 'Identity anchored to external operators — geography, dynasty, ritual, outcome. Structurally unstable. Collapses under systemic drift. The central vulnerability of the Joshua–Kings phase: identity cannot remain derivative.',
    source: 'M021',
  },
  {
    id: 'environmental-saturation',
    symbol: 'I* → ∞',
    name: 'Environmental Saturation',
    definition: 'Terminal state in which I* saturates the environment. No external location for presence to withdraw to. Mediation obsolete. Distance collapsed. Revelation 21–22 as admissibility proof: death deleted, rupture vector removed, system cannot re-enter failure mode.',
    source: 'M021',
  },
  {
    id: 'attention-investment',
    symbol: 'A(t)',
    name: 'Attention as Investment',
    definition: 'Attention is the allocation of life-current toward an identity coordinate. Scattered attention = load without convergence. Single attention = coordinate lock. Blood is life; attention is the flow of life. Where attention is placed, I* is funded.',
    source: 'M022',
  },
  {
    id: 'faith-sabbath',
    symbol: 'V=0, C_in=1',
    name: 'Faith as Sabbath of Identity',
    definition: 'Resting in the truth that I* = I*. Not striving. Not constructing. Knowing. Faith is not hope — it is the zero-doubt condition. The Sabbath of identity is the standing state reached when no further proof is required.',
    source: 'M022',
  },
  {
    id: 'sovereign-mirror',
    symbol: 'I* ↔ I*',
    name: 'Sovereign Mirror',
    definition: 'The terminal state in which the subject reflects I* back to I*. Output = input. No deviation. Standing state confirmed. The harvest of invested attention: the system stands as the source stood — sovereign, radiant, unshaken.',
    source: 'M022',
  },
  {
    id: 'water-principle',
    symbol: 'H₂O invariant',
    name: 'Water Principle',
    definition: 'Identity that transforms across states (ice, liquid, vapor) without losing essence. Natural proof of I* = I* under environmental pressure. Form varies; operator is invariant. Biological prophet of faithful identity.',
    source: 'M023',
  },
  {
    id: 'q-gate',
    symbol: 'Q → 1',
    name: 'Q-Gate',
    definition: 'The regulatory target upstream of behavior. Governance must protect Q → 1 (self-authored cognition) before auditing downstream outcomes. When Q → 0, identity decouples from action — structural possession. Corpus mapping: admissibility condition Φ(x; I*) ≤ 0 as regulatory requirement.',
    source: 'M024',
  },
  {
    id: 'nsrl-10',
    symbol: 'NSRL-10',
    name: 'Four-Plane Regulatory Model',
    definition: 'Identity · Resonance · Mind & Motion · Growth. Applied to BCI governance. Each plane requires a pass condition before the next activates. Seal → Lock → Express operational loop. Parallel to Cease → Sever → Recenter → Void (M019).',
    source: 'M024',
  },
  {
    id: 'sovereign-consent',
    symbol: '𝒞 ≠ 0 (continuous)',
    name: 'Sovereign Consent Standard',
    definition: 'Consent that is continuous, revocable, and state-aware. Not a one-time checkbox. Legal register expression of 𝒞 ≠ 0 as ongoing requirement. Structural possession occurs when consent is reduced to a signature while the substrate of willingness is modulated.',
    source: 'M024',
  },
  {
    id: 'garden-state',
    symbol: 'x* (pre-interference)',
    name: 'Garden State',
    definition: 'The condition of unbroken identity-expression unity. No gap between I* and action. Natural pre-interference coherence. The animal does not doubt. The eagle soars without self-doubt thinking. Reference state before load accumulates.',
    source: 'M025',
  },
  {
    id: 'ark',
    symbol: 'Ark(I*)',
    name: 'The Ark',
    definition: 'The human as volitional resurrection vessel. Not passive existence but conscious coordinate selection. The Ark does not escape the flood — it withstands it. Not made of wood but of will. The Garden reflects; the Ark chooses.',
    source: 'M025',
  },
  {
    id: 'resurrection-ss',
    symbol: 'I* re-enacted',
    name: 'Resurrection (Standing State definition)',
    definition: 'The return of chosen identity through faith, feeling, and volitional consciousness. Not memory recall. Identity embodiment. When you declare "I Am Strength" and move with power — strength walks again. I* rearrangement enacted until Φ(x; I*) → 0.',
    source: 'M025',
  },
  {
    id: 'three-eyes',
    symbol: 'ℐ(Ra, Horus) → ∇',
    name: 'Three Eyes Framework',
    definition: 'Interpretation-layer architecture: Eye of Ra (logic/structure) + Eye of Horus (intuition/gradient) → Third Eye (integration operator). Corpus mapping: Ra + ∇c → ℐ(I, ∇c). All three required for coherent interpretation output. Missing any channel distorts the policy output regardless of I* stability.',
    source: 'M026',
  },
  {
    id: 'solar-plexus',
    symbol: '𝒞 (embodied)',
    name: 'Solar Plexus',
    definition: 'The consent-action bridge. Where soul intention is translated into physical action. Corpus equivalent: 𝒞 — the scalar that authorizes u(t) into π(t). Activated by integrity. Suppressed by fear. The center where faith becomes movement.',
    source: 'M026',
  },
  {
    id: 'self-witness',
    symbol: 'δ(t) → 0',
    name: 'Self-Witness',
    definition: 'The detection operator. Answers: "Where am I relative to who I am?" Corpus mapping: ∇c — conscience gradient. Eye of Ra (logical detection) + Eye of Horus (intuitive sensing) operating in coherence produces δ(t) → 0. Without self-witness, deviation is invisible.',
    source: 'M027',
  },
  {
    id: 'self-empathy',
    symbol: 'Kₐᵤₜₒ (conscious)',
    name: 'Self-Empathy',
    definition: 'The alignment-preserving correction operator. Transforms awareness into correction. Corpus mapping: Kₐᵤₜₒ applied consciously. Bridges biological response + mental structure → spiritual identity alignment. Not sympathy. Not suppression. C1 and C2 can hold while C3 advances — awareness does not equal transformation until self-empathy completes the loop.',
    source: 'M027',
  },
  {
    id: 'stability-theorem',
    symbol: 'C1 ∧ C2 ∧ C3',
    name: 'Self-Empathy Stability Theorem',
    definition: 'Coherence requires three simultaneous conditions: C1 — Identity Stability (stable I*) · C2 — Witness Fidelity (δ → 0) · C3 — Empathy Alignment (corrective transformation toward I*). Failure of any single condition yields fragmentation. The modern condition: C1 weakened, C2 distorted, C3 incomplete.',
    source: 'M027',
  },
  {
    id: 'closed-loop',
    symbol: 'x → ℐ → I* → ∇c → 𝒞u → x',
    name: 'Closed-Loop System',
    definition: 'Reality → Interpretation → Identity → Self-Witness → Self-Empathy → Update. The complete governance architecture. Open systems explain behavior. Closed systems explain coherence. A system does not remain itself because it exists — it remains itself because it can return to itself.',
    source: 'M027',
  },
  {
    id: 'four-failure-modes',
    symbol: 'FM I–IV',
    name: 'Four Failure Modes',
    definition: 'I: Identity Failure — no stable I* (spiritual plane collapse) · II: Witness Distortion — δ ≫ 0, perception diverges · III: Empathy Misalignment — perception present, correction incomplete · IV: Combined Overload — all planes degraded simultaneously. Each mode has a distinct intervention.',
    source: 'M027',
  },
  {
    id: 'order-of-return',
    symbol: 'Sp → Bio → Mn → Ph',
    name: 'Order of Return',
    definition: 'Spiritual → Biological → Mental → Physical. The directional cascade from identity to expression. Coherence stabilizes when this order is preserved. Distortion appears when it fragments — most commonly when the physical plane attempts to govern the spiritual plane.',
    source: 'M027',
  },
]
