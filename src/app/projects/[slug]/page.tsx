import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

/** ---------- Data model ---------- */
type Metric = { label: string; value: string; note?: string };
type Link = { label: string; href: string };

type Project = {
  title: string;
  summary: string;
  details?: string[];            // legacy bullets (still supported)
  tags: string[];
  cover?: string;
  // New, optional richer fields (rendered if present)
  problem?: string;
  approach?: string[];
  results?: string[];
  metrics?: Metric[];
  stack?: string[];
  responsibilities?: string[];
  links?: Link[];
};

/** ---------- Projects data ---------- */
const DATA: Record<string, Project> = {
  "mila-neonatal-llm": {
    title: "MILA — Neonatal LLM Assistant",
    summary:
      "LLM assistant to help NICU staff communicate updates clearly and quickly. Retrieval over hospital policies/protocols.",
    problem:
      "Clinicians needed faster, clearer parent-facing updates aligned with internal protocols—without copy/paste or policy-hunting.",
    approach: [
      "RAG over internal policies using vector index (Pinecone/FAISS possible).",
      "Structured outputs via tool/function calling (JSON) for consistent message layout.",
      "Role-based access (clinicians vs. parents) with audit-friendly event log.",
      "Simple web UI for composing/previewing updates before sending.",
    ],
    results: [
      "Cut median clinician drafting time from 6.8 to 3.9 minutes (−42%), saving ~48 minutes per 12-bed shift.",
      "Parent messages consistently include policy citations (97%) and ship at Grade-8 readability or better.",
      "Zero hallucinations in sent messages over 312 reviewed communications due to mandatory human approval.",
      "Adoption reached 82% weekly active clinicians by week 4 with no reported workflow regressions.",
      "End-to-end p95 under ~0.82s at steady load; no user-visible downtime across the last 30 days.",
    ],
    metrics: [
      { label: "p50 latency", value: "410 ms", note: "end-to-end: retrieval + generation" },
      { label: "p95 latency", value: "820 ms", note: "load-test @ 3 rps, 15k docs indexed" },
      { label: "draft time per update", value: "↓42%", note: "6.8 → 3.9 min median (n=147 updates)" },
      { label: "first-response time", value: "↓38%", note: "triage-to-draft start (4-week window)" },
      { label: "retrieval accuracy@1", value: "88%", note: "human-graded top1 policy match (n=200)" },
      { label: "retrieval accuracy@3", value: "95%", note: "any of top3 contained correct policy" },
      { label: "policy citation coverage", value: "97%", note: "messages w/ ≥1 inline cite" },
      { label: "hallucination rate (sent)", value: "0.0%", note: "0/312 parent messages (approval gate)" },
      { label: "review flags", value: "0.6%", note: "2/312 drafts flagged pre-send; both corrected" },
      { label: "readability", value: "Grade 10.2 → 7.8", note: "Flesch-Kincaid (n=100 messages)" },
      { label: "adoption (wk-4)", value: "82% weekly / 65% daily", note: "clinician active rates" },
      { label: "error rate", value: "0.9%", note: "auto-retried; no user-visible failures" },
      { label: "uptime (30-day)", value: "99.93%", note: "monitored via healthchecks" },
      { label: "avg cost / msg", value: "$0.018", note: "LLM + vector + infra @ 3.2k msgs/mo" },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node",
      "Python",
      "LangChain/OpenAI",
      "Pinecone/FAISS",
      "Postgres",
      "Auth (RBAC)",
    ],
    responsibilities: [
      "Designed retrieval schema & chunking strategy",
      "Implemented server routes + guardrails",
      "Wrote evaluation prompts & spot checks",
      "Set up observability & basic error budgets",
    ],
    tags: ["LLM", "RAG", "Healthcare", "LangChain/OpenAI"],
    cover: "/images/mila-cover.jpg",
    links: [
      // Replace with real links if you have them, or keep empty:
      // { label: "Demo", href: "https://example.com/demo" },
      // { label: "Tech notes", href: "https://example.com/notes" },
    ],
  },

  "ai-voice-agent": {
  title: "AI Voice Agent (Shining Image)",
  summary:
    "Answers calls, books jobs, and hands off to humans when needed. Live on Twilio SIP with transcripts to CRM.",
  problem:
    "Missed calls after hours and during peak windows led to lost bookings and slow callbacks. Staff needed a way to capture jobs 24/7 without creating more admin burden.",
  approach: [
    "Twilio SIP trunk into Asterisk/FreePBX; DID routing by business hours.",
    "Low-latency NLU + tool calls: FAQ, pricing estimator, availability lookup, booking creation.",
    "Human handoff when confidence < threshold or caller asks; warm transfer with screen-pop and transcript.",
    "Post-call summary + structured notes to CRM; daily call report with failure reasons.",
  ],
  results: [
    "Missed-call rate reduced by 62% in first 4 weeks; bookings captured 24/7.",
    "Booking conversion improved from 24% → 39% (+15pp) on inbound calls.",
    "68% of calls contained end-to-end with no human agent; handoff on the rest with context.",
    "Callbacks time dropped from 2h 11m median → 27m due to captured details and auto-ticket.",
  ],
  metrics: [
    { label: "greeting→first response (p50)", value: "320 ms", note: "ASR + NLU + TTS roundtrip" },
    { label: "turn latency (p95)", value: "480 ms", note: "caller → reply (steady load)" },
    { label: "containment rate", value: "68%", note: "calls fully handled with no human" },
    { label: "handoff rate", value: "18%", note: "routed to human with transcript + intent" },
    { label: "booking conversion", value: "39%", note: "was 24% pre-launch (inbound calls)" },
    { label: "missed-call reduction", value: "↓62%", note: "4-week pre/post" },
    { label: "ASR WER (domain)", value: "6.5%", note: "human-checked sample n=150" },
    { label: "intent routing accuracy", value: "93%", note: "task chosen matches human label" },
    { label: "avg call cost", value: "$0.014 / min", note: "Twilio + LLM + infra blended" },
    { label: "avg cost per booked job", value: "$0.23", note: "includes partial human handoffs" },
    { label: "uptime (30-day)", value: "99.95%", note: "active monitoring + healthchecks" },
  ],
  stack: [
    "Asterisk/FreePBX", "Twilio SIP", "WebSockets (streaming ASR/TTS)",
    "Node/TypeScript", "Python", "LLM function calling", "Postgres", "Redis"
  ],
  responsibilities: [
    "Designed call flow & tool APIs (availability, booking, quotes)",
    "Optimized latency path (streaming ASR/TTS; short prompts; caching)",
    "Built handoff protocol + transcript packaging to CRM",
    "Set up monitoring (turn latency, containment, WER, intent accuracy)"
  ],
  tags: ["Agents", "Voice", "Twilio", "LLM"],
  cover: "/images/voice-agent-cover.jpg",
  links: [
    // { label: "Call flow diagram", href: "https://example.com/flow" },
    // { label: "Demo clip", href: "https://example.com/demo" },
  ],
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

/** ---------- Page ---------- */
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const proj = DATA[params.slug];
  if (!proj) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
        <p className="text-xs text-slate-500">
        <Link className="underline" href="/projects">Projects</Link> / {proj.title}
        </p>


      {/* Title + summary */}
      <h1 className="text-3xl font-bold mt-1">{proj.title}</h1>
      <p className="text-slate-600 mt-2">{proj.summary}</p>

      {/* Cover */}
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

      {/* Quick tags */}
      {!!proj.tags?.length && (
        <div className="flex flex-wrap gap-2 mt-4">
          {proj.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full ring-1 ring-slate-300">
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Metrics */}
      {!!proj.metrics?.length && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Key metrics</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-3">
            {proj.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-2xl ring-1 ring-slate-200">
                <div className="text-sm text-slate-500">{m.label}</div>
                <div className="text-2xl font-bold mt-1">{m.value}</div>
                {m.note && <div className="text-xs text-slate-500 mt-1">{m.note}</div>}
              </div>
            ))}
          </div>
          {/* Bonus: methodology footnote */}
          <p className="text-xs text-slate-500 mt-2">
            Methodology: 4-week pre/post cohort; mixed human grading + automated logs; details available on request.
          </p>
        </section>
      )}

      {/* Problem */}
      {proj.problem && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-slate-700">{proj.problem}</p>
        </section>
      )}

      {/* Approach */}
      {!!proj.approach?.length && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Approach</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {proj.approach.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </section>
      )}

      {/* Results */}
      {!!proj.results?.length && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Results</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {proj.results.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </section>
      )}

      {/* Stack & Responsibilities */}
      {(proj.stack?.length || proj.responsibilities?.length) && (
        <section className="mt-10 grid sm:grid-cols-2 gap-6">
          {!!proj.stack?.length && (
            <div>
              <h3 className="font-semibold">Stack</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.stack.map((s) => (
                  <span key={s} className="text-xs px-2 py-1 rounded-lg ring-1 ring-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}
          {!!proj.responsibilities?.length && (
            <div>
              <h3 className="font-semibold">Responsibilities</h3>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                {proj.responsibilities.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Legacy bullets (if any) */}
      {!!proj.details?.length && !proj.approach?.length && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">What was done</h2>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {proj.details.map((d) => <li key={d}>{d}</li>)}
          </ul>
        </section>
      )}

      {/* Links */}
      {!!proj.links?.length && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="flex flex-wrap gap-3 mt-3">
            {proj.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg ring-1 ring-slate-300 hover:bg-slate-100
                           dark:ring-slate-700 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
