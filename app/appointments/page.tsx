import type { Metadata } from "next";
import Link from "next/link";
import { SITE, ACCEPTED_PLANS, TEAM } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import ZocdocBookButton from "@/components/booking/ZocdocBookButton";
import styles from "./appointments.module.css";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule an appointment with ParikhHealth in Sunnyvale, CA. New and existing patients welcome. Primary care, sports medicine, and physical therapy.",
  alternates: { canonical: `${SITE.url}/appointments` },
};

const drParikh = TEAM.find((m) => m.id === "neesheet-parikh")!;
const drOh = TEAM.find((m) => m.id === "robert-oh")!;
const kinnari = TEAM.find((m) => m.id === "kinnari-shah")!;

function providerInitials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
}

export default function AppointmentsPage() {
  return (
    <div className={styles.appointments}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>Scheduling</span>
              <h1>Getting an appointment shouldn&apos;t be the hardest part of getting care.</h1>
              <p className={styles.lead}>
                New and existing patients are welcome — online, by phone, or by text, whichever is
                easiest. Pick your provider and visit type, and we&apos;ll take it from there.
              </p>
              <div className={styles["hero-actions"]}>
                <ZocdocBookButton className={`${styles.btn} ${styles["btn-primary"]}`}>Book Online Now</ZocdocBookButton>
                <a href="#patients" className={`${styles.btn} ${styles["btn-ghost"]}`}>New Here? Start Below</a>
              </div>
            </div>
            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={`${styles.monogram} ${styles["icon-mono"]}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 10h18" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles["roster-name"]}>Book in Minutes</div>
                    <div className={styles["roster-role"]}>Scheduling powered by ZocDoc</div>
                  </div>
                </div>
                <div className={styles.badge}>HIPAA Compliant · Free for Patients</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}><span>New patient scheduling</span><span>Online or by phone</span></div>
                  <div className={styles["roster-stat"]}><span>Same or next-day sick visits</span><span>Call/Text</span></div>
                  <div className={styles["roster-stat"]}><span>Telehealth</span><span>Select visit types</span></div>
                  <div className={styles["roster-stat"]}><span>Physical therapy</span><span>Direct text scheduling</span></div>
                </div>
                <div className={styles["roster-foot"]}>Not sure which visit type fits? Our front desk can help you choose.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* BOOKING METHODS */}
      <section id="book">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Ways To Book</span>
            <h2>Choose whichever is easier</h2>
            <p>All three paths reach the right schedule — pick the one that fits how you&apos;d rather handle it today.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>
              </div>
              <h3>Book Online</h3>
              <p>Use our online booking system to choose your provider, service type, and preferred time. Opens in a secure window right over this page.</p>
              <ZocdocBookButton className={`${styles.btn} ${styles["btn-primary"]}`}>Book Now</ZocdocBookButton>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" /></svg>
              </div>
              <h3>Call/Text</h3>
              <p>Our front desk is happy to schedule you directly — whichever&apos;s easier. Reach us during office hours or leave a message anytime.</p>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-primary"]}`}>Call/Text {SITE.phone.appointments}</a>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" /></svg>
              </div>
              <h3>Physical Therapy</h3>
              <p>PT appointments are scheduled directly with our PT team, not through online booking — just text to set up your session.</p>
              <a href={`sms:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-primary"]}`}>Text to Schedule PT</a>
            </div>
          </div>
        </div>
      </section>

      {/* NEW / EXISTING PATIENTS */}
      <section className={styles.alt} id="patients">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Before You Book</span>
            <h2>First visit, or coming back?</h2>
            <p>A couple of small details make check-in faster, whichever kind of visit this is.</p>
          </div>
          <div className={`${styles["grid-2"]} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <h3>New Patient</h3>
              <ul className={styles["credential-list"]}>
                <li>Select &quot;New Patient&quot; when booking online</li>
                <li>Arrive 15 minutes early for paperwork</li>
                <li>Bring your insurance card and a photo ID</li>
                <li>List any current medications and dosages</li>
              </ul>
              <Link href="/contact" className={styles["inline-link"]}>Have questions? Contact us →</Link>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Existing Patient</h3>
              <ul className={styles["credential-list"]}>
                <li>Select &quot;Established Patient&quot; when booking online</li>
                <li>Same-day sick visits available — call/text us</li>
                <li>Telehealth options available for eligible visits</li>
                <li>Prescription refills: please allow 48 hours</li>
              </ul>
              <a href={`tel:${SITE.phone.appointments}`} className={styles["inline-link"]}>Call/Text for same-day availability →</a>
            </div>
          </div>
        </div>
      </section>

      {/* IN-PERSON / TELEHEALTH */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Visit Format</span>
            <h2>In-person or telehealth — your choice</h2>
            <p>When you book online, you can choose the format that works best for you. Not every visit type is eligible for telehealth — if you&apos;re not sure, our front desk can help you pick the right one.</p>
          </div>
          <div className={`${styles["grid-2"]} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 21V9a2 2 0 012-2h12a2 2 0 012 2v12M9 21V13h6v8" /></svg>
              </div>
              <h3>In-Person Visits</h3>
              <p style={{ marginBottom: 0 }}>Physical exams, procedures, physical therapy, and most new patient visits are done in our Sunnyvale office.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 10l6-3v10l-6-3" /></svg>
              </div>
              <h3>Telehealth Visits</h3>
              <p style={{ marginBottom: 0 }}>Available for select visit types — including follow-ups, medication management, and minor illness consultations. Filter by &quot;video visit&quot; when booking online to see availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVIDERS */}
      <section className={styles.alt} id="providers">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Care Team</span>
            <h2>Not sure which provider to see?</h2>
            <p>Our online booking lets you choose a specific provider for your visit type — you don&apos;t have to see the same person for everything.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["card-frame"]}>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>{providerInitials(drParikh.name)}</div>
                  <div>
                    <div className={styles["roster-name"]}>{drParikh.name}, {drParikh.credentials}</div>
                    <div className={styles["roster-role"]}>Founder &amp; Chief Medical Officer</div>
                  </div>
                </div>
                <div className={styles.badge}>Primary Care · Sports Medicine</div>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>{drParikh.specialties.join(" · ")}</p>
              </div>
            </div>
            <div className={styles["card-frame"]}>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>{providerInitials(drOh.name)}</div>
                  <div>
                    <div className={styles["roster-name"]}>{drOh.name}, {drOh.credentials}</div>
                    <div className={styles["roster-role"]}>Family &amp; Sports Medicine</div>
                  </div>
                </div>
                <div className={styles.badge}>Primary Care · Sports Medicine</div>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>{drOh.specialties.join(" · ")}</p>
              </div>
            </div>
            <div className={styles["card-frame"]}>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>{providerInitials(kinnari.name)}</div>
                  <div>
                    <div className={styles["roster-name"]}>{kinnari.name}, {kinnari.credentials}</div>
                    <div className={styles["roster-role"]}>Physician Assistant</div>
                  </div>
                </div>
                <div className={styles.badge}>Primary Care Team</div>
                <p style={{ fontSize: "14px", color: "var(--ink-soft)", margin: 0 }}>{kinnari.specialties.join(" · ")}</p>
              </div>
            </div>
          </div>
          <p className={styles["table-note"]}>
            Looking for physical therapy, pelvic health, or rehab?{" "}
            <Link href="/providers" className={styles["inline-link"]} style={{ marginTop: 0 }}>See our full care team →</Link>
          </p>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* INSURANCE EXPLAINED */}
      <section id="insurance">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Coverage</span>
            <h2>Insurance, explained simply</h2>
            <p>Insurance terms can be confusing. Here&apos;s what the common ones actually mean for what you&apos;ll pay.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <h3>Deductible</h3>
              <p style={{ marginBottom: 0 }}>The amount you pay out-of-pocket each year before your insurance starts covering costs. A $1,500 deductible means you pay the first $1,500 of care yourself.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Copay</h3>
              <p style={{ marginBottom: 0 }}>A fixed fee — like $25 or $40 — you pay at each visit, often even after your deductible is met.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Coinsurance</h3>
              <p style={{ marginBottom: 0 }}>After your deductible is met, this is the percentage of the bill you still owe. If your plan covers 80%, you pay the remaining 20%.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>In-Network</h3>
              <p style={{ marginBottom: 0 }}>We have a negotiated rate with your insurance company, which usually means lower costs for you than an out-of-network provider.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Benefits</h3>
              <p style={{ marginBottom: 0 }}>The specific services your plan covers and how much of the cost it pays — this varies by plan, even within the same insurance company.</p>
            </div>
            <div className={styles["feature-card"]}>
              <h3>Out-of-Pocket Maximum</h3>
              <p style={{ marginBottom: 0 }}>The most you&apos;ll pay in a year for covered care. Once you hit it, your insurance covers 100% of costs for the rest of the year.</p>
            </div>
          </div>

          <div className={styles["grid-label"]}>How This Works At Your Visit</div>
          <ul className={`${styles.steps} ${styles.reveal}`} data-reveal>
            <li className={styles["step-item"]}><span className={styles["step-num"]}>1</span><p>We check that you&apos;re in-network before your appointment — or you can call the number on your insurance card to verify yourself.</p></li>
            <li className={styles["step-item"]}><span className={styles["step-num"]}>2</span><p>At check-in, you pay your copay or any remaining deductible.</p></li>
            <li className={styles["step-item"]}><span className={styles["step-num"]}>3</span><p>We bill your insurance for the rest of the visit.</p></li>
            <li className={styles["step-item"]}><span className={styles["step-num"]}>4</span><p>If anything&apos;s still owed after your insurance processes the claim, we&apos;ll bill you afterward.</p></li>
          </ul>
        </div>
      </section>

      {/* INSURANCE ACCEPTED */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Insurance We Accept</span>
            <h2>Most major PPO plans</h2>
            <p>Coverage varies by employer and plan year, so we recommend verifying benefits before your visit.</p>
          </div>
          <div className={`${styles["plan-grid"]} ${styles.reveal}`} data-reveal>
            {ACCEPTED_PLANS.map((plan) => (
              <div key={plan.name} className={styles["plan-card"]}>
                <div className={styles["plan-name"]}>{plan.name}</div>
                <div className={styles["plan-note"]}>{plan.notes}</div>
              </div>
            ))}
          </div>
          <p className={styles["table-note"]}>
            <Link href="/insurance" className={styles["inline-link"]} style={{ marginTop: 0 }}>Full insurance details &amp; self-pay options →</Link>
          </p>
        </div>
      </section>

      {/* CONCIERGE CROSS-SELL */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <div className={styles["callout-text"]}>
              <span className={styles.eyebrow}>Already A Concierge Member?</span>
              <h2>Concierge patients skip the line entirely.</h2>
              <p>Concierge members contact Dr. Parikh directly for same-day scheduling — no ZocDoc, no front desk queue. If that kind of access sounds like a better fit for your care, take a look at what&apos;s included.</p>
            </div>
            <Link href="/services/concierge-medicine" className={`${styles.btn} ${styles["btn-primary"]}`}>Explore Concierge Medicine</Link>
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Good To Know</span>
            <h2>Hours and location</h2>
          </div>
          <div className={`${styles["grid-2"]} ${styles.reveal}`} data-reveal>
            <div className={styles["info-card"]}>
              <h3>Office Hours</h3>
              {SITE.hours.map((h) => (
                <p key={h.day}>{h.day}: {h.hours}</p>
              ))}
            </div>
            <div className={styles["info-card"]}>
              <h3>Location</h3>
              <p>{SITE.address.street}<br />{SITE.address.city}, {SITE.address.state} {SITE.address.zip}</p>
              <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles["inline-link"]}>Get Directions →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.final} id="contact">
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Let&apos;s get you on the schedule.</h2>
            <p>New and existing patients, individuals and families — online booking takes just a couple of minutes.</p>
            <div className={styles["hero-actions"]}>
              <ZocdocBookButton className={`${styles.btn} ${styles["btn-primary"]}`}>Book Online Now</ZocdocBookButton>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call/Text ParikhHealth</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
