"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, ChevronDown, MapPin, Calendar, Bot, Code, Mic, Wrench, Globe, Star, Award, Zap } from "lucide-react";
import Testimonials from "../components/Testimonials";

// ---------- Experience ----------
const experience = [
  {
    company: "TheGreyMatterAI",
    role: "Artificial Intelligence Engineer",
    period: "Nov 2025 - Present",
    location: "Orlando, FL (Remote)",
    type: "current",
    description: "Architect and build core systems across a multi-product AI SaaS ecosystem for leadership assessment, organizational strategy, and decision intelligence.",
    highlights: [
      "Architect and develop GreyMatter 2.0, the central AI brain & identity layer powering Snapshot9, Measurement13, and 9Vectors",
      "Design and implement token-based federation, multi-tenant auth, and cross-product entitlements",
      "Build Model Context Protocol (MCP) services enabling safe, real-time AI tool usage",
      "Develop cloud-native backend services using FastAPI, Azure, Cosmos DB, Redis, Docker, and GitHub Actions",
      "Integrate LLMs (Claude / AI agents) with guardrails, observability, and production reliability",
      "Implement background workers, caching, polling/WebSocket strategies, and resilience patterns",
      "Collaborate with CTO and product leadership on architecture, data models, and scalability",
    ],
    skills: ["FastAPI", "Azure", "Cosmos DB", "Redis", "Docker", "Claude", "MCP", "Python"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Artificial Intelligence Engineer",
    period: "Nov 2021 - Nov 2025",
    location: "Austin, TX (Remote)",
    description: "Design and implement AI-driven solutions focused on real-world LLM applications, voice agents, and AI workflows.",
    highlights: [
      "Built AI-powered voice assistants for real-time and async call handling using Twilio, Whisper, GPT-4, ElevenLabs, and custom LLM pipelines",
      "Delivered end-to-end systems with LangChain, Python, Node.js, and React; integrated Pinecone/Weaviate for Retrieval-Augmented Generation (RAG)",
      "Engineered multi-intent call agents (scheduling, lead capture, Q&A, fallback recovery) aligned with production best practices",
      "Automated customer workflows and backend processes using secure, scalable LLM-powered APIs",
      "Rapid prototyping + iteration to improve UX and reduce latency in AI-driven interactions",
    ],
    skills: ["Python", "Node.js", "React", "LangChain", "Twilio", "Whisper", "GPT-4", "ElevenLabs", "Pinecone", "Weaviate"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Full Stack Software Engineer",
    period: "Jan 2017 - Nov 2021",
    location: "Austin, TX (Remote)",
    description: "Designed and maintained end-to-end web applications; integrated payments, accounting, and communications tooling.",
    highlights: [
      "Built and maintained full-stack apps with Node.js/Express and React/Next.js with an emphasis on scalability and performance",
      "Integrated QuickBooks, Stripe, and Twilio to automate invoicing, payment tracking, and communications",
      "Developed reusable front-end components with Redux and TypeScript to improve maintainability",
      "Deployed on AWS and Vercel with CI/CD and monitoring; managed multiple environments",
      "Implemented authentication, validation, and security layers following OWASP best practices",
      "Automated workflows between Fieldd, QuickBooks, and Stripe, reducing manual accounting work by 70%+",
      "Conducted code reviews and performance tuning; prototyped internal AI tools and chatbots",
    ],
    skills: ["TypeScript", "Node.js", "Express", "React", "Next.js", "Redux", "Stripe", "QuickBooks API", "AWS", "Vercel", "Twilio"],
  },
  {
    company: "Hyperware Solutions",
    role: "Technical Support Executive",
    period: "Jan 2015 - Dec 2016",
    location: "Chiriquí, Panama",
    description: "Provided end-to-end support across hardware, software, and networking systems.",
    highlights: [
      "Performed diagnostics, malware removal, and data recovery to minimize downtime",
      "Installed and configured LAN, Wi-Fi, and VoIP systems to improve connectivity",
      "Delivered remote/on-site support and produced documentation + escalation reports",
      "Supported IT rollouts including server migrations and device lifecycle management",
    ],
    skills: ["Technical Support", "Networking", "Hardware Diagnostics", "VoIP", "Documentation"],
  },
];

// ---------- Education ----------
interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  notes: string[];
  highlight?: string;
}

const education: Education[] = [
  {
    school: "Technological University of Panama",
    degree: "Ph.D. in Artificial Intelligence with focus on Medical Research (in progress)",
    period: "2024 - Expected 2027",
    location: "Panama City, Panama",
    notes: [
      "Research focus: AI applications in medical diagnostics and healthcare",
      "Developing AI frameworks for clinical decision support systems",
    ],
  },
  {
    school: "Technological University of Monterrey",
    degree: "Master's in Artificial Intelligence (in progress)",
    period: "2025 - Expected 2027",
    location: "Monterrey, Mexico (Online)",
    notes: [
      "Comprehensive AI curriculum: machine learning, deep learning, NLP, and computer vision",
      "Applied projects in production ML systems and model deployment",
    ],
  },
  {
    school: "Technological University of Panama",
    degree: "Master's in Computer Software Engineering",
    period: "2023 - 2025",
    location: "Panama City, Panama",
    notes: [
      "Focus: software architecture, requirements engineering, and DevOps practices",
      "Advanced coursework in software quality and system design",
    ],
  },
  {
    school: "Latin University of Panama",
    degree: "Master's in Higher Education",
    period: "2022 - 2024",
    location: "Panama City, Panama",
    notes: [
      "Specialized training for university-level teaching and curriculum development",
      "Focus: instructional design for technical topics and assessment methodologies",
    ],
  },
  {
    school: "University of the People",
    degree: "Bachelor of Science in Computer Science",
    period: "2019 - 2024",
    location: "Pasadena, CA (Online)",
    notes: [
      "Core CS curriculum: algorithms, data structures, and software engineering",
      "Focus on distributed systems and information retrieval",
    ],
  },
  {
    school: "Institute of Higher Education for Advanced Technical Training",
    degree: "Associate's in AI with focus on Scientific Research",
    period: "2020 - 2021",
    location: "Panama City, Panama",
    notes: [
      "Research methodology: experimental design and statistical analysis",
      "AI fundamentals and scientific investigation protocols",
    ],
  },
  {
    school: "Institute of Higher Education for Advanced Technical Training",
    degree: "Associate's in Pedagogy",
    period: "2020 - 2021",
    location: "Panama City, Panama",
    notes: [
      "Educational theory and instructional methodologies",
      "Foundation for technical teaching and curriculum development",
    ],
  },
  {
    school: "Latin University of Panama",
    degree: "Bachelor of Science in Computer Science",
    period: "2015 - 2020",
    location: "Panama City, Panama",
    notes: [
      "Core CS: data structures, operating systems, networks, and databases",
      "Senior project: full-stack application with authentication and automated tests",
    ],
  },
];

const skills = [
  { icon: Bot, label: "LLM Agents", items: ["Claude", "GPT-4", "LangChain", "MCP", "Guardrails"] },
  { icon: Code, label: "Full-Stack", items: ["TypeScript", "React", "Next.js", "Python", "FastAPI"] },
  { icon: Mic, label: "Voice AI", items: ["Whisper", "ElevenLabs", "Twilio", "Real-time STT/TTS"] },
  { icon: Wrench, label: "Cloud-Native", items: ["Azure", "AWS", "Docker", "Cosmos DB", "Redis"] },
];

// ---------- Certifications ----------
const certifications = [
  {
    name: "Professional Certificate in Python for Data Science and Machine Learning",
    issuer: "Harvard University",
  },
];

// ---------- AI Tools & Leverage ----------
const aiTools = [
  { name: "Claude Code", description: "AI-powered CLI for autonomous coding tasks" },
  { name: "Cursor", description: "AI-first code editor with deep codebase understanding" },
  { name: "GitHub Copilot", description: "AI pair programmer for inline suggestions" },
  { name: "ChatGPT / Codex", description: "OpenAI models for code generation & problem-solving" },
  { name: "v0 by Vercel", description: "AI-powered UI generation from prompts" },
  { name: "Ollama", description: "Local LLM inference for private, offline AI workflows" },
  { name: "Aider", description: "Terminal-based AI pair programming" },
  { name: "Continue", description: "Open-source AI coding assistant for any IDE" },
];

// ---------- Languages ----------
const languages = [
  { name: "English", level: "Native or Bilingual" },
  { name: "Spanish", level: "Native or Bilingual" },
];

// ---------- Highlights ----------
const highlights = [
  "Architecting GreyMatter 2.0 AI brain & identity layer powering multiple SaaS products",
  "Built AI-powered voice assistants handling real-time calls with Twilio, Whisper, GPT-4, and ElevenLabs",
  "Automated workflows reducing manual accounting work by 70%+ through QuickBooks/Stripe integration",
];

// Animated background
function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}

