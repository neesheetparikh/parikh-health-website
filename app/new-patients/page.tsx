import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./new-patients.module.css";

export const metadata: Metadata = {
  title: "New Patients | What to Expect",
  description:
    "New to ParikhHealth? Here's everything you need to know before your first visit — what to bring, what to expect, insurance info, and how to book.",
  alternates: { canonical: `${SITE.url}/new-patients` },
};

const WHAT_TO_BRING = [
  "Photo ID (driver's license or passport)",
  "Insurance card (front and back)",
  "List of current medications and dosages",
  "List of known allergies",
  { text: "Previous medical records, if available", note: "Not required for your first visit." },
  "Referral form, if required by your insurance plan",
  "Payment method for any copays or self-pay fees",
];

const STEPS = [
  {
    num: "01",
    title: "Book your appointment",
    desc: `Schedule online through ZocDoc or call us directly at ${SITE.phone.appointments}. Let us know you're a new patient and what brings you in, so we can route you to the right provider.`,
  },
  {
    num: "02",
    title: "Complete intake forms",
    desc: "You'll get a link to complete your new patient paperwork online before your visit — so your provider can review your history in advance instead of meeting you cold.",
  },
  {
    num: "03",
    title: "Your first visit",
    desc: "Plan to arrive 10 minutes early. The visit is unhurried — we want to know you, not just your chief complaint, so expect a real conversation about your history and goals.",
  },
  {
    num: "04",
    title: "Your care plan",
    desc: "Before you leave, you'll understand exactly what's next — labs, a follow-up, a referral, or a treatment plan. We never leave you guessing on the way out the door.",
  },
];

export default function NewPatientsPage() {
  return (
    <div className={styles.newPatients}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Welcome to ParikhHealth</span>
          <h1 className={styles.reveal} data-reveal>Everything you need to know before your first visit.</h1>
          <p className={`${styles.lead} ${styles.reveal}`} data-reveal>
            We&apos;re glad you found us. Below is exactly what to expect — how to book, what to bring,
            and how your first visit works — so you can walk in without any guesswork.
          </p>
          <div className={`${styles["diff-strip"]} ${styles.reveal}`} data-reveal>
            <div className={styles["diff-chip"]}><span className={styles.dot} />Independent private practice, not a hospital system</div>
            <div className={styles["diff-chip"]}><span className={styles.dot} />Primary care and sports medicine under one roof</div>
            <div className={styles["diff-chip"]}><span className={styles.dot} />Led by Dr. Neesheet Parikh, DO — team physician, USA Cricket</div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* STEPS */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Getting Started</span>
            <h2>Your first visit, in four steps</h2>
            <p>Because we&apos;re an independent practice, our first-visit process is built to actually work for you — not a call center script. Here&apos;s the whole thing, start to finish.</p>
          </div>
          <div className={styles.steps}>
            {STEPS.map((s) => (
              <div key={s.num} className={`${styles["step-card"]} ${styles.reveal}`} data-reveal>
                <span className={styles["step-num"]}>{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO BRING + VISIT INFO */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={styles.split}>
            <div>
              <div className={styles["section-head"]} style={{ marginBottom: "28px" }}>
                <span className={styles.eyebrow}>Before You Arrive</span>
                <h2>What to bring</h2>
              </div>
              <ul className={`${styles.checklist} ${styles.reveal}`} data-reveal>
                {WHAT_TO_BRING.map((item) => {
                  const text = typeof item === "string" ? item : item.text;
                  const note = typeof item === "string" ? null : item.note;
                  return (
                    <li key={text}>
                      <span className={styles["check-icon"]}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </span>
                      <div>{text}{note && <span className={styles.note}>{note}</span>}</div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <div className={styles["section-head"]} style={{ marginBottom: "28px" }}>
                <span className={styles.eyebrow}>Visit Information</span>
                <h2>Find us, reach us</h2>
              </div>
              <div className={`${styles["info-card"]} ${styles.reveal}`} data-reveal>
                <div className={styles["info-row"]}>
                  <div className={styles["info-icon"]}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>
                  </div>
                  <div>
                    <div className={styles["info-label"]}>Location</div>
                    <div className={styles["info-value"]}>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</div>
                    <div className={styles["info-sub"]}><a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions →</a></div>
                  </div>
                </div>
                <div className={styles["info-row"]}>
                  <div className={styles["info-icon"]}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                  </div>
                  <div>
                    <div className={styles["info-label"]}>Hours</div>
                    <div className={styles["info-value"]}>{SITE.hours[0].day}: {SITE.hours[0].hours}</div>
                    <div className={styles["info-sub"]}>{SITE.hours[1].day}: {SITE.hours[1].hours}</div>
                  </div>
                </div>
                <div className={styles["info-row"]}>
                  <div className={styles["info-icon"]}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" /></svg>
                  </div>
                  <div>
                    <div className={styles["info-label"]}>Phone</div>
                    <div className={styles["info-value"]}><a href={`tel:${SITE.phone.general}`}>{SITE.phone.general}</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO BOOK CALLOUT */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <div className={styles["callout-grid"]}>
              <div>
                <span className={styles.eyebrow}>Ready to Book?</span>
                <h2>We&apos;re currently accepting new patients across all services.</h2>
                <p>Primary care, sports medicine, physical therapy, women&apos;s health, integrative medicine, aesthetics, and PitchFit — every part of the practice is open to new patients right now.</p>
              </div>
              <a href={`tel:${SITE.phone.general}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call {SITE.phone.general}</a>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={styles.split} style={{ gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>Questions About Insurance?</span>
              <h2 style={{ fontSize: "26px", marginTop: "14px" }}>We accept most major PPO plans.</h2>
              <p style={{ fontSize: "15.5px", color: "var(--ink-soft)", marginTop: "14px" }}>Verify your coverage before your first visit so there are no surprises at check-in — our team is also happy to help you confirm your benefits by phone.</p>
            </div>
            <div className={styles.reveal} data-reveal style={{ display: "flex", gap: "14px", justifyContent: "flex-end", flexWrap: "wrap" }}>
              <Link href="/insurance" className={`${styles.btn} ${styles["btn-primary"]}`}>View Accepted Plans</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.final}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Let&apos;s get your first visit on the calendar.</h2>
            <p>Booking takes a couple of minutes online, or call us directly and we&apos;ll walk you through it.</p>
            <div className={styles["final-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book Online</Link>
              <a href={`tel:${SITE.phone.general}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call {SITE.phone.general}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
