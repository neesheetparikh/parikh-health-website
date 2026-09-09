"use client";

import { useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import styles from "@/app/education/education.module.css";

const CATEGORY_FILTERS: { label: string; value: string; category: string }[] = [
  { label: "Primary Care", value: "primary", category: "Primary Care" },
  { label: "Physical Therapy", value: "pt", category: "Physical Therapy" },
  { label: "Sports Medicine", value: "sports", category: "Sports Medicine" },
  { label: "Health Education", value: "health", category: "Health Education" },
  { label: "Practice News", value: "news", category: "Practice News" },
];

const TAG_CLASS: Record<string, string> = {
  "Primary Care": "tag-primary",
  "Physical Therapy": "tag-pt",
  "Sports Medicine": "tag-sports",
  "Health Education": "tag-health",
  "Practice News": "tag-news",
};

export default function EducationArticleGrid({ posts }: { posts: BlogPost[] }) {
  const [filter, setFilter] = useState("all");

  const categoriesPresent = new Set(posts.map((p) => p.category));
  const filters = CATEGORY_FILTERS.filter((f) => categoriesPresent.has(f.category));

  return (
    <>
      <div className={styles.pills}>
        <span
          className={`${styles.pill} ${filter === "all" ? styles.active : ""}`}
          onClick={() => setFilter("all")}
        >
          All Topics
        </span>
        {filters.map((f) => (
          <span
            key={f.value}
            className={`${styles.pill} ${filter === f.value ? styles.active : ""}`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </span>
        ))}
      </div>

      <div className={styles["article-grid"]}>
        {posts.map((post) => {
          const filterEntry = CATEGORY_FILTERS.find((f) => f.category === post.category);
          const hidden = filter !== "all" && filterEntry?.value !== filter;
          const tagClass = TAG_CLASS[post.category] ?? "tag-health";
          return (
            <Link
              key={post.slug}
              href={`/education/${post.slug}`}
              className={`${styles["article-card"]} ${hidden ? styles["article-hidden"] : ""}`}
            >
              <span className={`${styles.tag} ${styles[tagClass]}`}>{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className={styles["article-meta"]}>
                <span>{formatDate(post.publishedAt)}</span>
                <span className={styles.dot} />
                <span>{post.readingTime}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
