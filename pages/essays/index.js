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
  { code: 'PLT-I', label: 'Fed–Stress–Output Loop' },
  { code: 'PLT-IIB', label: 'The Scab Condition' },
  { code: 'PLT-INTERP', label: 'Architecture of Interpretation' },
  { code: 'PLT-COORD', label: 'Identity as Coordinate' },
  { code: 'PLT-PAIN', label: 'Pain as Decoherence Signal' },
  { code: 'PLT-CONSENT', label: 'The Consent Engine' },
  { code: 'PLT-ADMIT', label: 'The Admissibility Gate' },
  { code: 'VAR-Σ', label: 'Total Load (Σ)' },
  { code: 'VAR-Φ', label: 'Completion Functional (Φ)' },
  { code: 'VAR-B', label: 'Boundary Integrity (B)' },
  { code: 'VAR-K', label: 'Autophagic Correction (K)' },
  { code: 'VAR-∇c', label: 'Conscience Gradient (∇c)' },
  { code: 'VAR-C', label: 'Consent Scalar (𝒞)' },
  { code: 'SYS-GEN', label: 'General System' },
]

const VOLUMES = [
  { code: 'VOL-MW', label: 'The Measure Within' },
  { code: 'VOL-SS', label: 'The Standing State: Vol I' },
  { code: 'VOL-LG', label: 'The Law of Growth' },
  { code: 'VOL-BSH1', label: 'Biological Sabbath Vol I' },
  { code: 'VOL-BSH2', label: 'Biological Sabbath Vol II' },
  { code: 'VOL-CROSS', label: 'Cross-Volume' },
]

const REGISTERS = [
  { code: 'REG-MATH', label: 'Mathematical' },
  { code: 'REG-BIO', label: 'Biological' },
  { code: 'REG-MIND', label: 'Cognitive' },
  { code: 'REG-PSY', label: 'Psychological' },
  { code: 'REG-PHIL', label: 'Philosophical' },
  { code: 'REG-SPIRIT', label: 'Spiritual' },
  { code: 'REG-MIXED', label: 'Mixed' },
  { code: 'REG-STRUCT', label: 'Structural' },
]

const FLAGS = {
  A: { label: 'Aligned', color: '#7a6428' },
  M: { label: 'Mirrored', color: '#c4a44a' },
  U: { label: 'Update', color: '#6a5a3a' },
  E: { label: 'Expand', color: '#5a6a3a' },
  X: { label: 'Archive', color: '#3a3a3a' },
}

