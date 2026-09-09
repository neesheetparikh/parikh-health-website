import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import EducationArticleGrid from "@/components/education/EducationArticleGrid";
import styles from "./education.module.css";

export const metadata: Metadata = {
  title: "Health Education & Blog",
  description:
    "Evidence-based health education, wellness tips, and practice news from the providers at ParikhHealth in Sunnyvale, CA — primary care, sports medicine, and physical therapy.",
  alternates: { canonical: `${SITE.url}/education` },
};

const TAG_CLASS: Record<string, string> = {
  "Primary Care": "tag-primary",
  "Physical Therapy": "tag-pt",
  "Sports Medicine": "tag-sports",
  "Health Education": "tag-health",
  "Practice News": "tag-news",
};

export default function EducationPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className={styles.education}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Health Education</span>
          <h1>From Our Providers</h1>
          <p className={styles.lead}>
            Evidence-based health education, wellness tips, and practice news — written by the
            physicians and therapists who actually treat you, not a content mill. No filler, no
            clickbait. Just what we&apos;d tell you in the room.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {featured.length > 0 && (
        <section style={{ paddingTop: "12px" }}>
          <div className={styles.wrap}>
            <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Featured</div>
            <div className={styles["featured-grid"]}>
              {featured.map((post) => (
                <Link key={post.slug} href={`/education/${post.slug}`} className={`${styles["featured-card"]} ${styles.reveal}`} data-reveal>
                  <span className={`${styles.tag} ${styles[TAG_CLASS[post.category] ?? "tag-health"]}`}>{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className={styles.byline}>
                    <strong>{post.author}</strong>
                    <span className={styles.dot} />
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className={styles.dot} />
                    <span>{post.readingTime} read</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL ARTICLES */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>All Articles</div>
          <EducationArticleGrid posts={rest.length > 0 ? rest : posts} />
        </div>
      </section>

      {/* EXPERTISE / AUTHOR */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["expert-callout"]} ${styles.reveal}`} data-reveal>
            <div className={styles["expert-monogram"]}>NP</div>
            <div>
              <span className={styles.eyebrow}>Who&apos;s Writing This</span>
              <h2>Written by the physician who&apos;s actually in the room with you.</h2>
              <p className={styles.lede}>
                Dr. Neesheet Parikh, DO founded ParikhHealth as an independent practice, and every
                article on this page comes out of a real exam room — the questions patients actually
                ask, answered the way he&apos;d answer them in person.
              </p>
              <ul className={styles["expert-creds"]}>
                <li><strong>Primary Care &amp; Family Medicine</strong>Board-trained in whole-person, evidence-based primary care for every stage of life.</li>
                <li><strong>Sports Medicine</strong>Diagnosing and treating everything from overuse injuries to concussion, for weekend athletes and competitive ones alike.</li>
                <li><strong>Team Physician, USA Cricket</strong>Trusted with the health of athletes at the national level — on the same clinical judgment his patients get.</li>
                <li><strong>Founder, Independent Private Practice</strong>Built ParikhHealth outside a hospital system, so care decisions stay between physician and patient.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* FINAL CTA */}
      <section className={styles.final}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Have A Question We Haven&apos;t Answered?</span>
            <h2>Bring it to your next visit — or ask us directly.</h2>
            <p>These articles are a starting point, not a substitute for an actual exam. If something here raises a question about your own health, we&apos;d rather hear it in person.</p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book an Appointment</Link>
              <Link href="/contact" className={`${styles.btn} ${styles["btn-ghost"]}`}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
