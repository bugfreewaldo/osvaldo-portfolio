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
    title: "Languages",
    description: "The languages I actually write — daily, weekly, or earned through study",
    tools: [
      {
        name: "TypeScript",
        description: "Type-safe daily driver for frontends, services, and Node APIs",
        logo: "typescript",
        url: "https://typescriptlang.org",
      },
      {
        name: "Python",
        description: "FastAPI services, ML/data work, MCP servers, document tooling",
        logo: "python",
        url: "https://python.org",
      },
      {
        name: "JavaScript",
        description: "Where Node.js, browser APIs, and most of the ecosystem live",
        logo: "javascript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "Swift / SwiftUI",
        description: "Native iOS clients with OAuth federation against the platform",
        logo: "swift",
        url: "https://www.swift.org",
      },
      {
        name: "Kotlin",
        description: "Native Android clients with Gradle KTS",
        logo: "kotlin",
        url: "https://kotlinlang.org",
      },
      {
        name: "Java 21",
        description: "Spring Boot 3 microservices for event-driven and healthcare systems",
        logo: "openjdk",
        url: "https://openjdk.org",
        invertInDark: true,
      },
      {
        name: "SQL",
        description: "Postgres-shaped SQL is muscle memory at this point",
        logo: "postgresql",
        url: "https://postgresql.org",
      },
    ],
  },
  {
    title: "AI Engineering & LLMs",
    description: "The model providers, frameworks, and protocols I build agents on",
    tools: [
      {
        name: "Anthropic Claude",
        description: "Primary LLM across production agents and the TheGreyMatter.ai ecosystem",
        logo: "anthropic",
        url: "https://www.anthropic.com",
        invertInDark: true,
      },
      {
        name: "OpenAI",
        description: "Embeddings and a battle-tested fallback model for some pipelines",
        logo: "openai",
        url: "https://openai.com",
        invertInDark: true,
      },
      {
        name: "Model Context Protocol",
        description: "MCP servers that expose product APIs to Claude agents safely",
        logo: "anthropic",
        url: "https://modelcontextprotocol.io",
        invertInDark: true,
      },
      {
        name: "LangChain",
        description: "Composable LLM pipelines and tooling — used where it earns its weight",
        logo: "langchain",
        url: "https://langchain.com",
      },
      {
        name: "Hugging Face",
        description: "Open-source models, datasets, and the home page of applied ML",
        logo: "huggingface",
        url: "https://huggingface.co",
      },
      {
        name: "Twilio Voice + Whisper + ElevenLabs",
        description: "Real-time voice AI: STT, conversation, TTS, phone agents",
        logo: "twilio",
        url: "https://www.twilio.com",
      },
    ],
  },
  {
    title: "Frontend",
    description: "What I reach for when building product UIs and this site",
    tools: [
      {
        name: "Next.js",
        description: "App Router, RSC, server actions — the default for new product surfaces",
        logo: "nextdotjs",
        url: "https://nextjs.org",
        invertInDark: true,
      },
      {
        name: "React",
        description: "Universal component model across the ecosystem",
        logo: "react",
        url: "https://react.dev",
      },
      {
        name: "Vite",
        description: "Fast dev/build for SPA dashboards and internal tools",
        logo: "vite",
        url: "https://vitejs.dev",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first design system for everything I ship",
        logo: "tailwindcss",
        url: "https://tailwindcss.com",
      },
      {
        name: "anime.js",
        description: "Scroll/timeline motion for the parts of UI that should feel alive",
        logo: "animejs",
        url: "https://animejs.com",
        useFallback: true,
      },
      {
        name: "Framer Motion",
        description: "Component-level animation where React + spring physics shine",
        logo: "framer",
        url: "https://www.framer.com/motion",
      },
      {
        name: "Lucide",
        description: "Icon library I default to for clean, consistent UI",
        logo: "lucide",
        url: "https://lucide.dev",
      },
      {
        name: "Recharts",
        description: "Sensible charting for dashboards and reports",
        logo: "recharts",
        url: "https://recharts.org",
        useFallback: true,
      },
    ],
  },
  {
    title: "Backend",
    description: "Frameworks for APIs, services, and async work",
    tools: [
      {
        name: "FastAPI",
        description: "Async Python framework for AI services and MCP-adjacent APIs",
        logo: "fastapi",
        url: "https://fastapi.tiangolo.com",
      },
      {
        name: "Express",
        description: "Workhorse for Node.js REST APIs and Azure Functions handlers",
        logo: "express",
        url: "https://expressjs.com",
        invertInDark: true,
      },
      {
        name: "Fastify",
        description: "When Express's overhead becomes a real bottleneck",
        logo: "fastify",
        url: "https://fastify.dev",
        invertInDark: true,
      },
      {
        name: "Spring Boot 3",
        description: "Java microservices with Resilience4j, Spring Kafka, and Actuator",
        logo: "springboot",
        url: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Pydantic + Zod",
        description: "Schemas as contracts at every API boundary, in Python and TS",
        logo: "pydantic",
        url: "https://docs.pydantic.dev",
        useFallback: true,
      },
    ],
  },
  {
    title: "Mobile",
    description: "Native clients that share auth and identity with the platform",
    tools: [
      {
        name: "Swift + SwiftUI",
        description: "iOS app talking to the same OAuth/JWT layer as the web products",
        logo: "swift",
        url: "https://developer.apple.com/swiftui",
      },
      {
        name: "Kotlin + Gradle KTS",
        description: "Android app with the same auth federation and shared APIs",
        logo: "kotlin",
        url: "https://kotlinlang.org",
      },
    ],
  },
  {
    title: "Data, Caching & Streaming",
    description: "Databases, queues, and the event backbone underneath",
    tools: [
      {
        name: "PostgreSQL",
        description: "Default relational store — sometimes with Neon serverless on top",
        logo: "postgresql",
        url: "https://postgresql.org",
      },
      {
        name: "Azure Cosmos DB",
        description: "Per-app NoSQL with multi-region, used across the ecosystem",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/cosmos-db",
      },
      {
        name: "MongoDB",
        description: "Document store for a few specific services",
        logo: "mongodb",
        url: "https://www.mongodb.com",
      },
      {
        name: "Redis",
        description: "Cache, sessions, rate-limit counters, ephemeral coordination",
        logo: "redis",
        url: "https://redis.io",
      },
      {
        name: "MinIO / S3",
        description: "S3-compatible object storage for files, exports, and backups",
        logo: "minio",
        url: "https://min.io",
        useFallback: true,
      },
      {
        name: "Apache Kafka / Redpanda",
        description: "Event streaming for ingestion, normalization, and reactive workflows",
        logo: "apachekafka",
        url: "https://kafka.apache.org",
        invertInDark: true,
      },
      {
        name: "Drizzle ORM",
        description: "SQL-first ORM and schema kit when I want type safety without ceremony",
        logo: "drizzle",
        url: "https://orm.drizzle.team",
        useFallback: true,
      },
    ],
  },
  {
    title: "Cloud — Azure (primary)",
    description: "Where most production services live",
    tools: [
      {
        name: "Azure Functions",
        description: "Serverless compute behind most ecosystem APIs",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/functions",
      },
      {
        name: "Azure Key Vault",
        description: "Secrets, keys, and envelope encryption for documents",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/key-vault",
      },
      {
        name: "Azure Storage (Blob)",
        description: "Document and asset storage across products",
        logo: "microsoftazure",
        url: "https://azure.microsoft.com/products/storage/blobs",
      },
      {
        name: "Azure Bicep",
        description: "Infrastructure-as-code for everything Azure",
        logo: "microsoftazure",
        url: "https://learn.microsoft.com/azure/azure-resource-manager/bicep",
      },
    ],
  },
  {
    title: "Cloud — beyond Azure",
    description: "The other platforms I deploy to",
    tools: [
      {
        name: "AWS (S3)",
        description: "Object storage and signed-URL workflows for consumer apps",
        logo: "amazonwebservices",
        url: "https://aws.amazon.com",
        invertInDark: true,
      },
      {
        name: "Vercel",
        description: "Frontend deploys, edge functions, and where this site lives",
        logo: "vercel",
        url: "https://vercel.com",
        invertInDark: true,
      },
      {
        name: "Supabase",
        description: "Postgres + auth + storage for fast personal projects",
        logo: "supabase",
        url: "https://supabase.com",
      },
    ],
  },
  {
    title: "Auth, Identity & Policy",
    description: "How I keep the right people in and the wrong people out",
    tools: [
      {
        name: "Keycloak (OIDC)",
        description: "Production-grade SSO + federation when self-hosting identity",
        logo: "keycloak",
        url: "https://www.keycloak.org",
        useFallback: true,
      },
      {
        name: "NextAuth.js",
        description: "Drop-in identity for Next.js apps",
        logo: "nextauth",
        url: "https://authjs.dev",
        useFallback: true,
      },
      {
        name: "JWT / JOSE",
        description: "Token format of choice — jsonwebtoken, jose, PyJWT depending on language",
        logo: "jsonwebtokens",
        url: "https://jwt.io",
      },
      {
        name: "Azure MSAL",
        description: "Azure AD / Entra OAuth flows in product apps",
        logo: "microsoftazure",
        url: "https://learn.microsoft.com/entra/identity-platform/msal-overview",
      },
      {
        name: "bcrypt / argon2",
        description: "Password hashing where I still need it",
        logo: "bcrypt",
        url: "https://en.wikipedia.org/wiki/Bcrypt",
        useFallback: true,
      },
      {
        name: "Open Policy Agent",
        description: "Rego-based policy-as-code for decisions business logic shouldn't own",
        logo: "openpolicyagent",
        url: "https://www.openpolicyagent.org",
        useFallback: true,
      },
    ],
  },
  {
    title: "Observability",
    description: "How I know what's actually happening in production",
    tools: [
      {
        name: "OpenTelemetry",
        description: "Vendor-neutral instrumentation — traces, metrics, and logs everywhere",
        logo: "opentelemetry",
        url: "https://opentelemetry.io",
        invertInDark: true,
      },
      {
        name: "Grafana",
        description: "Dashboards backed by the LGTM stack — Loki for logs, Tempo for traces",
        logo: "grafana",
        url: "https://grafana.com",
      },
      {
        name: "Prometheus",
        description: "Pull-based metrics scraping for self-hosted services",
        logo: "prometheus",
        url: "https://prometheus.io",
      },
      {
        name: "Application Insights",
        description: "Azure-native telemetry across Functions, App Services, and frontends",
        logo: "microsoftazure",
        url: "https://learn.microsoft.com/azure/azure-monitor/app/app-insights-overview",
      },
      {
        name: "Resilience4j",
        description: "Circuit breakers, retries, bulkheads, and timeouts in Java services",
        logo: "resilience4j",
        url: "https://resilience4j.readme.io",
        useFallback: true,
      },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    description: "How code becomes running services",
    tools: [
      {
        name: "Docker + Docker Compose",
        description: "Local dev parity, integration test stacks, and prod containers",
        logo: "docker",
        url: "https://www.docker.com",
      },
      {
        name: "GitHub Actions",
        description: "CI/CD across every repo — build, test, deploy, scan",
        logo: "githubactions",
        url: "https://github.com/features/actions",
      },
      {
        name: "Terraform",
        description: "IaC for non-Azure infrastructure",
        logo: "terraform",
        url: "https://terraform.io",
      },
      {
        name: "Gradle",
        description: "Build + dependency management for Java/Kotlin",
        logo: "gradle",
        url: "https://gradle.org",
      },
      {
        name: "Makefiles",
        description: "The dev-experience glue when nothing fancier is warranted",
        logo: "gnubash",
        url: "https://www.gnu.org/software/make/",
        useFallback: true,
      },
    ],
  },
  {
    title: "Testing",
    description: "How I keep things from breaking in production",
    tools: [
      {
        name: "Vitest",
        description: "Fast modern test runner for TS/JS projects",
        logo: "vitest",
        url: "https://vitest.dev",
      },
      {
        name: "Jest",
        description: "Older Node services still on Jest",
        logo: "jest",
        url: "https://jestjs.io",
      },
      {
        name: "Pytest",
        description: "Python testing with async support for FastAPI services",
        logo: "pytest",
        url: "https://pytest.org",
      },
      {
        name: "Playwright",
        description: "End-to-end browser tests for product UIs",
        logo: "playwright",
        url: "https://playwright.dev",
      },
      {
        name: "JUnit 5",
        description: "Spring Boot test suite",
        logo: "junit5",
        url: "https://junit.org/junit5",
      },
    ],
  },
  {
    title: "Payments, Integrations & Documents",
    description: "The boring-but-load-bearing tooling that real products need",
    tools: [
      {
        name: "Stripe",
        description: "Payments across customer-facing products and consumer apps",
        logo: "stripe",
        url: "https://stripe.com",
      },
      {
        name: "QuickBooks",
        description: "Accounting sync and automation for SMB workflows",
        logo: "quickbooks",
        url: "https://quickbooks.intuit.com",
      },
      {
        name: "Plaid",
        description: "Bank linking for personal-finance projects",
        logo: "plaid",
        url: "https://plaid.com",
      },
      {
        name: "jsPDF + pdfkit",
        description: "PDF generation in the browser and Node",
        logo: "adobeacrobatreader",
        url: "https://github.com/parallax/jsPDF",
        useFallback: true,
      },
      {
        name: "PptxGenJS + python-pptx",
        description: "Programmatic PowerPoint exports for reports and board packs",
        logo: "pptx",
        url: "https://gitbrent.github.io/PptxGenJS/",
        useFallback: true,
      },
      {
        name: "mammoth + docx",
        description: "Word document parsing and generation",
        logo: "microsoftword",
        url: "https://github.com/mwilliamson/mammoth.js",
        useFallback: true,
      },
    ],
  },
  {
    title: "Editor & AI Pair Programming",
    description: "Where I actually write code, and the AI that writes it with me",
    tools: [
      {
        name: "VS Code",
        description: "Daily editor for everything not Java",
        logo: "visualstudiocode",
        url: "https://code.visualstudio.com",
      },
      {
        name: "Cursor",
        description: "AI-native editor when I want the IDE to actively co-write",
        logo: "cursor",
        url: "https://cursor.com",
      },
      {
        name: "Claude Code",
        description: "Anthropic's CLI — does serious autonomous work in the terminal",
        logo: "anthropic",
        url: "https://www.anthropic.com/claude-code",
        invertInDark: true,
      },
      {
        name: "GitHub Copilot",
        description: "Inline suggestions across editors",
        logo: "githubcopilot",
        url: "https://github.com/features/copilot",
        invertInDark: true,
      },
      {
        name: "Git + GitHub",
        description: "Version control. The cherry-pick, the bisect, the rebase",
        logo: "git",
        url: "https://git-scm.com",
      },
    ],
  },
  {
    title: "Design & Productivity",
    description: "Where ideas, plans, and conversations live",
    tools: [
      {
        name: "Figma",
        description: "UI/UX design and prototyping",
        logo: "figma",
        url: "https://figma.com",
      },
      {
        name: "Notion",
        description: "Docs, planning, and the knowledge base for everything I build",
        logo: "notion",
        url: "https://notion.so",
        invertInDark: true,
      },
      {
        name: "Linear",
        description: "Issue tracking and roadmaps that don't get in the way",
        logo: "linear",
        url: "https://linear.app",
        invertInDark: true,
      },
      {
        name: "Slack",
        description: "Team comms",
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
            alt={`${tool.name} logo`}
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

export default function UsesPage() {
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
                Tech Stack
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              What I Use
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              The languages, frameworks, platforms, and tools I actually reach for —
              across AI engineering, fullstack web, native mobile, data and event
              streaming, observability, and ops. Most of it earns its keep in
              production; some lives in studies, side projects, and course work.
            </p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-500 max-w-2xl">
              Updated regularly. Not exhaustive — the things below are the ones I
              actively use or have meaningfully shipped with.
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
              Curious why I picked a particular tool — or what I'd reach for instead?{" "}
              <a
                href="/contact"
                className="text-[#FF6A3D] dark:text-[#FF8A5B] font-medium hover:underline"
              >
                Get in touch
              </a>
              . I genuinely enjoy these conversations.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
