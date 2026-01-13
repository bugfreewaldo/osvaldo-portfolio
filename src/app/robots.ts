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
        // Allow AI crawlers to index the site
        userAgent: ["GPTBot", "ChatGPT-User", "Claude-Web", "Anthropic-AI", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
