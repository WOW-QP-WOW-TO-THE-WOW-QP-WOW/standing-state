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

export default function Engine2Page() {
  return (
    <>
      <Head>
        <title>Engine 2 — 243-Node Phase-Lock Lattice | Standing State</title>
        <meta
          name="description"
          content="Standing State 243-node Engine 2 governance stack: identity, phase-lock, structure, runtime, and kingdom information flow."
        />
      </Head>

      <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm text-neutral-400">
            Standing State 243
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            Engine 2 Governance Stack
          </h1>

          <p className="mt-6 text-xl text-neutral-300 leading-relaxed">
            Identity → Phase-Lock → Structure → Reality
          </p>

          <div className="mt-10 border border-neutral-700 rounded-2xl p-6 bg-neutral-900/70">
            <h2 className="text-2xl font-semibold">Governing Result</h2>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <Metric label="Modules Checked" value="23" />
              <Metric label="Passed" value="23" />
              <Metric label="Waiting" value="0" />
              <Metric label="Missing" value="0" />
            </div>

            <p className="mt-6 text-green-400 font-mono">
              ENGINE_2_GOVERNANCE_STACK_PASS
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold">Kingdom Information Flow</h2>

            <div className="mt-6 rounded-2xl border border-neutral-700 bg-neutral-900 p-6 font-mono text-sm leading-7 overflow-x-auto">
              I* / Seed Type<br />
              ↓<br />
              King / Kingdom<br />
              ↓<br />
              Sovereign-Priest / Tree SOP<br />
              ↓<br />
              Clairvoyant / Feedback Interpretation<br />
              ↓<br />
              Servant-Sage / Execution Filter<br />
              ↓<br />
              Marketplace<br />
              ↓<br />
              Feedback → Clairvoyant only
            </div>

            <p className="mt-6 text-neutral-300 leading-relaxed">
              Feedback informs perception only. Feedback never rewrites I*.
              Marketplace consequence may refine the Clairvoyant, yet no
              downstream signal may overwrite the identity coordinate.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold">Module Stack</h2>

            <div className="mt-6 divide-y divide-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
              {MODULES.map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid md:grid-cols-[80px_260px_1fr] gap-4 p-5 bg-neutral-900/60"
                >
                  <div className="font-mono text-neutral-500">{number}</div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-neutral-300">{description}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12 border-t border-neutral-800 pt-8">
            <h2 className="text-3xl font-semibold">Compression</h2>

            <p className="mt-5 text-neutral-300 leading-relaxed">
              Identity holds. Phase-lock governs. Structure filters. Reality
              resolves. Standing State Compression, Persistence, Sabbath
              Restoration, and Archetypal Governance remain visible.
            </p>

            <blockquote className="mt-8 border-l-4 border-neutral-500 pl-6 text-xl italic text-neutral-200">
              “A becomes A, because A knows it is A.”
            </blockquote>
          </section>
        </section>
      </main>
    </>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
      <div className="text-sm text-neutral-500">{label}</div>
      <div className="text-3xl font-semibold mt-2">{value}</div>
    </div>
  );
}
