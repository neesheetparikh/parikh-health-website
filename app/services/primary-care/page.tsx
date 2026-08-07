import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, TEAM } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./primary-care.module.css";

export const metadata: Metadata = {
  title: "Primary Care | ParikhHealth Sunnyvale CA",
  description:
    "Primary care in Sunnyvale, CA from Dr. Neesheet Parikh, DO, Dr. Robert Oh, MD, and Kinnari Shah, PA-C — sick visits, chronic disease management, annual exams, and sports medicine-level care for injuries, all under one roof.",
};

const drParikh = TEAM.find((m) => m.id === "neesheet-parikh")!;
const drOh = TEAM.find((m) => m.id === "robert-oh")!;
const kinnari = TEAM.find((m) => m.id === "kinnari-shah")!;

export default function PrimaryCarePage() {
  return (
    <div className={styles.primaryCare}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-single"]}>
            <span className={styles.eyebrow}>ParikhHealth Primary Care</span>
            <h1>Whatever brought you in, treated with the same rigor as elite athlete care.</h1>
            <p className={styles.lead}>
              A sprained ankle, an annual physical, a question about your mood, an
              aesthetics consult — our physicians bring the same sports-medicine
              precision Dr. Neesheet Parikh uses as team physician for USA Cricket to
              every visit. Primary care, sports medicine, physical therapy, and
              aesthetics, together under one roof, backed by the technology that keeps
              it all connected.
            </p>
            <div className={styles["hero-actions"]}>
              <a href="#contact" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Schedule a Visit
              </a>
              <a href="#visits" className={`${styles.btn} ${styles["btn-ghost"]}`}>
                See What We Treat
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* WHAT WE TREAT / VISIT REASONS */}
      <section id="visits">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Real Reasons People Walk In</span>
            <h2>What young adults actually come in for</h2>
            <p>
              More than half of adults under 35 are already managing at least one
              ongoing health condition, and a large share of people under 30
              don&apos;t have a regular doctor at all — which means the first visit
              often has to do a lot of work. Here&apos;s what actually fills a primary
              care schedule at that age.
            </p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <span className={`${styles.tag} ${styles.acute}`}>Acute Care</span>
              <h3>Colds, Flu &amp; Infections</h3>
              <p>Same-week visits for the everyday stuff — sinus infections, strep, UTIs, and seasonal flu.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={styles.tag}>Preventive</span>
              <h3>Sports &amp; Camp Physicals</h3>
              <p>Fast-turnaround pre-participation exams and return-to-play clearance, done by a sports medicine physician.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={`${styles.tag} ${styles.mh}`}>Mental Health</span>
              <h3>Anxiety, Stress &amp; Mood Check-Ins</h3>
              <p>A primary care visit is often the easiest, least intimidating place to start that conversation.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={styles.tag}>Preventive</span>
              <h3>Skin Concerns &amp; Acne</h3>
              <p>First-line treatment for acne, rashes, and everyday skin issues, with dermatology referral when it&apos;s warranted.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={`${styles.tag} ${styles.repro}`}>Reproductive Health</span>
              <h3>Contraception &amp; Sexual Health</h3>
              <p>Birth control counseling, STI testing, and straightforward answers without judgment.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={`${styles.tag} ${styles.injury}`}>Injury</span>
              <h3>Sprains, Strains &amp; Overuse</h3>
              <p>The same sports medicine rigor our physicians bring to national team athletes, applied to your ankle or shoulder.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={styles.tag}>Preventive</span>
              <h3>Allergies &amp; New Asthma Symptoms</h3>
              <p>Seasonal allergies, a new wheeze, or an inhaler that needs refilling — worked up and managed here.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={styles.tag}>Preventive</span>
              <h3>Travel Health &amp; Immunizations</h3>
              <p>Vaccines and travel prep before a trip, without a specialty referral or a separate clinic visit.</p>
            </div>
            <div className={styles["feature-card"]}>
              <span className={`${styles.tag} ${styles.acute}`}>Acute Care</span>
              <h3>Fatigue, Sleep &amp; Low Energy</h3>
              <p>Often the first sign of something worth a closer look — thyroid, iron, sleep quality, or stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHRONIC DISEASE MANAGEMENT */}
      <section className={styles.alt} id="chronic">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Ongoing, Not One-Time</span>
            <h2>Chronic conditions, managed like they matter</h2>
            <p>
              Elevated blood pressure, borderline cholesterol, and prediabetes are
              already common well before middle age. Once something&apos;s flagged, it
              needs a doctor tracking the trend over months — not just the number from
              one visit.
            </p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <h3>Type 2 Diabetes &amp; Prediabetes</h3>
              <p>Ongoing A1c tracking, medication adjustments, and a nutrition plan that&apos;s revisited as your numbers change.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Hypertension</h3>
              <p>Regular blood pressure monitoring, medication titration when it&apos;s needed, and a realistic lifestyle plan.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>High Cholesterol</h3>
              <p>Lipid panels tracked visit over visit, so a trend gets caught early — not just a single number, once a year.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Asthma</h3>
              <p>Action plans, inhaler technique, flare management, and coordination if specialist care is ever needed.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Ongoing Weight Management</h3>
              <p>Sustainable change tracked between visits — the same nutrition and movement planning behind our sports medicine work.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Anxiety &amp; Depression, Ongoing</h3>
              <p>Regular check-ins and medication management, with referral coordination when a higher level of care makes sense.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INJURIES / SPORTS MEDICINE */}
      <section id="injuries">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Sports Medicine, Built In</span>
            <h2>Injuries treated by someone who treats them for a living</h2>
            <p>
              As team physician for USA Cricket, Dr. Parikh evaluates and manages
              athlete injuries at the national level — and that standard runs through
              the whole practice. Dr. Oh brings his own sports medicine training to
              primary care, and every physician here treats a sprained ankle, an aching
              shoulder, or a return-to-play question with that same rigor. Because
              sports medicine and physical therapy are part of the same practice,
              there&apos;s no handoff to another system.
            </p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <h3>Sprains, Strains &amp; Sports Injuries</h3>
              <p>Same-team evaluation and treatment, from the first visit through recovery.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Concussion Evaluation</h3>
              <p>Assessment and a clear, staged return-to-activity plan.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Overuse &amp; Training Injuries</h3>
              <p>Running, lifting, and repetitive-strain issues, addressed before they become chronic ones.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Sports Physicals &amp; Return-to-Play</h3>
              <p>Pre-participation exams and clearance handled by a physician who actually practices sports medicine.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Work &amp; Everyday Injuries</h3>
              <p>Strains and minor injuries from work or daily life, evaluated with the same care as an athlete&apos;s.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Integrated Physical Therapy</h3>
              <p>Same building, same team, no separate referral or new intake paperwork required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE MESSAGE */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>The Simplest Way To Say It</span>
            <h2>One care team. One record. Every reason you&apos;d actually go to the doctor.</h2>
            <p>
              Most primary care fragments the moment something specific comes up — a
              referral here, a portal message there, a different provider next time.
              ParikhHealth keeps it under one roof: one small, connected care team for
              the sick visit, the annual exam, the chronic condition, and the injury,
              with sports medicine, physical therapy, and aesthetics built directly
              into the practice — and modern technology keeping every visit connected,
              rather than handed off to someone else.
            </p>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* ANNUAL EXAMS */}
      <section className={styles.alt} id="exams">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>One Visit, Done Right</span>
            <h2>Your annual exam, built for you specifically</h2>
            <p>
              It&apos;s easy to put off the annual physical in your 20s and 30s — but
              blood pressure, cholesterol, and blood sugar issues are already common
              before middle age. Every annual exam here is built around current
              national screening guidelines and adjusted to your age, history, and
              goals.
            </p>
          </div>
          <div className={`${styles["grid-2"]} ${styles.reveal}`} data-reveal>
            <div className={styles["exam-card"]}>
              <span className={styles["exam-sub"]}>For Men</span>
              <h3>The Annual Exam</h3>
              <ul className={styles["credential-list"]}>
                <li><strong>Blood pressure &amp; metabolic screening</strong> — checked and tracked over time, not just measured once.</li>
                <li><strong>Blood work orders</strong> — labs ordered and reviewed based on your history, not a one-size-fits-all panel.</li>
                <li><strong>Testicular health check-in</strong> — a quick, routine part of the visit.</li>
                <li><strong>Prostate health discussion</strong> — age-appropriate screening conversation, on your terms.</li>
                <li><strong>Mental health &amp; stress check-in</strong> — a real question, not a box to check.</li>
                <li><strong>Immunization review</strong> — flu, tetanus, and anything else you&apos;re due for.</li>
              </ul>
            </div>
            <div className={styles["exam-card"]}>
              <span className={styles["exam-sub"]}>For Women</span>
              <h3>The Annual Exam</h3>
              <ul className={styles["credential-list"]}>
                <li><strong>Blood pressure &amp; metabolic screening</strong> — checked and tracked over time, not just measured once.</li>
                <li><strong>Blood work orders</strong> — labs ordered and reviewed based on your history, not a one-size-fits-all panel.</li>
                <li><strong>Breast health check-in</strong> — as part of your routine exam.</li>
                <li><strong>Cervical &amp; reproductive health screening</strong> — coordinated on schedule with current guidelines.</li>
                <li><strong>Contraception &amp; family planning discussion</strong> — a real conversation about what fits your life right now.</li>
                <li><strong>Mental health &amp; stress check-in</strong> — a real question, not a box to check.</li>
                <li><strong>Immunization review</strong> — flu, tetanus, HPV, and anything else you&apos;re due for.</li>
              </ul>
            </div>
          </div>
          <p className={styles["exam-note"]}>
            Exact screenings are tailored to your age, history, and current national
            guidelines — this is a starting point for what to expect, not a substitute
            for your visit.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Side By Side</span>
            <h2>How ParikhHealth primary care compares</h2>
            <p>Access, continuity, and integration are the biggest differences between a typical primary care experience and ours.</p>
          </div>
          <div className={styles.reveal} data-reveal style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Typical Primary Care / Urgent Care</th>
                  <th className={styles["col-highlight"]}>ParikhHealth Primary Care</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>New-patient wait time</td>
                  <td className={styles.no}>~24–31 days, national average*</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Scheduled directly online, priority for existing patients</td>
                </tr>
                <tr>
                  <td>Sports medicine, PT &amp; aesthetics</td>
                  <td className={styles.no}>Separate referrals, separate systems</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>All under one roof, one team, USA Cricket–level standard</td>
                </tr>
                <tr>
                  <td>Physician continuity</td>
                  <td className={styles.no}>Rotating providers are common</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>A small, consistent care team who knows your history</td>
                </tr>
                <tr>
                  <td>Technology</td>
                  <td className={styles.no}>Paper forms, phone-only scheduling, no direct messaging</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Online scheduling, direct texting, digital records</td>
                </tr>
                <tr>
                  <td>Between-visit communication</td>
                  <td className={styles.no}>Phone tree or portal-only</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Direct text-based updates and reminders</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles["table-note"]}>
            *National average from the 2025 AMN Healthcare Survey of Physician
            Appointment Wait Times (family medicine); not specific to any individual
            clinic.
          </p>
        </div>
      </section>

      {/* ABOUT / CARE TEAM */}
      <section className={styles.alt} id="about">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Meet Your Care Team</span>
            <h2>More than one doctor — the same standard of care</h2>
            <p>
              Primary care visits happen with Dr. Parikh, Dr. Oh, or Kinnari Shah,
              PA-C — a small, connected team that stays in sync on your history, so
              nothing gets lost between visits.
            </p>
          </div>
          <div className={`${styles["team-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles["team-card"]}>
              <Image
                className={styles["team-avatar"]}
                src={drParikh.image}
                alt={`${drParikh.name}, ${drParikh.credentials}`}
                width={64}
                height={64}
              />
              <div className={styles["team-name"]}>{drParikh.name}, {drParikh.credentials}</div>
              <div className={styles["team-role"]}>Founder &amp; CMO · Family Medicine &amp; Sports Medicine</div>
              <p>Team physician for USA Cricket, bringing national-team sports medicine standards to everyday primary care.</p>
            </div>
            <div className={styles["team-card"]}>
              <Image
                className={styles["team-avatar"]}
                src={drOh.image}
                alt={`${drOh.name}, ${drOh.credentials}`}
                width={64}
                height={64}
              />
              <div className={styles["team-name"]}>{drOh.name}, {drOh.credentials}</div>
              <div className={styles["team-role"]}>Family Medicine &amp; Sports Medicine</div>
              <p>A background in military medicine and the VA system, bringing disciplined, thorough primary care to every visit.</p>
            </div>
            <div className={styles["team-card"]}>
              <Image
                className={styles["team-avatar"]}
                src={kinnari.image}
                alt={`${kinnari.name}, ${kinnari.credentials}`}
                width={64}
                height={64}
              />
              <div className={styles["team-name"]}>{kinnari.name}, {kinnari.credentials}</div>
              <div className={styles["team-role"]}>Physician Assistant · Primary Care &amp; Aesthetics</div>
              <p>A trusted first point of contact for sick visits, annual exams, chronic condition management, and aesthetics.</p>
            </div>
          </div>
          <p className={styles["exam-note"]} style={{ marginTop: "26px" }}>
            Every provider works from the same chart and the same plan — sports
            medicine and physical therapy are part of the same practice for all three.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Questions</span>
            <h2>Before you reach out</h2>
          </div>
          <div className={styles.reveal} data-reveal>
            <div className={styles["faq-item"]}>
              <h3>Do you take my insurance?</h3>
              <p>We work with a range of insurance plans. Reach out and we&apos;ll confirm your coverage before your first visit.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Can I get a same-day or next-day sick visit?</h3>
              <p>Yes — contact us for current same-day and next-day availability.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Do you manage chronic conditions long-term, or just handle one-off visits?</h3>
              <p>Long-term. Conditions like diabetes, hypertension, and high cholesterol are tracked and adjusted over time, not treated as a single appointment.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>What if my injury needs physical therapy?</h3>
              <p>It&apos;s handled in-house, by the same team, without a separate referral to a different practice.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Is this the same as ParikhHealth&apos;s Concierge Medicine membership?</h3>
              <p>
                No — this is standard primary care, billed through insurance like any
                primary care visit. Concierge membership is a separate, optional tier
                with extended visits and direct physician access.{" "}
                <Link href="/services/concierge-medicine" className={styles["faq-link"]}>
                  Learn more about Concierge Medicine.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`} id="contact">
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Same team for the sprained ankle, the blood work, and everything in between.</h2>
            <p>Schedule your first visit and get matched with a plan built around you — not a template.</p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Schedule a Visit
              </Link>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>
                Call ParikhHealth
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
