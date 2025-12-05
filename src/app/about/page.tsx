"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, ChevronDown, MapPin, Calendar, Bot, Code, Mic, Wrench, Globe, Star } from "lucide-react";
import Testimonials from "../components/Testimonials";

// ---------- Experience ----------
const experience = [
  {
    company: "9Vectors",
    role: "Lead AI Engineer",
    period: "2024 - Present",
    location: "Remote",
    type: "current",
    description: "Leading AI platform development and engineering team operations.",
    highlights: [
      "Creating, maintaining, and debugging 4 AI platforms end-to-end",
      "Architecting RAG systems with LangChain, Pinecone, and custom embeddings",
      "Building autonomous agents with tool-calling and multi-step reasoning",
      "Implementing voice AI systems with real-time conversation capabilities",
      "Establishing MLOps practices: CI/CD, monitoring, and evaluation pipelines",
    ],
    skills: ["LangChain", "Pinecone", "OpenAI", "Whisper", "Python", "TypeScript"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Artificial Intelligence Engineer",
    period: "Jul 2025 - Present",
    location: "Austin, TX (Remote)",
    type: "current",
    description: "Designing and shipping production AI systems including voice agents and RAG stacks.",
    highlights: [
      "Designed & shipped voice agents (Twilio/Whisper/LLM) with transcripts → CRM and safe human handoff",
      "Built RAG stacks (Pinecone/Weaviate) with eval harness (retrieval@k, correctness) & observability",
      "Improved p95 latency via streaming paths, prompt minimization, and caching",
    ],
    skills: ["Python", "Node/TS", "React", "LangChain", "Twilio", "Pinecone", "Weaviate", "AWS"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Full-Stack Engineer (AI)",
    period: "Jan 2020 - Jul 2025",
    location: "Austin, TX (Remote)",
    description: "Built and maintained full-stack applications with AI integrations.",
    highlights: [
      "Automated scheduling/billing with Node.js/NestJS/React; integrated Stripe, QuickBooks, and Twilio",
      "Reduced billing time ~70% and increased conversion ~40% leveraging AI assistants and funnels",
      "Implemented CI/CD (GitHub Actions), automated tests (Jest, Supertest) for production reliability",
    ],
    skills: ["TypeScript", "NestJS", "React", "Stripe", "QuickBooks API", "AWS"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Chief Information Officer",
    period: "Jan 2019 - Dec 2019",
    location: "Austin, TX",
    description: "Led digital transformation initiatives across the organization.",
    highlights: [
      "Led digital transformation: FSM, QuickBooks integration, and modern payments (Square/PayPal)",
      "Drove collaboration rollout (Microsoft 365, Google Workspace) and basic security baselines",
    ],
    skills: ["Digital Transformation", "QuickBooks", "Microsoft 365", "Google Workspace"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "IT Department Manager",
    period: "Jan 2018 - Dec 2018",
    location: "Austin, TX",
    description: "Managed IT operations and infrastructure.",
    highlights: [
      "Ran IT operations, asset lifecycle, and internal infrastructure improvements",
    ],
    skills: ["IT Operations", "Infrastructure", "Asset Management"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Junior Web Designer",
    period: "Aug 2017 - Feb 2018",
    location: "Austin, TX",
    description: "Maintained web presence and digital assets.",
    highlights: [
      "Maintained WordPress site, DNS, and page performance & SEO basics",
    ],
    skills: ["WordPress", "DNS", "SEO", "Web Design"],
  },
  {
    company: "Hyperware Solutions",
    role: "Technical Support Executive",
    period: "Jan 2015 - Jul 2017",
    location: "David, Chiriquí, Panama",
    description: "Provided technical support and client services.",
    highlights: [
      "Provided repair/networking/security support and client troubleshooting",
    ],
    skills: ["Technical Support", "Networking", "Security"],
  },
];

// ---------- Education ----------
const education = [
  {
    school: "Universidad Tecnológica de Panamá",
    degree: "Ph.D. in Software Engineering (in progress)",
    period: "Sep 2025 - Mar 2027",
    location: "Panamá, Panama",
    notes: [
      "Focus: LLMs, Software Engineering, AI Ethics",
    ],
  },
  {
    school: "Universidad Tecnológica de Panamá",
    degree: "Master's in Software Engineering",
    period: "2023 - 2025",
    location: "Panamá, Panama",
    notes: [
      "Focus: requirements, architecture, test automation, DevOps for AI-enabled systems",
      "Capstone: RAG evaluation harness (retrieval@k, factuality checks, regression suite)",
    ],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "Master's in Higher Education",
    period: "2022 - 2024",
    location: "Panamá, Panama",
    notes: [
      "Instructional design for technical topics; AI literacy workshops for engineers",
      "Built assessments emphasizing practical projects and measurable outcomes",
    ],
  },
  {
    school: "University of the People",
    degree: "B.S. in Computer Science",
    period: "2019 - 2024",
    location: "Pasadena, USA (Remote)",
    notes: [
      "Advanced topics: algorithms, distributed systems, IR/NLP (LLMs & evaluation)",
      "Team project: fault-tolerant event-driven app with CI/CD and integration tests",
    ],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "B.Eng. in Computer Engineering",
    period: "2015 - 2020",
    location: "Panamá, Panama",
    highlight: "Cum Laude",
    notes: [
      "Core CS: data structures, OS, networks, DBs; senior project with real users",
      "Full-stack app (React/Node/Postgres) with auth and automated tests",
    ],
  },
  {
    school: "Institute of Higher Education for Advanced Technical Training",
    degree: "Associate's in Scientific Investigation",
    period: "2020 - 2021",
    location: "Panamá, Panama",
    notes: [
      "Methods: experimental design, statistics, literature review; research ethics",
      "Wrote research briefs and replicable protocols for small-n studies",
    ],
  },
  {
    school: "Institute of Higher Education for Advanced Technical Training",
    degree: "Associate's in Pedagogy",
    period: "2020 - 2021",
    location: "Panamá, Panama",
    notes: [
      "Adult learning principles, feedback loops, and practical assessment design",
      "Built short curricula with clear rubrics and skill-based grading",
    ],
  },
];

const skills = [
  { icon: Bot, label: "LLMs & RAG", items: ["GPT-4/Claude", "LangChain", "Pinecone", "Weaviate", "Embeddings"] },
  { icon: Code, label: "Full-Stack", items: ["TypeScript", "React", "Next.js", "NestJS", "Python", "Flask"] },
  { icon: Mic, label: "Voice AI", items: ["Whisper", "ElevenLabs", "Twilio", "Real-time STT/TTS"] },
  { icon: Wrench, label: "Infrastructure", items: ["AWS", "Azure", "Docker", "GitHub Actions", "CI/CD"] },
];

// ---------- Languages ----------
const languages = [
  { name: "English", level: "C2 (Fluent)" },
  { name: "Spanish", level: "Native" },
  { name: "Italian", level: "Conversational" },
];

// ---------- Highlights ----------
const highlights = [
  "Voice agent containment up to ~68% with safe handoff & transcripts to CRM",
  "Stripe→QuickBooks payout fee reconciliation; month-end variance $0 across tested months",
  "RAG evaluation harness with retrieval@k/factuality checks and regression suites",
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
function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
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
              {"highlight" in edu && edu.highlight && (
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
              AI & full-stack engineer building reliable LLM systems, voice agents, and automations that ship to production.
              Specialized in RAG, tool/agent orchestration, and cloud microservices. Strong focus on latency, quality evals, and cost control.
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
