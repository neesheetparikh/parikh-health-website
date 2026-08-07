import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, SERVICES, TEAM, TESTIMONIALS } from "@/content/site";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "ParikhHealth | Primary Care & Sports Medicine — Sunnyvale, CA",
  description:
    "ParikhHealth in Sunnyvale, CA offers exceptional primary care, sports medicine, physical therapy, and concierge medicine. Accepting new patients — book online today.",
};

// JSON-LD structured data for Google
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "LocalBusiness"],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone.appointments,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.373,
      longitude: -122.002,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.score,
      reviewCount: SITE.rating.count,
    },
    hasMap: SITE.address.mapsUrl,
    medicalSpecialty: ["FamilyMedicine", "SportsMedicine", "PhysicalTherapy"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const svc = (id: string) => SERVICES.find((s) => s.id === id)!;
const person = (id: string) => TEAM.find((m) => m.id === id)!;

const CARE_TEAM = [
  "neesheet-parikh",
  "kinnari-shah",
  "robert-oh",
  "mansi-parikh",
  "miral-patel",
  "sonia-sharma",
  "harshit-bhatwala",
  "vaishali-parab",
].map((id) => person(id));

export default function HomePage() {
  const posts = getAllPosts();
  const article = (slug: string) => posts.find((p) => p.slug === slug)!;
  const featuredArticles = [
    article("diabetes-prevention"),
    article("physical-therapy-vs-rest"),
    article("youth-athlete-guide"),
  ];
  const testimonials = TESTIMONIALS.slice(0, 3);

  return (
    <div className={styles.home}>
      <JsonLd />
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <div className={styles["rating-pill"]}>
                <span className={styles.stars}>★★★★★</span> {SITE.rating.score} · {SITE.rating.count} patient reviews · Sunnyvale, CA
              </div>
              <h1>Your Health. <em>Performed</em> at Its Best.</h1>
              <p className={styles.lead}>
                Exceptional primary care and sports medicine — from weekend
                warriors to elite athletes, and every family in between.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                  Book an Appointment
                </Link>
                <Link href="/services/concierge-medicine" className={`${styles.btn} ${styles["btn-brass"]}`}>
                  Explore Concierge Care →
                </Link>
              </div>
              <div className={styles["hero-meta"]}>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Sunnyvale, CA
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                  Mon–Fri, 9 AM–4 PM
                </span>
                <span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" /></svg>
                  {SITE.phone.appointments}
                </span>
              </div>
            </div>
            <div className={`${styles.reveal} ${styles["card-frame"]}`} data-reveal>
              <div className={styles["snap-card"]}>
                <div className={styles["snap-top"]}>
                  <div className={styles.monogram}>PH</div>
                  <div>
                    <div className={styles["snap-name"]}>ParikhHealth</div>
                    <div className={styles["snap-role"]}>Sunnyvale, CA</div>
                  </div>
                </div>
                <div className={styles["snap-stats"]}>
                  <div className={styles["snap-stat"]}><span>Years in practice</span><span>15+</span></div>
                  <div className={styles["snap-stat"]}><span>5-star reviews</span><span>{SITE.rating.count}+</span></div>
                  <div className={styles["snap-stat"]}><span>Specialty services</span><span>{SERVICES.length}</span></div>
                  <div className={styles["snap-stat"]}><span>Physicians &amp; PA</span><span>3</span></div>
                </div>
                <div className={styles["snap-foot"]}>Rated {SITE.rating.score} / 5 on {SITE.rating.source}.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* FEATURED PROGRAMS */}
      <section style={{ paddingTop: "56px", paddingBottom: "56px" }}>
        <div className={styles.wrap}>
          <div className={`${styles["ribbon-row"]} ${styles.reveal}`} data-reveal>
            <div className={`${styles["ribbon-card"]} ${styles.brass}`}>
              <span className={`${styles.eyebrow} ${styles.brass}`}>⚡ Featured Program</span>
              <h3>PitchFit</h3>
              <p>Elite cricket athlete care led by Dr. Parikh, Head Team Physician for USA Cricket — direct access, same-day visits, injury prevention &amp; recovery.</p>
              <Link className={styles.link} href="/services/athlete-wellness">Learn more →</Link>
            </div>
            <div className={styles["ribbon-card"]}>
              <span className={styles.eyebrow}>★ Premium</span>
              <h3>Concierge Medicine</h3>
              <p>Unhurried visits, same-day availability, and a physician who truly knows every detail of your health history.</p>
              <Link className={styles.link} href="/services/concierge-medicine">Learn more →</Link>
            </div>
            <div className={`${styles["ribbon-card"]} ${styles.navy}`}>
              <span className={styles.eyebrow} style={{ color: "var(--navy-deep)" }}>
                <span style={{ width: "18px", height: "1px", background: "var(--navy-deep)", display: "inline-block" }} />
                Comprehensive Care
              </span>
              <h3>Primary Care</h3>
              <p>Your long-term health partner for preventive screenings, chronic conditions, acute illness, and everything in between.</p>
              <Link className={styles.link} href="/services/primary-care">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section style={{ paddingTop: 0, paddingBottom: "56px" }}>
        <div className={styles.wrap}>
          <div className={`${styles["stat-strip"]} ${styles.reveal}`} data-reveal>
            <div className={styles["stat-item"]}><div className={styles["stat-num"]}>15+</div><div className={styles["stat-label"]}>Years in Practice</div></div>
            <div className={styles["stat-item"]}><div className={styles["stat-num"]}>{SITE.rating.count}+</div><div className={styles["stat-label"]}>5-Star Reviews</div></div>
            <div className={styles["stat-item"]}><div className={styles["stat-num"]}>{SERVICES.length}</div><div className={styles["stat-label"]}>Specialty Services</div></div>
            <div className={styles["stat-item"]}><div className={styles["stat-num"]}>{CARE_TEAM.length}</div><div className={styles["stat-label"]}>Expert Providers</div></div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className={styles.alt} id="services">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>What We Offer</span>
            <h2>Comprehensive Care Under One Roof</h2>
            <p>From annual physicals to sports rehabilitation, we bring a full spectrum of medical expertise to our Sunnyvale practice.</p>
          </div>
          <div className={styles.grid}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3>Primary Care</h3>
              <p>{svc("primary-care").shortDesc}</p>
              <Link className={styles.link} href="/services/primary-care">Learn more →</Link>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" /></svg>
              </div>
              <h3>Sports Medicine</h3>
              <p>{svc("sports-medicine").shortDesc}</p>
              <Link className={styles.link} href="/services/sports-medicine">Learn more →</Link>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 016-6c2.6-2.6 6.5-2 8.5 0s2.6 5.9 0 8.5a22 22 0 01-6 6l-3-3" /></svg>
              </div>
              <h3>Physical Therapy</h3>
              <p>{svc("physical-therapy").shortDesc}</p>
              <Link className={styles.link} href="/services/physical-therapy">Learn more →</Link>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={`${styles.icon} ${styles.rose}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /></svg>
              </div>
              <h3>Aesthetic Services</h3>
              <p>{svc("cosmetics").shortDesc}</p>
              <Link className={styles.link} style={{ color: "var(--rose)" }} href="/services/cosmetics">Learn more →</Link>
            </div>
          </div>
          <div className={`${styles["section-foot"]} ${styles.reveal}`} data-reveal>
            <Link href="/services" className={`${styles.btn} ${styles["btn-ghost"]}`}>View All Services</Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section>
        <div className={styles.wrap}>
          <div className={styles["about-grid"]}>
            <div className={styles.reveal} data-reveal>
              <span className={`${styles.eyebrow} ${styles.rose}`}>Our Philosophy</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>Medicine That Sees the Whole Person</h2>
            </div>
            <div className={styles.reveal} data-reveal>
              <p>We believe the best medical care is built on relationship, not transactions. Every patient deserves time, attention, and a provider who knows their history — not just their last visit.</p>
              <ul className={styles["credential-list"]}>
                <li>Board-certified physicians with subspecialty training</li>
                <li>In-house physical therapy, fully coordinated with your medical team</li>
                <li>Integrated team approach — your providers talk to each other</li>
                <li>Same-day sick visits available</li>
                <li>Concierge membership option for maximum access</li>
              </ul>
              <Link href="/about" className={`${styles.btn} ${styles["btn-ghost"]}`}>About Our Practice</Link>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* TEAM */}
      <section className={styles.alt} id="team">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Our Team</span>
            <h2>Providers Who Actually Talk to Each Other</h2>
            <p>Physicians, physician assistants, physical therapists, and integrative &amp; Ayurvedic medicine practitioners — one connected team.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            {CARE_TEAM.map((p) => (
              <Link key={p.id} className={styles["provider-card"]} href={`/providers/${p.id}`}>
                <div className={styles["provider-photo"]}>
                  {p.image ? (
                    <Image src={p.image} alt={`${p.name}, ${p.credentials}`} width={280} height={280} />
                  ) : null}
                </div>
                <div className={styles["provider-body"]}>
                  <div className={styles["provider-name"]}>{p.name}, {p.credentials}</div>
                  <div className={styles["provider-role"]}>{p.title}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className={`${styles["section-foot"]} ${styles.reveal}`} data-reveal>
            <Link href="/providers" className={`${styles.btn} ${styles["btn-ghost"]}`}>Meet the Full Team</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.centered} ${styles.reveal}`} data-reveal>
            <span className={`${styles.eyebrow} ${styles.rose} ${styles.centered}`}>Patient Stories</span>
            <h2>What Our Patients Say</h2>
          </div>
          <div className={`${styles.grid} ${styles["grid-3"]} ${styles.reveal}`} data-reveal>
            {testimonials.map((t) => (
              <div key={t.author} className={styles["testi-card"]}>
                <div className={styles["testi-quote-mark"]}>&ldquo;</div>
                <p>{t.quote}</p>
                <div className={styles["testi-name"]}>{t.author}</div>
                <div className={styles["testi-tag"]}>{t.detail}</div>
              </div>
            ))}
          </div>
          <div className={`${styles["review-line"]} ${styles.reveal}`} data-reveal>
            <span className={styles.stars}>★★★★★</span>{SITE.rating.score} average rating · {SITE.rating.count} verified reviews on {SITE.rating.source}
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* EDUCATION */}
      <section className={styles.alt} id="education">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Health Education</span>
            <h2>From Our Providers</h2>
          </div>
          <div className={`${styles.grid} ${styles["grid-3"]} ${styles.reveal}`} data-reveal>
            {featuredArticles.map((post) => (
              <Link key={post.slug} className={styles["article-card"]} href={`/education/${post.slug}`}>
                <span className={styles["article-cat"]}>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles["article-meta"]}>{post.author} · {formatDate(post.publishedAt)} · {post.readingTime}</div>
              </Link>
            ))}
          </div>
          <div className={`${styles["section-foot"]} ${styles.reveal}`} data-reveal>
            <Link href="/education" className={`${styles.btn} ${styles["btn-ghost"]}`}>View All Articles</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.final}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Ready to Experience Exceptional Care?</h2>
            <p>New and existing patients welcome. Appointments available Monday through Friday.</p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book Appointment</Link>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call {SITE.phone.appointments}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
