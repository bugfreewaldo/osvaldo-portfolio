import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Clock, Users, DollarSign, CheckCircle, Zap } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Casos de estudio — Osvaldo Restrepo",
  description:
    "Casos de estudio reales de ingeniería de IA por Osvaldo Restrepo. Análisis detallados de sistemas en producción: el problema, el enfoque, las decisiones de arquitectura y los resultados medibles.",
  keywords: [
    "casos de estudio IA",
    "portafolio ingeniería de IA",
    "sistemas de IA en producción",
    "caso de estudio RAG",
    "caso de estudio IA de voz",
    "LLM en producción",
  ],
  openGraph: {
    title: "Casos de estudio — Osvaldo Restrepo",
    description:
      "Análisis detallados de sistemas de IA en producción: el problema, el enfoque, la arquitectura y los resultados medibles.",
    url: "/es/case-studies",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/case-studies",
    languages: { en: "/case-studies", es: "/es/case-studies", "x-default": "/case-studies" },
  },
};

const caseStudies = [
  {
    slug: "mila-neonatal-llm",
    title: "MILA — Asistente LLM neonatal",
    client: "Sistema hospitalario (Panamá)",
    duration: "4 meses",
    category: "IA en salud",
    gradient: "from-purple-500 to-indigo-500",
    problem:
      "El personal del hospital no lograba redactar de forma consistente actualizaciones claras y empáticas para los padres en la UCIN. Los mensajes eran demasiado técnicos, demasiado breves o les faltaban referencias críticas a las políticas. Los padres quedaban confundidos en el momento más estresante de sus vidas.",
    approach: [
      "Construí un pipeline RAG sobre las políticas y protocolos del hospital con LangChain + Pinecone",
      "Creé una interfaz sencilla para que el personal clínico redacte mensajes con verificaciones automáticas de claridad",
      "Implementé acceso basado en roles con trazabilidad completa para cumplimiento normativo en salud",
      "Agregué un paso obligatorio de aprobación humana — ninguna comunicación con pacientes es totalmente automática",
    ],
    results: [
      { metric: "42%", label: "Redacción de actualizaciones más rápida", icon: Clock },
      { metric: "97%", label: "Precisión en referencias a políticas", icon: CheckCircle },
      { metric: "0", label: "Errores factuales en 300+ mensajes", icon: Zap },
      { metric: "82%", label: "Adopción del personal en el primer mes", icon: Users },
    ],
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI", "PostgreSQL", "Next.js"],
    lesson:
      "El mayor reto no fue la IA — fue ganarse la confianza de un personal clínico escéptico ante la idea de que la IA tocara la comunicación con pacientes. El paso obligatorio de aprobación humana fue la clave de la adopción.",
  },
  {
    slug: "ai-voice-agent",
    title: "Agente de voz — Shining Image",
    client: "Shining Image of Texas (pequeña empresa)",
    duration: "3 meses",
    category: "IA de voz",
    gradient: "from-[#FF6A3D] to-cyan-500",
    problem:
      "Una empresa de limpieza de ventanas perdía el 30-40% de las llamadas al buzón de voz — quienes llamaban durante los trabajos, fuera de horario o los fines de semana simplemente llamaban a la siguiente empresa. Cada llamada perdida eran $200-500 en ingresos perdidos.",
    approach: [
      "Construí un agente de voz sobre Twilio que contesta las llamadas como una recepcionista real",
      "Lo entrené con preguntas frecuentes, precios y disponibilidad usando una base de conocimiento propia",
      "Agregué agendamiento real — la IA programa citas de verdad, no solo toma mensajes",
      "Implementé un traspaso inteligente: las llamadas complejas o emocionales pasan a una persona con todo el contexto",
    ],
    results: [
      { metric: "62%", label: "Reducción de llamadas perdidas", icon: TrendingUp },
      { metric: "39%", label: "Tasa de llamada a cita (desde 24%)", icon: Users },
      { metric: "68%", label: "Llamadas resueltas por completo por la IA", icon: Zap },
      { metric: "$2-3K", label: "Ahorro mensual en trabajos recuperados", icon: DollarSign },
    ],
    stack: ["Python", "Twilio", "Whisper", "GPT-4", "ElevenLabs", "WebSockets", "PostgreSQL"],
    lesson:
      "El 'traspaso inteligente' fue la funcionalidad más importante. Saber CUÁNDO transferir a una persona — detectar frustración, preguntas complejas u oportunidades de alto valor — marcó la diferencia entre una herramienta útil y un robot molesto.",
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Reconciler — de Stripe a QuickBooks",
    client: "Shining Image of Texas",
    duration: "2 meses",
    category: "Automatización",
    gradient: "from-cyan-500 to-emerald-500",
    problem:
      "La conciliación manual entre los pagos de Stripe y QuickBooks tomaba más de 8 horas por semana. Las comisiones se agrupaban por payout, lo que hacía casi imposible cuadrar partida por partida. Los errores contables eran frecuentes.",
    approach: [
      "Construí un pipeline automatizado que obtiene los payouts de Stripe con el desglose de comisiones vía API",
      "Desagregué las comisiones a nivel de payout hasta cada transacción individual",
      "Generé automáticamente asientos contables en QuickBooks con la categorización correcta",
      "Agregué un dashboard de revisión para que el dueño apruebe antes de registrar los asientos",
    ],
    results: [
      { metric: "$0", label: "Diferencia en la conciliación", icon: CheckCircle },
      { metric: "70%+", label: "Reducción del trabajo contable manual", icon: Clock },
      { metric: "8hrs", label: "Ahorradas por semana", icon: TrendingUp },
      { metric: "100%", label: "Precisión en la atribución de comisiones", icon: Zap },
    ],
    stack: ["TypeScript", "Node.js", "Stripe API", "QuickBooks API", "PostgreSQL", "React"],
    lesson:
      "Lo más difícil fue mapear la estructura de payouts de Stripe al catálogo de cuentas de QuickBooks. Cada negocio tiene una configuración contable única, así que el mapeo tenía que ser configurable, no fijo en el código.",
  },
];

