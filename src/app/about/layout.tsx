import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Osvaldo Restrepo — CTO & AI Engineer with 10+ years of experience building production AI systems, voice agents, and enterprise platforms. PhD research in AI at the Technological University of Panama and a Master's in AI at Tecnológico de Monterrey. Currently available for senior AI engineering roles and consulting.",
  openGraph: {
    title: "About Osvaldo Restrepo",
    description:
      "CTO & AI Engineer building production AI systems, voice agents, and enterprise platforms.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profileJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://www.osvaldorestrepo.dev/about#profile",
    url: "https://www.osvaldorestrepo.dev/about",
    name: "About Osvaldo Restrepo",
    inLanguage: "en",
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
