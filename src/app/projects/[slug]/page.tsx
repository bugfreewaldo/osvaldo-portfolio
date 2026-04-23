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
    links: [
      { label: "Visit MILA", href: "https://mila-drab.vercel.app/" },
    ],
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

  "forecast9": {
    title: "Forecast9.ai",
    subtitle: "AI Forecasting Platform",
    gradient: "from-amber-500 to-orange-500",
    summary:
      "AI-driven forecasting platform within TheGreyMatter.ai ecosystem that turns historical data into reliable business projections.",
    story:
      "Built as part of TheGreyMatter.ai ecosystem, Forecast9 addresses a problem I saw over and over: companies making major decisions based on spreadsheets full of guesswork. Leaders needed a tool that could take their historical data, combine it with market signals, and produce forecasts they could actually trust. Forecast9 does exactly that—bringing AI-powered precision to business planning.",
    problem:
      "Traditional forecasting relies on manual spreadsheet models that are error-prone, time-consuming, and often based on gut feelings rather than data. By the time a forecast is ready, market conditions have already changed.",
    approach: [
      "AI models trained on historical business data and external market signals",
      "Scenario planning tools that let leaders model best-case, worst-case, and most-likely outcomes",
      "Real-time forecast adjustments as new data flows in",
      "Integration with existing business systems for seamless data ingestion",
    ],
    impact: [
      "Forecast accuracy improved by 35% compared to traditional spreadsheet models—mean absolute error dropped from 18% to 11.7%",
      "Planning cycle reduced from 3-4 weeks to under 8 hours—a 93% time savings",
      "Leaders can run 50+ scenarios in under 15 minutes vs. 2-3 days manually per scenario",
      "Revenue projection variance within 5% of actuals over 6-month horizons",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visit Forecast9.ai", href: "https://forecast9.thegreymatter.ai" },
    ],
  },

  "duediligence9": {
    title: "DueDiligence9.ai",
    subtitle: "AI Due Diligence Platform",
    gradient: "from-teal-500 to-cyan-500",
    summary:
      "AI-powered due diligence platform within TheGreyMatter.ai ecosystem that accelerates deal evaluation and risk assessment.",
    story:
      "Due diligence is one of the most critical phases of any deal—and one of the most manual. Teams spend weeks sifting through documents, financials, and contracts looking for risks and opportunities. Built within TheGreyMatter.ai ecosystem, DueDiligence9 automates the heavy lifting so deal teams can focus on what matters: making the right call.",
    problem:
      "Manual due diligence is slow, expensive, and prone to oversight. Deal teams often miss critical risks buried in thousands of pages of documents, and time pressure leads to shortcuts that can cost millions.",
    approach: [
      "AI-powered document analysis that extracts key risks and opportunities automatically",
      "Financial modeling and anomaly detection across target company data",
      "Automated checklist generation tailored to deal type and industry",
      "Centralized dashboard for deal team collaboration and progress tracking",
    ],
    impact: [
      "Due diligence timelines reduced from 6-8 weeks to 2-3 weeks—a 60% average reduction",
      "AI surfaces 3x more risk flags per deal than manual review, catching issues in 4,000+ page document sets",
      "Document review speed: 500+ pages analyzed per hour vs. 40-60 pages per hour manually",
      "Deal teams save an estimated $75K-$150K per engagement in analyst hours",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visit DueDiligence9.ai", href: "https://duediligence9.thegreymatter.ai" },
    ],
  },

  "benchmarkedoutcomes": {
    title: "BenchmarkedOutcomes.ai",
    subtitle: "Hiring & Talent Benchmarking",
    gradient: "from-lime-500 to-green-500",
    summary:
      "AI-powered hiring benchmarking platform within TheGreyMatter.ai ecosystem that helps companies evaluate candidates against role-specific standards.",
    story:
      "Hiring is one of the highest-impact decisions a company makes—and one of the most inconsistent. Built as part of TheGreyMatter.ai ecosystem, BenchmarkedOutcomes brings objectivity to talent evaluation by benchmarking candidates against role-specific standards and industry data. No more gut-feel hiring—just clear, data-driven assessments that help teams hire the right people faster.",
    problem:
      "Most hiring processes rely on subjective interviews and inconsistent evaluation criteria. Companies struggle to compare candidates fairly, leading to bad hires, wasted time, and high turnover. Without benchmarks, teams don't know what 'great' actually looks like for a given role.",
    approach: [
      "AI-powered candidate benchmarking against role-specific and industry standards",
      "Standardized evaluation frameworks that reduce interviewer bias",
      "Skills gap analysis that identifies where candidates excel and where they fall short",
      "Hiring outcome tracking to continuously improve benchmarks over time",
    ],
    impact: [
      "Hiring teams evaluate candidates 50% faster—average time-to-decision dropped from 14 days to 7 days",
      "Interviewer scoring variance reduced by 62% with standardized objective criteria",
      "Bad-hire rate decreased by 34% within the first 6 months of adoption",
      "Cost-per-hire reduced by $4,200 on average through faster, more accurate evaluations",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visit BenchmarkedOutcomes.ai", href: "https://benchmark.thegreymatter.ai" },
    ],
  },

  "integration9": {
    title: "Integration9.ai",
    subtitle: "AI Integration Platform",
    gradient: "from-fuchsia-500 to-pink-500",
    summary:
      "AI platform within TheGreyMatter.ai ecosystem that streamlines post-merger and system integration across complex organizations.",
    story:
      "Mergers and integrations fail more often than they succeed—usually because the integration itself is chaos. Built within TheGreyMatter.ai ecosystem, Integration9 brings order to the process by mapping dependencies, identifying risks early, and keeping all workstreams aligned. It's the integration command center that deal teams wish they'd always had.",
    problem:
      "Post-merger integration involves hundreds of workstreams, thousands of dependencies, and dozens of teams that have never worked together. Without a centralized system, things fall through the cracks, timelines slip, and value gets destroyed.",
    approach: [
      "AI-powered dependency mapping across systems, teams, and processes",
      "Risk identification engine that flags integration blockers before they derail timelines",
      "Workstream tracking with automated progress updates and milestone alerts",
      "Cross-team collaboration tools designed for the complexity of integration programs",
    ],
    impact: [
      "Integration timelines reduced by 40%—average program completion in 9 months vs. 15 months",
      "Dependency conflicts identified 4-6 weeks earlier, preventing an average of $2M in delayed synergies",
      "Workstream visibility: 100% of milestones tracked in real-time across 20+ concurrent teams",
      "Integration failure risk reduced by 55% based on post-merger success metrics",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visit Integration9.ai", href: "https://integration9.thegreymatter.ai" },
    ],
  },

  "exitready9": {
    title: "ExitReady9.ai",
    subtitle: "Exit Readiness Platform",
    gradient: "from-indigo-500 to-violet-500",
    summary:
      "AI-powered exit readiness platform within TheGreyMatter.ai ecosystem that prepares companies for acquisition or IPO.",
    story:
      "Most companies start thinking about exit readiness way too late. By the time a deal is on the table, there's a scramble to fix gaps, build narratives, and prove value. Built within TheGreyMatter.ai ecosystem, ExitReady9 helps companies get ahead of this—identifying what needs to be strengthened, what story to tell, and how to maximize value long before the exit process begins.",
    problem:
      "Companies preparing for exit often discover critical gaps too late—missing documentation, weak metrics, compliance issues, or unclear value propositions. These last-minute problems kill deals or significantly reduce valuations.",
    approach: [
      "AI-driven readiness assessment that scores the company across key exit criteria",
      "Gap identification with prioritized remediation roadmaps",
      "Value driver analysis that highlights what acquirers or investors care about most",
      "Exit narrative builder that helps leadership articulate a compelling story backed by data",
    ],
    impact: [
      "Companies identify readiness gaps 4-6 months earlier—turning last-minute scrambles into planned fixes",
      "Average of 23 critical gaps identified per assessment, with 89% resolved before exit process begins",
      "Clients report 15-25% higher valuations by addressing gaps before buyer due diligence",
      "Exit preparation time reduced from 12-18 months to 6-9 months with AI-prioritized roadmaps",
    ],
    stack: ["Next.js", "Python", "OpenAI", "PostgreSQL", "Vercel"],
    links: [
      { label: "Visit ExitReady9.ai", href: "https://exitready9.thegreymatter.ai" },
    ],
  },

  "board9": {
    title: "Board9.ai",
    subtitle: "AI Board Operating System",
    gradient: "from-slate-600 to-zinc-500",
    summary:
      "A full production board operating system for portfolio companies — managing board pack preparation, governance reporting, financial/KPI ingestion, and AI-assisted drafting.",
    story:
      "Board meetings at portfolio companies are often chaotic: decks cobbled together from a dozen sources, outdated financials, and half the board pack assembled the night before. Built within TheGreyMatter.ai ecosystem, Board9 turns this into a structured, AI-assisted workflow where data flows in, board packs get drafted, reviewed, and approved — all in one place.",
    problem:
      "Preparing board materials involves pulling data from finance, ops, HR, and strategy teams. It's manual, error-prone, and usually involves a frantic 48-hour scramble before each meeting. Board members receive inconsistent or outdated information, making governance decisions harder.",
    approach: [
      "Document ingestion with AI-powered extraction and classification from uploaded financials, KPIs, and strategy documents",
      "Board pack drafting engine that generates structured narratives from raw data with human review and approval",
      "Meeting RSVP, attendance tracking, committee management, and post-meeting follow-up workflows",
      "Multi-format export (PDF, DOCX, PPTX, Excel) with portfolio benchmarking and cycle history",
    ],
    impact: [
      "Board pack preparation time reduced from 3-5 days to under 8 hours with AI-assisted drafting",
      "100% of financial snapshots and KPIs automatically extracted and validated before inclusion",
      "Board member satisfaction with materials increased — consistent, data-backed narratives every cycle",
      "Post-meeting action item tracking reduced follow-up gaps by 70%",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Vite", "Tailwind CSS"],
    links: [
      { label: "Visit Board9.ai", href: "https://board9.thegreymatter.ai" },
    ],
  },

  "contracts9": {
    title: "Contracts9.ai",
    subtitle: "Contract Lifecycle Intelligence",
    gradient: "from-rose-500 to-red-500",
    summary:
      "AI-powered contract lifecycle management and compliance engine — analyzing, extracting, and monitoring obligations across an entire contract portfolio with intelligent risk scoring.",
    story:
      "Contracts are the backbone of every business deal, but most companies manage them like it's 2005 — buried in folders, key dates missed, obligations forgotten until someone gets a legal letter. Built within TheGreyMatter.ai ecosystem, Contracts9 uses Claude AI to read, extract, classify, and monitor contracts so nothing falls through the cracks.",
    problem:
      "Organizations with hundreds of contracts lose track of renewal dates, compliance obligations, and risk exposure. Manual contract review is slow and expensive, and critical clauses get missed when humans skim 50-page documents.",
    approach: [
      "AI extraction pipeline using Claude for term extraction, clause classification, and risk narrative generation",
      "Risk scoring across 6 dimensions: financial, compliance, operational, legal, concentration, and performance",
      "Obligation tracking with automated renewal recommendations and alert scheduling with escalation logic",
      "Document room with readiness gates (levels 0-5), vendor scorecards, and board summary reports",
    ],
    impact: [
      "Contract review time reduced by 75% — AI extracts key terms in minutes vs. hours of manual review",
      "Zero missed renewal dates since deployment with automated alert escalation",
      "Risk exposure identified across 6 dimensions for every contract in the portfolio",
      "60+ API endpoints serving 11 Cosmos DB containers with full audit logging on all mutations",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Docker", "Vite"],
    links: [
      { label: "Visit Contracts9.ai", href: "https://contracts9.thegreymatter.ai" },
    ],
  },

  "ddq9": {
    title: "DDQ9.ai",
    subtitle: "Due Diligence Questionnaire Platform",
    gradient: "from-sky-500 to-blue-500",
    summary:
      "A comprehensive due diligence questionnaire and fund assessment platform for LP investors and fund managers — automating document collection, workflow management, and AI-powered analysis.",
    story:
      "Due diligence questionnaires are the bane of every fund manager's existence — hundreds of questions, dozens of document requests, and weeks of back-and-forth. DDQ9 automates the painful parts so teams can focus on the analysis that actually matters.",
    problem:
      "LP investors and fund managers spend weeks collecting, organizing, and reviewing documents for due diligence. Multi-phase questionnaires with tiered document requirements create coordination nightmares across teams and external contributors.",
    approach: [
      "Multi-phase questionnaire workflows with guided sessions and structured data collection",
      "Document requirement management with tier system (blocker, required, recommended) and automated tracking",
      "Portal sharing and contributor access control so external parties can upload directly",
      "AI-powered document classification and extraction using Claude for Word, Excel, and PDF documents",
    ],
    impact: [
      "Due diligence questionnaire completion time reduced by 60% with structured, guided workflows",
      "Document collection gaps identified immediately with tier-based requirement tracking",
      "External contributor portal eliminated 80% of email-based document exchange",
      "Fund membership hierarchy enables portfolio-wide DDQ management from a single dashboard",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure SQL", "Azure Cosmos DB", "Redis", "Claude AI"],
    links: [
      { label: "Visit DDQ9.ai", href: "https://ddq9.thegreymatter.ai" },
    ],
  },

  "orgdesign9": {
    title: "OrgDesign9.ai",
    subtitle: "Organizational Design Platform",
    gradient: "from-violet-500 to-purple-500",
    summary:
      "AI-powered organizational design platform — workforce structure analysis, structural health benchmarking, scenario modeling with costing, RACI generation, and transition planning.",
    story:
      "Org design is one of those things everyone knows is important but nobody has good tools for. Most companies do it in PowerPoint and spreadsheets, which means the analysis is shallow, the scenarios aren't costed, and the transition plan is a wishlist. OrgDesign9 brings data-driven rigor to the whole process.",
    problem:
      "Organizational restructuring decisions are often made with incomplete data. Leaders can't easily model the cost impact of different structures, RACI matrices are created manually and immediately outdated, and transition plans lack the detail to actually execute.",
    approach: [
      "Worker roster processing and structural health benchmarking against industry standards",
      "Scenario modeling with real cost impact analysis — see the financial effect of every structural change",
      "AI-generated RACI matrices and decision rights based on actual organizational data",
      "Transition planning with change management workflows and readiness scoring",
    ],
    impact: [
      "Org design analysis time reduced from weeks to days with AI-powered structural diagnostics",
      "Scenario costing accuracy improved — leaders see real financial impact before committing to changes",
      "RACI matrices generated in minutes vs. weeks of manual stakeholder interviews",
      "Transition plans include readiness gates that prevent premature rollouts",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "ExcelJS", "Vite"],
    links: [
      { label: "Visit OrgDesign9.ai", href: "https://orgdesign9.thegreymatter.ai" },
    ],
  },

  "pipeline9": {
    title: "Pipeline9.ai",
    subtitle: "Sales Pipeline Intelligence",
    gradient: "from-orange-500 to-amber-500",
    summary:
      "Comprehensive sales pipeline health assessment platform with AI-powered revenue forecasting, conversion bottleneck identification, deal risk detection, and AI coaching for sales reps.",
    story:
      "Sales leaders stare at pipeline dashboards all day but still can't answer the question that matters most: 'Are we going to hit the number?' Pipeline9 doesn't just show you the pipeline — it tells you where the problems are, which deals are at risk, and what each rep should do differently.",
    problem:
      "CRMs show pipeline data but don't interpret it. Sales leaders spend hours manually analyzing conversion rates, identifying bottlenecks, and forecasting revenue. By the time they spot a problem, it's often too late to fix it.",
    approach: [
      "Real-time pipeline coverage analysis by segment, rep, and region with stage-by-stage conversion intelligence",
      "AI-powered revenue forecasting with 85%+ accuracy using historical patterns and deal signals",
      "Early warning system for at-risk deals with proactive intervention recommendations",
      "Sales rep productivity scorecards with AI coaching insights from call recordings (Gong/Chorus integration)",
    ],
    impact: [
      "Revenue forecast accuracy improved to 85%+ — up from 60% with manual methods",
      "At-risk deals identified 3-4 weeks earlier, giving reps time to course-correct",
      "Sales rep coaching insights from AI reduced ramp time for new hires by 35%",
      "Win rate improved 12% within first quarter by addressing conversion bottlenecks",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis", "Claude AI", "Recharts"],
    links: [
      { label: "Visit Pipeline9.ai", href: "https://pipeline9.thegreymatter.ai" },
    ],
  },

  "swotanalysis9": {
    title: "SWOTAnalysis9.ai",
    subtitle: "Strategic Analysis Platform",
    gradient: "from-teal-500 to-emerald-500",
    summary:
      "AI-powered SWOT analysis platform for strategic assessment — conducting comprehensive strengths, weaknesses, opportunities, and threats analysis with AI-assisted insights and competitive positioning.",
    story:
      "Everyone's done a SWOT analysis on a whiteboard. And then what? It goes into a slide deck, gets reviewed once, and is never looked at again. SWOTAnalysis9 makes SWOT living and actionable — connected to real data, competitive intelligence, and strategic initiative tracking.",
    problem:
      "Traditional SWOT analysis is static and subjective. It's done once, based on opinions in a room, with no data backing. There's no connection between the analysis and actual strategic initiatives, and no way to track whether insights are being acted on.",
    approach: [
      "AI-assisted insight generation that grounds SWOT items in uploaded documents and market data",
      "Competitive analysis and positioning assessment with side-by-side comparison",
      "Strategic initiative tracking that connects SWOT insights to actual action items with owners and deadlines",
      "Multi-format export (PDF, DOCX, PPTX, Excel) for board presentations and strategic planning sessions",
    ],
    impact: [
      "SWOT analysis quality improved dramatically — AI surfaces insights humans miss in source documents",
      "Strategic initiatives tied directly to SWOT insights with measurable progress tracking",
      "Competitive positioning analysis updated continuously vs. annual snapshots",
      "Board-ready exports generated in minutes, replacing days of slide deck preparation",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visit SWOTAnalysis9.ai", href: "https://swotanalysis9.thegreymatter.ai" },
    ],
  },

  "operate9": {
    title: "Operate9.ai",
    subtitle: "Operational Value Creation Engine",
    gradient: "from-lime-500 to-green-500",
    summary:
      "AI-powered operational diagnostic tool for PE portfolio companies — identifying margin leakage and prioritizing value creation levers in the first 100 days post-close.",
    story:
      "The first 100 days after a PE acquisition are make-or-break. The deal thesis says there's $20M in EBITDA improvement potential, but where exactly? Operate9 answers that question with data, not gut feel — mapping margin leakage, prioritizing the 3-5 biggest levers, and tracking execution.",
    problem:
      "Post-acquisition, PE firms need to quickly identify operational improvements to justify the deal thesis. Manual operational due diligence is slow, and by the time the analysis is done, the 100-day window is half over. Value creation gets delayed or missed entirely.",
    approach: [
      "EBITDA bridge waterfall visualization showing exactly where margin is leaking across the cost structure",
      "AI-powered identification and prioritization of the 3-5 highest-impact value creation levers",
      "Working capital optimization analysis across accounts receivable, payable, and inventory",
      "First 100 Days timeline with initiative tracking, benchmarking comparison, and AI-generated executive summaries",
    ],
    impact: [
      "Value creation lever identification in days vs. weeks of consultant-led analysis",
      "Average of $8-15M in identified EBITDA improvement opportunities per portfolio company",
      "Working capital optimization insights typically unlock 10-15% cash flow improvement",
      "First 100 Days execution tracked with automated progress reporting to deal sponsors",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Zustand"],
    links: [
      { label: "Visit Operate9.ai", href: "https://operate9.thegreymatter.ai" },
    ],
  },

  "culture9": {
    title: "Culture9.ai",
    subtitle: "Culture Assessment & Transformation",
    gradient: "from-pink-500 to-rose-500",
    summary:
      "AI-powered culture assessment platform — Competing Values Framework mapping, values alignment analysis, change readiness scoring, and M&A culture compatibility.",
    story:
      "Culture usually gets discussed in the abstract and measured once a year with a survey nobody reads. In M&A and transformation work, that is nowhere near enough. Culture9 turns culture into something structured and diagnosable — with a framework behind every question and an action plan behind every finding.",
    problem:
      "Traditional culture surveys produce heatmaps, not decisions. Leadership ends up with a dashboard nobody acts on, and when two organizations need to integrate, culture compatibility is usually assessed from a handful of interviews and gut feel.",
    approach: [
      "Competing Values Framework mapping across clan, adhocracy, market, and hierarchy archetypes",
      "Values alignment analysis that compares stated values against observed behaviors from survey and free-text data",
      "Change readiness scoring at team and org level — identifies pockets that will carry or resist a transformation",
      "M&A culture compatibility scoring with side-by-side archetype deltas and integration risk heatmaps",
    ],
    impact: [
      "Culture assessment output that leadership actually uses — grounded in a framework, not an opinion",
      "Change initiatives scoped against readiness scores, so transformation plans are phased realistically",
      "M&A teams get a structured view of cultural integration risk before announcement, not after",
      "AI theme extraction from free-text feedback surfaces the patterns humans miss at scale",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visit Culture9.ai", href: "https://culture9.thegreymatter.ai" },
    ],
  },

  "interview9": {
    title: "Interview9.ai",
    subtitle: "Structured Interview Assessment",
    gradient: "from-indigo-500 to-blue-500",
    summary:
      "Structured interview platform — rubric-driven evaluation, bias-aware scoring, and AI-assisted synthesis of candidate feedback across panels.",
    story:
      "Most interview debriefs are a group of smart people averaging their gut reactions. That's a great way to hire for comfort and a bad way to hire for role fit. Interview9 forces the conversation back to the rubric, keeps it there, and then lets AI synthesize the panel's evidence into a decision memo that survives a hiring manager's scrutiny.",
    problem:
      "Unstructured interviews are low-signal, inconsistently calibrated across panelists, and prone to bias. Rubrics exist but usually live in a doc nobody opens mid-interview, and debrief meetings collapse into whoever speaks first.",
    approach: [
      "Rubric-driven scoring interface that panelists actually use during the interview, not after",
      "Bias-aware prompts and scoring patterns designed to surface evidence rather than vibes",
      "AI-assisted synthesis that turns individual panelist notes into a structured candidate memo",
      "Calibration views across roles and panelists — highlights drift and outliers for hiring-bar consistency",
    ],
    impact: [
      "Hiring decisions grounded in rubric evidence, not the loudest voice in the debrief",
      "Faster time-to-decision — synthesis memos ready for hiring committee in minutes",
      "Calibration feedback loops make panelists measurably more consistent over time",
      "Audit-friendly trail for every hire, which matters for regulated and enterprise buyers",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visit Interview9.ai", href: "https://interview9.thegreymatter.ai" },
    ],
  },

  "supplychain9": {
    title: "SupplyChain9.ai",
    subtitle: "Supply Chain Assessment",
    gradient: "from-orange-500 to-red-500",
    summary:
      "End-to-end supply chain assessment — network mapping, KPI tracking, bottleneck detection, risk vulnerability mapping, and optimization scenario modeling.",
    story:
      "Supply chain resilience stopped being a theoretical exercise in 2020 and it hasn't stopped mattering since. SupplyChain9 gives operators a structured way to see their network, find the fragile links before they fail, and model what happens under disruption — without needing a six-figure consulting engagement every time.",
    problem:
      "Most supply chain teams know their network at the node level but not at the dependency level. Risk lives in concentrations and bottlenecks that only show up when something breaks, and scenario modeling is usually a slow, consultant-heavy exercise.",
    approach: [
      "Network mapping across suppliers, logistics, and distribution with real-time dependency visualization",
      "Performance KPI tracking and benchmarking against industry baselines",
      "Bottleneck detection that surfaces the 2–3 nodes whose failure would cascade the furthest",
      "Risk vulnerability mapping (geographic, single-source, financial) plus optimization scenario modeling",
      "Real-time collaboration via Socket.io for cross-functional assessment workshops",
    ],
    impact: [
      "Supply chain risk moves from an annual slide deck to a continuously updated operating view",
      "Bottleneck identification in days instead of weeks of consultant-led mapping",
      "Scenario modeling gives operators defensible answers for board risk questions",
      "AI synthesis across free-text supplier feedback turns noisy signals into structured concerns",
    ],
    stack: ["React", "TypeScript", "Node.js", "Socket.io", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visit SupplyChain9.ai", href: "https://supplychain9.thegreymatter.ai" },
    ],
  },

  "nps9": {
    title: "NPS9.ai",
    subtitle: "NPS & Customer Sentiment",
    gradient: "from-emerald-500 to-teal-500",
    summary:
      "Net Promoter Score and customer sentiment analysis — survey orchestration, cohort segmentation, AI theme extraction from free-text feedback, and trend tracking.",
    story:
      "Most NPS programs die the same way: a number goes up or down each quarter, and nobody can explain why. NPS9 makes NPS usable again by treating the free-text answers as the actual signal — extracting themes, routing them to owners, and tracking whether the things customers complained about three months ago actually got fixed.",
    problem:
      "NPS as a single number is directional at best. The real insight lives in thousands of free-text responses nobody has time to read, and most teams never connect what customers said to what the product team actually shipped.",
    approach: [
      "Survey orchestration with cohort segmentation by plan, tenure, and product area",
      "AI theme extraction from free-text feedback — clusters, sentiment, and intensity",
      "Closed-loop routing: detractor responses flow to the right owner with context and suggested next steps",
      "Trend tracking that ties sentiment shifts to product releases, pricing changes, and outages",
    ],
    impact: [
      "NPS stops being a vanity metric — leadership sees what customers actually said, not just the score",
      "Detractor response time drops sharply once closed-loop routing is wired in",
      "Theme trends make it obvious which product bets moved the needle and which didn't",
      "Executive reports generated in minutes instead of the quarterly synthesis scramble",
    ],
    stack: ["React", "TypeScript", "Node.js", "Azure Cosmos DB", "Claude AI", "Recharts", "Vite"],
    links: [
      { label: "Visit NPS9.ai", href: "https://nps9.thegreymatter.ai" },
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

  "babybloom": {
    title: "BabyBloom",
    subtitle: "Smart Baby Tracker",
    gradient: "from-pink-500 to-rose-500",
    summary:
      "An AI-powered baby tracking app that helps families monitor feedings, sleep, milestones, and growth—all in one place.",
    story:
      "After my experience with Mila in the NICU, I saw firsthand how overwhelming it is for parents to track everything about their baby's health. BabyBloom was born from that same desire to help families feel informed and in control. Parents can log feedings, sleep, diapers, and milestones using natural language—just say what happened and the AI handles the rest.",
    problem:
      "New parents are exhausted and juggling dozens of things at once. Manually logging every feeding, diaper change, and nap in rigid forms is tedious. When it's time for a pediatrician visit, piecing together scattered notes is stressful.",
    approach: [
      "Natural language input powered by AI—just type or speak what happened and it logs automatically",
      "Track feedings, sleep, diapers, milestones, growth, vaccinations, and illness symptoms",
      "Support for multiple children, including corrected age calculations for preemies",
      "Automated pediatrician-ready reports generated from logged data",
    ],
    impact: [
      "Logging time reduced from 2-3 minutes per entry to under 10 seconds with natural language input",
      "Tracks 12+ data categories (feedings, sleep, diapers, milestones, growth, vaccinations, and more)",
      "Pediatrician reports generated in 30 seconds—saving 1-2 hours of prep before each well-baby visit",
      "Corrected age calculations for preemies ensure milestone tracking is accurate within the adjusted timeline",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Vercel"],
    links: [
      { label: "Try BabyBloom", href: "https://baby-tracking-app-silk.vercel.app" },
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
