"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, ChevronDown, MapPin, Calendar, Bot, Code, Mic, Wrench, Globe, Star, Award, Zap } from "lucide-react";
import Testimonials from "@/app/components/Testimonials";
import Reveal from "@/components/motion/Reveal";

// ---------- Experiencia ----------
const experience = [
  {
    company: "TheGreyMatter.ai",
    role: "Chief Technology Officer (CTO)",
    period: "mar 2026 - presente",
    location: "Orlando, FL (remoto)",
    type: "current",
    description: "Diseño y construyo la columna vertebral de la plataforma para un ecosistema SaaS de IA multiproducto — más de 17 apps verticales, servicios compartidos de identidad y archivos, servidores MCP, flujos agénticos y clientes móviles nativos, todo orquestado por un cerebro de IA central.",
    highlights: [
      "Diseño y desarrollo GreyMatter 3.0 — el núcleo de la plataforma, con federación OAuth 2.0 + JWT, facturación por niveles (Free / Professional / Enterprise), cifrado de documentos por sobre con AES-256-GCM y orquestación de conversaciones y agentes con Claude",
      "Diseño y lidero la entrega de más de 17 apps del ecosistema sobre un stack compartido (React 18 + TypeScript, Azure Functions v4, Cosmos DB, Claude API): DueDiligence9, Forecast9, Contracts9, Culture9, OrgDesign9, Pipeline9, SupplyChain9, Board9, SWOTAnalysis9, Operate9, ExitReady9, Integration9, NPS9, DDQ9, Interview9 y más",
      "Construyo la capa de servicios compartidos que consume cada producto: servicio de autenticación OAuth SSO + JWKS con SDK cliente en TypeScript, servicio centralizado de archivos (cifrado por sobre + webhooks HMAC), servicio de comunicaciones con plantillas y servicio de conectores externos (Salesforce, HubSpot, QuickBooks)",
      "Construyo servidores de Model Context Protocol (MCP) que exponen las APIs de Snapshot9, 9Vectors y Measurement13 directamente a agentes de Claude, con autenticación, rate limiting, observabilidad y registros de auditoría",
      "Desarrollo sistemas de IA agéntica — The Fixer (remediación de auditorías de cumplimiento), Vector_10 (agente de la ontología de 9 vectores) y TheHacker (escaneo automatizado de seguridad y vulnerabilidades)",
      "Lanzo clientes móviles nativos: iOS (Swift + SwiftUI) y Android (Kotlin) con federación OAuth contra la capa central de identidad",
      "Implemento RBAC a nivel de deal y de empresa, registro de auditoría en cada mutación, cifrado de PII a nivel de campo con Azure Key Vault e ingesta orientada a eventos (carga de archivo → extracción → análisis con IA → notificaciones)",
      "Defino el modelo de federación y propiedad de datos: cada app del ecosistema es dueña de su Cosmos DB; los datos se comparten solo a través de APIs y de la capa compartida de identidad / archivos — nunca con lecturas directas entre apps",
      "Soy responsable de la estrategia tecnológica y la ingeniería del ecosistema: arquitectura, modelos de datos, escalabilidad, seguridad y el arnés de QA (Playwright + Vitest) que valida cada release",
    ],
    skills: ["Python", "FastAPI", "TypeScript", "Node.js", "React", "Azure", "Cosmos DB", "Redis", "Docker", "Claude", "MCP", "Swift", "Kotlin"],
  },
  {
    company: "TheGreyMatter.ai",
    role: "Ingeniero de Inteligencia Artificial",
    period: "nov 2025 - mar 2026",
    location: "Orlando, FL (remoto)",
    description: "Me uní para diseñar GreyMatter 3.0 — la columna vertebral detrás del ecosistema SaaS de IA — antes de asumir el rol de CTO.",
    highlights: [
      "Diseñé el núcleo de la plataforma: federación OAuth 2.0 + JWT, servicios compartidos de identidad y archivos, y orquestación de agentes con Claude",
      "Colaboré con el CTO y el liderazgo de producto en arquitectura, modelos de datos y escalabilidad",
    ],
    skills: ["TypeScript", "React", "Azure Functions", "Cosmos DB", "Claude", "MCP"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Ingeniero de Inteligencia Artificial",
    period: "nov 2021 - nov 2025",
    location: "Austin, TX (remoto)",
    description: "Diseño e implementación de soluciones con IA enfocadas en aplicaciones reales de LLM, agentes de voz y flujos de trabajo con IA.",
    highlights: [
      "Construí asistentes de voz con IA para atención de llamadas en tiempo real y asíncrona usando Twilio, Whisper, GPT-4, ElevenLabs y pipelines de LLM a la medida",
      "Entregué sistemas end-to-end con LangChain, Python, Node.js y React; integré Pinecone/Weaviate para Retrieval-Augmented Generation (RAG)",
      "Desarrollé agentes de llamadas multi-intención (agendamiento, captación de leads, preguntas y respuestas, recuperación ante fallos) siguiendo buenas prácticas de producción",
      "Automaticé flujos de clientes y procesos de backend con APIs seguras y escalables impulsadas por LLM",
      "Prototipado e iteración rápidos para mejorar la UX y reducir la latencia en interacciones con IA",
    ],
    skills: ["Python", "Node.js", "React", "LangChain", "Twilio", "Whisper", "GPT-4", "ElevenLabs", "Pinecone", "Weaviate"],
  },
  {
    company: "Shining Image Of Texas, Inc.",
    role: "Ingeniero de Software Full Stack",
    period: "ene 2017 - nov 2021",
    location: "Austin, TX (remoto)",
    description: "Diseñé y mantuve aplicaciones web end-to-end; integré herramientas de pagos, contabilidad y comunicaciones.",
    highlights: [
      "Construí y mantuve apps full-stack con Node.js/Express y React/Next.js, con énfasis en escalabilidad y rendimiento",
      "Integré QuickBooks, Stripe y Twilio para automatizar facturación, seguimiento de pagos y comunicaciones",
      "Desarrollé componentes de front-end reutilizables con Redux y TypeScript para mejorar la mantenibilidad",
      "Desplegué en AWS y Vercel con CI/CD y monitoreo; administré múltiples entornos",
      "Implementé capas de autenticación, validación y seguridad siguiendo las buenas prácticas de OWASP",
      "Automaticé flujos entre Fieldd, QuickBooks y Stripe, reduciendo el trabajo contable manual en más de 70%",
      "Hice code reviews y optimización de rendimiento; prototipé herramientas internas de IA y chatbots",
    ],
    skills: ["TypeScript", "Node.js", "Express", "React", "Next.js", "Redux", "Stripe", "QuickBooks API", "AWS", "Vercel", "Twilio"],
  },
  {
    company: "Hyperware Solutions",
    role: "Ejecutivo de Soporte Técnico",
    period: "ene 2015 - dic 2016",
    location: "Chiriquí, Panamá",
    description: "Brindé soporte integral en hardware, software y redes.",
    highlights: [
      "Realicé diagnósticos, eliminación de malware y recuperación de datos para minimizar el tiempo de inactividad",
      "Instalé y configuré sistemas LAN, Wi-Fi y VoIP para mejorar la conectividad",
      "Di soporte remoto y presencial, y elaboré documentación e informes de escalamiento",
      "Apoyé despliegues de TI, incluidas migraciones de servidores y gestión del ciclo de vida de equipos",
    ],
    skills: ["Soporte técnico", "Redes", "Diagnóstico de hardware", "VoIP", "Documentación"],
  },
];

// ---------- Educación ----------
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
    school: "Universidad Tecnológica de Panamá",
    degree: "Doctorado en Inteligencia Artificial con enfoque en investigación médica (en curso)",
    period: "2024 - previsto 2027",
    location: "Ciudad de Panamá, Panamá",
    notes: [
      "Línea de investigación: aplicaciones de IA en diagnóstico médico y salud",
      "Desarrollo de marcos de IA para sistemas de apoyo a la decisión clínica",
    ],
  },
  {
    school: "Tecnológico de Monterrey",
    degree: "Maestría en Inteligencia Artificial (en curso)",
    period: "2025 - previsto 2027",
    location: "Monterrey, México (en línea)",
    notes: [
      "Programa integral de IA: machine learning, deep learning, NLP y visión por computadora",
      "Proyectos aplicados en sistemas de ML en producción y despliegue de modelos",
    ],
  },
  {
    school: "Universidad Tecnológica de Panamá",
    degree: "Maestría en Ingeniería de Software",
    period: "2023 - 2025",
    location: "Ciudad de Panamá, Panamá",
    notes: [
      "Enfoque: arquitectura de software, ingeniería de requisitos y prácticas DevOps",
      "Cursos avanzados en calidad de software y diseño de sistemas",
    ],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "Maestría en Educación Superior",
    period: "2022 - 2024",
    location: "Ciudad de Panamá, Panamá",
    notes: [
      "Formación especializada en docencia universitaria y diseño curricular",
      "Enfoque: diseño instruccional para temas técnicos y metodologías de evaluación",
    ],
  },
  {
    school: "University of the People",
    degree: "Licenciatura en Ciencias de la Computación",
    period: "2019 - 2024",
    location: "Pasadena, CA (en línea)",
    notes: [
      "Formación troncal en computación: algoritmos, estructuras de datos e ingeniería de software",
      "Enfoque en sistemas distribuidos y recuperación de información",
    ],
  },
  {
    school: "Instituto de Educación Superior en Formación Técnica Avanzada",
    degree: "Técnico Superior en IA con enfoque en investigación científica",
    period: "2020 - 2021",
    location: "Ciudad de Panamá, Panamá",
    notes: [
      "Metodología de la investigación: diseño experimental y análisis estadístico",
      "Fundamentos de IA y protocolos de investigación científica",
    ],
  },
  {
    school: "Instituto de Educación Superior en Formación Técnica Avanzada",
    degree: "Técnico Superior en Pedagogía",
    period: "2020 - 2021",
    location: "Ciudad de Panamá, Panamá",
    notes: [
      "Teoría educativa y metodologías de enseñanza",
      "Base para la enseñanza técnica y el diseño curricular",
    ],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "Licenciatura en Ciencias de la Computación",
    period: "2015 - 2020",
    location: "Ciudad de Panamá, Panamá",
    notes: [
      "Fundamentos de computación: estructuras de datos, sistemas operativos, redes y bases de datos",
      "Proyecto final: aplicación full-stack con autenticación y pruebas automatizadas",
    ],
  },
];

