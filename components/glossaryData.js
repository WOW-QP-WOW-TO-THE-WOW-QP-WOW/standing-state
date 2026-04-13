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
