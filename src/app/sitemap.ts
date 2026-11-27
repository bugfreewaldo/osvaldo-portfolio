import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.osvaldorestrepo.dev";
  const esSlugs = new Set(getAllPosts("es").map((p) => p.slug));

  type Freq = "weekly" | "monthly" | "yearly";
  const pair = (path: string, changeFrequency: Freq, priority: number): MetadataRoute.Sitemap => {
    const en = `${base}${path}`;
    const es = `${base}${path === "/" ? "/es" : `/es${path}`}`;
    const alternates = { languages: { en, es, "x-default": en } };
    return [
      { url: en, lastModified: new Date(), changeFrequency, priority, alternates },
      { url: es, lastModified: new Date(), changeFrequency, priority: Math.max(0.5, priority - 0.1), alternates },
    ];
  };

  // Main pages (English + Spanish twins)
  const mainPages: MetadataRoute.Sitemap = [
    ...pair("/", "weekly", 1),
    ...pair("/projects", "weekly", 0.9),
    ...pair("/blog", "weekly", 0.9),
    ...pair("/about", "monthly", 0.8),
    ...pair("/contact", "yearly", 0.6),
    ...pair("/process", "yearly", 0.5),
    ...pair("/uses", "monthly", 0.6),
    ...pair("/testimonials", "monthly", 0.7),
    ...pair("/ai-engineer-panama", "monthly", 0.9),
    ...pair("/resume", "monthly", 0.8),
    ...pair("/now", "weekly", 0.7),
    ...pair("/case-studies", "monthly", 0.8),
  ];

  // All project detail pages
  const projectSlugs = [
    "mila-neonatal-llm",
    "ai-voice-agent",
    "stripe-qb-reconcile",
    "9vectors",
    "measurement13",
    "snapshot9",
    "thegreymatter",
    "forecast9",
    "duediligence9",
    "benchmarkedoutcomes",
    "integration9",
    "exitready9",
    "board9",
    "contracts9",
    "ddq9",
    "orgdesign9",
    "pipeline9",
    "swotanalysis9",
    "operate9",
    "culture9",
    "interview9",
    "supplychain9",
    "fundraise9",
    "nps9",
    "budgetcopilot",
    "waldoscodelab",
    "babybloom",
    "shining-image-platform",
    "autospa-bqt",
  ];

  const projectPages: MetadataRoute.Sitemap = projectSlugs.flatMap((slug) => pair(`/projects/${slug}`, "monthly", 0.7));

  // English blog posts
  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}${post.url}`,
    lastModified: new Date(post.frontmatter.updated || post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    ...(esSlugs.has(post.slug)
      ? {
          alternates: {
            languages: {
              en: `${base}/blog/${post.slug}`,
              es: `${base}/es/blog/${post.slug}`,
              "x-default": `${base}/blog/${post.slug}`,
            },
          },
        }
      : {}),
  }));

  // Spanish blog posts
  const spanishPosts = getAllPosts("es");
  const spanishBlogPages: MetadataRoute.Sitemap = spanishPosts.map((post) => ({
    url: `${base}${post.url}`,
    lastModified: new Date(post.frontmatter.updated || post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${base}/blog/${post.slug}`,
        es: `${base}/es/blog/${post.slug}`,
        "x-default": `${base}/blog/${post.slug}`,
      },
    },
  }));

  return [...mainPages, ...projectPages, ...blogPages, ...spanishBlogPages];
}
