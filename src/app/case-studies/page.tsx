import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, CheckCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Osvaldo Restrepo",
  description:
    "Real-world AI engineering case studies by Osvaldo Restrepo. Detailed breakdowns of production systems: the problem, approach, architecture decisions, and measurable results.",
  keywords: [
    "AI case studies",
    "AI engineering portfolio",
    "production AI systems",
    "RAG case study",
    "voice AI case study",
    "LLM production",
  ],
  alternates: { canonical: "/case-studies" },
};

const caseStudies = [
  {
    slug: "mila-neonatal-llm",
    title: "MILA — Neonatal LLM Assistant",
    client: "Hospital System (Panama)",
    duration: "4 months",
    category: "Healthcare AI",
    gradient: "from-purple-500 to-indigo-500",
    problem:
      "Hospital staff couldn't consistently write clear, compassionate updates for NICU parents. Messages were either too technical, too brief, or missing critical policy references. Parents were left confused during the most stressful time of their lives.",
    approach: [
      "Built a RAG pipeline over hospital policies and protocols using LangChain + Pinecone",
      "Created a simple clinician interface for drafting messages with automatic clarity checks",
      "Implemented role-based access with full audit trails for healthcare compliance",
      "Added a mandatory human approval step — no fully automated patient communication",
    ],
    results: [
      { metric: "42%", label: "Faster update writing", icon: Clock },
      { metric: "97%", label: "Policy reference accuracy", icon: CheckCircle },
      { metric: "0", label: "Factual errors in 300+ messages", icon: Zap },
      { metric: "82%", label: "Staff adoption in month one", icon: Users },
    ],
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI", "PostgreSQL", "Next.js"],
    lesson:
      "The biggest challenge wasn't the AI — it was earning trust from clinicians who were skeptical about AI touching patient communication. The mandatory human approval step was the key to adoption.",
  },
  {
    slug: "ai-voice-agent",
    title: "Voice Agent — Shining Image",
    client: "Shining Image of Texas (Small Business)",
    duration: "3 months",
    category: "Voice AI",
    gradient: "from-indigo-500 to-cyan-500",
    problem:
      "A window cleaning business was losing 30-40% of calls to voicemail — callers during jobs, after hours, and weekends just called the next company. Every missed call was $200-500 in lost revenue.",
    approach: [
      "Built a Twilio-based voice agent that answers calls like a real receptionist",
      "Trained on service FAQs, pricing, and availability using a custom knowledge base",
      "Added real booking capability — the AI actually schedules appointments, not just takes messages",
      "Implemented smart handoff: complex or emotional calls transfer to humans with full context",
    ],
    results: [
      { metric: "62%", label: "Reduction in missed calls", icon: TrendingUp },
      { metric: "39%", label: "Call-to-booking rate (from 24%)", icon: Users },
      { metric: "68%", label: "Calls fully handled by AI", icon: Zap },
      { metric: "$2-3K", label: "Monthly savings in recovered jobs", icon: DollarSign },
    ],
    stack: ["Python", "Twilio", "Whisper", "GPT-4", "ElevenLabs", "WebSockets", "PostgreSQL"],
    lesson:
      "The 'smart handoff' was the most important feature. Knowing WHEN to transfer to a human — detecting frustration, complex questions, or high-value opportunities — made the difference between a useful tool and an annoying robot.",
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Reconciler — Stripe to QuickBooks",
    client: "Shining Image of Texas",
    duration: "2 months",
    category: "Automation",
    gradient: "from-cyan-500 to-emerald-500",
    problem:
      "Manual reconciliation between Stripe payments and QuickBooks was taking 8+ hours per week. Payout fees were aggregated per payout, making line-item matching nearly impossible. Accounting errors were common.",
    approach: [
      "Built an automated pipeline that fetches Stripe payouts with fee breakdowns via the API",
      "Disaggregated payout-level fees back to individual transaction level",
      "Created QuickBooks journal entries with proper categorization automatically",
      "Added a review dashboard so the owner can approve before entries are posted",
    ],
    results: [
      { metric: "$0", label: "Variance in reconciliation", icon: CheckCircle },
      { metric: "70%+", label: "Reduction in manual accounting work", icon: Clock },
      { metric: "8hrs", label: "Saved per week", icon: TrendingUp },
      { metric: "100%", label: "Fee attribution accuracy", icon: Zap },
    ],
    stack: ["TypeScript", "Node.js", "Stripe API", "QuickBooks API", "PostgreSQL", "React"],
    lesson:
      "The hardest part was mapping Stripe's payout structure to QuickBooks' chart of accounts. Every business has a unique accounting setup, so the mapping had to be configurable, not hardcoded.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Detailed breakdowns of real production systems I&apos;ve built. The problem, the approach, the
            architecture decisions, and the measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.slug}
              className="relative rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${cs.gradient} p-8 text-white`}>
                <div className="flex flex-wrap items-center gap-3 text-sm opacity-90 mb-3">
                  <span>{cs.category}</span>
                  <span>·</span>
                  <span>{cs.client}</span>
                  <span>·</span>
                  <span>{cs.duration}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">{cs.title}</h2>
              </div>

              <div className="p-8 space-y-8">
                {/* Problem */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    The Problem
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cs.problem}
                  </p>
                </section>

                {/* Approach */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    The Approach
                  </h3>
                  <ul className="space-y-2">
                    {cs.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Results */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    The Results
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div
                        key={r.label}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center"
                      >
                        <r.icon className="w-5 h-5 text-indigo-500 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          {r.metric}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tech Stack */}
                <section>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Key Lesson */}
                <section className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
                  <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                    Key Lesson
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;{cs.lesson}&rdquo;
                  </p>
                </section>

                {/* Link to project */}
                <Link
                  href={`/projects/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline text-sm"
                >
                  View full project details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Have a Similar Challenge?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            I build AI systems that solve real business problems. Let&apos;s talk about yours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              All Projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
