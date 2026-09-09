import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Send a message to ParikhHealth in Sunnyvale, CA. Questions, appointment requests, or general inquiries — we respond within one business day.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const DEPARTMENTS = [
  { name: "Primary Care", desc: "Checkups, chronic condition management, and everyday care from a team you'll actually get to know.", href: "/services/primary-care" },
  { name: "Sports Medicine", desc: "Injury care, PRP, concussion evaluation, and return-to-play plans, backed by our team's work with national-level athletes.", href: "/services/sports-medicine" },
  { name: "Physical Therapy", desc: "Hands-on rehab and recovery, from post-surgical care to pelvic floor therapy.", href: "/services/physical-therapy" },
  { name: "Concierge Medicine", desc: "Longer visits, direct physician access, and a capped patient panel built around you.", href: "/services/concierge-medicine" },
  { name: "Women's Health", desc: "Preventive and ongoing care for women at every stage, provided by our full primary care team.", href: "/services/womens-health" },
  { name: "Integrative Medicine", desc: "Osteopathic manipulation and Ayurvedic approaches alongside conventional care.", href: "/services/integrative-medicine" },
  { name: "Aesthetic Services", desc: "Skin and cosmetic treatments from a team that already knows your health history.", href: "/services/cosmetics" },
  { name: "PitchFit Elite", desc: "Cricket-specific performance training and injury prevention for players and clubs.", href: "/services/athlete-wellness" },
];

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>Contact ParikhHealth</span>
              <h1>However you reach us, a real person on our team answers.</h1>
              <p className={styles.lead}>
                Questions about a visit, a referral, or where to start — call, text, or email us
                directly. Whether you&apos;re looking for primary care, sports medicine, or one of our
                other specialties, we&apos;ll point you to the right person and get back to you within
                one business day.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book Appointment</Link>
                <a href={`tel:${SITE.phone.general}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call {SITE.phone.general}</a>
              </div>
            </div>
            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
              <div className={styles["contact-card"]}>
                <div className={styles["contact-card-head"]}>
                  <h3>Reach Our Front Desk</h3>
                </div>
                <div className={styles.badge}>Mon – Fri, 9 AM – 4 PM</div>
                <div className={styles["contact-rows"]}>
                  <a href={`tel:${SITE.phone.general}`} className={styles["contact-row"]}>
                    <div className={styles["c-icon"]}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" />
                      </svg>
                    </div>
                    <div className={styles["c-body"]}><div className={styles["c-label"]}>Call</div><div className={styles["c-value"]}>{SITE.phone.general}</div></div>
                  </a>
                  <a href={`sms:${SITE.phone.general}`} className={styles["contact-row"]}>
                    <div className={styles["c-icon"]}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </div>
                    <div className={styles["c-body"]}><div className={styles["c-label"]}>Text</div><div className={styles["c-value"]}>{SITE.phone.general}</div></div>
                  </a>
                  <a href={`mailto:${SITE.email}`} className={styles["contact-row"]}>
                    <div className={styles["c-icon"]}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16v16H4z" />
                        <path d="M4 6l8 7 8-7" />
                      </svg>
                    </div>
                    <div className={styles["c-body"]}><div className={styles["c-label"]}>Email</div><div className={styles["c-value"]}>{SITE.email}</div></div>
                  </a>
                  <div className={styles["contact-row"]} style={{ cursor: "default" }}>
                    <div className={styles["c-icon"]}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                        <path d="M14 3v5h5M8 13h8M8 17h5" />
                      </svg>
                    </div>
                    <div className={styles["c-body"]}><div className={styles["c-label"]}>Fax · available 24 hours</div><div className={styles["c-value"]}>{SITE.phone.fax}</div></div>
                  </div>
                </div>
                <div className={styles["contact-card-foot"]}>We reply within one business day. For urgent same-day concerns, please call.</div>
              </div>
            </div>
          </div>

          <div className={`${styles.notice} ${styles.reveal}`} data-reveal>
            <div className={styles["n-icon"]}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 9v4M12 17h.01M10.3 3.9L2.8 17a2 2 0 001.7 3h15a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
              </svg>
            </div>
            <p><strong>Medical emergency?</strong> Call 911 or go to your nearest emergency room. This page, our phone lines, and our email are not monitored for urgent medical concerns.</p>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* VISIT US */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Our Location</span>
            <h2>Visit us in Sunnyvale</h2>
            <p>Our office sits along Oakmead Parkway, a short drive from Highway 101 and Lawrence Expressway, with parking directly on site.</p>
          </div>
          <div className={`${styles["visit-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles["info-block"]}>
              <h3>Address &amp; Hours</h3>
              <div className={styles["info-row-plain"]}><span>Address</span><span>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span></div>
              {SITE.hours.map((h) => (
                <div key={h.day} className={styles["info-row-plain"]}><span>{h.day}</span><span>{h.hours}</span></div>
              ))}
              <div className={styles["info-row-plain"]}><span>Phone</span><span>{SITE.phone.general}</span></div>
              <div className={styles["info-row-plain"]}><span>Fax</span><span>{SITE.phone.fax}</span></div>
              <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles["directions-link"]}>Get Directions</a>
            </div>
            <div className={styles["map-frame"]}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639986591798!2d-122.01699368468902!3d37.37249597198487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e5b1f4b0c1%3A0x8b0f3b6e3b0f3b6e!2s1299+Oakmead+Pkwy%2C+Sunnyvale%2C+CA+94085!5e0!3m2!1sen!2sus!4v1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ParikhHealth location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className={styles.alt} id="departments">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Not Sure Where To Start?</span>
            <h2>Find the right specialty for your question</h2>
            <p>ParikhHealth brings five specialties together under one roof. If you already know who you need, go straight to the source.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            {DEPARTMENTS.map((d) => (
              <div key={d.name} className={styles["feature-card"]}>
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
                <Link href={d.href} className={styles["dept-link"]}>View {d.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Questions</span>
            <h2>Before you reach out</h2>
          </div>
          <div className={styles.reveal} data-reveal>
            <div className={styles["faq-item"]}>
              <h3>Are you accepting new patients?</h3>
              <p>In most cases, yes. Book online or call our office, and our team will match you with the right provider for your needs.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>How do I request my medical records?</h3>
              <p>Call or email our front desk with your request, and our team will help you get what you need.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>I have a billing or insurance question.</h3>
              <p>Reach our front desk by phone or email, and someone from our billing team will follow up with you directly.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>How do I request a prescription refill?</h3>
              <p>Call our office during business hours, and our clinical team will route your request to the right provider.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>What should I do in a medical emergency?</h3>
              <p>Call 911 or go to your nearest emergency room. Our phone lines, text line, and email are not monitored for urgent medical concerns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Ready to be seen?</h2>
            <p>Book an appointment online in minutes, or call our office and we&apos;ll help you find the right fit.</p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book Appointment</Link>
              <a href={`tel:${SITE.phone.general}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call {SITE.phone.general}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
