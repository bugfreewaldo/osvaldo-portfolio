export const metadata = { title: "How I Work — Process" };

type Phase = {
  title: string;
  goal: string;
  bullets: string[];
  artifacts: string[];
};

const PHASES: Phase[] = [
  {
    title: "1) Scope",
    goal: "Align on the real problem, constraints, and success metrics.",
    bullets: [
      "Stakeholders + user journey; painful steps and edge cases.",
      "Define success metrics (latency p95, accuracy, containment, $/msg).",
      "Pick a first slice (1 flow, 1 persona) and agree on guardrails.",
    ],
    artifacts: [
      "One-page scope (problem, metrics, risks).",
      "Data/Docs inventory (sources, owners, access).",
      "Eval plan outline (golden set, scoring).",
    ],
  },
  {
    title: "2) Prototype",
    goal: "Prove the end-to-end path with the fewest moving parts.",
    bullets: [
      "Stubbed tools, tiny corpus, smallest prompt that works.",
      "Decide sync vs streaming; structure outputs for UI.",
      "Collect logs early (inputs, outputs, latencies, costs).",
    ],
    artifacts: [
      "Working demo (RAG/agent/voice) behind auth.",
      "Prompt & tool contract (JSON schemas).",
      "Latency/cost trace samples.",
    ],
  },
  {
    title: "3) Evals",
    goal: "Lock in quality and safety before scaling.",
    bullets: [
      "Golden set: 50–200 real tasks with accepted answers.",
      "Metrics: retrieval@k, correctness, hallucination rate, readability.",
      "Red-team prompts + refusal/hand-off checks.",
    ],
    artifacts: [
      "Eval notebook or script (repeatable).",
      "Dashboard of scores (pre/post changes).",
      "Go/No-Go checklist.",
    ],
  },
  {
    title: "4) Ship",
    goal: "Make it reliable, observable, and cheap enough.",
    bullets: [
      "RBAC + audit trails; retry/backoff; idempotency on writes.",
      "Budget prompts; cache embeddings; small/fast model where possible.",
      "Roll out gradually; document handoff & on-call.",
    ],
    artifacts: [
      "Runbook (alerts, quotas, retries).",
      "Prod checklist (env, keys, limits, PII).",
      "User guide (2–3 minute read).",
    ],
  },
  {
    title: "5) Observe & Improve",
    goal: "Close the loop with data and user feedback.",
    bullets: [
      "Logs → weekly review (top failures, slow traces, costs).",
      "Shadow tests on new prompts/models behind a flag.",
      "Quarterly cleanup: dead prompts, unused tools, docs drift.",
    ],
    artifacts: [
      "Weekly ops report (latency, errors, $).",
      "Backlog of improvements with estimates.",
      "Changelog (what shipped, when, impact).",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">How I Work</h1>
      <p className="text-slate-600 mt-2">
        A lightweight, repeatable process I use for shipping AI features that are <em>useful, safe, and measurable</em>.
      </p>

      <div className="mt-8 space-y-6">
        {PHASES.map((p) => (
          <section key={p.title} className="p-5 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
            <div className="flex items-baseline gap-3">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <span className="text-sm text-slate-500">{p.goal}</span>
            </div>

            <ul className="list-disc pl-6 mt-3 space-y-1">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className="mt-4">
              <div className="text-sm font-medium">Artifacts</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.artifacts.map((a) => (
                  <span key={a} className="text-xs px-2 py-1 rounded-lg ring-1 ring-slate-200 dark:ring-slate-700">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <p className="text-xs text-slate-500 mt-6">
        Want details? See project pages for metrics, prompts, and ops notes.
      </p>
    </main>
  );
}
