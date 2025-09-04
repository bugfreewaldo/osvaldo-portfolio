import Image from "next/image";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  summary: string;
  details: string[];
  tags: string[];
  cover?: string; // new: optional cover path under /public
};

const DATA: Record<string, Project> = {
  "mila-neonatal-llm": {
    title: "MILA — Neonatal LLM Assistant",
    summary:
      "LLM assistant to help NICU staff communicate updates clearly and quickly. Uses retrieval over hospital policies/protocols.",
    details: [
      "RAG pipeline over internal policies using a vector index (e.g., FAISS/Pinecone).",
      "Structured outputs with function/tool calling (JSON) for consistent message format.",
      "Role-based access (clinicians vs. parents) with an audit-friendly event log.",
      "Simple web UI for composing/previewing updates before sending.",
      "Target p95 under ~1s end-to-end (replace with your real metric later).",
    ],
    tags: ["LLM", "RAG", "Healthcare", "LangChain/OpenAI"],
    cover: "/images/mila-cover.jpg", // <- this file must exist in /public/images/
  },
  "ai-voice-agent": {
    title: "AI Voice Agent (Shining Image)",
    summary:
      "Agent that answers calls, books jobs, and hands off to humans when needed.",
    details: [
      "Asterisk/FreePBX + Twilio SIP trunk.",
      "Intent routing to tools (FAQ answers, scheduling, CRM notes).",
      "Human handoff with transcript attached to the ticket.",
    ],
    tags: ["Agents", "Voice", "Twilio"],
  },
  "stripe-qb-reconcile": {
    title: "Stripe → QuickBooks Reconcile",
    summary:
      "Aggregates Stripe fees by payout and creates one expense per payout in QuickBooks.",
    details: [
      "Zapier flow computes fees per payout and handles retries.",
      "Creates a single expense per payout in QuickBooks for clean accounting.",
      "Saves monthly bookkeeping time and reduces reconciliation errors.",
    ],
    tags: ["Automation", "Stripe", "QuickBooks"],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const proj = DATA[params.slug];
  if (!proj) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-xs text-slate-500">Project</p>
      <h1 className="text-3xl font-bold mt-1">{proj.title}</h1>
      <p className="text-slate-600 mt-2">{proj.summary}</p>

      {/* Show cover image if provided */}
      {proj.cover && (
        <Image
          src={proj.cover}
          alt={`${proj.title} cover`}
          width={1200}
          height={675}
          className="w-full h-auto rounded-2xl ring-1 ring-slate-200 mt-6"
          priority
        />
      )}

      <h2 className="text-xl font-semibold mt-6">What was done</h2>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        {proj.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-6">
        {proj.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full ring-1 ring-slate-300">
            {t}
          </span>
        ))}
      </div>
    </main>
  );
}
