export type Testimonial = {
  quote: string;
  name: string;
  title?: string;
  link?: string; // LinkedIn, etc.
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Waldo translates vague business needs into shippable AI systems. Latency, cost, and safety are always under control.",
    name: "Russell Diaz",
    title: "Chief Executive Officer, Shining Image",
    link: "https://www.linkedin.com/in/russell-diaz-38037a150/",
  },
  {
    quote:
      "Our team adopted his voice agent with minimal friction—clean handoffs and clear observability from day one.",
    name: "Emily Strauss",
    title: "Sales Manager, Shining Image",
    link: "https://www.linkedin.com/in/emily-diaz-817370225/",
  },
  {
    quote:
      "The MILA RAG assistant shipped with proper evals and citations. Clinicians trusted it because the UX was measured.",
    name: "Dr. Jorge NG Chinkee",
    title: "Chief Medical Officer, Hospital Materno Infantil José Domingo de Obaldía",
    link: "https://www.linkedin.com/in/jorge-ng-chinkee-a9413a61/",
  },
  {
    quote:
      "Osvaldo doesn't just write code — he understands the architecture behind the business problem. He ramped up fast, asked the right questions, and delivered production-grade AI features that our clients actually use.",
    name: "JP Morgenthal",
    title: "Former Chief Technology Officer, TheGreyMatter.ai",
    link: "https://www.linkedin.com/in/jpmorgenthal/",
  },
  {
    quote:
      "We needed someone who could bridge the gap between what AI can do and what the business actually needs. Osvaldo did exactly that — shipped fast, communicated clearly, and built systems that scaled without drama.",
    name: "Edwin Miller",
    title: "Chief Executive Officer, TheGreyMatter.ai",
    link: "https://www.linkedin.com/in/edwinmiller/",
  },
];

// Spanish role titles (quotes stay in the author's own words).
const TITLES_ES: Record<string, string> = {
  "Russell Diaz": "Director Ejecutivo (CEO), Shining Image",
  "Emily Strauss": "Gerente de Ventas, Shining Image",
  "Dr. Jorge NG Chinkee": "Director Médico, Hospital Materno Infantil José Domingo de Obaldía",
  "JP Morgenthal": "Ex Director de Tecnología (CTO), TheGreyMatter.ai",
  "Edwin Miller": "Director Ejecutivo (CEO), TheGreyMatter.ai",
};

export default function Testimonials({ locale = "en" }: { locale?: "en" | "es" } = {}) {
  const es = locale === "es";
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">{es ? "Testimonios" : "Testimonials"}</h2>
      <div className="grid sm:grid-cols-2 gap-6 mt-6">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="p-5 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800">
            <blockquote className="text-slate-700 dark:text-slate-200" lang={es ? "en" : undefined}>
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-slate-500">
              <div className="font-medium text-slate-700 dark:text-slate-300">
                {t.link ? (
                  <a href={t.link} target="_blank" rel="noopener noreferrer" className="underline">
                    {t.name}
                  </a>
                ) : (
                  t.name
                )}
              </div>
              {t.title && <div>{es ? TITLES_ES[t.name] ?? t.title : t.title}</div>}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
