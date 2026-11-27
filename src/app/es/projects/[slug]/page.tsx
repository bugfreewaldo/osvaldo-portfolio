"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Heart } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";

/** ---------- Data model ---------- */
type Project = {
  title: string;
  subtitle: string;
  summary: string;
  story?: string;           // Personal "why" behind the project
  problem?: string;
  approach?: string[];
  impact?: string[];        // Human-readable impact statements
  stack: string[];
  links?: { label: string; href: string }[];
  gradient: string;
};

/** ---------- Projects data ---------- */
const DATA: Record<string, Project> = {
  "mila-neonatal-llm": {
    title: "MILA",
    subtitle: "Asistente neonatal con LLM",
    gradient: "from-purple-500 to-indigo-500",
    summary:
      "Un asistente de IA que ayuda al personal del hospital a comunicarse con más claridad con los padres de bebés en la UCIN.",
    story:
      "MILA lleva el nombre de mi hija, Mila. Nació prematura en un hospital público de Panamá y, trágicamente, la perdimos. La comunicación entre el personal médico y nosotros como padres era fragmentada y poco clara: muchas veces no entendíamos qué estaba pasando ni cuáles eran los siguientes pasos. Este proyecto existe porque ningún padre debería vivir esa confusión en los momentos más difíciles de su vida. MILA ayuda al personal clínico a escribir actualizaciones claras y compasivas para que las familias siempre sepan qué está pasando con su bebé.",
    problem:
      "El personal del hospital está saturado y muchas veces no tiene tiempo para escribir actualizaciones detalladas a los padres. Cuando lo hace, el lenguaje puede ser demasiado técnico o inconsistente. Los padres quedan confundidos y angustiados.",
    approach: [
      "Construí un sistema que lee las políticas y protocolos del hospital para ayudar al personal a redactar actualizaciones precisas",
      "Creé una interfaz sencilla donde el personal clínico redacta mensajes rápidamente y estos se revisan automáticamente para asegurar su claridad",
      "Agregué control de acceso por roles para que solo el personal autorizado pueda usarlo, con trazabilidad completa para auditorías y cumplimiento",
      "Cada mensaje pasa por aprobación humana antes de enviarse: no hay comunicación totalmente automatizada",
    ],
    impact: [
      "El personal clínico ahora redacta las actualizaciones para los padres un 42% más rápido, ahorrando unos 48 minutos por turno",
      "El 97% de los mensajes ahora incluye las referencias de política correctas, frente a una cobertura inconsistente antes",
      "Cero errores factuales en más de 300 mensajes revisados gracias al paso de aprobación humana",
      "El 82% del personal lo adoptó durante el primer mes: de verdad les facilita el trabajo",
      "Los mensajes ahora se escriben con un nivel de lectura de octavo grado, lo que los hace más fáciles de entender para todos los padres",
    ],
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI", "PostgreSQL", "Next.js"],
    links: [
      { label: "Visitar MILA", href: "https://mila-drab.vercel.app/" },
    ],
  },

  "ai-voice-agent": {
    title: "Agente de voz",
    subtitle: "Shining Image",
    gradient: "from-[#FF6A3D] to-cyan-500",
    summary:
      "Un agente telefónico con IA que contesta llamadas 24/7, agenda citas y sabe cuándo transferir a una persona.",
    story:
      "Shining Image es un negocio de limpieza de ventanas de un amigo cercano. Estaban perdiendo clientes porque las llamadas fuera de horario iban al buzón de voz, y la mayoría de la gente simplemente llamaba a la siguiente empresa. No podían pagar a alguien para contestar el teléfono todo el día. Construí este agente para que cada llamada sea atendida, cada cliente potencial reciba ayuda y el negocio nunca pierda una oportunidad.",
    problem:
      "Los pequeños negocios de servicios pierden entre el 30% y el 40% de las llamadas porque no pueden contestar mientras trabajan, fuera de horario o los fines de semana. Cada llamada perdida puede significar cientos de dólares en ingresos perdidos.",
    approach: [
      "Conectado al sistema telefónico mediante Twilio para que conteste las llamadas como una recepcionista real",
      "Entrenado para responder preguntas frecuentes sobre servicios, precios y disponibilidad",
      "Capacidad de reserva integrada para que agende citas de verdad, no solo tome mensajes",
      "Transferencia inteligente: si alguien pregunta algo complejo o suena frustrado, pasa la llamada a una persona con todo el contexto",
    ],
    impact: [
      "Las llamadas perdidas bajaron un 62%: el negocio ahora capta prospectos 24/7",
      "La tasa de reservas subió del 24% al 39%: más personas que llaman se convierten en clientes",
      "El 68% de las llamadas las resuelve la IA por completo, sin intervención humana",
      "El tiempo promedio para devolver una llamada bajó de más de 2 horas a solo 27 minutos",
      "El dueño estima que esto le ahorra entre $2,000 y $3,000 al mes en trabajos que se habrían perdido",
    ],
    stack: ["Python", "Twilio", "Whisper", "GPT-4", "WebSockets", "ElevenLabs", "PostgreSQL"],
    links: [
      { label: "Llama a la demo en vivo", href: "tel:+17372774602" },
    ],
  },

  "stripe-qb-reconcile": {
    title: "Conciliador",
    subtitle: "Stripe → QuickBooks",
    gradient: "from-emerald-500 to-teal-500",
    summary:
      "Sincroniza automáticamente los pagos de Stripe con QuickBooks para que la contabilidad siempre esté limpia y lista para auditoría.",
    story:
      "Un cliente pasaba más de 7 horas cada mes cuadrando manualmente las transacciones de Stripe con QuickBooks. Era tedioso, propenso a errores y lo detestaban. Cuando llegaba la temporada de impuestos, su contador encontraba discrepancias que tomaban días en resolverse. Automaticé todo el proceso: ahora sus libros cierran en una fracción del tiempo y los números siempre cuadran.",
    problem:
      "Stripe genera cientos de transacciones individuales, pero los contadores quieren libros limpios y ordenados. Cuadrar a mano comisiones, reembolsos y liquidaciones es una pesadilla que produce errores y tiempo perdido.",
    approach: [
      "Escucha cada liquidación de Stripe y agrupa automáticamente todas las transacciones relacionadas",
      "Crea un solo asiento de gasto limpio en QuickBooks por liquidación: se acabaron los asientos individuales desordenados",
      "Salvaguardas integradas que evitan asientos duplicados aunque el sistema se ejecute dos veces",
      "Alertas automáticas para casos especiales como disputas o pagos fallidos",
    ],
    impact: [
      "El tiempo de conciliación mensual bajó de 7.5 horas a 2.4 horas: una reducción del 68%",
      "La diferencia al cierre de mes ahora es $0: los libros cuadran perfectamente cada vez",
      "Asientos duplicados prácticamente eliminados (la tasa de error pasó del 3.4% al 0.1%)",
      "El cierre mensual ahora es 1.2 días más rápido",
      "El tiempo de preparación de auditoría del contador se redujo a la mitad porque todo queda bien documentado",
    ],
    stack: ["Node.js", "Stripe API", "QuickBooks API", "PostgreSQL", "Vercel"],
    links: [],
  },

  "9vectors": {
    title: "9Vectors.ai",
    subtitle: "Plataforma de evaluación estratégica",
    gradient: "from-rose-500 to-orange-500",
    summary:
      "Una plataforma de IA que ayuda a grandes organizaciones a tomar mejores decisiones estratégicas mediante evaluaciones basadas en datos.",
    story:
      "Como cofundador técnico junto a Edwin Miller, ayudé a construir la infraestructura de IA desde cero. Las grandes empresas pasaban meses en evaluaciones estratégicas subjetivas e inconsistentes. Construimos una plataforma que aporta objetividad y velocidad a la inteligencia organizacional, ayudando a las empresas a entender sus fortalezas, brechas y oportunidades con datos en lugar de corazonadas.",
    problem:
      "La planificación estratégica en grandes organizaciones suele depender de consultores costosos, encuestas largas e interpretaciones subjetivas. El proceso es lento, caro y los resultados varían muchísimo según quién haga el análisis.",
    approach: [
      "Construí modelos de IA capaces de analizar datos organizacionales y revelar patrones relevantes",
      "Creé marcos de evaluación estandarizados que funcionan en distintas industrias",
      "Diseñé dashboards que hacen que los datos estratégicos complejos sean realmente comprensibles",
      "Implementé seguridad de nivel empresarial para manejar datos organizacionales sensibles",
    ],
    impact: [
      "La plataforma atiende a clientes empresariales con un impacto combinado en valoración de más de $150M",
      "El tiempo de evaluación se redujo de 3-4 meses a solo 2-3 semanas: una reducción del 85%",
      "Los clientes reportan un 40% más de insights accionables en comparación con la consultoría tradicional",
      "Ahorros de $50K-100K por evaluación frente a contratar consultores externos",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "AWS"],
    links: [
      { label: "Visitar 9Vectors.ai", href: "https://9vectors.ai" },
    ],
  },

  "measurement13": {
    title: "Measurement13.ai",
    subtitle: "Plataforma de evaluación de liderazgo",
    gradient: "from-blue-500 to-indigo-500",
    summary:
      "Plataforma de evaluación de liderazgo construida sobre 13 atributos clave: feedback 360°, posicionamiento 9-Box y analítica de dinámicas de equipo para el desarrollo del talento y la planificación de sucesión.",
    story:
      "La evaluación de liderazgo suele vivir en uno de dos malos lugares: un ritual anual de RR. HH. en el que nadie confía, o una presentación de consultoría que nadie vuelve a leer. Measurement13 nació para que la evaluación de liderazgo sea estructurada, continua y realmente útil, basada en un modelo de 13 atributos, con feedback 360° y un posicionamiento 9-Box que los ejecutivos pueden defender en las revisiones de talento.",
    problem:
      "La mayoría de las evaluaciones de liderazgo se basan en conceptos difusos y feedback de entrevistas sin estructura. Los resultados son inconsistentes entre grupos de evaluadores, la ubicación en el 9-Box termina siendo un debate de pasillo y los planes de desarrollo, si es que se escriben, rara vez se conectan con la evidencia de fondo.",
    approach: [
      "Evaluación estructurada frente a 13 atributos clave de liderazgo, con rúbricas consistentes para cada atributo",
      "Recolección de feedback 360° entre los grupos de autoevaluación, pares, jefe directo y reportes directos, con preguntas diseñadas para reducir sesgos",
      "Posicionamiento 9-Box (desempeño × potencial) basado en la puntuación de los 13 atributos y no en la intuición",
      "Analítica de dinámicas de equipo: composición, fortalezas complementarias y brechas de liderazgo dentro de un equipo",
      "Síntesis asistida por IA que convierte el feedback de los evaluadores en temas de desarrollo trabajables y memos para revisiones de talento",
    ],
    impact: [
      "Las conversaciones de revisión de talento pasan de las anécdotas a la evidencia vinculada a un modelo de liderazgo definido",
      "Ubicación en el 9-Box defendible con un rastro de puntuación estructurado en lugar de consensos de pasillo",
      "Planes de desarrollo generados directamente a partir de los temas del 360°, sin síntesis manual en hojas de cálculo",
      "La planificación de sucesión obtiene una vista continuamente actualizada de la profundidad del liderazgo, no una foto una vez al año",
    ],
    stack: ["React 18", "TypeScript", "Vite", "Node.js", "Azure Functions", "PostgreSQL", "Stripe", "Claude AI"],
    links: [
      { label: "Visitar Measurement13.ai", href: "https://measurement13.ai" },
    ],
  },

  "snapshot9": {
    title: "Snapshot9.ai",
    subtitle: "Plataforma de transformación empresarial",
    gradient: "from-violet-500 to-[#2DD4BF]",
    summary:
      "Ayuda a las empresas a visualizar y optimizar cómo opera realmente su organización.",
    story:
      "La mayoría de las empresas no sabe realmente cómo funciona. Tienen organigramas que no reflejan la realidad, procesos que solo existen en la cabeza de las personas e ineficiencias que nadie ve. Snapshot9 captura la imagen real de cómo funciona una organización y usa IA para encontrar oportunidades de mejora.",
    problem:
      "Las iniciativas de transformación empresarial suelen fracasar porque los líderes no tienen una imagen precisa de las operaciones actuales. No puedes mejorar lo que no puedes ver.",
    approach: [
      "Descubrimiento automatizado de procesos que mapea cómo fluye realmente el trabajo dentro de la organización",
      "Análisis con IA que identifica cuellos de botella, redundancias y oportunidades de optimización",
      "Herramientas visuales que hacen comprensibles las estructuras organizacionales complejas",
      "Seguimiento de cambios para medir el impacto de las iniciativas de transformación a lo largo del tiempo",
    ],
    impact: [
      "Mapeo de procesos completado en 2 semanas frente a 2-3 meses con métodos tradicionales",
      "Identifica en promedio entre 12 y 15 oportunidades de optimización por departamento",
      "Las organizaciones reportan mejoras de eficiencia del 25-30% tras implementar las recomendaciones",
      "El ROI se ve normalmente dentro de los 90 días posteriores al despliegue",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visitar Snapshot9.ai", href: "https://snapshot9.ai" },
    ],
  },

  "thegreymatter": {
    title: "TheGreyMatter.ai",
    subtitle: "Plataforma de inteligencia de negocios",
    gradient: "from-slate-500 to-zinc-600",
    summary:
      "Pone los datos del negocio al alcance de los equipos directivos sin necesidad de conocimientos técnicos.",
    story:
      "He visto a demasiados ejecutivos tomar decisiones con datos incompletos o esperar días a que los analistas generen reportes. TheGreyMatter se construyó para poner la inteligencia directamente en manos de quienes toman las decisiones, para que puedan hacer preguntas y obtener respuestas en minutos, no en días.",
    problem:
      "Los equipos directivos muchas veces no pueden acceder a los datos que necesitan cuando los necesitan. Dependen de analistas, esperan reportes y con frecuencia deciden con información desactualizada.",
    approach: [
      "Interfaz en lenguaje natural para que los líderes hagan preguntas en palabras sencillas",
      "Agregación automática de datos desde múltiples sistemas del negocio",
      "Insights impulsados por IA que destacan lo importante sin que nadie tenga que pedirlo",
      "Diseño adaptado a móviles para ejecutivos que necesitan respuestas sobre la marcha",
    ],
    impact: [
      "El tiempo para obtener una respuesta bajó de 2-3 días a menos de 5 minutos: una mejora del 99%",
      "La carga de los analistas por solicitudes puntuales bajó un 60%",
      "El uso semanal de los dashboards ejecutivos subió del 15% al 72%",
      "La velocidad de toma de decisiones mejoró un 40% según encuestas a usuarios",
    ],
    stack: ["React", "Node.js", "OpenAI", "MongoDB", "AWS"],
    links: [
      { label: "Visitar TheGreyMatter.ai", href: "https://thegreymatter.ai" },
    ],
  },

  "forecast9": {
    title: "Forecast9.ai",
    subtitle: "Plataforma de pronósticos con IA",
    gradient: "from-amber-500 to-orange-500",
    summary:
      "Plataforma de pronósticos con IA dentro del ecosistema TheGreyMatter.ai que convierte datos históricos en proyecciones de negocio confiables.",
    story:
      "Construido como parte del ecosistema TheGreyMatter.ai, Forecast9 ataca un problema que vi una y otra vez: empresas tomando decisiones importantes con hojas de cálculo llenas de suposiciones. Los líderes necesitaban una herramienta que tomara sus datos históricos, los combinara con señales del mercado y produjera pronósticos en los que realmente pudieran confiar. Forecast9 hace exactamente eso: lleva la precisión de la IA a la planificación del negocio.",
    problem:
      "Los pronósticos tradicionales dependen de modelos manuales en hojas de cálculo, propensos a errores, lentos y muchas veces basados en corazonadas en lugar de datos. Para cuando el pronóstico está listo, las condiciones del mercado ya cambiaron.",
    approach: [
      "Modelos de IA entrenados con datos históricos del negocio y señales externas del mercado",
      "Herramientas de planificación de escenarios para modelar el mejor caso, el peor caso y el resultado más probable",
      "Ajustes del pronóstico en tiempo real a medida que llegan nuevos datos",
      "Integración con los sistemas existentes del negocio para una ingesta de datos sin fricción",
    ],
    impact: [
      "La precisión de los pronósticos mejoró un 35% frente a los modelos tradicionales en hojas de cálculo: el error absoluto medio bajó del 18% al 11.7%",
      "El ciclo de planificación se redujo de 3-4 semanas a menos de 8 horas: un 93% de ahorro de tiempo",
      "Los líderes pueden correr más de 50 escenarios en menos de 15 minutos, frente a 2-3 días por escenario de forma manual",
      "Variación de las proyecciones de ingresos dentro del 5% de los resultados reales en horizontes de 6 meses",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visitar Forecast9.ai", href: "https://forecast9.thegreymatter.ai" },
    ],
  },

  "duediligence9": {
    title: "DueDiligence9.ai",
    subtitle: "Plataforma de due diligence con IA",
    gradient: "from-teal-500 to-cyan-500",
    summary:
      "Plataforma de due diligence con IA dentro del ecosistema TheGreyMatter.ai que acelera la evaluación de transacciones y de riesgos.",
    story:
      "El due diligence es una de las fases más críticas de cualquier transacción, y una de las más manuales. Los equipos pasan semanas revisando documentos, estados financieros y contratos en busca de riesgos y oportunidades. Construido dentro del ecosistema TheGreyMatter.ai, DueDiligence9 automatiza el trabajo pesado para que los equipos se enfoquen en lo que importa: tomar la decisión correcta.",
    problem:
      "El due diligence manual es lento, costoso y propenso a omisiones. Los equipos suelen pasar por alto riesgos críticos enterrados en miles de páginas de documentos, y la presión del tiempo lleva a atajos que pueden costar millones.",
    approach: [
      "Análisis de documentos con IA que extrae automáticamente los principales riesgos y oportunidades",
      "Modelado financiero y detección de anomalías en los datos de la empresa objetivo",
      "Generación automática de checklists adaptados al tipo de transacción y a la industria",
      "Dashboard centralizado para la colaboración del equipo y el seguimiento del avance",
    ],
    impact: [
      "Los plazos de due diligence se redujeron de 6-8 semanas a 2-3 semanas: una reducción promedio del 60%",
      "La IA detecta 3 veces más alertas de riesgo por transacción que la revisión manual, encontrando problemas en conjuntos de más de 4,000 páginas",
      "Velocidad de revisión documental: más de 500 páginas analizadas por hora frente a 40-60 páginas por hora de forma manual",
      "Los equipos ahorran entre $75K y $150K estimados por proyecto en horas de analistas",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visitar DueDiligence9.ai", href: "https://duediligence9.thegreymatter.ai" },
    ],
  },

  "benchmarkedoutcomes": {
    title: "BenchmarkedOutcomes.ai",
    subtitle: "Benchmarking de contratación y talento",
    gradient: "from-lime-500 to-green-500",
    summary:
      "Plataforma de benchmarking de contratación con IA dentro del ecosistema TheGreyMatter.ai que ayuda a las empresas a evaluar candidatos frente a estándares específicos de cada rol.",
    story:
      "Contratar es una de las decisiones de mayor impacto que toma una empresa, y una de las más inconsistentes. Construido como parte del ecosistema TheGreyMatter.ai, BenchmarkedOutcomes aporta objetividad a la evaluación del talento comparando a los candidatos con estándares específicos del rol y datos de la industria. Se acabó contratar por corazonada: evaluaciones claras y basadas en datos que ayudan a los equipos a contratar a las personas correctas, más rápido.",
    problem:
      "La mayoría de los procesos de contratación dependen de entrevistas subjetivas y criterios de evaluación inconsistentes. A las empresas les cuesta comparar candidatos de forma justa, lo que lleva a malas contrataciones, tiempo perdido y alta rotación. Sin benchmarks, los equipos no saben cómo se ve realmente un candidato «excelente» para un rol determinado.",
    approach: [
      "Benchmarking de candidatos con IA frente a estándares del rol y de la industria",
      "Marcos de evaluación estandarizados que reducen el sesgo de los entrevistadores",
      "Análisis de brechas de habilidades que identifica dónde destaca cada candidato y dónde se queda corto",
      "Seguimiento de los resultados de contratación para mejorar continuamente los benchmarks",
    ],
    impact: [
      "Los equipos de contratación evalúan candidatos un 50% más rápido: el tiempo promedio de decisión bajó de 14 a 7 días",
      "La variación en las puntuaciones de los entrevistadores se redujo un 62% con criterios objetivos estandarizados",
      "La tasa de malas contrataciones bajó un 34% en los primeros 6 meses de uso",
      "El costo por contratación se redujo en $4,200 en promedio gracias a evaluaciones más rápidas y precisas",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visitar BenchmarkedOutcomes.ai", href: "https://benchmark.thegreymatter.ai" },
    ],
  },

  "integration9": {
    title: "Integration9.ai",
    subtitle: "Plataforma de integración con IA",
    gradient: "from-fuchsia-500 to-pink-500",
    summary:
      "Plataforma de IA dentro del ecosistema TheGreyMatter.ai que agiliza la integración post-fusión y de sistemas en organizaciones complejas.",
    story:
      "Las fusiones e integraciones fracasan más de lo que tienen éxito, casi siempre porque la integración en sí es un caos. Construido dentro del ecosistema TheGreyMatter.ai, Integration9 pone orden en el proceso: mapea dependencias, identifica riesgos a tiempo y mantiene alineados todos los frentes de trabajo. Es el centro de mando de integración que los equipos siempre quisieron tener.",
    problem:
      "La integración post-fusión implica cientos de frentes de trabajo, miles de dependencias y decenas de equipos que nunca han trabajado juntos. Sin un sistema centralizado, las cosas se pierden en el camino, los plazos se atrasan y se destruye valor.",
    approach: [
      "Mapeo de dependencias con IA entre sistemas, equipos y procesos",
      "Motor de identificación de riesgos que señala los bloqueos de integración antes de que descarrilen los plazos",
      "Seguimiento de frentes de trabajo con actualizaciones automáticas de avance y alertas de hitos",
      "Herramientas de colaboración entre equipos diseñadas para la complejidad de los programas de integración",
    ],
    impact: [
      "Los plazos de integración se redujeron un 40%: los programas se completan en promedio en 9 meses frente a 15",
      "Conflictos de dependencias identificados 4-6 semanas antes, evitando en promedio $2M en sinergias retrasadas",
      "Visibilidad de los frentes de trabajo: el 100% de los hitos con seguimiento en tiempo real en más de 20 equipos simultáneos",
      "El riesgo de fracaso de la integración se redujo un 55% según métricas de éxito post-fusión",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visitar Integration9.ai", href: "https://integration9.thegreymatter.ai" },
    ],
  },

  "exitready9": {
    title: "ExitReady9.ai",
    subtitle: "Plataforma de preparación para la salida",
    gradient: "from-[#FF6A3D] to-violet-500",
    summary:
      "Plataforma de preparación para la salida con IA dentro del ecosistema TheGreyMatter.ai que prepara a las empresas para una adquisición o una salida a bolsa.",
    story:
      "La mayoría de las empresas empieza a pensar en su preparación para la salida demasiado tarde. Cuando ya hay una oferta sobre la mesa, todo es una carrera para cerrar brechas, construir la narrativa y demostrar valor. Construido dentro del ecosistema TheGreyMatter.ai, ExitReady9 ayuda a las empresas a adelantarse: identifica qué hay que fortalecer, qué historia contar y cómo maximizar el valor mucho antes de que empiece el proceso de salida.",
    problem:
      "Las empresas que se preparan para una salida suelen descubrir brechas críticas demasiado tarde: documentación faltante, métricas débiles, problemas de cumplimiento o propuestas de valor poco claras. Estos problemas de última hora matan transacciones o reducen significativamente las valoraciones.",
    approach: [
      "Evaluación de preparación con IA que califica a la empresa según los criterios clave de una salida",
      "Identificación de brechas con hojas de ruta de remediación priorizadas",
      "Análisis de generadores de valor que destaca lo que más les importa a compradores e inversionistas",
      "Constructor de la narrativa de salida que ayuda a la dirección a contar una historia convincente respaldada por datos",
    ],
    impact: [
      "Las empresas identifican brechas de preparación 4-6 meses antes, convirtiendo las carreras de última hora en correcciones planificadas",
      "En promedio se identifican 23 brechas críticas por evaluación, y el 89% se resuelve antes de que inicie el proceso de salida",
      "Los clientes reportan valoraciones entre un 15% y un 25% más altas al resolver las brechas antes del due diligence del comprador",
      "El tiempo de preparación para la salida se redujo de 12-18 meses a 6-9 meses con hojas de ruta priorizadas por IA",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visitar ExitReady9.ai", href: "https://exitready9.thegreymatter.ai" },
    ],
  },

  "board9": {
    title: "Board9.ai",
    subtitle: "Sistema operativo de juntas directivas con IA",
    gradient: "from-slate-600 to-zinc-500",
    summary:
      "Un sistema operativo completo, en producción, para las juntas directivas de empresas de portafolio: gestiona la preparación del board pack, los reportes de gobierno corporativo, la ingesta de datos financieros y KPIs, y la redacción asistida por IA.",
    story:
      "Las reuniones de junta en las empresas de portafolio suelen ser caóticas: presentaciones armadas a partir de una docena de fuentes, estados financieros desactualizados y la mitad del board pack ensamblado la noche anterior. Construido dentro del ecosistema TheGreyMatter.ai, Board9 lo convierte en un flujo estructurado y asistido por IA donde los datos llegan, los board packs se redactan, se revisan y se aprueban, todo en un solo lugar.",
    problem:
      "Preparar los materiales de la junta implica reunir datos de los equipos de finanzas, operaciones, RR. HH. y estrategia. Es manual, propenso a errores y casi siempre termina en una carrera frenética de 48 horas antes de cada reunión. Los miembros de la junta reciben información inconsistente o desactualizada, lo que dificulta las decisiones de gobierno corporativo.",
    approach: [
      "Ingesta de documentos con extracción y clasificación mediante IA a partir de estados financieros, KPIs y documentos de estrategia",
      "Motor de redacción de board packs que genera narrativas estructuradas a partir de datos crudos, con revisión y aprobación humana",
      "Confirmación de asistencia, control de asistencia, gestión de comités y flujos de seguimiento posteriores a la reunión",
      "Exportación en múltiples formatos (PDF, DOCX, PPTX, Excel) con benchmarking del portafolio e historial de ciclos",
    ],
    impact: [
      "El tiempo de preparación del board pack se redujo de 3-5 días a menos de 8 horas con redacción asistida por IA",
      "El 100% de los datos financieros y KPIs se extrae y valida automáticamente antes de incluirse",
      "Mayor satisfacción de los miembros de la junta con los materiales: narrativas consistentes y respaldadas por datos en cada ciclo",
      "El seguimiento de acuerdos posteriores a la reunión redujo en un 70% los pendientes sin atender",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Vite", "Tailwind CSS"],
    links: [
      { label: "Visitar Board9.ai", href: "https://board9.thegreymatter.ai" },
    ],
  },

  "contracts9": {
    title: "Contracts9.ai",
    subtitle: "Inteligencia del ciclo de vida de contratos",
    gradient: "from-rose-500 to-red-500",
    summary:
      "Motor de gestión del ciclo de vida de contratos y cumplimiento con IA: analiza, extrae y monitorea obligaciones en todo un portafolio de contratos con puntuación de riesgo inteligente.",
    story:
      "Los contratos son la columna vertebral de cualquier negocio, pero la mayoría de las empresas los gestiona como si fuera 2005: enterrados en carpetas, fechas clave olvidadas y obligaciones ignoradas hasta que llega una carta de un abogado. Construido dentro del ecosistema TheGreyMatter.ai, Contracts9 usa Claude AI para leer, extraer, clasificar y monitorear contratos para que nada se pierda en el camino.",
    problem:
      "Las organizaciones con cientos de contratos pierden de vista las fechas de renovación, las obligaciones de cumplimiento y su exposición al riesgo. La revisión manual de contratos es lenta y costosa, y las cláusulas críticas se pasan por alto cuando una persona hojea documentos de 50 páginas.",
    approach: [
      "Pipeline de extracción con Claude para obtener términos, clasificar cláusulas y generar narrativas de riesgo",
      "Puntuación de riesgo en 6 dimensiones: financiera, de cumplimiento, operativa, legal, de concentración y de desempeño",
      "Seguimiento de obligaciones con recomendaciones automáticas de renovación y programación de alertas con lógica de escalamiento",
      "Sala de documentos con niveles de preparación (del 0 al 5), scorecards de proveedores y reportes resumidos para la junta",
    ],
    impact: [
      "El tiempo de revisión de contratos se redujo un 75%: la IA extrae los términos clave en minutos en lugar de horas de revisión manual",
      "Cero fechas de renovación perdidas desde el despliegue gracias al escalamiento automático de alertas",
      "Exposición al riesgo identificada en 6 dimensiones para cada contrato del portafolio",
      "Más de 60 endpoints de API sobre 11 contenedores de Cosmos DB con registro de auditoría completo en todas las modificaciones",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Docker", "Vite"],
    links: [
      { label: "Visitar Contracts9.ai", href: "https://contracts9.thegreymatter.ai" },
    ],
  },

  "ddq9": {
    title: "DDQ9.ai",
    subtitle: "Plataforma de cuestionarios de due diligence",
    gradient: "from-sky-500 to-blue-500",
    summary:
      "Una plataforma integral de cuestionarios de due diligence y evaluación de fondos para inversionistas LP y gestores de fondos: automatiza la recolección de documentos, la gestión de flujos de trabajo y el análisis con IA.",
    story:
      "Los cuestionarios de due diligence son la pesadilla de todo gestor de fondos: cientos de preguntas, decenas de solicitudes de documentos y semanas de ida y vuelta. DDQ9 automatiza las partes dolorosas para que los equipos se enfoquen en el análisis que realmente importa.",
    problem:
      "Los inversionistas LP y los gestores de fondos pasan semanas recolectando, organizando y revisando documentos para el due diligence. Los cuestionarios en varias fases, con requisitos documentales por niveles, generan pesadillas de coordinación entre equipos y colaboradores externos.",
    approach: [
      "Flujos de cuestionarios en varias fases con sesiones guiadas y recolección de datos estructurada",
      "Gestión de requisitos documentales con un sistema de niveles (bloqueante, obligatorio, recomendado) y seguimiento automatizado",
      "Portal compartido y control de acceso de colaboradores para que terceros suban documentos directamente",
      "Clasificación y extracción de documentos con Claude para archivos Word, Excel y PDF",
    ],
    impact: [
      "El tiempo para completar los cuestionarios de due diligence se redujo un 60% con flujos estructurados y guiados",
      "Las brechas en la recolección de documentos se detectan de inmediato con el seguimiento de requisitos por niveles",
      "El portal para colaboradores externos eliminó el 80% del intercambio de documentos por correo",
      "La jerarquía de membresía de fondos permite gestionar los DDQ de todo el portafolio desde un solo dashboard",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure SQL", "Azure Cosmos DB", "Redis", "Claude AI"],
    links: [
      { label: "Visitar DDQ9.ai", href: "https://ddq9.thegreymatter.ai" },
    ],
  },

  "orgdesign9": {
    title: "OrgDesign9.ai",
    subtitle: "Plataforma de diseño organizacional",
    gradient: "from-violet-500 to-[#2DD4BF]",
    summary:
      "Plataforma de diseño organizacional con IA: análisis de la estructura de la fuerza laboral, benchmarking de salud estructural, modelado de escenarios con costeo, generación de matrices RACI y planificación de la transición.",
    story:
      "El diseño organizacional es de esas cosas que todos saben que son importantes, pero para las que nadie tiene buenas herramientas. La mayoría de las empresas lo hace en PowerPoint y hojas de cálculo, lo que significa que el análisis es superficial, los escenarios no están costeados y el plan de transición es una lista de deseos. OrgDesign9 aporta rigor basado en datos a todo el proceso.",
    problem:
      "Las decisiones de reestructuración organizacional suelen tomarse con datos incompletos. Los líderes no pueden modelar fácilmente el impacto en costos de distintas estructuras, las matrices RACI se crean a mano y quedan desactualizadas de inmediato, y los planes de transición carecen del detalle necesario para ejecutarse.",
    approach: [
      "Procesamiento de la plantilla de colaboradores y benchmarking de salud estructural frente a estándares de la industria",
      "Modelado de escenarios con análisis real de impacto en costos: ve el efecto financiero de cada cambio estructural",
      "Matrices RACI y derechos de decisión generados por IA a partir de datos reales de la organización",
      "Planificación de la transición con flujos de gestión del cambio y puntuación de preparación",
    ],
    impact: [
      "El tiempo de análisis de diseño organizacional pasó de semanas a días con diagnósticos estructurales impulsados por IA",
      "Mayor precisión en el costeo de escenarios: los líderes ven el impacto financiero real antes de comprometerse con los cambios",
      "Matrices RACI generadas en minutos frente a semanas de entrevistas manuales con los involucrados",
      "Los planes de transición incluyen puntos de control de preparación que evitan despliegues prematuros",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "ExcelJS", "Vite"],
    links: [
      { label: "Visitar OrgDesign9.ai", href: "https://orgdesign9.thegreymatter.ai" },
    ],
  },

  "pipeline9": {
    title: "Pipeline9.ai",
    subtitle: "Inteligencia del pipeline de ventas",
    gradient: "from-orange-500 to-amber-500",
    summary:
      "Plataforma integral de evaluación de la salud del pipeline de ventas con pronóstico de ingresos por IA, identificación de cuellos de botella en la conversión, detección de oportunidades en riesgo y coaching con IA para vendedores.",
    story:
      "Los líderes de ventas miran dashboards del pipeline todo el día y aun así no pueden responder la pregunta que más importa: «¿Vamos a llegar a la meta?». Pipeline9 no solo te muestra el pipeline: te dice dónde están los problemas, qué oportunidades están en riesgo y qué debería hacer distinto cada vendedor.",
    problem:
      "Los CRM muestran los datos del pipeline, pero no los interpretan. Los líderes de ventas pasan horas analizando a mano tasas de conversión, identificando cuellos de botella y pronosticando ingresos. Para cuando detectan un problema, muchas veces ya es tarde para corregirlo.",
    approach: [
      "Análisis de cobertura del pipeline en tiempo real por segmento, vendedor y región, con inteligencia de conversión etapa por etapa",
      "Pronóstico de ingresos con IA con más del 85% de precisión a partir de patrones históricos y señales de cada oportunidad",
      "Sistema de alerta temprana para oportunidades en riesgo con recomendaciones de intervención proactiva",
      "Scorecards de productividad por vendedor con insights de coaching por IA a partir de grabaciones de llamadas (integración con Gong/Chorus)",
    ],
    impact: [
      "La precisión del pronóstico de ingresos subió a más del 85%, frente al 60% con métodos manuales",
      "Oportunidades en riesgo identificadas 3-4 semanas antes, dando tiempo a los vendedores para corregir el rumbo",
      "Los insights de coaching por IA redujeron en un 35% el tiempo de rampa de los nuevos vendedores",
      "La tasa de cierre mejoró un 12% en el primer trimestre al atacar los cuellos de botella en la conversión",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis", "Claude AI", "Recharts"],
    links: [
      { label: "Visitar Pipeline9.ai", href: "https://pipeline9.thegreymatter.ai" },
    ],
  },

  "swotanalysis9": {
    title: "SWOTAnalysis9.ai",
    subtitle: "Plataforma de análisis estratégico",
    gradient: "from-teal-500 to-emerald-500",
    summary:
      "Plataforma de análisis FODA con IA para la evaluación estratégica: análisis completo de fortalezas, oportunidades, debilidades y amenazas con insights asistidos por IA y posicionamiento competitivo.",
    story:
      "Todos hemos hecho un FODA en una pizarra. ¿Y después qué? Termina en una presentación, se revisa una vez y nadie lo vuelve a ver. SWOTAnalysis9 convierte el FODA en algo vivo y accionable, conectado a datos reales, inteligencia competitiva y seguimiento de iniciativas estratégicas.",
    problem:
      "El análisis FODA tradicional es estático y subjetivo. Se hace una sola vez, a partir de opiniones en una sala, sin datos que lo respalden. No hay conexión entre el análisis y las iniciativas estratégicas reales, ni forma de saber si se está actuando sobre los hallazgos.",
    approach: [
      "Generación de insights asistida por IA que fundamenta cada elemento del FODA en documentos cargados y datos de mercado",
      "Análisis competitivo y evaluación de posicionamiento con comparación lado a lado",
      "Seguimiento de iniciativas estratégicas que conecta los hallazgos del FODA con acciones concretas, responsables y fechas límite",
      "Exportación en múltiples formatos (PDF, DOCX, PPTX, Excel) para presentaciones a la junta y sesiones de planificación estratégica",
    ],
    impact: [
      "La calidad del análisis FODA mejoró drásticamente: la IA detecta en los documentos fuente insights que las personas pasan por alto",
      "Iniciativas estratégicas vinculadas directamente a los hallazgos del FODA, con seguimiento medible del avance",
      "Análisis de posicionamiento competitivo actualizado de forma continua en lugar de fotos anuales",
      "Exportaciones listas para la junta generadas en minutos, reemplazando días de preparación de presentaciones",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visitar SWOTAnalysis9.ai", href: "https://swotanalysis9.thegreymatter.ai" },
    ],
  },

  "operate9": {
    title: "Operate9.ai",
    subtitle: "Motor de creación de valor operativo",
    gradient: "from-lime-500 to-green-500",
    summary:
      "Herramienta de diagnóstico operativo con IA para empresas de portafolio de private equity: identifica fugas de margen y prioriza las palancas de creación de valor durante los primeros 100 días después del cierre.",
    story:
      "Los primeros 100 días después de una adquisición de private equity son decisivos. La tesis de inversión dice que hay $20M de potencial de mejora en EBITDA, pero ¿dónde exactamente? Operate9 responde esa pregunta con datos, no con intuición: mapea las fugas de margen, prioriza las 3-5 palancas más grandes y da seguimiento a la ejecución.",
    problem:
      "Después de una adquisición, las firmas de private equity necesitan identificar rápidamente mejoras operativas que justifiquen la tesis de inversión. El due diligence operativo manual es lento, y para cuando el análisis está listo, la ventana de 100 días ya va por la mitad. La creación de valor se retrasa o se pierde por completo.",
    approach: [
      "Visualización en cascada del puente de EBITDA que muestra exactamente dónde se fuga el margen en la estructura de costos",
      "Identificación y priorización con IA de las 3-5 palancas de creación de valor de mayor impacto",
      "Análisis de optimización del capital de trabajo en cuentas por cobrar, cuentas por pagar e inventario",
      "Línea de tiempo de los primeros 100 días con seguimiento de iniciativas, comparación con benchmarks y resúmenes ejecutivos generados por IA",
    ],
    impact: [
      "Identificación de palancas de creación de valor en días frente a semanas de análisis liderado por consultores",
      "En promedio, entre $8M y $15M en oportunidades de mejora de EBITDA identificadas por empresa de portafolio",
      "Los insights de optimización del capital de trabajo suelen liberar una mejora del 10-15% en el flujo de caja",
      "Ejecución de los primeros 100 días con seguimiento y reportes de avance automatizados para los sponsors de la transacción",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Zustand"],
    links: [
      { label: "Visitar Operate9.ai", href: "https://operate9.thegreymatter.ai" },
    ],
  },

  "culture9": {
    title: "Culture9.ai",
    subtitle: "Evaluación y transformación cultural",
    gradient: "from-pink-500 to-rose-500",
    summary:
      "Plataforma de evaluación cultural con IA: mapeo con el Competing Values Framework, análisis de alineación de valores, puntuación de preparación para el cambio y compatibilidad cultural en fusiones y adquisiciones.",
    story:
      "De la cultura se suele hablar en abstracto y se mide una vez al año con una encuesta que nadie lee. En procesos de fusiones, adquisiciones y transformación, eso no alcanza ni de cerca. Culture9 convierte la cultura en algo estructurado y diagnosticable, con un marco detrás de cada pregunta y un plan de acción detrás de cada hallazgo.",
    problem:
      "Las encuestas de cultura tradicionales producen mapas de calor, no decisiones. La dirección termina con un dashboard sobre el que nadie actúa, y cuando dos organizaciones necesitan integrarse, la compatibilidad cultural suele evaluarse con un puñado de entrevistas y mucha intuición.",
    approach: [
      "Mapeo con el Competing Values Framework en los arquetipos de clan, adhocracia, mercado y jerarquía",
      "Análisis de alineación de valores que compara los valores declarados con los comportamientos observados en encuestas y comentarios abiertos",
      "Puntuación de preparación para el cambio a nivel de equipo y de organización: identifica los grupos que impulsarán o resistirán una transformación",
      "Puntuación de compatibilidad cultural para fusiones y adquisiciones con diferencias de arquetipos lado a lado y mapas de calor de riesgo de integración",
    ],
    impact: [
      "Resultados de evaluación cultural que la dirección sí usa, fundamentados en un marco y no en una opinión",
      "Iniciativas de cambio dimensionadas según la puntuación de preparación, para que los planes de transformación se escalonen de forma realista",
      "Los equipos de fusiones y adquisiciones obtienen una vista estructurada del riesgo de integración cultural antes del anuncio, no después",
      "La extracción de temas con IA en comentarios abiertos revela a escala los patrones que las personas pasan por alto",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visitar Culture9.ai", href: "https://culture9.thegreymatter.ai" },
    ],
  },

  "interview9": {
    title: "Interview9.ai",
    subtitle: "Evaluación de entrevistas estructuradas",
    gradient: "from-[#FF6A3D] to-blue-500",
    summary:
      "Plataforma de entrevistas estructuradas: evaluación basada en rúbricas, puntuación consciente de sesgos y síntesis asistida por IA del feedback de los paneles sobre cada candidato.",
    story:
      "La mayoría de las reuniones de retroalimentación después de las entrevistas son un grupo de personas inteligentes promediando sus impresiones. Es una gran forma de contratar por afinidad y una mala forma de contratar por ajuste al rol. Interview9 regresa la conversación a la rúbrica, la mantiene ahí y luego deja que la IA sintetice la evidencia del panel en un memo de decisión que resiste el escrutinio de cualquier gerente de contratación.",
    problem:
      "Las entrevistas sin estructura aportan poca señal, están mal calibradas entre panelistas y son propensas a sesgos. Las rúbricas existen, pero suelen vivir en un documento que nadie abre durante la entrevista, y las reuniones de retroalimentación terminan dominadas por quien habla primero.",
    approach: [
      "Interfaz de puntuación basada en rúbricas que los panelistas realmente usan durante la entrevista, no después",
      "Preguntas y patrones de puntuación conscientes de sesgos, diseñados para sacar a la luz evidencia en lugar de impresiones",
      "Síntesis asistida por IA que convierte las notas individuales de cada panelista en un memo estructurado del candidato",
      "Vistas de calibración por rol y por panelista que destacan desviaciones y casos atípicos para mantener un estándar de contratación consistente",
    ],
    impact: [
      "Decisiones de contratación fundamentadas en la evidencia de la rúbrica, no en la voz más fuerte de la reunión",
      "Menor tiempo de decisión: memos de síntesis listos para el comité de contratación en minutos",
      "Los ciclos de retroalimentación de calibración hacen que los panelistas sean medible y progresivamente más consistentes",
      "Rastro auditable de cada contratación, algo clave para compradores empresariales y de sectores regulados",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visitar Interview9.ai", href: "https://interview9.thegreymatter.ai" },
    ],
  },

  "supplychain9": {
    title: "SupplyChain9.ai",
    subtitle: "Evaluación de la cadena de suministro",
    gradient: "from-orange-500 to-red-500",
    summary:
      "Evaluación integral de la cadena de suministro: mapeo de la red, seguimiento de KPIs, detección de cuellos de botella, mapeo de vulnerabilidades y riesgos, y modelado de escenarios de optimización.",
    story:
      "La resiliencia de la cadena de suministro dejó de ser un ejercicio teórico en 2020 y desde entonces no ha dejado de importar. SupplyChain9 les da a los equipos de operaciones una forma estructurada de ver su red, encontrar los eslabones frágiles antes de que fallen y modelar qué pasa ante una disrupción, sin necesitar un proyecto de consultoría de seis cifras cada vez.",
    problem:
      "La mayoría de los equipos de cadena de suministro conoce su red a nivel de nodos, pero no a nivel de dependencias. El riesgo vive en concentraciones y cuellos de botella que solo aparecen cuando algo se rompe, y el modelado de escenarios suele ser un ejercicio lento y muy dependiente de consultores.",
    approach: [
      "Mapeo de la red de proveedores, logística y distribución con visualización de dependencias en tiempo real",
      "Seguimiento de KPIs de desempeño y benchmarking frente a referencias de la industria",
      "Detección de cuellos de botella que identifica los 2–3 nodos cuya falla tendría el mayor efecto en cascada",
      "Mapeo de vulnerabilidades y riesgos (geográficos, de proveedor único, financieros) junto con modelado de escenarios de optimización",
      "Colaboración en tiempo real mediante Socket.io para talleres de evaluación entre áreas",
    ],
    impact: [
      "El riesgo de la cadena de suministro pasa de una presentación anual a una vista operativa actualizada continuamente",
      "Identificación de cuellos de botella en días en lugar de semanas de mapeo liderado por consultores",
      "El modelado de escenarios da a los equipos respuestas defendibles ante las preguntas de riesgo de la junta",
      "La síntesis con IA de los comentarios abiertos de proveedores convierte señales ruidosas en preocupaciones estructuradas",
    ],
    stack: ["React", "TypeScript", "Node.js", "Socket.io", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visitar SupplyChain9.ai", href: "https://supplychain9.thegreymatter.ai" },
    ],
  },

  "fundraise9": {
    title: "Fundraise9",
    subtitle: "Portal DDQ LP/GP para levantamiento de capital en PE",
    gradient: "from-amber-500 to-rose-500",
    summary:
      "Gestión de ILPA DDQ 2.0 para el levantamiento de fondos de private equity: los GPs completan cuestionarios de due diligence estructurados con apoyo de Claude y los LPs revisan y comentan en tiempo real.",
    story:
      "El papeleo de un levantamiento de capital es uno de los problemas de coordinación más costosos del private equity. Cada LP quiere las mismas respuestas en formatos ligeramente distintos; cada GP reescribe el mismo contenido trimestre tras trimestre. Fundraise9 lo convierte en un flujo estructurado con LP y GP en el mismo espacio, la IA encargándose del texto repetitivo y cada respuesta anclada a los documentos fuente de la firma en lugar de a un hilo de correos.",
    problem:
      "ILPA DDQ 2.0 es un estándar de más de 200 preguntas para el due diligence institucional. Los GPs responden el mismo contenido para cada LP, a mano, copiando y pegando, sin consistencia entre levantamientos. Los LPs reciben PDFs por fuera del proceso, hacen preguntas de seguimiento por correo y pierden la trazabilidad. Ambas partes pasan semanas coordinando algo que debería tomar días.",
    approach: [
      "Flujo DDQ estructurado: los GPs responden una sola vez; los LPs revisan, comentan y envían preguntas de seguimiento en la misma interfaz",
      "Redacción con apoyo de Claude que fundamenta cada respuesta en los documentos fuente de la firma (estados financieros auditados, LPAs, levantamientos anteriores)",
      "Referencias cruzadas con la taxonomía de 9Vectors para que las respuestas se mantengan consistentes entre levantamientos y en todo el ecosistema",
      "Avance, presencia y notificaciones en vivo mediante Socket.io: ambas partes ven progresar el levantamiento en tiempo real",
      "Identidad federada con JWT con el resto de la plataforma TGM: el mismo inicio de sesión, el mismo servicio de archivos y la misma trazabilidad",
    ],
    impact: [
      "Completar el DDQ toma días, no semanas de coordinación por correo",
      "Respuestas consistentes entre levantamientos y LPs, porque la fuente es el corpus documental y no una bandeja de entrada",
      "Listo para auditoría: cada respuesta lleva su procedencia hacia un documento fuente y un historial de cambios",
      "Los LPs obtienen un portal de verdad en lugar de una bandeja llena de PDFs; los GPs, una única fuente de verdad para el levantamiento",
    ],
    stack: ["React", "TypeScript", "Vite", "Node.js", "Express", "Socket.io", "Azure Cosmos DB", "Claude AI", "JWT", "Stripe"],
    links: [],
  },

  "nps9": {
    title: "NPS9.ai",
    subtitle: "NPS y sentimiento del cliente",
    gradient: "from-emerald-500 to-teal-500",
    summary:
      "Análisis de Net Promoter Score y sentimiento del cliente: orquestación de encuestas, segmentación por cohortes, extracción de temas con IA a partir de comentarios abiertos y seguimiento de tendencias.",
    story:
      "La mayoría de los programas de NPS mueren de la misma forma: un número sube o baja cada trimestre y nadie puede explicar por qué. NPS9 vuelve a hacer útil el NPS tratando las respuestas abiertas como la verdadera señal: extrae temas, los asigna a sus responsables y da seguimiento a si lo que los clientes reclamaron hace tres meses realmente se resolvió.",
    problem:
      "El NPS como un solo número es, en el mejor de los casos, una referencia de dirección. La verdadera información está en miles de respuestas abiertas que nadie tiene tiempo de leer, y la mayoría de los equipos nunca conecta lo que dijeron los clientes con lo que el equipo de producto realmente lanzó.",
    approach: [
      "Orquestación de encuestas con segmentación por cohortes según plan, antigüedad y área de producto",
      "Extracción de temas con IA a partir de comentarios abiertos: agrupaciones, sentimiento e intensidad",
      "Enrutamiento de ciclo cerrado: las respuestas de detractores llegan al responsable correcto con contexto y próximos pasos sugeridos",
      "Seguimiento de tendencias que vincula los cambios de sentimiento con lanzamientos de producto, cambios de precio e interrupciones del servicio",
    ],
    impact: [
      "El NPS deja de ser una métrica de vanidad: la dirección ve lo que los clientes realmente dijeron, no solo la puntuación",
      "El tiempo de respuesta a detractores baja drásticamente una vez que se activa el enrutamiento de ciclo cerrado",
      "Las tendencias por tema dejan claro qué apuestas de producto movieron la aguja y cuáles no",
      "Reportes ejecutivos generados en minutos en lugar de la carrera trimestral para sintetizar resultados",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visitar NPS9.ai", href: "https://nps9.thegreymatter.ai" },
    ],
  },

  "budgetcopilot": {
    title: "BudgetCopilot",
    subtitle: "Agente financiero con IA",
    gradient: "from-green-500 to-emerald-500",
    summary:
      "Una IA personal que te ayuda a administrar tu dinero, salir de deudas y construir patrimonio, sin asesores financieros costosos.",
    story:
      "Construí BudgetCopilot porque me estaba ahogando en deudas. Tarjetas de crédito, préstamos y gastos se acumulaban, y me sentía completamente perdido. Los asesores financieros cobraban cientos de dólares por sesión, dinero que obviamente no tenía. Necesitaba algo que me ayudara a entender mi situación, crear un plan realista y cumplirlo de verdad. Así que lo construí yo mismo. Ahora lo uso para ayudar a otros a salir de la misma trampa.",
    problem:
      "La mayoría de las personas no tiene acceso a asesoría financiera de calidad. Las apps te muestran en qué se fue tu dinero, pero no te ayudan a armar un plan. Los asesores son caros. Y seamos honestos: hacer un presupuesto es aburrido y difícil de mantener.",
    approach: [
      "Se conecta a tus cuentas para ver el panorama completo de tus finanzas",
      "Una IA que entiende tu situación y crea recomendaciones personalizadas",
      "Estrategias para pagar deudas que de verdad funcionan (avalancha, bola de nieve o personalizada)",
      "Alertas proactivas y motivación para que no pierdas el rumbo",
      "Sin juicios: solo ayuda práctica para mejorar tu situación financiera",
    ],
    impact: [
      "Los usuarios identifican en promedio $347 al mes en gastos que pueden recortar u optimizar",
      "Planes para pagar deudas creados en 5 minutos frente a $200-500 por una sesión con un asesor financiero",
      "El 78% de los usuarios dice sentir más control sobre sus finanzas en 2 semanas",
      "Uso promedio: 4.2 sesiones por semana (la mayoría de las apps de presupuesto ven menos de 1)",
    ],
    stack: ["Next.js", "OpenAI", "Plaid", "PostgreSQL", "Stripe", "Vercel"],
    links: [
      { label: "Probar BudgetCopilot", href: "https://budgetcopilot.app" },
    ],
  },

  "waldoscodelab": {
    title: "Waldo's Code Lab",
    subtitle: "Escuela de programación gratuita",
    gradient: "from-amber-500 to-yellow-500",
    summary:
      "Una escuela de programación gratuita y práctica que enseña a niños y adolescentes habilidades reales de programación.",
    story:
      "Aprendí a programar de adolescente y me cambió la vida. Pero veo a muchísimos chicos hoy que no pueden pagar un bootcamp de programación o que se quedan atascados con tutoriales aburridos que no se les quedan. Fundé Waldo's Code Lab para darles a los jóvenes la misma oportunidad que tuve yo: aprender a construir cosas reales, gratis, con alguien a quien de verdad le importa que les vaya bien.",
    problem:
      "La educación en programación de calidad es cara y muchas veces aburrida. Los chicos aprenden sintaxis, pero no construyen nada real. Para cuando terminan, ya olvidaron la mayor parte.",
    approach: [
      "Aprendizaje basado en proyectos: cada lección termina con algo que de verdad construiste",
      "Sesiones en vivo donde los estudiantes pueden hacer preguntas y recibir ayuda en tiempo real",
      "Enfoque en habilidades prácticas que llevan a oportunidades reales",
      "Totalmente gratis: sin costos ocultos ni planes premium",
    ],
    impact: [
      "100% gratis: las familias se ahorran entre $2,000 y $5,000 frente a un bootcamp de programación pagado",
      "Los estudiantes completan en promedio 8 proyectos reales en sus primeros 3 meses",
      "Tasa de finalización del 85% frente al promedio de la industria del 13% en cursos en línea",
      "Varios estudiantes ya consiguieron pasantías y trabajos freelance",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    links: [
      { label: "Visitar Waldo's Code Lab", href: "https://waldoscodelab.com" },
    ],
  },

  "babybloom": {
    title: "BabyBloom",
    subtitle: "Seguimiento inteligente del bebé",
    gradient: "from-pink-500 to-rose-500",
    summary:
      "Una app de seguimiento del bebé con IA que ayuda a las familias a registrar tomas, sueño, hitos y crecimiento, todo en un solo lugar.",
    story:
      "Después de mi experiencia con Mila en la UCIN, vi de primera mano lo abrumador que es para los padres llevar el control de todo lo relacionado con la salud de su bebé. BabyBloom nació de ese mismo deseo de ayudar a las familias a sentirse informadas y en control. Los padres pueden registrar tomas, sueño, pañales e hitos en lenguaje natural: solo cuentas lo que pasó y la IA se encarga del resto.",
    problem:
      "Los padres primerizos están agotados y haciendo malabares con decenas de cosas a la vez. Registrar a mano cada toma, cambio de pañal y siesta en formularios rígidos es tedioso. Y cuando llega la visita al pediatra, armar el rompecabezas con notas dispersas es estresante.",
    approach: [
      "Entrada en lenguaje natural con IA: solo escribe o di lo que pasó y se registra automáticamente",
      "Seguimiento de tomas, sueño, pañales, hitos, crecimiento, vacunas y síntomas de enfermedad",
      "Soporte para varios hijos, incluido el cálculo de edad corregida para bebés prematuros",
      "Reportes listos para el pediatra generados automáticamente a partir de los datos registrados",
    ],
    impact: [
      "El tiempo de registro bajó de 2-3 minutos por entrada a menos de 10 segundos con lenguaje natural",
      "Registra más de 12 categorías de datos (tomas, sueño, pañales, hitos, crecimiento, vacunas y más)",
      "Reportes para el pediatra generados en 30 segundos, ahorrando 1-2 horas de preparación antes de cada control de niño sano",
      "El cálculo de edad corregida para prematuros garantiza que el seguimiento de hitos sea preciso dentro de la línea de tiempo ajustada",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Vercel"],
    links: [
      { label: "Probar BabyBloom", href: "https://baby-tracking-app-silk.vercel.app" },
    ],
  },

  "shining-image-platform": {
    title: "Plataforma Shining Image",
    subtitle: "Suite de operaciones del negocio",
    gradient: "from-cyan-500 to-teal-500",
    summary:
      "Una plataforma completa de gestión del negocio con reservas, facturación, agenda y gestión de clientes.",
    story:
      "Shining Image of Texas hacía malabares con varias herramientas: una para la agenda, otra para facturar, hojas de cálculo para los clientes y notas adhesivas para todo lo demás. Era un caos. Les construí una plataforma todo en uno que se encarga de todo para que puedan enfocarse en dirigir su negocio en lugar de pelear con el software.",
    problem:
      "Los pequeños negocios de servicios pierden horas cada semana saltando entre apps, copiando datos e intentando mantener todo sincronizado. Necesitan un solo sistema que lo haga todo.",
    approach: [
      "Plataforma unificada que maneja agenda, facturación y gestión de clientes",
      "Procesamiento de pagos integrado mediante Stripe",
      "Recordatorios y seguimientos automáticos para que todo funcione sin contratiempos",
      "Adaptada a móviles para que el equipo acceda a todo desde el lugar de trabajo",
    ],
    impact: [
      "Reemplazó 4 herramientas distintas, ahorrando $180 al mes en suscripciones de software",
      "El tiempo para crear una factura bajó de 45 minutos a 3 minutos por trabajo",
      "La cobranza mejoró un 35%: menos pagos atrasados y un flujo de caja más rápido",
      "El tiempo administrativo se redujo 8 horas por semana, liberando tiempo para más trabajos",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    links: [
      { label: "Visitar la plataforma", href: "https://shining-image.vercel.app" },
    ],
  },

  "autospa-bqt": {
    title: "AutoSpa BQT",
    subtitle: "Plataforma de detallado de autos a domicilio",
    gradient: "from-red-500 to-rose-500",
    summary:
      "Un sistema completo de reservas, facturación y agenda para un negocio móvil de detallado de autos de lujo.",
    story:
      "AutoSpa lleva el detallado premium de autos directamente a la casa de sus clientes en Boquete, Panamá. Manejaban todo por mensajes de WhatsApp y notas en papel: se perdían citas, las facturas eran inconsistentes y no tenían una forma fácil de darle seguimiento a su negocio. Les construí una plataforma profesional que maneja todo, desde la reserva hasta el pago, para que puedan enfocarse en dejar los autos impecables.",
    problem:
      "Los negocios de servicios móviles enfrentan retos únicos: siempre están en movimiento, los clientes esperan comodidad y gestionar citas en distintas ubicaciones sin una oficina fija es caótico. Las herramientas de agenda tradicionales no se ajustan a esta forma de trabajar.",
    approach: [
      "Sistema de reservas en línea donde los clientes ven los horarios disponibles y reservan al instante",
      "Paquetes de servicio con precios claros según el tipo de vehículo y el nivel de detallado",
      "Panel de administración pensado primero para móviles, para que el equipo gestione todo desde el teléfono",
      "Facturación y procesamiento de pagos integrados mediante Stripe",
      "Recordatorios automáticos de citas para reducir las ausencias",
    ],
    impact: [
      "Las reservas en línea aumentaron los ingresos un 28% en los primeros 2 meses",
      "Cero reservas duplicadas desde el lanzamiento, frente a 2-3 al mes antes",
      "El valor promedio por reserva subió un 15% con sugerencias de servicios adicionales durante el pago",
      "La tasa de clientes recurrentes mejoró del 40% al 65% con seguimientos automáticos",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    links: [
      { label: "Visitar AutoSpa BQT", href: "https://autospabqt.com" },
    ],
  },
};

/** ---------- Page ---------- */
export default function ProjectPageEs({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const proj = DATA[slug];
  if (!proj) return notFound();

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/es/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#FF6A3D] dark:hover:text-[#FF8A5B] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${proj.gradient} text-white text-sm font-medium mb-4`}>
            {proj.subtitle}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            {proj.title}
          </h1>
          <p className="mt-4 text-xl text-slate-600 dark:text-slate-400">
            {proj.summary}
          </p>
        </motion.div>

        {/* Story - The "Why" */}
        {proj.story && (
          <motion.section
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-500" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Por qué lo construí</h2>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {proj.story}
              </p>
            </div>
          </motion.section>
        )}

        {/* Problem */}
        {proj.problem && (
          <motion.section
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">El problema</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {proj.problem}
            </p>
          </motion.section>
        )}

        {/* Approach */}
        {proj.approach && proj.approach.length > 0 && (
          <motion.section
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cómo funciona</h2>
            <ul className="space-y-3">
              {proj.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${proj.gradient} shrink-0`} />
                  <span className="text-slate-600 dark:text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Impact */}
        {proj.impact && proj.impact.length > 0 && (
          <motion.section
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">El impacto</h2>
            <div className="grid gap-4">
              {proj.impact.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Stack */}
        <motion.section
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Construido con</h2>
          <div className="flex flex-wrap gap-2">
            {proj.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Links */}
        {proj.links && proj.links.length > 0 && (
          <motion.section
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-wrap gap-4">
              {proj.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${proj.gradient} text-white font-medium hover:opacity-90 transition-opacity shadow-lg`}
                >
                  {link.label}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA */}
        <motion.section
          className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              ¿Te interesa que trabajemos juntos?
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Conversemos sobre cómo puedo ayudarte con tu proyecto.
            </p>
            <Link
              href="/es/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6A3D] to-[#FF8A4C] text-white font-medium hover:from-[#FF7E54] hover:to-[#FF9B63] transition-all shadow-lg shadow-[#FF6A3D]/25"
            >
              Hablemos
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
