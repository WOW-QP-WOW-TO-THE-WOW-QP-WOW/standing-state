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
