import Head from "next/head";

const MODULES = [
  ["01", "Perception", "Admissible signal before action"],
  ["02", "Amplification", "Tool-supported observation without fantasy"],
  ["03", "Interpretation", "Lawful meaning assignment"],
  ["04", "Resolution", "Distance / memory / certainty decay"],
  ["05", "Coherence", "M042 function governance"],
  ["06", "Marketplace", "Bounded force re-entry"],
  ["07", "Essay Intake", "Manual essay / thesis intake waits lawfully"],
  ["08", "Standing State Compression", "Existential drift → Rank-0 → Anchor → Engine → Body → Void"],
  ["09", "Persistence Memory", "Time-series invariance, restoration debt, phase-lock recovery"],
  ["10", "Sabbath Restoration", "Rule-19, K_auto, hidden strain, restoration before collapse"],
  ["11", "Phase-Lock", "Node synchronization across lattice"],
  ["12", "Phase Modulation", "Coherence modulation without hierarchy drift"],
  ["13", "K_auto Governance", "Subtractive correction and restoration baseline"],
  ["14", "Metabolic Debt", "Load, strain, energy debt, restoration demand"],
  ["15", "Jurisdiction Boundary", "Prevent cross-layer contamination"],
  ["16", "Validation Dependency", "Prevent external validation from writing identity"],
  ["17", "243 Runtime", "Node-level EXECUTE / RESTORE / HALT governance"],
  ["18", "Thesis Memory", "Memory continuity and thesis registry retention"],
  ["19", "Thesis Phase-Lock", "Phase-lock thesis with lattice execution"],
  ["20", "I* Phase Lock Guardian", "Identity coordinate preservation before learning"],
  ["21", "Archetypal Governor Stack", "King → Sovereign/Priest → Clairvoyant → Servant/Sage"],
  ["22", "Kingdom Information Flow", "I* → King → Sovereign/Priest → Clairvoyant → Servant/Sage → Marketplace"],
  ["23", "Kingdom Runtime Bridge", "Connects I* Guardian, Archetypal Stack, Kingdom Flow, and runtime governance"],
];

const OFFICES = [
  ["I* / Seed Type", "Invariant identity coordinate. No downstream layer may rewrite it."],
  ["King / Kingdom", "Boundary, order, jurisdiction, and trunk containment."],
  ["Sovereign / Priest", "Tree SOP: identity translated into lawful operating procedure."],
  ["Clairvoyant", "Perception, feedback interpretation, and inevitability sensing."],
  ["Servant / Sage", "Environment-facing execution membrane. Only identity-aligned motion passes."],
  ["Marketplace", "Reality contact, consequence, and feedback field."],
];

