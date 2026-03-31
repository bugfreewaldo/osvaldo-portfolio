import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Mail, Github, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Osvaldo Restrepo",
  description:
    "Resume of Osvaldo Restrepo — Senior Full Stack AI & Software Engineer. 10+ years of experience building production LLMs, RAG systems, AI agents, and voice AI. Based in Panama, working globally.",
  keywords: [
    "Osvaldo Restrepo resume",
    "AI Engineer resume",
    "Full Stack Developer resume",
    "AI Engineer Panama resume",
    "Software Engineer CV",
  ],
  alternates: { canonical: "/resume" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: { "@id": "https://osvaldorestrepo.dev/#person" },
  url: "https://osvaldorestrepo.dev/resume",
  name: "Resume — Osvaldo Restrepo",
};

const experience = [
  {
    company: "TheGreyMatter.ai",
    role: "Artificial Intelligence Engineer",
    period: "Nov 2025 — Present",
    location: "Orlando, FL (Remote)",
    bullets: [
      "Architect GreyMatter 2.0 — the central AI brain & identity layer powering Snapshot9, Measurement13, and 9Vectors",
      "Design token-based federation, multi-tenant auth, and cross-product entitlements",
      "Build Model Context Protocol (MCP) services enabling safe, real-time AI tool usage",
      "Develop cloud-native backend services using FastAPI, Azure, Cosmos DB, Redis, Docker",
      "Integrate LLMs (Claude / AI agents) with guardrails, observability, and production reliability",
    ],
    skills: ["FastAPI", "Azure", "Cosmos DB", "Redis", "Docker", "Claude", "MCP", "Python"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Artificial Intelligence Engineer",
    period: "Nov 2021 — Nov 2025",
    location: "Austin, TX (Remote)",
    bullets: [
      "Built AI-powered voice assistants for real-time call handling using Twilio, Whisper, GPT-4, ElevenLabs",
      "Delivered end-to-end RAG systems with LangChain, Pinecone, and Weaviate for production use",
      "Engineered multi-intent call agents (scheduling, lead capture, Q&A, fallback recovery)",
      "Automated customer workflows and backend processes using scalable LLM-powered APIs",
    ],
    skills: ["Python", "Node.js", "React", "LangChain", "Twilio", "Whisper", "GPT-4", "Pinecone", "Weaviate"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Full Stack Software Engineer",
    period: "Jan 2017 — Nov 2021",
    location: "Austin, TX (Remote)",
    bullets: [
      "Built and maintained full-stack apps with Node.js/Express and React/Next.js",
      "Integrated QuickBooks, Stripe, and Twilio — automated accounting work by 70%+",
      "Deployed on AWS and Vercel with CI/CD pipelines and monitoring",
      "Implemented auth, validation, and security layers following OWASP best practices",
    ],
    skills: ["TypeScript", "Node.js", "React", "Next.js", "Stripe", "QuickBooks API", "AWS", "Vercel"],
  },
  {
    company: "Hyperware Solutions",
    role: "Technical Support Executive",
    period: "Jan 2015 — Dec 2016",
    location: "Chiriquí, Panama",
    bullets: [
      "Performed diagnostics, malware removal, and data recovery across hardware and software",
      "Installed and configured LAN, Wi-Fi, and VoIP systems",
      "Supported IT rollouts including server migrations and device lifecycle management",
    ],
    skills: ["Networking", "Hardware Diagnostics", "VoIP", "Technical Support"],
  },
];

const education = [
  { degree: "Ph.D. in AI / Medical Research (in progress)", school: "Technological University of Panama", period: "2024 — 2027" },
  { degree: "M.S. in Artificial Intelligence (in progress)", school: "Tecnológico de Monterrey", period: "2025 — 2027" },
  { degree: "M.S. in Computer Software Engineering", school: "Technological University of Panama", period: "2023 — 2025" },
  { degree: "M.S. in Higher Education", school: "Latin University of Panama", period: "2022 — 2024" },
  { degree: "B.S. in Computer Science", school: "University of the People", period: "2019 — 2024" },
  { degree: "B.S. in Computer Science", school: "Latin University of Panama", period: "2015 — 2020" },
];

const coreSkills = {
  "AI & ML": ["LLMs (Claude, GPT-4)", "LangChain", "RAG / Pinecone / Weaviate", "Voice AI (Whisper, ElevenLabs)", "AI Agents / MCP", "Prompt Engineering"],
  "Backend": ["Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "Redis", "Cosmos DB"],
  "Frontend": ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  "Cloud & DevOps": ["Azure", "AWS", "Docker", "GitHub Actions", "Vercel", "CI/CD"],
  "Integrations": ["Stripe", "QuickBooks", "Twilio", "Zapier", "n8n", "REST / GraphQL"],
};

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Osvaldo Restrepo
              </h1>
              <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mt-1">
                Senior Full Stack AI & Software Engineer
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Panama City, Panama
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  me@osvaldorestrepo.dev
                </span>
                <a href="https://github.com/bugfreewaldo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github className="w-3.5 h-3.5" />
                  bugfreewaldo
                </a>
                <a href="https://linkedin.com/in/osvaldorestrepo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5" />
                  osvaldorestrepo
                </a>
              </div>
            </div>
            <a
              href="/Osvaldo_Restrepo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors flex-shrink-0"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Full Stack AI Engineer with 10+ years building production software and 4+ years focused on applied AI. I build LLMs, RAG pipelines, AI agents, and voice systems that run in production — not demos. 20+ AI products shipped across healthcare, fintech, SaaS, and enterprise. PhD candidate in AI with medical research focus. Based in Panama, serving clients in the US, Canada, and Latin America.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="space-y-3">
              {Object.entries(coreSkills).map(([category, items]) => (
                <div key={category} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 w-32 flex-shrink-0">
                    {category}:
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {items.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.company + exp.role} className="relative pl-4 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-slate-500 text-right">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-slate-400 mt-0.5">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.degree + edu.school} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div>
                    <span className="font-medium text-slate-900 dark:text-white text-sm">{edu.degree}</span>
                    <span className="text-slate-500 text-sm ml-2">— {edu.school}</span>
                  </div>
                  <span className="text-sm text-slate-500">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Certifications
            </h2>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Professional Certificate in Python for Data Science and Machine Learning — <span className="text-slate-900 dark:text-white font-medium">Harvard University</span>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Languages
            </h2>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              English (Native/Bilingual) · Spanish (Native/Bilingual)
            </div>
          </section>

          {/* CTA */}
          <section className="pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Interested in working together?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
                View Projects
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
