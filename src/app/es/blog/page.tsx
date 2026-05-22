import { getAllPosts } from "@/lib/blog";
import { BookOpen } from "lucide-react";
import BlogPostsList from "@/app/blog/BlogPostsList";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Osvaldo Restrepo",
  description:
    "Guías prácticas sobre ingeniería de IA, desde sistemas RAG en producción hasta agentes de voz. Lecciones reales de proyectos reales.",
  alternates: {
    canonical: "/es/blog",
    languages: {
      en: "/blog",
      es: "/es/blog",
    },
  },
};

export default function SpanishBlogPage() {
  const posts = getAllPosts("es");
  const englishPostCount = getAllPosts("en").length;

  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#FF6A3D]/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <section className="relative pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#FF6A3D] to-[#FF8A4C]">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium text-[#FF6A3D] dark:text-[#FF8A5B]">
                Escritura Técnica
              </span>
            </div>
            {/* Language switcher */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="text-base">🇺🇸</span>
              English
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Guías prácticas sobre ingeniería de IA, desde sistemas RAG en
            producción hasta agentes de voz. Lecciones reales de proyectos
            reales.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="relative px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {posts.length > 0 ? (
            <BlogPostsList posts={posts} locale="es" />
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Aún no hay publicaciones en español.
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                Hay {englishPostCount} publicaciones disponibles en inglés.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-[#FF6A3D] text-white hover:bg-[#FF7E54] transition-colors"
              >
                Ver blog en inglés
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