export default function CaseStudiesPageEs() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <Reveal className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Casos de estudio
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Análisis detallados de sistemas reales que he construido y están en producción. El problema, el enfoque,
            las decisiones de arquitectura y los resultados medibles.
          </p>
        </Reveal>

        <Reveal staggerMs={80} className="space-y-16">
          {caseStudies.map((cs, idx) => (
            <article
              key={cs.slug}
              className="relative rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${cs.gradient} p-8 text-white`}>
                <div className="flex flex-wrap items-center gap-3 text-sm opacity-90 mb-3">
                  <span>{cs.category}</span>
                  <span>·</span>
                  <span>{cs.client}</span>
                  <span>·</span>
                  <span>{cs.duration}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">{cs.title}</h2>
              </div>

              <div className="p-8 space-y-8">
                {/* Problem */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    El problema
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {cs.problem}
                  </p>
                </section>

                {/* Approach */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    El enfoque
                  </h3>
                  <ul className="space-y-2">
                    {cs.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6A3D]/10 dark:bg-[#FF6A3D]/15 text-[#FF6A3D] dark:text-[#FF8A5B] text-sm font-bold flex items-center justify-center mt-0.5">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Results */}
                <section>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    Los resultados
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {cs.results.map((r) => (
                      <div
                        key={r.label}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-center"
                      >
                        <r.icon className="w-5 h-5 text-[#FF6A3D] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-slate-900 dark:text-white">
                          {r.metric}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Tech Stack */}
                <section>
                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    Stack tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Key Lesson */}
                <section className="p-5 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
                  <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                    Lección clave
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic">
                    &ldquo;{cs.lesson}&rdquo;
                  </p>
                </section>

                {/* Link to project */}
                <Link
                  href={`/es/projects/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-[#FF6A3D] dark:text-[#FF8A5B] font-medium hover:underline text-sm"
                >
                  Ver detalles completos del proyecto
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            ¿Tienes un reto similar?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Construyo sistemas de IA que resuelven problemas reales de negocio. Hablemos del tuyo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
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
              Todos los proyectos
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
