import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, FileDown } from "lucide-react";
import AttentionFigure from "@/components/home/AttentionFigure";
import { getAllPosts } from "@/lib/blog";
import { availability } from "@/lib/availability";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const contributions = [
  {
    title: "LLMs & RAG",
    body: "Retrieval-augmented generation, prompt caching, and eval pipelines for production LLM apps.",
    tech: ["Claude", "OpenAI", "LangChain", "Hugging Face", "Cosmos DB"],
  },
  {
    title: "AI agents",
    body: "Tool-calling agents with memory, bounded loops, written charters, and human-in-the-loop hand-offs.",
    tech: ["Claude", "MCP", "Tool use", "Audit logging"],
  },
  {
    title: "Voice AI",
    body: "Phone agents end to end — STT, TTS, turn-taking, barge-in, and graceful fallback to humans.",
    tech: ["Twilio", "Whisper", "ElevenLabs", "WebRTC"],
  },
  {
    title: "Safety & evaluation",
    body: "Calibration, guardrails, hallucination checks, and eval suites wired into release gates.",
    tech: ["Langfuse", "Arize", "Calibration", "OPA"],
  },
  {
    title: "Clinical decision support",
    body: "PhD research on AI for medicine: ground truth, inter-rater disagreement, and calibrated uncertainty.",
    tech: ["NICU", "FHIR", "Human-in-the-loop"],
  },
  {
    title: "Platforms & identity",
    body: "Multi-app SaaS backbones: OAuth/JWKS federation, RBAC, envelope encryption, event-driven ingestion.",
    tech: ["Azure Functions", "Key Vault", "RBAC", "JWT"],
  },
  {
    title: "Data & ML pipelines",
    body: "ETL, vector stores, ontologies + GraphRAG, and the plumbing that keeps AI fed with clean data.",
    tech: ["PostgreSQL", "Neo4j", "Redis", "Python"],
  },
  {
    title: "Full-stack & mobile",
    body: "Production web apps and native iOS / Android clients that federate against the same APIs.",
    tech: ["Next.js", "React", "Swift", "Kotlin"],
  },
];

const results = [
  { value: "10+", label: "years building software" },
  { value: "20+", label: "AI products shipped" },
  { value: "17+", label: "apps on one AI platform" },
  { value: "10+", label: "countries served" },
];

type System = {
  slug: string;
  title: string;
  domain: string;
  summary: string;
  result: string;
  external?: string;
};

const systems: System[] = [
  {
    slug: "mila-neonatal-llm",
    title: "MILA",
    domain: "Healthcare · NICU",
    summary: "RAG assistant over hospital policies with role-based access and audit-friendly logging.",
    result: "p95 ≈ 820 ms",
  },
  {
    slug: "ai-voice-agent",
    title: "Voice Agent",
    domain: "Small business · telephony",
    summary: "Autonomous phone agent that answers, books jobs, and hands off to humans.",
    result: "68% containment",
  },
  {
    slug: "9vectors",
    title: "9Vectors.ai",
    domain: "Enterprise strategy",
    summary: "AI-powered strategic assessment platform for data-driven decisions.",
    result: "Co-founder",
    external: "https://9vectors.ai",
  },
  {
    slug: "fundraise9",
    title: "Fundraise9",
    domain: "Private equity",
    summary: "ILPA DDQ 2.0 portal — Claude-backed answers anchored to the firm's source documents.",
    result: "ILPA DDQ 2.0",
  },
  {
    slug: "measurement13",
    title: "Measurement13.ai",
    domain: "Leadership",
    summary: "13-attribute leadership assessment with 360° feedback and 9-Box analytics.",
    result: "Enterprise",
    external: "https://measurement13.ai",
  },
  {
    slug: "stripe-qb-reconcile",
    title: "Reconciler",
    domain: "Finance ops",
    summary: "Stripe → QuickBooks reconciliation aggregating fees per payout.",
    result: "$0 variance",
  },
  {
    slug: "budgetcopilot",
    title: "BudgetCopilot",
    domain: "Personal finance",
    summary: "A humble AI finance agent: categorizes, explains, never moves money on its own.",
    result: "Consumer",
    external: "https://budgetcopilot.app",
  },
  {
    slug: "waldoscodelab",
    title: "Waldo's Code Lab",
    domain: "Education",
    summary: "Free, hands-on coding school for kids and teens.",
    result: "Free",
    external: "https://waldoscodelab.com",
  },
];

