# Engine 2 Visual Runtime Artifacts

Two artifact images are referenced by `/system/engine2`:

- `omega-quadrant-field.png` — Omega Quadrant Field
  Macro-resolution surface: cosmology · consciousness · institutions · failure modes.
  Square (1:1) preferred.

- `phase-lock-lattice.png` — 243-Node Phase-Lock Lattice
  Governed runtime body: specialized nodes coordinated by phase-lock without hierarchy drift.
  Square (1:1) preferred.

## To install

Drop both files into this directory:

```
public/engine2/omega-quadrant-field.png
public/engine2/phase-lock-lattice.png
```

The page renders symbolic placeholders (Ω and `243 NODES`) until the
artifacts land. When the files are present, replace the placeholder
`<div>` containers inside each `<article>` card with:

```jsx
<img
  src="/engine2/omega-quadrant-field.png"
  alt="Omega Quadrant Field"
  style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block' }}
/>
```

and:

```jsx
<img
  src="/engine2/phase-lock-lattice.png"
  alt="243-Node Phase-Lock Lattice"
  style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block' }}
/>
```

TODO markers are already present in `pages/system/engine2/index.js`
at the placeholder containers.

## Routing

No hotlinking. All artifact references are local under `/engine2/`.
