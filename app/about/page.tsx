import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { TEAM, SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ParikhHealth — our story, philosophy, and the team behind your care. Primary care and sports medicine in Sunnyvale, CA.",
  alternates: { canonical: `${SITE.url}/about` },
};

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>Our Story</span>
              <h1>An independent practice, built the way medicine should feel.</h1>
              <p className={styles.lead}>
                ParikhHealth was founded by Dr. Neesheet Parikh, DO — a primary care and sports
                medicine physician who also serves as team physician for USA Cricket — on a simple
                conviction: healthcare works best as a genuine, ongoing relationship, not a series of
                disconnected transactions. We&apos;re affiliated with El Camino Health for the
                specialists and resources that benefit our patients, but ParikhHealth remains 100%
                independently owned — so the same standard Dr. Parikh brings to national team athletes
                is the standard every patient here receives.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book an Appointment</Link>
                <a href="#team" className={`${styles.btn} ${styles["btn-ghost"]}`}>Meet the Team</a>
              </div>
            </div>
            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
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
                  <div className={styles["roster-stat"]}><span>Hospital affiliation</span><span>El Camino Health</span></div>
                  <div className={styles["roster-stat"]}><span>Ownership</span><span>100% Independent</span></div>
                  <div className={styles["roster-stat"]}><span>New patients</span><span>Accepted</span></div>
                </div>
                <div className={styles["roster-foot"]}>Ask us about our USA Cricket team physician partnership.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* WHO WE ARE */}
      <section id="who-we-are">
        <div className={styles.wrap}>
          <div className={styles["about-split"]}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>Who We Are</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>A different kind of practice</h2>
              <p style={{ marginTop: "20px" }}>
                ParikhHealth is an independent primary care and sports medicine practice located in
                Sunnyvale, California, affiliated with El Camino Health. That affiliation gives our
                patients access to a deeper network of specialists and hospital-level resources — but
                ParikhHealth remains 100% independently owned and operated, which means our first
                obligation is always to you, our patient, not a system&apos;s quota.
              </p>
              <p>
                Our team brings together family medicine, sports medicine, physician assistant care,
                physical therapy, aesthetics, and women&apos;s health under one roof, so your care never
                gets fragmented across specialists who don&apos;t talk to each other. We serve patients
                from Sunnyvale, Santa Clara, Cupertino, Mountain View, and across the greater Bay Area.
              </p>
              <ul className={styles["fact-list"]}>
                <li><strong>Independently owned</strong> — no corporate quotas dictating how much time you get.</li>
                <li><strong>Affiliated with El Camino Health</strong> — for specialists and resources, when you need them.</li>
                <li><strong>Accepting new patients</strong> across every discipline.</li>
                <li><strong>In-person and telehealth</strong> visits both available.</li>
                <li><strong>Bilingual care</strong> available.</li>
              </ul>
            </div>
            <div className={styles.reveal} data-reveal>
              <div className={styles["photo-frame"]}>Practice photo — pending final selection</div>
            </div>
          </div>

          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal style={{ marginTop: "64px" }}>
            <span className={styles.eyebrow}>Independent, By Design</span>
            <h2>What changes when a practice stays independent</h2>
            <p>Corporate ownership isn&apos;t the only way to run a medical practice — it&apos;s just the most common one. Here&apos;s what an independent structure lets us do differently.</p>
          </div>
          <div className={styles.reveal} data-reveal style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr><th>&nbsp;</th><th>Corporate-Owned Practice</th><th className={styles["col-highlight"]}>ParikhHealth, Independent</th></tr>
              </thead>
              <tbody>
                <tr><td>Who shapes your care plan</td><td className={styles.no}>System protocols &amp; quotas</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Your physician, case by case</td></tr>
                <tr><td>Physician panel size</td><td className={styles.no}>Set by the system</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Set by the practice, for quality</td></tr>
                <tr><td>Specialist coordination</td><td className={styles.no}>Separate systems, referral only</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>One team, same roof — plus El Camino Health&apos;s specialist network when you need it</td></tr>
                <tr><td>Ownership</td><td className={styles.no}>Hospital system / corporate</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Physician-owned, independent (El Camino Health affiliated)</td></tr>
                <tr><td>Standard of care held to</td><td className={styles.no}>Volume-driven benchmarks</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>The USA Cricket standard, applied to every patient</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles["table-note"]}>General comparison based on typical hospital- and corporate-affiliated primary care models, not any single named organization; confirm specifics before publishing.</p>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.alt} id="values">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>What Guides Us</span>
            <h2>The values behind every visit</h2>
            <p>These aren&apos;t values we put on a wall. They&apos;re the reasons the practice is built the way it is.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2 .5-.8 2-2 4-2 4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z" /></svg></div>
              <h3>Compassionate Care</h3>
              <p>Every patient deserves to feel heard. We take time — not just enough time, but real time — to understand your concerns, your history, and your goals.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" /></svg></div>
              <h3>Clinical Excellence</h3>
              <p>Board-certified, evidence-based, and continually learning. We hold ourselves to the same standard of practice that national team athletes rely on.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div>
              <h3>Integrated Team Approach</h3>
              <p>Your physician, physician assistant, and physical therapist communicate directly. You benefit from coordinated, cohesive care under one roof.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div>
              <h3>Independent by Design</h3>
              <p>We&apos;re affiliated with El Camino Health for the specialists and resources that benefit our patients — but ownership and every care decision stay right here, with the people treating you.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" /></svg></div>
              <h3>Sports Medicine Expertise</h3>
              <p>From weekend athletes to a national cricket squad, our sports medicine training shapes how we think about injury, recovery, and staying active at every age.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3h6l1 4H8l1-4zM6 7h12l1 14H5L6 7z" /></svg></div>
              <h3>Whole-Person Primary Care</h3>
              <p>Primary care here means the full picture — chronic conditions, prevention, acute illness, and the everyday questions that don&apos;t fit neatly into a ten-minute visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>The Simplest Way To Say It</span>
            <h2>We hold every patient to a national-team standard.</h2>
            <p>
              As team physician for USA Cricket, Dr. Parikh works inside a simple discipline: know the
              athlete&apos;s full history, build a plan around their body and their life, and stay
              accountable for how they&apos;re actually doing — not just for the visit itself.
              That&apos;s not a special program reserved for a few. It&apos;s simply how ParikhHealth
              practices medicine, for every patient who walks through our door — because we built this
              practice independent enough to do it that way.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* TEAM */}
      <section id="team">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>The Team</span>
            <h2>Meet your providers</h2>
            <p>Eight clinicians, five disciplines, one coordinated team — so your care never has to start over with someone new.</p>
          </div>
          <div className={styles["team-grid"]}>
            {TEAM.map((m) => (
              <div key={m.id} className={`${styles["provider-card"]} ${styles.reveal}`} data-reveal>
                {m.image ? (
                  <Image className={styles["provider-photo"]} src={m.image} alt={`${m.name}, ${m.credentials}`} width={300} height={300} />
                ) : (
                  <div className={styles["provider-photo-placeholder"]}>{initials(m.name)}</div>
                )}
                <div className={styles["provider-body"]}>
                  <div className={styles["provider-name"]}>{m.name}, {m.credentials}</div>
                  <div className={styles["provider-role"]}>{m.title.replace(/^Physician — /, "")}</div>
                  <p className={styles["provider-bio"]}>{m.bio}</p>
                  {m.acceptingNewPatients && <span className={styles["provider-tag"]}>Accepting New Patients</span>}
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles["team-cta"]} ${styles.reveal}`} data-reveal>
            <Link href="/providers" className={`${styles.btn} ${styles["btn-ghost"]}`}>Full Provider Profiles</Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Ready to meet the team?</h2>
            <p>Book an appointment and experience independent, coordinated care that puts you first.</p>
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
