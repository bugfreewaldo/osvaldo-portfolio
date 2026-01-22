import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts();

  const baseUrl = "https://osvaldorestrepo.dev";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Osvaldo Restrepo - Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Articles on AI engineering, LLMs, RAG systems, voice AI, and full-stack development by Osvaldo Restrepo.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/og.png</url>
      <title>Osvaldo Restrepo - Blog</title>
      <link>${baseUrl}/blog</link>
    </image>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${baseUrl}${post.url}</link>
      <guid isPermaLink="true">${baseUrl}${post.url}</guid>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <author>me@osvaldorestrepo.dev (Osvaldo Restrepo)</author>
      ${(post.frontmatter.tags || []).map((tag) => `<category>${tag}</category>`).join("\n      ")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
