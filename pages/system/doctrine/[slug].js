import Head from 'next/head'
import { useRouter } from 'next/router'

const DOCTRINE_PAGES = {
  'ethics-of-invariance': {
    id: 'D001',
    title: 'Ethics of Invariance',
    subtitle: 'Executive Summary · Standing State Architecture Packet',
    eyebrow: 'Execution Doctrine',
    axis1: 'SYS-GOV',
    axis2: 'VOL-CROSS',
    axis3: 'REG-EXEC',
    equation: 'Inadmissible → Halt   ·   Admissible → Execute',
    intro:
      'This doctrine defines executable constraints under which the system is permitted to act. It is the enforcement layer where admissibility, forward invariance, and halt become binding design requirements.',
    thesis:
      'A system is safe not when it behaves correctly, but when incorrect behavior cannot execute.',
    executionConditions: [
      'Invariant reference must not drift during evaluation.',
      'Admissibility must be tested before execution.',
      'Authority cannot be self-derived at runtime.',
      'Violation of certified conditions yields deterministic halt.',
    ],
    body: [
      'Most safety approaches rely on probabilistic assurances, post-hoc monitoring, or behavioral alignment claims. The structural gap appears when a system can continue operating while drifting outside the very conditions under which it was certified safe.',
      'The doctrine resolves that gap by requiring preserved safety boundaries under all permitted operation. The question is not how often a system fails. The question is whether harmful transitions are structurally prevented inside the certified domain.',
      'This shifts governance from commentary to enforcement. Safety is embedded in the execution boundary itself: candidate actions are evaluated before effect, unsafe transitions are blocked, and halt is treated as a successful safety outcome rather than a defect.',
    ],
    principles: [
      {
        label: 'I. Explicit Disturbance Declaration',
        text: 'Every system must declare the range of environmental conditions, data volatility, and adversarial pressures it is designed to withstand. Safety claims apply only within these documented bounds.',
      },
      {
        label: 'II. Invariant Safety Parameters',
        text: 'Safety margins, thresholds, and monitoring limits must remain fixed. Adjusting them during stress invalidates certification and triggers re-verification.',
      },
      {
        label: 'III. Forward Invariance Enforcement',
        text: 'A predictive gate must evaluate candidate actions before execution so no permitted action can push the system outside its certified safe region.',
      },
      {
        label: 'IV. Deterministic Halt Capability',
        text: 'If certified assumptions fail, the system must halt or revert to a known safe state. Halt is not a defect. It is proof that unsafe effect did not pass.',
      },
    ],
    pdfHref: '/docs/ethics-of-invariance-executive-summary.pdf',
  },
  'admissibility-delta': {
    id: 'D002',
    title: 'Δ Control Law',
    subtitle: 'OAGI v1.2 · Operational Admissibility Governance Infrastructure',
    eyebrow: 'Execution Doctrine',
    axis1: 'SYS-GOV',
    axis2: 'VOL-SS',
    axis3: 'REG-EXEC',
    equation: 'Δ = γ_obs − α_eff > 0',
    intro:
      'Execution-layer specification for the admissibility delta. Defines the enforcement boundary under which scaling systems remain governable. Where capability scales against pressure, governance velocity must outpace effective exploit-pressure or the system fractures.',
    thesis:
      'No discretion at the boundary. Governance must be measured, computed, logged, and enforced — or it is not governance.',
    executionConditions: [
      'Δ continuously recomputed within the staleness window.',
      'No telemetry → automatic contraction (fail-safe on silence).',
      'Hysteresis-band transitions prevent oscillation at thresholds.',
      'Discretionary override of the gate is forbidden; enforcement is mechanical.',
    ],
    body: [
      'Modern systems scale in three dimensions: capability surface (R), throughput (T), and interconnectedness (L). Governance velocity (γ) remains human-limited, organizationally constrained, politically throttled. Expansion is quadratic; response is linear. This mismatch is the fracture engine of the modern world.',
      'Failure is not randomness. It is a control failure: Δ = γ_obs − α_eff. When Δ < 0, forcing outruns correction. Different fuels, same inequality. Lehman, AIG, any over-scaled AI system. Burnout is Δ < 0. Bankruptcy is Δ < 0. AI runaway is Δ < 0.',
      'Ethics cannot scale. Prompt alignment cannot scale. Human review alone cannot scale. The control law is mechanical or it is not a law. Stability is not low volatility, high confidence, or positive messaging. Stability is containment inside a bounded invariant set.',
    ],
    principles: [
      {
        label: 'I. The Formula',
        text: 'Δ = γ_obs − α_eff. All variables expressed in the same time-rate units (events/second, mitigations/hour). No dimensional mismatch is permitted at the boundary. OAGI v1.1 closure ensures recalibration when γ and α units diverge.',
      },
      {
        label: 'II. The Instrument',
        text: 'A machine-ingestible telemetry schema. Self-describing — schema versioned, fields typed. Auditable — every Δ computation traceable to source telemetry. Immutable — append-only ledger; no retroactive correction. Without instrumentation, Δ is unmeasurable.',
      },
      {
        label: 'III. The Gate',
        text: 'A SIEM-enforced control loop with five mandatory states: WARN (Δ approaching boundary), THROTTLE (Δ inside hysteresis band), TRIP (Δ < 0; immediate contraction), FAIL-SAFE ON SILENCE (no telemetry within staleness window → safe mode), HYSTERESIS (asymmetric thresholds for entry/exit). No discretion at the boundary.',
      },
      {
        label: 'IV. The Staleness Guard',
        text: 'Governance is time-bound. A Δ value computed five minutes ago is not a current admissibility statement. The 60-second timer encodes this: t_telemetry > T_stale ⇒ contract. The default state under information loss is not trust. It is safe mode. That is maturity.',
      },
    ],
    pdfHref: null,
  },
  'admissibility-gate': {
    id: 'D003',
    title: 'Admissibility Gate',
    subtitle: 'Apex Doctrine · Governance Precedes Execution',
    eyebrow: 'Execution Doctrine',
    axis1: 'SYS-GOV',
    axis2: 'VOL-SS',
    axis3: 'REG-EXEC',
    equation: 'Φ(x; I*) ≤ 0   ⇒   execute   ·   else   ⇒   halt',
    intro:
      'Apex execution doctrine. Defines the structural requirement that admissibility must be evaluated before execution, not after. The gate is the boundary at which candidate movement is tested against the invariant reference. No system may cross this boundary without satisfying Φ(x; I*) ≤ 0.',
    thesis:
      'Admissibility must precede execution. Governance evaluated after output is governance only in name.',
    executionConditions: [
      'Φ(x; I*) computed and evaluated before any action effect.',
      'Inadmissible candidate movement (Φ > 0) must trigger halt — no soft override.',
      'The dagger † halts the trajectory; the field persists; re-entry remains possible only when Φ returns to ≤ 0.',
      'Navigable set 𝒩(x_t) = 𝒜 ∩ 𝓡(x_t) is the only space within which traversal is authorized.',
    ],
    body: [
      'Modern systems audit after the output, regulate after deployment, explain after damage, apologize after drift. That sequence is backward. By the time consequence is observable, the violation has already passed through the boundary. Governance evaluated downstream is not governance — it is documentation.',
      'The gate doctrine reverses this. Admissibility is computed before the candidate movement is permitted to cross into effect. The system asks: was this movement permitted to occur in the first place? If yes, the trajectory proceeds within the admissible set. If no, the trajectory halts. Halt is not failure — it is structural preservation.',
      'This applies uniformly across substrates. A body that cannot halt under unsustainable load loses sovereignty over its own correction. An institution that cannot halt expansion when invariants are violated loses sovereignty over its own design. An artificial system that cannot halt action when admissibility fails loses sovereignty altogether. The gate is the same operator. The substrate is the variable.',
    ],
    principles: [
      {
        label: 'I. The Boundary',
        text: 'Φ(x; I*) ≤ 0 is the boundary. There is no continuous gradient through which deviant compression slowly becomes admissible. The condition either holds or it does not. Admissibility is binary at the boundary even when the underlying state is continuous.',
      },
      {
        label: 'II. Pre-Execution Evaluation',
        text: 'The gate must be evaluated before the candidate action produces effect. Post-hoc audit, post-deployment regulation, and post-damage explanation do not satisfy doctrine. Governance occurs at the boundary or it does not occur.',
      },
      {
        label: 'III. Halt Is Sovereign',
        text: 'A system that cannot halt cannot remain sovereign. Halt is not punishment, defect, or failure mode. Halt is proof that unsafe effect did not pass. The dagger † is the structural guarantee that termination preserves the field.',
      },
      {
        label: 'IV. Navigable Within Admissible',
        text: 'Reachability without admissibility produces drift. Admissibility without reachability produces stagnation. Authorized movement lives only in the intersection 𝒩(x_t) = 𝒜 ∩ 𝓡(x_t). Capability is not authority. Reach is not permission. The gate constrains both into one navigable region.',
      },
    ],
    pdfHref: null,
  },
}