// ── ESSAY DATA ───────────────────────────────────────────────

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
  {
    id: 'M007',
    title: 'A Spectral Certification of the Standing State — The Rank-0 Synchronization Manifold',
    mediumUrl: 'https://medium.com/@leonsp3/the-rank-0-synchronization-manifold-e25427ddd8ef',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MATH',
    flag: 'E',
    note: "Kuramoto oscillator network; toroidal closure as boundary identification; λ₂(L') > Δω as synchronization criterion; A ≡ A as Laplacian flow invariance — seed for arXiv submission",
    mirrorUrl: '',
  },
  {
    id: 'M008',
    title: 'Time as Mercy: A Structural Thesis on Resolution, Forgetting, and the Standing State',
    mediumUrl: 'https://medium.com/@leonsp3/time-as-mercy-a-structural-thesis-on-resolution-forgetting-and-the-standing-state-835de7e4f452',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Time as buffer against premature coherence; forgetting as Sabbath of memory — load-shedding after resolution; repression vs forgetting distinction; identity is stationary, memory is time-bound',
    mirrorUrl: '',
  },
  {
    id: 'M009',
    title: 'The Double Helix Square-Lock 01 — A Unified Control-Theoretic Thesis of Identity, Coherence, and Recovery',
    mediumUrl: 'https://medium.com/@leonsp3/the-double-helix-square-lock-dac422e9e402',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MATH',
    flag: 'E',
    note: 'Sovereignty inequality I_self(τ) > I_world(τ); coherence horizon τ₀; basin-of-sovereignty theorem; volatility collapse threshold; A → A iff internal recursion governs future formation — seed for Plate X',
    mirrorUrl: '',
  },
  {
    id: 'M010',
    title: "The Lord's Prayer as a Blueprint for Self-Sovereignty",
    mediumUrl: 'https://medium.com/@leonsp3/the-lords-prayer-as-a-blueprint-for-self-sovereignty-an-examination-of-epic-coach-leon-s-romantic-f958f18d4e8c',
    mirrorUrl: '/essays/canonical/lords-prayer-self-sovereignty',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: "Identity pipeline rendering of The Lord's Prayer",
  },
  {
    id: 'M011',
    title: 'The Multidimensional Human: A Structural Account of Registers, Interpretation, and Volitional Consciousness',
    mediumUrl: 'https://medium.com/@leonsp3/the-multidimensional-human-a-journey-toward-self-mastery-050008618699',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Five registers mapped to Gates system; Three-channel architecture (logic/intuition/consent) = ℐ(I,∇c); volitional consciousness as terminal consent operator 𝒞',
    mirrorUrl: '/essays/medium/multidimensional-human',
  },
  {
    id: 'M018',
    title: 'The Cocoon of Transformation',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Transformation essay preserved as lineage/practice layer. Cocoon as protected interval of becoming; identity matures through enclosure, pressure, and emergence without premature exposure.',
    mirrorUrl: '/essays/medium/cocoon-of-transformation',
  },
  {
    id: 'M019',
    title: 'The Physics of Refusal',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'Structural refusal essay. High-performance incoherence collapses because contradiction cannot remain load-bearing under pressure. Early bridge into admissibility logic.',
    mirrorUrl: '/essays/medium/physics-of-refusal',
  },
  {
    id: 'M022',
    title: 'The Blood of Christ Is Attention',
    mediumUrl: '',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Spiritual-register attention essay. Interprets blood as invested attention and love as directed life-force. Lineage voice preserved; not retrofitted into Rank-0 vocabulary.',
    mirrorUrl: '/essays/medium/blood-of-christ-attention',
  },
  {
    id: 'M024',
    title: 'Neuralink through NSRL-10',
    mediumUrl: '',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-SS',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'Four-plane regulatory model applied to Neuralink. Case-study bridge for NSRL-10, technological boundary, identity protection, and admissibility under invasive interface pressure.',
    mirrorUrl: '/essays/medium/neuralink-nsrl-10',
  },
  {
    id: 'M025',
    title: 'The Ark of I Am',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Spiritual identity vessel essay. The Ark functions as protected consciousness, resurrection, and garden-within image. Lineage voice preserved under register lock.',
    mirrorUrl: '/essays/medium/ark-of-i-am',
  },
  {
    id: 'M026',
    title: 'Cleansing the Inner Temple',
    mediumUrl: '',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Temple-cleansing essay. Three eyes, solar plexus, and soul power framed as purification of attention and internal authority. Preserved as spiritual/practice register.',
    mirrorUrl: '/essays/medium/cleansing-inner-temple',
  },
  {
    id: 'M027',
    title: 'Identity as Governing Reference in Adaptive Systems',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-SS',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'Adaptive-systems bridge. Identity operates as governing reference for learning, response, and correction; systems drift when output is allowed to rewrite reference.',
    mirrorUrl: '/essays/medium/identity-governing-reference-adaptive-systems',
  },
  {
    id: 'M028',
    title: 'The 6 Paradoxes of the Exit Simulation',
    mediumUrl: '',
    axis1: 'SYS-GEN',
    axis2: 'VOL-SS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Rank-0 audit of simulation-exit paradoxes. Treats escape, awakening, and recursion as structural contradictions resolved by invariant reference rather than external exit.',
    mirrorUrl: '/essays/medium/exit-simulation-6-paradoxes',
  },
  {
    id: 'M029',
    title: 'Embracing Genuine Self-Worth in a Materialistic World',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Early self-worth lineage essay. Preserves Epic Coach Leon voice while aligning self-worth with identity stability rather than material reflection.',
    mirrorUrl: '/essays/medium/genuine-self-worth',
  },
  {
    id: 'M030',
    title: 'Neville Goddard and the Romantic Law of Yahweh',
    mediumUrl: '',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Neville Goddard / Yahweh fourfold science essay. Spiritual-interpretive register, preserving original theological and imaginal framing under register discipline.',
    mirrorUrl: '/essays/medium/neville-goddard-fourfold-science',
  },
  {
    id: 'M031',
    title: 'A Structural Model for AI Integrity Under Stress',
    mediumUrl: '',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-SS',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'AI integrity stress model. Applies admissibility, boundary, and reference stability to artificial systems under pressure. Structural companion to AI governance and coherence work.',
    mirrorUrl: '/essays/medium/ai-integrity-under-stress',
  },
  {
    id: 'M032',
    title: 'The Principle of Mana',
    mediumUrl: '',
    axis1: 'VAR-K',
    axis2: 'VOL-BSH1',
    axis3: 'REG-BIO',
    flag: 'M',
    note: 'Health-alignment essay. Mana interpreted as restorative life-force and conscious alignment; bridges biological repair, attention, and practice-layer health language.',
    mirrorUrl: '/essays/medium/principle-of-mana',
  },
  {
    id: 'M033',
    title: 'The Wave Law of Sovereign Creation',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Sovereign creation essay. Wave language used to articulate identity resonance, creation after its kind, and alignment of expression with governing reference.',
    mirrorUrl: '/essays/medium/wave-law-sovereign-creation',
  },
  // ─────────────────────────────────────────────────────────────────
  // NOTE — CORPUS CONTINUITY GAP
  // M012–M017, M020–M021, and M023 are still pending backfill.
  // M018, M019, M022, and M024–M033 are now registered because their
  // mirror files already exist in /pages/essays/medium/. Later backfill
  // must preserve all existing IDs; no renumbering of M034+ occurs.
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'M034',
    title: 'Your Mind is a Powerful Tool — The Twelve Mind Qualities',
    mediumUrl: 'https://medium.com/@leonsp3/12-mind-qualities-18fd11d55a44',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIND',
    flag: 'M',
    note: 'Practice-layer · cognitive register · early-corpus mapping of twelve mind-faculties as disciplined qualities under identity. Prefigures I* doctrine through the "hearing quality" (I AM consciousness as governing reference) and the "doubter/denier" (filtration against signals not aligned with identity). Twelve-enumeration structure resonates with M021 NSRL-12. Lineage framings (Neville Goddard · twelve-disciples · New Thought mind-training) preserved in original voice under register lock — interpretive and lineage-doctrine content NOT retrofitted into Rank-0 vocabulary. Original Coach Leon Powdar signature block preserved as authorial artifact',
    mirrorUrl: '/essays/medium/twelve-mind-qualities',
  },
  {
    id: 'M035',
    title: 'The Bull Was Never the Animal',
    mediumUrl: 'https://medium.com/@leonsp3/the-bull-was-never-the-animal-eadb37ea5225',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'Control-theoretic reframing of awakening as identity invariance under excitation. Distinguishes bounded stability from zero-coupling invariance (Rank-0).',
    mirrorUrl: '/essays/medium/the-bull-was-never-the-animal',
  },
  {
    id: 'M036',
    title: 'The Pentacle of Sovereign Creation — The I Am as the Living Flame',
    mediumUrl: 'https://medium.com/@leonsp3/the-pentacle-of-sovereign-creation-the-i-am-as-the-living-flame-153bd80b31a2',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Symbolic architecture layer. Five-domain map centered on volitional consciousness; register-locked as interpretive, not causal ontology.',
    mirrorUrl: '/essays/medium/the-pentacle-of-sovereign-creation',
  },
  {
    id: 'M037',
    title: 'The Lens of Contradiction',
    mediumUrl: 'https://medium.com/@leonsp3/the-lens-of-contradiction-375e65dfe63c',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-PHIL',
    flag: 'A',
    note: 'Epistemic purification essay. Contradiction removes false centers; science advances by subtraction, not accumulation.',
    mirrorUrl: '/essays/medium/lens-of-contradiction',
  },
  {
    id: 'M038',
    title: 'Beyond the Prism: A Romantic Philosophy of Dimensional Awareness',
    mediumUrl: 'https://medium.com/@leonsp3/beyond-the-prism-a-romantic-philosophy-of-dimensional-awareness-405b6a279633',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Perception-expansion essay using prism symbolism. Integration of logic, intuition, breath, action, and creativity under register lock.',
    mirrorUrl: '/essays/medium/beyond-the-prism',
  },
  {
    id: 'M039',
    title: 'Thesis: The Mechanical Priority of Being',
    mediumUrl: 'https://medium.com/@leonsp3/thesis-the-mechanical-priority-of-being-b80bf91d86db',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'Relational mechanics essay. Sovereignty is pre-relational; relationship is output, not source. Defines resentment as friction from outsourced identity.',
    mirrorUrl: '/essays/medium/thesis-the-mechanical-priority-of-being',
  },
  {
    id: 'M040',
    title: 'The Standing State: A System Where Identity Does Not Move',
    mediumUrl: 'https://medium.com/@leonsp3/the-standing-state-a-system-where-identity-does-not-move-0da866389ff7',
    axis1: 'PLT-COORD',
    axis2: 'VOL-SS',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'Canonical bridge and Plate XI companion. Linguistic expansion of Rank-0 Architecture: identity invariance, gain collapse, admissibility gating, jurisdictional separation, and autonomous restoration.',
    mirrorUrl: '/essays/medium/standing-state-identity-does-not-move',
  },
  {
    id: 'M041',
    title: 'Asynchronous Synthesis',
    mediumUrl: 'https://medium.com/@leonsp3/asynchronous-synthesis-76422af7ce49',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MATH',
    flag: 'M',
    note: 'Mathematical synthesis of invariant stability: Lyapunov contraction, stochastic breakdown thresholds, and phase-lock synchronization under load. Three margins — additive, multiplicative, synchronization — resolve to one structural criterion: λ_min(K_s) > variance injection.',
    mirrorUrl: '/essays/medium/asynchronous-synthesis',
  },
  {
    id: 'M042',
    title: 'The Coherence Layer: Why AI Does Not Need Emotions — It Needs Structure',
    mediumUrl: 'https://medium.com/@leonsp3/the-coherence-layer-why-ai-does-not-need-emotions-it-needs-structure-6fe275f68e27',
    axis1: 'PLT-COORD',
    axis2: 'VOL-SS',
    axis3: 'REG-STRUCT',
    flag: 'M',
    note: 'AI architecture essay. Reframes the emotion-in-AI question as a structural one: systems require admissibility, not affect. Introduces dot-I = 0 (identity anchor), the admissibility set S = {x : Φ(x; I*) ≤ 0}, and the four control structures that translate emotional regulation into architectural primitives.',
    mirrorUrl: '/essays/medium/the-coherence-layer',
  },
  {
    id: 'M043',
    title: 'The Sacred Flame: Sovereign Identity and the Moral Law of Life',
    mediumUrl: 'https://medium.com/@leonsp3/the-sacred-flame-sovereign-identity-and-the-moral-law-of-life-dbcbd77fea78',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'A',
    note: 'Early-corpus Epic Coach Leon essay. Sovereign identity vs external imprinting; Age of Imprint; belief as biological encoding; dopamine as alignment signal. Lineage voice preserved under register lock. Not retrofitted into Rank-0 vocabulary.',
    mirrorUrl: '/essays/medium/sacred-flame-sovereign-identity',
  },
  {
    id: 'M044',
    title: 'The Admissibility Manifesto',
    mediumUrl: 'https://medium.com/@leonsp3/the-admissibility-manifesto-56b8b5d66840',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-SS',
    axis3: 'REG-STRUCT',
    flag: 'A',
    note: 'Canonical structural essay introducing Δ = γ − αₑff as the governing inequality for exploit-pressure containment. Defines OAGI v1.2 safety primitive and extends Standing State into controlled expansion regimes. Glossary-impact event. Companion glossary entry: /system/glossary/admissibility-delta. Companion doctrine: /system/doctrine/admissibility-delta.',
    mirrorUrl: '/essays/medium/admissibility-manifesto',
  },
  {
    id: 'M045',
    title: 'The Standing State of Happiness',
    mediumUrl: 'https://medium.com/@leonsp3/the-standing-state-of-happiness-152387482de0',
    axis1: 'PLT-COORD',
    axis2: 'VOL-SS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Narrative mirror of C013. Happiness is not pursued; it is the felt reflection of K_auto operating without interference under the admissibility gate. ID corrected from stale M043 to M045 so M043 remains The Sacred Flame.',
    mirrorUrl: '/essays/medium/standing-state-of-happiness',
  },
  {
    id: 'M046',
    title: 'The NSRL-12 Framework and the KJV Canonical Stack',
    mediumUrl: 'https://medium.com/@leonsp3/the-nsrl-12-framework-and-the-kjv-canonical-stack-76be7aa18739',
    axis1: 'PLT-COORD',
    axis2: 'VOL-SS',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Structural thesis on systemic closure of The Living Soul. Maps the 66-book KJV canon through twelve invariant functional bands (NSRL-12: Identity · Law · Witness · Judgment · Covenant · Priesthood · Kingship · Wisdom · Prophetic Constraint · Suffering · Redemption · Sabbath). Movement: External Protocol → Internal Invariance → Environmental Saturation. Terminal state: irreversible sabbath. Non-cyclic closure. Lineage preserved. Glossary cross-reference: NSRL-12 entry (M021).',
    mirrorUrl: '/essays/medium/nsrl-12-kjv-canonical-stack',
  },
  {
    id: 'M047',
    title: 'The True Essence of Integrity',
    mediumUrl: 'https://medium.com/@leonsp3/the-true-essence-of-integrity-a-journey-toward-enlightened-consciousness-dae56aa1b8c0',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Integrity as unified alignment across thought, action, and identity. Pre-structural articulation of coherence before formal admissibility framing. Lineage essay (Epic Coach Leon, 2025) preserved in original Romantic Philosophy voice with Hermetic and Biblical references intact. Position in corpus: precursor to admissibility — integrity = undivided state = low contradiction = Φ ≤ 0 emerging implicitly. Register lock: practice / mixed.',
    mirrorUrl: '/essays/medium/true-essence-of-integrity',
  },
  {
    id: '011',
    title: 'The Admissibility Gate',
    mediumUrl: '',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-STRUCT',
    flag: 'M',
    note: 'Identity defines. Admissibility filters. Execution manifests. Defined constraints without evaluated membership have no operative force.',
    mirrorUrl: '/essays/canonical/the-admissibility-gate',
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
  const vol = VOLUMES.find(v => v.code === essay.axis2)
  const reg = REGISTERS.find(r => r.code === essay.axis3)

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
        {vol && <span className="essayTag essayTagVol">{vol.label}</span>}
        {reg && <span className="essayTag essayTagReg">{reg.label}</span>}
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
  const [filterVol, setFilterVol] = useState(null)
  const [filterReg, setFilterReg] = useState(null)
  const [filterFlag, setFilterFlag] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return ESSAYS.filter(e => {
      if (filterPlate && e.axis1 !== filterPlate) return false
      if (filterVol && e.axis2 !== filterVol) return false
      if (filterReg && e.axis3 !== filterReg) return false
      if (filterFlag && e.flag !== filterFlag) return false
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
          <div className="essaySearch">
            <input
              type="text"
              placeholder="Search essays..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="essaySearchInput"
            />
          </div>

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

    </>
  )
}
