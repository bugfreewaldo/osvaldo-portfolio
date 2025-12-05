"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Brain, Cpu, MessageSquare, Zap, ArrowRight, Github, Linkedin, Mail, Instagram } from "lucide-react";

// Rotating text phrases
const rotatingPhrases = [
  "I build AI that works in the real world.",
  "I turn complex ML into production systems.",
  "I make LLMs actually useful for business.",
  "I ship agents that solve real problems.",
  "I build voice AI that sounds human.",
  "I automate workflows with intelligence.",
];

// Rotating text carousel component
function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center font-mono bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"
        >
          {rotatingPhrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// Animated background grid
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>
  );
}

// Floating nodes animation - fixed positions to avoid hydration mismatch
const floatingNodes = [
  { id: 0, x: 15, y: 20, delay: 0 },
  { id: 1, x: 85, y: 15, delay: 0.5 },
  { id: 2, x: 25, y: 70, delay: 1 },
  { id: 3, x: 75, y: 80, delay: 1.5 },
  { id: 4, x: 50, y: 40, delay: 0.8 },
  { id: 5, x: 10, y: 50, delay: 1.2 },
];

function FloatingNodes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingNodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 bg-indigo-400/40 rounded-full"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const capabilities = [
  {
    icon: Brain,
    title: "LLMs & RAG",
    description: "Building intelligent systems with retrieval-augmented generation and fine-tuned language models",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: MessageSquare,
    title: "AI Agents",
    description: "Autonomous agents with tool-calling, memory, and multi-step reasoning capabilities",
    gradient: "from-indigo-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "Voice Systems",
    description: "End-to-end voice AI with speech recognition, synthesis, and real-time conversation",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Intelligent workflow automation connecting AI to real business operations",
    gradient: "from-emerald-500 to-yellow-500",
  },
];

const featuredProjects = [
  {
    slug: "mila-neonatal-llm",
    title: "MILA",
    subtitle: "Neonatal LLM Assistant",
    description: "RAG system over hospital policies with role-based access and audit-friendly logging for healthcare compliance.",
    tags: ["LangChain", "Pinecone", "Healthcare"],
    metric: "p95 ~820ms",
  },
  {
    slug: "ai-voice-agent",
    title: "Voice Agent",
    subtitle: "Shining Image",
    description: "Autonomous phone agent handling inbound calls, booking jobs, and seamlessly handing off to humans.",
    tags: ["Twilio", "Whisper", "Real-time"],
    metric: "68% containment",
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Reconciler",
    subtitle: "Stripe → QuickBooks",
    description: "Automated financial reconciliation aggregating fees per payout for clean accounting.",
    tags: ["Stripe", "QuickBooks", "Automation"],
    metric: "$0 variance",
  },
  {
    slug: "9vectors",
    title: "9Vectors.ai",
    subtitle: "Strategic Assessment Platform",
    description: "AI-powered strategic assessment platform helping enterprises make data-driven decisions.",
    tags: ["AI Platform", "Enterprise", "Co-Founder"],
    metric: "$150M+ val",
    external: "https://9vectors.ai",
  },
  {
    slug: "measurement13",
    title: "Measurement13.ai",
    subtitle: "AI-Powered Analytics",
    description: "Advanced measurement and analytics platform leveraging AI to transform raw data into actionable insights.",
    tags: ["Analytics", "AI", "SaaS"],
    metric: "Enterprise",
    external: "https://measurement13.ai",
  },
  {
    slug: "snapshot9",
    title: "Snapshot9.ai",
    subtitle: "Business Transformation",
    description: "Comprehensive business transformation platform that captures, analyzes, and optimizes organizational processes.",
    tags: ["Enterprise", "Transformation", "AI"],
    metric: "Platform",
    external: "https://snapshot9.ai",
  },
  {
    slug: "thegreymatter",
    title: "TheGreyMatter.ai",
    subtitle: "Business Intelligence",
    description: "AI-driven business intelligence platform that turns complex data into clear, actionable insights.",
    tags: ["BI", "Analytics", "Decision Support"],
    metric: "Leadership",
    external: "https://thegreymatter.ai",
  },
  {
    slug: "budgetcopilot",
    title: "BudgetCopilot",
    subtitle: "AI Financial Agent",
    description: "Personal AI financial agent helping you manage budgets, track debts, and build wealth.",
    tags: ["AI Agent", "FinTech", "Personal Finance"],
    metric: "Consumer",
    external: "https://budgetcopilot.app",
  },
  {
    slug: "waldoscodelab",
    title: "Waldo's Code Lab",
    subtitle: "Free Coding School",
    description: "Hands-on, free coding school helping teens and kids learn programming step by step.",
    tags: ["Education", "Free", "Kids & Teens"],
    metric: "Free",
    external: "https://waldoscodelab.com",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <GridBackground />
      <FloatingNodes />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for projects
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-slate-900 dark:text-white">Hey, I'm </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Waldo
              </span>
            </motion.h1>

            <motion.div
              className="mt-4 text-lg sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <RotatingText />
            </motion.div>

            <motion.p
              className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Full-Stack & Applied AI Engineer specializing in LLMs, autonomous agents,
              and voice systems. Based in Panama, building globally.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

            </motion.div>

            <motion.div
              className="mt-6 flex justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href="https://github.com/bugfreewaldo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/osvaldorestrepo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:me@osvaldorestrepo.dev"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/waldos.code.lab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Profile Picture */}
          <motion.div
            className="flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Gradient glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 scale-110" />

              {/* Rotating gradient border */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
                <div className="p-1 rounded-full bg-white dark:bg-slate-950">
                  <Image
                    src="/images/waldoprofilepic.png"
                    alt="Waldo - AI Engineer"
                    width={280}
                    height={280}
                    className="rounded-full object-cover w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
                    priority
                  />
                </div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-2 -right-2 p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className="w-5 h-5 text-indigo-500" />
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Cpu className="w-5 h-5 text-cyan-500" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-4 p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Zap className="w-5 h-5 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              What I Build
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              AI systems that integrate with real operations, not just demos
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cap.gradient} mb-4`}>
                  <cap.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-16 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Featured Work
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Production systems, real metrics
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => {
              const isExternal = "external" in project && project.external;
              const CardWrapper = isExternal ? "a" : Link;
              const cardProps = isExternal
                ? { href: project.external, target: "_blank", rel: "noopener noreferrer" }
                : { href: `/projects/${project.slug}` };

              return (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.1 }}
                >
                  <CardWrapper
                    {...cardProps}
                    className="group block h-full p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-slate-500">{project.subtitle}</p>
                      </div>
                      <span className="px-2 py-1 text-xs font-mono bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded whitespace-nowrap">
                        {project.metric}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isExternal && (
                      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center gap-1 text-xs text-indigo-600 dark:text-indigo-400">
                        <ArrowRight className="w-3 h-3" />
                        Visit site
                      </div>
                    )}
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>

          <Link
            href="/projects"
            className="sm:hidden mt-8 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Let's Build Something
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Looking for an AI engineer who ships production systems? Let's talk.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/Osvaldo_Restrepo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Osvaldo Restrepo</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse" />
            Built with AI, obviously. An AI engineer not using AI? That'd be weird.
          </p>
        </div>
      </footer>
    </main>
  );
}
