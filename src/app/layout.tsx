import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"), // change to https://your-domain.com after deploy
  title: {
    default: "Osvaldo Restrepo — AI Engineer",
    template: "%s — Osvaldo Restrepo",
  },
  description:
    "Portfolio of Osvaldo (Waldo) Restrepo — Full-Stack & Applied AI Engineer. Projects in LLMs, RAG, agents, voice, automation.",
  openGraph: {
    title: "Osvaldo Restrepo — AI Engineer",
    description:
      "Projects and case studies in LLMs, RAG, agents, voice, and automation.",
    url: "/",
    siteName: "Osvaldo Restrepo",
    images: ["/og.png"], // add this file in /public (see note below)
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osvaldo Restrepo — AI Engineer",
    description:
      "Projects and case studies in LLMs, RAG, agents, voice, and automation.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-6">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <a
              href="/Osvaldo_Restrepo_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700"
            >
              Download CV
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
