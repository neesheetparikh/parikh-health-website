import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, TEAM } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./sports-medicine.module.css";

export const metadata: Metadata = {
  title: "Sports Medicine | ParikhHealth Sunnyvale CA",
  description:
    "Non-surgical sports medicine in Sunnyvale, CA from Dr. Neesheet Parikh, DO (team physician, USA Cricket) and Dr. Robert Oh, MD — orthopedic injury care, concussion management, PRP injections, sports physicals, and integrated physical therapy.",
};

const drParikh = TEAM.find((m) => m.id === "neesheet-parikh")!;
const drOh = TEAM.find((m) => m.id === "robert-oh")!;

export default function SportsMedicinePage() {
  return (
    <div className={styles.sportsMedicine}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>ParikhHealth Sports Medicine</span>
              <h1>The same sports medicine standard trusted by a national team, built into your everyday care.</h1>
              <p className={styles.lead}>
                As team physician for USA Cricket, Dr. Neesheet Parikh brings
                elite-level, non-surgical sports medicine to every patient — weekend
                athletes, student athletes, and anyone dealing with an overuse injury
                or joint pain. Evaluation, imaging coordination, injections,
                concussion management, and physical therapy all happen under one
                roof, with a physician team that includes Dr. Parikh and Dr. Robert
                Oh.
              </p>
              <div className={styles["hero-actions"]}>
                <a href="#contact" className={`${styles.btn} ${styles["btn-primary"]}`}>
                  Schedule a Visit
                </a>
                <a href="#conditions" className={`${styles.btn} ${styles["btn-ghost"]}`}>
                  See What We Treat
                </a>
              </div>
            </div>
            <div className={`${styles.reveal} ${styles["card-frame"]}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>SM</div>
                  <div>
                    <div className={styles["roster-name"]}>ParikhHealth Sports Medicine</div>
                    <div className={styles["roster-role"]}>Non-Surgical Orthopedics &amp; Concussion Care</div>
                  </div>
                </div>
                <div className={styles.badge}>Team Physician Standard · USA Cricket</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}><span>Evaluation &amp; imaging coordination</span><span>Same visit</span></div>
                  <div className={styles["roster-stat"]}><span>Physical therapy</span><span>Same building</span></div>
                  <div className={styles["roster-stat"]}><span>Concussion protocol</span><span>Physician-supervised</span></div>
                  <div className={styles["roster-stat"]}><span>Cases needing surgery</span><span>Direct specialist referral</span></div>
                  <div className={styles["roster-stat"]}><span>Sports medicine physicians</span><span>2 on staff</span></div>
                </div>
                <div className={styles["roster-foot"]}>
                  Non-surgical sports medicine — coordinated with a trusted orthopedic
                  surgeon network when surgery is the right call.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* WHY INTEGRATED */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Why This Is Different</span>
            <h2>Most injury care is a chain of separate appointments. We built ours as one visit.</h2>
            <p>
              The typical path after an injury means a primary care visit, a
              referral, a multi-week wait for a specialist, a separate imaging order,
              and a separate physical therapy referral — with your history repeated
              at every stop. Because sports medicine, primary care, and physical
              therapy live in the same practice, that chain collapses into a single,
              coordinated plan.
            </p>
          </div>
          <div className={`${styles["bar-compare"]} ${styles.reveal}`} data-reveal>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>Typical injury referral path</div>
              <div>
                <div className={styles["bar-track"]}>
                  <div className={`${styles["bar-fill"]} ${styles.short}`}>4+ separate appointments</div>
                </div>
                <div className={styles["bar-caption"]}>
                  PCP visit → referral → weeks-long specialist wait → separate imaging
                  order → separate PT referral
                </div>
              </div>
            </div>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>A ParikhHealth Sports Medicine visit</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.long}`}>
                  Physician evaluation, imaging coordination, and a PT hand-off —
                  planned in one visit, by one team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className={styles.alt} id="conditions">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Conditions We Treat</span>
            <h2>Non-surgical orthopedic care, head to toe</h2>
            <p>
              Our sports medicine team manages the full range of musculoskeletal
              injuries and overuse conditions without surgery as the default —
              reserving surgical referral for the cases that genuinely need it.
            </p>
          </div>

          <div className={`${styles["grid-label"]} ${styles["grid-label-first"]}`}>Upper Body</div>
          <div className={styles.grid}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="6" r="3" /><path d="M12 9v6M7 21l5-6 5 6M5 13l2-4M19 13l-2-4" /></svg>
              </div>
              <h3>Shoulder</h3>
              <p>Rotator cuff tendinopathy and tears, shoulder impingement, instability, and bursitis — evaluated and managed with a progressive, non-surgical plan first.</p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" /></svg>
              </div>
              <h3>Elbow &amp; Wrist</h3>
              <p>Tennis elbow, golfer&apos;s elbow, wrist tendinopathy, and racquet- or throwing-related overuse injuries.</p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3h6l1 4H8l1-4zM6 7h12l1 14H5L6 7z" /></svg>
              </div>
              <h3>Neck &amp; Spine</h3>
              <p>Mechanical low back pain, cervical strain, and sport-related spine injuries, managed conservatively and escalated only when imaging or specialist input is warranted.</p>
            </div>
          </div>

          <div className={styles["grid-label"]}>Lower Body &amp; Foot</div>
          <div className={styles.grid}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              </div>
              <h3>Hip</h3>
              <p>Hip flexor strain, bursitis, labral irritation, and overuse pain in runners and field-sport athletes.</p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a9 9 0 100 18 9 9 0 000-18zM12 8v4l3 2" /></svg>
              </div>
              <h3>Knee</h3>
              <p>Patellar tendinopathy, runner&apos;s knee, IT band syndrome, and non-operative management of meniscus and ligament injuries where appropriate.</p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" /><path d="M14 3v5h5" /></svg>
              </div>
              <h3>Ankle &amp; Foot</h3>
              <p>Ankle sprains, Achilles tendinopathy, plantar fasciitis, and turf toe — with a return-to-activity plan, not just a diagnosis.</p>
            </div>
          </div>

          <div className={styles["grid-label"]}>Overuse &amp; Soft Tissue</div>
          <div className={styles.grid}>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.tag}>Overuse</div>
              <h3>Stress Fractures &amp; Shin Splints</h3>
              <p>Load-related bone and shin pain common in runners and endurance athletes, managed with activity modification and a graded return.</p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.tag}>Overuse</div>
              <h3>Tendinopathy &amp; Bursitis</h3>
              <p>Chronic overuse pain from repetitive motion — training load errors, technique issues, and recovery gaps are addressed alongside the injury itself.</p>
            </div>
            <div className={`${styles["feature-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles.tag}>Overuse</div>
              <h3>Muscle Strains &amp; Cramping</h3>
              <p>Hamstring, calf, and groin strains, plus recurring cramping — evaluated for underlying training, hydration, or biomechanical causes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCUSSION CARE */}
      <section id="concussion">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Concussion Care</span>
            <h2>Concussion management from the sideline to the classroom</h2>
            <p>
              Concussions require a physician who understands both the medicine and
              the return-to-play timeline. Dr. Parikh&apos;s experience managing head
              injuries at the national team level shapes how every concussion is
              evaluated and cleared here.
            </p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l2.5 2.5" /></svg>
              </div>
              <h3>Initial &amp; Sideline-Style Evaluation</h3>
              <p>Same-visit assessment of a suspected head injury, including symptom scoring and a focused neurological exam.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 13h5" /></svg>
              </div>
              <h3>In-Office Cognitive &amp; Balance Testing</h3>
              <p>Structured testing tracks recovery objectively, rather than relying on symptoms alone to decide when it&apos;s safe to progress.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2z" /><path d="M14 3v5h5" /></svg>
              </div>
              <h3>Return-to-Learn Planning</h3>
              <p>Written academic accommodations and a step-by-step plan for students returning to a full classroom workload.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" /></svg>
              </div>
              <h3>Graduated Return-to-Play</h3>
              <p>A physician-supervised, stepwise progression back to full contact and competition, with formal medical clearance at the end.</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* REGENERATIVE MEDICINE */}
      <section className={styles.alt} id="regenerative">
        <div className={styles.wrap}>
          <div className={styles["split-grid"]}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>Regenerative Medicine</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>PRP injections, done in-office</h2>
            </div>
            <div className={styles.reveal} data-reveal>
              <p>
                Platelet-rich plasma (PRP) therapy uses a concentrated sample of your
                own blood&apos;s healing factors, injected directly into an injured
                tendon, ligament, or joint to support the body&apos;s own repair
                process. It&apos;s performed as an in-office procedure, typically as
                part of a broader non-surgical treatment plan rather than a
                stand-alone fix.
              </p>
              <p>
                PRP is one of several injection-based options available, alongside
                corticosteroid and joint injections, and the right tool depends on
                the specific diagnosis, timeline, and your goals.
              </p>
              <ul className={styles["credential-list"]}>
                <li><strong>Chronic tendinopathy</strong> — tennis elbow, Achilles, and patellar tendon pain that hasn&apos;t responded to rest and rehab alone.</li>
                <li><strong>Mild-to-moderate joint osteoarthritis</strong> — as part of a broader plan alongside PT and activity modification.</li>
                <li><strong>Select ligament injuries</strong> — where regenerative support may complement structured rehab.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTS PHYSICALS */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Pre-Participation Exams</span>
            <h2>Sports physicals that go beyond the checkbox</h2>
            <p>
              Whether it&apos;s a school, league, or club requirement, pre-participation
              physicals here include the same clinical judgment we&apos;d apply to any
              athlete under our care — not a rushed sign-off.
            </p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.8 4.6c-1.7-1.5-4.4-1.5-6 .2L12 7.6 9.2 4.8c-1.6-1.7-4.3-1.7-6 -.2-1.8 1.6-1.9 4.5-.2 6.2L12 19.4l9-8.6c1.7-1.7 1.6-4.6-.2-6.2z" /></svg>
              </div>
              <h3>Cardiac &amp; Family History Screening</h3>
              <p>A focused history designed to catch red flags for the conditions that actually cause sudden cardiac events in young athletes, with an EKG or cardiology referral when indicated.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" /></svg>
              </div>
              <h3>Musculoskeletal Exam</h3>
              <p>A full joint-by-joint screen for old injuries, imbalances, or flexibility limits that could put an athlete at risk in-season.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 13h5" /></svg>
              </div>
              <h3>Clearance Paperwork, Handled</h3>
              <p>Forms completed and returned in the format your school, league, or governing body requires — no chasing down a signature later.</p>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* FEMALE ATHLETE HEALTH */}
      <section className={styles.alt}>
        <div className={styles.wrap}>
          <div className={styles["split-grid"]}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>Female Athlete Health</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>Attentive care for the female athlete triad</h2>
            </div>
            <div className={styles.reveal} data-reveal>
              <p>
                The female athlete triad — also described more broadly today as
                Relative Energy Deficiency in Sport (RED-S) — describes how low
                energy availability, menstrual dysfunction, and low bone density can
                interact and compound one another in active girls and women. Because
                these three pieces are connected, catching one early often matters
                for the other two.
              </p>
              <p>
                Our sports medicine team screens for triad risk factors as part of
                routine sports physicals and injury visits, and coordinates directly
                with ParikhHealth&apos;s in-house women&apos;s health program for
                anything beyond the scope of a single visit — no outside referral
                required.
              </p>
              <ul className={styles["credential-list"]}>
                <li><strong>Low energy availability</strong> — screened through history, growth, and performance trends over time.</li>
                <li><strong>Menstrual dysfunction</strong> — evaluated alongside training load and coordinated with women&apos;s health.</li>
                <li><strong>Bone health</strong> — monitored for athletes with risk factors, including recurrent stress fractures.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COORDINATED CARE */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>How We Work Together</span>
            <h2>One team for your injury — not a folder of separate referrals</h2>
            <p>
              Sports medicine at ParikhHealth doesn&apos;t operate in isolation. Your
              physician works directly with our in-house physical therapy team on
              the rehab plan, and with a trusted network of orthopedic surgeons,
              radiologists, and other specialists whenever a case genuinely needs a
              second set of hands.
            </p>
            <ul className={styles["callout-list"]}>
              <li><strong>Physical therapy, same building:</strong> your PT plan is built with the physician who diagnosed you, not handed off cold to an outside clinic.</li>
              <li><strong>Specialist referrals, when they&apos;re the right call:</strong> surgical cases and complex imaging findings go to trusted partners, with your history and imaging already in hand.</li>
              <li><strong>One record, one plan:</strong> everyone on your care team is working from the same picture of your injury and your progress.</li>
            </ul>
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
            <span className={styles.eyebrow}>Meet the Team</span>
            <h2>Your sports medicine physicians</h2>
            <p>Two physicians, one coordinated approach to non-surgical orthopedic and sports medicine care.</p>
          </div>
          <div className={styles["team-grid"]}>
            <div className={`${styles["team-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles["team-head"]}>
                <div className={styles["team-photo"]}>
                  <Image src={drParikh.image} alt={`${drParikh.name}, ${drParikh.credentials}`} width={60} height={60} />
                </div>
                <div>
                  <div className={styles["team-name"]}>Neesheet Parikh, DO</div>
                  <div className={styles["team-role"]}>Founder &amp; Chief Medical Officer</div>
                </div>
              </div>
              <p>
                Dr. Parikh is a board-certified primary care and sports medicine
                physician and serves as team physician for USA Cricket, where he
                manages injury care, concussion protocols, and return-to-play
                decisions for athletes competing at the national level. That same
                standard shapes how he treats every patient at ParikhHealth.
              </p>
              <div className={styles["team-badges"]}>
                <span className={styles["mini-badge"]}>Team Physician · USA Cricket</span>
                <span className={styles["mini-badge"]}>Sports Medicine</span>
                <span className={styles["mini-badge"]}>Primary Care</span>
              </div>
            </div>
            <div className={`${styles["team-card"]} ${styles.reveal}`} data-reveal>
              <div className={styles["team-head"]}>
                <div className={styles["team-photo"]}>
                  <Image src={drOh.image} alt={`${drOh.name}, ${drOh.credentials}`} width={60} height={60} />
                </div>
                <div>
                  <div className={styles["team-name"]}>Robert Oh, MD</div>
                  <div className={styles["team-role"]}>Physician, Primary Care &amp; Sports Medicine</div>
                </div>
              </div>
              <p>
                Dr. Oh brings a background in military medicine and many years of
                service within the VA system, with clinical experience across
                primary care and sports medicine. That background shows up in a
                methodical, thorough approach to evaluation — and a steady bedside
                manner patients notice right away.
              </p>
              <div className={styles["team-badges"]}>
                <span className={styles["mini-badge"]}>Primary Care</span>
                <span className={styles["mini-badge"]}>Sports Medicine</span>
                <span className={styles["mini-badge"]}>Military Medicine</span>
                <span className={styles["mini-badge"]}>VA Background</span>
              </div>
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
              <h3>Do I need a referral to be seen for sports medicine?</h3>
              <p>No — you can schedule directly with our sports medicine team, whether you&apos;re an established patient or new to the practice.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Do you only treat competitive or elite athletes?</h3>
              <p>Not at all. Most of what we see day to day is weekend athletes, people returning to exercise, and anyone dealing with a nagging overuse injury — the same clinical approach applies regardless of level.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>What happens if I need surgery?</h3>
              <p>If your case is better served by a surgical approach, we&apos;ll coordinate a referral directly with a trusted orthopedic surgeon and share your history and imaging, rather than sending you off to start over elsewhere.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Is PRP covered by insurance?</h3>
              <p>Coverage for PRP and other regenerative treatments varies by plan and diagnosis. We&apos;ll walk through your specific situation and any out-of-pocket costs before proceeding.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>How do concussion clearances work with my child&apos;s school or team?</h3>
              <p>We follow a structured, physician-supervised return-to-learn and return-to-play protocol and provide the documentation your school or league requires at each stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`} id="contact">
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Let&apos;s get you evaluated and moving again.</h2>
            <p>Schedule a sports medicine visit with Dr. Parikh or Dr. Oh — same practice, same coordinated team, from evaluation through rehab.</p>
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
