"use client";

import { motion } from "framer-motion";
import PostCard from "@/components/blog/PostCard";
import type { Post } from "@/lib/blog";

interface BlogPostsListProps {
  posts: Post[];
}

export default function BlogPostsList({ posts }: BlogPostsListProps) {
  if (posts.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <p className="text-slate-500 dark:text-slate-400">
          No posts yet. Check back soon!
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post, i) => (
        <PostCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}
