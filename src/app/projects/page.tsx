"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Phone, CreditCard, ArrowRight, Sparkles, Target, BarChart3, Camera, Lightbulb, Wallet, GraduationCap, Sparkle, Droplets, Car } from "lucide-react";

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} shrink-0`}>
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                          {project.title}
                        </h2>
                        <p className="text-sm text-slate-500">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
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
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI"],
  },
  {
    slug: "ai-voice-agent",
    title: "Voice Agent",
    subtitle: "Shining Image",
    description:
      "24/7 AI phone agent handling inbound calls, booking jobs, and handing off to humans when needed. Live on Twilio SIP with real-time transcripts to CRM.",
    icon: Phone,
    gradient: "from-indigo-500 to-cyan-500",
    stack: ["Python", "Twilio", "Whisper", "GPT-4", "WebSockets"],
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Reconciler",
    subtitle: "Stripe → QuickBooks",
    description:
      "Automated financial reconciliation that aggregates Stripe fees by payout and creates clean QuickBooks entries. Cut monthly reconciliation time by 68%.",
    icon: CreditCard,
    gradient: "from-emerald-500 to-teal-500",
    stack: ["Node.js", "Stripe API", "QuickBooks API", "PostgreSQL"],
  },
  {
    slug: "9vectors",
    title: "9Vectors.ai",
    subtitle: "Strategic Assessment Platform",
    description:
      "AI-powered strategic assessment platform helping enterprises make data-driven decisions. As Technical Co-Founder, built the core AI infrastructure powering organizational intelligence at scale.",
    icon: Target,
    gradient: "from-rose-500 to-orange-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "AWS"],
    external: "https://9vectors.ai",
  },
  {
    slug: "measurement13",
    title: "Measurement13.ai",
    subtitle: "AI-Powered Analytics",
    description:
      "Advanced measurement and analytics platform leveraging AI to transform raw data into actionable business insights. Built for organizations seeking precision in performance tracking.",
    icon: BarChart3,
    gradient: "from-blue-500 to-indigo-500",
    stack: ["React", "Python", "TensorFlow", "BigQuery", "GCP"],
    external: "https://measurement13.ai",
  },
  {
    slug: "snapshot9",
    title: "Snapshot9.ai",
    subtitle: "Business Transformation Platform",
    description:
      "Comprehensive business transformation platform that captures, analyzes, and optimizes organizational processes using AI. Enables companies to visualize and improve their operational efficiency.",
    icon: Camera,
    gradient: "from-violet-500 to-purple-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    external: "https://snapshot9.ai",
  },
  {
    slug: "thegreymatter",
    title: "TheGreyMatter.ai",
    subtitle: "Business Intelligence Platform",
    description:
      "AI-driven business intelligence platform that turns complex data into clear, actionable insights. Designed to help leadership teams make faster, smarter decisions with confidence.",
    icon: Lightbulb,
    gradient: "from-slate-500 to-zinc-600",
    stack: ["React", "Node.js", "OpenAI", "MongoDB", "AWS"],
    external: "https://thegreymatter.ai",
  },
  {
    slug: "budgetcopilot",
    title: "BudgetCopilot",
    subtitle: "AI Financial Agent",
    description:
      "Your personal AI financial agent that helps you take control of your money. Manage budgets, track debts, set savings goals, and get personalized advice to kill debt faster and build wealth.",
    icon: Wallet,
    gradient: "from-green-500 to-emerald-500",
    stack: ["Next.js", "OpenAI", "Plaid", "PostgreSQL", "Vercel"],
    external: "https://budgetcopilot.app",
  },
  {
    slug: "waldoscodelab",
    title: "Waldo's Code Lab",
    subtitle: "Free Coding School",
    description:
      "A hands-on, free coding school helping teens and kids learn programming step by step. Built live with no fluff—focused on practical skills that prepare young developers for real-world opportunities.",
    icon: GraduationCap,
    gradient: "from-amber-500 to-yellow-500",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    external: "https://waldoscodelab.com",
  },
  {
    slug: "clearchoiceboquete",
    title: "Clear Choice Boquete",
    subtitle: "Booking Engine & Website",
    description:
      "Full-stack website and booking engine for Clear Choice Window Cleaning. Customers can browse services, check availability, and book appointments seamlessly.",
    icon: Droplets,
    gradient: "from-sky-500 to-blue-500",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Vercel"],
    external: "https://clearchoiceboquete.com",
  },
  {
    slug: "shining-image-platform",
    title: "Shining Image Platform",
    subtitle: "Business Operations Suite",
    description:
      "Complete business operations platform with booking, invoicing, and scheduling for Shining Image of Texas. Streamlines customer management and automates business workflows.",
    icon: Sparkle,
    gradient: "from-cyan-500 to-teal-500",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    external: "https://shining-image.vercel.app",
  },
  {
    slug: "autospa-bqt",
    title: "AutoSpa BQT",
    subtitle: "Mobile Car Detailing Platform",
    description:
      "Full booking, invoicing, and scheduling system for AutoSpa—a mobile business that brings luxury car cleaning directly to your home.",
    icon: Car,
    gradient: "from-red-500 to-rose-500",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    external: "https://autospabqt.com",
  },
];
