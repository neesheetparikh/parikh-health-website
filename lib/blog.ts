import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  featured: boolean;
  tags: string[];
  content: string;
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data, content } = matter(raw);
      // Derive slug from filename if not set in frontmatter
      const slug = (data.slug as string) ?? file.replace(/\.mdx$/, "");
      // Support both 'excerpt' and 'description' fields
      const excerpt = (data.excerpt as string) ?? (data.description as string) ?? "";
      // Support both 'readingTime' and 'readTime' fields
      const readingTime = (data.readingTime as string) ?? (data.readTime as string) ?? "5 min read";
      return {
        slug,
        title: data.title as string,
        excerpt,
        category: data.category as string,
        author: data.author as string,
        publishedAt: data.publishedAt as string,
        readingTime,
        featured: Boolean(data.featured),
        tags: (data.tags as string[]) ?? [],
        content,
      };
    })
    .filter((p) => p.title && p.publishedAt)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map((p) => p.category).filter(Boolean))];
}
