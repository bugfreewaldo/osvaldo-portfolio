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
    "AI Engineer Panama",
    "AI Engineer Remote",
    "AI Developer",
    "Full Stack Developer",
    "LLM Engineer",
    "RAG Engineer",
    "Voice AI Engineer",
    "Machine Learning Engineer",
    "Python",
    "TypeScript",
    "Next.js",
    "LangChain",
    "OpenAI",
    "Claude AI",
    "Software Engineer",
    "Osvaldo Restrepo",
    "AI Consultant",
    "AI Developer Latin America",
    "AI Engineer USA",
    "AI Engineer Canada",
    "AI Engineer Europe",
    "AI Engineer UK",
    "AI Engineer Germany",
    "Ingeniero de IA Panamá",
    "AI Engineer Central America",
    "Production AI Systems",
    "Hire AI Engineer",
    "Freelance AI Engineer",
    "Remote AI Developer",
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
      description:
        "Senior AI engineer and PhD candidate based in Panama, serving clients globally — USA, Canada, UK, Germany, Europe, and Latin America. Builds production AI systems: LLMs, RAG pipelines, AI agents, and voice AI. 10+ years of software engineering, 20+ AI products shipped.",
      nationality: {
        "@type": "Country",
        name: "Panama",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Panama City",
        addressCountry: "PA",
      },
      knowsLanguage: ["en", "es"],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "PhD",
      },
      worksFor: {
        "@type": "Organization",
        name: "TheGreyMatter.ai",
        url: "https://thegreymatter.ai",
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
        "AI Agents",
        "Full Stack Development",
        "Python",
        "TypeScript",
        "Next.js",
        "LangChain",
        "AI Engineering in Panama",
        "Production AI Systems",
      ],
      sameAs: [
        "https://github.com/bugfreewaldo",
        "https://linkedin.com/in/osvaldorestrepo",
        "https://torre.ai/orestrepoalva",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM Full Context" />
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
