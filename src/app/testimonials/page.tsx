import type { Metadata } from "next";
import Link from "next/link";
import { Quote, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What clients, colleagues, and collaborators say about working with Osvaldo Restrepo — AI engineer, full-stack developer, and PhD based in Panama.",
  openGraph: {
    title: "Testimonials — Osvaldo Restrepo",
    description:
      "What clients, colleagues, and collaborators say about working with Osvaldo Restrepo.",
    url: "/testimonials",
  },
};

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  link?: string;
  highlight?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Waldo translates vague business needs into shippable AI systems. Latency, cost, and safety are always under control.",
    name: "Russell Diaz",
    title: "Chief Executive Officer, Shining Image",
    link: "https://www.linkedin.com/in/russell-diaz-38037a150/",
    highlight: "shippable AI systems",
  },
  {
    quote:
      "Our team adopted his voice agent with minimal friction—clean handoffs and clear observability from day one.",
    name: "Emily Strauss",
    title: "Sales Manager, Shining Image",
    link: "https://www.linkedin.com/in/emily-diaz-817370225/",
    highlight: "minimal friction",
  },
  {
    quote:
      "The MILA RAG assistant shipped with proper evals and citations. Clinicians trusted it because the UX was measured.",
    name: "Dr. Jorge NG Chinkee",
    title: "Chief Medical Officer, Hospital Materno Infantil José Domingo de Obaldía",
    link: "https://www.linkedin.com/in/jorge-ng-chinkee-a9413a61/",
    highlight: "Clinicians trusted it",
  },
];

function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
    </div>
  );
}

export default function TestimonialsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Testimonials — Osvaldo Restrepo",
    description:
      "What clients, colleagues, and collaborators say about working with Osvaldo Restrepo.",
    url: "https://osvaldorestrepo.dev/testimonials",
    mainEntity: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: {
        "@type": "Person",
        name: t.name,
        jobTitle: t.title,
      },
      itemReviewed: {
        "@type": "Person",
        name: "Osvaldo Restrepo",
        "@id": "https://osvaldorestrepo.dev/#person",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen">
        <GridBackground />

        {/* Hero */}
        <section className="relative pt-16 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Social Proof
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              What People Say
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real feedback from clients, colleagues, and collaborators I&apos;ve worked with on AI systems, full-stack products, and everything in between.
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="relative p-6 rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-colors group"
                >
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-indigo-200 dark:text-indigo-900/50" />
                  <blockquote className="relative text-slate-700 dark:text-slate-200 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 dark:text-white">
                        {t.link ? (
                          <a
                            href={t.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                          >
                            {t.name}
                          </a>
                        ) : (
                          t.name
                        )}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {t.title}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}

              {/* Placeholder for more testimonials */}
              <figure className="relative p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-center min-h-[200px]">
                <p className="text-slate-400 dark:text-slate-500 text-sm">
                  More testimonials coming soon.
                </p>
                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
                >
                  Worked with me? Let me know
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </figure>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Want to work together?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                I build AI-powered products, full-stack applications, and production ML systems from Panama.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-500/20"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
