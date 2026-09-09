import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TEAM, SUPPORT_STAFF, SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./providers.module.css";

export const metadata: Metadata = {
  title: "Our Team | ParikhHealth",
  description:
    "Meet the full ParikhHealth team — physicians, physician assistants, physical therapists, integrative & Ayurvedic medicine practitioners, and support staff dedicated to exceptional care in Sunnyvale, CA.",
  alternates: { canonical: `${SITE.url}/providers` },
};

const CLINICAL_PROVIDERS = TEAM.filter((m) => ["DO", "MD", "PA-C"].includes(m.credentials));
const INTEGRATIVE_TEAM = TEAM.filter((m) => m.specialties.includes("Ayurvedic Medicine"));
const PT_TEAM = TEAM.filter((m) => ["PT", "PTA"].includes(m.credentials));

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ProvidersPage() {
  return (
    <div className={styles.providers}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>Meet Our Team</span>
              <h1>Every discipline your care actually needs, under one roof.</h1>
              <p className={styles.lead}>
                Physicians, physician assistants, physical therapists, and integrative &amp; Ayurvedic
                medicine practitioners — working from the same chart, coordinating the same plan, backed
                by a support team that keeps every visit running smoothly.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book an Appointment</Link>
                <a href="#clinical" className={`${styles.btn} ${styles["btn-ghost"]}`}>See the Full Team</a>
              </div>
            </div>
            <div className={`${styles.reveal} ${styles["card-frame"]}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>PH</div>
                  <div>
                    <div className={styles["roster-name"]}>ParikhHealth</div>
                    <div className={styles["roster-role"]}>Independent Multi-Specialty Practice</div>
                  </div>
                </div>
                <div className={styles.badge}>Affiliated with El Camino Health</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}><span>Care disciplines, one roof</span><span>5</span></div>
                  <div className={styles["roster-stat"]}><span>Clinical providers</span><span>{TEAM.length}</span></div>
                  <div className={styles["roster-stat"]}><span>Care &amp; support staff</span><span>{SUPPORT_STAFF.length}</span></div>
                  <div className={styles["roster-stat"]}><span>New patients</span><span>Accepted</span></div>
                </div>
                <div className={styles["roster-foot"]}>Ask us about our USA Cricket team physician partnership.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* WHY ONE TEAM */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Why It Works This Way</span>
            <h2>One team, one chart, one plan.</h2>
            <p>
              Every provider on this page works from the same record and the same coordinated plan for
              you — so a question that starts with your primary care physician and ends with a physical
              therapist doesn&apos;t require you to repeat your history, fax a referral, or start over
              with someone new. That&apos;s the entire point of building a practice this way: not more
              specialists, but specialists who actually talk to each other.
            </p>
          </div>
        </div>
      </section>

      {/* CLINICAL PROVIDERS */}
      <section className={styles.alt} id="clinical">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Physicians &amp; Physician Assistants</span>
            <h2>Clinical Providers</h2>
            <p>Board-certified physicians and a certified physician assistant delivering family medicine, sports medicine, and primary care under one roof.</p>
          </div>
          <div className={`${styles["team-grid"]} ${styles.reveal}`} data-reveal>
            {CLINICAL_PROVIDERS.map((m) => (
              <div key={m.id} className={styles["provider-card"]}>
                {m.image ? (
                  <Image className={styles["provider-photo"]} src={m.image} alt={`${m.name}, ${m.credentials}`} width={400} height={500} />
                ) : (
                  <div className={styles["provider-photo-placeholder"]}>{initials(m.name)}</div>
                )}
                <div className={styles["provider-body"]}>
                  <div className={styles["provider-role"]}>{m.title}</div>
                  <div className={styles["provider-name"]}>{m.name}, {m.credentials}</div>
                  {m.id === "neesheet-parikh" && (
                    <div className={styles["provider-credential"]}>Team Physician · USA Cricket</div>
                  )}
                  <p className={styles["provider-bio"]}>{m.bio}</p>
                  <div className={styles["provider-tags"]}>
                    {m.specialties.map((s) => (
                      <span key={s} className={styles.chip}>{s}</span>
                    ))}
                  </div>
                  {m.acceptingNewPatients && (
                    <div className={styles["provider-status"]}>Accepting New Patients</div>
                  )}
                  <div className={styles["provider-actions"]}>
                    <a
                      href={m.bookingUrl ?? SITE.booking.zocdocUrl}
                      className={`${styles.btn} ${styles["btn-primary"]} ${styles["btn-sm"]}`}
                      target={m.bookingUrl?.startsWith("mailto:") ? undefined : "_blank"}
                      rel={m.bookingUrl?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    >
                      Book with {m.name.split(" ")[0]}
                    </a>
                    <Link href={`/providers/${m.id}`} className={`${styles.btn} ${styles["btn-ghost"]} ${styles["btn-sm"]}`}>View Profile</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIVE & AYURVEDIC */}
      <section id="integrative" className={styles.integrative}>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={`${styles.eyebrow} ${styles.eyebrowSage}`}>Whole-Person Care</span>
            <h2>Integrative &amp; Ayurvedic Medicine</h2>
            <p>A root-cause, whole-person approach that works alongside — not apart from — the rest of your care team.</p>
          </div>
          <div className={`${styles["team-grid"]} ${styles["cols-1"]} ${styles.reveal}`} data-reveal>
            {INTEGRATIVE_TEAM.map((m) => (
              <div key={m.id} className={styles["provider-card"]}>
                {m.image ? (
                  <Image className={styles["provider-photo"]} src={m.image} alt={`${m.name}, ${m.credentials}`} width={400} height={500} />
                ) : (
                  <div className={styles["provider-photo-placeholder"]}>{initials(m.name)}</div>
                )}
                <div className={styles["provider-body"]}>
                  <div className={styles["provider-role"]}>{m.title}</div>
                  <div className={styles["provider-name"]}>{m.name}, {m.credentials}</div>
                  <p className={styles["provider-bio"]}>{m.bio}</p>
                  <div className={styles["provider-tags"]}>
                    {m.specialties.map((s) => (
                      <span key={s} className={styles.chip}>{s}</span>
                    ))}
                  </div>
                  {m.acceptingNewPatients && (
                    <div className={styles["provider-status"]}>Accepting New Patients</div>
                  )}
                  <div className={styles["provider-actions"]}>
                    <a
                      href={m.bookingUrl ?? SITE.booking.zocdocUrl}
                      className={`${styles.btn} ${styles["btn-primary"]} ${styles["btn-sm"]}`}
                      target={m.bookingUrl?.startsWith("mailto:") ? undefined : "_blank"}
                      rel={m.bookingUrl?.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    >
                      Book with {m.name.split(" ")[0]}
                    </a>
                    <Link href={`/providers/${m.id}`} className={`${styles.btn} ${styles["btn-ghost"]} ${styles["btn-sm"]}`}>View Profile</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {INTEGRATIVE_TEAM.some((m) => !m.image) && (
            <p style={{ fontSize: "12px", color: "var(--ink-soft)", opacity: 0.8, marginTop: "14px" }}>
              *No current photo on file for {INTEGRATIVE_TEAM.filter((m) => !m.image).map((m) => m.name.split(" ")[0]).join(", ")} — using a placeholder until one is added.
            </p>
          )}
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* PHYSICAL THERAPY TEAM */}
      <section className={styles.alt} id="pt">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Rehabilitation</span>
            <h2>Physical Therapy Team</h2>
            <p>Licensed physical therapists and a physical therapist assistant covering sports rehab, post-surgical recovery, and pelvic floor physical therapy.</p>
          </div>
          <div className={`${styles["team-grid"]} ${styles.reveal}`} data-reveal>
            {PT_TEAM.map((m) => (
              <div key={m.id} className={styles["provider-card"]}>
                {m.image ? (
                  <Image className={styles["provider-photo"]} src={m.image} alt={`${m.name}, ${m.credentials}`} width={400} height={500} />
                ) : (
                  <div className={styles["provider-photo-placeholder"]}>{initials(m.name)}</div>
                )}
                <div className={styles["provider-body"]}>
                  <div className={styles["provider-role"]}>{m.title}</div>
                  <div className={styles["provider-name"]}>{m.name}, {m.credentials}</div>
                  <p className={styles["provider-bio"]}>{m.bio}</p>
                  <div className={styles["provider-tags"]}>
                    {m.specialties.map((s) => (
                      <span key={s} className={styles.chip}>{s}</span>
                    ))}
                  </div>
                  {m.acceptingNewPatients && (
                    <div className={styles["provider-status"]}>Accepting New Patients</div>
                  )}
                  <div className={styles["provider-actions"]}>
                    <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]} ${styles["btn-sm"]}`}>Book an Appointment</Link>
                    <Link href={`/providers/${m.id}`} className={`${styles.btn} ${styles["btn-ghost"]} ${styles["btn-sm"]}`}>View Profile</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT TEAM */}
      <section id="support">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Behind The Scenes</span>
            <h2>Support Team</h2>
            <p>Our clinical staff is backed by a dedicated team who make sure every visit runs smoothly from the moment you call to the moment you leave.</p>
          </div>
          <div className={`${styles["support-grid"]} ${styles.reveal}`} data-reveal>
            {SUPPORT_STAFF.map((s) => (
              <div key={s.name} className={styles["support-card"]}>
                {s.image ? (
                  <Image className={styles["support-photo"]} src={s.image} alt={s.name} width={200} height={200} />
                ) : (
                  <div className={styles["support-photo-placeholder"]}>{initials(s.name)}</div>
                )}
                <div className={styles["support-body"]}>
                  <div className={styles["support-name"]}>{s.name}</div>
                  <div className={styles["support-role"]}>{s.title}</div>
                </div>
              </div>
            ))}
          </div>
          {SUPPORT_STAFF.some((s) => !s.image) && (
            <p style={{ fontSize: "12px", color: "var(--ink-soft)", opacity: 0.8, marginTop: "16px" }}>
              *{SUPPORT_STAFF.filter((s) => !s.image).map((s) => s.name.split(" ")[0]).join(", ")} don&apos;t have photos on file yet — using placeholders until they&apos;re added.
            </p>
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`} id="contact">
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Ready to meet your team?</h2>
            <p>Our providers are currently accepting new patients across every discipline.</p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book an Appointment</Link>
              <a href={`tel:${SITE.phone.general}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call ParikhHealth</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
