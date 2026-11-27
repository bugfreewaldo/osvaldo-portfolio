import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lo que uso",
  description:
    "El stack de Osvaldo Restrepo: lenguajes, LLMs, voice AI, frameworks, cloud, observabilidad y herramientas que usa a diario para construir sistemas de IA y productos full-stack en producción.",
  openGraph: {
    title: "Lo que uso — Osvaldo Restrepo",
    description:
      "Los lenguajes, frameworks, plataformas y herramientas que Osvaldo Restrepo usa en ingeniería de IA y desarrollo full-stack.",
    url: "/es/uses",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/uses",
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
