import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Cpu, MessageSquare, Zap, MapPin, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Ingeniero de IA en Panamá — Osvaldo Restrepo",
  description:
    "Osvaldo Restrepo es uno de los pocos ingenieros de inteligencia artificial en Panamá, construyendo LLMs, sistemas RAG, agentes de IA y voz AI para empresas en Latinoamérica y Estados Unidos. 10+ años de experiencia, 20+ productos de IA enviados.",
  keywords: [
    "Ingeniero de IA Panamá",
    "Desarrollador de IA Panamá",
    "AI Engineer Panama",
    "Inteligencia Artificial Panamá",
    "Machine Learning Panamá",
    "Consultor de IA Panamá",
    "Ingeniero de IA Latinoamérica",
    "Ingeniero de IA Centroamérica",
    "Desarrollador de Inteligencia Artificial",
    "Osvaldo Restrepo Panamá",
  ],
  alternates: { canonical: "/es/ai-engineer-panama" },
  openGraph: {
    title: "Ingeniero de IA en Panamá — Osvaldo Restrepo",
    description:
      "Uno de los pocos ingenieros de IA en Panamá. Construyendo LLMs, sistemas RAG, agentes de IA y voz AI para empresas en Latinoamérica y EE.UU.",
    url: "/es/ai-engineer-panama",
    type: "website",
    locale: "es_PA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Osvaldo Restrepo — Ingeniería de IA",
  description:
    "Servicios de ingeniería de inteligencia artificial desde Panamá. LLMs en producción, sistemas RAG, agentes de IA, voz AI y automatización inteligente para empresas en Latinoamérica y globalmente.",
  url: "https://osvaldorestrepo.dev/es/ai-engineer-panama",
  image: "https://osvaldorestrepo.dev/og.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de Panamá",
    addressRegion: "Panamá",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.9824,
    longitude: -79.5199,
  },
  areaServed: [
    { "@type": "Country", name: "Panamá" },
    { "@type": "Country", name: "Estados Unidos" },
    { "@type": "Country", name: "Canadá" },
    { "@type": "Country", name: "Colombia" },
    { "@type": "Country", name: "México" },
    { "@type": "Country", name: "Costa Rica" },
    { "@type": "Continent", name: "América Latina" },
  ],
  founder: { "@id": "https://osvaldorestrepo.dev/#person" },
  priceRange: "$$",
  inLanguage: "es",
};

const services = [
  {
    icon: Brain,
    title: "LLMs y Sistemas RAG",
    description:
      "Pipelines de generación aumentada por recuperación en producción, ingeniería de prompts, fine-tuning y frameworks de evaluación para aplicaciones de IA empresarial.",
    tech: ["LangChain", "OpenAI", "Claude", "Pinecone", "ChromaDB"],
  },
  {
    icon: MessageSquare,
    title: "Agentes de IA y Automatización",
    description:
      "Agentes autónomos con llamada a herramientas, memoria, razonamiento multi-paso y handoffs humanos que realmente funcionan en producción.",
    tech: ["CrewAI", "Function Calling", "MCP", "n8n"],
  },
  {
    icon: Cpu,
    title: "Sistemas de Voz AI",
    description:
      "Agentes de voz end-to-end para sistemas telefónicos — reconocimiento de voz, síntesis, conversación en tiempo real y reemplazo de IVR.",
    tech: ["Twilio", "Whisper", "ElevenLabs", "WebRTC"],
  },
  {
    icon: Zap,
    title: "Aplicaciones Full-Stack con IA",
    description:
      "Aplicaciones web completas potenciadas por IA — desde frontend hasta backend, base de datos hasta deployment, con frameworks modernos.",
    tech: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis"],
  },
];

const stats = [
  { value: "10+", label: "Años de Ingeniería" },
  { value: "20+", label: "Productos de IA" },
  { value: "10+", label: "Países Atendidos" },
  { value: "PhD", label: "Investigación" },
];

export default function AIEngineerPanamaES() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Basado en Ciudad de Panamá, Panamá
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Ingeniero de IA en{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Panamá
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Soy Osvaldo Restrepo — uno de los pocos ingenieros de inteligencia artificial basados en Panamá
              construyendo LLMs, sistemas RAG, agentes autónomos y voz AI para empresas en Latinoamérica y
              Estados Unidos.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
              <Globe className="w-4 h-4" />
              <span className="text-sm">
                Sirviendo clientes en Panamá, EE.UU., Canadá, Colombia, México, Costa Rica y toda Latinoamérica
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              >
                Trabajemos Juntos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Ver Proyectos
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Servicios de Ingeniería de IA
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Sistemas de IA en producción — no demos, no pruebas de concepto. Sistemas que corren 24/7 con tráfico real.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800"
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Panama */}
        <section className="py-20 px-4 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white text-center">
              ¿Por Qué un Ingeniero de IA en Panamá?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto">
              Panamá está en la encrucijada de las Américas — la misma zona horaria que la costa este de EE.UU., bilingüe
              (inglés/español), y un hub tecnológico en crecimiento. Traigo ingeniería de IA de nivel Silicon Valley con
              entendimiento cultural latinoamericano.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Para Empresas de EE.UU. y Canadá
                </h3>
                <ul className="space-y-2">
                  {[
                    "Misma zona horaria (EST/CST)",
                    "Inglés y español nativos",
                    "10+ años de experiencia remota con cultura laboral estadounidense",
                    "Costo-efectivo sin comprometer calidad",
                    "Experiencia en cumplimiento HIPAA y GDPR",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Para Empresas Latinoamericanas
                </h3>
                <ul className="space-y-2">
                  {[
                    "Español nativo, entiende los mercados LATAM",
                    "Expertise en IA raro en la región",
                    "Puente entre tecnología de EE.UU. y necesidades locales",
                    "Metodología de investigación respaldada por PhD",
                    "Track record comprobado con clientes LATAM",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Lee Más Sobre Ingeniería de IA desde Panamá
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/es/blog/ai-engineering-panama"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors text-sm"
              >
                Ingeniería de IA en Panamá
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/es/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                Todos los Artículos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Construyamos Algo Juntos
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              ¿Buscas un ingeniero de IA que envíe sistemas en producción? Ya sea que estés en Panamá, Latinoamérica
              o cualquier parte del mundo — hablemos.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              >
                Contáctame
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
