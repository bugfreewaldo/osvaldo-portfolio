import Link from "next/link";

export const metadata = { title: "Projects" };

type Card = { slug: string; title: string; blurb: string; tags: string[] };

const items: Card[] = [
  {
    slug: "mila-neonatal-llm",
    title: "MILA — Neonatal LLM Assistant",
    blurb: "RAG over hospital docs; clinician-friendly updates.",
    tags: ["LLM", "RAG", "Healthcare"],
  },
  {
    slug: "ai-voice-agent",
    title: "AI Voice Agent (Shining Image)",
    blurb: "Takes calls, books jobs, hands off to humans when needed.",
    tags: ["Agents", "Voice", "Twilio"],
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Stripe → QuickBooks Reconcile",
    blurb: "Aggregates fees per payout via automations; clean books.",
    tags: ["Automation", "Stripe", "QuickBooks"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-slate-600 mt-2">Click any card to see details.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block rounded-2xl ring-1 ring-slate-200 p-5 transition hover:shadow-md hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label={`Open project: ${p.title}`}
          >
            <h2 className="font-semibold text-lg">
              {p.title}
              <span className="ml-1 inline-block align-middle opacity-60 group-hover:opacity-100">
                →
              </span>
            </h2>
            <p className="text-sm text-slate-600 mt-2">{p.blurb}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-full ring-1 ring-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
