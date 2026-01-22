import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on AI engineering, LLMs, RAG systems, voice AI, and full-stack development. Practical guides from production experience.",
  openGraph: {
    title: "Blog — Osvaldo Restrepo",
    description:
      "Articles on AI engineering, LLMs, RAG systems, voice AI, and full-stack development.",
    url: "/blog",
    type: "website",
  },
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
