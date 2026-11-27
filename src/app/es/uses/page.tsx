"use client";

import { motion } from "framer-motion";
import { Wrench, Database } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

// Helper to get icon URL - uses jsdelivr CDN which is more reliable
const getIconUrl = (slug: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;

interface Tool {
  name: string;
  description: string;
  logo: string; // Simple Icons slug
  url: string;
  invertInDark?: boolean; // For logos that need inversion in dark mode
  useFallback?: boolean; // Use Lucide icon instead of Simple Icons
}

interface ToolCategory {
  title: string;
  description: string;
  tools: Tool[];
}

const toolCategories: ToolCategory[] = [
  {
    title: "Lenguajes",
    description: "Los lenguajes que de verdad escribo — a diario, cada semana o aprendidos estudiando",
    tools: [
      {
        name: "TypeScript",
        description: "Mi lenguaje de cada día, con tipado seguro, para frontends, servicios y APIs en Node",
        logo: "typescript",
        url: "https://typescriptlang.org",
      },
      {
        name: "Python",
        description: "Servicios FastAPI, trabajo de ML/datos, servidores MCP y herramientas de documentos",
        logo: "python",
        url: "https://python.org",
      },
      {
        name: "JavaScript",
        description: "Donde viven Node.js, las APIs del navegador y casi todo el ecosistema",
        logo: "javascript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "Swift / SwiftUI",
        description: "Clientes iOS nativos con federación OAuth contra la plataforma",
        logo: "swift",
        url: "https://www.swift.org",
      },
      {
        name: "Kotlin",
        description: "Clientes Android nativos con Gradle KTS",
        logo: "kotlin",
        url: "https://kotlinlang.org",
      },
      {
        name: "Java 21",
        description: "Microservicios Spring Boot 3 para sistemas orientados a eventos y de salud",
        logo: "openjdk",
        url: "https://openjdk.org",
        invertInDark: true,
      },
      {
        name: "SQL",
        description: "A estas alturas, el SQL estilo Postgres es memoria muscular",
        logo: "postgresql",
        url: "https://postgresql.org",
      },
    ],
  },
  {
    title: "Ingeniería de IA y LLMs",
    description: "Los proveedores de modelos, protocolos y frameworks sobre los que construyo agentes",
    tools: [
      {
        name: "Anthropic Claude",
        description: "LLM principal en los agentes en producción y en el ecosistema de TheGreyMatter.ai",
        logo: "anthropic",
        url: "https://www.anthropic.com",
        invertInDark: true,
      },
      {
        name: "OpenAI",
        description: "Embeddings y un modelo de respaldo probado en batalla para algunos pipelines",
        logo: "openai",
        url: "https://openai.com",
        invertInDark: true,
      },
      {
        name: "Google Gemini",
        description: "Modelo multimodal y de contexto largo para líneas de evaluación específicas",
        logo: "googlegemini",
        url: "https://ai.google.dev",
      },
      {
        name: "DeepSeek",
        description: "Modelo open-source de razonamiento muy capaz — ideal para benchmarks y self-hosting",
        logo: "deepseek",
        url: "https://www.deepseek.com",
      },
      {
        name: "Kimi",
        description: "El modelo de contexto largo de Moonshot — útil cuando el presupuesto de contexto es el cuello de botella",
        logo: "kimi",
        url: "https://kimi.moonshot.cn",
        useFallback: true,
      },
      {
        name: "Ollama",
        description: "Inferencia local de LLMs para flujos privados, offline y de desarrollo",
        logo: "ollama",
        url: "https://ollama.com",
        invertInDark: true,
      },
      {
        name: "OpenClaw",
        description: "Framework de asistente personal de IA local-first — agente multicanal que corre en mi propio hardware",
        logo: "openclaw",
        url: "https://github.com/openclaw/openclaw",
        useFallback: true,
      },
      {
        name: "Model Context Protocol",
        description: "Servidores MCP que exponen las APIs del producto a agentes de Claude de forma segura",
        logo: "anthropic",
        url: "https://modelcontextprotocol.io",
        invertInDark: true,
      },
      {
        name: "LangChain",
        description: "Pipelines y herramientas de LLM componibles — lo uso donde realmente aporta",
        logo: "langchain",
        url: "https://langchain.com",
      },
      {
        name: "Hugging Face",
        description: "Modelos open-source, datasets y la casa del ML aplicado",
        logo: "huggingface",
        url: "https://huggingface.co",
      },
    ],
  },
  {
    title: "Voice AI y tiempo real",
    description: "Voz que entra, voz que sale: agentes telefónicos que suenan humanos",
    tools: [
      {
        name: "Twilio Voice",
        description: "Telefonía en producción — llamadas entrantes/salientes, SIP, media streams",
        logo: "twilio",
        url: "https://www.twilio.com/voice",
      },
      {
        name: "Whisper",
        description: "Speech-to-text para transcripción en tiempo real y análisis asíncrono de llamadas",
        logo: "openai",
        url: "https://openai.com/research/whisper",
        useFallback: true,
      },
      {
        name: "ElevenLabs",
        description: "Text-to-speech que suena a persona, no a llamada robotizada",
        logo: "elevenlabs",
        url: "https://elevenlabs.io",
        useFallback: true,
      },
    ],
  },
  {
    title: "Evaluación y trazabilidad de LLMs",
    description: "Cómo mantengo visible la calidad de los agentes y detecto las regresiones a tiempo",
    tools: [
      {
        name: "Langfuse",
        description: "Observabilidad de LLMs open-source, tracing y gestión de prompts",
        logo: "langfuse",
        url: "https://langfuse.com",
        useFallback: true,
      },
      {
        name: "Giskard",
        description: "Testing open-source para LLMs y ML — robustez, sesgo y pruebas de alucinaciones",
        logo: "giskard",
        url: "https://www.giskard.ai",
        useFallback: true,
      },
      {
        name: "Arize",
        description: "Observabilidad y evaluación de LLMs en producción a escala",
        logo: "arize",
        url: "https://arize.com",
        useFallback: true,
      },
      {
        name: "Confident AI",
        description: "Suites de evaluación con DeepEval conectadas a los gates de release",
        logo: "confidentai",
        url: "https://www.confident-ai.com",
        useFallback: true,
      },
    ],
  },
  {
    title: "Frontend",
    description: "Lo que uso para construir interfaces de producto y este sitio",
    tools: [
      {
        name: "Next.js",
        description: "App Router, RSC, server actions — mi opción por defecto para nuevos productos",
        logo: "nextdotjs",
        url: "https://nextjs.org",
        invertInDark: true,
      },
      {
        name: "React",
        description: "Modelo de componentes universal en todo el ecosistema",
        logo: "react",
        url: "https://react.dev",
      },
      {
        name: "Vite",
        description: "Dev/build rápido para dashboards SPA y herramientas internas",
        logo: "vite",
        url: "https://vitejs.dev",
      },
      {
        name: "Tailwind CSS",
        description: "Sistema de diseño utility-first para todo lo que lanzo",
        logo: "tailwindcss",
        url: "https://tailwindcss.com",
      },
      {
        name: "anime.js",
        description: "Animación de scroll/timeline para las partes de la UI que deben sentirse vivas",
        logo: "animejs",
        url: "https://animejs.com",
        useFallback: true,
      },
      {
        name: "Framer Motion",
        description: "Animación a nivel de componente donde React + física de resortes brillan",
        logo: "framer",
        url: "https://www.framer.com/motion",
      },
      {
        name: "Lucide",
        description: "Mi librería de íconos por defecto para una UI limpia y consistente",
        logo: "lucide",
        url: "https://lucide.dev",
      },
      {
        name: "Recharts",
        description: "Gráficos sensatos para dashboards y reportes",
        logo: "recharts",
        url: "https://recharts.org",
        useFallback: true,
      },
    ],
  },
  {
    title: "Backend",
    description: "Frameworks para APIs, servicios y trabajo asíncrono",
    tools: [
      {
        name: "FastAPI",
        description: "Framework asíncrono de Python para servicios de IA y APIs cercanas a MCP",
        logo: "fastapi",
        url: "https://fastapi.tiangolo.com",
      },
      {
        name: "Express",
        description: "El caballo de batalla para APIs REST en Node.js y handlers de Azure Functions",
        logo: "express",
        url: "https://expressjs.com",
        invertInDark: true,
      },
      {
        name: "Fastify",
        description: "Cuando el overhead de Express se vuelve un cuello de botella real",
        logo: "fastify",
        url: "https://fastify.dev",
        invertInDark: true,
      },
      {
        name: "Spring Boot 3",
        description: "Microservicios Java con Resilience4j, Spring Kafka y Actuator",
        logo: "springboot",
        url: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Pydantic + Zod",
        description: "Esquemas como contratos en cada frontera de API, en Python y TS",
        logo: "pydantic",
        url: "https://docs.pydantic.dev",
        useFallback: true,
      },
    ],
  },
  {
    title: "Móvil",
    description: "Clientes nativos que comparten autenticación e identidad con la plataforma",
    tools: [
      {
        name: "Swift + SwiftUI",
        description: "App iOS que habla con la misma capa OAuth/JWT que los productos web",
        logo: "swift",
        url: "https://developer.apple.com/swiftui",
      },
      {
        name: "Kotlin + Gradle KTS",
        description: "App Android con la misma federación de autenticación y APIs compartidas",
        logo: "kotlin",
        url: "https://kotlinlang.org",
      },
    ],
  },
  {
    title: "Datos, caché y streaming",
    description: "Bases de datos, colas y la columna vertebral de eventos por debajo",
    tools: [
      {
        name: "PostgreSQL",
        description: "Base relacional por defecto — a veces con Neon serverless encima",
        logo: "postgresql",
        url: "https://postgresql.org",
      },
      {
        name: "Azure Cosmos DB",
        description: "NoSQL por aplicación con multi-región, usado en todo el ecosistema",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/cosmos-db",
      },
      {
        name: "MongoDB",
        description: "Base documental para algunos servicios específicos",
        logo: "mongodb",
        url: "https://www.mongodb.com",
      },
      {
        name: "Redis",
        description: "Caché, sesiones, contadores de rate limit y coordinación efímera",
        logo: "redis",
        url: "https://redis.io",
      },
      {
        name: "MinIO / S3",
        description: "Almacenamiento de objetos compatible con S3 para archivos, exportaciones y backups",
        logo: "minio",
        url: "https://min.io",
        useFallback: true,
      },
      {
        name: "Apache Kafka / Redpanda",
        description: "Streaming de eventos para ingesta, normalización y flujos reactivos",
        logo: "apachekafka",
        url: "https://kafka.apache.org",
        invertInDark: true,
      },
      {
        name: "Drizzle ORM",
        description: "ORM SQL-first y kit de esquemas cuando quiero tipado seguro sin ceremonia",
        logo: "drizzle",
        url: "https://orm.drizzle.team",
        useFallback: true,
      },
    ],
  },
  {
    title: "Cloud — Azure (principal)",
    description: "Donde vive la mayoría de los servicios en producción",
    tools: [
      {
        name: "Azure Functions",
        description: "Cómputo serverless detrás de la mayoría de las APIs del ecosistema",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/functions",
      },
      {
        name: "Azure Key Vault",
        description: "Secretos, llaves y cifrado de sobre (envelope encryption) para documentos",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/key-vault",
      },
      {
        name: "Azure Storage (Blob)",
        description: "Almacenamiento de documentos y assets en todos los productos",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/storage/blobs",
      },
      {
        name: "Azure Bicep",
        description: "Infraestructura como código para todo lo de Azure",
        logo: "microsoftazure",
        url: "https://learn.microsoft.com/azure/azure-resource-manager/bicep",
      },
    ],
  },
  {
    title: "Cloud — más allá de Azure",
    description: "Las otras plataformas donde despliego",
    tools: [
      {
        name: "AWS (S3)",
        description: "Almacenamiento de objetos y flujos con URLs firmadas para apps de consumo",
        logo: "amazonwebservices",
        url: "https://aws.amazon.com",
        invertInDark: true,
      },
      {
        name: "Vercel",
        description: "Despliegues de frontend, edge functions y donde vive este sitio",
        logo: "vercel",
        url: "https://vercel.com",
        invertInDark: true,
      },
      {
        name: "Supabase",
        description: "Postgres + auth + storage para proyectos personales rápidos",
        logo: "supabase",
        url: "https://supabase.com",
      },
    ],
  },
  {
    title: "Autenticación, identidad y políticas",
    description: "Cómo dejo entrar a quien debe y dejo fuera a quien no",
    tools: [
      {
        name: "Keycloak (OIDC)",
        description: "SSO + federación de nivel producción cuando alojo la identidad yo mismo",
        logo: "keycloak",
        url: "https://www.keycloak.org",
        useFallback: true,
      },
      {
        name: "NextAuth.js",
        description: "Identidad lista para usar en apps Next.js",
        logo: "nextauth",
        url: "https://authjs.dev",
        useFallback: true,
      },
      {
        name: "JWT / JOSE",
        description: "Mi formato de token preferido — jsonwebtoken, jose o PyJWT según el lenguaje",
        logo: "jsonwebtokens",
        url: "https://jwt.io",
      },
      {
        name: "Azure MSAL",
        description: "Flujos OAuth de Azure AD / Entra en las apps de producto",
        logo: "microsoftazure",
        url: "https://learn.microsoft.com/entra/identity-platform/msal-overview",
      },
      {
        name: "bcrypt / argon2",
        description: "Hashing de contraseñas donde todavía hace falta",
        logo: "bcrypt",
        url: "https://en.wikipedia.org/wiki/Bcrypt",
        useFallback: true,
      },
      {
        name: "Open Policy Agent",
        description: "Policy-as-code con Rego para decisiones que no le corresponden a la lógica de negocio",
        logo: "openpolicyagent",
        url: "https://www.openpolicyagent.org",
        useFallback: true,
      },
    ],
  },
  {
    title: "Observabilidad",
    description: "Cómo sé lo que realmente está pasando en producción",
    tools: [
      {
        name: "OpenTelemetry",
        description: "Instrumentación neutral al proveedor — trazas, métricas y logs en todas partes",
        logo: "opentelemetry",
        url: "https://opentelemetry.io",
        invertInDark: true,
      },
      {
        name: "Grafana",
        description: "Dashboards sobre el stack LGTM — Loki para logs, Tempo para trazas",
        logo: "grafana",
        url: "https://grafana.com",
      },
      {
        name: "Prometheus",
        description: "Recolección de métricas por pull para servicios self-hosted",
        logo: "prometheus",
        url: "https://prometheus.io",
      },
      {
        name: "Application Insights",
        description: "Telemetría nativa de Azure en Functions, App Services y frontends",
        logo: "microsoftazure",
        url: "https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview",
      },
      {
        name: "Resilience4j",
        description: "Circuit breakers, reintentos, bulkheads y timeouts en servicios Java",
        logo: "resilience4j",
        url: "https://resilience4j.readme.io",
        useFallback: true,
      },
    ],
  },
  {
    title: "DevOps e infraestructura",
    description: "Cómo el código se convierte en servicios corriendo",
    tools: [
      {
        name: "Docker + Docker Compose",
        description: "Paridad con el entorno local, stacks de pruebas de integración y contenedores de producción",
        logo: "docker",
        url: "https://www.docker.com",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD en cada repo — build, test, despliegue y escaneo",
        logo: "githubactions",
        url: "https://github.com/features/actions",
      },
      {
        name: "Terraform",
        description: "IaC para la infraestructura fuera de Azure",
        logo: "terraform",
        url: "https://terraform.io",
      },
      {
        name: "Gradle",
        description: "Build y gestión de dependencias para Java/Kotlin",
        logo: "gradle",
        url: "https://gradle.org",
      },
      {
        name: "Makefiles",
        description: "El pegamento de la experiencia de desarrollo cuando no hace falta nada más sofisticado",
        logo: "gnubash",
        url: "https://www.gnu.org/software/make/",
        useFallback: true,
      },
      {
        name: "browserless",
        description: "Chrome headless como servicio — impulsa pipelines automatizados de escaneo, PDF y capturas",
        logo: "browserless",
        url: "https://www.browserless.io",
        useFallback: true,
      },
    ],
  },
  {
    title: "Testing",
    description: "Cómo evito que las cosas se rompan en producción",
    tools: [
      {
        name: "Vitest",
        description: "Test runner moderno y rápido para proyectos TS/JS",
        logo: "vitest",
        url: "https://vitest.dev",
      },
      {
        name: "Jest",
        description: "Servicios Node más antiguos que siguen en Jest",
        logo: "jest",
        url: "https://jestjs.io",
      },
      {
        name: "Pytest",
        description: "Testing en Python con soporte async para servicios FastAPI",
        logo: "pytest",
        url: "https://pytest.org",
      },
      {
        name: "Playwright",
        description: "Pruebas end-to-end en navegador para las interfaces de producto",
        logo: "playwright",
        url: "https://playwright.dev",
      },
      {
        name: "JUnit 5",
        description: "Suite de pruebas de Spring Boot",
        logo: "junit5",
        url: "https://junit.org/junit5",
      },
    ],
  },
  {
    title: "Pagos, integraciones y documentos",
    description: "Las herramientas aburridas pero imprescindibles que necesita un producto real",
    tools: [
      {
        name: "Stripe",
        description: "Pagos en productos para clientes y apps de consumo",
        logo: "stripe",
        url: "https://stripe.com",
      },
      {
        name: "QuickBooks",
        description: "Sincronización contable y automatización para flujos de pymes",
        logo: "quickbooks",
        url: "https://quickbooks.intuit.com",
      },
      {
        name: "Plaid",
        description: "Conexión bancaria para proyectos de finanzas personales",
        logo: "plaid",
        url: "https://plaid.com",
        useFallback: true,
      },
      {
        name: "jsPDF + pdfkit",
        description: "Generación de PDF en el navegador y en Node",
        logo: "adobeacrobatreader",
        url: "https://github.com/parallax/jsPDF",
        useFallback: true,
      },
      {
        name: "PptxGenJS + python-pptx",
        description: "Exportaciones programáticas a PowerPoint para reportes y presentaciones de directorio",
        logo: "pptx",
        url: "https://gitbrent.github.io/PptxGenJS/",
        useFallback: true,
      },
      {
        name: "mammoth + docx",
        description: "Lectura y generación de documentos Word",
        logo: "microsoftword",
        url: "https://github.com/mwilliamson/mammoth.js",
        useFallback: true,
      },
    ],
  },
  {
    title: "Editor y pair programming con IA",
    description: "Donde de verdad escribo código, y la IA que lo escribe conmigo",
    tools: [
      {
        name: "VS Code",
        description: "Mi editor diario para todo lo que no es Java",
        logo: "visualstudiocode",
        url: "https://code.visualstudio.com",
      },
      {
        name: "Cursor",
        description: "Editor nativo de IA cuando quiero que el IDE escriba conmigo activamente",
        logo: "cursor",
        url: "https://cursor.com",
      },
      {
        name: "Claude Code",
        description: "El CLI de Anthropic — hace trabajo autónomo serio en la terminal",
        logo: "anthropic",
        url: "https://www.anthropic.com/claude-code",
        invertInDark: true,
      },
      {
        name: "GitHub Copilot",
        description: "Sugerencias en línea en distintos editores",
        logo: "githubcopilot",
        url: "https://github.com/features/copilot",
        invertInDark: true,
      },
      {
        name: "Git + GitHub",
        description: "Control de versiones. El cherry-pick, el bisect, el rebase",
        logo: "git",
        url: "https://git-scm.com",
      },
    ],
  },
  {
    title: "Diseño y productividad",
    description: "Donde viven las ideas, los planes y las conversaciones",
    tools: [
      {
        name: "Figma",
        description: "Diseño UI/UX y prototipado",
        logo: "figma",
        url: "https://figma.com",
      },
      {
        name: "Notion",
        description: "Documentación, planificación y la base de conocimiento de todo lo que construyo",
        logo: "notion",
        url: "https://notion.so",
        invertInDark: true,
      },
      {
        name: "Linear",
        description: "Seguimiento de issues y roadmaps que no estorban",
        logo: "linear",
        url: "https://linear.app",
        invertInDark: true,
      },
      {
        name: "Slack",
        description: "Comunicación del equipo",
        logo: "slack",
        url: "https://slack.com",
      },
    ],
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-[#FF6A3D]/50 hover:shadow-lg hover:shadow-[#FF6A3D]/5 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-2.5 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
        {tool.useFallback ? (
          <Database className="w-7 h-7 text-[#FF6A3D]" />
        ) : (
          <Image
            src={getIconUrl(tool.logo)}
            alt={`Logo de ${tool.name}`}
            width={28}
            height={28}
            className={`w-7 h-7 ${tool.invertInDark ? "dark:invert" : ""}`}
            unoptimized
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-[#FF6A3D] dark:group-hover:text-[#FF8A5B] transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
          {tool.description}
        </p>
      </div>
    </a>
  );
}

export default function UsesPageEs() {
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-[#FF6A3D] dark:text-[#FF8A5B]">
                Stack tecnológico
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Lo que uso
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Los lenguajes, frameworks, plataformas y herramientas que realmente uso —
              en ingeniería de IA, web full-stack, móvil nativo, datos y streaming de
              eventos, observabilidad y operaciones. La mayoría se gana su lugar en
              producción; algunas viven en mis estudios, proyectos personales y cursos.
            </p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-500 max-w-2xl">
              Lo actualizo con frecuencia. No es exhaustivo — aquí está lo que uso
              activamente o con lo que he lanzado algo que importa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="relative px-4 pb-20">
        <Reveal staggerMs={80} className="max-w-4xl mx-auto space-y-12">
          {toolCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {category.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {category.tools.map((tool) => (
                  <ToolCard key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Footer note */}
      <section className="relative px-4 pb-16">
        <Reveal className="max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FF6A3D]/10 to-[#2DD4BF]/10 border border-[#FF6A3D]/20">
            <p className="text-slate-600 dark:text-slate-400 text-center">
              ¿Te intriga por qué elegí cierta herramienta — o qué usaría en su lugar?{" "}
              <a
                href="/es/contact"
                className="text-[#FF6A3D] dark:text-[#FF8A5B] font-medium hover:underline"
              >
                Escríbeme
              </a>
              . De verdad disfruto estas conversaciones.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
