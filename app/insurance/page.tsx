import type { Metadata } from "next";
import Link from "next/link";
import { SITE, ACCEPTED_PLANS, NOT_ACCEPTED_PLANS } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./insurance.module.css";

export const metadata: Metadata = {
  title: "Insurance & Accepted Plans",
  description:
    "ParikhHealth accepts most major PPO insurance plans in Sunnyvale, CA. View accepted plans and learn about self-pay and concierge options.",
  alternates: { canonical: `${SITE.url}/insurance` },
};

export default function InsurancePage() {
  return (
    <div className={styles.insurance}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>Insurance &amp; Accepted Plans</span>
              <h1>Straightforward answers about coverage, before you ever sit in the waiting room.</h1>
              <p className={styles.lead}>
                We accept most major PPO insurance plans. If you don&apos;t see yours listed below, call
                us — our team can verify your benefits before your visit, so there are no surprises at
                checkout.
              </p>
              <div className={styles["hero-actions"]}>
                <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-primary"]}`}>
                  Call {SITE.phone.appointments}
                </a>
                <a href="#accepted" className={`${styles.btn} ${styles["btn-ghost"]}`}>
                  See Accepted Plans
                </a>
              </div>
            </div>
            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" />
                      <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />
                    </svg>
                  </div>
                  <div>
                    <div className={styles["roster-name"]}>Coverage Overview</div>
                    <div className={styles["roster-role"]}>Insurance &amp; billing at ParikhHealth</div>
                  </div>
                </div>
                <div className={styles.badge}>PPO-Friendly Practice</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}><span>Major PPO plans</span><span>Accepted</span></div>
                  <div className={styles["roster-stat"]}><span>HMO / Medi-Cal</span><span>Not in-network</span></div>
                  <div className={styles["roster-stat"]}><span>No insurance?</span><span>Self-pay available</span></div>
                  <div className={styles["roster-stat"]}><span>Want direct access?</span><span>Concierge option</span></div>
                </div>
                <div className={styles["roster-foot"]}>Always confirm your specific plan and benefits before your first visit.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* ACCEPTED PLANS */}
      <section id="accepted">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>What We Accept</span>
            <h2>Accepted insurance plans</h2>
            <p>
              We&apos;re in-network with most major PPO carriers in the Bay Area. Coverage specifics
              still vary by employer and plan year, so we always recommend a quick call to confirm
              before your first visit.
            </p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            {ACCEPTED_PLANS.map((plan) => (
              <div key={plan.name} className={styles["feature-card"]}>
                <div className={styles.icon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
                <h3>{plan.name}</h3>
                <p>{plan.notes}.</p>
              </div>
            ))}
          </div>

          <div className={styles["split-grid"]} style={{ marginTop: "56px" }}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <h3>Plans we do not accept</h3>
              <ul className={`${styles["credential-list"]} ${styles.muted}`}>
                {NOT_ACCEPTED_PLANS.map((plan) => (
                  <li key={plan}>{plan}</li>
                ))}
              </ul>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <h3>Have one of these plans?</h3>
              <p>
                You&apos;re still welcome to be seen here. Pay cash for your visit at our transparent
                self-pay rate, or join our Concierge Medicine program for direct access to Dr. Parikh,
                independent of insurance entirely.
              </p>
              <Link href="/services/concierge-medicine" className={styles["card-link"]}>
                Learn about Concierge Medicine →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFY FIRST CALLOUT */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Before Your First Visit</span>
            <h2>Always verify your benefits first.</h2>
            <p>
              Even if your plan is listed above, coverage specifics — deductibles, copays, in-network
              status — vary by employer and plan year. We recommend calling the member services number
              on the back of your insurance card to confirm ParikhHealth is in-network before your
              first visit. Our team is also happy to help you check.
            </p>
          </div>
        </div>
      </section>

      {/* GOOD TO KNOW */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Good To Know</span>
            <h2>A few things that work a little differently</h2>
            <p>Insurance billing at a multi-specialty practice has some nuances worth knowing up front.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" />
                </svg>
              </div>
              <h3>Physical therapy benefits are separate</h3>
              <p>
                PT services are billed to insurance but are subject to your plan&apos;s PT-specific
                benefits, which may differ from your medical benefits. Verify your PT copay, sessions
                per year, and deductible separately.
              </p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2 .5-.8 2-2 4-2 4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </div>
              <h3>Aesthetic services are self-pay only</h3>
              <p>
                Botox, microneedling, PRP treatments, and other aesthetic services are not covered by
                insurance and are billed directly at our transparent self-pay rates.
              </p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                </svg>
              </div>
              <h3>Concierge fees aren&apos;t billed to insurance</h3>
              <p>
                The membership fee is a separate charge for enhanced access. Standard clinical services
                rendered during concierge visits are still billed to your insurance as normal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* YOUR OPTIONS */}
      <section className={styles.alt} id="options">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Whatever Your Situation</span>
            <h2>Your options, either way</h2>
            <p>Insured, uninsured, or somewhere in between — there&apos;s a straightforward path to being seen.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </div>
              <h3>Self-pay options</h3>
              <p>Don&apos;t have insurance, or prefer to pay out-of-pocket? We offer transparent self-pay rates for all services. Call us for current pricing.</p>
              <a href={`tel:${SITE.phone.appointments}`} className={styles["card-link"]}>Call {SITE.phone.appointments} →</a>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" />
                </svg>
              </div>
              <h3>Verify your coverage</h3>
              <p>Call us before your first visit and our team will help verify your in-network status and estimate your out-of-pocket costs.</p>
              <a href={`tel:${SITE.phone.appointments}`} className={styles["card-link"]}>Call {SITE.phone.appointments} →</a>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
              </div>
              <h3>No insurance?</h3>
              <p>Our Concierge Medicine and PitchFit memberships work alongside or independently of insurance — providing direct access to Dr. Parikh without the need for traditional insurance billing.</p>
              <Link href="/services/concierge-medicine" className={styles["card-link"]}>Learn about Concierge Medicine →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Common Questions</span>
            <h2>Before you reach out</h2>
          </div>
          <div className={styles.reveal} data-reveal>
            <div className={styles["faq-item"]}>
              <h3>How do I know if my specific plan is accepted?</h3>
              <p>Being listed above means we&apos;re generally in-network with that carrier&apos;s PPO plans, but employer-specific plan variations exist. Call us with your insurance card in hand and we&apos;ll verify your exact plan.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>What if I have an HMO plan, like Kaiser?</h3>
              <p>We&apos;re not in-network with HMO plans, so visits would be self-pay. Many HMO patients choose to see us for sports medicine, physical therapy, or concierge care while keeping their HMO for other needs.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Are physical therapy visits covered the same way as medical visits?</h3>
              <p>Not necessarily. PT is billed under your plan&apos;s physical therapy benefit, which often has its own copay, visit limit, and deductible separate from your general medical benefit. Worth a quick verification call.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Does Concierge membership mean I don&apos;t need insurance?</h3>
              <p>Concierge membership covers enhanced access — direct physician contact, longer visits, and coordination. You&apos;ll still want insurance or major medical coverage for labs, imaging, specialist care, and hospitalization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Questions About Your Coverage?</span>
            <h2>Our team is happy to help you understand your benefits before your first visit.</h2>
            <p>A quick call is usually all it takes to know what&apos;s covered and what to expect.</p>
            <div className={styles["hero-actions"]}>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-primary"]}`}>Call {SITE.phone.appointments}</a>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-ghost"]}`}>Book an Appointment</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
