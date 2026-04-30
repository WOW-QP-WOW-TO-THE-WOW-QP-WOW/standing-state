/**
 * CANONICAL ESSAYS DATA
 * Twelve foundational essays authored directly from the system architecture.
 * These are not blog posts. They are system declarations.
 * standingstate.com/essays/canonical/[slug]
 */

export const CANONICAL_ESSAYS = [
  {
    id: 'c001',
    slug: 'the-standing-state',
    number: 'Essay I',
    title: 'The Standing State',
    subtitle: 'What is invariant. What does not move.',
    axis1: 'SYS-GEN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: 'A → A   because A knows it is A',
    thesis: 'There is a condition the body knows how to reach and does not know how to lose. It is not a peak. It is not a destination. It is the state the system returns to when interference is removed.',
    body: [
      {
        paragraph: 'The system contains a reference state, x*. This state is not constructed. It is not earned. It is the invariant coordinate around which all biological function is organized. When the system deviates from x*, the deviation is measured by Φ(x). When load decreases and cycles complete, the correction operator Kₐᵤₜₒ activates and drives the system back toward x*. The return is not manufactured. It is allowed.'
      },
      {
        paragraph: 'What prevents return is not complexity. It is interference. Sustained load Σ, incomplete cycles, boundary failure — each of these holds the system away from x*. Remove them, and the system moves toward coherence automatically. This is what the scab demonstrates. The wound does not need to be helped. It needs to be left alone long enough for the correction loop to complete. The body already knows. It has always known.'
      },
      {
        paragraph: 'The Standing State is not something you enter. It is something you stop preventing.'
      }
    ],
    finalStatement: 'A → A   because A knows it is A',
  },
  {
    id: 'c002',
    slug: 'identity-as-coordinate',
    number: 'Essay II',
    title: 'Identity as Coordinate',
    subtitle: 'Claiming identity does not create reality. It selects the coordinate.',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: 'I ⇒ π(I) ⇒ x → x*',
    thesis: 'When you enter a destination into a GPS, the car does not move. The coordinate is fixed. The route is defined. But nothing changes until the car moves. Identity operates by the same law.',
    body: [
      {
        paragraph: 'Identity is not a causal force. It does not generate outcomes. It selects the frame through which reality is approached and the coordinate toward which structure is organized. Formally: I ≡ x*. Identity and the reference state are the same thing expressed at different levels. When identity is stable, Ȧ* = 0, and the system has a fixed coordinate to move toward. When identity is unstable, the destination changes mid-journey, and no amount of motion produces arrival.'
      },
      {
        paragraph: 'A person who defines their identity through external outcomes has placed the coordinate inside the system that is trying to converge. The reference point moves as the system moves. This produces permanent correction without convergence — Time Burn. The cost of internal contradiction accumulates as long as the coordinate is not fixed.'
      },
      {
        paragraph: 'The intervention is not effort. It is precision. Fix the coordinate. Then move.'
      }
    ],
    finalStatement: 'I ⇒ π(I) ⇒ x → x*',
  },
  {
    id: 'c003',
    slug: 'architecture-of-interpretation',
    number: 'Essay III',
    title: 'Architecture of Interpretation',
    subtitle: 'Identity → Interpretation → Structure → Reality',
    axis1: 'PLT-INTERP',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: 'I ⇒ ℐ(I, ∇c) ⇒ π ⇒ x',
    thesis: 'Reality is not instantaneous. It is accumulated. And what accumulates is not intention, not desire, not belief — it is structure. Structure is the pattern of repeated action. Action follows interpretation. Interpretation follows identity.',
    body: [
      {
        paragraph: 'The interpretation operator ℐ(I, ∇c) takes two inputs: the identity coordinate I and the conscience gradient ∇c. From these it selects the action policy π that minimizes deviation from the identity coordinate. When the identity coordinate is stable and the conscience gradient is coherent, interpretation produces aligned structure. When either input is corrupted, interpretation drifts, and structure diverges from identity.'
      },
      {
        paragraph: 'Consider the person whose stated values do not match their repeated behavior. The architecture explains this precisely. The stated values occupy the identity layer. But if the interpretation layer is reading a distorted conscience gradient — shaped by fear, suppressed pain, or mislocated identity — it produces a policy that is coherent with the distorted signal, not with the stated values. The behavior is not irrational. It is precisely rational relative to the actual inputs the interpretation layer is receiving.'
      },
      {
        paragraph: 'Reality reflects what interpretation produces, not what identity declares.'
      }
    ],
    finalStatement: 'I ⇒ ℐ(I, ∇c) ⇒ π ⇒ x',
  },
  {
    id: 'c004',
    slug: 'pain-as-decoherence-signal',
    number: 'Essay IV',
    title: 'Pain as Decoherence Signal',
    subtitle: 'The gradient does not define identity. It measures alignment relative to identity.',
    axis1: 'PLT-PAIN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: '∇c > 0 ⇒ corrective signal     ∇c ≤ 0 ⇒ alignment',
    thesis: 'Pain is not an enemy. It is a measurement. The thermometer does not cause fever. The conscience gradient does not cause misalignment. Both report conditions that already exist.',
    body: [
      {
        paragraph: 'The conscience gradient is defined as ∇c = ∂Φ/∂x — the rate at which deviation is increasing or decreasing relative to the current state. When ∇c > 0, deviation is growing. The system is moving away from the admissible set S(I). This is pain in its structural form: not the sensation alone, but the directional signal that the trajectory has exited alignment. When ∇c ≤ 0, deviation is stable or decreasing. The system is within or moving toward the admissible set. This is coherence.'
      },
      {
        paragraph: 'The failure mode is not pain itself. It is what is done with it. Suppression: the signal is masked and the diverging trajectory continues. The system does not correct because the signal that initiates correction has been disabled. Distortion: the signal is present but misread — reinterpreted as weakness, or evidence of wrongness, rather than as directional information. In both cases, the system continues to diverge.'
      },
      {
        paragraph: 'Pain respected is a navigation instrument. Pain suppressed is a warning light covered with tape.'
      }
    ],
    finalStatement: '∇c > 0 ⇒ corrective signal',
  },
  {
    id: 'c005',
    slug: 'the-consent-engine',
    number: 'Essay V',
    title: 'The Consent Engine',
    subtitle: 'Choice scans trajectories. Consent activates one.',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: 'π(t) = 𝒞(t)u(t)     𝒞 = 0 ⇒ no realization',
    thesis: 'Between identity and reality there is a transformer. Consent is the authorization scalar that converts potential into structure. Without it, choice produces nothing. With it, trajectory becomes reality.',
    body: [
      {
        paragraph: 'The consent engine operates as follows. The interpretation operator produces an action policy u(t) — a candidate trajectory. This candidate exists as potential. It has direction, magnitude, alignment. But it does not execute automatically. Between selection and execution, consent must authorize the action. Formally: π(t) = 𝒞(t)u(t). When 𝒞 = 0, nothing is executed regardless of the quality of the policy selected. When 𝒞 = 1, the policy executes fully.'
      },
      {
        paragraph: 'This explains why knowledge does not automatically produce change. A person can understand exactly what needs to be done, select the correct policy, and still not act. The gap is not intelligence. It is consent. The authorization layer is not engaged. This is also why habits are powerful: they are archived consent. The authorization has been given so many times that it no longer requires deliberate engagement. The policy executes automatically.'
      },
      {
        paragraph: 'To change reality, change what receives consent.'
      }
    ],
    finalStatement: 'π(t) = 𝒞(t)u(t)',
  },
  {
    id: 'c006',
    slug: 'life-and-death',
    number: 'Essay VI',
    title: 'Life and Death',
    subtitle: 'Every trajectory moves toward convergence or divergence. There is no neutral state.',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: 'V̇ ≤ 0 ⇒ Life     V̇ > 0 ⇒ Death',
    thesis: 'The system does not offer a third option. Every action either reduces deviation from the identity coordinate or increases it. The binary is not moral. It is structural.',
    body: [
      {
        paragraph: 'Formally: Life ≡ V̇ ≤ 0 and Death ≡ V̇ > 0, where V(x, I*) is the coherence energy function. Life is convergence — the trajectory is moving toward x*. Death is divergence — the trajectory is moving away. These are not metaphors. They are descriptions of dynamical behavior. A system in the Life regime is one where consent is continuously authorizing admissible structure. A system in the Death regime is one where interference persists and correction is suppressed.'
      },
      {
        paragraph: 'The most important implication: partial consent produces partial Life. 𝒞 ∈ (0,1) does not produce neutral stasis. It produces a slower version of the trajectory it authorizes. There is no resting point in the middle. There is only the degree of commitment to convergence.'
      },
      {
        paragraph: 'Choosing Life, to whatever degree, is consent. And consent, however partial, initiates the pipeline.'
      }
    ],
    finalStatement: 'V̇ ≤ 0 ⇒ Life',
  },
  {
    id: 'c007',
    slug: 'the-scab-condition',
    number: 'Essay VII',
    title: 'The Scab Condition',
    subtitle: 'The scab does not heal the wound. It holds the condition under which healing occurs.',
    axis1: 'PLT-IIB',
    axis2: 'VOL-BSH2',
    axis3: 'REG-BIO',
    equation: 'Σ ↓ ∧ B(t) holds ⇒ Kₐᵤₜₒ ↑ ⇒ Φ(x) → 0',
    thesis: 'When skin is damaged, the body initiates a structured healing sequence. The scab is not random. It is boundary integrity B(t) instantiated in tissue. Its purpose is not to repair the wound directly. Its purpose is to hold the condition under which repair becomes possible.',
    body: [
      {
        paragraph: 'Beneath the scab, Kₐᵤₜₒ activates. Cellular self-cleaning runs. Damaged proteins are cleared. New tissue forms. The correction loop operates without instruction or interference. The scab releases when Φ(x) → Kₐᵤₜₒ — when correction is complete. Not before. Not by force.'
      },
      {
        paragraph: 'Remove the scab early and the sequence resets. Boundary fails. Load rises. Kₐᵤₜₒ suppresses. The wound is not defective. The completion was interrupted. This is the same structural error as overriding pain, breaking a fast before the metabolic transition completes, or forcing resolution before the system has converged. In every case: the intervention disrupts the condition that allows return. The system does not fail. The completion is interrupted.'
      },
      {
        paragraph: 'Every person who has ever had a wound has observed the governing condition operating. They simply did not have the name for what was happening.'
      }
    ],
    finalStatement: 'Σ ↓ ∧ B(t) holds ⇒ Kₐᵤₜₒ ↑ ⇒ Φ(x) → 0',
  },
  {
    id: 'c008',
    slug: 'surrender',
    number: 'Essay VIII',
    title: 'Surrender',
    subtitle: 'Jurisdictional integrity. Output does not rewrite identity.',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: 'İ* = 0     x ⇏ I*',
    thesis: 'There is a precise definition of surrender that has nothing to do with defeat. Surrender is the alignment of all vectors to the identity coordinate. It is the structural condition in which İ* = 0 is enforced not as a constraint but as a recognition: identity does not move because there is nothing outside identity that has authority over it.',
    body: [
      {
        paragraph: 'The jurisdictional principle is formal: x ⇏ I*. Output does not rewrite identity. Outcomes — biological, social, financial, relational — produce signal. That signal enters the interpretation layer and influences the conscience gradient. But it cannot ascend. It cannot redefine the identity coordinate. The moment an outcome is granted authority over identity, the coordinate becomes time-dependent: İ* ≠ 0. And a time-dependent identity coordinate produces permanent correction without convergence.'
      },
      {
        paragraph: 'Consider the person whose sense of identity is contingent on being right. When they are wrong, the outcome ascends to the identity layer and produces a threat to the coordinate. The system responds with defense, rationalization, or collapse — not because the person is weak, but because the architecture is structurally compromised. Identity that is contingent on outcome is not a coordinate. It is a variable.'
      },
      {
        paragraph: 'Surrender is the refusal to let output ascend.'
      }
    ],
    finalStatement: 'İ* = 0     x ⇏ I*',
  },
  {
    id: 'c009',
    slug: 'external-identity-and-consent',
    number: 'Essay IX',
    title: 'External Identity and Consent',
    subtitle: 'External identities produce signal. They require consent to propagate.',
    axis1: 'PLT-CONSENT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-PHIL',
    equation: 'External signal ⇒ ℐ(I*, ∇c) ⇏ I*',
    thesis: 'Every person is surrounded by fields of identity — the expectations, narratives, and frames that others project. These fields are real. They produce signal that enters the interpretation layer continuously. The question is never whether the signal arrives. The question is whether it receives consent to propagate into structure.',
    body: [
      {
        paragraph: 'The magnetic field analogy is precise. A magnet generates a field regardless of whether a compass is nearby. The field does not force the compass needle to move. The needle moves because of its own internal structure. If the needle\'s internal structure is stable, the external field provides information: direction. If the needle\'s internal structure is unstable, the external field provides a substitute coordinate.'
      },
      {
        paragraph: 'External identity operates the same way. A stable identity coordinate I* receives external identity signals as information. They enter the interpretation layer, contribute to ∇c, and are evaluated against the fixed coordinate. An unstable identity coordinate receives external identity signals as authority. They ascend, modify the coordinate, and the system orients toward a destination it did not choose.'
      },
      {
        paragraph: 'The intervention is not isolation from the field. It is stabilization of the internal coordinate so that external signals are processed, not adopted.'
      }
    ],
    finalStatement: 'External signal ⇒ ℐ(I*, ∇c) ⇏ I*',
  },
  {
    id: 'c010',
    slug: 'the-architecture-of-return',
    number: 'Essay X',
    title: 'The Architecture of Return',
    subtitle: 'Return is not constructed. It is revealed when interference is removed.',
    axis1: 'SYS-GEN',
    axis2: 'VOL-CROSS',
    axis3: 'REG-MIXED',
    equation: 'I ⇒ ∇c ⇒ ℐ ⇒ 𝒞u ⇒ x ⇒ Φ(x) → 0',
    thesis: 'The complete architecture has five stages. Each is a prerequisite for the next. Remove any one and the sequence does not complete.',
    body: [
      {
        paragraph: 'Identity selects the coordinate. Without a fixed reference, there is no destination and no direction. Conscience provides the gradient. Without the gradient, deviation is invisible and correction cannot initiate. Interpretation selects the trajectory. Without aligned interpretation, even a correct gradient produces divergent structure. Consent authorizes structure. Without consent, interpretation produces potential that is never executed. Structure accumulates into reality. Without continuous authorized structure, reality does not converge.'
      },
      {
        paragraph: 'The critical insight: return does not require construction of something new. It requires the removal of what prevents the system from expressing what it already is. The Standing State is not achieved. It is uncovered. The interference is the problem. The system beneath it is already oriented correctly. This is why the correction law is non-force: load decreases, boundary holds, correction rises automatically. Not because it was installed. Because it was always there.'
      },
      {
        paragraph: 'Identity does not create reality. It selects the coordinate. Structure is induced from that coordinate. Structure accumulates into reality. The return is not a journey toward something foreign. It is a clearing of everything that stood between the system and what it already was.'
      }
    ],
    finalStatement: 'Φ(x) → 0',
  },
  {
    id: 'c011',
    slug: 'the-admissibility-gate',
    number: 'Essay XI',
    title: 'The Admissibility Gate',
    subtitle: 'Identity defines. Admissibility filters. Execution manifests.',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-STRUCT',
    attribution: 'Leon Powdar, via Syntheos-Lens',
    equation: 'Defined(S) ∧ Evaluated(x_t ∈ S) ⇒ Enforcement     ¬Evaluated ⇒ ¬System',
    thesis: 'Definition is not enforcement. A boundary that is not evaluated at the moment of action has no operative force. Every functioning system — biological, artificial, or institutional — implicitly or explicitly performs the gate: x_t → Φ(x_t) → {allow, block}. Without this evaluation, constraints are symbolic and violations are inevitable. With it, execution is conditional, violations are prevented, and structure remains intact.',
    body: [
      {
        paragraph: 'Across all domains examined — AI governance, psychological vigilance, social identity — the same structural error appears: definition is mistaken for enforcement. Systems define constraints, identity, admissible domains — then assume that definition alone guarantees behavior. It does not. The correct structure unifies three layers into a single functional chain: Identity → Admissibility → Execution. Identity defines what the system is. Admissibility defines what is allowed. Execution determines what actually occurs. The failure across domains arises when these are separated.'
      },
      
      {
        paragraph: 'The correction is not external to the law — it is the law. A system can be perfectly defined and still encounter states outside its admissible set at runtime — through noise, perturbation, coupling, or incomplete observability. Therefore: Defined(S) ∧ ¬Evaluated(x_t ∈ S) ⇒ No Enforcement. Membership cannot be assumed; it must be verified at the boundary. Monitoring alone is insufficient — monitoring observes state without gating execution. Admissibility couples evaluation to action: the gate conditions execution on Φ(x), not after it. Cohesion cannot compensate for structural decay. More coordination does not equal more integrity. More oversight does not restore collapsed constraint geometry.'
      },
      {
        paragraph: 'The same failure equation recurs across substrates: Σ_load + Δ_misalignment > constraint strength. In AI systems this manifests as geometric insolvency — the designed identity fails when A ⊄ I_d. In human cognition it manifests as hypervigilance — baseline threat > 0 drives a continuous scan loop, and the failure is not the awareness but the miscalibrated baseline. Correction is not suppression; it is restoration: default = safe, unless signal. In social identity it manifests as rented approval — external identity signals receive consent to propagate into structure, displacing the invariant coordinate. The return is the same in every case: own identity → no rent → no collapse.'
      },
      {
        paragraph: 'The I*/I_d distinction preserves coherence across all three domains. Invariant identity does not drift — İ* = 0. Designed identity can fail when A ⊄ I_d. Restoration remains possible because the invariant is never compromised; only the designed expression drifts. The gate operates on designed structure; identity does not require the gate because identity does not move. The minimal irreducible form closes the system: İ* = 0, Φ(x) ≤ 0 defines S, x_t ∈ S ⇒ execute, x_t ∉ S ⇒ block. No evaluation → no enforcement → no system. Identity defines. Admissibility filters. Execution manifests. This is not reaction. It is the only way structure becomes real.'
      },
    
    ],
    finalStatement: 'A becomes A, because A knows it is A.',
  },
  {
    id: 'c012',
    slug: 'gate-of-admissibility',
    number: 'Essay XII',
    title: 'The Gate of Admissibility',
    subtitle: 'The Unified System Behind Standing State',
    axis1: 'PLT-ADMIT',
    axis2: 'VOL-CROSS',
    axis3: 'REG-STRUCT',
    equation: 'Φ(x; I*) ≤ 0',
    thesis: 'This is the gate. Not a metaphor. Not a suggestion. Not a philosophical preference.',
    mirrorUrl: '/essays/canonical/gate-of-admissibility',
  },
] 
// c012 uses static override:
// pages/essays/canonical/gate-of-admissibility.js