export default function DoctrineSlugPage() {
  const router = useRouter()
  const { slug } = router.query

  const item = DOCTRINE_PAGES[slug]

  if (!item) {
    return (
      <>
        <Head>
          <title>Doctrine Not Found — Standing State Press</title>
        </Head>
        <main style={{ paddingTop: '58px' }}>
          <section className="glossHeader">
            <div className="wrap">
              <div className="glossBreadcrumb">
                <a href="/">Standing State Press</a>
                <span className="glossBreadSep">→</span>
                <a href="/system/doctrine">Doctrine</a>
                <span className="glossBreadSep">→</span>
                <span>Not Found</span>
              </div>
              <div className="glossEyebrow">Doctrine</div>
              <h1 className="glossH1">Doctrine not found</h1>
              <p className="glossIntro">The requested doctrine page is not registered.</p>
            </div>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{item.title} — Standing State Press</title>
        <meta
          name="description"
          content={item.subtitle}
        />
      </Head>

      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/gates">Gates</a></li>
            <li><a href="/system/doctrine">Doctrine</a></li>
            <li><a href="/essays">Essays</a></li>
            <li><a href="/sources">Sources</a></li>
          </ul>
        </div>
      </nav>

      <main style={{ paddingTop: '58px' }}>
        <section className="glossHeader">
          <div className="wrap">
            <div className="glossBreadcrumb">
              <a href="/">Standing State Press</a>
              <span className="glossBreadSep">→</span>
              <a href="/system/doctrine">Doctrine</a>
              <span className="glossBreadSep">→</span>
              <span>{item.title}</span>
            </div>

            <div className="glossEyebrow">{item.eyebrow}</div>
            <h1 className="glossH1">{item.title}</h1>
            <p className="glossIntro">{item.intro}</p>

            <div className="essayStats">
              <span className="essayStat">{item.id}</span>
              <span className="essayStatDiv">·</span>
              <span className="essayStat">{item.axis1}</span>
              <span className="essayStatDiv">·</span>
              <span className="essayStat">{item.axis2}</span>
              <span className="essayStatDiv">·</span>
              <span className="essayStat">{item.axis3}</span>
            </div>
          </div>
        </section>

        <section className="canonEssay">
          <div className="wrap canonEssayWrap">
            <div className="canonEssayHeader">
              <div className="canonEssayNum">{item.subtitle}</div>
              <div className="canonEssayRule" />
            </div>

            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">{item.equation}</div>
            </div>

            <div className="canonEssayThesis">{item.thesis}</div>

            <div className="plateDetailBlock" style={{ paddingTop: 0 }}>
              <div className="plateDetailBlockLabel">Execution Conditions</div>
              <div className="glossVarLogicWrap">
                {item.executionConditions.map((cond, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem 1.2rem',
                      borderBottom: idx < item.executionConditions.length - 1 ? 'var(--rule)' : 'none',
                      color: 'var(--offwhite)',
                      lineHeight: 1.8,
                      fontSize: '0.95rem'
                    }}
                  >
                    {cond}
                  </div>
                ))}
              </div>
            </div>

            <div className="canonEssayBody">
              {item.body.map((paragraph, idx) => (
                <p className="canonEssayPara" key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="plateDetailBlock">
              <div className="plateDetailBlockLabel">Operational Principles</div>
              <div className="glossVarList">
                {item.principles.map((p, idx) => (
                  <div className="glossVarCard" key={idx}>
                    <div className="glossVarBody">
                      <div className="glossVarSection">
                        <span className="glossVarSectionLabel">{p.label}</span>
                        <div className="glossVarDef">{p.text}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="canonEssayEqBlock">
              <div className="canonEssayEq">
                A becomes A, because A knows it is A.
              </div>
            </div>

            {item.pdfHref && (
              <div style={{ marginTop: '1.6rem' }}>
                <a className="btnEnter" href={item.pdfHref} target="_blank" rel="noreferrer">
                  Open PDF →
                </a>
              </div>
            )}

            <div className="canonEssayAuthor">Standing State Press · Execution Layer</div>

            <div className="canonEssayNav">
              <a className="canonNavLink canonNavPrev" href="/system/doctrine">
                <span className="canonNavDir">Back</span>
                <span className="canonNavTitle">System Doctrine</span>
              </a>

              <a className="canonNavIndex" href="/standing-state">
                Return to Standing State
              </a>

              {item.pdfHref ? (
                <a
                  className="canonNavLink canonNavNext"
                  href={item.pdfHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="canonNavDir">Document</span>
                  <span className="canonNavTitle">Open PDF</span>
                </a>
              ) : (
                <a
                  className="canonNavLink canonNavNext"
                  href={slug === 'admissibility-gate' ? '/system/glossary/gate-of-admissibility' : '/system/glossary/admissibility-delta'}
                >
                  <span className="canonNavDir">Companion</span>
                  <span className="canonNavTitle">{slug === 'admissibility-gate' ? 'Glossary Gate' : 'Glossary Δ'}</span>
                </a>
              )}
            </div>

            <div className="platesSystemNav" style={{ paddingTop: '2rem' }}>
              <div className="platesSystemNavInner">
                <a className="platesSystemLink" href="/system/doctrine">
                  <span className="platesSystemLinkLabel">Doctrine Layer</span>
                  <span className="platesSystemLinkTitle">Back to Doctrine</span>
                  <span className="platesSystemLinkSub">Return to execution standards.</span>
                </a>

                <div className="platesSystemDivider" />

                <a className="platesSystemLink" href="/standing-state">
                  <span className="platesSystemLinkLabel">System Root</span>
                  <span className="platesSystemLinkTitle">Return to Standing State</span>
                  <span className="platesSystemLinkSub">Re-enter the central architecture.</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="wrap footerInner">
            <div className="fMark">Standing State Press</div>
            <div className="fCopy">© Leon Powdar · All rights reserved</div>
            <div className="fSig">Signal → Completion → Repair</div>
          </div>
        </footer>
      </main>
    </>
  )
}
