import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Cpu, MessageSquare, Zap, MapPin, Globe, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Engineer in Panama — Osvaldo Restrepo",
  description:
    "Osvaldo Restrepo is one of the few AI engineers based in Panama, building production LLMs, RAG systems, AI agents, and voice AI for companies across Latin America and the US. 10+ years of experience, 20+ AI products shipped.",
  keywords: [
    "AI Engineer Panama",
    "AI Developer Panama",
    "Ingeniero de IA Panamá",
    "Machine Learning Panama",
    "LLM Engineer Panama",
    "AI Consultant Panama",
    "AI Engineer Latin America",
    "AI Engineer Central America",
    "Artificial Intelligence Panama",
    "Osvaldo Restrepo Panama",
    "Panama AI Developer",
    "Desarrollador de IA Panamá",
    "Inteligencia Artificial Panamá",
  ],
  alternates: { canonical: "/ai-engineer-panama" },
  openGraph: {
    title: "AI Engineer in Panama — Osvaldo Restrepo",
    description:
      "One of the few AI engineers based in Panama. Building production LLMs, RAG systems, AI agents, and voice AI for companies across Latin America and the US.",
    url: "/ai-engineer-panama",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Osvaldo Restrepo — AI Engineering",
  description:
    "AI engineering services from Panama. Production LLMs, RAG systems, AI agents, voice AI, and intelligent automation for businesses in Latin America and globally.",
  url: "https://osvaldorestrepo.dev/ai-engineer-panama",
  image: "https://osvaldorestrepo.dev/og.png",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Panama City",
    addressRegion: "Panamá",
    addressCountry: "PA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.9824,
    longitude: -79.5199,
  },
  areaServed: [
    { "@type": "Country", name: "Panama" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Spain" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "Colombia" },
    { "@type": "Country", name: "Mexico" },
    { "@type": "Country", name: "Costa Rica" },
    { "@type": "Country", name: "Brazil" },
    { "@type": "Country", name: "Argentina" },
    { "@type": "Continent", name: "Europe" },
    { "@type": "Continent", name: "Latin America" },
    { "@type": "Continent", name: "North America" },
  ],
  founder: {
    "@id": "https://osvaldorestrepo.dev/#person",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "RAG Systems",
    "AI Agents",
    "Voice AI",
    "Machine Learning",
    "Full Stack Development",
  ],
  priceRange: "$$",
  sameAs: [
    "https://github.com/bugfreewaldo",
    "https://linkedin.com/in/osvaldorestrepo",
  ],
};

const services = [
  {
    icon: Brain,
    title: "LLMs & RAG Systems",
    description:
      "Production retrieval-augmented generation pipelines, prompt engineering, fine-tuning, and evaluation frameworks for enterprise AI applications.",
    tech: ["LangChain", "OpenAI", "Claude", "Pinecone", "ChromaDB"],
  },
  {
    icon: MessageSquare,
    title: "AI Agents & Automation",
    description:
      "Autonomous agents with tool-calling, memory, multi-step reasoning, and human-in-the-loop handoffs that actually work in production.",
    tech: ["CrewAI", "Function Calling", "MCP", "n8n"],
  },
  {
    icon: Cpu,
    title: "Voice AI Systems",
    description:
      "End-to-end voice agents for phone systems — speech recognition, synthesis, real-time conversation, and IVR replacement.",
    tech: ["Twilio", "Whisper", "ElevenLabs", "WebRTC"],
  },
  {
    icon: Zap,
    title: "Full-Stack AI Applications",
    description:
      "Complete web applications powered by AI — from frontend to backend, database to deployment, with modern frameworks and best practices.",
    tech: ["Next.js", "TypeScript", "Python", "PostgreSQL", "Redis"],
  },
];

const stats = [
  { value: "10+", label: "Years Engineering" },
  { value: "20+", label: "AI Products Shipped" },
  { value: "10+", label: "Countries Served" },
  { value: "PhD", label: "Research Background" },
];

const clients = [
  "Healthcare systems (HIPAA-compliant AI)",
  "Financial services (fraud detection, automation)",
  "SaaS platforms (AI-powered features)",
  "Small businesses (voice agents, workflow automation)",
  "Enterprise (strategic assessment, business intelligence)",
];

export default function AIEngineerPanama() {
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
              Based in Panama City, Panama
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI Engineer in{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Panama
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I&apos;m Osvaldo Restrepo — one of the few AI engineers based in Panama building production-grade
              LLMs, RAG systems, autonomous agents, and voice AI for companies across Latin America and the
              United States.
            </p>

            <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
              <Globe className="w-4 h-4" />
              <span className="text-sm">
                Serving clients in Panama, USA, Canada, Colombia, Mexico, Costa Rica, and across Latin America
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              >
                Work With Me
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                View Projects
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
                AI Engineering Services
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Production AI systems — not demos, not proofs of concept. Systems that run 24/7 and handle real traffic.
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
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 rounded-md"
                      >
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
              Why an AI Engineer in Panama?
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl mx-auto">
              Panama sits at the crossroads of the Americas — the same timezone as the US East Coast, bilingual
              (English/Spanish), and a growing tech hub. I bring Silicon Valley-grade AI engineering with Latin
              American cultural understanding and competitive rates.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  For US & Canadian Companies
                </h3>
                <ul className="space-y-2">
                  {[
                    "Same timezone (EST/CST overlap)",
                    "Native-level English + Spanish",
                    "US work culture experience (10+ years remote)",
                    "Cost-effective without quality compromise",
                    "HIPAA, GDPR compliance experience",
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
                  For Latin American Companies
                </h3>
                <ul className="space-y-2">
                  {[
                    "Spanish-native, understands LATAM markets",
                    "AI expertise rare in the region",
                    "Can bridge US tech with local needs",
                    "PhD-backed research methodology",
                    "Proven track record with LATAM clients",
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

        {/* Industries */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Industries I&apos;ve Worked With
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Blog CTA */}
        <section className="py-16 px-4 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Read More About AI Engineering from Panama
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              I write about building production AI systems, engineering best practices, and the state of AI in
              Latin America.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/ai-engineering-panama"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors text-sm"
              >
                AI Engineering in Panama
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog/building-ai-agents-production"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors text-sm"
              >
                Building AI Agents
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              Let&apos;s Build Something Together
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Looking for an AI engineer who ships production systems? Whether you&apos;re in Panama, Latin America,
              or anywhere in the world — let&apos;s talk.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-lg hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
