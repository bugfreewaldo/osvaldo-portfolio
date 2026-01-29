import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Locale = "en" | "es";

const postsDirectory = path.join(process.cwd(), "content/posts");

function getPostsDirectory(locale: Locale = "en"): string {
  if (locale === "es") {
    return path.join(postsDirectory, "es");
  }
  return postsDirectory;
}

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
  // Internationalization
  translationOf?: string; // slug of the original post this is a translation of
}

export interface Post {
  slug: string;
  url: string;
  locale: Locale;
  frontmatter: PostFrontmatter;
  content: string;
  readingTimeMinutes: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export function getPostSlugs(locale: Locale = "en"): string[] {
  const dir = getPostsDirectory(locale);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string, locale: Locale = "en"): Post | null {
  const dir = getPostsDirectory(locale);
  const fullPath = path.join(dir, `${slug}.mdx`);

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

  const urlPrefix = locale === "es" ? "/es/blog" : "/blog";

  return {
    slug,
    url: `${urlPrefix}/${slug}`,
    locale,
    frontmatter,
    content,
    readingTimeMinutes: calculateReadingTime(content),
  };
}

export function getAllPosts(locale: Locale = "en"): Post[] {
  const slugs = getPostSlugs(locale);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
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

// Helper to find translation of a post
export function getPostTranslation(slug: string, fromLocale: Locale): Post | null {
  const targetLocale = fromLocale === "en" ? "es" : "en";

  // Try to find a post with the same slug in the other locale
  const sameSlugPost = getPostBySlug(slug, targetLocale);
  if (sameSlugPost) {
    return sameSlugPost;
  }

  // For Spanish posts looking for English, check translationOf field
  if (fromLocale === "es") {
    const currentPost = getPostBySlug(slug, "es");
    if (currentPost?.frontmatter.translationOf) {
      return getPostBySlug(currentPost.frontmatter.translationOf, "en");
    }
  }

  return null;
}
