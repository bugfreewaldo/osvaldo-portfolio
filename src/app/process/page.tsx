"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Target, Rocket, Shield, TrendingUp, ArrowRight,
  CheckCircle, XCircle, Zap, MessageSquare, Clock,
  Search, Code, BarChart3, Settings, Bot, Brain
} from "lucide-react";

// Animated background
function GridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
}

// What you get promises
const promises = [
  {
    icon: Zap,
    title: "Speed Without Shortcuts",
    description: "I ship fast, but I don't cut corners. You get working software, not demos that fall apart.",
  },
  {
    icon: MessageSquare,
    title: "Straight Talk",
    description: "If something won't work, I'll tell you before we waste time and money. No sugarcoating.",
  },
  {
    icon: Shield,
    title: "Production-Ready",
    description: "Everything I build is designed for real users, real load, and real edge cases from day one.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "We define success upfront. If we can't measure it, we're not building it.",
  },
];

// What I don't do
const noBs = [
  "Overpromise and underdeliver",
  "Build AI for the sake of AI",
  "Disappear for weeks without updates",
  "Ship and ghost — I stick around",
  "Charge for research you don't need",
  "Hide behind jargon when things go wrong",
];

// What you actually get
const deliverables = [
  "Weekly progress updates (async or sync, your call)",
  "Working demos you can actually test",
  "Clean handoff docs when we're done",
  "On-call support for critical launches",
  "Honest timeline estimates (padded for reality)",
  "Direct access — no account managers in between",
];

// Process phases - simplified and friendly
const phases = [
  {
    icon: Search,
    step: "01",
    title: "We Figure Out What You Actually Need",
    description: "Not what's trendy. Not what sounds cool. What will actually move the needle for your business.",
    details: [
      "1-2 hour discovery call to understand your pain points",
      "I'll tell you if AI is even the right solution",
      "Clear scope with success metrics we both agree on",
    ],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Code,
    step: "02",
    title: "Build Something Real, Fast",
    description: "Within 1-2 weeks, you'll have something working to test. Not a PowerPoint — actual software.",
    details: [
      "Minimum viable version of the core feature",
      "You can click it, test it, break it",
      "Early feedback before we invest more time",
    ],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Make Sure It Actually Works",
    description: "Real testing with real scenarios. We catch the edge cases before your users do.",
    details: [
      "Test against your actual use cases",
      "Find and fix the weird stuff",
      "Make sure it's safe and reliable",
    ],
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Settings,
    step: "04",
    title: "Ship It, Support It",
    description: "Launch is just the beginning. I make sure it keeps working and gets better.",
    details: [
      "Smooth rollout to your users",
      "Monitoring so we catch issues fast",
      "Iterate based on real usage data",
    ],
    gradient: "from-rose-500 to-orange-500",
  },
];

export default function ProcessPage() {
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
            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
              <Target className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              How I Work
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-slate-900 dark:text-white">No Fluff. </span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Just Results.
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here's what working with me actually looks like.
            No corporate process theater. No death by meetings.
            Just building things that work.
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
            What You Get When I'm Your AI Partner
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {promises.map((promise, i) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* No BS Section */}
      <section className="relative py-12 px-4 bg-slate-50/50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* What I Don't Do */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6 text-red-500" />
                What I Don't Do
              </h3>
              <ul className="space-y-3">
                {noBs.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* What You Get */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                What You Actually Get
              </h3>
              <ul className="space-y-3">
                {deliverables.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
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
              The Process (Keep It Simple)
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              Four phases. Clear goals. No mystery. You always know where we are and what's next.
            </p>
          </motion.div>

          <div className="space-y-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-indigo-500/30 transition-all duration-300">
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
                        <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400">
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
                            <CheckCircle className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Expectation */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-indigo-500/20"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Typical Timeline
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2">
                  <strong>First working demo:</strong> 1-2 weeks. <strong>Production-ready:</strong> 4-8 weeks,
                  depending on complexity. I'll give you an honest estimate upfront, and I'll tell you immediately
                  if anything changes.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                  Every project is different. Sometimes it's faster. Sometimes we discover complexity.
                  Either way, you'll never be surprised.
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
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Yes, I Use AI to Build. And So Should You.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mt-3">
                  Let's be real: I'm an AI engineer. Of course I use AI in my workflow.
                  Copilot, Claude, GPT — they're in my toolkit every day. It would be absurd not to.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-3">
                  <strong className="text-slate-900 dark:text-white">What this means for you:</strong> You get someone who actually knows how to leverage these tools
                  to move faster without sacrificing quality. I don't blindly copy-paste AI output —
                  I review, test, and take full responsibility for every line of code that ships.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">AI-Assisted, Human-Verified</p>
                      <p className="text-sm text-slate-500">Every output is reviewed, tested, and owned by me.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Faster Iteration</p>
                      <p className="text-sm text-slate-500">More prototypes, more options, less wasted time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Responsible Use</p>
                      <p className="text-sm text-slate-500">No sensitive data in prompts. No blind trust in outputs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white text-sm">Full Accountability</p>
                      <p className="text-sm text-slate-500">AI wrote it? Doesn't matter. I ship it, I own it.</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                  If you want someone who pretends AI doesn't exist, I'm not your guy.
                  But if you want someone who knows how to use it <em>properly</em> to get you results faster — let's talk.
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
            Ready to Build Something Real?
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Let's talk about what you're trying to solve. No commitment, no pitch deck required.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              See Past Work
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
