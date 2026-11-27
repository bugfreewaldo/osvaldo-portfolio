import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbele a Osvaldo Restrepo para consultoría en IA, desarrollo de software o colaboraciones. Disponible para proyectos con LLMs, voice AI, sistemas RAG y desarrollo full-stack.",
  openGraph: {
    title: "Contacta a Osvaldo Restrepo",
    description:
      "Escríbeme para consultoría en IA, desarrollo de software o colaboraciones.",
    url: "/es/contact",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/contact",
    languages: { en: "/contact", es: "/es/contact", "x-default": "/contact" },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