const skills = [
  { icon: Bot, label: "LLM y agentes", items: ["Claude", "GPT-4", "LangChain", "MCP", "IA agéntica", "Guardrails"] },
  { icon: Code, label: "Full-Stack", items: ["TypeScript", "React", "Next.js", "Python", "FastAPI", "Node.js / Express"] },
  { icon: Mic, label: "Voz y móvil", items: ["Whisper", "ElevenLabs", "Twilio", "Swift / SwiftUI", "Kotlin"] },
  { icon: Wrench, label: "Cloud-Native", items: ["Azure", "AWS", "Docker", "Cosmos DB", "PostgreSQL", "Redis"] },
];

// ---------- Certificaciones ----------
const certifications = [
  {
    name: "Professional Certificate in Python for Data Science and Machine Learning",
    issuer: "Harvard University",
  },
];

// ---------- Herramientas de IA ----------
const aiTools = [
  { name: "Claude Code", description: "CLI con IA para tareas de programación autónomas" },
  { name: "Cursor", description: "Editor de código AI-first que entiende a fondo el codebase" },
  { name: "GitHub Copilot", description: "Programador en pareja con IA para sugerencias en línea" },
  { name: "ChatGPT / Codex", description: "Modelos de OpenAI para generar código y resolver problemas" },
  { name: "v0 by Vercel", description: "Generación de interfaces con IA a partir de prompts" },
  { name: "Ollama", description: "Inferencia local de LLM para flujos de IA privados y sin conexión" },
  { name: "Aider", description: "Programación en pareja con IA desde la terminal" },
  { name: "Continue", description: "Asistente de código con IA, open source, para cualquier IDE" },
];

