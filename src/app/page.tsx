import Link from "next/link";

const skillGroups = [
  { label: "AI / ML", items: ["LLMs", "RAG", "Agents", "Whisper / TTS", "Prompt design", "Evals"] },
  { label: "Platform", items: ["Node / NestJS", "Python / FastAPI", "Postgres / MongoDB", "Redis"] },
  { label: "Frontend", items: ["Next.js", "React", "TailwindCSS", "TypeScript"] },
];

const proof = [
  {
    area: "RAG & LLMs",
    bullets: [
      "RAG over hospital policies (LangChain) with JSON/tool calling",
      "p95 latency ~900ms on Pinecone small index (replace with your real metric)",
      "Role-based access + audit-friendly logs",
    ],
    link: { href: "/projects/mila-neonatal-llm", label: "MILA case study" },
  },
  {
    area: "Agents & Voice",
    bullets: [
      "Asterisk/FreePBX + Twilio SIP trunk; intent-routing to tools",
      "Call summaries + CRM notes via server actions",
      "Human handoff with transcript",
    ],
    link: { href: "/projects/ai-voice-agent", label: "Voice Agent project" },
  },
  {
    area: "Automation & Ops",
    bullets: [
      "Stripe → QuickBooks payout reconciliation (Zapier)",
      "Single expense per payout; fewer reconciliation errors",
      "Hours saved monthly (replace with your real number)",
    ],
    link: { href: "/projects/stripe-qb-reconcile", label: "Automation project" },
  },
];

export default function Home() {
  return (
    <main className="min-h-[70vh]">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-bold">Osvaldo (Waldo) Restrepo</h1>
          <p className="mt-3 text-lg text-slate-600">
            Full-Stack & Applied AI Engineer — building LLMs, agents, and voice systems wired into real ops.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-700"
            >
              View Projects
            </Link>

            <a
              href="/Osvaldo_Restrepo_Resume.pdf"
              className="px-4 py-2 rounded-xl ring-1 ring-slate-300 hover:bg-slate-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Boquete, Chiriquí, Panama ·{" "}
            <a className="underline" href="mailto:bugfreewaldo@gmail.com">
              bugfreewaldo@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 border-t">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="text-slate-600 mt-1">A quick snapshot of what I use most.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {skillGroups.map((group) => (
              <div key={group.label} className="p-5 rounded-2xl ring-1 ring-slate-200">
                <h3 className="font-semibold">{group.label}</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  {group.items.map((s) => (
                    <li key={s} className="px-2 py-1 rounded-lg ring-1 ring-slate-200">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects teaser */}
      <section id="projects-teaser" className="py-12 border-t">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projects (quick view)</h2>
            <Link href="/projects" className="text-sm underline">See all</Link>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {[
              { slug: "mila-neonatal-llm", title: "MILA — Neonatal LLM Assistant", blurb: "RAG over hospital docs; clinician-friendly updates.", tags: ["LLM", "RAG", "Healthcare"] },
              { slug: "ai-voice-agent", title: "AI Voice Agent (Shining Image)", blurb: "Answers calls, books jobs, handoff to humans.", tags: ["Agents", "Voice", "Twilio"] },
              { slug: "stripe-qb-reconcile", title: "Stripe → QuickBooks Reconcile", blurb: "Aggregates fees per payout; clean books.", tags: ["Automation", "Stripe", "QuickBooks"] },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="block rounded-2xl ring-1 ring-slate-200 p-5 transition hover:shadow-md hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-2">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full ring-1 ring-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of Skills */}
      <section id="proof" className="py-12 border-t">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Proof of Skills</h2>
          <p className="text-slate-600 mt-1">Concrete examples and metrics.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {proof.map((b) => (
              <div key={b.area} className="p-5 rounded-2xl ring-1 ring-slate-200">
                <h3 className="font-semibold">{b.area}</h3>
                <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
                  {b.bullets.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <div className="mt-4">
                  <a className="text-sm underline" href={b.link.href}>
                    {b.link.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
