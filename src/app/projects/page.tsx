"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Phone, CreditCard, ArrowRight, Sparkles, Target, BarChart3, Camera, Lightbulb, Wallet, GraduationCap } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <section className="relative pt-16 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Featured Work
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Projects
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real systems in production. Each project includes problem context,
            technical approach, and measured outcomes.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project, i) => {
              const isExternal = 'external' in project && project.external;
              const CardWrapper = isExternal ? 'a' : Link;
              const cardProps = isExternal
                ? { href: project.external, target: "_blank", rel: "noopener noreferrer" }
                : { href: `/projects/${project.slug}` };

              return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <CardWrapper
                  {...cardProps}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        {project.cover ? (
                          <Image
                            src={project.cover}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                            <project.icon className="w-16 h-16 text-indigo-500/50" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/80 dark:md:to-slate-900/80" />

                        {/* Mobile title overlay */}
                        <div className="absolute bottom-4 left-4 right-4 md:hidden">
                          <h2 className="text-xl font-bold text-white">
                            {project.title}
                          </h2>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        {/* Desktop title */}
                        <div className="hidden md:flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                              <project.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {project.title}
                              </h2>
                              <p className="text-sm text-slate-500">{project.subtitle}</p>
                            </div>
                          </div>
                        </div>

                        {/* Mobile subtitle */}
                        <p className="text-sm text-slate-500 mb-3 md:hidden">{project.subtitle}</p>

                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                          {project.description}
                        </p>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-3 mb-4">
                          {project.metrics.map((metric) => (
                            <div
                              key={metric.label}
                              className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800"
                            >
                              <span className="text-xs text-slate-500">{metric.label}: </span>
                              <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                {metric.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:gap-3 transition-all">
                          {isExternal ? "Visit site" : "View case study"}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4 border-t border-slate-200 dark:border-slate-800">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Have a project in mind?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Let&apos;s discuss how AI can solve your specific challenges.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// Project data
const projects = [
  {
    slug: "mila-neonatal-llm",
    title: "MILA",
    subtitle: "Neonatal LLM Assistant",
    description:
      "RAG-powered assistant helping NICU clinicians draft parent-facing updates aligned with hospital policies. Reduced drafting time by 42% with zero hallucinations in sent messages.",
    cover: "/images/mila-cover.jpg",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
    tags: ["LLM", "RAG", "Healthcare", "LangChain"],
    metrics: [
      { label: "Latency p95", value: "820ms" },
      { label: "Draft time", value: "↓42%" },
      { label: "Accuracy@3", value: "95%" },
    ],
  },
  {
    slug: "ai-voice-agent",
    title: "Voice Agent",
    subtitle: "Shining Image",
    description:
      "24/7 AI phone agent handling inbound calls, booking jobs, and handing off to humans when needed. Live on Twilio SIP with real-time transcripts to CRM.",
    cover: "/images/voice-agent-cover.png",
    icon: Phone,
    gradient: "from-indigo-500 to-cyan-500",
    tags: ["Agents", "Voice", "Twilio", "Real-time"],
    metrics: [
      { label: "Containment", value: "68%" },
      { label: "Conversion", value: "+15pp" },
      { label: "Latency p50", value: "320ms" },
    ],
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Reconciler",
    subtitle: "Stripe → QuickBooks",
    description:
      "Automated financial reconciliation that aggregates Stripe fees by payout and creates clean QuickBooks entries. Cut monthly reconciliation time by 68%.",
    cover: null,
    icon: CreditCard,
    gradient: "from-emerald-500 to-teal-500",
    tags: ["Automation", "Stripe", "QuickBooks", "FinOps"],
    metrics: [
      { label: "Accuracy", value: "99.7%" },
      { label: "Time saved", value: "↓68%" },
      { label: "Variance", value: "$0" },
    ],
  },
  {
    slug: "9vectors",
    title: "9Vectors.ai",
    subtitle: "Strategic Assessment Platform",
    description:
      "AI-powered strategic assessment platform helping enterprises make data-driven decisions. As Technical Co-Founder for Edwin Miller, built the core AI infrastructure powering organizational intelligence at scale.",
    cover: null,
    icon: Target,
    gradient: "from-rose-500 to-orange-500",
    tags: ["AI Platform", "Enterprise", "Co-Founder", "Strategy"],
    metrics: [
      { label: "Valuation", value: "$150M+" },
      { label: "Role", value: "Tech Co-Founder" },
      { label: "Scale", value: "Enterprise" },
    ],
    external: "https://9vectors.ai",
  },
  {
    slug: "measurement13",
    title: "Measurement13.ai",
    subtitle: "AI-Powered Analytics",
    description:
      "Advanced measurement and analytics platform leveraging AI to transform raw data into actionable business insights. Built for organizations seeking precision in performance tracking.",
    cover: null,
    icon: BarChart3,
    gradient: "from-blue-500 to-indigo-500",
    tags: ["Analytics", "AI", "Measurement", "SaaS"],
    metrics: [
      { label: "Type", value: "SaaS" },
      { label: "Focus", value: "Analytics" },
      { label: "Stack", value: "AI/ML" },
    ],
    external: "https://measurement13.ai",
  },
  {
    slug: "snapshot9",
    title: "Snapshot9.ai",
    subtitle: "Business Transformation Platform",
    description:
      "Comprehensive business transformation platform that captures, analyzes, and optimizes organizational processes using AI. Enables companies to visualize and improve their operational efficiency.",
    cover: null,
    icon: Camera,
    gradient: "from-violet-500 to-purple-500",
    tags: ["Enterprise", "Transformation", "AI", "Operations"],
    metrics: [
      { label: "Type", value: "Platform" },
      { label: "Focus", value: "Transformation" },
      { label: "Target", value: "Enterprise" },
    ],
    external: "https://snapshot9.ai",
  },
  {
    slug: "thegreymatter",
    title: "TheGreyMatter.ai",
    subtitle: "Business Intelligence Platform",
    description:
      "AI-driven business intelligence platform that turns complex data into clear, actionable insights. Designed to help leadership teams make faster, smarter decisions with confidence.",
    cover: null,
    icon: Lightbulb,
    gradient: "from-slate-500 to-zinc-600",
    tags: ["Business Intelligence", "AI", "Analytics", "Decision Support"],
    metrics: [
      { label: "Type", value: "BI Platform" },
      { label: "Focus", value: "Intelligence" },
      { label: "Users", value: "Leadership" },
    ],
    external: "https://thegreymatter.ai",
  },
  {
    slug: "budgetcopilot",
    title: "BudgetCopilot",
    subtitle: "AI Financial Agent",
    description:
      "Your personal AI financial agent that helps you take control of your money. Manage budgets, track debts, set savings goals, and get personalized advice to kill debt faster and build wealth.",
    cover: null,
    icon: Wallet,
    gradient: "from-green-500 to-emerald-500",
    tags: ["AI Agent", "FinTech", "Personal Finance", "Automation"],
    metrics: [
      { label: "Type", value: "AI Agent" },
      { label: "Focus", value: "Finance" },
      { label: "Users", value: "Consumer" },
    ],
    external: "https://budgetcopilot.app",
  },
  {
    slug: "waldoscodelab",
    title: "Waldo's Code Lab",
    subtitle: "Free Coding School",
    description:
      "A hands-on, free coding school helping teens and kids learn programming step by step. Built live with no fluff—focused on practical skills that prepare young developers for real-world opportunities.",
    cover: null,
    icon: GraduationCap,
    gradient: "from-amber-500 to-yellow-500",
    tags: ["Education", "Free", "Kids & Teens", "Coding"],
    metrics: [
      { label: "Cost", value: "Free" },
      { label: "Audience", value: "Teens & Kids" },
      { label: "Style", value: "Hands-on" },
    ],
    external: "https://waldoscodelab.com",
  },
];
