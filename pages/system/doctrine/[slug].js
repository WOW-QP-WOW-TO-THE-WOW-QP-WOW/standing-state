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

            <div style={{ marginTop: '1.6rem' }}>
              <a className="btnEnter" href={item.pdfHref} target="_blank" rel="noreferrer">
                Open PDF →
              </a>
            </div>

            <div className="canonEssayAuthor">Standing State Press · Execution Layer</div>

            <div className="canonEssayNav">
              <a className="canonNavLink canonNavPrev" href="/system/doctrine">
                <span className="canonNavDir">Back</span>
                <span className="canonNavTitle">System Doctrine</span>
              </a>

              <a className="canonNavIndex" href="/standing-state">
                Return to Standing State
              </a>

              <a
                className="canonNavLink canonNavNext"
                href={item.pdfHref}
                target="_blank"
                rel="noreferrer"
              >
                <span className="canonNavDir">Document</span>
                <span className="canonNavTitle">Open PDF</span>
              </a>
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
