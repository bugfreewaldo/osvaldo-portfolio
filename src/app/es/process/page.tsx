"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import {
  Target, Shield, TrendingUp, ArrowRight,
  CheckCircle, XCircle, Zap, MessageSquare, Clock,
  Search, Code, BarChart3, Settings, Bot, Brain
} from "lucide-react";

// Animated background
function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}

// What you get promises
const promises = [
  {
    icon: Zap,
    title: "Velocidad sin atajos",
    description: "Entrego rápido, pero sin recortar calidad. Recibes software que funciona, no demos que se caen a pedazos.",
  },
  {
    icon: MessageSquare,
    title: "Hablo claro",
    description: "Si algo no va a funcionar, te lo digo antes de que perdamos tiempo y dinero. Sin rodeos.",
  },
  {
    icon: Shield,
    title: "Listo para producción",
    description: "Todo lo que construyo está pensado desde el primer día para usuarios reales, carga real y casos límite reales.",
  },
  {
    icon: TrendingUp,
    title: "Resultados medibles",
    description: "Definimos el éxito desde el inicio. Si no lo podemos medir, no lo construimos.",
  },
];

// What I don't do
const noBs = [
  "Prometer de más y entregar de menos",
  "Meter IA solo por meter IA",
  "Desaparecer semanas sin dar noticias",
  "Entregar y desaparecer — yo me quedo",
  "Cobrarte investigación que no necesitas",
  "Esconderme detrás de tecnicismos cuando algo sale mal",
];

// What you actually get
const deliverables = [
  "Actualizaciones semanales de avance (async o en llamada, como prefieras)",
  "Demos funcionales que de verdad puedes probar",
  "Documentación de entrega clara al terminar",
  "Soporte on-call en lanzamientos críticos",
  "Estimaciones de tiempo honestas (con margen para la realidad)",
  "Acceso directo — sin account managers de por medio",
];

