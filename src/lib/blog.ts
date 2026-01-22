import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  updated?: string;
  published?: boolean;
  pinned?: boolean;
  image?: string;
  tags?: string[];
  category?: string;
  author?: string;
  tldr?: string;
  faqs?: { question: string; answer: string }[];
  relatedPosts?: string[];
}

export interface Post {
  slug: string;
  url: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingTimeMinutes: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter = data as PostFrontmatter;

  // Default published to true if not specified
  if (frontmatter.published === undefined) {
    frontmatter.published = true;
  }

  // Default author
  if (!frontmatter.author) {
    frontmatter.author = "Osvaldo Restrepo";
  }

  // Default tags to empty array
  if (!frontmatter.tags) {
    frontmatter.tags = [];
  }

  // Default faqs to empty array
  if (!frontmatter.faqs) {
    frontmatter.faqs = [];
  }

  return {
    slug,
    url: `/blog/${slug}`,
    frontmatter,
    content,
    readingTimeMinutes: calculateReadingTime(content),
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && post.frontmatter.published !== false)
    .sort((a, b) => {
      // Pinned posts always come first
      if (a.frontmatter.pinned && !b.frontmatter.pinned) return -1;
      if (!a.frontmatter.pinned && b.frontmatter.pinned) return 1;

      // Then sort by date
      const dateA = new Date(a.frontmatter.date);
      const dateB = new Date(b.frontmatter.date);
      return dateB.getTime() - dateA.getTime();
    });

  return posts;
}
