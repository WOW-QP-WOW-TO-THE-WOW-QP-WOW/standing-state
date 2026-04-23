import Head from 'next/head'

const doctrineItems = [
  {
    slug: 'ethics-of-invariance',
    title: 'Ethics of Invariance',
    subtitle: 'Executive Summary · Standing State Architecture Packet',
    note: 'A structural standard for safe autonomous systems: explicit disturbance, invariant safety parameters, forward invariance enforcement, and deterministic halt.',
    href: '/system/doctrine/ethics-of-invariance'
  }
]

export default function DoctrineIndex() {
  return (
    <>
      <Head>
        <title>System Doctrine — Standing State Press</title>
        <meta
          name="description"
          content="Engineering standards that enforce the Standing State at execution."
        />
      </Head>

      <main className="doctrinePage">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">SYSTEM DOCTRINE</p>
            <h1>Engineering standards that enforce the Standing State at execution.</h1>
            <p className="lead">
              Doctrine is the enforcement layer: the place where admissibility, forward invariance,
              and halt become executable design requirements rather than abstract claims.
            </p>
          </div>
        </section>

        <section className="listSection">
          <div className="wrap">
            <div className="grid">
              {doctrineItems.map((item) => (
                <a key={item.slug} href={item.href} className="card">
                  <p className="cardEyebrow">DOCTRINE · EXECUTION</p>
                  <h2>{item.title}</h2>
                  <p className="subtitle">{item.subtitle}</p>
                  <p className="note">{item.note}</p>
                  <span className="cta">Open doctrine →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          .doctrinePage {
            background: #000;
            color: #f5f1e8;
            min-height: 100vh;
          }
          .wrap {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 24px;
          }
          .hero {
            padding: 88px 0 40px;
            border-bottom: 1px solid rgba(212, 175, 55, 0.22);
          }
          .eyebrow,
          .cardEyebrow {
            color: #d4af37;
            letter-spacing: 0.14em;
            font-size: 0.8rem;
            margin: 0 0 14px;
          }
          h1 {
            font-size: clamp(2.2rem, 5vw, 4rem);
            line-height: 1.08;
            margin: 0 0 18px;
          }
          .lead {
            max-width: 860px;
            font-size: 1.08rem;
            line-height: 1.75;
            color: rgba(245, 241, 232, 0.84);
          }
          .listSection {
            padding: 42px 0 88px;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 22px;
          }
          .card {
            display: block;
            text-decoration: none;
            color: inherit;
            border: 1px solid rgba(212, 175, 55, 0.24);
            background: linear-gradient(180deg, rgba(212,175,55,0.05), rgba(255,255,255,0.01));
            border-radius: 18px;
            padding: 26px 22px;
            transition: transform 0.18s ease, border-color 0.18s ease;
          }
          .card:hover {
            transform: translateY(-2px);
            border-color: rgba(212, 175, 55, 0.48);
          }
          h2 {
            font-size: 1.45rem;
            margin: 0 0 8px;
          }
          .subtitle {
            margin: 0 0 12px;
            color: rgba(245, 241, 232, 0.82);
            line-height: 1.6;
          }
          .note {
            margin: 0 0 16px;
            color: rgba(245, 241, 232, 0.72);
            line-height: 1.7;
          }
          .cta {
            color: #d4af37;
          }
        `}</style>
      </main>
    </>
  )
}
