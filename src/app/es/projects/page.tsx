"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Phone, CreditCard, ArrowRight, Sparkles, Target, BarChart3, Camera, Lightbulb, Wallet, GraduationCap, Sparkle, Baby, Car, TrendingUp, Search, Award, Link2, DoorOpen, LayoutGrid, FileText, ClipboardList, Users, PieChart, Shield, Factory, Heart, MessageSquare, Truck, Gauge } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export default function ProjectsPageEs() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-3xl" />
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
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-[#FF6A3D] dark:text-[#FF8A5B]">
              Trabajo destacado
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Proyectos
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sistemas reales en producción. Cada proyecto incluye el contexto del problema,
            el enfoque técnico y los resultados medidos.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <Reveal staggerMs={55} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/es/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#FF6A3D]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6A3D]/10">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} shrink-0`}>
                        <project.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#FF6A3D] dark:group-hover:text-[#FF8A5B] transition-colors truncate">
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
            ))}
          </Reveal>
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
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Conversemos sobre cómo la IA puede resolver tus retos específicos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/es/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4C] text-white font-medium hover:from-[#FF7E54] hover:to-[#FF9B63] transition-all shadow-lg shadow-[#FF6A3D]/25"
            >
              Hablemos
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
    subtitle: "Asistente neonatal con LLM",
    description:
      "Asistente basado en RAG que ayuda al personal clínico de la UCIN a redactar actualizaciones para los padres alineadas con las políticas del hospital. Redujo el tiempo de redacción en un 42% con cero alucinaciones en los mensajes enviados.",
    icon: Brain,
    gradient: "from-purple-500 to-indigo-500",
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI"],
    external: "https://mila-drab.vercel.app/",
  },
  {
    slug: "ai-voice-agent",
    title: "Agente de voz",
    subtitle: "Shining Image",
    description:
      "Agente telefónico con IA disponible 24/7 que atiende llamadas entrantes, agenda trabajos y transfiere a una persona cuando hace falta. En producción sobre Twilio SIP con transcripciones en tiempo real hacia el CRM.",
    icon: Phone,
    gradient: "from-[#FF6A3D] to-cyan-500",
    stack: ["Python", "Twilio", "Whisper", "GPT-4", "WebSockets"],
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Conciliador",
    subtitle: "Stripe → QuickBooks",
    description:
      "Conciliación financiera automatizada que agrupa las comisiones de Stripe por cada liquidación y crea asientos limpios en QuickBooks. Redujo el tiempo de conciliación mensual en un 68%.",
    icon: CreditCard,
    gradient: "from-emerald-500 to-teal-500",
    stack: ["Node.js", "Stripe API", "QuickBooks API", "PostgreSQL"],
  },
  {
    slug: "9vectors",
    title: "9Vectors.ai",
    subtitle: "Plataforma de evaluación estratégica",
    description:
      "Plataforma de evaluación estratégica con IA que ayuda a las empresas a tomar decisiones basadas en datos. Como cofundador técnico, construí la infraestructura de IA central que impulsa la inteligencia organizacional a escala.",
    icon: Target,
    gradient: "from-rose-500 to-orange-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "AWS"],
    external: "https://9vectors.ai",
  },
  {
    slug: "measurement13",
    title: "Measurement13.ai",
    subtitle: "Plataforma de evaluación de liderazgo",
    description:
      "Evaluación de liderazgo construida sobre 13 atributos clave: feedback 360° entre grupos de evaluadores, posicionamiento 9-Box basado en puntuación estructurada y analítica de dinámicas de equipo para revisiones de talento y planes de sucesión.",
    icon: BarChart3,
    gradient: "from-blue-500 to-indigo-500",
    stack: ["React 18", "TypeScript", "Vite", "Node.js", "Azure Functions", "PostgreSQL", "Claude AI"],
    external: "https://measurement13.ai",
  },
  {
    slug: "snapshot9",
    title: "Snapshot9.ai",
    subtitle: "Plataforma de transformación empresarial",
    description:
      "Plataforma integral de transformación empresarial que captura, analiza y optimiza los procesos de la organización con IA. Permite a las empresas visualizar y mejorar su eficiencia operativa.",
    icon: Camera,
    gradient: "from-violet-500 to-[#2DD4BF]",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    external: "https://snapshot9.ai",
  },
  {
    slug: "thegreymatter",
    title: "TheGreyMatter.ai",
    subtitle: "Plataforma de inteligencia de negocios",
    description:
      "Plataforma de inteligencia de negocios impulsada por IA que convierte datos complejos en insights claros y accionables. Diseñada para que los equipos directivos tomen decisiones más rápidas e inteligentes, con confianza.",
    icon: Lightbulb,
    gradient: "from-slate-500 to-zinc-600",
    stack: ["React", "Node.js", "OpenAI", "MongoDB", "AWS"],
    external: "https://thegreymatter.ai",
  },
  {
    slug: "forecast9",
    title: "Forecast9.ai",
    subtitle: "Plataforma de pronósticos con IA",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Pronósticos impulsados por IA que convierten datos históricos y señales del mercado en proyecciones de negocio precisas para planificar con confianza.",
    icon: TrendingUp,
    gradient: "from-amber-500 to-orange-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    external: "https://forecast9.thegreymatter.ai",
  },
  {
    slug: "duediligence9",
    title: "DueDiligence9.ai",
    subtitle: "Plataforma de due diligence con IA",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Acelera la evaluación de transacciones analizando automáticamente finanzas, riesgos y oportunidades de las empresas objetivo.",
    icon: Search,
    gradient: "from-teal-500 to-cyan-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    external: "https://duediligence9.thegreymatter.ai",
  },
  {
    slug: "benchmarkedoutcomes",
    title: "BenchmarkedOutcomes.ai",
    subtitle: "Benchmarking de contratación y talento",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Benchmarking de contratación con IA que evalúa candidatos frente a estándares específicos de cada rol para que las empresas tomen mejores decisiones de talento, más rápido.",
    icon: Award,
    gradient: "from-lime-500 to-green-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    external: "https://benchmark.thegreymatter.ai",
  },
  {
    slug: "integration9",
    title: "Integration9.ai",
    subtitle: "Plataforma de integración con IA",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Agiliza la integración post-fusión y de sistemas mapeando dependencias, identificando riesgos y dando seguimiento al avance.",
    icon: Link2,
    gradient: "from-fuchsia-500 to-pink-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    external: "https://integration9.thegreymatter.ai",
  },
  {
    slug: "exitready9",
    title: "ExitReady9.ai",
    subtitle: "Plataforma de preparación para la salida",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Ayuda a las empresas a prepararse para una adquisición o una salida a bolsa identificando brechas, fortaleciendo los generadores de valor y construyendo la narrativa de salida.",
    icon: DoorOpen,
    gradient: "from-[#FF6A3D] to-violet-500",
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    external: "https://exitready9.thegreymatter.ai",
  },
  {
    slug: "board9",
    title: "Board9.ai",
    subtitle: "Sistema operativo de juntas directivas con IA",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Sistema operativo completo para juntas directivas: preparación del board pack, reportes de gobierno corporativo, ingesta de datos financieros y KPIs, y redacción asistida por IA con exportación en múltiples formatos.",
    icon: LayoutGrid,
    gradient: "from-slate-600 to-zinc-500",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://board9.thegreymatter.ai",
  },
  {
    slug: "contracts9",
    title: "Contracts9.ai",
    subtitle: "Inteligencia del ciclo de vida de contratos",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Gestión del ciclo de vida de contratos con IA: extracción de cláusulas, puntuación de riesgo en 6 dimensiones, seguimiento de obligaciones y monitoreo de cumplimiento.",
    icon: FileText,
    gradient: "from-rose-500 to-red-500",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://contracts9.thegreymatter.ai",
  },
  {
    slug: "ddq9",
    title: "DDQ9.ai",
    subtitle: "Cuestionario de due diligence",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Plataforma integral de cuestionarios de due diligence para inversionistas LP y gestores de fondos: flujos de trabajo en varias fases, gestión documental y análisis con IA.",
    icon: ClipboardList,
    gradient: "from-sky-500 to-blue-500",
    stack: ["React", "TypeScript", "Node.js", "Azure SQL", "Cosmos DB", "Claude AI"],
    external: "https://ddq9.thegreymatter.ai",
  },
  {
    slug: "orgdesign9",
    title: "OrgDesign9.ai",
    subtitle: "Plataforma de diseño organizacional",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Diseño organizacional con IA: análisis de la estructura de la fuerza laboral, benchmarking de salud estructural, modelado de escenarios con costeo, generación de matrices RACI y planificación de la transición.",
    icon: Users,
    gradient: "from-violet-500 to-[#2DD4BF]",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://orgdesign9.thegreymatter.ai",
  },
  {
    slug: "pipeline9",
    title: "Pipeline9.ai",
    subtitle: "Inteligencia del pipeline de ventas",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Evaluación de la salud del pipeline de ventas con pronóstico de ingresos por IA, detección de cuellos de botella en la conversión, puntuación de riesgo de oportunidades y coaching con IA para vendedores.",
    icon: PieChart,
    gradient: "from-orange-500 to-amber-500",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Claude AI"],
    external: "https://pipeline9.thegreymatter.ai",
  },
  {
    slug: "swotanalysis9",
    title: "SWOTAnalysis9.ai",
    subtitle: "Plataforma de análisis estratégico",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Análisis FODA con IA: fortalezas, oportunidades, debilidades y amenazas con posicionamiento competitivo, seguimiento de iniciativas y exportaciones listas para la junta directiva.",
    icon: Shield,
    gradient: "from-teal-500 to-emerald-500",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://swotanalysis9.thegreymatter.ai",
  },
  {
    slug: "operate9",
    title: "Operate9.ai",
    subtitle: "Creación de valor operativo",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Diagnóstico operativo para empresas de portafolio de private equity: cascada de EBITDA, identificación de fugas de margen, priorización de palancas de creación de valor y seguimiento de los primeros 100 días.",
    icon: Factory,
    gradient: "from-lime-500 to-green-500",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://operate9.thegreymatter.ai",
  },
  {
    slug: "culture9",
    title: "Culture9.ai",
    subtitle: "Evaluación y transformación cultural",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Evaluación cultural con IA: mapeo con el Competing Values Framework, análisis de alineación de valores, puntuación de preparación para el cambio y compatibilidad cultural en fusiones y adquisiciones.",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://culture9.thegreymatter.ai",
  },
  {
    slug: "interview9",
    title: "Interview9.ai",
    subtitle: "Evaluación de entrevistas estructuradas",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Plataforma de entrevistas estructuradas: evaluación basada en rúbricas, puntuación consciente de sesgos y síntesis asistida por IA del feedback de los paneles sobre cada candidato.",
    icon: MessageSquare,
    gradient: "from-[#FF6A3D] to-blue-500",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://interview9.thegreymatter.ai",
  },
  {
    slug: "supplychain9",
    title: "SupplyChain9.ai",
    subtitle: "Evaluación de la cadena de suministro",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Evaluación integral de la cadena de suministro: mapeo de la red, seguimiento de KPIs, detección de cuellos de botella, mapeo de vulnerabilidades y riesgos, y modelado de escenarios de optimización.",
    icon: Truck,
    gradient: "from-orange-500 to-red-500",
    stack: ["React", "TypeScript", "Node.js", "Socket.io", "Cosmos DB", "Claude AI"],
    external: "https://supplychain9.thegreymatter.ai",
  },
  {
    slug: "nps9",
    title: "NPS9.ai",
    subtitle: "NPS y sentimiento del cliente",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Análisis de Net Promoter Score y sentimiento del cliente: orquestación de encuestas, segmentación por cohortes, extracción de temas con IA a partir de comentarios abiertos y seguimiento de tendencias.",
    icon: Gauge,
    gradient: "from-emerald-500 to-teal-500",
    stack: ["React", "TypeScript", "Node.js", "Cosmos DB", "Claude AI"],
    external: "https://nps9.thegreymatter.ai",
  },
  {
    slug: "fundraise9",
    title: "Fundraise9",
    subtitle: "Portal DDQ LP/GP para levantamiento de capital en PE",
    description:
      "Parte del ecosistema TheGreyMatter.ai. Gestión de ILPA DDQ 2.0 para el levantamiento de fondos de private equity: los GPs completan cuestionarios de due diligence estructurados con apoyo de Claude, los LPs revisan y comentan en tiempo real, y todo queda anclado a los documentos fuente de la firma mediante el etiquetado de 9Vectors.",
    icon: ClipboardList,
    gradient: "from-amber-500 to-rose-500",
    stack: ["React", "TypeScript", "Vite", "Node.js", "Express", "Socket.io", "Azure Cosmos DB", "Claude AI", "JWT", "Stripe"],
  },
  {
    slug: "budgetcopilot",
    title: "BudgetCopilot",
    subtitle: "Agente financiero con IA",
    description:
      "Tu agente financiero personal con IA que te ayuda a tomar el control de tu dinero. Gestiona presupuestos, da seguimiento a tus deudas, define metas de ahorro y recibe consejos personalizados para salir de deudas más rápido y construir patrimonio.",
    icon: Wallet,
    gradient: "from-green-500 to-emerald-500",
    stack: ["Next.js", "OpenAI", "Plaid", "PostgreSQL", "Vercel"],
    external: "https://budgetcopilot.app",
  },
  {
    slug: "waldoscodelab",
    title: "Waldo's Code Lab",
    subtitle: "Escuela de programación gratuita",
    description:
      "Una escuela de programación práctica y gratuita que ayuda a niños y adolescentes a aprender a programar paso a paso. Clases en vivo y sin relleno, enfocadas en habilidades prácticas que preparan a los jóvenes desarrolladores para oportunidades reales.",
    icon: GraduationCap,
    gradient: "from-amber-500 to-yellow-500",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    external: "https://waldoscodelab.com",
  },
  {
    slug: "babybloom",
    title: "BabyBloom",
    subtitle: "Seguimiento inteligente del bebé",
    description:
      "App de seguimiento del bebé con IA para familias. Registra tomas, sueño, pañales, hitos y crecimiento escribiendo en lenguaje natural. Genera reportes listos para el pediatra.",
    icon: Baby,
    gradient: "from-pink-500 to-rose-500",
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Vercel"],
    external: "https://baby-tracking-app-silk.vercel.app",
  },
  {
    slug: "shining-image-platform",
    title: "Plataforma Shining Image",
    subtitle: "Suite de operaciones del negocio",
    description:
      "Plataforma completa de operaciones con reservas, facturación y agenda para Shining Image of Texas. Simplifica la gestión de clientes y automatiza los flujos de trabajo del negocio.",
    icon: Sparkle,
    gradient: "from-cyan-500 to-teal-500",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    external: "https://shining-image.vercel.app",
  },
  {
    slug: "autospa-bqt",
    title: "AutoSpa BQT",
    subtitle: "Plataforma de detallado de autos a domicilio",
    description:
      "Sistema completo de reservas, facturación y agenda para AutoSpa, un negocio móvil que lleva el lavado de autos de lujo directamente a tu casa.",
    icon: Car,
    gradient: "from-red-500 to-rose-500",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    external: "https://autospabqt.com",
  },
];
