import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, BookOpen, Code, Mic, Brain } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Ahora — Osvaldo Restrepo",
  description:
    "En qué está trabajando Osvaldo Restrepo ahora mismo: proyectos actuales, aprendizaje, escritura y áreas de enfoque. Se actualiza con frecuencia.",
  openGraph: {
    title: "Ahora — Osvaldo Restrepo",
    description:
      "En qué está trabajando Osvaldo Restrepo ahora mismo: proyectos actuales, aprendizaje y áreas de enfoque.",
    url: "/es/now",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/now",
    languages: { en: "/now", es: "/es/now", "x-default": "/now" },
  },
};

export default function NowPageEs() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            En qué estoy ahora
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Última actualización: noviembre 2026 · <span className="text-green-600 dark:text-green-400 font-medium">Disponible para nuevos proyectos</span> · <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Ciudad de Panamá, Panamá</span>
          </p>
          <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
            Esta es una <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600 dark:hover:text-slate-300 transition-colors">página &quot;now&quot;</a>. Es como una página de &quot;sobre mí&quot;, pero centrada en lo que me ocupa en este momento de mi vida.
          </p>
        </Reveal>

        <Reveal staggerMs={80} className="mt-10 space-y-10">
          {/* Work */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#FF6A3D]/10 dark:bg-[#FF6A3D]/15">
                <Briefcase className="w-5 h-5 text-[#FF6A3D] dark:text-[#FF8A5B]" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Trabajo</h2>
            </div>
            <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                CTO de <strong className="text-slate-900 dark:text-white">TheGreyMatter.ai</strong> (desde marzo de 2026) — lidero <strong className="text-slate-900 dark:text-white">GreyMatter 3.0</strong>, la columna vertebral de la plataforma detrás de más de 17 apps verticales de IA (DueDiligence9, Forecast9, Contracts9, Culture9, OrgDesign9, Pipeline9, SupplyChain9, Board9 y más). Estoy construyendo los servicios compartidos de identidad, archivos y comunicaciones; servidores MCP que exponen Snapshot9 / 9Vectors / Measurement13 a Claude; sistemas agénticos (The Fixer, Vector_10, TheHacker); y clientes nativos para iOS + Android.
              </p>
              <p>
                En paralelo, sigo manteniendo y evolucionando <strong className="text-slate-900 dark:text-white">MILA</strong>, un asistente de IA para familias en la UCIN, y <strong className="text-slate-900 dark:text-white">BudgetCopilot</strong>, un agente de IA para finanzas personales.
              </p>
            </div>
          </section>

          {/* Learning */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Aprendiendo</h2>
            </div>
            <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Cursando mi <strong className="text-slate-900 dark:text-white">doctorado en IA con enfoque en investigación médica</strong> en la Universidad Tecnológica de Panamá. Actualmente investigo aplicaciones de IA en sistemas de apoyo a la decisión clínica.
              </p>
              <p>
                También estoy haciendo una <strong className="text-slate-900 dark:text-white">maestría en IA</strong> en el Tecnológico de Monterrey — profundizando en arquitecturas de deep learning, NLP y visión por computadora.
              </p>
            </div>
          </section>

          {/* Building */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Construyendo</h2>
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                Servidores MCP (Model Context Protocol) que exponen APIs reales de producto a agentes de Claude — con autenticación, rate limiting y registros de auditoría
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                Sistemas de IA agéntica para remediación de cumplimiento, análisis basado en ontologías y escaneo automatizado de seguridad
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                Clientes nativos para iOS (Swift + SwiftUI) y Android (Kotlin) con federación OAuth contra el núcleo de la plataforma
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                Pipelines de GraphRAG que combinan grafos de conocimiento con recuperación vectorial
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                Este portafolio — siempre sumando funciones, artículos y experimentos
              </li>
            </ul>
          </section>

          {/* Interested In */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <Brain className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Me interesa</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Agentes de IA en producción",
                "Model Context Protocol",
                "GraphRAG",
                "Inferencia de IA en el edge",
                "IA en salud",
                "Herramientas para desarrolladores",
                "Enseñar programación a niños",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-sm border border-amber-200 dark:border-amber-800"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          {/* Teaching */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                <Mic className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Enseñando</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Dirijo <strong className="text-slate-900 dark:text-white">Waldo&apos;s Code Lab</strong> — una escuela de programación gratuita que ayuda a niños y adolescentes a aprender a programar paso a paso. Si conoces a algún chico o chica con curiosidad por el código, envíalo a{" "}
              <a href="https://waldoscodelab.com" target="_blank" rel="noopener noreferrer" className="text-[#FF6A3D] dark:text-[#FF8A5B] underline hover:no-underline">
                waldoscodelab.com
              </a>.
            </p>
          </section>
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            ¿Quieres que trabajemos juntos o solo saludar?
          </p>
          <Link
            href="/es/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4C] text-white font-medium hover:from-[#FF7E54] hover:to-[#FF9B63] transition-all shadow-lg shadow-[#FF6A3D]/25"
          >
            Escríbeme
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </main>
  );
}
