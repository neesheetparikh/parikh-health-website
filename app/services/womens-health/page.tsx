import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, TEAM } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./womens-health.module.css";

export const metadata: Metadata = {
  title: "Women's Health | ParikhHealth Sunnyvale CA",
  description:
    "Women's health in Sunnyvale, CA — well-woman exams, contraception, PCOS, menopause management, and pelvic floor physical therapy, integrated into every ParikhHealth primary care visit with Dr. Neesheet Parikh, DO, Dr. Robert Oh, MD, and Mansi Parikh, DPT, AP.",
};

const drParikh = TEAM.find((m) => m.id === "neesheet-parikh")!;
const drOh = TEAM.find((m) => m.id === "robert-oh")!;
const mansi = TEAM.find((m) => m.id === "mansi-parikh")!;

export default function WomensHealthPage() {
  return (
    <div className={styles.womensHealth}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>ParikhHealth Women&apos;s Health</span>
              <h1>Women&apos;s health, treated like the specialty it actually is.</h1>
              <p className={styles.lead}>
                From your first well-woman exam through perimenopause and beyond,
                every ParikhHealth primary care visit includes women&apos;s health —
                not squeezed aside for a separate referral. Pelvic floor physical
                therapy and integrative, Ayurvedic-informed support sit on the same
                team, in the same building.
              </p>
              <div className={styles["hero-actions"]}>
                <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>
                  Request an Appointment
                </Link>
                <a href="#treat" className={`${styles.btn} ${styles["btn-ghost"]}`}>
                  See What We Treat
                </a>
              </div>
            </div>
            <div className={`${styles.reveal} ${styles["card-frame"]}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                  </div>
                  <div>
                    <div className={styles["roster-name"]}>Women&apos;s Health, Every Visit</div>
                    <div className={styles["roster-role"]}>Every ParikhHealth Provider</div>
                  </div>
                </div>
                <div className={styles.badge}>Integrated Into Primary Care</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}><span>Pelvic floor PT</span><span>In-house, same building</span></div>
                  <div className={styles["roster-stat"]}><span>Integrative support</span><span>Ayurvedic practitioner on team</span></div>
                  <div className={styles["roster-stat"]}><span>New patient availability</span><span>Most weeks</span></div>
                </div>
                <div className={styles["roster-foot"]}>Care provided by Dr. Neesheet Parikh, DO, Dr. Robert Oh, MD, and our full primary care team.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* WHY THIS EXISTS */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Why This Exists</span>
            <h2>Women&apos;s concerns get squeezed into ten minutes, then handed off. We built a program instead.</h2>
            <p>
              In most primary care visits, a hormonal, pelvic, or mood-related
              concern has to compete for time with everything else on the checklist
              — and then gets referred out to a specialist with a weeks-long wait.
              At ParikhHealth, every provider is equipped to address women&apos;s
              health as part of your regular visit, backed by an in-house physical
              therapy team, so concerns get addressed instead of deferred.
            </p>
          </div>
          <div className={`${styles["bar-compare"]} ${styles.reveal}`} data-reveal>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>A concern, most places</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.short}`}>Squeezed in, referred out</div>
              </div>
            </div>
            <div className={styles["bar-row"]}>
              <div className={styles["bar-label"]}>A ParikhHealth Women&apos;s Health visit</div>
              <div className={styles["bar-track"]}>
                <div className={`${styles["bar-fill"]} ${styles.long}`}>Dedicated visit, guideline-based plan, in-house pelvic floor PT — same team, same building</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE TREAT */}
      <section className={styles.alt} id="treat">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>What We Treat</span>
            <h2>Comprehensive care, organized around your actual life stage</h2>
            <p>We follow current USPSTF, ACOG, and ACR guidelines and build your screening schedule and plan around your age, history, and goals — not a generic checklist.</p>
          </div>

          <div className={`${styles["grid-label"]} ${styles["grid-label-first"]} ${styles.reveal}`} data-reveal>Preventive &amp; Wellness</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Annual well-woman exams</div>
            <div className={styles.chip}>Pap smears &amp; cervical cancer screening</div>
            <div className={styles.chip}>Clinical breast exams &amp; risk assessment</div>
            <div className={styles.chip}>Osteoporosis screening (DEXA)</div>
            <div className={styles.chip}>STI screening</div>
            <div className={styles.chip}>HPV, Tdap, flu, RSV &amp; COVID-19 vaccines</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Reproductive &amp; Gynecologic</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Contraception — pill, patch, ring, IUD, Nexplanon</div>
            <div className={styles.chip}>Painful or abnormal periods</div>
            <div className={styles.chip}>PCOS — diagnosis &amp; metabolic management</div>
            <div className={styles.chip}>PMS &amp; PMDD</div>
            <div className={styles.chip}>Vaginitis &amp; recurrent UTIs</div>
            <div className={styles.chip}>Endometriosis &amp; fibroids, co-managed with OB/GYN</div>
            <div className={styles.chip}>Ovarian cysts — monitoring &amp; referral</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Menopause &amp; Hormones</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Perimenopause &amp; menopause management</div>
            <div className={styles.chip}>Genitourinary syndrome of menopause</div>
            <div className={styles.chip}>Low libido &amp; sexual dysfunction</div>
            <div className={styles.chip}>Premature ovarian insufficiency</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Pregnancy-Adjacent Care</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Preconception counseling</div>
            <div className={styles.chip}>Prenatal labs &amp; first-trimester coordination</div>
            <div className={styles.chip}>Postpartum depression &amp; anxiety screening</div>
            <div className={styles.chip}>Lactation support &amp; referral</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Mental Health, Women-Specific</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Postpartum depression &amp; anxiety</div>
            <div className={styles.chip}>Perinatal mood disorders</div>
            <div className={styles.chip}>Cycle-related &amp; perimenopausal mood changes</div>
            <div className={styles.chip}>Eating disorder evaluation &amp; referral</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Cardiometabolic, Women-Specific</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Hypertension, incl. pregnancy-related history</div>
            <div className={styles.chip}>Metabolic syndrome &amp; insulin resistance</div>
            <div className={styles.chip}>Thyroid disorders</div>
            <div className={styles.chip}>Iron-deficiency &amp; other anemias</div>
          </div>

          <div className={`${styles["grid-label"]} ${styles.reveal}`} data-reveal>Musculoskeletal, Women-Specific</div>
          <div className={`${styles["chip-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles.chip}>Osteoporosis &amp; osteopenia management</div>
            <div className={styles.chip}>Hypermobility syndromes (EDS)</div>
            <div className={styles.chip}>Fibromyalgia</div>
            <div className={styles.chip}>Frozen shoulder</div>
          </div>
        </div>
      </section>

      {/* PELVIC FLOOR SPOTLIGHT */}
      <section id="pelvic-floor">
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>A Focused Specialty, Not An Afterthought</span>
            <h2>Pelvic floor concerns, co-managed under one roof.</h2>
            <p>
              Urinary incontinence, pelvic organ prolapse, and interstitial
              cystitis are common — and too often left untreated because the
              referral to outside pelvic PT takes weeks to even get scheduled. At
              ParikhHealth, Sonia Sharma, PT specializes in pelvic floor physical
              therapy in the same building as your women&apos;s health visit, so a
              referral is a conversation down the hall, not a fax to a stranger.
            </p>
            <Link href="/services/physical-therapy" className={styles["callout-link"]}>More on our Physical Therapy team →</Link>
          </div>
        </div>
      </section>
      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* CORE MESSAGE */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal style={{ maxWidth: "720px" }}>
            <span className={styles.eyebrow}>The Simplest Way To Say It</span>
            <h2>You shouldn&apos;t have to explain your body to a new doctor every time.</h2>
            <p>
              One provider, one chart, across every stage — from a Pap smear in
              your 20s to hormone therapy in your 50s. Your pelvic floor referral,
              your mental health screening, your lifestyle plan: already built into
              the same team instead of scattered across four different offices you
              have to introduce yourself to all over again.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className={styles.alt} id="compare">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Side By Side</span>
            <h2>How women&apos;s health at ParikhHealth compares</h2>
            <p>This isn&apos;t about any one clinic doing a bad job — it&apos;s about whether women&apos;s health has a dedicated home, or has to compete for time on a general checklist.</p>
          </div>
          <div className={styles.reveal} data-reveal style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Typical Primary Care</th>
                  <th className={styles["col-highlight"]}>ParikhHealth Women&apos;s Health</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pelvic floor physical therapy</td>
                  <td className={styles.no}>Outside referral, weeks-long wait</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>In-house, same building</td>
                </tr>
                <tr>
                  <td>Mental health screening</td>
                  <td className={styles.no}>Separate referral</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Integrated, cycle- &amp; postpartum-aware</td>
                </tr>
                <tr>
                  <td>Integrative &amp; lifestyle support</td>
                  <td className={styles.no}>Not typically offered</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Ayurvedic practitioner on team</td>
                </tr>
                <tr>
                  <td>OB/GYN coordination</td>
                  <td className={styles.no}>Fragmented handoff</td>
                  <td className={`${styles.yes} ${styles["col-highlight"]}`}>Coordinated, continuity maintained</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles["table-note"]}>*Typical primary care comparisons reflect general industry patterns, not any specific practice.</p>
        </div>
      </section>

      {/* TEAM */}
      <section id="team">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Meet Your Women&apos;s Health Team</span>
            <h2>The people who&apos;ll actually know your history</h2>
            <p>Every ParikhHealth primary care provider handles women&apos;s health as part of your regular visit — with added integrative and Ayurvedic support from Mansi Parikh, DPT, AP.</p>
          </div>
          <div className={`${styles["team-grid"]} ${styles.reveal}`} data-reveal>
            <div className={styles["team-card"]}>
              <div className={styles["team-photo"]}>
                <Image src={drParikh.image} alt={`${drParikh.name}, ${drParikh.credentials}`} width={76} height={76} />
              </div>
              <div className={styles["team-name"]}>Neesheet Parikh, DO</div>
              <div className={styles["team-role"]}>Physician — Family Medicine &amp; Sports Medicine</div>
              <p className={styles["team-bio"]}>Dr. Parikh brings a whole-body, osteopathic approach to primary care — including the women&apos;s health concerns that come up as part of any regular visit, from preventive screenings to hormonal questions.</p>
              <div className={styles["team-tags"]}>
                <span className={styles["team-tag"]}>Family Medicine</span>
                <span className={styles["team-tag"]}>Women&apos;s Health</span>
                <span className={styles["team-tag"]}>Sports Medicine</span>
              </div>
            </div>
            <div className={styles["team-card"]}>
              <div className={styles["team-photo"]}>
                <Image src={drOh.image} alt={`${drOh.name}, ${drOh.credentials}`} width={76} height={76} />
              </div>
              <div className={styles["team-name"]}>Robert Oh, MD</div>
              <div className={styles["team-role"]}>Physician — Family Medicine &amp; Sports Medicine</div>
              <p className={styles["team-bio"]}>Dr. Oh provides comprehensive primary care for patients of all ages, folding women&apos;s health screening and concerns into the same visit rather than a separate referral.</p>
              <div className={styles["team-tags"]}>
                <span className={styles["team-tag"]}>Family Medicine</span>
                <span className={styles["team-tag"]}>Women&apos;s Health</span>
                <span className={styles["team-tag"]}>Sports Medicine</span>
              </div>
            </div>
            <div className={styles["team-card"]}>
              <div className={styles["team-photo"]}>
                <Image src={mansi.image} alt={`${mansi.name}, ${mansi.credentials}`} width={76} height={76} />
              </div>
              <div className={styles["team-name"]}>Mansi Parikh, DPT, AP</div>
              <div className={styles["team-role"]}>Integrative &amp; Ayurvedic Medicine Practitioner</div>
              <p className={styles["team-bio"]}>A Doctor of Physical Therapy and certified Ayurvedic Practitioner, Mansi offers integrative support alongside your clinical care — personalized nutrition, herbal guidance, and lifestyle management built specifically around women&apos;s health.</p>
              <div className={styles["team-tags"]}>
                <span className={styles["team-tag"]}>Ayurvedic Medicine</span>
                <span className={styles["team-tag"]}>Women&apos;s Health</span>
                <span className={styles["team-tag"]}>Lifestyle Management</span>
              </div>
            </div>
          </div>
          <p className={`${styles["team-note"]} ${styles.reveal}`} data-reveal><strong>Pelvic floor care</strong> is co-managed in-house with Sonia Sharma, PT — all under the same roof and the same chart.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.alt} id="faq">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Questions</span>
            <h2>Before your first visit</h2>
          </div>
          <div className={styles.reveal} data-reveal>
            <div className={styles["faq-item"]}>
              <h3>Does this replace my OB/GYN?</h3>
              <p>No. This is primary-level women&apos;s health care. Complex gynecologic conditions, surgical needs, and obstetric delivery are referred to and coordinated with your OB/GYN — we stay in the loop rather than handing off and stepping away.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Do you handle pregnancy care?</h3>
              <p>We support the periods around pregnancy — preconception counseling, early prenatal lab coordination, and postpartum mental health screening — while your OB/GYN manages prenatal care and delivery.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Do I need to see a specific provider for women&apos;s health concerns?</h3>
              <p>No — every ParikhHealth primary care provider addresses women&apos;s health as part of your regular visit. If something needs a specialist&apos;s ongoing focus, we&apos;ll coordinate that together.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Is pelvic floor physical therapy only for postpartum patients?</h3>
              <p>No — it also treats prolapse, incontinence, and pelvic pain unrelated to childbirth, at any age.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.final} id="contact">
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Your women&apos;s health deserves its own appointment — not a leftover ten minutes.</h2>
            <p>Book your next primary care visit — women&apos;s health is part of it — or schedule an integrative consult with Mansi Parikh, DPT, AP.</p>
            <div className={styles["hero-actions"]}>
              <Link href="/appointments" className={`${styles.btn} ${styles["btn-primary"]}`}>Request an Appointment</Link>
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call ParikhHealth</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
