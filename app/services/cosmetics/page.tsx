import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./aesthetic.module.css";

export const metadata: Metadata = {
  title: "Aesthetic Services | ParikhHealth",
  description:
    "Medical-grade aesthetics delivered by physicians, not med-spa guesswork. Botox and neuromodulators, SkinPen microneedling, and PRP hair restoration led by Kinnari Shah, PA-C, Director of Aesthetic Services, at ParikhHealth in Sunnyvale, CA.",
};

export default function AestheticServicesPage() {
  return (
    <div className={styles.aesthetic}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>ParikhHealth Aesthetic Services</span>
              <h1>Medical-grade aesthetics, delivered by physicians — not guesswork.</h1>
              <p className={styles.lead}>
                Botox and neuromodulators, SkinPen microneedling, and PRP hair restoration,
                every treatment planned and performed under direct physician oversight. Not
                a med-spa formula. A clinical standard, applied to how you look and feel.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                  Book a Consultation
                </Link>
                <a href="#treatments" className={`${styles.btn} ${styles["btn-ghost"]}`}>
                  See Treatments
                </a>
              </div>
            </div>
            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>KS</div>
                  <div>
                    <div className={styles["roster-name"]}>Kinnari Shah, PA-C</div>
                    <div className={styles["roster-role"]}>Director of Aesthetic Services</div>
                  </div>
                </div>
                <div className={styles.badge}>Physician-Supervised Care</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}>
                    <span>Treatment plans</span>
                    <span>Individualized</span>
                  </div>
                  <div className={styles["roster-stat"]}>
                    <span>Oversight</span>
                    <span>Direct physician review</span>
                  </div>
                  <div className={styles["roster-stat"]}>
                    <span>Setting</span>
                    <span>Medical practice, not a spa</span>
                  </div>
                  <div className={styles["roster-stat"]}>
                    <span>Patient rating</span>
                    <span>{SITE.rating.score} / 5*</span>
                  </div>
                </div>
                <div className={styles["roster-foot"]}>
                  *Based on {SITE.rating.count}+ verified ParikhHealth patient reviews.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* WHY PHYSICIAN-LED */}
      <section id="why">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Why This Matters</span>
            <h2>Most injectables are delegated. Ours aren&apos;t.</h2>
            <p>
              Many med-spas train non-medical staff to inject and needle on a weekend
              course, then send them straight to clients. We built our aesthetic practice
              the other way around: inside a physician-led medical group, with the same
              clinical rigor we bring to sports medicine and primary care.
            </p>
          </div>
          <div className={`${styles["bar-compare"]} ${styles.reveal}`} data-reveal>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>Typical med-spa</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.short}`}>
                  Non-medical staff, limited oversight
                </div>
              </div>
            </div>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>ParikhHealth Aesthetics</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.long}`}>
                  Physician-directed, clinically trained providers, full medical record
                  integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className={styles.alt} id="treatments">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>What We Offer</span>
            <h2>Three treatment pillars, one standard of care</h2>
            <p>
              Every treatment is grounded in medical training and tailored to your goals —
              never a one-size-fits-all package.
            </p>
          </div>
          <div className={styles.grid}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                </svg>
              </div>
              <span className={styles["pillar-tag"]}>Pillar One</span>
              <h3>Injectables &amp; Neuromodulators</h3>
              <p>Botox, Dysport &amp; Xeomin, precisely dosed and placed.</p>
              <ul>
                <li>Forehead lines &amp; frown lines (glabellar lines)</li>
                <li>Crow&apos;s feet &amp; bunny lines</li>
                <li>Brow lift</li>
                <li>Preventive Botox</li>
                <li>Hyperhidrosis (excessive sweating) treatment</li>
              </ul>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="7" cy="8" r="1.2" />
                  <circle cx="17" cy="8" r="1.2" />
                  <circle cx="7" cy="16" r="1.2" />
                  <circle cx="17" cy="16" r="1.2" />
                  <circle cx="12" cy="5" r="1.2" />
                  <circle cx="12" cy="19" r="1.2" />
                </svg>
              </div>
              <span className={styles["pillar-tag"]}>Pillar Two</span>
              <h3>Skin Rejuvenation &amp; SkinPen Microneedling</h3>
              <p>Medical-grade SkinPen microneedling, with or without PRP.</p>
              <ul>
                <li>SkinPen microneedling</li>
                <li>Microneedling with PRP (vampire facial)</li>
                <li>PRP facial treatments</li>
                <li>Acne scar reduction</li>
                <li>Fine line &amp; wrinkle improvement</li>
                <li>Pore minimization &amp; texture enhancement</li>
                <li>Medical-grade skincare consultations</li>
              </ul>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2 .5-.8 2-2 4-2 4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </div>
              <span className={styles["pillar-tag"]}>Pillar Three</span>
              <h3>PRP Hair Restoration</h3>
              <p>Regenerative treatment for thinning hair, from your own plasma.</p>
              <ul>
                <li>PRP scalp injections for thinning hair</li>
                <li>Androgenetic alopecia (pattern hair loss) treatment</li>
                <li>Hair loss assessment &amp; candidacy evaluation</li>
                <li>Monthly induction series with quarterly maintenance</li>
                <li>Combined therapy planning (PRP + topical/oral)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE MESSAGE */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>The Simplest Way To Say It</span>
            <h2>Looking your best supports feeling your best — so we treat it like medicine.</h2>
            <p>
              We don&apos;t separate aesthetics from the rest of your care. Your treatment
              plan is built by providers who already know your health history, working
              inside the same physician-led practice that handles your primary care and
              sports medicine — not a separate storefront with a different standard.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* MEET KINNARI */}
      <section id="kinnari">
        <div className={styles.wrap}>
          <div className={styles["about-grid"]}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>Director of Aesthetic Services</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>Kinnari Shah, PA-C</h2>
            </div>
            <div className={styles.reveal} data-reveal>
              <p>
                Kinnari Shah, PA-C leads ParikhHealth&apos;s Aesthetic Services as Director,
                bringing the same clinical thoroughness she&apos;s known for across the
                practice to every injectable, microneedling, and PRP treatment plan.
              </p>
              <p>
                Patients consistently describe her as meticulous and genuinely invested in
                their care — the same qualities that make her aesthetic consultations feel
                like a medical evaluation first, and a cosmetic treatment second.
              </p>
              <ul className={styles["credential-list"]}>
                <li>
                  <strong>Director of Aesthetic Services</strong> — oversees treatment
                  planning across injectables, skin rejuvenation, and PRP hair restoration.
                </li>
                <li>
                  <strong>Physician Assistant, ParikhHealth</strong> — trained across
                  primary care, giving every aesthetic consult a full clinical picture.
                </li>
                <li>
                  <strong>&quot;Incredibly thorough and genuinely caring&quot;</strong> —
                  Priya K., patient since 2021.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Side By Side</span>
            <h2>How ParikhHealth Aesthetics compares</h2>
            <p>The treatments may look similar on a menu. The standard behind them isn&apos;t.</p>
          </div>
          <div className={styles.reveal} data-reveal style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Typical Med-Spa</th>
                  <th className={styles["col-highlight"]}>ParikhHealth Aesthetics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Who performs treatment</td>
                  <td className={styles.no}>Non-medical staff, variable training</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Clinically trained providers</td>
                </tr>
                <tr>
                  <td>Physician oversight</td>
                  <td className={styles.no}>Often remote or nominal</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Direct, in-practice</td>
                </tr>
                <tr>
                  <td>Medical history on file</td>
                  <td className={styles.no}>Rarely integrated</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Full record, same team as your care</td>
                </tr>
                <tr>
                  <td>Treatment planning</td>
                  <td className={styles.no}>Menu-based</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Individualized to your goals</td>
                </tr>
                <tr>
                  <td>Products used</td>
                  <td className={styles.no}>Varies by vendor</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Medical-grade, physician-sourced</td>
                </tr>
                <tr>
                  <td>Complication management</td>
                  <td className={styles.no}>Limited on-site capability</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Physician-led medical practice</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles["table-note"]}>
            General comparisons based on typical industry practice; individual med-spas vary.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Questions</span>
            <h2>Before you book</h2>
          </div>
          <div className={styles.reveal} data-reveal>
            <div className={styles["faq-item"]}>
              <h3>Do I need to be an existing ParikhHealth patient?</h3>
              <p>
                No. Aesthetic services are open to new and existing patients — a
                consultation is the first step either way.
              </p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>What&apos;s the difference between microneedling and microneedling with PRP?</h3>
              <p>
                Standard SkinPen microneedling stimulates collagen through controlled
                micro-injury. Adding your own PRP (platelet-rich plasma) — often called the
                &quot;vampire facial&quot; — layers in growth factors that can enhance
                texture, tone, and healing.
              </p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>How does PRP hair restoration work?</h3>
              <p>
                We draw a small blood sample, concentrate the platelet-rich plasma, and
                inject it into the scalp to stimulate thinning follicles. Most patients
                follow a monthly induction series, then quarterly maintenance.
              </p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Is Botox safe if I&apos;m new to it?</h3>
              <p>
                Yes — treatment starts with a consultation to assess candidacy, discuss
                goals, and plan dosing conservatively, especially for first-time patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Start with a consultation, not a commitment.</h2>
            <p>
              Meet with our aesthetic services team to discuss your goals and build a plan
              grounded in medical expertise.
            </p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Book a Consultation
              </Link>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>
                Call {SITE.phone.appointments}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.disclaimer}>
        <div className={`${styles.wrap} ${styles["disclaimer-grid"]}`}>
          <div className={styles["disclaimer-brand"]}>ParikhHealth</div>
          <p className={styles["disclaimer-note"]}>
            Aesthetic Services at ParikhHealth are performed under direct physician
            oversight. {SITE.address.full} · {SITE.phone.appointments} · Mon–Fri, 9:00 AM –
            4:00 PM.
          </p>
        </div>
      </div>
    </div>
  );
}
