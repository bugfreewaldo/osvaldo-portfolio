import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Explora el portafolio de proyectos de IA y software de Osvaldo Restrepo: el asistente neonatal MILA, agentes de voz, sistemas RAG, automatización de negocios y más. Soluciones reales con impacto medible.",
  openGraph: {
    title: "Proyectos — Osvaldo Restrepo",
    description:
      "Proyectos de IA y software: agentes de voz, sistemas RAG, aplicaciones con LLM y automatización de negocios con impacto real.",
    url: "/es/projects",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/projects",
    languages: { en: "/projects", es: "/es/projects", "x-default": "/projects" },
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
