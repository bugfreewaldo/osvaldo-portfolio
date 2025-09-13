export default function sitemap() {
  const base = "https://osvaldorestrepo.dev"; // new domain - beautiful :)

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/process`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },


    // Project detail pages
    { url: `${base}/projects/mila-neonatal-llm`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects/ai-voice-agent`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/projects/stripe-qb-reconcile`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];
}
