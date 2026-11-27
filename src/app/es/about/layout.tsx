import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Osvaldo Restrepo — CTO e ingeniero de IA con más de 10 años de experiencia construyendo sistemas de IA en producción, agentes de voz y plataformas empresariales. Investigación doctoral en IA en la Universidad Tecnológica de Panamá y maestría en IA en el Tecnológico de Monterrey. Disponible para roles senior de ingeniería de IA y consultoría.",
  openGraph: {
    title: "Sobre Osvaldo Restrepo",
    description:
      "CTO e ingeniero de IA que construye sistemas de IA en producción, agentes de voz y plataformas empresariales.",
    url: "/es/about",
    locale: "es_PA",
  },
  alternates: {
    canonical: "/es/about",
    languages: { en: "/about", es: "/es/about", "x-default": "/about" },
  },
};

export default function AboutLayoutEs({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.osvaldorestrepo.dev/es/about#profile",
    url: "https://www.osvaldorestrepo.dev/es/about",
    name: "Sobre Osvaldo Restrepo",
    inLanguage: "es",
    mainEntity: { "@id": "https://www.osvaldorestrepo.dev/#person" },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      {children}
    </>
  );
}
