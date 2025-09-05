export const metadata = { title: "About & Education" };

// ---------- Education ----------
const education = [
  {
    school: "Universidad Tecnológica de Panamá",
    degree: "Ph.D. in Software Engineering (in progress)",
    period: "2025 - 2027 (expected)",
    location: "Panamá, Panama",
    notes: [
      "Research focus: AI-assisted software engineering (code intelligence, RAG over eng docs, test generation).",
      "Methods: empirical SE + A/B evals on developer workflows (latency, accuracy, task success).",
      "Early milestone: prototype policy-aware RAG patterns for regulated domains (health, finance).",
    ],
  },
  {
    school: "Tecnológico de Monterrey",
    degree: "M.Sc. in Applied AI Engineering (in progress)",
    period: "2025 - 2027 (expected)",
    location: "Mexico (remote)",
    notes: [
      "Coursework (planned/current): LLMs, MLOps, model serving, prompt/eval design.",
      "Built/deployed RAG + tool-calling service with observability (traces, p95, error budgets).",
      "Cloud stack: GCP/AWS, containerized inference, vector DB benchmarking.",
    ],
  },
    {
    school: "Universidad Tecnológica de Panamá",
    degree: "M.Sc. in Software Engineering",
    period: "2023 - 2025",
    location: "Chiriqui, Panama",
    notes: [// M.Sc. in Software Engineering — UTP (2025)
"Focus: requirements, architecture, test automation, DevOps for AI-enabled systems.",
"Capstone: RAG evaluation harness (retrieval@k, factuality checks, regression suite).",
],
  },
  {
    school: "University of The People",
    degree: "M.Sc. in Computer Science",
    period: "2018 - 2022",
    location: "Pasadena, USA (remote)",
    notes: [
      "Advanced topics: algorithms, distributed systems, IR/NLP (LLMs & evaluation).",
      "Team project: fault-tolerant event-driven app with CI/CD and integration tests.",
      ],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "M.A. in Higher Education",
    period: "2020 - 2022",
    location: "Panamá, Panama",
    notes: [// M.Sc. in Higher Education — Universidad Latina de Panamá (2022)
"Instructional design for technical topics; AI literacy workshops for engineers.",
"Built assessments emphasizing practical projects and measurable outcomes.",
"Built study plans from scratch for non-disclosed universities in Panama",
],
  },
  {
    school: "IDESCA Panamá",
    degree: "Associate’s in Technology Research",
    period: "2020 - 2021",
    location: "Panamá, Panama",
    notes: [// Associate’s in Technology Research — IDESCA Panamá (2021)
"Methods: experimental design, statistics, literature review; research ethics.",
"Wrote research briefs and replicable protocols for small-n studies.",
],
  },
  {
    school: "IDESCA Panamá",
    degree: "Associate’s in Pedagogy",
    period: "2020 - 2021",
    location: "Panamá, Panama",
    notes: [// Associate’s in Pedagogy — IDESCA Panamá (2021)
"Adult learning principles, feedback loops, and practical assessment design.",
"Built short curricula with clear rubrics and skill-based grading.",
],
  },
    {
    school: "Universidad Tecnológica de Panamá",
    degree: "B.Sc. in Computer Science",
    period: "2015 - 2020",
    location: "Chiriqui, Panama",
    notes: [// B.Sc. in Computer Science — UTP (2020)
"Core CS: data structures, OS, networks, DBs; senior project with real users.",
"Full-stack app (React/Node/Postgres) with auth and automated tests.",
],
  },
  {
    school: "Universidad Latina de Panamá",
    degree: "B.Sc. in Computer Science",
    period: "2015 - 2020",
    location: "Chiriqui, Panama",
    notes: [// B.Sc. in Computer Science — Universidad Latina de Panamá (2020)
"Emphasis on software design patterns and web engineering.",
"Final project: REST API + dashboard with role-based access control.",
],
  },
];


const certs = [
  { name: "Certification name", org: "Issuer", year: "2024" },
  // e.g. { name: "AWS Certified Machine Learning – Specialty", org: "Amazon Web Services", year: "2023" },
  // e.g. { name: "DeepLearning.AI: Prompt Engineering", org: "DeepLearning.AI", year: "2024" },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-slate-600 mt-2">
        I’m an Applied AI & Full-Stack Engineer focused on LLMs, RAG, agents, and voice systems wired
        into real operations. Below is a concise overview of my education and selected trainings, organized from latest to oldest.
      </p>

      {/* Education */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Education</h2>
        <ul className="mt-6 space-y-4">
          {education.map((ed) => (
            <li
              key={ed.school + ed.degree}
              className="p-5 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800"
            >
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-semibold">{ed.degree}</h3>
                <span className="text-slate-500">· {ed.school}</span>
              </div>
              <div className="text-sm text-slate-500 mt-1">
                {ed.period} · {ed.location}
              </div>
              {!!ed.notes?.length && (
                <ul className="list-disc pl-5 mt-3 space-y-1 text-sm">
                  {ed.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications / Training */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold">Certifications & Training</h2>
        {certs.length === 0 ? (
          <p className="text-slate-600 mt-2">
            Add any formal certifications or notable courses you’ve completed.
          </p>
        ) : (
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {certs.map((c) => (
              <li
                key={c.name + c.org}
                className="p-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800"
              >
                <div className="font-medium">{c.name}</div>
                <div className="text-sm text-slate-500">
                  {c.org} {c.year ? `· ${c.year}` : ""}
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className="text-xs text-slate-500 mt-3">
          Tip: list only items relevant to AI/engineering or that signal rigor (cloud, data, security).
        </p>
      </section>
    </main>
  );
}
