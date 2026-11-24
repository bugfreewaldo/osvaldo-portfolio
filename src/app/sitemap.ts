import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.osvaldorestrepo.dev";
  const esSlugs = new Set(getAllPosts("es").map((p) => p.slug));

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/process`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/uses`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ai-engineer-panama`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/es/ai-engineer-panama`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/now`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
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

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

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
  }));

  // Spanish main pages
  const spanishMainPages: MetadataRoute.Sitemap = [
    { url: `${base}/es/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  return [...mainPages, ...projectPages, ...blogPages, ...spanishMainPages, ...spanishBlogPages];
}