// Process phases - simplified and friendly
const phases = [
  {
    icon: Search,
    step: "01",
    title: "Descubrimos lo que realmente necesitas",
    description: "No lo que está de moda. No lo que suena bonito. Lo que de verdad va a mover la aguja en tu negocio.",
    details: [
      "Llamada de descubrimiento de 1-2 horas para entender tus puntos de dolor",
      "Te diré si la IA es siquiera la solución correcta",
      "Alcance claro con métricas de éxito acordadas entre los dos",
    ],
    gradient: "from-[#FF6A3D] to-[#FF8A4C]",
  },
  {
    icon: Code,
    step: "02",
    title: "Construir algo real, rápido",
    description: "En 1-2 semanas tendrás algo funcionando para probar. No un PowerPoint — software de verdad.",
    details: [
      "Versión mínima viable de la funcionalidad principal",
      "Puedes usarlo, probarlo y romperlo",
      "Feedback temprano antes de invertir más tiempo",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Asegurar que realmente funcione",
    description: "Pruebas reales con escenarios reales. Atrapamos los casos límite antes que tus usuarios.",
    details: [
      "Pruebas contra tus casos de uso reales",
      "Encontrar y corregir lo raro",
      "Asegurar que sea seguro y confiable",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Settings,
    step: "04",
    title: "Lanzarlo y darle soporte",
    description: "El lanzamiento es solo el comienzo. Me aseguro de que siga funcionando y mejorando.",
    details: [
      "Despliegue sin fricciones para tus usuarios",
      "Monitoreo para detectar problemas rápido",
      "Iterar con base en datos de uso reales",
    ],
    gradient: "from-rose-500 to-orange-500",
  },
];

export default function ProcessPageEs() {
  return (
    <main className="relative min-h-screen">
      <GridBackground />

      {/* Hero */}
      <section className="relative pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-[#FF6A3D] dark:text-[#FF8A5B]">
              Cómo trabajo
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-slate-900 dark:text-white">Sin relleno. </span>
            <span className="bg-gradient-to-r from-[#FF6A3D] via-[#FF7E54] to-[#2DD4BF] bg-clip-text text-transparent">
              Solo resultados.
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Así es realmente trabajar conmigo.
            Sin teatro corporativo de procesos. Sin morir en reuniones.
            Solo construir cosas que funcionan.
          </motion.p>
        </div>
      </section>

      {/* What You Get */}
      <section className="relative py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Lo que obtienes cuando soy tu socio en IA
          </motion.h2>

          <Reveal staggerMs={80} className="grid sm:grid-cols-2 gap-6">
            {promises.map((promise) => (
              <div
                key={promise.title}
                className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-[#FF6A3D]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
                    <promise.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg">
                      {promise.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      {promise.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* No BS Section */}
      <section className="relative py-12 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <Reveal staggerMs={120} className="grid md:grid-cols-2 gap-8">
            {/* What I Don't Do */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" />
                Lo que no hago
              </h3>
              <ul className="space-y-3">
                {noBs.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Get */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Lo que realmente obtienes
              </h3>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              El proceso (simple)
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Cuatro fases. Objetivos claros. Sin misterio. Siempre sabes dónde estamos y qué sigue.
            </p>
          </motion.div>

          <Reveal staggerMs={80} className="space-y-6">
            {phases.map((phase) => (
              <div key={phase.step} className="group">
                <div className="p-6 sm:p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-[#FF6A3D]/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center`}>
                        <phase.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-mono text-[#FF6A3D] dark:text-[#FF8A5B]">
                          {phase.step}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {phase.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 mb-4">
                        {phase.description}
                      </p>
                      <ul className="space-y-2">
                        {phase.details.map((detail, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-500"
                          >
                            <CheckCircle className="w-4 h-4 text-[#FF6A3D] mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Timeline Expectation */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-[#FF6A3D]/5 to-[#2DD4BF]/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-[#FF6A3D]/20"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Tiempos típicos
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  <strong>Primer demo funcional:</strong> 1-2 semanas. <strong>Listo para producción:</strong> 4-8 semanas,
                  según la complejidad. Te doy una estimación honesta desde el inicio y te aviso de inmediato
                  si algo cambia.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                  Cada proyecto es distinto. A veces va más rápido. A veces descubrimos complejidad.
                  Sea como sea, nunca te llevarás sorpresas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yes, I Use AI */}
      <section className="relative py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#FF6A3D]/10 to-[#2DD4BF]/10 border border-purple-500/20"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Sí, uso IA para construir. Y tú también deberías.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-3">
                  Seamos realistas: soy ingeniero de IA. Claro que uso IA en mi flujo de trabajo.
                  Copilot, Claude, GPT — están en mi caja de herramientas todos los días. Sería absurdo no hacerlo.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-3">
                  <strong className="text-slate-900 dark:text-white">Qué significa esto para ti:</strong> Trabajas con alguien que sabe aprovechar estas herramientas
                  para avanzar más rápido sin sacrificar calidad. No copio y pego a ciegas lo que genera la IA —
                  reviso, pruebo y asumo total responsabilidad por cada línea de código que sale a producción.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Asistido por IA, verificado por humanos</p>
                      <p className="text-sm text-slate-500">Cada resultado lo reviso, lo pruebo y me hago responsable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Iteración más rápida</p>
                      <p className="text-sm text-slate-500">Más prototipos, más opciones, menos tiempo perdido.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#FF6A3D] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Uso responsable</p>
                      <p className="text-sm text-slate-500">Nada de datos sensibles en los prompts. Nada de confianza ciega en los resultados.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Responsabilidad total</p>
                      <p className="text-sm text-slate-500">¿Lo escribió la IA? No importa. Si lo entrego, es mío.</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  Si buscas a alguien que finja que la IA no existe, no soy la persona indicada.
                  Pero si quieres a alguien que sepa usarla <em>bien</em> para darte resultados más rápido — hablemos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            ¿Listo para construir algo real?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Cuéntame qué quieres resolver. Sin compromiso, sin necesidad de pitch deck.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/es/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4C] text-white font-medium hover:from-[#FF7E54] hover:to-[#FF9B63] transition-all shadow-lg shadow-[#FF6A3D]/25"
            >
              Hablemos
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/es/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Ver trabajos anteriores
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
