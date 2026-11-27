import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Mail, Github, Linkedin } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Currículum",
  description:
    "Currículum de Osvaldo Restrepo — CTO e ingeniero de IA. Más de 10 años construyendo LLMs en producción, sistemas RAG, agentes de IA e IA de voz. Radicado en Panamá, trabajando con clientes de todo el mundo.",
  keywords: [
    "Osvaldo Restrepo currículum",
    "currículum ingeniero de IA",
    "CV ingeniero de IA Panamá",
    "currículum desarrollador full stack",
    "CV ingeniero de software",
  ],
  openGraph: {
    title: "Currículum — Osvaldo Restrepo",
    description:
      "CTO e ingeniero de IA. Más de 10 años construyendo LLMs, RAG, agentes de IA e IA de voz en producción.",
    url: "/es/resume",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/resume",
    languages: { en: "/resume", es: "/es/resume", "x-default": "/resume" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: { "@id": "https://www.osvaldorestrepo.dev/#person" },
  url: "https://www.osvaldorestrepo.dev/es/resume",
  name: "Currículum — Osvaldo Restrepo",
  inLanguage: "es",
};

const experience = [
  {
    company: "TheGreyMatter.ai",
    role: "Chief Technology Officer (CTO) · antes Ingeniero de IA (nov 2025 — mar 2026)",
    period: "mar 2026 — presente",
    location: "Orlando, FL (remoto)",
    bullets: [
      "Diseño GreyMatter 3.0 — la columna vertebral de la plataforma (federación OAuth 2.0 + JWT, facturación por niveles, cifrado por sobre AES-256-GCM, orquestación de agentes con Claude) para un ecosistema SaaS de más de 17 apps",
      "Lidero la entrega de más de 17 apps verticales de IA sobre un stack compartido (React + TypeScript, Azure Functions v4, Cosmos DB, Claude): DueDiligence9, Forecast9, Contracts9, Culture9, OrgDesign9, Pipeline9, SupplyChain9, Board9, SWOTAnalysis9, Operate9, ExitReady9, Integration9, NPS9, DDQ9, Interview9 y más",
      "Construyo servicios compartidos: autenticación OAuth SSO + JWKS (con SDK cliente en TS), servicio centralizado de archivos con cifrado por sobre y webhooks HMAC, servicio de comunicaciones con plantillas y servicio de conectores externos (Salesforce, HubSpot, QuickBooks)",
      "Construyo servidores MCP que exponen las APIs de Snapshot9, 9Vectors y Measurement13 a agentes de Claude, con autenticación, rate limiting, observabilidad y registros de auditoría",
      "Desarrollo sistemas de IA agéntica — The Fixer (remediación de auditorías de cumplimiento), Vector_10 (agente de la ontología de 9 vectores), TheHacker (escaneo automatizado de seguridad)",
      "Lanzo clientes móviles nativos: iOS (Swift + SwiftUI) y Android (Kotlin) con federación OAuth contra la capa central de identidad",
      "Aplico RBAC, registro completo de auditoría, cifrado de PII a nivel de campo (Azure Key Vault) y pipelines de ingesta orientados a eventos en todo el ecosistema",
    ],
    skills: ["Python", "FastAPI", "TypeScript", "Node.js", "React", "Azure", "Cosmos DB", "Redis", "Docker", "Claude", "MCP", "Swift", "Kotlin"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Ingeniero de Inteligencia Artificial",
    period: "nov 2021 — nov 2025",
    location: "Austin, TX (remoto)",
    bullets: [
      "Construí asistentes de voz con IA para atención de llamadas en tiempo real con Twilio, Whisper, GPT-4 y ElevenLabs",
      "Entregué sistemas RAG end-to-end con LangChain, Pinecone y Weaviate para uso en producción",
      "Desarrollé agentes de llamadas multi-intención (agendamiento, captación de leads, preguntas y respuestas, recuperación ante fallos)",
      "Automaticé flujos de clientes y procesos de backend con APIs escalables impulsadas por LLM",
    ],
    skills: ["Python", "Node.js", "React", "LangChain", "Twilio", "Whisper", "GPT-4", "Pinecone", "Weaviate"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Ingeniero de Software Full Stack",
    period: "ene 2017 — nov 2021",
    location: "Austin, TX (remoto)",
    bullets: [
      "Construí y mantuve apps full-stack con Node.js/Express y React/Next.js",
      "Integré QuickBooks, Stripe y Twilio — automaticé más del 70% del trabajo contable",
      "Desplegué en AWS y Vercel con pipelines de CI/CD y monitoreo",
      "Implementé capas de autenticación, validación y seguridad siguiendo las buenas prácticas de OWASP",
    ],
    skills: ["TypeScript", "Node.js", "React", "Next.js", "Stripe", "QuickBooks API", "AWS", "Vercel"],
  },
  {
    company: "Hyperware Solutions",
    role: "Ejecutivo de Soporte Técnico",
    period: "ene 2015 — dic 2016",
    location: "Chiriquí, Panamá",
    bullets: [
      "Realicé diagnósticos, eliminación de malware y recuperación de datos en hardware y software",
      "Instalé y configuré sistemas LAN, Wi-Fi y VoIP",
      "Apoyé despliegues de TI, incluidas migraciones de servidores y gestión del ciclo de vida de equipos",
    ],
    skills: ["Redes", "Diagnóstico de hardware", "VoIP", "Soporte técnico"],
  },
];

const education = [
  { degree: "Doctorado en IA / Investigación médica (en curso)", school: "Universidad Tecnológica de Panamá", period: "2024 — 2027" },
  { degree: "Maestría en Inteligencia Artificial (en curso)", school: "Tecnológico de Monterrey", period: "2025 — 2027" },
  { degree: "Maestría en Ingeniería de Software", school: "Universidad Tecnológica de Panamá", period: "2023 — 2025" },
  { degree: "Maestría en Educación Superior", school: "Universidad Latina de Panamá", period: "2022 — 2024" },
  { degree: "Licenciatura en Ciencias de la Computación", school: "University of the People", period: "2019 — 2024" },
  { degree: "Licenciatura en Ciencias de la Computación", school: "Universidad Latina de Panamá", period: "2015 — 2020" },
];

const coreSkills = {
  "IA y ML": ["LLMs (Claude, GPT-4)", "LangChain", "RAG / Pinecone / Weaviate", "IA de voz (Whisper, ElevenLabs)", "Agentes de IA / MCP", "Prompt engineering"],
  "Backend": ["Python", "FastAPI", "Node.js", "Express", "PostgreSQL", "Redis", "Cosmos DB"],
  "Frontend": ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  "Cloud y DevOps": ["Azure", "AWS", "Docker", "GitHub Actions", "Vercel", "CI/CD"],
  "Integraciones": ["Stripe", "QuickBooks", "Twilio", "Zapier", "n8n", "REST / GraphQL"],
};

export default function ResumePageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen py-12 px-4 print:min-h-0 print:py-0 print:px-0">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Reveal className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-8 print:mb-5 print:pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Osvaldo Restrepo
              </h1>
              <p className="text-lg text-[#FF6A3D] dark:text-[#FF8A5B] font-medium mt-1">
                CTO e ingeniero de IA
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Ciudad de Panamá, Panamá
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
                <span className="hidden print:flex items-center gap-1">www.osvaldorestrepo.dev/es</span>
              </div>
            </div>
            <a
              href="/Osvaldo_Restrepo_Resume_ES.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="print:hidden inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF6A3D]/10 dark:bg-[#FF6A3D]/15 text-[#FF6A3D] dark:text-[#FF8A5B] text-sm font-medium hover:bg-[#FF6A3D]/20 dark:hover:bg-[#FF6A3D]/25 transition-colors flex-shrink-0"
            >
              <Download className="w-4 h-4" />
              Descargar PDF
            </a>
          </Reveal>

          {/* Summary */}
          <section className="mb-10">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              CTO e ingeniero de IA hands-on, con más de 10 años construyendo software en producción y más de 4 enfocado en IA aplicada. Actualmente CTO de TheGreyMatter.ai, donde lidero la tecnología detrás de su ecosistema de IA — más de 17 apps verticales de IA, servicios compartidos de identidad, archivos y comunicaciones, servidores MCP, sistemas agénticos y clientes iOS + Android — sobre un stack unificado de Azure + Cosmos DB + Claude. Construyo LLMs, pipelines RAG, agentes de IA y sistemas de voz que funcionan en producción, no demos. Más de 20 productos de IA entregados en salud, fintech, SaaS y empresas. Candidato a doctor en IA con enfoque en investigación médica. Radicado en Panamá, con clientes en EE. UU., Canadá, Europa y Latinoamérica.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Habilidades técnicas
            </h2>
            <div className="space-y-3">
              {Object.entries(coreSkills).map(([category, items]) => (
                <div key={category} className="flex items-baseline gap-x-2">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 w-32 flex-shrink-0">
                    {category}:
                  </span>
                  <span className="flex-1 text-sm text-slate-600 dark:text-slate-400">
                    {items.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Experiencia
            </h2>
            <Reveal staggerMs={80} className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.company + exp.role} className="break-inside-avoid relative pl-4 border-l-2 border-[#FF6A3D]/30 dark:border-[#FF6A3D]/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-[#FF6A3D] dark:text-[#FF8A5B] text-sm font-medium">
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
                      <span key={skill} className="px-2 py-0.5 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Reveal>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Educación
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
              Certificaciones
            </h2>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Professional Certificate in Python for Data Science and Machine Learning — <span className="text-slate-900 dark:text-white font-medium">Harvard University</span>
            </div>
          </section>

          {/* Languages */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Idiomas
            </h2>
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Español (nativo/bilingüe) · Inglés (nativo/bilingüe)
            </div>
          </section>

          {/* CTA */}
          <Reveal className="print:hidden pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              ¿Te interesa trabajar juntos?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/es/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4C] text-white font-medium hover:from-[#FF7E54] hover:to-[#FF9B63] transition-all shadow-lg shadow-[#FF6A3D]/25"
              >
                Escríbeme
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/es/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Ver proyectos
              </Link>
            </div>
          </Reveal>
        </div>
      </main>
    </>
  );
}