// ---------------------------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------------------------

function SectionHead({ n, title, aside }: { n: string; title: string; aside?: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-line pb-3">
      <h2 className="text-2xl text-foreground sm:text-3xl">
        <span className="mr-3 font-mono text-base font-normal text-accent">{n}</span>
        {title}
      </h2>
      {aside}
    </div>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  const allPosts = getAllPosts("en");
  const posts = allPosts.slice(0, 6);
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return (
    <main className="relative px-4">
      {/* ================= Title block ================= */}
      <section className="mx-auto max-w-6xl pt-12 sm:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
          <span>Preprint · cs.AI · cs.HC · cs.SE</span>
          <span>Panama City · {today}</span>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="max-w-3xl">
            <h1 className="text-[2.6rem] leading-[1.05] text-foreground sm:text-6xl lg:text-[4.4rem]">
              Building AI that survives contact with{" "}
              <em className="text-accent">the real world</em>
            </h1>

            <p className="mt-8 font-serif text-xl text-foreground sm:text-2xl">
              Osvaldo “Waldo” Restrepo<sup className="ml-0.5 font-mono text-xs text-accent">1,2</sup>
            </p>
            <ol className="mt-3 space-y-1 font-serif text-[0.98rem] text-muted">
              <li>
                <sup className="mr-1 font-mono text-[0.65rem] text-accent">1</sup>
                PhD research in Artificial Intelligence, clinical decision support — Technological University of Panama
              </li>
              <li>
                <sup className="mr-1 font-mono text-[0.65rem] text-accent">2</sup>
                Applied AI engineering, 10+ years in production — remote from{" "}
                <Link href="/ai-engineer-panama" className="underline decoration-line underline-offset-4 hover:decoration-accent">
                  Panama
                </Link>
              </li>
            </ol>
            <p className="mt-3 font-mono text-xs text-muted">
              Correspondence:{" "}
              <a href="mailto:me@osvaldorestrepo.dev" className="text-foreground hover:text-accent">
                me@osvaldorestrepo.dev
              </a>
            </p>
          </div>

          {/* Author plate */}
          <div className="flex items-center gap-4 lg:flex-col lg:items-end">
            <div className="relative h-28 w-28 overflow-hidden rounded-sm border border-line bg-surface-2 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
              <Image
                src="/images/waldoprofilepic.png"
                alt="Osvaldo Restrepo"
                fill
                sizes="176px"
                priority
                className="object-cover grayscale contrast-[1.05] transition duration-500 hover:grayscale-0"
              />
            </div>
            <p className="max-w-[11rem] font-serif text-sm italic leading-snug text-muted lg:text-right">
              The author, mid-way through an argument with a tokenizer.
            </p>
          </div>
        </div>

        {/* Availability statement */}
        <div className="mt-12 grid gap-6 rounded-lg border border-available/30 bg-available/[0.06] p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-available">
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-available opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-available" />
              </span>
              Status · {availability.headline}
            </p>
            <p className="mt-2 font-serif text-lg leading-relaxed text-foreground">{availability.detail}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {availability.looking.map((l) => (
                <li key={l} className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 md:flex-col">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="/Osvaldo_Restrepo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-foreground/70 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ================= Abstract + Figure 1 ================= */}
      <section className="mx-auto mt-20 grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="smallcaps text-center text-lg font-semibold text-foreground lg:text-left">Abstract</p>
          <p className="mt-4 font-serif text-[1.18rem] leading-[1.75] text-foreground/90 [hyphens:auto] lg:text-justify">
            Most AI fails quietly, in the gap between an impressive demo and an ordinary Tuesday. This page
            describes an engineer who works in that gap. Over ten years I have built LLM systems for hospitals,
            phone agents for small businesses, and an AI platform behind seventeen products. Alongside that I am
            doing doctoral research on clinical decision support. The method is consistent. Measure before
            claiming. Encode domain structure before reaching for embeddings. Calibrate confidence so that wrong
            answers sound wrong. Treat prompts, schemas, and permissions as contracts. We find that the
            unglamorous last ten percent — evals, latency, failure language, audit trails — is where trust is
            earned. Everything else is a demo.
          </p>
          <p className="mt-5 font-serif text-[0.98rem] text-muted">
            <span className="font-semibold text-foreground">Keywords:</span> large language models · AI agents ·
            retrieval-augmented generation · voice AI · clinical AI · evaluation · calibration
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <Link href="/projects" className="text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              → selected systems
            </Link>
            <Link href="/blog" className="text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              → {allPosts.length} essays
            </Link>
            <Link href="/about" className="text-foreground underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              → full biography
            </Link>
          </div>
        </div>
        <AttentionFigure />
      </section>

      {/* ================= §1 Contributions ================= */}
      <section className="mx-auto mt-24 max-w-6xl">
        <SectionHead n="1" title="Contributions" />
        <p className="mb-8 max-w-3xl font-serif text-lg leading-relaxed text-muted">
          This work makes the following contributions, each shipped to production rather than left in a
          notebook:
        </p>
        <ol className="grid gap-x-10 gap-y-7 md:grid-cols-2">
          {contributions.map((c, i) => (
            <li key={c.title} className="grid grid-cols-[2.2rem_1fr] gap-2">
              <span className="pt-1 font-mono text-sm text-accent">C{i + 1}.</span>
              <div>
                <h3 className="text-xl text-foreground">{c.title}</h3>
                <p className="mt-1 font-serif text-[1.05rem] leading-relaxed text-muted">{c.body}</p>
                <p className="mt-2 font-mono text-[0.7rem] text-muted/90">{c.tech.join(" · ")}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ================= §2 Results ================= */}
      <section className="mx-auto mt-24 max-w-6xl">
        <SectionHead n="2" title="Results" />
        <div className="overflow-hidden rounded-lg border border-line">
          <p className="border-b border-line bg-surface-2 px-4 py-2 font-serif text-sm text-muted">
            <span className="font-semibold text-foreground">Table 1.</span> Aggregate outcomes, 2015 – present.
          </p>
          <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
            {results.map((r) => (
              <div key={r.label} className="bg-surface px-5 py-6">
                <dt className="sr-only">{r.label}</dt>
                <dd className="font-serif text-4xl text-foreground sm:text-5xl">{r.value}</dd>
                <dd className="mt-1 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-muted">{r.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ================= §3 Systems ================= */}
      <section className="mx-auto mt-24 max-w-6xl">
        <SectionHead
          n="3"
          title="Selected systems"
          aside={
            <Link href="/projects" className="hidden items-center gap-1 font-mono text-sm text-accent hover:underline sm:inline-flex">
              all systems <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        />
        <p className="mb-3 font-serif text-sm text-muted">
          <span className="font-semibold text-foreground">Table 2.</span> Systems designed and shipped, with
          the headline result for each.
        </p>
        <div className="border-y-2 border-foreground">
          <div className="hidden grid-cols-[1.1fr_1fr_2.4fr_auto] gap-6 border-b border-foreground/60 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted md:grid">
            <span>System</span>
            <span>Domain</span>
            <span>Summary</span>
            <span className="text-right">Result</span>
          </div>
          {systems.map((s) => {
            const href = s.external ?? `/projects/${s.slug}`;
            const ext = Boolean(s.external);
            return (
              <a
                key={s.slug}
                href={href}
                target={ext ? "_blank" : undefined}
                rel={ext ? "noopener noreferrer" : undefined}
                className="group grid gap-1 border-b border-line py-4 transition-colors last:border-b-0 hover:bg-surface-2/70 md:grid-cols-[1.1fr_1fr_2.4fr_auto] md:items-baseline md:gap-6 md:px-2"
              >
                <span className="flex items-center gap-1 font-serif text-xl text-foreground group-hover:text-accent">
                  {s.title}
                  {ext && <ArrowUpRight className="h-4 w-4 opacity-50" />}
                </span>
                <span className="font-mono text-xs text-muted">{s.domain}</span>
                <span className="font-serif text-[1.02rem] text-muted">{s.summary}</span>
                <span className="font-mono text-sm text-foreground md:text-right">{s.result}</span>
              </a>
            );
          })}
        </div>
      </section>

      {/* ================= §4 Writing as references ================= */}
      <section className="mx-auto mt-24 max-w-6xl">
        <SectionHead
          n="4"
          title="Recent writing"
          aside={
            <Link href="/blog" className="hidden items-center gap-1 font-mono text-sm text-accent hover:underline sm:inline-flex">
              all essays <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          }
        />
        <ol className="space-y-5">
          {posts.map((p, i) => (
            <li key={p.slug} className="grid grid-cols-[2.4rem_1fr] gap-2">
              <span className="pt-0.5 font-mono text-sm text-muted">[{i + 1}]</span>
              <div>
                <p className="font-serif text-[1.08rem] leading-relaxed text-foreground/90">
                  Restrepo, O. ({new Date(p.frontmatter.date).getUTCFullYear()}).{" "}
                  <Link href={p.url} className="text-foreground underline decoration-line underline-offset-4 hover:text-accent hover:decoration-accent">
                    {p.frontmatter.title}
                  </Link>
                  . <em>osvaldorestrepo.dev</em>, {p.frontmatter.category}.
                </p>
                <p className="mt-1 font-mono text-[0.7rem] text-muted">
                  {formatDate(p.frontmatter.date)} · {p.readingTimeMinutes} min read
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ================= §5 Press ================= */}
      <section className="mx-auto mt-24 max-w-6xl">
        <SectionHead n="5" title="In the press" />
        <a
          href="https://usanews.com/newsroom/how-the-mila-ai-platform-began-with-one-family-s-story"
          target="_blank"
          rel="noopener noreferrer"
          className="group grid gap-5 rounded-lg border border-line bg-surface p-5 transition-colors hover:border-accent/50 sm:grid-cols-[auto_1fr] sm:p-6"
        >
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-md bg-white p-2 ring-1 ring-line">
            <Image src="/images/usanews-logo.jpg" alt="USA News" width={56} height={56} className="h-full w-full object-contain" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">USA News · Feature</p>
            <h3 className="mt-1 text-2xl text-foreground group-hover:text-accent">
              How the MILA AI Platform Began with One Family&apos;s Story
            </h3>
            <p className="mt-2 font-serif text-[1.05rem] text-muted">
              The story behind building an AI assistant for NICU families — turning a personal experience into
              technology that helps parents through one of the hardest times of their lives.
            </p>
          </div>
        </a>
      </section>

      {/* ================= Acknowledgements / CTA ================= */}
      <section className="mx-auto mt-24 max-w-3xl text-center">
        <p className="smallcaps text-lg font-semibold text-foreground">Acknowledgements &amp; next steps</p>
        <p className="mt-4 font-serif text-xl leading-relaxed text-muted">
          Thanks to the nurses, founders, students, and engineers whose problems shaped this work. If you have
          one worth solving, I&apos;m <span className="text-available">currently available</span> — and I reply
          to every message.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-md border border-foreground/70 px-6 py-3 text-sm font-medium text-foreground hover:bg-surface-2"
          >
            Read the case studies
          </Link>
        </div>
      </section>
    </main>
  );
}
