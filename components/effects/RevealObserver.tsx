"use client";

import { useEffect } from "react";

/**
 * Fades/slides in every [data-reveal] element within the Concierge page as
 * it scrolls into view, then stops observing it. Mirrors the original
 * design's IntersectionObserver script, adapted into a client component
 * since server components can't touch the DOM directly.
 */
export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
