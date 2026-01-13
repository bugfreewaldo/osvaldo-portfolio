import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Osvaldo Restrepo — Senior Full Stack AI & Software Engineer with 10+ years of experience building production AI systems, voice agents, and enterprise platforms. Currently at 9Vectors, with degrees from Harvard, UTP, and Tecnológico de Monterrey.",
  openGraph: {
    title: "About Osvaldo Restrepo",
    description:
      "Senior Full Stack AI & Software Engineer building production AI systems, voice agents, and enterprise platforms.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
