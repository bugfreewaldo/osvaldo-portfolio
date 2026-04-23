"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Brain, Cpu, MessageSquare, Zap, ArrowRight, Github, Linkedin, Mail, Instagram, Newspaper, Database, Globe, Shield, BarChart3, Code2, Workflow } from "lucide-react";

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
    <div className="relative h-14 sm:h-8 overflow-hidden">
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

// Animated background with floating gradient orbs and grid
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// Constellation particle network
const particles = [
  { id: 0, x: 12, y: 18, size: 3 },
  { id: 1, x: 88, y: 12, size: 2 },
  { id: 2, x: 22, y: 72, size: 2.5 },
  { id: 3, x: 78, y: 78, size: 3 },
  { id: 4, x: 50, y: 35, size: 2 },
  { id: 5, x: 8, y: 48, size: 2.5 },
  { id: 6, x: 92, y: 45, size: 2 },
  { id: 7, x: 35, y: 90, size: 3 },
  { id: 8, x: 65, y: 8, size: 2 },
  { id: 9, x: 45, y: 60, size: 2.5 },
];

const connections = [
  [0, 4], [1, 4], [2, 5], [3, 6], [4, 9],
  [5, 0], [6, 1], [7, 2], [8, 1], [9, 3],
];

function ParticleNetwork() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(([a, b], i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${particles[a].x}%`}
            y1={`${particles[a].y}%`}
            x2={`${particles[b].x}%`}
            y2={`${particles[b].y}%`}
            stroke="currentColor"
            className="text-indigo-400/10 dark:text-indigo-400/[0.07]"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1 + i * 0.15, ease: "easeOut" }}
          />
        ))}
      </svg>
      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-indigo-400/30 dark:bg-indigo-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            scale: { duration: 3 + p.id * 0.3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 3 + p.id * 0.3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}

// Parallax mouse-tracking wrapper for the hero profile
function ParallaxProfile({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / rect.width);
      mouseY.set((e.clientY - centerY) / rect.height);
    }
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

// Stagger container variants
const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const capabilities = [
  {
    icon: Brain,
    title: "LLMs & RAG",
    description: "Retrieval-augmented generation, prompt engineering, fine-tuning, and eval pipelines for production LLM apps",
    gradient: "from-purple-500 to-indigo-500",
    tech: ["LangChain", "OpenAI", "Pinecone", "ChromaDB"],
  },
  {
    icon: MessageSquare,
    title: "AI Agents",
    description: "Autonomous agents with tool-calling, memory, multi-step reasoning, and human-in-the-loop handoffs",
    gradient: "from-indigo-500 to-cyan-500",
    tech: ["Claude", "CrewAI", "Function Calling", "MCP"],
  },
  {
    icon: Cpu,
    title: "Voice AI",
    description: "End-to-end voice systems — STT, TTS, real-time conversation, phone agents, and IVR replacement",
    gradient: "from-cyan-500 to-emerald-500",
    tech: ["Twilio", "Whisper", "ElevenLabs", "WebRTC"],
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Intelligent workflow automation connecting AI to CRMs, ERPs, billing, and business operations",
    gradient: "from-emerald-500 to-yellow-500",
    tech: ["Stripe", "QuickBooks", "Zapier", "n8n"],
  },
  {
    icon: Globe,
    title: "Full-Stack Apps",
    description: "Production web apps with modern frameworks, real-time features, auth, payments, and deployment",
    gradient: "from-blue-500 to-indigo-500",
    tech: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    icon: Database,
    title: "Data & ML Pipelines",
    description: "ETL pipelines, vector databases, embedding workflows, and data infrastructure for AI-first products",
    gradient: "from-teal-500 to-cyan-500",
    tech: ["PostgreSQL", "Redis", "Python", "Pandas"],
  },
  {
    icon: Shield,
    title: "AI Safety & Evals",
    description: "Guardrails, content filtering, hallucination detection, and systematic evaluation frameworks",
    gradient: "from-rose-500 to-pink-500",
    tech: ["Evals", "Guardrails", "RLHF", "Red-teaming"],
  },
  {
    icon: Workflow,
    title: "API & Integrations",
    description: "RESTful APIs, webhooks, third-party integrations, and microservice architectures that scale",
    gradient: "from-amber-500 to-orange-500",
    tech: ["REST", "GraphQL", "WebSockets", "Docker"],
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
    subtitle: "Leadership Assessment",
    description: "Leadership assessment across 13 core attributes — 360° feedback, 9-Box positioning, and team dynamics analytics for talent reviews and succession planning.",
    tags: ["Leadership", "360° Feedback", "Talent"],
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
      <ParticleNetwork />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={heroItem}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Available only upon request
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              variants={heroItem}
            >
              <span className="text-slate-900 dark:text-white">Hey, I&apos;m </span>
              <motion.span
                className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent bg-[size:200%_auto]"
                animate={{ backgroundPosition: ["0% center", "200% center"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                Waldo
              </motion.span>
            </motion.h1>

            <motion.div
              className="mt-4 text-lg sm:text-xl"
              variants={heroItem}
            >
              <RotatingText />
            </motion.div>

            <motion.p
              className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl"
              variants={heroItem}
            >
              Full-Stack & Applied AI Engineer specializing in LLMs, autonomous agents,
              and voice systems.{" "}
              <Link href="/ai-engineer-panama" className="underline decoration-indigo-500/30 hover:decoration-indigo-500 transition-colors">
                Based in Panama
              </Link>
              , building globally.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
              variants={heroItem}
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              className="mt-6 flex justify-center md:justify-start gap-2"
              variants={heroItem}
            >
              {[
                { href: "https://github.com/bugfreewaldo", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/osvaldorestrepo", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:me@osvaldorestrepo.dev", icon: Mail, label: "Email" },
                { href: "https://www.instagram.com/waldos.code.lab/", icon: Instagram, label: "Instagram" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.08 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            className="flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <ParallaxProfile>
              <div className="relative">
                {/* Animated gradient glow behind image */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur-2xl scale-110"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Spinning ring */}
                <motion.div
                  className="absolute -inset-3 rounded-full border border-dashed border-indigo-300/20 dark:border-indigo-500/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />

                {/* Gradient border */}
                <div className="relative p-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
                  <div className="p-1 rounded-full bg-white dark:bg-slate-950">
                    <div className="relative rounded-full overflow-hidden w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 opacity-60">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]" />
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyan-500/5 rounded-full blur-xl animate-pulse" />
                      </div>
                      <Image
                        src="/images/waldoprofilepic.png"
                        alt="Waldo - AI Engineer"
                        width={280}
                        height={280}
                        className="relative z-10 rounded-full object-cover w-full h-full"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Orbital floating tech badges */}
                <motion.div
                  className="absolute -top-2 -right-2 p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 0.8, duration: 0.4 },
                    scale: { delay: 0.8, duration: 0.4, type: "spring" },
                    y: { delay: 1.2, duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Brain className="w-5 h-5 text-indigo-500" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2 p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 1.0, duration: 0.4 },
                    scale: { delay: 1.0, duration: 0.4, type: "spring" },
                    y: { delay: 1.4, duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Cpu className="w-5 h-5 text-cyan-500" />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-4 p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 1.2, duration: 0.4 },
                    scale: { delay: 1.2, duration: 0.4, type: "spring" },
                    y: { delay: 1.6, duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Zap className="w-5 h-5 text-yellow-500" />
                </motion.div>
                <motion.div
                  className="absolute top-1/3 -left-4 p-2 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 1.4, duration: 0.4 },
                    scale: { delay: 1.4, duration: 0.4, type: "spring" },
                    y: { delay: 1.8, duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                </motion.div>
              </div>
            </ParallaxProfile>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
              <Code2 className="w-4 h-4" />
              Full-Stack AI Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              What I Build
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              End-to-end AI systems that integrate with real operations — from prototype to production, not just demos
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="group relative p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Hover gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cap.gradient} mb-4 shadow-lg shadow-indigo-500/10`}>
                  <cap.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cap.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { value: "10+", label: "Years Engineering" },
              { value: "20+", label: "Production Systems" },
              { value: "20+", label: "AI Products Shipped" },
              { value: "10+", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-white/30 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured In / Press */}
      <section className="relative py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Featured In
            </h2>
          </motion.div>

          <motion.a
            href="https://usanews.com/newsroom/how-the-mila-ai-platform-began-with-one-family-s-story"
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">USA News</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-500">Feature Article</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  How the MILA AI Platform Began with One Family&apos;s Story
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  The story behind building an AI assistant for NICU families, turning personal experience into technology that helps parents navigate one of the most challenging times of their lives.
                </p>
                <div className="mt-4 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                  Read the full article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.a>
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
            Let&apos;s Build Something
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Looking for an AI engineer who ships production systems? Let&apos;s talk.
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
            Built with AI, obviously. An AI engineer not using AI? That&apos;d be weird.
          </p>
        </div>
      </footer>
    </main>
  );
}
