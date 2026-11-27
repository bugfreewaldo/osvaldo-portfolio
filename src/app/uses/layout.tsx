import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Osvaldo Restrepo's stack: the languages, LLMs, voice AI, frameworks, cloud, observability, and tools he uses to build production AI systems and full-stack products.",
  openGraph: {
    title: "Uses — Osvaldo Restrepo",
    description:
      "The languages, frameworks, platforms, and tools Osvaldo Restrepo uses across AI engineering and full-stack development.",
    url: "/uses",
  },
  alternates: {
    canonical: "/uses",
    languages: { en: "/uses", es: "/es/uses", "x-default": "/uses" },
  },
};

export default function UsesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
