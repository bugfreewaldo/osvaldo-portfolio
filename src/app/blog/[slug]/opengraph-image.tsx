import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.frontmatter.title || slug.replace(/-/g, " ");
  const category = post?.frontmatter.category || "Blog";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0b1220 100%)",
          color: "white",
        }}
      >
        {/* Category badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        {/* Author */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 64,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, opacity: 0.9 }}>
            Osvaldo Restrepo — osvaldorestrepo.dev
          </div>
        </div>
      </div>
    ),
    size
  );
}