export default function Engine2Page() {
  return (
    <>
      <Head>
        <title>Engine 2 — 243-Node Phase-Lock Lattice | Standing State</title>
        <meta
          name="description"
          content="Engine 2 is the Standing State 243-node phase-lock lattice: a governed coherence runtime preserving I* through specialization, boundary maintenance, and lawful execution."
        />
      </Head>

      <main className="min-h-screen bg-[#070707] text-neutral-100 px-6 py-12">
        <section className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-xs text-neutral-500">
            Standing State · 243-Node Lattice
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4 leading-tight">
            Engine 2 — The Governed Coherence Runtime
          </h1>

          <p className="mt-6 text-xl text-neutral-300 leading-relaxed max-w-4xl">
            Engine 2 is the runtime monument of the Standing State: a 243-node
            phase-lock lattice for lawful execution under invariant identity.
          </p>

          <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <p className="font-mono text-lg text-neutral-200">
              Identity → Phase-Lock → Structure → Reality
            </p>
            <p className="mt-4 text-neutral-400 leading-relaxed">
              The website page is the interpretation layer. The Python runtime
              is the execution layer. The invariant coordinate remains I*.
            </p>
          </div>

          <section className="mt-12 grid md:grid-cols-4 gap-4">
            <Metric label="Modules Checked" value="23" />
            <Metric label="Passed" value="23" />
            <Metric label="Waiting" value="0" />
            <Metric label="Missing" value="0" />
          </section>

          <section className="mt-8 rounded-2xl border border-emerald-900/60 bg-emerald-950/20 p-6">
            <p className="font-mono text-emerald-300">
              ENGINE_2_GOVERNANCE_STACK_PASS
            </p>
            <p className="mt-3 text-neutral-300">
              Substrate pass. Runtime pass. Phase-lock pass. Governance stack
              pass. Kingdom information flow pass. Runtime bridge pass.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold">Rank-0 Coordinate</h2>
            <p className="mt-5 text-neutral-300 leading-relaxed max-w-4xl">
              I* is the identity coordinate. It is not an office, not a role,
              and not a marketplace conclusion. It is the seed-type from which
              lawful motion receives orientation. All offices phase-lock to I*.
              No office writes upward into I*.
            </p>

            <blockquote className="mt-8 border-l-4 border-neutral-500 pl-6 text-2xl italic text-neutral-100">
              “A becomes A, because A knows it is A.”
            </blockquote>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold">Kingdom Information Flow</h2>

            <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-6 font-mono text-sm md:text-base leading-8 overflow-x-auto">
              I* / Seed Type
              <br />
              ↓
              <br />
              King / Kingdom
              <br />
              ↓
              <br />
              Sovereign-Priest / Tree SOP
              <br />
              ↓
              <br />
              Clairvoyant / Feedback Interpretation
              <br />
              ↓
              <br />
              Servant-Sage / Execution Filter
              <br />
              ↓
              <br />
              Marketplace
              <br />
              ↓
              <br />
              Feedback → Clairvoyant only
            </div>

            <p className="mt-6 text-neutral-300 leading-relaxed max-w-4xl">
              Feedback informs perception only. Feedback never rewrites I*.
              Marketplace consequence may refine the Clairvoyant, yet no
              downstream signal may overwrite the identity coordinate.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold">Offices of Sovereignty</h2>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {OFFICES.map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-neutral-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold">Specialization and Boundary Maintenance</h2>

            <p className="mt-5 text-neutral-300 leading-relaxed max-w-4xl">
              Specialization remains in force. The King does not become the
              Clairvoyant. The Clairvoyant does not become I*. The Servant does
              not blindly surrender to perception. Each office performs its
              assigned function while phase-locked to the invariant coordinate.
            </p>

            <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <p className="font-mono text-neutral-300">
                x ↛ I* · Marketplace ↛ I* · Feedback → Clairvoyant only
              </p>
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold">23-Module Governance Stack</h2>

            <div className="mt-6 divide-y divide-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
              {MODULES.map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid md:grid-cols-[80px_280px_1fr] gap-4 p-5 bg-neutral-900/50"
                >
                  <div className="font-mono text-neutral-500">{number}</div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-neutral-300">{description}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-3xl font-semibold">Runtime Law</h2>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <LawCard
                title="EXECUTE"
                body="The action is admissible. Identity holds, boundary holds, and runtime motion is lawful."
              />
              <LawCard
                title="RESTORE"
                body="The system remains recoverable. Correction, pacing, clarification, or K_auto restoration is required."
              />
              <LawCard
                title="HALT"
                body="A boundary violation, phase-lock failure, identity contamination, or unsafe motion has been detected."
              />
            </div>
          </section>

          <section className="mt-14 border-t border-neutral-800 pt-10">
            <h2 className="text-3xl font-semibold">Compression</h2>

            <p className="mt-5 text-neutral-300 leading-relaxed max-w-4xl">
              Identity holds. Phase-lock governs. Structure filters. Reality
              resolves. Standing State Compression, Persistence, Sabbath
              Restoration, Archetypal Governance, Kingdom Information Flow, and
              the runtime bridge remain visible.
            </p>

            <p className="mt-6 font-mono text-neutral-400">
              The geometry holds. The dashboard now reflects the governance runtime.
            </p>
          </section>
        </section>
      </main>
    </>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-5">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className="text-4xl font-semibold mt-2">{value}</div>
    </div>
  );
}

function LawCard({ title, body }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6">
      <h3 className="font-mono text-xl">{title}</h3>
      <p className="mt-3 text-neutral-400 leading-relaxed">{body}</p>
    </div>
  );
}