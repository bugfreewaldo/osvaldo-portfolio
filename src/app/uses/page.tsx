"use client";

import { motion } from "framer-motion";
import { Wrench, Database } from "lucide-react";
import Image from "next/image";

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
    description: "The languages I write code in daily",
    tools: [
      {
        name: "Python",
        description: "Primary language for ML, data pipelines, and backend APIs",
        logo: "python",
        url: "https://python.org",
      },
      {
        name: "TypeScript",
        description: "Type-safe JavaScript for frontend and full-stack apps",
        logo: "typescript",
        url: "https://typescriptlang.org",
      },
      {
        name: "SQL",
        description: "Data querying and database management",
        logo: "postgresql",
        url: "https://postgresql.org",
      },
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "Tools for building intelligent systems",
    tools: [
      {
        name: "OpenAI",
        description: "GPT models for LLM applications and embeddings",
        logo: "openai",
        url: "https://openai.com",
        invertInDark: true,
      },
      {
        name: "LangChain",
        description: "Framework for building LLM-powered applications",
        logo: "langchain",
        url: "https://langchain.com",
      },
      {
        name: "Pinecone",
        description: "Vector database for semantic search and RAG",
        logo: "pinecone",
        url: "https://pinecone.io",
        useFallback: true,
      },
      {
        name: "Hugging Face",
        description: "Open-source models and datasets",
        logo: "huggingface",
        url: "https://huggingface.co",
      },
    ],
  },
  {
    title: "Frameworks",
    description: "Frameworks and libraries I build with",
    tools: [
      {
        name: "Next.js",
        description: "React framework for production web apps",
        logo: "nextdotjs",
        url: "https://nextjs.org",
        invertInDark: true,
      },
      {
        name: "React",
        description: "UI component library",
        logo: "react",
        url: "https://react.dev",
      },
      {
        name: "FastAPI",
        description: "High-performance Python API framework",
        logo: "fastapi",
        url: "https://fastapi.tiangolo.com",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        logo: "tailwindcss",
        url: "https://tailwindcss.com",
      },
    ],
  },
  {
    title: "Data & Infrastructure",
    description: "Databases, queues, and cloud services",
    tools: [
      {
        name: "PostgreSQL",
        description: "Primary relational database",
        logo: "postgresql",
        url: "https://postgresql.org",
      },
      {
        name: "Redis",
        description: "Caching and real-time data",
        logo: "redis",
        url: "https://redis.io",
      },
      {
        name: "Apache Kafka",
        description: "Event streaming for data pipelines",
        logo: "apachekafka",
        url: "https://kafka.apache.org",
        invertInDark: true,
      },
      {
        name: "Docker",
        description: "Containerization for consistent deployments",
        logo: "docker",
        url: "https://docker.com",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Where I deploy and run things",
    tools: [
      {
        name: "AWS",
        description: "Primary cloud platform for production workloads",
        logo: "amazonwebservices",
        url: "https://aws.amazon.com",
        invertInDark: true,
      },
      {
        name: "Vercel",
        description: "Frontend deployments and edge functions",
        logo: "vercel",
        url: "https://vercel.com",
        invertInDark: true,
      },
      {
        name: "GitHub Actions",
        description: "CI/CD pipelines",
        logo: "githubactions",
        url: "https://github.com/features/actions",
      },
      {
        name: "Terraform",
        description: "Infrastructure as code",
        logo: "terraform",
        url: "https://terraform.io",
      },
    ],
  },
  {
    title: "Editor & Tools",
    description: "My daily development environment",
    tools: [
      {
        name: "VS Code",
        description: "Primary code editor",
        logo: "visualstudiocode",
        url: "https://code.visualstudio.com",
      },
      {
        name: "Cursor",
        description: "AI-powered code editor for pair programming with AI",
        logo: "cursor",
        url: "https://cursor.com",
      },
      {
        name: "Git",
        description: "Version control",
        logo: "git",
        url: "https://git-scm.com",
      },
      {
        name: "GitHub",
        description: "Code hosting and collaboration",
        logo: "github",
        url: "https://github.com",
        invertInDark: true,
      },
    ],
  },
  {
    title: "Design & Productivity",
    description: "Tools for design and staying organized",
    tools: [
      {
        name: "Figma",
        description: "UI/UX design and prototyping",
        logo: "figma",
        url: "https://figma.com",
      },
      {
        name: "Notion",
        description: "Documentation and project management",
        logo: "notion",
        url: "https://notion.so",
        invertInDark: true,
      },
      {
        name: "Linear",
        description: "Issue tracking and project management",
        logo: "linear",
        url: "https://linear.app",
        invertInDark: true,
      },
      {
        name: "Slack",
        description: "Team communication",
        logo: "slack",
        url: "https://slack.com",
      },
    ],
  },
];

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="group flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-2.5 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
        {tool.useFallback ? (
          <Database className="w-7 h-7 text-indigo-500" />
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
        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
          {tool.description}
        </p>
      </div>
    </motion.a>
  );
}

export default function UsesPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
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
              <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Tech Stack
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              What I Use
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              The tools, frameworks, and technologies I use to build AI systems,
              data pipelines, and web applications. Updated regularly as my stack
              evolves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="relative px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {category.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {category.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <ToolCard
                    key={tool.name}
                    tool={tool}
                    index={categoryIndex * 4 + toolIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="relative px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20"
          >
            <p className="text-slate-600 dark:text-slate-400 text-center">
              Want to chat about any of these tools?{" "}
              <a
                href="/contact"
                className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
              >
                Get in touch
              </a>{" "}
              — I love discussing tech stacks and tooling decisions.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
