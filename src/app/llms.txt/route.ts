import fs from "fs";
import path from "path";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://www.osvaldorestrepo.dev";

// llms.txt = hand-written profile (content/llms.txt) + an always-current index of
// every article, so AI assistants can find and cite the writing directly.
export function GET() {
  const profile = fs.readFileSync(path.join(process.cwd(), "content/llms.txt"), "utf8").trimEnd();
  const posts = getAllPosts("en");

  const writing = posts
    .map((p) => `- [${p.frontmatter.title}](${BASE}${p.url}): ${p.frontmatter.description}`)
    .join("\n");

  const body = `${profile}

## Writing (${posts.length} articles by Osvaldo Restrepo, newest first)
Spanish translations live at ${BASE}/es/blog/<slug>.

${writing}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
