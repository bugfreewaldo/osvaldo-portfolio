import type { Metadata } from "next";
import HomeClient from "@/app/es/HomeClient";

export const metadata: Metadata = {
  title: {
    absolute: "Osvaldo Restrepo — CTO e ingeniero de IA (LLMs, agentes de IA, IA de voz)",
  },
  description:
    "Portafolio de Osvaldo (Waldo) Restrepo — CTO e ingeniero de IA especializado en LLMs, sistemas RAG, agentes de voz con IA y ML en producción. Construyo sistemas inteligentes que resuelven problemas reales.",
  openGraph: {
    title: "Osvaldo Restrepo — CTO e ingeniero de IA",
    description:
      "Construyo sistemas de IA en producción: LLMs, RAG, agentes de voz y automatización inteligente. Proyectos reales con impacto medible.",
    url: "/es",
    siteName: "Osvaldo Restrepo",
    images: ["/og.png"],
    locale: "es_PA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osvaldo Restrepo — Ingeniero de IA",
    description:
      "Construyo sistemas de IA en producción: LLMs, RAG, agentes de voz y automatización inteligente.",
    images: ["/og.png"],
    creator: "@waldocode",
  },
  alternates: {
    canonical: "/es",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
};

export default function Page() {
  return <HomeClient />;
}
