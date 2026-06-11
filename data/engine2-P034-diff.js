// ─────────────────────────────────────────────
// engine2/index.js DIFF — P034 plate link
// ─────────────────────────────────────────────
//
// In your Engine 2 page, add or update the plates section.
// If a plates array already exists, append P034.
// If linking individually, add:

// In the plates/visuals section of engine2/index.js:
{
  id: 'P034',
  title: 'The Guardian Cycle',
  subtitle: 'Two Guardians. One Coordinate. Lawful Becoming.',
  route: '/system/plates/the-guardian-cycle',
  image: '/plates/the-guardian-cycle.png',
},

// ─────────────────────────────────────────────
// essays/series/engine-2 DIFF — P034 plate link
// ─────────────────────────────────────────────
//
// In the Engine 2 series landing page, add plate reference:

{
  type: 'plate',
  id: 'P034',
  title: 'The Guardian Cycle',
  subtitle: 'Two Guardians. One Coordinate. Lawful Becoming.',
  route: '/system/plates/the-guardian-cycle',
},
