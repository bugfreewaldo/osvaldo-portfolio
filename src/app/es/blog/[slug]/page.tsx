import { getPostBySlug, getPostSlugs, getPostTranslation } from "@/lib/blog";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, Globe } from "lucide-react";
import PostContent from "@/components/blog/PostContent";
import TableOfContents from "@/components/blog/TableOfContents";
import FAQSection from "@/components/blog/FAQSection";
import AuthorCard from "@/components/blog/AuthorCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs("es").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "es");
  if (!post) return {};

  const ogImage = post.frontmatter.image || `/es/blog/${slug}/opengraph-image`;

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: [{ name: post.frontmatter.author }],
    keywords: post.frontmatter.tags,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updated || post.frontmatter.date,
      authors: [post.frontmatter.author || "Osvaldo Restrepo"],
      tags: post.frontmatter.tags,
      images: [ogImage],
      url: `/es/blog/${slug}`,
      locale: "es_ES",
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `/es/blog/${slug}`,
      languages: {
        es: `/es/blog/${slug}`,
        en: post.frontmatter.translationOf
          ? `/blog/${post.frontmatter.translationOf}`
          : undefined,
      },
    },
  };
}

export default async function SpanishBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "es");
  if (!post) notFound();

  // Check if English version exists
  const englishPost = getPostTranslation(slug, "es");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image:
      post.frontmatter.image ||
      `https://osvaldorestrepo.dev/es/blog/${slug}/opengraph-image`,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updated || post.frontmatter.date,
    author: {
      "@type": "Person",
      name: post.frontmatter.author,
      url: "https://osvaldorestrepo.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Osvaldo Restrepo",
      url: "https://osvaldorestrepo.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://osvaldorestrepo.dev/es/blog/${slug}`,
    },
    inLanguage: "es",
    keywords: post.frontmatter.tags?.join(", ") || "",
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTimeMinutes}M`,
  };

  const faqJsonLd =
    post.frontmatter.faqs && post.frontmatter.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.frontmatter.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="relative min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <article className="relative max-w-4xl mx-auto px-4 py-12">
          {/* Back link and language switcher */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/es/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>

            {englishPost && (
              <Link
                href={englishPost.url}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="text-base">🇺🇸</span>
                Read in English
              </Link>
            )}
          </div>

          {/* Header */}
          <header className="mb-8">
            {post.frontmatter.category && (
              <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full mb-4">
                {post.frontmatter.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {post.frontmatter.title}
            </h1>

            {/* TL;DR for AI/quick readers */}
            {post.frontmatter.tldr && (
              <div className="mt-6 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800">
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                  Resumen
                </p>
                <p className="text-slate-700 dark:text-slate-300">
                  {post.frontmatter.tldr}
                </p>
              </div>
            )}

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {format(new Date(post.frontmatter.date), "d 'de' MMMM, yyyy", {
                  locale: es,
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTimeMinutes} min de lectura
              </span>
            </div>

            {/* Tags */}
            {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Two-column layout for larger screens */}
          <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-8">
            {/* Main content */}
            <div className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-indigo-600 dark:prose-a:text-indigo-400 max-w-none">
              <PostContent source={post.content} />
            </div>

            {/* Table of Contents - sticky sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <TableOfContents />
              </div>
            </aside>
          </div>

          {/* FAQ Section */}
          {post.frontmatter.faqs && post.frontmatter.faqs.length > 0 && (
            <FAQSection faqs={post.frontmatter.faqs} />
          )}

          {/* Author Card */}
          <AuthorCard />
        </article>
      </main>
    </>
  );
}
