"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import styles from "@/app/faq/faq.module.css";

export interface FaqItem {
  q: string;
  a: React.ReactNode;
  keywords?: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

function normalize(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(normalize).join(" ");
  if (
    node &&
    typeof node === "object" &&
    "props" in (node as { props?: { children?: React.ReactNode } })
  ) {
    return normalize((node as { props: { children?: React.ReactNode } }).props.children);
  }
  return "";
}

export default function FaqInteractive({ categories }: { categories: FaqCategory[] }) {
  const [term, setTerm] = useState("");
  const [openKeys, setOpenKeys] = useState<Set<string>>(new Set());
  const [activeCat, setActiveCat] = useState(categories[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const normalizedTerm = term.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!normalizedTerm) return categories;
    return categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          const haystack = `${item.q} ${item.keywords ?? ""} ${normalize(item.a)}`.toLowerCase();
          return haystack.includes(normalizedTerm);
        }),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [categories, normalizedTerm]);

  const totalVisible = filtered.reduce((sum, cat) => sum + cat.items.length, 0);

  useEffect(() => {
    if (!normalizedTerm) {
      setOpenKeys(new Set());
      return;
    }
    const next = new Set<string>();
    filtered.forEach((cat) => {
      cat.items.forEach((item) => next.add(`${cat.id}::${item.q}`));
    });
    setOpenKeys(next);
  }, [normalizedTerm, filtered]);

  useEffect(() => {
    const sections = Object.values(sectionRefs.current).filter(Boolean) as HTMLDivElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCat(entry.target.id);
          }
        });
      },
      { rootMargin: "-160px 0px -70% 0px" }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [filtered.length]);

  function toggle(key: string) {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <>
      <div className={styles["search-shell"]}>
        <div className={styles["search-box"]}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search questions — e.g. insurance, PT, concierge..."
            aria-label="Search FAQ"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          {term && (
            <button type="button" className={`${styles["search-clear"]} ${styles.show}`} onClick={() => setTerm("")}>
              Clear
            </button>
          )}
        </div>
        <div className={styles["search-count"]} aria-live="polite">
          {normalizedTerm
            ? `${totalVisible} matching ${totalVisible === 1 ? "question" : "questions"}`
            : ""}
        </div>
      </div>

      <div className={styles["catnav-shell"]}>
        <div className={styles.wrap}>
          <div className={styles.catnav}>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={activeCat === cat.id ? styles.active : ""}
                onClick={() => setActiveCat(cat.id)}
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {normalizedTerm && totalVisible === 0 && (
        <div className={styles.wrap}>
          <div className={`${styles["no-results"]} ${styles.show}`}>
            <h3>No matches for your search</h3>
            <p>
              Try a different term, or{" "}
              <Link href="/contact" style={{ color: "var(--teal)", fontWeight: 600 }}>
                reach out to our office
              </Link>{" "}
              directly.
            </p>
          </div>
        </div>
      )}

      <div className={styles.wrap}>
        {(normalizedTerm ? filtered : categories).map((cat) => (
          <div
            key={cat.id}
            id={cat.id}
            className={styles["cat-section"]}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
          >
            <div className={`${styles["cat-head"]} ${styles.reveal}`} data-reveal>
              <h2>{cat.label}</h2>
              <span className={styles["cat-count"]}>
                {cat.items.length} {cat.items.length === 1 ? "question" : "questions"}
              </span>
            </div>
            <div className={styles["faq-list"]}>
              {cat.items.map((item) => {
                const key = `${cat.id}::${item.q}`;
                const isOpen = openKeys.has(key);
                return (
                  <div key={key} className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}>
                    <button type="button" className={styles.faqSummary} onClick={() => toggle(key)}>
                      <span>{item.q}</span>
                      <span className={styles["faq-plus"]} />
                    </button>
                    {isOpen && <div className={styles["faq-answer"]}>{item.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
