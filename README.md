# Standing State Press — standingstate.com

Next.js + KaTeX site for Standing State Press.

## Stack

- Next.js 14 (Pages Router)
- KaTeX (server-side rendering via `katex` npm package)
- EB Garamond + Cinzel via Google Fonts
- CSS Modules via globals.css
- Vercel deployment

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to vercel.com → New Project → Import from GitHub
3. Select the repository → Deploy
4. Add custom domain: standingstate.com

## Add Domain (GoDaddy → Vercel)

In Vercel dashboard → Project → Settings → Domains:
- Add: standingstate.com
- Add: www.standingstate.com

Vercel provides two DNS records. Add them in GoDaddy DNS:
- A record: @ → 76.76.21.21
- CNAME: www → cname.vercel-dns.com

## Update Volume II when published

In `pages/index.js`, find the Volume V corpus entry:
- Change `href: null` to `href: 'https://amazon.com/...'`
- The row automatically becomes a link and the In Production badge disappears.

## File Structure

```
standingstate-next/
├── pages/
│   ├── _app.js          # App wrapper
│   ├── _document.js     # Head, fonts
│   └── index.js         # Main landing page
├── styles/
│   └── globals.css      # All styles + CSS variables
├── public/              # Static assets (favicon etc.)
├── package.json
├── next.config.js
├── vercel.json
└── .gitignore
```

VALIDATION_READER_PROTOCOL_2026-06-13

Standing State Reader Protocol Validation

Validation Date

2026-06-13

---

Essays Tested

- M073 — The Geometry of Memory, Projection, and Reality
- M074 — The Standing State: Engine 2
- M078 — Anger Is Not a Sin: It Is an Identity Governance Failure
- M081 — The Geometry of Inquiry

---

Platforms Tested

1. Google Chrome AI Playback
2. Samsung Android AI Reader
3. Microsoft Edge Reader Mode

---

Results

Google Chrome AI Playback

PASS

Observed:

- Article detected
- Title extracted
- Author extracted
- AI summary generated
- Audio playback successful

---

Samsung Android AI Reader

PASS

Observed:

- Article detected
- Semantic structure recognized
- Audio playback successful
- Continuous reading successful

---

Microsoft Edge Reader Mode

PASS

Observed:

- Full article extraction
- Reader mode rendering successful
- Sequential narration successful
- Accessibility compatibility confirmed

---

Structural Validation

Validated:

- Semantic article boundaries
- Title extraction
- Author extraction
- Article body extraction
- Accessibility compatibility
- Reader mode compatibility
- AI playback compatibility
- Voice narration compatibility

---

Architectural Pattern

Essay

→ Semantic Structure

→ Machine Extraction

→ Reader Understanding

→ Voice Playback

---

Conclusion

The Standing State Reader Protocol successfully enables both summarization-oriented systems and full-document accessibility systems to identify, extract, and narrate essay content.

Chrome successfully summarized the essays.

Edge successfully narrated the essays in full.

Samsung Android AI Reader successfully recognized and played article content.

The protocol therefore satisfies both accessibility and machine-comprehension objectives.

---

Final Verdict

READER_PROTOCOL_VALIDATED

Human readers and machine readers arrive at the same document boundary.
