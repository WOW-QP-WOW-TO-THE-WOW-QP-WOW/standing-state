/**
 * GATES DATA — FIVE REGISTER ENTRY POINTS
 * standingstate.com/system/gates
 *
 * Each gate is an entry point into one register of the system.
 * The invariant was never divided. Only the lenses were.
 */

export const gateCategories = [
  {
    id: 'mathematical',
    title: 'MATHEMATICAL',
    slug: 'mathematical',
    equation: 'Σ↓ ⇒ Φ(x) → K_auto',
    description: 'Convergence to invariant',
    summary:
      'Formal models, governing conditions, plates, and mathematical expressions of closure.',
    items: [
      { title: 'Governing Condition', href: '/system/plates/plate-i' },
      { title: 'Safe-Set Geometry', href: '/system/plates/plate-ii' },
      { title: 'Glossary', href: '/system/glossary' },
    ],
  },
  {
    id: 'biological',
    title: 'BIOLOGICAL',
    slug: 'biological',
    equation: 'Insulin ↓ · Autophagy ↑',
    description: 'Homeostatic completion',
    summary:
      'Biological Sabbath, fasting logic, repair states, and physiology under reduced interference.',
    items: [
      { title: 'Biological Sabbath', href: '/#corpus' },
      { title: 'Canonical Plates', href: '/system/plates' },
    ],
  },
  {
    id: 'psychological',
    title: 'PSYCHOLOGICAL',
    slug: 'psychological',
    equation: 'Conflict ↓',
    description: 'Resolution',
    summary:
      'Identity stabilization, perception ordering, and reduction of interior interference.',
    items: [
      { title: 'System Overview', href: '/system/glossary' },
      { title: 'Glossary', href: '/system/glossary' },
    ],
  },
  {
    id: 'philosophical',
    title: 'PHILOSOPHICAL',
    slug: 'philosophical',
    equation: 'Self-consistency.',
    description: 'Coherence',
    summary:
      'Identity, invariance, coherence, and the standing state as a unified framework.',
    items: [
      { title: 'The Corpus', href: '/#corpus' },
      { title: 'The System', href: '/system/glossary' },
    ],
  },
  {
    id: 'spiritual',
    title: 'SPIRITUAL',
    slug: 'spiritual',
    equation: '"I am" — Stillness',
    description: 'Absence of interference',
    summary:
      'Stillness, identity, Sabbath, and the non-divided ground of alignment.',
    items: [
      { title: 'The Corpus', href: '/#corpus' },
      { title: 'System Plates', href: '/system/plates' },
    ],
  },
]

export function getGateBySlug(slug) {
  return gateCategories.find((gate) => gate.slug === slug)
}
