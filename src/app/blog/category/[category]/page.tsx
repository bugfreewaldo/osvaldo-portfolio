import { getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ category: string }>;
}

function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set<string>();
  posts.forEach((p) => {
    if (p.frontmatter.category) categories.add(p.frontmatter.category);
  });
  return Array.from(categories);
}

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const decoded = decodeURIComponent(category);

  return {
    title: `${decoded} Articles`,
    description: `Blog articles about ${decoded} by Osvaldo Restrepo — AI Engineer based in Panama.`,
    alternates: { canonical: `/blog/category/${category}` },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const allPosts = getAllPosts();
  const posts = allPosts.filter(
    (p) => p.frontmatter.category === decoded
  );

  if (posts.length === 0) notFound();

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          All Articles
        </Link>

        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-3">
            <Tag className="w-3.5 h-3.5" />
            Category
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {decoded}
          </h1>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-5 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all"
            >
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {post.frontmatter.title}
              </h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                {post.frontmatter.description}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {format(new Date(post.frontmatter.date), "MMM d, yyyy")}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTimeMinutes} min read
                </span>
                <span className="ml-auto flex items-center gap-1 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Other Categories */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
            Other Categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {getAllCategories()
              .filter((c) => c !== decoded)
              .sort()
              .map((cat) => {
                const count = allPosts.filter((p) => p.frontmatter.category === cat).length;
                return (
                  <Link
                    key={cat}
                    href={`/blog/category/${encodeURIComponent(cat)}`}
                    className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {cat} ({count})
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
