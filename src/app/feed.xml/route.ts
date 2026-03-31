import { getAllPosts } from "@/lib/blog";

export async function GET() {
  const posts = getAllPosts();

  const baseUrl = "https://osvaldorestrepo.dev";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Osvaldo Restrepo — AI Engineering Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Articles on AI engineering, LLMs, RAG systems, voice AI, and full-stack development by Osvaldo Restrepo. Based in Panama, building globally.</description>
    <language>en-us</language>
    <managingEditor>me@osvaldorestrepo.dev (Osvaldo Restrepo)</managingEditor>
    <webMaster>me@osvaldorestrepo.dev (Osvaldo Restrepo)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/og.png</url>
      <title>Osvaldo Restrepo — AI Engineering Blog</title>
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
      ${post.frontmatter.tldr ? `<content:encoded><![CDATA[<p><strong>TL;DR:</strong> ${post.frontmatter.tldr}</p><p>${post.frontmatter.description}</p><p><a href="${baseUrl}${post.url}">Read the full article →</a></p>]]></content:encoded>` : ""}
      <pubDate>${new Date(post.frontmatter.date).toUTCString()}</pubDate>
      <dc:creator>Osvaldo Restrepo</dc:creator>
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