// ---------- Idiomas ----------
const languages = [
  { name: "Inglés", level: "Nativo o bilingüe" },
  { name: "Español", level: "Nativo o bilingüe" },
];

// ---------- Logros ----------
const highlights = [
  "Diseño de GreyMatter 3.0 — la columna vertebral que impulsa más de 17 apps verticales de IA, servicios compartidos, servidores MCP, sistemas agénticos y clientes iOS + Android",
  "Construí servidores MCP y sistemas de IA agéntica (The Fixer, Vector_10, TheHacker) que permiten a Claude consultar, evaluar y actuar sobre datos empresariales de forma segura",
  "Construí asistentes de voz con IA que atienden llamadas en tiempo real con Twilio, Whisper, GPT-4 y ElevenLabs",
  "Automaticé flujos que redujeron el trabajo contable manual en más de 70% mediante la integración de QuickBooks/Stripe",
];

// Fondo animado
function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}

// Tarjeta de educación expandible
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
          isExpanded ? "border-[#FF6A3D]/50 shadow-lg shadow-[#FF6A3D]/5" : "hover:border-[#FF6A3D]/30"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-[#FF6A3D] dark:group-hover:text-[#FF8A5B] transition-colors">
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
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D] mt-1.5 flex-shrink-0" />
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

// Tarjeta de experiencia expandible
function ExperienceCard({ exp, index }: { exp: typeof experience[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index < 2); // Las dos primeras abiertas por defecto

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
            ? "bg-gradient-to-br from-[#FF6A3D]/5 to-[#2DD4BF]/5 border border-[#FF6A3D]/20"
            : "bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#FF6A3D]/30"
        } ${isExpanded ? "shadow-lg shadow-[#FF6A3D]/5" : ""}`}
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
                  Actual
                </span>
              )}
            </div>
            <p className="text-[#FF6A3D] dark:text-[#FF8A5B] font-medium">{exp.company}</p>
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D] mt-1.5 flex-shrink-0" />
                {highlight}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium bg-[#FF6A3D]/10 dark:bg-[#FF6A3D]/15 text-[#FF6A3D] dark:text-[#FFB068] rounded-full"
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

export default function AboutPageEs() {
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
              <span className="text-slate-900 dark:text-white">Sobre </span>
              <span className="bg-gradient-to-r from-[#FF6A3D] via-[#FF7E54] to-[#2DD4BF] bg-clip-text text-transparent">
                mí
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Ingeniero de IA full stack especializado en sistemas LLM en producción, agentes autónomos y plataformas cloud-native.
              Actualmente soy CTO de TheGreyMatter.ai (desde marzo de 2026), donde lidero la tecnología detrás de un ecosistema SaaS multiproducto — más de 17 apps verticales de IA,
              servicios compartidos de identidad y archivos, servidores MCP, flujos agénticos y clientes móviles nativos, todo orquestado por un cerebro de IA central.
              Más de 10 años construyendo software, más de 4 enfocado en IA aplicada, con clientes en EE. UU., Canadá, Europa y Latinoamérica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="relative py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal staggerMs={60} className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.label}
                className="p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-[#FF6A3D]/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
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
              </div>
            ))}
          </Reveal>
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
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Logros destacados</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Desarrollo potenciado con IA</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Uso herramientas de IA de punta para acelerar el desarrollo, mejorar la calidad del código y entregar más rápido. Son multiplicadores de fuerza que me permiten concentrarme en la arquitectura y en resolver problemas.
            </p>
          </motion.div>

          <Reveal staggerMs={60} className="grid sm:grid-cols-2 gap-3">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-violet-500/30 transition-colors"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white">{tool.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{tool.description}</p>
              </div>
            ))}
          </Reveal>
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
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Experiencia</h2>
              <p className="text-sm text-slate-500 mt-1">Haz clic para expandir o contraer</p>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Educación</h2>
              <p className="text-sm text-slate-500 mt-1">Haz clic para ver los detalles</p>
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
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Certificaciones</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Idiomas</h2>
          </motion.div>

          <Reveal staggerMs={80} className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="px-5 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800"
              >
                <span className="font-semibold text-slate-900 dark:text-white">{lang.name}</span>
                <span className="text-slate-500 ml-2">— {lang.level}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-10 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <Testimonials locale="es" />
        </div>
      </section>
    </main>
  );
}
