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
    subtitle: "Neonatal LLM Assistant",
    gradient: "from-purple-500 to-indigo-500",
    summary:
      "An AI assistant that helps hospital staff communicate more clearly with parents of babies in the NICU.",
    story:
      "MILA is named after my daughter, Mila. She was born premature in a public hospital in Panama and, tragically, we lost her. The communication between the medical staff and us as parents was fragmented and unclear—we often didn't understand what was happening or what the next steps were. This project exists because no parent should have to experience that confusion during the most difficult moments of their lives. MILA helps clinicians write clear, compassionate updates so families always know what's going on with their baby.",
    problem:
      "Hospital staff are overwhelmed and often don't have time to write detailed updates for parents. When they do, the language can be too technical or inconsistent. Parents are left confused and anxious.",
    approach: [
      "Built a system that reads hospital policies and protocols so it can help staff write accurate updates",
      "Created a simple interface where clinicians can quickly draft messages that are automatically checked for clarity",
      "Added role-based access so only authorized staff can use it, with full audit trails for compliance",
      "Every message goes through human approval before being sent—no fully automated communication",
    ],
    impact: [
      "Clinicians now write parent updates 42% faster—saving about 48 minutes per shift",
      "97% of messages now include proper policy references, up from inconsistent coverage before",
      "Zero factual errors in over 300 reviewed messages thanks to the human approval step",
      "82% of staff adopted it within the first month—it actually makes their job easier",
      "Messages are now written at an 8th-grade reading level, making them easier for all parents to understand",
    ],
    stack: ["Python", "LangChain", "Pinecone", "FastAPI", "OpenAI", "PostgreSQL", "Next.js"],
    links: [],
  },

  "ai-voice-agent": {
    title: "Voice Agent",
    subtitle: "Shining Image",
    gradient: "from-indigo-500 to-cyan-500",
    summary:
      "An AI phone agent that answers calls 24/7, books appointments, and knows when to transfer to a human.",
    story:
      "Shining Image is a window cleaning business run by a close friend. They were losing customers because calls after hours went to voicemail—and most people just called the next company instead. They couldn't afford to hire someone to answer phones around the clock. I built this agent to make sure every call gets answered, every potential customer gets helped, and the business never misses an opportunity.",
    problem:
      "Small service businesses miss 30-40% of calls because they can't answer during jobs, after hours, or on weekends. Every missed call is potentially hundreds of dollars in lost revenue.",
    approach: [
      "Connected to the phone system via Twilio so it answers calls just like a real receptionist",
      "Trained it to answer common questions about services, pricing, and availability",
      "Built booking capability so it can actually schedule appointments, not just take messages",
      "Added smart handoff—if someone asks something complex or sounds frustrated, it transfers to a human with full context",
    ],
    impact: [
      "Missed calls dropped by 62%—the business now captures leads 24/7",
      "Booking rate jumped from 24% to 39%—more callers become paying customers",
      "68% of calls are handled completely by the AI with no human needed",
      "Average callback time dropped from over 2 hours to just 27 minutes",
      "The owner estimates this saves them $2,000-3,000/month in would-be lost jobs",
    ],
    stack: ["Python", "Twilio", "Whisper", "GPT-4", "WebSockets", "ElevenLabs", "PostgreSQL"],
    links: [
      { label: "Call the live demo", href: "tel:+17372774602" },
    ],
  },

  "stripe-qb-reconcile": {
    title: "Reconciler",
    subtitle: "Stripe → QuickBooks",
    gradient: "from-emerald-500 to-teal-500",
    summary:
      "Automatically syncs Stripe payments to QuickBooks so the books are always clean and audit-ready.",
    story:
      "A client was spending 7+ hours every month manually matching Stripe transactions to QuickBooks. It was tedious, error-prone, and they dreaded it. When tax season came, their accountant found discrepancies that took days to untangle. I automated the entire thing—now their books close in a fraction of the time and the numbers always match.",
    problem:
      "Stripe creates hundreds of individual transactions, but accountants want clean, organized books. Manually matching fees, refunds, and payouts is a nightmare that leads to errors and wasted time.",
    approach: [
      "Listens for every Stripe payout and automatically groups all related transactions",
      "Creates one clean expense entry in QuickBooks per payout—no more messy individual entries",
      "Built-in safeguards prevent duplicate entries even if the system runs twice",
      "Automatic alerts for edge cases like disputes or failed payments",
    ],
    impact: [
      "Monthly reconciliation time dropped from 7.5 hours to 2.4 hours—a 68% reduction",
      "Month-end variance is now $0—the books match perfectly every single time",
      "Duplicate entries virtually eliminated (went from 3.4% error rate to 0.1%)",
      "The monthly close process is now 1.2 days faster",
      "Accountant's audit prep time cut in half because everything is properly documented",
    ],
    stack: ["Node.js", "Stripe API", "QuickBooks API", "PostgreSQL", "Vercel"],
    links: [],
  },

  "9vectors": {
    title: "9Vectors.ai",
    subtitle: "Strategic Assessment Platform",
    gradient: "from-rose-500 to-orange-500",
    summary:
      "An AI platform that helps large organizations make better strategic decisions through data-driven assessments.",
    story:
      "As Technical Co-Founder working with Edwin Miller, I helped build the AI infrastructure from the ground up. Enterprise companies were spending months on strategic assessments that were subjective and inconsistent. We built a platform that brings objectivity and speed to organizational intelligence—helping companies understand their strengths, gaps, and opportunities with data instead of gut feelings.",
    problem:
      "Strategic planning in large organizations often relies on expensive consultants, lengthy surveys, and subjective interpretations. The process is slow, expensive, and results vary wildly based on who's doing the analysis.",
    approach: [
      "Built AI models that can analyze organizational data and surface meaningful patterns",
      "Created standardized assessment frameworks that work across different industries",
      "Designed dashboards that make complex strategic data actually understandable",
      "Implemented enterprise-grade security for handling sensitive organizational data",
    ],
    impact: [
      "Platform serves enterprise clients with combined valuation impact of $150M+",
      "Assessment time reduced from 3-4 months to just 2-3 weeks—an 85% reduction",
      "Clients report 40% more actionable insights compared to traditional consulting",
      "Cost savings of $50K-100K per assessment vs. hiring external consultants",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "AWS"],
    links: [
      { label: "Visit 9Vectors.ai", href: "https://9vectors.ai" },
    ],
  },

  "measurement13": {
    title: "Measurement13.ai",
    subtitle: "AI-Powered Analytics",
    gradient: "from-blue-500 to-indigo-500",
    summary:
      "Analytics platform that uses AI to turn messy business data into clear, actionable insights.",
    story:
      "Too many businesses are drowning in data but starving for insights. They have dashboards nobody looks at, reports nobody reads, and analytics tools nobody understands. Measurement13 was built to change that—to make data actually useful for decision-makers who don't have time to become data scientists.",
    problem:
      "Most analytics tools show you what happened, but don't help you understand why or what to do about it. Business leaders need answers, not just charts.",
    approach: [
      "AI layer that automatically identifies the most important trends and anomalies",
      "Natural language summaries that explain what the data means in plain English",
      "Recommendation engine that suggests actions based on patterns in the data",
      "Connects to existing data sources so companies don't have to change their workflows",
    ],
    impact: [
      "Reduces time to insight from 2-3 days to under 10 minutes",
      "Clients find 3x more actionable insights compared to traditional dashboards",
      "Report creation time cut by 75%—from 4 hours to under 1 hour",
      "Non-technical users now answer 80% of their data questions without analyst help",
    ],
    stack: ["React", "Python", "TensorFlow", "BigQuery", "GCP"],
    links: [
      { label: "Visit Measurement13.ai", href: "https://measurement13.ai" },
    ],
  },

  "snapshot9": {
    title: "Snapshot9.ai",
    subtitle: "Business Transformation Platform",
    gradient: "from-violet-500 to-purple-500",
    summary:
      "Helps companies visualize and optimize how their organization actually operates.",
    story:
      "Most companies don't really know how they work. They have org charts that don't reflect reality, processes that exist only in people's heads, and inefficiencies nobody can see. Snapshot9 captures the real picture of how an organization functions and uses AI to find opportunities for improvement.",
    problem:
      "Business transformation initiatives often fail because leaders don't have an accurate picture of current operations. You can't improve what you can't see.",
    approach: [
      "Automated process discovery that maps how work actually flows through the organization",
      "AI analysis that identifies bottlenecks, redundancies, and optimization opportunities",
      "Visual tools that make complex organizational structures understandable",
      "Change tracking to measure the impact of transformation initiatives over time",
    ],
    impact: [
      "Process mapping completed in 2 weeks vs. 2-3 months with traditional methods",
      "Identifies an average of 12-15 optimization opportunities per department",
      "Organizations report 25-30% efficiency gains after implementing recommendations",
      "ROI typically seen within 90 days of deployment",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visit Snapshot9.ai", href: "https://snapshot9.ai" },
    ],
  },

  "thegreymatter": {
    title: "TheGreyMatter.ai",
    subtitle: "Business Intelligence Platform",
    gradient: "from-slate-500 to-zinc-600",
    summary:
      "Makes business data accessible to leadership teams without requiring technical expertise.",
    story:
      "I've seen too many executives making decisions based on incomplete data or waiting days for analysts to pull reports. TheGreyMatter was built to put intelligence directly in the hands of decision-makers—so they can ask questions and get answers in minutes, not days.",
    problem:
      "Leadership teams often can't access the data they need when they need it. They're dependent on analysts, stuck waiting for reports, and often making decisions with outdated information.",
    approach: [
      "Natural language interface so leaders can ask questions in plain English",
      "Automatic data aggregation from multiple business systems",
      "AI-powered insights that surface what's important without being asked",
      "Mobile-friendly design for executives who need answers on the go",
    ],
    impact: [
      "Time to answer reduced from 2-3 days to under 5 minutes—a 99% improvement",
      "Analyst workload for ad-hoc requests dropped by 60%",
      "Executive dashboard engagement increased from 15% to 72% weekly usage",
      "Decision-making speed improved by 40% based on user surveys",
    ],
    stack: ["React", "Node.js", "OpenAI", "MongoDB", "AWS"],
    links: [
      { label: "Visit TheGreyMatter.ai", href: "https://thegreymatter.ai" },
    ],
  },

  "budgetcopilot": {
    title: "BudgetCopilot",
    subtitle: "AI Financial Agent",
    gradient: "from-green-500 to-emerald-500",
    summary:
      "A personal AI that helps you manage money, kill debt, and build wealth—without expensive financial advisors.",
    story:
      "I built BudgetCopilot because I was drowning in debt. Credit cards, loans, and expenses were piling up, and I felt completely lost. Financial advisors wanted hundreds of dollars per session—money I obviously didn't have. I needed something that could help me understand my situation, create a realistic plan, and actually stick to it. So I built it myself. Now I'm using it to help others escape the same trap.",
    problem:
      "Most people don't have access to quality financial advice. Apps show you where your money went, but don't help you make a plan. Advisors are expensive. And let's be honest—budgeting is boring and hard to stick with.",
    approach: [
      "Connects to your accounts to see the full picture of your finances",
      "AI that understands your situation and creates personalized recommendations",
      "Debt payoff strategies that actually work (avalanche, snowball, or custom)",
      "Proactive alerts and encouragement to keep you on track",
      "No judgment—just practical help to improve your financial situation",
    ],
    impact: [
      "Users identify an average of $347/month in spending they can cut or optimize",
      "Debt payoff plans created in 5 minutes vs. $200-500 for a financial advisor session",
      "78% of users report feeling more in control of their finances within 2 weeks",
      "Average user engagement: 4.2 sessions per week (most budgeting apps see <1)",
    ],
    stack: ["Next.js", "OpenAI", "Plaid", "PostgreSQL", "Stripe", "Vercel"],
    links: [
      { label: "Try BudgetCopilot", href: "https://budgetcopilot.app" },
    ],
  },

  "waldoscodelab": {
    title: "Waldo's Code Lab",
    subtitle: "Free Coding School",
    gradient: "from-amber-500 to-yellow-500",
    summary:
      "A free, hands-on coding school that teaches kids and teens real programming skills.",
    story:
      "I learned to code as a teenager, and it changed my life. But I see so many kids today who either can't afford coding bootcamps or are stuck with boring tutorials that don't stick. I started Waldo's Code Lab to give young people the same opportunity I had—to learn to build real things, for free, with someone who actually cares about their success.",
    problem:
      "Quality coding education is expensive and often boring. Kids learn syntax but don't build anything real. By the time they're done, they've forgotten most of it.",
    approach: [
      "Project-based learning—every lesson ends with something you actually built",
      "Live sessions where students can ask questions and get help in real-time",
      "Focus on practical skills that lead to real opportunities",
      "Completely free—no hidden costs, no premium tiers",
    ],
    impact: [
      "100% free—saving families $2,000-5,000 vs. paid coding bootcamps",
      "Students complete an average of 8 real projects in their first 3 months",
      "85% completion rate vs. industry average of 13% for online courses",
      "Multiple students have gone on to internships and freelance work",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    links: [
      { label: "Visit Waldo's Code Lab", href: "https://waldoscodelab.com" },
    ],
  },

  "clearchoiceboquete": {
    title: "Clear Choice Boquete",
    subtitle: "Booking Engine & Website",
    gradient: "from-sky-500 to-blue-500",
    summary:
      "A complete website and booking system for a window cleaning business in Panama.",
    story:
      "Clear Choice Window Cleaning needed more than just a website—they needed a system that could handle bookings, show availability, and help them look professional to potential customers. I built them a complete solution that lets customers book online, reduces phone tag, and helps the business run more efficiently.",
    problem:
      "Small service businesses often have basic websites that don't actually help them get business. Customers want to book online, see pricing, and not have to call. Without that, they just go to a competitor.",
    approach: [
      "Modern, mobile-friendly website that builds trust and looks professional",
      "Real-time booking system that shows actual availability",
      "Automated confirmations and reminders to reduce no-shows",
      "Admin dashboard for managing appointments and customer information",
    ],
    impact: [
      "45% of bookings now come through the website vs. 0% before",
      "Phone call volume reduced by 60%—less time on the phone, more time working",
      "No-show rate dropped from 15% to 3% thanks to automated reminders",
      "Owner saves 5+ hours per week on scheduling and admin tasks",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visit Clear Choice Boquete", href: "https://clearchoiceboquete.com" },
    ],
  },

  "shining-image-platform": {
    title: "Shining Image Platform",
    subtitle: "Business Operations Suite",
    gradient: "from-cyan-500 to-teal-500",
    summary:
      "A complete business management platform with booking, invoicing, scheduling, and customer management.",
    story:
      "Shining Image of Texas was juggling multiple tools—one for scheduling, another for invoicing, spreadsheets for customer tracking, and sticky notes for everything else. It was chaos. I built them an all-in-one platform that handles everything so they can focus on actually running their business instead of fighting with software.",
    problem:
      "Small service businesses waste hours every week switching between apps, copying data, and trying to keep everything in sync. They need one system that does it all.",
    approach: [
      "Unified platform that handles scheduling, invoicing, and customer management",
      "Integrated payment processing through Stripe",
      "Automated reminders and follow-ups to keep things running smoothly",
      "Mobile-friendly so the team can access everything from job sites",
    ],
    impact: [
      "Replaced 4 separate tools—saving $180/month in software subscriptions",
      "Invoice creation time dropped from 45 minutes to 3 minutes per job",
      "Payment collection improved by 35%—fewer late payments, faster cash flow",
      "Admin time reduced by 8 hours per week, freeing up time for more jobs",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    links: [
      { label: "Visit Platform", href: "https://shining-image.vercel.app" },
    ],
  },

  "autospa-bqt": {
    title: "AutoSpa BQT",
    subtitle: "Mobile Car Detailing Platform",
    gradient: "from-red-500 to-rose-500",
    summary:
      "A complete booking, invoicing, and scheduling system for a mobile luxury car detailing business.",
    story:
      "AutoSpa brings premium car detailing directly to customers' homes in Boquete, Panama. They were managing everything through WhatsApp messages and paper notes—appointments got missed, invoices were inconsistent, and they had no easy way to track their business. I built them a professional platform that handles everything from booking to payment, letting them focus on making cars look amazing.",
    problem:
      "Mobile service businesses face unique challenges: they're always on the move, customers expect convenience, and managing appointments across different locations without a fixed office is chaotic. Traditional scheduling tools don't fit this workflow.",
    approach: [
      "Online booking system where customers can see available slots and book instantly",
      "Service packages with clear pricing for different vehicle types and detailing levels",
      "Mobile-first admin dashboard so the team can manage everything from their phones",
      "Integrated invoicing and payment processing through Stripe",
      "Automated appointment reminders to reduce no-shows",
    ],
    impact: [
      "Online bookings increased revenue by 28% in the first 2 months",
      "Zero double-bookings since launch vs. 2-3 per month before",
      "Average booking value increased 15% with upsell suggestions during checkout",
      "Customer repeat rate improved from 40% to 65% with automated follow-ups",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Vercel"],
    links: [
      { label: "Visit AutoSpa BQT", href: "https://autospabqt.com" },
    ],
  },
};

/** ---------- Page ---------- */
export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
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
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
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
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Why I Built This</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Problem</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">How It Works</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The Impact</h2>
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
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Built With</h2>
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
              Interested in working together?
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Let&apos;s talk about how I can help with your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25"
            >
              Get in Touch
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
