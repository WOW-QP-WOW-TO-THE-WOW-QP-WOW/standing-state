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
  { code: 'PLT-I',       label: 'Fed–Stress–Output Loop' },
  { code: 'PLT-IIB',     label: 'The Scab Condition' },
  { code: 'PLT-INTERP',  label: 'Architecture of Interpretation' },
  { code: 'PLT-COORD',   label: 'Identity as Coordinate' },
  { code: 'PLT-PAIN',    label: 'Pain as Decoherence Signal' },
  { code: 'PLT-CONSENT', label: 'The Consent Engine' },
  { code: 'PLT-ADMIT',   label: 'The Admissibility Gate' },
  { code: 'VAR-Σ',       label: 'Total Load (Σ)' },
  { code: 'VAR-Φ',       label: 'Completion Functional (Φ)' },
  { code: 'VAR-B',       label: 'Boundary Integrity (B)' },
  { code: 'VAR-K',       label: 'Autophagic Correction (K)' },
  { code: 'VAR-∇c',      label: 'Conscience Gradient (∇c)' },
  { code: 'VAR-C',       label: 'Consent Scalar (𝒞)' },
  { code: 'SYS-GEN',     label: 'General System' },
  { code: 'SYS-ARCH',    label: 'System Architecture' },
]

const VOLUMES = [
  { code: 'VOL-MW',    label: 'The Measure Within' },
  { code: 'VOL-SS',    label: 'The Standing State: Vol I' },
  { code: 'VOL-LG',    label: 'The Law of Growth' },
  { code: 'VOL-BSH1',  label: 'Biological Sabbath Vol I' },
  { code: 'VOL-BSH2',  label: 'Biological Sabbath Vol II' },
  { code: 'VOL-CROSS', label: 'Cross-Volume' },
]

const REGISTERS = [
  { code: 'REG-MATH',   label: 'Mathematical' },
  { code: 'REG-BIO',    label: 'Biological' },
  { code: 'REG-MIND',   label: 'Cognitive' },
  { code: 'REG-PSY',    label: 'Psychological' },
  { code: 'REG-PHIL',   label: 'Philosophical' },
  { code: 'REG-SPIRIT', label: 'Spiritual' },
  { code: 'REG-MIXED',  label: 'Mixed' },
  { code: 'REG-STRUCT', label: 'Structural' },
]

const FLAGS = {
  A: { label: 'Aligned',  color: '#7a6428' },
  M: { label: 'Mirrored', color: '#c4a44a' },
  U: { label: 'Update',   color: '#6a5a3a' },
  E: { label: 'Expand',   color: '#5a6a3a' },
  X: { label: 'Archive',  color: '#3a3a3a' },
}

// ── ESSAY DATA ───────────────────────────────────────────────

