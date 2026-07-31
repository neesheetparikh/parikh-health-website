import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import RevealObserver from "./RevealObserver";
import styles from "./concierge.module.css";

export const metadata: Metadata = {
  title: "Concierge Medicine | ParikhHealth Sunnyvale CA",
  description:
    "ParikhHealth Concierge Medicine brings the standard of care Dr. Neesheet Parikh, DO gives elite USA Cricket athletes to your everyday health — nutrition, weight management, direct physician access, and a capped patient panel in Sunnyvale, CA.",
};

export default function ConciergeMedicinePage() {
  return (
    <div className={styles.concierge}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>ParikhHealth Concierge Medicine</span>
              <h1>The kind of care an elite athlete gets — built around you instead.</h1>
              <p className={styles.lead}>
                As team physician for USA Cricket, Dr. Neesheet Parikh builds every plan
                around one athlete&apos;s body, history, and goals — never a waiting room
                full of them. Concierge membership brings that exact standard of attention
                to your everyday health: your nutrition, your weight, your training, your
                questions. All of it.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                  Request a Consultation
                </Link>
                <a href="#included" className={`${styles.btn} ${styles["btn-ghost"]}`}>
                  See What&apos;s Included
                </a>
              </div>
            </div>
            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>NP</div>
                  <div>
                    <div className={styles["roster-name"]}>Neesheet Parikh, DO</div>
                    <div className={styles["roster-role"]}>Founder &amp; Chief Medical Officer</div>
                  </div>
                </div>
                <div className={styles.badge}>Team Physician · USA Cricket</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}>
                    <span>Members per physician</span>
                    <span>Under 400*</span>
                  </div>
                  <div className={styles["roster-stat"]}>
                    <span>Typical visit length</span>
                    <span>45–60 min</span>
                  </div>
                  <div className={styles["roster-stat"]}>
                    <span>Direct physician access</span>
                    <span>Call / text</span>
                  </div>
                  <div className={styles["roster-stat"]}>
                    <span>Same or next-day care</span>
                    <span>Included</span>
                  </div>
                </div>
                <div className={styles["roster-foot"]}>
                  *Panel size is capped by design — ask us about current availability.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* THE PROBLEM */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Why This Exists</span>
            <h2>Most primary care is built for volume. We built ours for one person at a time.</h2>
            <p>
              The average primary care physician manages a couple thousand patients. That&apos;s
              not a knock on those doctors — it&apos;s math. Concierge medicine changes the math.
              By keeping the patient panel small, Dr. Parikh has the room to actually think
              about your case: before your visit, during it, and long after you&apos;ve gone home.
            </p>
          </div>
          <div className={`${styles["bar-compare"]} ${styles.reveal}`} data-reveal>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>Typical primary care visit</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.short}`}>~10–12 min with your doctor</div>
              </div>
            </div>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>A ParikhHealth Concierge visit</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.long}`}>
                  45–60 unhurried minutes, one physician, a real plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className={styles.alt} id="included">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>What Membership Includes</span>
            <h2>Care built around your body</h2>
            <p>
              Nutrition, weight, and movement aren&apos;t handouts here — they&apos;re an ongoing
              plan that Dr. Parikh builds with you and adjusts as your life changes.
            </p>
          </div>

          <div className={styles.grid}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
                </svg>
              </div>
              <h3>Nutrition Planning</h3>
              <p>
                A plan built for your actual life — your schedule, your cravings, your
                culture, your goals. Not a generic sheet from a binder, but something Dr.
                Parikh revisits with you and refines over time.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3v18M18 3v18M3 9h6M15 9h6M3 15h6M15 15h6" />
                </svg>
              </div>
              <h3>Weight Management</h3>
              <p>
                Sustainable change is a long conversation, not a single appointment. We
                track your progress, adjust the plan as your body responds, and stay in
                the loop between visits — because real change happens in the weeks in
                between.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" />
                </svg>
              </div>
              <h3>Exercise &amp; Movement Planning</h3>
              <p>
                Whether you&apos;re coming back from an injury, training for something
                specific, or just want to move better, your program is built with real
                sports medicine training behind it — the same expertise Dr. Parikh brings
                to elite athletes.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2 .5-.8 2-2 4-2 4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9z" />
                </svg>
              </div>
              <h3>Sports Medicine &amp; PT, Integrated</h3>
              <p>
                Injuries and performance issues are handled by a team that already knows
                you — primary care, sports medicine, and physical therapy under one roof,
                so nothing gets lost between referrals.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 3h6l1 4H8l1-4zM6 7h12l1 14H5L6 7z" />
                </svg>
              </div>
              <h3>Your Personalized Health Scorecard</h3>
              <p>
                At every visit, you leave with a clear, plain-English scorecard — where you
                stand, what&apos;s improved, what&apos;s next. No portal to dig through, no
                jargon to decode.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
              </div>
              <h3>The USA Cricket Standard</h3>
              <p>
                As team physician for a national team, Dr. Parikh is trusted with the
                health of athletes who cannot afford an off day. Concierge membership
                means your everyday care meets that same bar.
              </p>
            </div>
          </div>

          <div className={styles["grid-label"]}>Attention You Can&apos;t Get Anywhere Else</div>
          <div className={styles.grid}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h3>Longer, Unhurried Visits</h3>
              <p>
                Concierge visits run 45–60 minutes, not ten. That&apos;s enough time to
                explain what&apos;s actually going on, ask every question on your list, and
                leave with a real plan instead of a rushed prescription.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 8v4l3 2" />
                </svg>
              </div>
              <h3>A Physician Who&apos;s Still Thinking About You</h3>
              <p>
                The visit is only part of it. When you mention a supplement, a symptom, or
                a question in passing, Dr. Parikh actually looks into it — and follows up.
                That&apos;s not a slogan; it&apos;s just what happens when your doctor has
                the time to do it.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" />
                </svg>
              </div>
              <h3>Direct Access, No Phone Tree</h3>
              <p>
                Reach your care team directly — no answering service, no ten-minute hold,
                no explaining your history to someone new every time.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="3" />
                  <path d="M8 9h8M8 13h5" />
                </svg>
              </div>
              <h3>AI-Enhanced Clinical Insight</h3>
              <p>
                Dr. Parikh uses modern clinical AI tools to cross-reference your history,
                flag patterns worth a closer look, and pressure-test every plan before it
                reaches you. A second set of eyes in service of his judgment — never a
                replacement for it.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
                  <path d="M14 3v5h5" />
                </svg>
              </div>
              <h3>Research, On Your Behalf</h3>
              <p>
                Curious about a product, a diet trend, a new symptom, or a specialist you
                might need? We look into it before you ask twice — and bring you a real
                answer, not a guess.
              </p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <h3>One Physician, Every Time</h3>
              <p>
                You&apos;re not routed to whoever&apos;s available. Dr. Parikh knows your
                history, your family, and your goals — and stays with you as they evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE MESSAGE */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>The Simplest Way To Say It</span>
            <h2>We go above and beyond because we make the time to.</h2>
            <p>
              This is the easiest part of concierge medicine to explain, and the fastest
              part to feel the moment you experience it. We have time — time to think about
              your case between visits, not just during them; time to research the question
              you asked in passing; time to look into the supplement you saw online or the
              specialist you might need; time to build you a real plan and revisit it as
              your life changes. Amazing care isn&apos;t a mystery. It just takes time,
              thought, and a real relationship — and that&apos;s exactly what a small,
              dedicated panel makes possible.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* COMPARISON */}
      <section id="compare">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Side By Side</span>
            <h2>How concierge membership compares</h2>
            <p>
              Traditional primary care isn&apos;t broken because the doctors don&apos;t care
              — it&apos;s the math. Here&apos;s what changes when the math changes.
            </p>
          </div>
          <div className={styles.reveal} data-reveal style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Typical Primary Care</th>
                  <th className={styles["col-highlight"]}>ParikhHealth Concierge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Patients per physician</td>
                  <td className={styles.no}>2,000–3,000</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Under 400*</td>
                </tr>
                <tr>
                  <td>Typical visit length</td>
                  <td className={styles.no}>10–15 minutes</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>45–60 minutes</td>
                </tr>
                <tr>
                  <td>Same or next-day access</td>
                  <td className={styles.no}>Rarely</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Included</td>
                </tr>
                <tr>
                  <td>Direct physician line</td>
                  <td className={styles.no}>No</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Yes</td>
                </tr>
                <tr>
                  <td>Nutrition &amp; weight planning</td>
                  <td className={styles.no}>Referral only</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Built in, ongoing</td>
                </tr>
                <tr>
                  <td>Sports medicine + PT</td>
                  <td className={styles.no}>Separate referral</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Integrated, same team</td>
                </tr>
                <tr>
                  <td>Between-visit research &amp; follow-up</td>
                  <td className={styles.no}>Uncommon</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Standard</td>
                </tr>
                <tr>
                  <td>AI-enhanced clinical review</td>
                  <td className={styles.no}>Rare</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Standard</td>
                </tr>
                <tr>
                  <td>Personalized Health Scorecard</td>
                  <td className={styles.no}>No</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Every visit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles["table-note"]}>
            *Panel size is capped by design; confirm current figures before publishing.
            Typical primary care figures reflect general industry benchmarks, not any
            specific practice.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.alt} id="about">
        <div className={styles.wrap}>
          <div className={styles["about-grid"]}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>Meet Dr. Parikh</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>
                One physician. Every specialty your care actually needs.
              </h2>
            </div>
            <div className={styles.reveal} data-reveal>
              <p>
                Dr. Neesheet Parikh, DO is the founder and Chief Medical Officer of
                ParikhHealth, and serves as team physician for USA Cricket. His practice
                spans primary care, sports medicine, and physical therapy — brought
                together under one roof so your care never gets fragmented across
                specialists who don&apos;t talk to each other.
              </p>
              <p>
                Concierge membership is simply Dr. Parikh&apos;s answer to a question
                he&apos;s asked himself for years: what would it look like if every patient
                got the attention an elite athlete gets? Not just faster access — real
                thinking time, a real plan, and a physician who&apos;s genuinely in your
                corner.
              </p>
              <ul className={styles["credential-list"]}>
                <li>
                  <strong>Team Physician, USA Cricket</strong> — trusted with athlete health
                  at the national level.
                </li>
                <li>
                  <strong>Primary Care + Sports Medicine + Physical Therapy</strong> — one
                  team, one plan, no fragmentation.
                </li>
                <li>
                  <strong>Founder, ParikhHealth</strong> — an independent practice built
                  around the patient relationship, not a hospital system&apos;s volume
                  targets.
                </li>
              </ul>
            </div>
          </div>
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
              <h3>Does concierge membership replace my health insurance?</h3>
              <p>
                No. Your membership covers the enhanced access and services described
                above — extended visits, direct access, nutrition and weight planning, and
                more. You&apos;ll still want insurance or major medical coverage for labs,
                imaging, specialist care, and hospitalization.
              </p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>How is this different from just finding &quot;a good doctor&quot;?</h3>
              <p>
                Every doctor wants to give you their full attention — but a panel of a few
                thousand patients makes that mathematically difficult. Concierge membership
                caps how many patients Dr. Parikh sees, which is what actually makes the
                extra time possible.
              </p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>What happens if I need a specialist?</h3>
              <p>
                Dr. Parikh coordinates specialist referrals directly and stays in the loop
                on your care, rather than handing you a name and stepping away.
              </p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Is membership limited?</h3>
              <p>
                Yes — panel size is capped by design so every member actually gets the
                extra time. Reach out to check current availability.
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
            <h2>Your care team is ready when you are.</h2>
            <p>
              Membership is available for individuals, couples, and families. Schedule a
              complimentary consultation to see what&apos;s included and find the right fit.
            </p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                Request a Consultation
              </Link>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>
                Call ParikhHealth
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.disclaimer}>
        <div className={`${styles.wrap} ${styles["disclaimer-grid"]}`}>
          <div className={styles["disclaimer-brand"]}>ParikhHealth</div>
          <p className={styles["disclaimer-note"]}>
            ParikhHealth Concierge Medicine membership provides enhanced access and
            services and is not a substitute for health insurance. Health insurance or
            another coverage plan is still recommended for hospitalization, specialist
            care, laboratory work, and imaging. Sunnyvale, California.
          </p>
        </div>
      </div>
    </div>
  );
}
