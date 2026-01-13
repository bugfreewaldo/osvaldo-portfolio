import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Osvaldo Restrepo for AI consulting, software development, or collaboration opportunities. Available for projects involving LLMs, voice AI, RAG systems, and full-stack development.",
  openGraph: {
    title: "Contact Osvaldo Restrepo",
    description:
      "Get in touch for AI consulting, software development, or collaboration opportunities.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