// Expandable education card
function EducationCard({ edu, index }: { edu: Education; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <motion.div
        className={`p-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 cursor-pointer transition-all duration-300 ${
          isExpanded ? "border-indigo-500/50 shadow-lg shadow-indigo-500/5" : "hover:border-indigo-500/30"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {edu.degree}
              </h3>
              {edu.highlight && (
                <span className="px-2 py-0.5 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full">
                  {edu.highlight}
                </span>
              )}
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{edu.school}</p>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {edu.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {edu.location}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
          >
            <ChevronDown className="w-4 h-4 text-slate-500" />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {edu.notes?.length > 0 && (
            <ul className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2">
              {edu.notes.map((note, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                  {note}
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Expandable experience card
function ExperienceCard({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index < 2); // First two expanded by default

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
    >
      <motion.div
        className={`p-6 rounded-2xl backdrop-blur-sm cursor-pointer transition-all duration-300 ${
          "type" in exp && exp.type === "current"
            ? "bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border border-indigo-500/20"
            : "bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30"
        } ${isExpanded ? "shadow-lg shadow-indigo-500/5" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h3>
              {"type" in exp && exp.type === "current" && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.company}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end gap-1 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">{exp.description}</p>

          <ul className="space-y-2 mb-4">
            {exp.highlights.map((highlight, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                transition={{ delay: j * 0.05 }}
                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                {highlight}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <GridBackground />

      {/* Hero */}
      <section className="relative pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span className="text-slate-900 dark:text-white">About </span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Full Stack Engineer passionate about merging AI and software engineering to build smarter, faster, and more scalable systems.
              Specialized in developing full-stack solutions that integrate automation, cloud architecture, and intelligent workflows.
              Currently engaged as a Full Stack AI Engineer at TheGreyMatter.ai, contributing to AI-assisted application development and modern web systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="relative py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                    <skill.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{skill.label}</h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Highlights */}
      <section className="relative py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border border-yellow-500/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Selected Highlights</h2>
            </div>
            <ul className="space-y-3">
              {highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                >
                  <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* AI Tools & Leverage */}
      <section className="relative py-8 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">AI-Powered Development</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              I leverage cutting-edge AI tools to accelerate development, improve code quality, and ship faster. These tools are force multipliers that let me focus on architecture and problem-solving.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-violet-500/30 transition-colors"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">{tool.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="relative py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
              <p className="text-sm text-slate-500 mt-1">Click to expand/collapse</p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {experience.map((exp, i) => (
              <ExperienceCard key={exp.company + exp.role + exp.period} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="relative py-10 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
              <p className="text-sm text-slate-500 mt-1">Click to expand details</p>
            </div>
          </motion.div>

          <div className="space-y-4">
            {education.map((edu, i) => (
              <EducationCard key={edu.school + edu.degree} edu={edu} index={i} />
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mt-10 mb-4"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h2>
          </motion.div>

          <div className="space-y-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">{cert.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="relative py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Languages</h2>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            {languages.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-5 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800"
              >
                <span className="font-semibold text-slate-900 dark:text-white">{lang.name}</span>
                <span className="text-slate-500 ml-2">— {lang.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-10 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
