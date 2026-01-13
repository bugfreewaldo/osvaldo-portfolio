import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://osvaldorestrepo.dev"),
  title: {
    default: "Osvaldo Restrepo — Senior Full Stack AI & Software Engineer",
    template: "%s — Osvaldo Restrepo",
  },
  description:
    "Portfolio of Osvaldo (Waldo) Restrepo — Senior Full Stack AI & Software Engineer specializing in LLMs, RAG systems, voice AI agents, and production ML. Building intelligent systems that solve real problems.",
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "LLM",
    "RAG",
    "Voice AI",
    "Machine Learning",
    "Python",
    "TypeScript",
    "Next.js",
    "LangChain",
    "OpenAI",
    "Software Engineer",
    "Osvaldo Restrepo",
    "AI Consultant",
  ],
  authors: [{ name: "Osvaldo Restrepo", url: "https://osvaldorestrepo.dev" }],
  creator: "Osvaldo Restrepo",
  publisher: "Osvaldo Restrepo",
  openGraph: {
    title: "Osvaldo Restrepo — Senior Full Stack AI & Software Engineer",
    description:
      "Building production AI systems: LLMs, RAG, voice agents, and intelligent automation. Real projects with measurable impact.",
    url: "/",
    siteName: "Osvaldo Restrepo",
    images: ["/og.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osvaldo Restrepo — AI Engineer",
    description:
      "Building production AI systems: LLMs, RAG, voice agents, and intelligent automation.",
    images: ["/og.png"],
    creator: "@waldocode",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: "/" },
  verification: {
    // Add your verification codes when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://osvaldorestrepo.dev/#website",
      url: "https://osvaldorestrepo.dev",
      name: "Osvaldo Restrepo",
      description: "Portfolio and projects of Osvaldo Restrepo, Senior Full Stack AI & Software Engineer",
      publisher: {
        "@id": "https://osvaldorestrepo.dev/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://osvaldorestrepo.dev/#person",
      name: "Osvaldo Restrepo",
      alternateName: "Waldo",
      url: "https://osvaldorestrepo.dev",
      image: "https://osvaldorestrepo.dev/og.png",
      jobTitle: "Senior Full Stack AI & Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "9Vectors",
        url: "https://9vectors.ai",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Harvard University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Universidad Tecnológica de Panamá",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Tecnológico de Monterrey",
        },
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Large Language Models",
        "RAG Systems",
        "Voice AI",
        "Full Stack Development",
        "Python",
        "TypeScript",
        "Next.js",
        "LangChain",
      ],
      sameAs: [
        "https://github.com/bugfreewaldo",
        "https://linkedin.com/in/osvaldorestrepo",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={
          inter.className +
          " bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
        }
      >
        <Header />

        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