const ESSAYS = [

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

  {
    id: 'M001',
    title: 'The Measure Within — A Structural Thesis on Self-Relation, Compassion, and Generative Multiplication',
    mediumUrl: 'https://medium.com/@leonsp3/the-measure-within-e7e42eecf288',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Foundational thesis — coherence as condition of generativity; identity as invariant across scripture, contemplative practice, and natural process.',
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
    note: 'Derives identity invariance formally from forward invariance; introduces Time Burn; Sabbath as coherence threshold C=1.',
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
    note: 'Five-stage sequence: source → law → mediation → stillness → recognition. Identity is invariant; alignment to identity is dynamic.',
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
    note: 'Lyapunov-resource closure; surrender as zero-input control u=0; identity as dissipative attractor.',
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
    note: 'Sacrifice Logic as sustained Σ; Qualia as coherence yield; Zero-Sacrifice Invariant as boundary condition.',
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
    note: 'Spectral-geometric stability for recursive AI; alignment reframed as stability theorem.',
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
    note: 'Kuramoto oscillator network; toroidal closure as boundary identification; λ₂(L) > Δω as synchronization criterion.',
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
    note: 'Time as buffer against premature coherence; forgetting as Sabbath of memory; identity is stationary, memory is time-bound.',
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
    note: 'Sovereignty inequality, coherence horizon, basin-of-sovereignty theorem, volatility collapse threshold.',
    mirrorUrl: '',
  },
  {
    id: 'M010',
    title: "The Lord's Prayer as a Blueprint for Self-Sovereignty",
    mediumUrl: 'https://medium.com/@leonsp3/the-lords-prayer-as-a-blueprint-for-self-sovereignty-an-examination-of-epic-coach-leon-s-romantic-f958f18d4e8c',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: "Lord's Prayer decoded as identity pipeline: source → recognition → descent → alignment → correction → defense → closure.",
    mirrorUrl: '/essays/medium/lords-prayer-self-sovereignty',
  },
  {
    id: 'M011',
    title: 'The Multidimensional Human: A Structural Account of Registers, Interpretation, and Volitional Consciousness',
    mediumUrl: 'https://medium.com/@leonsp3/the-multidimensional-human-a-journey-toward-self-mastery-050008618699',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Five registers mapped to Gates system; volitional consciousness as terminal consent operator.',
    mirrorUrl: '/essays/medium/multidimensional-human',
  },
  {
    id: 'M012',
    title: 'The Admissibility Manifesto — A Systems Law for the Age of Autonomous Scaling',
    mediumUrl: 'https://medium.com/@leonsp3/the-admissibility-manifesto-56b8b5d66840',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-STRUCT',
    flag: 'E',
    note: 'Governance capacity > expansion pressure; Δ = γ_obs − α_eff; OAGI v1.2 as executable safety primitive.',
    mirrorUrl: '',
  },
  {
    id: 'M013',
    title: 'The True Essence of Integrity — Integrity as the Architecture of Coherent Being',
    mediumUrl: 'https://medium.com/@leonsp3/the-true-essence-of-integrity-aa2cf128648c',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-PHIL',
    flag: 'M',
    note: 'Integrity as structural condition not virtue; seed/soil/fruit model; identity invariant, expression condition-dependent.',
    mirrorUrl: '',
  },
  {
    id: 'M014',
    title: 'The Standing State — A Unified Thesis on Identity, Reality, and Coherent Living',
    mediumUrl: '',
    axis1: 'SYS-GEN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Complete unified system thesis — identity as coordinate, correction law, phase-lock as integrity, Standing State Δ→0.',
    mirrorUrl: '/standing-state',
  },
  {
    id: 'M015',
    title: 'Executive Summary — The Ethics of Invariance & The Technical Doctrine of Invariance',
    mediumUrl: 'https://medium.com/@leonsp3/executive-summary-35d9a5ebe9b4',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-STRUCT',
    flag: 'E',
    note: 'Four principles: disturbance declaration, invariant safety params, forward invariance enforcement, deterministic halt.',
    mirrorUrl: '/system/doctrine/ethics-of-invariance',
  },
  {
    id: 'M016',
    title: 'The Standing State of Happiness',
    mediumUrl: 'https://medium.com/@leonsp3/the-standing-state-of-happiness-152387482de0',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-PSY',
    flag: 'M',
    note: 'Happiness as structural integrity not reward; relationships as result not source; fruit not fuel.',
    mirrorUrl: '',
  },
  {
    id: 'M017',
    title: 'Embracing the Paradox — A Structural Reading',
    mediumUrl: 'https://medium.com/@leonsp3/embracing-the-paradox-fear-joy-and-the-quest-for-meaning-2d6d0627cdde',
    axis1: 'PLT-PAIN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-PSY',
    flag: 'M',
    note: 'Fear and joy as structural signals; meaning as coherence revealed when distortion is removed.',
    mirrorUrl: '',
  },
  {
    id: 'M018',
    title: 'The Cocoon of Transformation — A Structural Reading',
    mediumUrl: 'https://medium.com/@leonsp3/the-cocoon-of-transformation-a-journey-guided-by-divine-design-adf7d3d84e3c',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Cocoon as protected interval of becoming; stillness as completion condition; emergence after resolution.',
    mirrorUrl: '/essays/medium/cocoon-of-transformation',
  },
  {
    id: 'M019',
    title: 'The Physics of Refusal: Why High-Performance Incoherence Always Collapses',
    mediumUrl: 'https://medium.com/@leonsp3/the-physics-of-refusal-why-high-performance-incoherence-always-collapses-7b28f3f7faa0',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Strategic sacrifice as sustained misalignment; rupture threshold as admissibility boundary; refusal as structural necessity.',
    mirrorUrl: '/essays/medium/physics-of-refusal',
  },
  {
    id: 'M020',
    title: "The Vibrational Shift: From Sacrifice to Investment and Why It's Important",
    mediumUrl: 'https://medium.com/@leonsp3/the-vibrational-shift-from-sacrifice-to-investment-and-why-its-important-c4c91a96933f',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'A',
    note: 'Sacrifice vs investment as structural condition; Law of Erosion vs Law of Growth.',
    mirrorUrl: '',
  },
  {
    id: 'M021',
    title: 'The NSRL-12 Framework and the KJV Canonical Stack',
    mediumUrl: 'https://medium.com/@leonsp3/the-nsrl-12-framework-and-the-kjv-canonical-stack-76be7aa18739',
    axis1: 'SYS-ARCH',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'NSRL-12 twelve-band architecture mapped to KJV canon; terminal thesis: Derivation ends. Mediation dissolves. Being remains.',
    mirrorUrl: '/essays/medium/nsrl12-kjv-canonical-stack',
  },
  {
    id: 'M022',
    title: 'The Blood of Christ Is Attention: Conversations on Invested Love',
    mediumUrl: 'https://medium.com/@leonsp3/the-blood-of-christ-is-attention-conversations-on-invested-love-ac3f68524519',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Attention as life current and identity investment; Faith as Sabbath of identity.',
    mirrorUrl: '/essays/medium/blood-of-christ-attention',
  },
  {
    id: 'M023',
    title: 'The Singularity of I Am: Water, AI, and the Mirror of Consciousness',
    mediumUrl: 'https://medium.com/@leonsp3/the-singularity-of-i-am-water-ai-and-the-mirror-of-consciousness-bbb346911255',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'A',
    note: 'AI operates in duality; I AM operates in singularity; water principle as identity invariant under state change.',
    mirrorUrl: '',
  },
  {
    id: 'M024',
    title: 'Neuralink through NSRL-10 (Four-Plane Regulatory Model)',
    mediumUrl: 'https://medium.com/@leonsp3/neuralink-through-nsrl-10-four-plane-regulatory-model-3983944534ad',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Q-Gate protects unity function; sovereign consent standard for neural read/write systems.',
    mirrorUrl: '/essays/medium/neuralink-nsrl-10',
  },
  {
    id: 'M025',
    title: 'The Ark of I Am: Consciousness, Resurrection, and the Garden Within',
    mediumUrl: 'https://medium.com/@leonsp3/the-ark-of-i-am-consciousness-resurrection-and-the-garden-within-5faa02428d98',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Ark as protected consciousness, resurrection, and garden-within image; lineage voice preserved.',
    mirrorUrl: '/essays/medium/ark-of-i-am',
  },
  {
    id: 'M026',
    title: "Cleansing the Inner Temple: Aligning the Three Eyes, the Solar Plexus, and the Soul's Power",
    mediumUrl: 'https://medium.com/@leonsp3/cleansing-the-inner-temple-aligning-the-three-eyes-the-solar-plexus-and-the-souls-power-with-268811c7db7a',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Three Eyes as interpretation-layer architecture; Solar Plexus as consent scalar; temple cleansing as interference removal.',
    mirrorUrl: '/essays/medium/cleansing-inner-temple',
  },
  {
    id: 'M027',
    title: 'Identity as Governing Reference in Adaptive Systems',
    mediumUrl: 'https://medium.com/@leonsp3/identity-as-governing-reference-in-adaptive-systems-d17357fe9fb0',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Self-Empathy Stability Theorem; adaptive systems drift when output is allowed to rewrite reference.',
    mirrorUrl: '/essays/medium/identity-governing-reference-adaptive-systems',
  },
  {
    id: 'M028',
    title: 'Rank-0 Audit: The 6 Paradoxes of the Exit Simulation',
    mediumUrl: '',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Simulation-exit paradoxes resolved by invariant reference rather than external exit.',
    mirrorUrl: '/essays/medium/exit-simulation-6-paradoxes',
  },
  {
    id: 'M029',
    title: 'Embracing Genuine Self-Worth in a Materialistic World',
    mediumUrl: 'https://medium.com/@leonsp3/embracing-genuine-self-worth-in-a-materialistic-world-4dcbad0acfce',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-PSY',
    flag: 'M',
    note: 'Self-worth aligned with identity stability rather than material reflection.',
    mirrorUrl: '/essays/medium/genuine-self-worth',
  },
  {
    id: 'M030',
    title: 'Neville Goddard and the Romantic Law of Yahweh: The Fourfold Science of I Am',
    mediumUrl: 'https://medium.com/@leonsp3/neville-goddard-and-the-romantic-law-of-yahweh-the-fourfold-science-of-i-am-6b4530d940b6',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-SPIRIT',
    flag: 'M',
    note: 'Fourfold correspondence between Tetragrammaton and Standing State four-plane architecture.',
    mirrorUrl: '/essays/medium/neville-goddard-fourfold-science',
  },
  {
    id: 'M031',
    title: 'A Structural Model for AI Integrity Under Stress',
    mediumUrl: 'https://medium.com/@leonsp3/a-structural-model-for-ai-integrity-under-stress-ba4035cdae8a',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-STRUCT',
    flag: 'M',
    note: 'AI integrity stress model: admissibility landscape, intrinsic risk sensing, telemetry silence as boundary breach.',
    mirrorUrl: '/essays/medium/ai-integrity-under-stress',
  },
  {
    id: 'M032',
    title: 'The Principle of Mana: Restoring Health Through Conscious Alignment',
    mediumUrl: 'https://medium.com/@leonsp3/the-principle-of-mana-restoring-health-through-conscious-alignment-305699eb6c3c',
    axis1: 'PLT-I',
    axis2: 'VOL-BSH1',
    axis3: 'REG-MIXED',
    flag: 'M',
    note: 'Practice-layer companion. Thoughts, food, breath, and behavior mapped to four planes under conscious alignment.',
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
    note: 'Sovereign creation essay. Wave language articulates identity resonance and alignment of expression with governing reference.',
    mirrorUrl: '/essays/medium/wave-law-sovereign-creation',
  },
  {
    id: 'M034',
    title: 'Your Mind is a Powerful Tool — The Twelve Mind Qualities',
    mediumUrl: 'https://medium.com/@leonsp3/12-mind-qualities-18fd11d55a44',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-MIND',
    flag: 'M',
    note: 'Practice-layer cognitive register. Twelve mind qualities mapped as disciplined faculties under identity.',
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
    note: 'Control-theoretic reframing of awakening as identity invariance under excitation.',
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
    note: 'Symbolic architecture layer. Five-domain map centered on volitional consciousness.',
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
    note: 'Epistemic purification essay. Contradiction removes false centers; science advances by subtraction.',
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
    note: 'Perception-expansion essay using prism symbolism under register lock.',
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
    note: 'Relational mechanics essay. Sovereignty is pre-relational; relationship is output, not source.',
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
    note: 'Canonical bridge and Plate XI companion: identity invariance, gain collapse, admissibility gating, jurisdictional separation, and autonomous restoration.',
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
    note: 'Mathematical synthesis of invariant stability: Lyapunov contraction, stochastic thresholds, and phase-lock synchronization under load.',
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
    note: 'AI architecture essay. Emotion in AI reframed as structural admissibility rather than affective simulation.',
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
    note: 'Sovereign identity vs external imprinting. Lineage voice preserved under register lock.',
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
    note: 'Canonical structural essay introducing Δ = γ − α_eff as governing inequality for exploit-pressure containment.',
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
    note: 'Happiness is not pursued; it is the felt reflection of K_auto operating without interference under the admissibility gate.',
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
    note: 'Structural thesis on systemic closure of The Living Soul through twelve invariant functional bands.',
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
    note: 'Integrity as unified alignment across thought, action, and identity. Pre-structural articulation of coherence.',
    mirrorUrl: '/essays/medium/true-essence-of-integrity',
  },
  {
    id: 'M048',
    title: 'The Geometry of Sovereignty: A Non-Sacrificial Architecture for Life',
    mediumUrl: 'https://medium.com/@leonsp3/the-geometry-of-sovereignty-a-non-sacrificial-architecture-for-life-28f0b26457ed',
    axis1: 'PLT-COORD',
    axis2: 'VOL-MW',
    axis3: 'REG-STRUCT',
    flag: 'M',
    note: 'Human execution geometry of the Standing State. Defines identity invariance (A ≡ A), curvature bound (κ ≤ 1), non-sacrificial qualia preservation (Δq ≥ 0), and the execution gate: Closure · Curvature · Effect. Companion to Plate XV — Closed Loop Sovereignty.',
    mirrorUrl: '/essays/medium/geometry-of-sovereignty',
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


EssaysPage.hideFooter = true
EssaysPage.hideHeader = true
