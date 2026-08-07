import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./physical-therapy.module.css";

export const metadata: Metadata = {
  title: "Physical Therapy | ParikhHealth",
  description:
    "In-house physical therapy in Sunnyvale, CA — orthopedic and sports injury rehab, post-operative recovery, and pelvic floor physical therapy with Sonia Sharma, PT, Miral Patel, PT, Harshit Bhatwala, PT, and Vaishali Parab, PTA.",
};

export default function PhysicalTherapyPage() {
  return (
    <div className={styles.physicalTherapy}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>ParikhHealth Physical Therapy</span>
              <h1>One team, from the injury to the finish line.</h1>
              <p className={styles.lead}>
                Orthopedic and sports injury rehab, post-operative recovery, and
                pelvic floor physical therapy — all in-house, all coordinated with
                the same doctors who diagnosed you. No separate referral, no new
                intake paperwork, no starting your story over with someone new.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                  Book an Evaluation
                </Link>
                <a href="#conditions" className={`${styles.btn} ${styles["btn-ghost"]}`}>
                  See What We Treat
                </a>
              </div>
            </div>
            <div className={`${styles.reveal} ${styles["card-frame"]}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>PT</div>
                  <div>
                    <div className={styles["roster-name"]}>ParikhHealth Physical Therapy</div>
                    <div className={styles["roster-role"]}>In-House Recovery Team</div>
                  </div>
                </div>
                <div className={styles.badge}>4 Licensed Clinicians · One Roof</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}><span>Orthopedic &amp; sports rehab</span><span>Included</span></div>
                  <div className={styles["roster-stat"]}><span>Post-operative recovery</span><span>Included</span></div>
                  <div className={styles["roster-stat"]}><span>Pelvic floor therapy</span><span>Included</span></div>
                  <div className={styles["roster-stat"]}><span>Evaluation availability</span><span>Same week*</span></div>
                </div>
                <div className={styles["roster-foot"]}>*Most weeks — call {SITE.phone.appointments} to confirm current availability.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* WHY IN-HOUSE */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Why This Exists</span>
            <h2>Recovery shouldn&apos;t require a new referral, a new chart, and a new waiting room.</h2>
            <p>
              The typical path to physical therapy runs through a physician visit,
              a referral, and a search for an in-network clinic that&apos;s never
              seen your chart. ParikhHealth keeps it in-house: the same practice
              that diagnosed your injury or performed your pre-op clearance treats
              your recovery too, on the same medical record.
            </p>
          </div>
          <div className={`${styles["bar-compare"]} ${styles.reveal}`} data-reveal>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>Typical outside PT referral</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.short}`}>~15-day average wait for a first evaluation*</div>
              </div>
            </div>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>ParikhHealth In-House PT</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.long}`}>Often the same week — same practice, same medical record</div>
              </div>
            </div>
          </div>
          <p className={styles["table-note"]}>
            *Reflects general 2025–2026 physical therapy industry survey data on
            new-patient wait times, not any single clinic.
          </p>
        </div>
      </section>

      {/* WHAT WE TREAT */}
      <section className={styles.alt} id="conditions">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Conditions &amp; Injuries</span>
            <h2>The full picture of recovery — under one roof</h2>
            <p>
              From a sprained ankle to a post-surgical knee to pelvic floor
              dysfunction, every plan is one-on-one and built around your specific
              injury, surgery, or goals — not a generic protocol.
            </p>
          </div>

          <div className={`${styles["grid-label"]} ${styles["grid-label-first"]} ${styles.reveal}`} data-reveal>Orthopedic &amp; Sports Injuries</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Shoulder pain &amp; rotator cuff injuries</div>
            <div className={styles.chip}>Knee pain &amp; ligament injuries (ACL, MCL)</div>
            <div className={styles.chip}>Low back &amp; neck pain</div>
            <div className={styles.chip}>Hip pain &amp; impingement</div>
            <div className={styles.chip}>Ankle sprains &amp; instability</div>
            <div className={styles.chip}>Tennis &amp; golfer&apos;s elbow</div>
            <div className={styles.chip}>Tendinitis &amp; tendinopathy</div>
            <div className={styles.chip}>Plantar fasciitis</div>
            <div className={styles.chip}>Sports-related overuse injuries</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Post-Operative &amp; Post-Surgical Rehabilitation</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>ACL &amp; other ligament reconstruction</div>
            <div className={styles.chip}>Total knee &amp; hip replacement</div>
            <div className={styles.chip}>Rotator cuff repair</div>
            <div className={styles.chip}>Spine surgery recovery</div>
            <div className={styles.chip}>Fracture rehabilitation</div>
            <div className={styles.chip}>General post-surgical deconditioning</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Pelvic Floor Physical Therapy</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Urinary incontinence</div>
            <div className={styles.chip}>Pelvic pain &amp; pelvic floor dysfunction</div>
            <div className={styles.chip}>Postpartum recovery</div>
            <div className={styles.chip}>Pelvic organ prolapse</div>
            <div className={styles.chip}>Pre- and post-surgical pelvic health</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Balance, Gait &amp; General Mobility</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Balance &amp; fall-risk reduction</div>
            <div className={styles.chip}>Gait training</div>
            <div className={styles.chip}>Chronic pain management</div>
            <div className={styles.chip}>General deconditioning &amp; mobility loss</div>
          </div>
        </div>
      </section>

      {/* PELVIC FLOOR SPOTLIGHT */}
      <section id="pelvic-floor">
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>A Focused Specialty, Not An Afterthought</span>
            <h2>Pelvic floor health, led by a physical therapist who specializes in it.</h2>
            <p>
              Pelvic floor dysfunction affects far more people than the
              conversation around it suggests — after childbirth, after pelvic or
              abdominal surgery, or with no single obvious cause. Sonia Sharma, PT
              treats pelvic pain, urinary and fecal incontinence, postpartum
              recovery, and pelvic organ prolapse, and brings that same clinical
              eye to orthopedic and sports rehabilitation. She coordinates directly
              with ParikhHealth&apos;s Women&apos;s Health team, so a pelvic floor
              referral means a conversation down the hall — not a new specialty
              clinic and a new chart.
            </p>
            <Link href="/providers/sonia-sharma" className={styles["profile-link"]}>Meet Sonia Sharma, PT →</Link>
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
            <span className={styles.eyebrow}>The People Behind Your Recovery</span>
            <h2>Four clinicians. One coordinated plan.</h2>
            <p>Every ParikhHealth physical therapy plan is one-on-one and built with your medical team in the loop — not handed off to whoever&apos;s available.</p>
          </div>
          <div className={styles["team-grid"]}>
            <div className={`${styles["team-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles["team-head"]}>
                <div className={styles.monogram}>MP</div>
                <div>
                  <div className={styles["roster-name"]}>Miral Patel, PT</div>
                  <div className={styles["team-role"]}>Physical Therapist</div>
                </div>
              </div>
              <p className={styles.bio}>Specializes in sports rehabilitation and musculoskeletal recovery, designing individualized programs that get patients back to the activities they love.</p>
              <div className={styles["tag-row"]}>
                <span className={styles.tag}>Sports Rehabilitation</span>
                <span className={styles.tag}>Musculoskeletal Therapy</span>
                <span className={styles.tag}>Post-Surgical Recovery</span>
              </div>
              <Link href="/providers/miral-patel" className={styles["profile-link"]}>View Profile →</Link>
            </div>
            <div className={`${styles["team-card"]} ${styles.featured} ${styles.reveal}`} data-reveal>
              <div className={styles["team-head"]}>
                <div className={styles.monogram}>SS</div>
                <div>
                  <div className={styles["roster-name"]}>Sonia Sharma, PT</div>
                  <div className={styles["team-role"]}>Physical Therapist · Pelvic Floor Specialist</div>
                </div>
              </div>
              <p className={styles.bio}>Specializes in pelvic floor physical therapy — treating pelvic pain, incontinence, postpartum recovery, and pelvic organ prolapse — alongside orthopedic and sports rehabilitation expertise.</p>
              <div className={styles["tag-row"]}>
                <span className={styles.tag}>Pelvic Floor Physical Therapy</span>
                <span className={styles.tag}>Orthopedic Rehabilitation</span>
                <span className={styles.tag}>Sports Therapy</span>
                <span className={styles.tag}>Manual Therapy</span>
              </div>
              <Link href="/providers/sonia-sharma" className={styles["profile-link"]}>View Profile →</Link>
            </div>
            <div className={`${styles["team-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles["team-head"]}>
                <div className={styles.monogram}>HB</div>
                <div>
                  <div className={styles["roster-name"]}>Harshit Bhatwala, PT</div>
                  <div className={styles["team-role"]}>Physical Therapist</div>
                </div>
              </div>
              <p className={styles.bio}>Focused on evidence-based, personalized rehabilitation — restoring strength, mobility, and confidence after injury or surgery.</p>
              <div className={styles["tag-row"]}>
                <span className={styles.tag}>Sports Rehabilitation</span>
                <span className={styles.tag}>Post-Surgical Recovery</span>
                <span className={styles.tag}>Therapeutic Exercise</span>
              </div>
              <Link href="/providers/harshit-bhatwala" className={styles["profile-link"]}>View Profile →</Link>
            </div>
            <div className={`${styles["team-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles["team-head"]}>
                <div className={styles.monogram}>VP</div>
                <div>
                  <div className={styles["roster-name"]}>Vaishali Parab, PTA</div>
                  <div className={styles["team-role"]}>Physical Therapist Assistant</div>
                </div>
              </div>
              <p className={styles.bio}>Works alongside the PT team to deliver hands-on rehabilitation and therapeutic exercise programs tailored to each patient&apos;s recovery goals.</p>
              <div className={styles["tag-row"]}>
                <span className={styles.tag}>Therapeutic Exercise</span>
                <span className={styles.tag}>Rehabilitation Support</span>
                <span className={styles.tag}>Patient Education</span>
              </div>
              <Link href="/providers/vaishali-parab" className={styles["profile-link"]}>View Profile →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="compare">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Side By Side</span>
            <h2>In-house PT vs. the typical referral path</h2>
            <p>Outside physical therapy isn&apos;t lower quality — it&apos;s just disconnected from the physician who sent you there. Here&apos;s what changes when it&apos;s under one roof.</p>
          </div>
          <div className={styles.reveal} data-reveal style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Typical Outside PT Referral</th>
                  <th className={styles["col-highlight"]}>ParikhHealth In-House PT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time to first evaluation</td>
                  <td className={styles.no}>~15-day average wait*</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Often the same week</td>
                </tr>
                <tr>
                  <td>Shares your medical chart with your physician</td>
                  <td className={styles.no}>Rarely</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Yes — same practice, same record</td>
                </tr>
                <tr>
                  <td>New patient intake paperwork</td>
                  <td className={styles.no}>Separate practice, new forms</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>None — same patient file</td>
                </tr>
                <tr>
                  <td>Orthopedic + post-op + pelvic floor, one practice</td>
                  <td className={styles.no}>Uncommon</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Standard here</td>
                </tr>
                <tr>
                  <td>Coordination with your PCP or sports medicine physician</td>
                  <td className={styles.no}>Referral letter only</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Same building, same team</td>
                </tr>
                <tr>
                  <td>Pelvic floor specialist availability</td>
                  <td className={styles.no}>Often a separate specialty clinic</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>In-house, led by Sonia Sharma, PT</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles["table-note"]}>
            *Reflects general physical therapy industry wait-time survey data, not
            any single clinic or region.
          </p>
        </div>
      </section>

      {/* ABOUT / INTEGRATION */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={styles["about-grid"]}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>How PT Fits In</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>One practice, every step of recovery.</h2>
            </div>
            <div className={styles.reveal} data-reveal>
              <p>Physical therapy at ParikhHealth isn&apos;t a separate referral — it sits inside the same practice as your primary care, sports medicine, and women&apos;s health providers, so nothing gets lost between appointments.</p>
              <p>As team physician for USA Cricket, Dr. Neesheet Parikh brings a national-team standard of sports medicine to every orthopedic and post-operative plan built here. That same standard of coordinated, unhurried attention carries through pelvic floor care, where Sonia Sharma, PT works directly with ParikhHealth&apos;s Women&apos;s Health team on referrals.</p>
              <ul className={styles["credential-list"]}>
                <li><strong>In-House With Your Medical Team</strong> — physical therapy shares a chart and a building with your physicians, not a fax machine.</li>
                <li><strong>Sports Medicine Standard</strong> — orthopedic and post-operative rehab informed by the same expertise Dr. Parikh brings to national-team athletes.</li>
                <li><strong>Pelvic Floor, Coordinated</strong> — Sonia Sharma, PT works directly with Women&apos;s Health on pelvic floor referrals, without a separate specialty clinic.</li>
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
            <h2>Before your first visit</h2>
          </div>
          <div className={styles.reveal} data-reveal>
            <div className={styles["faq-item"]}>
              <h3>Do I need a physician referral to start physical therapy?</h3>
              <p>Not always — many insurance plans allow direct access to physical therapy. If your plan requires a referral, your physician is in the same practice, so it&apos;s a same-building conversation rather than a separate appointment somewhere else.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Is pelvic floor physical therapy only for women?</h3>
              <p>No. Pelvic floor dysfunction affects men and women, and can involve pain, incontinence, or recovery after pelvic or abdominal surgery. Sonia Sharma, PT treats patients across all of these situations.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>How soon after surgery can I start physical therapy?</h3>
              <p>It depends on the procedure and your surgeon&apos;s protocol — some post-operative plans begin within days, others after a period of rest. Your PT plan will follow your surgeon&apos;s specific guidance.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Does insurance cover physical therapy here?</h3>
              <p>Most plans include a physical therapy benefit, though specifics vary by plan and diagnosis. Reach out and we&apos;ll confirm your coverage before your first visit.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Can I be treated for a sports injury and get return-to-play clearance here?</h3>
              <p>Yes — physical therapy works directly with our sports medicine team on rehabilitation and return-to-play timelines, from the first evaluation through clearance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`} id="contact">
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Start your recovery with the team that already knows you.</h2>
            <p>Book a physical therapy evaluation with Miral, Sonia, or Harshit — same-week availability most weeks.</p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Book an Appointment</Link>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call ParikhHealth</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
