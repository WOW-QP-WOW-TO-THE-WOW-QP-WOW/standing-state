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
    symbol: '\\Phi(x)',
    name: 'Completion Functional',
    anchor: 'phi',
    definition:
      'The primary measure of deviation from biological coherence. When \\Phi(x) converges toward K_{\\text{auto}} under reduced load, the system enters the completion state.',
    logic: '\\Phi(x) \\rightarrow K_{\\text{auto}} \\quad \\text{under} \\quad \\Sigma \\downarrow',
    logicLabel: 'Convergence condition — the governing equation of the system.',
    role: 'State variable. Measures how far the system is from its reference state.',
    activation: 'Decreases when \\Sigma \\downarrow and B(t) holds.',
    suppression: 'Remains elevated when load is sustained and cycles do not complete.',
  },
  {
    id: 'sigma',
    symbol: '\\Sigma',
    name: 'Total Integrated Stress Load',
    anchor: 'sigma',
    definition:
      'The integrated sum of mental, physical, and chemical stress running continuously. All three forms converge into a single load variable. The body does not distinguish stress by source — it responds to accumulated signal.',
    logic: '\\Sigma \\uparrow \\implies \\Phi(x) \\uparrow',
    logicLabel: 'Stress amplifies system deviation. Elevated load prevents convergence.',
    role: 'Primary input variable. The master load term.',
    activation: 'Mental stress, physical overload, chemical instability, blood sugar volatility.',
    suppression: 'Reduced by parasympathetic dominance, metabolic pause, sleep, signal correction.',
  },
  {
    id: 'kauto',
    symbol: 'K_{\\text{auto}}',
    name: 'Autophagic Correction Baseline',
    anchor: 'kauto',
    definition:
      'The rate at which the cell identifies damaged components, breaks them down, and recovers raw materials for reuse. The only subtractive term in the governing equation. When K_{\\text{auto}} is active, the system clears and repairs.',
    logic: '\\Sigma \\downarrow \\implies K_{\\text{auto}} \\uparrow \\implies \\Phi(x) \\rightarrow K_{\\text{auto}}',
    logicLabel: 'Reduced load activates correction. Correction enables convergence.',
    role: 'Correction operator. The only term that moves the system toward x^*.',
    activation: 'Low insulin, metabolic pause (fasting window), deep sleep, parasympathetic dominance.',
    suppression: 'Elevated insulin, continuous intake, sustained \\Sigma, mTORC1 activation.',
  },
  {
    id: 'bt',
    symbol: 'B(t)',
    name: 'Boundary Integrity',
    anchor: 'bt',
    definition:
      'The selective permeability of the gut lining, skin barrier, and cellular membranes at time t. Range: [0, 1]. Boundary failure acts as a multiplicative amplifier — it does not add to load, it scales it.',
    logic: '(1 - B(t)) \\uparrow \\implies \\Sigma \\uparrow',
    logicLabel: 'Boundary degradation amplifies total load. Integrity reduction is not additive — it is multiplicative.',
    role: 'Constraint variable. Modulates the effective load on the system.',
    activation: 'Maintained by anti-inflammatory inputs, stable blood glucose, omega-3 membrane architecture.',
    suppression: 'Degraded by processed inputs, toxin exposure, chronic sympathetic activation, blood sugar instability.',
  },
  {
    id: 'xstar',
    symbol: 'x^*',
    name: 'Reference State',
    anchor: 'xstar',
    definition:
      'The invariant biological reference state. Constant for all time. Identity does not drift — only the system\'s capacity to express it does. Pathology degrades expression capacity. It does not corrupt x^*.',
    logic: 'x^* = \\text{constant} \\quad \\forall t',
    logicLabel: 'The reference state is invariant under all conditions. x(t) drifts. x^* does not.',
    role: 'Identity attractor. The terminal condition toward which the system converges when \\Phi(x) \\rightarrow K_{\\text{auto}}.',
    activation: null,
    suppression: null,
  },
]

export const GOVERNING_EQUATION = {
  full: '\\Phi(x) = \\frac{\\Sigma(1 - B(t))}{V_c} - K_{\\text{auto}}',
  convergence: '\\Phi(x) \\rightarrow K_{\\text{auto}} \\quad \\text{under} \\quad \\Sigma \\downarrow',
  coherence: '\\Phi(x) \\leq 0 \\implies x(t) \\rightarrow x^*',
  identity: 'x^* = \\text{constant} \\quad \\forall t',
}

export const AXIOM = 'A becomes A, because A knows it is A.'