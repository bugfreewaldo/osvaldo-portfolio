"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, ChevronDown, MapPin, Calendar, Bot, Code, Mic, Wrench, Globe, Star } from "lucide-react";
import Testimonials from "../components/Testimonials";

// ---------- Experience ----------
const experience = [
  {
    company: "9Vectors",
    role: "Senior Full Stack AI & Software Engineer",
    period: "Nov 2025 - Present",
    location: "Remote",
    type: "current",
    description: "Building and scaling AI-powered assessment platforms that help organizations evaluate talent through intelligent, adaptive testing. Responsible for full-stack development across 4 production platforms, from LLM orchestration to frontend interfaces.",
    highlights: [
      "Architecting and maintaining 4 AI assessment platforms serving thousands of users with 99.9% uptime",
      "Designing RAG pipelines with LangChain, Pinecone, and custom embedding models for contextual question generation",
      "Building autonomous evaluation agents with multi-step reasoning and tool-calling for adaptive assessments",
      "Implementing real-time voice AI systems for interview simulations with sub-200ms response latency",
      "Establishing MLOps practices including CI/CD pipelines, model monitoring, A/B testing, and evaluation frameworks",
      "Collaborating directly with founders on product strategy and technical roadmap decisions",
    ],
    skills: ["LangChain", "Pinecone", "OpenAI", "Whisper", "Python", "TypeScript", "Next.js", "PostgreSQL"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Senior Full Stack AI & Software Engineer",
    period: "Jul 2025 - Nov 2025",
    location: "Austin, TX (Remote)",
    description: "Led the AI engineering efforts for a multi-location service business, designing and deploying production AI systems that automated customer interactions and streamlined operations. Focused on voice agents, intelligent document retrieval, and system performance optimization.",
    highlights: [
      "Designed and shipped production voice agents using Twilio, Whisper, and GPT-4, handling 200+ daily customer calls with automated transcription to CRM",
      "Built enterprise RAG stacks with Pinecone and Weaviate, including custom evaluation harnesses measuring retrieval@k and answer correctness",
      "Reduced p95 API latency by 40% through streaming response paths, prompt optimization, and intelligent caching strategies",
      "Implemented safe human handoff protocols ensuring seamless escalation from AI to live agents when needed",
      "Created observability dashboards tracking model performance, cost per interaction, and customer satisfaction metrics",
    ],
    skills: ["Python", "Node/TS", "React", "LangChain", "Twilio", "Pinecone", "Weaviate", "AWS"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Full Stack Software Engineer",
    period: "Jan 2020 - Jul 2025",
    location: "Austin, TX (Remote)",
    description: "Sole developer responsible for building and maintaining the company's entire technology stack. Developed custom scheduling, billing, and CRM systems that transformed manual processes into automated workflows, directly contributing to 3x revenue growth over 5 years.",
    highlights: [
      "Built a custom scheduling and dispatch system from scratch using Node.js, NestJS, and React, serving 50+ field technicians",
      "Integrated Stripe payment processing and QuickBooks accounting, reducing monthly billing time from 40 hours to 12 hours (~70% reduction)",
      "Developed AI-powered sales funnels and chat assistants that increased lead conversion rates by approximately 40%",
      "Implemented automated SMS/email reminders via Twilio, reducing no-show rates by 60%",
      "Established CI/CD pipelines with GitHub Actions and comprehensive test suites (Jest, Supertest) achieving 85% code coverage",
      "Managed AWS infrastructure including EC2, RDS, S3, and CloudFront for production deployments",
    ],
    skills: ["TypeScript", "NestJS", "React", "Stripe", "QuickBooks API", "AWS", "PostgreSQL", "Twilio"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Chief Technology Officer",
    period: "Jan 2019 - Dec 2019",
    location: "Austin, TX",
    description: "Promoted to lead the company's digital transformation from paper-based operations to modern cloud systems. Evaluated and implemented technology solutions across all departments while establishing IT governance and security practices.",
    highlights: [
      "Led complete digital transformation: migrated from paper to digital field service management (FSM) system",
      "Integrated QuickBooks Online with custom workflows, eliminating double-entry and reducing accounting errors by 90%",
      "Implemented modern payment solutions (Square, PayPal) increasing payment collection speed by 50%",
      "Rolled out Microsoft 365 and Google Workspace for 60+ employees with training programs",
      "Established security baselines including MFA, endpoint protection, and backup procedures",
      "Managed $150K annual technology budget and vendor relationships",
    ],
    skills: ["Digital Transformation", "QuickBooks", "Microsoft 365", "Google Workspace", "IT Strategy", "Vendor Management"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "IT Department Manager",
    period: "Jan 2018 - Dec 2018",
    location: "Austin, TX",
    description: "Managed all IT operations for a growing service company with 50+ employees across multiple locations. Oversaw hardware, software, networking, and support while building the foundation for future digital initiatives.",
    highlights: [
      "Managed IT operations including helpdesk support, hardware procurement, and software licensing for 50+ users",
      "Implemented asset lifecycle management system, reducing equipment costs by 25% through better tracking",
      "Upgraded network infrastructure across 3 office locations, improving reliability and speed",
      "Created IT documentation and standard operating procedures for common issues",
      "Negotiated vendor contracts saving $20K annually on software and services",
    ],
    skills: ["IT Operations", "Infrastructure", "Asset Management", "Networking", "Vendor Negotiation"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Junior Web Designer",
    period: "Aug 2017 - Feb 2018",
    location: "Austin, TX",
    description: "First role in the United States after relocating from Panama. Maintained the company's web presence and began learning the business operations that would later inform my development of custom internal systems.",
    highlights: [
      "Maintained and updated WordPress website, improving page load times by 40% through optimization",
      "Managed DNS, SSL certificates, and domain registrations across multiple properties",
      "Implemented basic SEO improvements that increased organic search traffic by 35%",
      "Created landing pages for marketing campaigns with A/B testing",
      "Learned the service business domain, identifying pain points that I later solved through custom software",
    ],
    skills: ["WordPress", "DNS", "SEO", "Web Design", "HTML/CSS", "Google Analytics"],
  },
  {
    company: "Hyperware Solutions",
    role: "Technical Support Executive",
    period: "Jan 2015 - Jul 2017",
    location: "David, Chiriquí, Panama",
    description: "Started my technology career at a local IT services company, providing technical support to small and medium businesses. Gained hands-on experience with hardware, networking, and customer service that built the foundation for my engineering career.",
    highlights: [
      "Provided on-site and remote technical support for 100+ SMB clients across the region",
      "Diagnosed and repaired hardware issues including desktops, laptops, and servers",
      "Configured and maintained network infrastructure: routers, switches, firewalls, and VPNs",
      "Implemented security solutions including antivirus, backup systems, and access controls",
      "Trained end-users on software applications and security best practices",
      "Maintained 95% customer satisfaction rating through responsive and thorough support",
    ],
    skills: ["Technical Support", "Networking", "Security", "Hardware Repair", "Customer Service", "Windows Server"],
  },
];

// ---------- Education ----------
const education = [
  {
    school: "Harvard University",
    degree: "Professional Certificate in Artificial Intelligence with Python (in progress)",
    period: "2026 - Expected 2027",
    location: "Cambridge, MA (Online)",
    notes: [
      "Advanced AI/ML concepts with hands-on Python implementation",
      "Focus: neural networks, NLP, computer vision, and reinforcement learning",
    ],
  },
  {
    school: "Universidad Tecnológica de Panamá",
    degree: "Ph.D. in Software Engineering (in progress)",
    period: "2025 - Expected 2027",
    location: "Panama City, Panama",
    notes: [
      "Research focus: LLM evaluation methodologies, AI ethics, and software quality for AI systems",
      "Developing frameworks for measuring reliability and fairness in production AI applications",
    ],
  },
  {
    school: "Universidad Tecnológica de Panamá",
    degree: "Master's in Software Engineering",
    period: "Sep 2023 - Mar 2025",
    location: "Panama City, Panama",
    notes: [
      "Focus: requirements engineering, software architecture, test automation, and DevOps for AI systems",
      "Capstone: RAG evaluation harness with retrieval@k metrics, factuality checks, and regression suites",
    ],
  },
  {
    school: "Tecnológico de Monterrey",
    degree: "Master's in Artificial Intelligence",
    period: "2023 - 2025",
    location: "Monterrey, Mexico (Online)",
    notes: [
      "Comprehensive AI curriculum: machine learning, deep learning, NLP, and computer vision",
      "Applied projects in production ML systems and model deployment",
    ],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "Master's in Higher Education",
    period: "2022 - 2024",
    location: "Panama City, Panama",
    notes: [
      "Specialized training for university-level teaching and curriculum development",
      "Focus: instructional design for technical topics, assessment methodologies, and AI literacy education",
    ],
  },
  {
    school: "University of the People",
    degree: "Master's in Computer Science",
    period: "2021 - 2024",
    location: "Pasadena, CA (Online)",
    notes: [
      "Advanced topics: algorithms, distributed systems, information retrieval, and NLP",
      "Research in LLM evaluation and fault-tolerant distributed applications",
    ],
  },
  {
    school: "Institute of Higher Education for Advanced Technical Training",
    degree: "Associate's in Scientific Investigation",
    period: "2021 - 2022",
    location: "Panama City, Panama",
    notes: [
      "Research methodology: experimental design, statistical analysis, and literature review",
      "Developed replicable protocols and research ethics frameworks",
    ],
  },
  {
    school: "Institute of Higher Education for Advanced Technical Training",
    degree: "Associate's in Technology with Focus on Medicine",
    period: "2020 - 2021",
    location: "Panama City, Panama",
    notes: [
      "Healthcare technology systems and medical informatics fundamentals",
      "Foundation for later work on MILA patient communication platform",
    ],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "Bachelor's in Computer Engineering",
    period: "2015 - 2020",
    location: "Panama City, Panama",
    highlight: "Cum Laude",
    notes: [
      "Core CS: data structures, operating systems, networks, and databases",
      "Senior project: full-stack application (React/Node/PostgreSQL) with authentication and automated tests",
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
