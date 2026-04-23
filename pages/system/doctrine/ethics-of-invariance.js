import Head from 'next/head'

export default function EthicsOfInvariancePage() {
  return (
    <>
      <Head>
        <title>Ethics of Invariance — Standing State Press</title>
        <meta
          name="description"
          content="Executive Summary of the Ethics of Invariance: a structural standard for safe autonomous systems."
        />
      </Head>

      <main className="doctrinePage">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">SYSTEM DOCTRINE · EXECUTION GOVERNANCE</p>
            <h1>Ethics of Invariance</h1>
            <p className="subhead">Executive Summary · Standing State Architecture Packet</p>
            <p className="lead">
              A structural standard for autonomous systems: define the disturbance class, hold safety
              parameters invariant, gate execution before effect, and halt when certified conditions fail.
            </p>
            <div className="heroActions">
              <a className="button gold" href="/docs/ethics-of-invariance-executive-summary.pdf" target="_blank" rel="noreferrer">
                Open PDF
              </a>
              <a className="button ghost" href="/system/doctrine">
                Back to Doctrine
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap narrow">
            <h2>The Problem</h2>
            <p>
              Most safety approaches rely on probabilistic assurances, post-hoc monitoring, or alignment claims.
              The structural gap appears when a system can continue operating while drifting outside the very
              conditions under which it was certified safe.
            </p>
            <p>
              The doctrine resolves that gap by requiring preserved safety boundaries under all permitted operation.
              The question is not how often a system fails. The question is whether harmful transitions are
              structurally prevented inside the certified domain.
            </p>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap">
            <h2>The Four Operational Principles</h2>
            <div className="principles">
              <article className="principle">
                <h3>I. Explicit Disturbance Declaration</h3>
                <p>
                  Every system must declare the range of environmental conditions, data volatility,
                  and adversarial pressures it is designed to withstand. Safety claims apply only
                  within these documented bounds.
                </p>
              </article>
              <article className="principle">
                <h3>II. Invariant Safety Parameters</h3>
                <p>
                  Safety margins, thresholds, and monitoring limits must remain fixed. Adjusting
                  them during stress invalidates certification and triggers re-verification.
                </p>
              </article>
              <article className="principle">
                <h3>III. Forward Invariance Enforcement</h3>
                <p>
                  A predictive gate must evaluate candidate actions before execution so no permitted
                  action can push the system outside its certified safe region.
                </p>
              </article>
              <article className="principle">
                <h3>IV. Deterministic Halt Capability</h3>
                <p>
                  If certified assumptions fail, the system must halt or revert to a known safe state.
                  Halt is not a defect. It is the proof that unsafe effect did not pass.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap narrow">
            <h2>Core Gate Condition</h2>
            <div className="equationBox">
              <code>Φ(ŝₖ₊₁) + L·δ ≤ 0</code>
            </div>
            <p>
              This is the execution boundary. Every candidate action is evaluated against the robust
              safety margin before effect. If the next state would violate the boundary, the action is
              clipped to a safe command or halted.
            </p>
          </div>
        </section>

        <section className="section alt">
          <div className="wrap narrow">
            <h2>Standing State Alignment</h2>
            <p>
              This doctrine is the engineering instantiation of the Standing State at the execution boundary.
              It translates structural admissibility into enforceable design: unsafe transitions do not pass,
              uncertainty does not become permission, and failed conditions yield no committed effect.
            </p>
            <blockquote>
              A system is safe not when it behaves correctly, but when incorrect behavior cannot execute.
            </blockquote>
          </div>
        </section>

        <section className="section">
          <div className="wrap narrow">
            <h2>Download</h2>
            <p>
              <a className="textLink" href="/docs/ethics-of-invariance-executive-summary.pdf" target="_blank" rel="noreferrer">
                Download the Ethics of Invariance Executive Summary PDF
              </a>
            </p>
          </div>
        </section>

        <style jsx>{`
          .doctrinePage {
            background: #000;
            color: #f5f1e8;
            min-height: 100vh;
          }
          .wrap {
            max-width: 1120px;
            margin: 0 auto;
            padding: 0 24px;
          }
          .narrow {
            max-width: 820px;
          }
          .hero {
            padding: 88px 0 48px;
            border-bottom: 1px solid rgba(212, 175, 55, 0.22);
          }
          .eyebrow {
            color: #d4af37;
            letter-spacing: 0.14em;
            font-size: 0.8rem;
            margin: 0 0 14px;
          }
          h1 {
            font-size: clamp(2.4rem, 5vw, 4.4rem);
            line-height: 1.05;
            margin: 0 0 10px;
          }
          .subhead {
            margin: 0 0 16px;
            color: rgba(245, 241, 232, 0.8);
            font-size: 1.05rem;
          }
          .lead, p {
            line-height: 1.8;
            color: rgba(245, 241, 232, 0.84);
          }
          .heroActions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
            margin-top: 28px;
          }
          .button {
            display: inline-block;
            padding: 12px 18px;
            border-radius: 999px;
            text-decoration: none;
            transition: opacity 0.18s ease, transform 0.18s ease;
          }
          .button:hover {
            opacity: 0.92;
            transform: translateY(-1px);
          }
          .gold {
            background: #d4af37;
            color: #000;
            font-weight: 600;
          }
          .ghost {
            color: #f5f1e8;
            border: 1px solid rgba(245, 241, 232, 0.26);
          }
          .section {
            padding: 48px 0;
          }
          .alt {
            background: rgba(255, 255, 255, 0.02);
            border-top: 1px solid rgba(212, 175, 55, 0.08);
            border-bottom: 1px solid rgba(212, 175, 55, 0.08);
          }
          h2 {
            font-size: 1.65rem;
            margin: 0 0 18px;
          }
          .principles {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 18px;
          }
          .principle {
            border: 1px solid rgba(212, 175, 55, 0.2);
            border-radius: 16px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.015);
          }
          .principle h3 {
            margin: 0 0 10px;
            font-size: 1.08rem;
            color: #f7e7a7;
          }
          .equationBox {
            display: inline-block;
            border: 1px solid rgba(212, 175, 55, 0.28);
            background: rgba(212, 175, 55, 0.06);
            border-radius: 14px;
            padding: 16px 18px;
            margin: 4px 0 18px;
            font-size: 1.2rem;
            color: #f7e7a7;
          }
          blockquote {
            margin: 22px 0 0;
            padding: 18px 20px;
            border-left: 3px solid #d4af37;
            background: rgba(212, 175, 55, 0.05);
            color: #f5f1e8;
          }
          .textLink {
            color: #d4af37;
            text-decoration: none;
          }
          .textLink:hover {
            text-decoration: underline;
          }
        `}</style>
      </main>
    </>
  )
}
