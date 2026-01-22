import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://osvaldorestrepo.dev";

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/process`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
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
    "budgetcopilot",
    "waldoscodelab",
    "clearchoiceboquete",
    "shining-image-platform",
    "autospa-bqt",
  ];

  const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Blog posts
  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}${post.url}`,
    lastModified: new Date(post.frontmatter.updated || post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...projectPages, ...blogPages];
}
