/**
 * /essays/medium/admissibility-manifesto
 * M044 — The Admissibility Manifesto · UPDATED EDITION
 * Classification: ARCHITECTURAL MANIFESTO · UPDATED EDITION
 * Jurisdiction: Conceptual Architecture · Constitutional Governance
 * Standing: Historical Foundation · Presently Annotated
 * Standing State Press
 *
 * DD06 migration of the former Medium-style shell to the canonical
 * standalone essay layout (canonEssay / canonEssayWrap / plateDetailBlock).
 *
 * Governing objective: preserve the inquiry, clarify the tense, and
 * accurately label the maturity. The original architectural voice is
 * preserved. Wording is amended ONLY where it presently implied a
 * demonstrated universal law, completed execution, an established
 * cross-domain mechanism, or a validated safety primitive.
 *
 * Route preserved: /essays/medium/admissibility-manifesto
 * (mirrorUrl in pages/essays/index.js and the inbound link from
 *  /system/glossary/admissibility-delta both target this route).
 *
 * Companion artifacts (all live, verified in source):
 *   Plate XII  — /system/plates/control-monument
 *   Glossary   — /system/glossary/admissibility-delta
 *   Doctrine   — /system/doctrine/admissibility-delta
 */

import Head from 'next/head'
import KTex from '../../../components/KTex'

