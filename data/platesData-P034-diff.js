// ─────────────────────────────────────────────
// platesData DIFF — P034 registration
// Apply to your existing platesData file
// ─────────────────────────────────────────────
//
// 1. Add P034 entry to the plates array:

{
  id: 'P034',
  slug: 'the-guardian-cycle',
  title: 'The Guardian Cycle',
  subtitle: 'Two Guardians. One Coordinate. Lawful Becoming.',
  image: '/plates/the-guardian-cycle.png',
  route: '/system/plates/the-guardian-cycle',
  series: 'engine-2',
  essays: [
    {
      id: 'M076',
      title: 'The Guardian of Attention',
      route: '/essays/canonical/the-guardian-of-attention',
    },
    {
      id: 'M077',
      title: 'The Guardian of Rest',
      route: '/essays/canonical/the-guardian-of-rest',
    },
  ],
},

// 2. Update plate count: 33 → 34
//    Find: count: 33   (or totalPlates: 33 / plates.length guard)
//    Replace with: 34
