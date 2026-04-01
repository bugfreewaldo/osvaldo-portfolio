import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://osvaldorestrepo.dev";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Explicitly welcome AI crawlers
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
          "Anthropic-AI",
          "ClaudeBot",
          "Google-Extended",
          "GoogleOther",
          "PerplexityBot",
          "Bytespider",
          "CCBot",
          "cohere-ai",
          "Meta-ExternalFetcher",
          "Meta-ExternalAgent",
          "FacebookBot",
          "Applebot-Extended",
          "YouBot",
          "Amazonbot",
          "OAI-SearchBot",
          "AI2Bot",
          "Diffbot",
          "ImagesiftBot",
          "Omgilibot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
