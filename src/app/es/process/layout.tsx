import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo trabajo",
  description:
    "Cómo trabaja Osvaldo Restrepo en proyectos de ingeniería de IA: descubrimiento, un demo funcional en 1-2 semanas, pruebas reales y lanzamiento a producción con soporte continuo. Sin relleno, solo resultados.",
  openGraph: {
    title: "Cómo trabajo — Osvaldo Restrepo",
    description:
      "Descubrimiento, demos funcionales rápidos, pruebas reales y lanzamiento a producción. Sin relleno, solo resultados.",
    url: "/es/process",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/process",
    languages: { en: "/process", es: "/es/process", "x-default": "/process" },
  },
};

export default function ProcessLayoutEs({ children }: { children: React.ReactNode }) {
  return children;
}
