import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Osvaldo Restrepo's portfolio of AI and software projects: MILA neonatal assistant, voice agents, RAG systems, business automation, and more. Real solutions with measurable impact.",
  openGraph: {
    title: "Projects — Osvaldo Restrepo",
    description:
      "AI and software projects: voice agents, RAG systems, LLM applications, and business automation with real impact.",
    url: "/projects",
  },
  alternates: { canonical: "/projects" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