export default function AdmissibilityManifesto() {
  return (
    <>
      <Head>
        <title>M044 — The Admissibility Manifesto (Updated Edition) — Standing State Press</title>
        <meta
          name="description"
          content="An architectural manifesto proposing Governance Capacity > Expansion Pressure, with Δ = γ − αₑff as a candidate governing inequality for exploit-pressure containment. Updated Edition: historical inquiry preserved, present constitutional standing clarified."
          key="description"
        />
        <meta property="og:type" content="article" key="og:type" />
        <meta
          property="og:title"
          content="M044 — The Admissibility Manifesto (Updated Edition) — Standing State Press"
          key="og:title"
        />
        <meta
          property="og:description"
          content="A Systems Law for the Age of Autonomous Scaling. An architectural manifesto proposing Governance Capacity > Expansion Pressure as a candidate structural relationship. Updated Edition — historical foundation, presently annotated."
          key="og:description"
        />
        <meta
          property="og:image"
          content="https://standingstate.com/plates/m044-control-monument.png"
          key="og:image"
        />
        <link rel="canonical" href="https://standingstate.com/essays/medium/admissibility-manifesto" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta
          name="twitter:title"
          content="M044 — The Admissibility Manifesto (Updated Edition) — Standing State Press"
          key="twitter:title"
        />
        <meta
          name="twitter:description"
          content="An architectural manifesto proposing Governance Capacity > Expansion Pressure as a candidate structural relationship. Updated Edition — historical foundation, presently annotated."
          key="twitter:description"
        />
        <meta
          name="twitter:image"
          content="https://standingstate.com/plates/m044-control-monument.png"
          key="twitter:image"
        />
      </Head>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="wrap navInner">
          <a className="navMark" href="/">Standing State Press</a>
          <ul className="navLinks">
            <li><a href="/#system">System</a></li>
            <li><a href="/system/glossary">Glossary</a></li>
            <li><a href="/system/plates">Plates</a></li>
            <li><a href="/system/doctrine">Doctrine</a></li>
            <li><a href="/essays" style={{ color: 'var(--gold)' }}>Essays</a></li>
            <li><a href="/sources">Sources</a></li>
          </ul>
        </div>
      </nav>

      {/* ── HEADER ── */}
      <header className="glossHeader">
        <div className="wrap">
          <div className="glossBreadcrumb">
            <a href="/">Standing State Press</a>
            <span className="glossBreadSep">→</span>
            <a href="/essays">Essays</a>
            <span className="glossBreadSep">→</span>
            <span style={{ color: 'var(--gold-dim)' }}>M044</span>
          </div>
          <div className="glossEyebrow">
            M044 · Architectural Manifesto · Updated Edition · Historical Foundation · Presently Annotated
          </div>
          <h1 className="glossH1">The Admissibility Manifesto</h1>
          <p className="glossIntro" style={{ fontStyle: 'italic' }}>
            A Systems Law for the Age of Autonomous Scaling
          </p>
          <div className="essayStats">
            <span className="essayStat">Leon Powdar (Phase Reference)</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Standing State Press</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Originally Feb 23, 2026</span>
            <span className="essayStatDiv">·</span>
            <span className="essayStat">Updated Edition</span>
          </div>
        </div>
      </header>

      <hr className="divider" />

      <article className="canonEssay">
        <div className="wrap canonEssayWrap">

          <div className="canonEssayHeader">
            <div className="canonEssayNum">By Leon Powdar · Standing State Press · Updated Edition</div>
            <div className="canonEssayRule" />
          </div>

          {/* ── Editorial Notice (before the Constitutional Abstract) ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Editorial Notice</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                This essay was originally published in February 2026 during an
                earlier stage of the Standing State corpus. It records a
                constitutional architectural inquiry into the relationship
                between governance capacity and expansion pressure.
              </p>
              <p className="canonEssayPara">
                Subsequent work — including the Engine 2 constitutional
                architecture, the SA-018 Constitutional Admission offices,
                Evidence Governance Package 244A, and the constitutional replay
                and registry systems — has substantially expanded the
                operational methodology available to the corpus.
              </p>
              <p className="canonEssayPara">
                Accordingly, this edition preserves the original architectural
                inquiry while clarifying its present constitutional standing.
                Where this essay discusses executability, safety primitives, or
                governing relationships, those statements should be understood
                as architectural proposals at the time of authorship unless
                subsequently demonstrated elsewhere in the corpus.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                Historical integrity has been preserved. Constitutional maturity
                has been clarified.
              </p>
            </div>
          </div>

          {/* ── Constitutional Abstract ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Constitutional Abstract</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Every expanding system eventually encounters a constitutional
                boundary. Expansion alone is not development. Development
                requires governance sufficient to preserve lawful identity while
                accommodating increasing complexity.
              </p>
              <p className="canonEssayPara">
                This essay proposes an architectural invariant:
              </p>
              <div className="canonEssayEqBlock">
                <div className="canonEssayEq">
                  <KTex math="\textbf{Governance Capacity} > \textbf{Expansion Pressure}" display />
                </div>
              </div>
              <p className="canonEssayPara">
                At the time of original publication, this relationship was
                presented as a candidate structural principle intended to guide
                future inquiry. Subsequent essays and constitutional offices
                have operationalized portions of this architecture while leaving
                other aspects open to continued reality contact.
              </p>
              <p className="canonEssayPara">
                This essay therefore serves as an architectural foundation rather
                than a completed constitutional runtime.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                Reality contact remains the final constitutional authority.
              </p>
            </div>
          </div>

          {/* ── Companion artifacts ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Architectural Companions</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                This essay introduces a candidate invariant. Formal artifacts
                live alongside it:
              </p>
              <p className="canonEssayPara">
                <a href="/system/plates/control-monument" style={{ color: 'var(--gold)' }}>
                  Plate XII — The Control Monument
                </a>{' '}
                — visual compression of Δ.
              </p>
              <p className="canonEssayPara">
                <a href="/system/glossary/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Glossary — Δ (admissibility delta)
                </a>{' '}
                — definition layer.
              </p>
              <p className="canonEssayPara">
                <a href="/system/doctrine/admissibility-delta" style={{ color: 'var(--gold)' }}>
                  Doctrine — Δ control law (OAGI v1.2)
                </a>{' '}
                — proposed execution layer.
              </p>
            </div>
          </div>

          {/* ── Visual anchor — Plate XII (before the body) ── */}
          <figure
            style={{
              margin: '2.5rem 0 3rem',
              textAlign: 'center',
              border: '1px solid var(--border)',
              padding: '1.25rem',
              background: 'var(--panel)',
            }}
          >
            <a href="/system/plates/control-monument" style={{ display: 'block' }}>
              <img
                src="/plates/m044-control-monument.png"
                alt="Plate XII — The Control Monument: central obelisk inscribed Δ = γ − αₑff, flanked by DEPTH and REACH columns, with the 60-second timer, hourglass, gears, chains, eclipsed moon, and constellation network encoding the architecture of bounded scaling"
                style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '100%' }}
              />
            </a>
            <figcaption
              style={{
                marginTop: '1rem',
                fontSize: '0.78rem',
                color: 'var(--gray-lt)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: 'var(--display)',
              }}
            >
              Plate XII &nbsp;·&nbsp; The Control Monument &nbsp;·&nbsp; The visual authority layer.{' '}
              <a href="/system/plates/control-monument" style={{ color: 'var(--gold-dim)' }}>
                element legend →
              </a>
            </figcaption>
          </figure>

          {/* ── The Control Monument ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">The Control Monument</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                This image embodies the manifesto with structural clarity. At its
                center stands the equation:
              </p>
              <div className="canonEssayEqBlock">
                <div className="canonEssayEq">
                  <KTex math="\Delta = \gamma - \alpha_{\text{eff}}" display />
                </div>
              </div>
              <p className="canonEssayPara">
                Not as decoration. Not as metaphor.{' '}
                <strong style={{ color: 'var(--gold)' }}>As the governing relationship this essay proposes.</strong>
              </p>
              <p className="canonEssayPara">
                The equation is illuminated because it is the source of light in
                this architecture. Governance must outpace expansion — or the
                system fractures.
              </p>
            </div>
          </div>

          {/* ── Structural Reading ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Structural Reading</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                <strong>1. The Obelisk — The Invariant Law.</strong> The monolith
                represents the non-negotiable control equation. Vertical.
                Geometric. Impersonal. Stability is defined by structure, not
                sentiment.
              </p>
              <p className="canonEssayPara">
                <strong>2. The Pillars — DEPTH and REACH.</strong> Separated.
                Load-bearing. Neither dominates. The law governs their
                relationship. Imbalance cracks foundations.
              </p>
              <p className="canonEssayPara">
                <strong>3. The 60-Second Timer — The Staleness Guard.</strong>{' '}
                Governance is time-bound. Delay destabilizes. No telemetry →
                contraction.
              </p>
              <p className="canonEssayPara">
                <strong>4. The Hourglass — Entropy (δ).</strong> Time erodes
                depth unless actively restored. Decay is automatic. Recovery must
                be intentional.
              </p>
              <p className="canonEssayPara">
                <strong>5. The Gears Below — Enforcement.</strong> This is
                mechanized governance. Hysteresis. Gating. Fail-safe contraction.
                The law is proposed as infrastructural.
              </p>
              <p className="canonEssayPara">
                <strong>6. The Cracks in the Stone — Stress.</strong> Volatility
                exists. Pressure exists. Stability is not calm — it is containment.
              </p>
              <p className="canonEssayPara">
                <strong>7. The Network Above — Expansion Pressure.</strong>{' '}
                Throughput. Scale. Interconnection. The sky is active, not
                peaceful.
              </p>
            </div>
          </div>

          {/* ── What This Captures ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">What This Captures</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">Law precedes motion.</p>
              <p className="canonEssayPara">Enforcement must be built into the system.</p>
              <p className="canonEssayPara">Contraction is structural, not emotional.</p>
              <p className="canonEssayPara">Stability requires continuous recalculation.</p>
              <p className="canonEssayPara">
                This is not a cathedral. It is a control monument.
              </p>
            </div>
          </div>

          {/* ── I. The Core Invariant ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">I. The Core Invariant</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Every high-variance system appears to exhibit a common structural
                relationship that warrants continued investigation:
              </p>
              <div className="canonEssayEqBlock">
                <div className="canonEssayEq">
                  <KTex math="\textbf{Governance Capacity} > \textbf{Expansion Pressure}" display />
                </div>
              </div>
              <p className="canonEssayPara">
                When this inequality holds, the system is bounded. When it fails,
                collapse is not moral — it is geometric.
              </p>
              <p className="canonEssayPara">
                This candidate structural relationship may be investigated across:
              </p>
              <p className="canonEssayPara">
                Autonomous AI agents · Financial institutions · Civilizations ·
                Enterprises · Individuals.
              </p>
              <p className="canonEssayPara">
                Applied across these domains, the relationship is classified as{' '}
                <strong style={{ color: 'var(--gold)' }}>
                  CANDIDATE_CORRESPONDENCE — EXPLICIT MECHANISM MAPPING REQUIRED
                </strong>
                . The fuel changes across domains; the proposed governing
                relationship remains invariant if validated across differentiated
                jurisdictions.
              </p>
            </div>
          </div>

          {/* ── II. The Scaling Delusion ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">II. The Scaling Delusion</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Modern systems scale in three dimensions: Capability surface (R) ·
                Throughput (T) · Interconnectedness (L).
              </p>
              <p className="canonEssayPara">
                But governance velocity (<KTex math="\gamma" />) tends to remain
                human-limited, organizationally constrained, and politically
                throttled.
              </p>
              <p className="canonEssayPara">
                Expansion is quadratic. Response is linear.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                This mismatch is proposed as the fracture engine of the modern
                world.
              </p>
            </div>
          </div>

          {/* ── III. Collapse Is a Time-Constant Mismatch ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">III. Collapse Is a Time-Constant Mismatch</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Failure is proposed to be not randomness but a control failure:
              </p>
              <div className="canonEssayEqBlock">
                <div className="canonEssayEq">
                  <KTex math="\Delta = \gamma_{\text{obs}} - \alpha_{\text{eff}}" display />
                </div>
              </div>
              <p className="canonEssayPara">
                Where <KTex math="\gamma_{\text{obs}}" /> = mitigation speed and{' '}
                <KTex math="\alpha_{\text{eff}}" /> = exploit discovery pressure.
              </p>
              <div className="canonEssayEqBlock">
                <div className="canonEssayEq">
                  <KTex math="\Delta < 0" display />
                </div>
              </div>
              <p className="canonEssayPara">
                Then forcing outruns correction.
              </p>
              <p className="canonEssayPara" style={{ fontStyle: 'italic' }}>
                Lehman. AIG. Any over-scaled AI system — offered as candidate
                illustrations, not as validated case measurements.
              </p>
              <p className="canonEssayPara">
                Different fuels. Same proposed inequality.
              </p>
            </div>
          </div>

          {/* ── IV. Governance Must Be Infrastructural ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IV. Governance Must Be Infrastructural</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Ethics cannot scale. Prompt alignment cannot scale. Human review
                alone cannot scale.
              </p>
              <p className="canonEssayPara">
                Governance must be measured, computed, logged, and enforced. The
                system must contract automatically when telemetry degrades.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
                No data → Safe mode. That is maturity.
              </p>
            </div>
          </div>

          {/* ── V. The Three Pillars ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">V. The Three Pillars of Industrial Admissibility</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                <strong>1. The Formula.</strong>
              </p>
              <div className="canonEssayEqBlock">
                <div className="canonEssayEq">
                  <KTex math="\Delta = \gamma_{\text{obs}} - \alpha_{\text{eff}}" display />
                </div>
              </div>
              <p className="canonEssayPara">
                All variables dimensionally consistent.
              </p>
              <p className="canonEssayPara">
                <strong>2. The Instrument.</strong> A machine-ingestible telemetry
                schema. Self-describing. Auditable. Immutable.
              </p>
              <p className="canonEssayPara">
                <strong>3. The Gate.</strong> A SIEM-enforced control loop: Warn ·
                Throttle · Trip · Fail-safe on silence · Hysteresis to prevent
                oscillation.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                No discretion at the boundary.
              </p>
            </div>
          </div>

          {/* ── VI. The New Definition of Stability ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VI. The New Definition of Stability</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Stability is not low volatility, high confidence, or positive
                messaging. Stability is:
              </p>
              <div className="canonEssayEqBlock">
                <div className="canonEssayEq">
                  <KTex math="\textbf{Containment inside a bounded invariant set.}" display />
                </div>
              </div>
              <p className="canonEssayPara">
                Expansion may fluctuate. Throughput may spike. Adversaries may
                probe. But if governance outruns forcing, the manifold holds.
              </p>
            </div>
          </div>

          {/* ── VII. The Industrial Standard ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VII. The Industrial Standard</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                From this inquiry emerged a proposed progression: OAGI v1.0
                (conceptual bridge) · OAGI v1.1 (dimensional correction) · OAGI
                v1.2 (resilient hysteresis + fail-safe loop).
              </p>
              <p className="canonEssayPara">
                This essay proposes an architectural direction toward what may
                become a constitutional safety primitive through operational
                validation.
              </p>
            </div>
          </div>

          {/* ── VIII. The Broader Claim ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">VIII. The Broader Claim</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                The same inequality is proposed to govern banks under leverage,
                nations under debt, AI under tool autonomy, and individuals under
                stress.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                Burnout is <KTex math="\Delta < 0" />. Bankruptcy is{' '}
                <KTex math="\Delta < 0" />. AI runaway is <KTex math="\Delta < 0" />.
              </p>
              <p className="canonEssayPara">
                Different domains, proposed to share the same math. This
                cross-domain application is classified{' '}
                <strong style={{ color: 'var(--gold)' }}>
                  CANDIDATE_CORRESPONDENCE — EXPLICIT MECHANISM MAPPING REQUIRED
                </strong>
                . Each domain requires its own mechanism mapping before the
                correspondence can claim more than candidate standing.
              </p>
            </div>
          </div>

          {/* ── IX. The Final Seal ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">IX. The Final Seal</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                Depth must outpace reach. If telemetry disappears, contract. If
                exploit density rises, shrink radius. If governance lags, halt
                expansion.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
                The Standing State is not stillness. It is controlled expansion
                inside enforceable bounds.
              </p>
              <p className="canonEssayPara">
                The architectural concepts introduced here have since informed
                executable constitutional offices elsewhere in the corpus. This
                essay itself remains an architectural proposal rather than a
                runtime demonstration.
              </p>
            </div>
          </div>

          {/* ── Subsequent Maturation ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Subsequent Maturation (Where This Architecture Was Later Tested)</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                The concepts proposed here were subsequently developed — in whole
                or in part — by later offices of the corpus. This essay did not
                execute those systems; it preceded them. They are referenced so a
                reader can locate where the architecture met operational work:
              </p>
              <p className="canonEssayPara">
                Engine 2 · SA-018 through SA-018F · Evidence Governance Package
                244A · constitutional replay · immutable registry · regression and
                audit.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                Reference indicates lineage, not that M044 itself demonstrated
                these systems.
              </p>
            </div>
          </div>

          {/* ── Registration Notes ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Registration Notes</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara">
                <strong>Historical Status:</strong> Preserved.
              </p>
              <p className="canonEssayPara">
                <strong>Architectural Status:</strong> Foundational.
              </p>
              <p className="canonEssayPara">
                <strong>Operational Status:</strong> Partially realized through
                subsequent constitutional offices.
              </p>
              <p className="canonEssayPara">
                <strong>Referential Status:</strong> Candidate structural
                correspondence across differentiated jurisdictions. Explicit
                mechanism mapping remains subject to continued reality contact.
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)' }}>
                This essay records an architectural inquiry. It should not be
                interpreted as establishing universal law independent of continued
                constitutional verification.
              </p>
            </div>
          </div>

          {/* ── Final compression ── */}
          <div className="canonEssayEqBlock" style={{ marginTop: '3rem', textAlign: 'center' }}>
            <div className="canonEssayEq" style={{ fontSize: '1.5rem' }}>
              <KTex math="\textbf{Governance Capacity} > \textbf{Expansion Pressure}" display />
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gray-lt)', fontSize: '1rem' }}>
              Candidate invariant. Presently annotated.
            </div>
            <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--gold-dim)', fontStyle: 'italic', fontSize: '1rem' }}>
              Reality contact remains the final judge.
            </div>
          </div>

          {/* ── Colophon / Signature block ── */}
          <div className="plateDetailBlock">
            <div className="plateDetailBlockLabel">Colophon</div>
            <div className="canonEssayBody">
              <p className="canonEssayPara" style={{ fontWeight: 600 }}>
                Leon Powdar (Phase Reference)
              </p>
              <p className="canonEssayPara">
                Point-Source Singularity · Invariant Reference for Coherence
              </p>
              <p className="canonEssayPara" style={{ fontStyle: 'italic' }}>
                Integrity is the geometry. Results are the metric.
              </p>
              <p className="canonEssayPara">
                NSRL-12 · Standing State · Rank-0 · Non-Sacrificial · Stationary
              </p>
              <p className="canonEssayPara" style={{ color: 'var(--gold)', fontStyle: 'italic' }}>
                &ldquo;A becomes A, because A knows it is A.&rdquo;
              </p>
            </div>
          </div>

          <div className="canonEssayAuthor">
            Standing State Press · Architectural Manifesto · Updated Edition · Originally published on{' '}
            <a
              href="https://medium.com/@leonsp3/the-admissibility-manifesto-56b8b5d66840"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--gold-dim)' }}
            >
              Medium →
            </a>
          </div>

          {/* ── Previous / Next footer navigation ── */}
          <div className="canonEssayNav">
            <a className="canonNavLink canonNavPrev" href="/essays/medium/sacred-flame-sovereign-identity">
              <span className="canonNavDir">Previous</span>
              <span className="canonNavTitle">M043 · The Sacred Flame</span>
            </a>
            <a className="canonNavIndex" href="/essays">Essays</a>
            <a className="canonNavLink canonNavNext" href="/essays/medium/standing-state-of-happiness">
              <span className="canonNavDir">Next</span>
              <span className="canonNavTitle">M045 · The Standing State of Happiness</span>
            </a>
          </div>

        </div>
      </article>

      <hr className="divider" />

    </>
  )
}
