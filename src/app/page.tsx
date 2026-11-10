import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, FileDown, Github, Linkedin, Mail, MapPin, Brain, Bot, Phone, Layers } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { availability } from "@/lib/availability";

const facts = [
  { value: "10+", label: "Years building software" },
  { value: "20+", label: "AI products shipped" },
  { value: "17+", label: "Apps on one AI platform" },
  { value: "PhD", label: "Research in AI (medicine)" },
];

const services = [
  {
    icon: Brain,
    title: "LLMs & RAG",
    body: "Production LLM apps grounded in your own data, with evals so you know they work.",
  },
  {
    icon: Bot,
    title: "AI agents",
    body: "Agents that use your tools and APIs safely — with limits, audit logs, and human hand-offs.",
  },
  {
    icon: Phone,
    title: "Voice AI",
    body: "Phone agents that answer, book, and hand off to people without sounding robotic.",
  },
  {
    icon: Layers,
    title: "Full-stack & mobile",
    body: "The whole product around the AI: web apps, APIs, auth, payments, iOS and Android.",
  },
];

type Work = { title: string; what: string; result: string; href: string; external?: boolean };

const work: Work[] = [
  {
    title: "MILA",
    what: "AI assistant for NICU nurses and families, built on hospital policies.",
    result: "Healthcare",
    href: "/projects/mila-neonatal-llm",
  },
  {
    title: "AI Voice Agent",
    what: "Answers calls, books jobs, and hands off to humans for small businesses.",
    result: "68% of calls handled",
    href: "/projects/ai-voice-agent",
  },
  {
    title: "GreyMatter platform",
    what: "Shared backbone behind 17+ AI apps: identity, files, MCP servers, agents, mobile.",
    result: "17+ apps",
    href: "/projects",
  },
  {
    title: "9Vectors.ai",
    what: "AI strategic assessment platform for enterprises. Technical co-founder.",
    result: "Co-founder",
    href: "https://9vectors.ai",
    external: true,
  },
  {
    title: "Fundraise9",
    what: "Due-diligence portal for private equity, with answers grounded in source documents.",
    result: "Private equity",
    href: "/projects/fundraise9",
  },
  {
    title: "BudgetCopilot",
    what: "Personal AI finance agent that explains your money without touching it.",
    result: "Consumer app",
    href: "https://budgetcopilot.app",
    external: true,
  },
];

export default function Home() {
  const posts = getAllPosts("en").slice(0, 3);

  return (
    <main className="px-4">
      {/* Hero */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 pt-14 sm:pt-20 md:grid-cols-[1fr_auto]">
        <div className="order-2 md:order-1">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-available/30 bg-available/10 px-3 py-1 text-sm font-medium text-available"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-available opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-available" />
            </span>
            {availability.headline}
          </Link>

          <h1 className="mt-6 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Osvaldo. I build AI that works in production.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            AI Engineer with 10+ years of software experience and PhD research in AI. I design and ship LLM
            apps, AI agents, and voice AI — end to end, from first prototype to real users.
          </p>

          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-4 w-4 shrink-0" /> Panama City · Remote, US &amp; LATAM time zones · English &amp; Spanish
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-soft"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="/Osvaldo_Restrepo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-6 py-3 font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              <FileDown className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div className="mt-6 flex gap-1">
            {[
              { href: "https://linkedin.com/in/osvaldorestrepo", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/bugfreewaldo", icon: Github, label: "GitHub" },
              { href: "mailto:me@osvaldorestrepo.dev", icon: Mail, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="rounded-lg p-2.5 text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-surface shadow-xl sm:h-64 sm:w-64 md:order-2 md:h-72 md:w-72">
          <Image
            src="/images/waldoprofilepic.png"
            alt="Osvaldo Restrepo"
            width={288}
            height={288}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto mt-16 max-w-5xl">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-surface px-5 py-6 text-center">
              <div className="font-serif text-3xl text-foreground sm:text-4xl">{f.value}</div>
              <div className="mt-1 text-sm text-muted">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What I do */}
      <section className="mx-auto mt-24 max-w-5xl">
        <h2 className="text-3xl text-foreground sm:text-4xl">What I can do for your team</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-line bg-surface p-6">
              <s.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-xl text-foreground">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto mt-24 max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl text-foreground sm:text-4xl">Selected work</h2>
          <Link href="/projects" className="hidden items-center gap-1 text-sm font-medium text-accent hover:underline sm:inline-flex">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((w) => (
            <a
              key={w.title}
              href={w.href}
              target={w.external ? "_blank" : undefined}
              rel={w.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl text-foreground group-hover:text-accent">{w.title}</h3>
                {w.external && <ArrowUpRight className="h-4 w-4 text-muted" />}
              </div>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{w.what}</p>
              <span className="mt-4 self-start rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent">
                {w.result}
              </span>
            </a>
          ))}
        </div>
        <Link href="/projects" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline sm:hidden">
          All projects <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Press */}
      <section className="mx-auto mt-24 max-w-5xl">
        <a
          href="https://usanews.com/newsroom/how-the-mila-ai-platform-began-with-one-family-s-story"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 rounded-xl border border-line bg-surface p-6 transition-colors hover:border-accent/50"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-2 ring-1 ring-line">
            <Image src="/images/usanews-logo.jpg" alt="USA News" width={56} height={56} className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="text-sm text-muted">Featured in USA News</p>
            <p className="mt-1 font-serif text-xl text-foreground group-hover:text-accent">
              How the MILA AI Platform Began with One Family&apos;s Story
            </p>
          </div>
        </a>
      </section>

      {/* Writing */}
      <section className="mx-auto mt-24 max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl text-foreground sm:text-4xl">Latest writing</h2>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
            All posts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {posts.map((p) => (
            <Link key={p.slug} href={p.url} className="group block py-5">
              <p className="text-sm text-muted">
                {new Date(p.frontmatter.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}{" "}
                · {p.readingTimeMinutes} min read
              </p>
              <p className="mt-1 font-serif text-xl text-foreground group-hover:text-accent">{p.frontmatter.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-5xl rounded-2xl bg-foreground px-6 py-12 text-center text-background sm:px-12">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-available">
          <span className="h-2 w-2 rounded-full bg-available" /> {availability.headline}
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Let&apos;s talk about your team</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-80">
          Open to senior AI engineering roles, research collaborations, and consulting. I reply to every message.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-soft"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="/Osvaldo_Restrepo_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-background/30 px-6 py-3 font-medium transition-colors hover:bg-background/10"
          >
            <FileDown className="h-4 w-4" /> Download CV
          </a>
        </div>
      </section>
    </main>
  );
}
