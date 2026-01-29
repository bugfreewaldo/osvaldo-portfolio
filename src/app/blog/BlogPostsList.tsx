"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PostCard from "@/components/blog/PostCard";
import CategoryFilter, {
  type SortOption,
} from "@/components/blog/CategoryFilter";
import type { Post } from "@/lib/blog";

const POSTS_PER_PAGE = 10;

interface BlogPostsListProps {
  posts: Post[];
  locale?: "en" | "es";
}

export default function BlogPostsList({
  posts,
  locale = "en",
}: BlogPostsListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories from posts
  const categories = useMemo(() => {
    const categorySet = new Set<string>();
    posts.forEach((post) => {
      if (post.frontmatter.category) {
        categorySet.add(post.frontmatter.category);
      }
    });
    return Array.from(categorySet).sort();
  }, [posts]);

  // Filter and sort posts
  const filteredAndSortedPosts = useMemo(() => {
    // First filter by category
    let result = selectedCategory
      ? posts.filter((post) => post.frontmatter.category === selectedCategory)
      : posts;

    // Then sort (keeping pinned posts at top)
    result = [...result].sort((a, b) => {
      // Pinned posts always come first
      if (a.frontmatter.pinned && !b.frontmatter.pinned) return -1;
      if (!a.frontmatter.pinned && b.frontmatter.pinned) return 1;

      // Then sort by selected criteria
      switch (sortBy) {
        case "recent":
          return (
            new Date(b.frontmatter.date).getTime() -
            new Date(a.frontmatter.date).getTime()
          );
        case "oldest":
          return (
            new Date(a.frontmatter.date).getTime() -
            new Date(b.frontmatter.date).getTime()
          );
        case "title":
          return a.frontmatter.title.localeCompare(b.frontmatter.title);
        default:
          return 0;
      }
    });

    return result;
  }, [posts, selectedCategory, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredAndSortedPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredAndSortedPosts, currentPage]);

  // Reset to page 1 when filters or sorting change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, sortBy]);

  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <p className="text-slate-500 dark:text-slate-400">
          {locale === "es"
            ? "Aún no hay publicaciones. ¡Vuelve pronto!"
            : "No posts yet. Check back soon!"}
        </p>
      </motion.div>
    );
  }

  return (
    <div>
      {categories.length > 0 && (
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          locale={locale}
        />
      )}

      {filteredAndSortedPosts.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <p className="text-slate-500 dark:text-slate-400">
            {locale === "es"
              ? "No hay publicaciones en esta categoría."
              : "No posts in this category."}
          </p>
        </motion.div>
      ) : (
        <>
          <div className="space-y-6">
            {paginatedPosts.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 mt-12"
            >
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg
                  bg-slate-100 dark:bg-slate-800
                  text-slate-700 dark:text-slate-300
                  hover:bg-slate-200 dark:hover:bg-slate-700
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors"
                aria-label={locale === "es" ? "Página anterior" : "Previous page"}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {locale === "es" ? "Anterior" : "Previous"}
                </span>
              </button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages adjacent to current
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    Math.abs(page - currentPage) <= 1;

                  // Show ellipsis
                  const showEllipsisBefore =
                    page === currentPage - 2 && currentPage > 3;
                  const showEllipsisAfter =
                    page === currentPage + 2 && currentPage < totalPages - 2;

                  if (showEllipsisBefore || showEllipsisAfter) {
                    return (
                      <span
                        key={`ellipsis-${page}`}
                        className="px-2 text-slate-400 dark:text-slate-500"
                      >
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 text-sm font-medium rounded-lg transition-colors
                        ${
                          currentPage === page
                            ? "bg-teal-500 text-white"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                        }`}
                      aria-label={
                        locale === "es" ? `Página ${page}` : `Page ${page}`
                      }
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg
                  bg-slate-100 dark:bg-slate-800
                  text-slate-700 dark:text-slate-300
                  hover:bg-slate-200 dark:hover:bg-slate-700
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-colors"
                aria-label={locale === "es" ? "Página siguiente" : "Next page"}
              >
                <span className="hidden sm:inline">
                  {locale === "es" ? "Siguiente" : "Next"}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* Post Count Info */}
          {totalPages > 1 && (
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
              {locale === "es"
                ? `Mostrando ${(currentPage - 1) * POSTS_PER_PAGE + 1}-${Math.min(
                    currentPage * POSTS_PER_PAGE,
                    filteredAndSortedPosts.length
                  )} de ${filteredAndSortedPosts.length} artículos`
                : `Showing ${(currentPage - 1) * POSTS_PER_PAGE + 1}-${Math.min(
                    currentPage * POSTS_PER_PAGE,
                    filteredAndSortedPosts.length
                  )} of ${filteredAndSortedPosts.length} articles`}
            </p>
          )}
        </>
      )}
    </div>
  );
}
