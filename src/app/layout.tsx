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
    images: ["/og.png"],
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
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
