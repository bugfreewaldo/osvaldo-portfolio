import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, BookOpen, Code, Mic, Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "Now — Osvaldo Restrepo",
  description:
    "What Osvaldo Restrepo is working on right now. Current projects, learning, writing, and focus areas. Updated regularly.",
  alternates: { canonical: "/now" },
};

export default function NowPage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
          What I&apos;m Doing Now
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Last updated: April 2026 · <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Panama City, Panama</span>
        </p>
        <p className="mt-1 text-sm text-slate-400 dark:text-slate-500">
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600 dark:hover:text-slate-300 transition-colors">now page</a>. It&apos;s like an about page, but for what I&apos;m focused on at this point in my life.
        </p>

        <div className="mt-10 space-y-10">
          {/* Work */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Work</h2>
            </div>
            <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                AI Engineer at <strong className="text-slate-900 dark:text-white">TheGreyMatter.ai</strong> — architecting <strong className="text-slate-900 dark:text-white">GreyMatter 3.0</strong>, the platform backbone behind 17+ vertical AI apps (DueDiligence9, Forecast9, Contracts9, Culture9, OrgDesign9, Pipeline9, SupplyChain9, Board9, and more). Building the shared identity, file, and communications services; MCP servers that expose Snapshot9 / 9Vectors / Measurement13 to Claude; agentic systems (The Fixer, Vector_10, TheHacker); and native iOS + Android clients.
              </p>
              <p>
                On the side, I continue maintaining and evolving <strong className="text-slate-900 dark:text-white">MILA</strong>, an AI assistant for NICU families, and <strong className="text-slate-900 dark:text-white">BudgetCopilot</strong>, a personal AI finance agent.
              </p>
            </div>
          </section>

          {/* Learning */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Learning</h2>
            </div>
            <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                Pursuing my <strong className="text-slate-900 dark:text-white">PhD in AI with medical research focus</strong> at the Technological University of Panama. Currently researching AI applications in clinical decision support systems.
              </p>
              <p>
                Also working on a <strong className="text-slate-900 dark:text-white">Master&apos;s in AI</strong> at Tecnológico de Monterrey — deep diving into deep learning architectures, NLP, and computer vision.
              </p>
            </div>
          </section>

          {/* Building */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Building</h2>
            </div>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                MCP (Model Context Protocol) servers that expose real product APIs to Claude agents — with auth, rate limiting, and audit logging
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                Agentic AI systems for compliance remediation, ontology-driven analysis, and automated security scanning
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                Native iOS (Swift + SwiftUI) and Android (Kotlin) clients with OAuth federation against the platform backbone
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                GraphRAG pipelines combining knowledge graphs with vector retrieval
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                This portfolio site — always adding features, articles, and experiments
              </li>
            </ul>
          </section>

          {/* Interested In */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <Brain className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Interested In</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AI agents in production",
                "Model Context Protocol",
                "GraphRAG",
                "Edge AI inference",
                "AI in healthcare",
                "Developer tooling",
                "Teaching coding to kids",
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
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Teaching</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Running <strong className="text-slate-900 dark:text-white">Waldo&apos;s Code Lab</strong> — a free coding school helping teens and kids learn programming step by step. If you know a kid who&apos;s curious about code, send them to{" "}
              <a href="https://waldoscodelab.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline">
                waldoscodelab.com
              </a>.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Want to work together or just say hi?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
