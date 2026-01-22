"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar, Clock, ArrowRight, Pin } from "lucide-react";
import type { Post } from "@/lib/blog";

interface PostCardProps {
  post: Post;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
    >
      <Link href={post.url} className="group block">
        <div className={`relative p-6 rounded-2xl bg-white dark:bg-slate-900/50 border transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 ${
            post.frontmatter.pinned
              ? "border-indigo-400 dark:border-indigo-600 ring-1 ring-indigo-400/20"
              : "border-slate-200 dark:border-slate-800 hover:border-indigo-500/50"
          }`}>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              {post.frontmatter.pinned && (
                <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-indigo-500 text-white rounded">
                  <Pin className="w-3 h-3" />
                  Pinned
                </span>
              )}
              {post.frontmatter.category && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded">
                  {post.frontmatter.category}
                </span>
              )}
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {post.frontmatter.title}
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400 line-clamp-2">
            {post.frontmatter.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.frontmatter.date), "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTimeMinutes} min read
            </span>
          </div>

          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.frontmatter.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 flex items-center gap-1 text-sm text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
            Read article
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
