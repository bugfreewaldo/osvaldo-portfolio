import type { Metadata } from "next";
import { PROJECT_META } from "@/lib/projectMeta";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = PROJECT_META[slug]?.en;
  const path = `/projects/${slug}`;
  const title = meta ? `${meta.title} — ${meta.subtitle}` : slug;
  return {
    title,
    description: meta?.subtitle,
    openGraph: { title, url: path },
    alternates: {
      canonical: path,
      languages: {
        en: `/projects/${slug}`,
        es: `/es/projects/${slug}`,
        "x-default": `/projects/${slug}`,
      },
    },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
