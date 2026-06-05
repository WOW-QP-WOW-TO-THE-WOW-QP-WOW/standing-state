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

  'fulfillment-of-the-gospel': {
    id: 'D004',
    title: 'The Fulfillment of the Gospel',
    subtitle: 'Published as “D003 — Fulfillment of the Gospel” · From Garden to River',
    eyebrow: 'Fulfillment Doctrine',
    axis1: 'PLT-COORD',
    axis2: 'VOL-CROSS',
    axis3: 'REG-SPIRIT',
    mediumUrl: 'https://medium.com/@leonsp3/d003-fulfillment-of-the-gospel-f71475ea5560',
    fullStack: [
      { stage: 'Psalms', role: 'Orientation' },
      { stage: 'Proverbs', role: 'Governance' },
      { stage: 'Gospel', role: 'Restoration in completed form' },
      { stage: 'Revelation', role: 'Completion' },
      { stage: 'River', role: 'Distribution' },
      { stage: 'Tree', role: 'Embodiment' },
      { stage: 'Propagation', role: 'Multiplication' },
    ],
    equation: 'Differentiation → Garden → Extension → Psalms → Proverbs → Gospel → Revelation → River → Tree → Propagation',
    intro:
      'Fulfillment doctrine. The fulfillment of the Gospel is not the restoration of the beginning — it is the restoration of the original pattern in completed form. Read as a unified architecture, Scripture traces one distinction operation maturing across ten scale-invariant stages, from the emergence of a distinguishable coordinate to the propagation of a completed pattern that remains coherent at every scale it reaches.',
    thesis:
      'The Gospel fulfilled as restoration of the original pattern in completed form. The pattern returns, the pattern matures, the pattern survives, the pattern knows itself.',
    executionConditions: [
      'Psalms → Orientation: identity recovers its coordinate before it recovers its direction. See correctly.',
      'Proverbs → Governance: speech, desire, and action pass governance before release. Move correctly.',
      'Revelation → Completion: contradiction is removed; what can stand is distinguished from what cannot. Complete correctly.',
      'Engine 2 → Propagation: the completed pattern flows from a completed source and reproduces across scales without losing identity. Expand correctly.',
    ],
    body: [
      'The Gospel is often described as a message of salvation, reconciliation, forgiveness, or redemption. Each description captures an aspect of its meaning. Yet when Scripture is read as a unified architecture rather than a collection of isolated events, a deeper pattern emerges: the fulfillment of the Gospel is the restoration of lawful self-governance under an invariant identity. The story begins in a garden and ends in a river.',
      'The Garden represents governance given — identity, perception, desire, and action aligned, with governance internal and unfractured. Extension tests that governance: the further a system extends, the greater the opportunity for drift, as desire separates from wisdom and action separates from identity. The central problem of history is therefore not motion itself, but maintaining lawful motion during extension. The remainder of Scripture addresses that problem.',
      'Psalms recover orientation — where am I standing — before motion can be governed. Proverbs recover governance — how should I move — so that speech, desire, and action pass evaluation before release. The Gospel reveals the fulfilled pattern: identity, orientation, governance, and action existing without contradiction. Revelation completes it through terminal audit, removing contradiction so that what can stand is distinguished from what cannot. Then the decisive turn: a river proceeds from the throne. Completion does not terminate — completion becomes source.',
      'The Tree of Life appears twice, and the two appearances are not identical. The first Tree stands in Eden before governance was tested — untested life, raw possibility. The second Tree stands in Revelation after governance has been restored, completed, and made admissible — verified, battle-hardened life that has survived maximum historical variance. The deepest structural symmetry is therefore not Garden ↔ Tree but Given Governance ↔ Verified Governance. The second Tree is not a reset to Eden. It is Eden fulfilled.',
      'Beneath the Garden lies a more primitive condition. Before governance, before orientation, before Eden, there must first be differentiation: A must be distinguishable from not-A before A can know it is A. Differentiation is the floor — the emergence of a distinguishable coordinate — and it cannot be dug beneath, because asking for a stage prior to distinction would require a distinction before distinction, which collapses the question. Every later stage is the same distinction operation at a higher register. The operation never changes. Only the domain changes.',
    ],
    principles: [
      {
        label: '0. Differentiation — The Floor',
        text: 'not-A → A. The emergence of a distinguishable coordinate. Before A knows it is A, A must first be distinguishable from not-A. This is the metrological condition beneath identity: differentiation is not identity, but differentiation makes identity possible. It is the only floor, because distinction is the precondition of every question that could be asked beneath it.',
      },
      {
        label: 'I. Identity — The Coordinate',
        text: 'A knows A. I* = constant; dI*/dt = 0. Once a coordinate is distinguishable, it becomes available for recognition. Identity is the invariant reference that does not adapt — it governs. Orientation, governance, completion, and propagation all rest upon this fixed point.',
      },
      {
        label: 'II. Lifecycle — The Traversal',
        text: 'A becomes A. The unfolding of the final clause through history: Garden (given governance), Extension (tested), Psalms (orientation restored), Proverbs (governance restored), Gospel (embodied reference), Revelation (completed audit), River (completion becomes source), Tree (verified life), Propagation (coherent reproduction). Given → Tested → Restored → Completed → Propagated.',
      },
      {
        label: 'III. The Closure Condition',
        text: 'The pattern expands without losing itself. Identity remains. Governance stands. Completion resolves. The River flows. The Tree yields. Propagation continues. Completion became generative rather than terminal — the proof that the source remains singular while the expression becomes distributed, without fragmentation of identity, governance, or life.',
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

            {item.fullStack && (
              <div className="plateDetailBlock">
                <div className="plateDetailBlockLabel">Full-Stack Register · Corpus Architecture</div>
                <div className="glossVarLogicWrap">
                  {item.fullStack.map((row, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '1rem',
                        padding: '0.85rem 1.2rem',
                        borderBottom: idx < item.fullStack.length - 1 ? 'var(--rule)' : 'none',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--display)', fontSize: '0.95rem', color: 'var(--gold)', minWidth: '7.5rem', letterSpacing: '0.04em' }}>{row.stage}</span>
                      <span style={{ color: 'var(--gold-dim)' }}>→</span>
                      <span style={{ color: 'var(--offwhite)', fontSize: '0.95rem', lineHeight: 1.7 }}>{row.role}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '0.8rem', color: 'var(--gray-lt)', fontSize: '0.85rem', fontStyle: 'italic', lineHeight: 1.7 }}>
                  Completion → Distribution → Embodiment → Multiplication. The River carries the
                  completed pattern; the Tree receives and embodies it; propagation occurs when the
                  embodied pattern reproduces beyond itself. The carrier is not the propagation.
                </div>
              </div>
            )}

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

            {item.mediumUrl && (
              <div className="plateDetailBlock" style={{ marginTop: '1.6rem' }}>
                <div className="plateDetailBlockLabel">Source</div>
                <div className="glossVarLogicWrap">
                  <div style={{ padding: '1rem 1.2rem' }}>
                    <span style={{ fontFamily: 'var(--display)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', display: 'block', marginBottom: '0.4rem' }}>Medium · Standing State Press</span>
                    <a href={item.mediumUrl} style={{ color: 'var(--gold)' }} target="_blank" rel="noopener noreferrer">D003 — Fulfillment of the Gospel — Medium</a>
                    <div style={{ marginTop: '0.6rem', color: 'var(--gray-lt)', fontSize: '0.85rem', fontStyle: 'italic' }}>
                      Published under the title “D003 — Fulfillment of the Gospel.” Registered in the
                      doctrine layer as D004 (Fulfillment Doctrine) to preserve the live doctrine namespace,
                      where D003 denotes the Admissibility Gate.
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="canonEssayAuthor">Standing State Press · {item.eyebrow === 'Fulfillment Doctrine' ? 'Fulfillment Layer' : 'Execution Layer'}</div>

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
                  href={
                    slug === 'admissibility-gate'
                      ? '/system/glossary/gate-of-admissibility'
                      : slug === 'fulfillment-of-the-gospel'
                      ? '/essays'
                      : '/system/glossary/admissibility-delta'
                  }
                >
                  <span className="canonNavDir">Companion</span>
                  <span className="canonNavTitle">
                    {slug === 'admissibility-gate'
                      ? 'Glossary Gate'
                      : slug === 'fulfillment-of-the-gospel'
                      ? 'Essays — Corpus Architecture'
                      : 'Glossary Δ'}
                  </span>
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

      </main>
    </>
  )
}
