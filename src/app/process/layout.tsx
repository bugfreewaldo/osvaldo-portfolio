import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How I Work",
  description:
    "How Osvaldo Restrepo works on AI engineering projects: discovery, a working demo in 1-2 weeks, real testing, and production launch with ongoing support. No fluff, just results.",
  openGraph: {
    title: "How I Work — Osvaldo Restrepo",
    description:
      "Discovery, fast working demos, real testing, and production launch. No fluff, just results.",
    url: "/process",
  },
  alternates: {
    canonical: "/process",
    languages: { en: "/process", es: "/es/process", "x-default": "/process" },
  },
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
