import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./athlete-wellness.module.css";

export const metadata: Metadata = {
  title: "PitchFit | Elite Cricket Athlete Care by ParikhHealth",
  description:
    "PitchFit is ParikhHealth's membership-based athlete care program, led by Dr. Neesheet Parikh, DO — Head Team Physician for USA Cricket. Direct physician access, sports physicals, EKG & concussion screening, and injury management for competitive cricket athletes.",
  alternates: { canonical: `${SITE.url}/services/athlete-wellness` },
};

export default function AthleteWellnessPage() {
  return (
    <div className={styles.athleteWellness}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>Featured Program · PitchFit</span>
              <h1>Elite cricket medicine, from the physician the national team trusts.</h1>
              <div className={styles.crease}>
                <span className={styles["crease-tick"]} /><span className={styles["crease-line"]} />
                <span className={styles["crease-label"]}>Head Team Physician, USA Cricket</span>
                <span className={styles["crease-line"]} /><span className={styles["crease-tick"]} />
              </div>
              <p className={styles.lead}>
                Dr. Neesheet Parikh, DO built his career on two disciplines most athlete-care programs
                keep separate — primary care and sports medicine — then spent over a decade putting
                both to work for competitive cricketers, culminating in six-plus years as Head Team
                Physician for USA Cricket. PitchFit brings that same standard to your training, your
                injuries, and your health, through an independent private practice built to move at the
                speed the game demands.
              </p>
              <div className={styles["hero-actions"]}>
                <a href="https://pitchfit.cricket/elite" className={`${styles.btn} ${styles["btn-primary"]}`} target="_blank" rel="noopener noreferrer">
                  Apply to PitchFit
                </a>
                <a href="#included" className={`${styles.btn} ${styles["btn-ghost"]}`}>See What&apos;s Included</a>
              </div>
            </div>
            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
              <div className={styles["roster-card"]}>
                <div className={styles["roster-top"]}>
                  <div className={styles.monogram}>NP</div>
                  <div>
                    <div className={styles["roster-name"]}>Neesheet Parikh, DO</div>
                    <div className={styles["roster-role"]}>Head Team Physician, USA Cricket</div>
                  </div>
                </div>
                <div className={styles.badge}>Double Board Certified · Sports &amp; Family Medicine</div>
                <div className={styles["roster-stats"]}>
                  <div className={styles["roster-stat"]}><span>Years with USA Cricket</span><span>6+</span></div>
                  <div className={styles["roster-stat"]}><span>Years in elite cricket care</span><span>10+</span></div>
                  <div className={styles["roster-stat"]}><span>Physician access</span><span>Direct cell &amp; email</span></div>
                  <div className={styles["roster-stat"]}><span>Visit turnaround</span><span>Same-day / next-business-day</span></div>
                </div>
                <div className={styles["roster-foot"]}>Membership is limited each year — ask us about current availability.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section style={{ paddingTop: 0, paddingBottom: "60px" }}>
        <div className={styles.wrap}>
          <div className={`${styles["grid-4"]} ${styles.reveal}`} data-reveal>
            <div className={styles["stat-card"]}>
              <div className={styles["stat-label"]}>Certification</div>
              <h3>Double Board Certified</h3>
              <p>Sports Medicine and Family Medicine, based in Sunnyvale, California.</p>
            </div>
            <div className={styles["stat-card"]}>
              <div className={styles["stat-label"]}>National Team</div>
              <h3>Head Team Physician, USA Cricket</h3>
              <p>Six-plus years traveling internationally with the national team through tours, camps, and competitions.</p>
            </div>
            <div className={styles["stat-card"]}>
              <div className={styles["stat-label"]}>Experience</div>
              <h3>10+ Years in Elite Cricket Care</h3>
              <p>Personally treated competitive cricketers from India, the West Indies, England, Pakistan, and beyond.</p>
            </div>
            <div className={styles["stat-card"]}>
              <div className={styles["stat-label"]}>Network</div>
              <h3>A Global Medical Network</h3>
              <p>Direct relationships with physiotherapists and sports physicians across the cricket world.</p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* WHAT'S INCLUDED */}
      <section className={styles.alt} id="included">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>What Membership Includes</span>
            <h2>Care built for the specific demands of the game</h2>
            <p>Every PitchFit member trains and competes with a physician who already knows their history — not a name pulled from an insurance directory.</p>
          </div>
          <div className={`${styles.grid} ${styles.reveal}`} data-reveal>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" /></svg></div>
              <h3>Led by the Head Team Physician</h3>
              <p>Your care is led directly by Dr. Parikh — the physician USA Cricket itself trusts with its national team.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" /></svg></div>
              <h3>Direct Cell &amp; Email Access</h3>
              <p>Reach Dr. Parikh directly about training, injuries, or recovery — no answering service standing in between.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div>
              <h3>Same-Day / Next-Business-Day Visits</h3>
              <p>Injuries and setbacks don&apos;t wait for a next opening three weeks out, so neither do we.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg></div>
              <h3>Full Physical &amp; Cardiac Screening</h3>
              <p>A complete pre-participation physical with EKG screening, built to the standard of national-team clearance.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 8v4l2.5 2.5" /></svg></div>
              <h3>Concussion Baseline &amp; Return-to-Play</h3>
              <p>Baseline testing before you need it, and a clear, physician-guided protocol for getting back on the pitch safely.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5l11 11M4 20l4-1 9-9-3-3-9 9-1 4zM17 3l4 4-2 2-4-4 2-2z" /></svg></div>
              <h3>Cricket-Specific Injury Care</h3>
              <p>From bowler&apos;s shoulder and stress fractures to hamstring strains — care built around the specific demands of the game, not a generic sports template.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M10 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg></div>
              <h3>Monthly Member Sessions</h3>
              <p>Ongoing sessions with Dr. Parikh and guest specialists, on the topics that matter most to competitive cricketers.</p>
            </div>
            <div className={styles["feature-card"]}>
              <div className={styles.icon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3h6l1 4H8l1-4zM6 7h12l1 14H5L6 7z" /></svg></div>
              <h3>Membership-Based, No Insurance Barriers</h3>
              <p>Care moves at the pace of the season, not the pace of a claims process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE MESSAGE */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>The Simplest Way To Say It</span>
            <h2>Primary care rigor. Sports medicine precision. A national team&apos;s standard, applied to you.</h2>
            <p>
              Most athlete-care programs are staffed by whoever&apos;s on shift. PitchFit is different
              because it&apos;s built around one physician&apos;s full range — the same doctor who
              manages your everyday health also manages your training load, your injuries, and your
              return to play, and he does it as the independent physician the USA Cricket national team
              calls its own. That&apos;s not a marketing line; it&apos;s the reason a private,
              membership-based practice can move faster than a system built for volume.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* COMPARISON */}
      <section id="compare">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Side By Side</span>
            <h2>How PitchFit compares</h2>
            <p>A typical sports physical checks a box once a year. PitchFit is an ongoing relationship with a physician who already knows your game.</p>
          </div>
          <div className={styles.reveal} data-reveal style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr><th>&nbsp;</th><th>Typical Sports Physical</th><th className={styles["col-highlight"]}>PitchFit Membership</th></tr>
              </thead>
              <tbody>
                <tr><td>Physician who treats you</td><td className={styles.no}>Whoever&apos;s available</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Dr. Parikh, every time</td></tr>
                <tr><td>Familiarity with cricket-specific injuries</td><td className={styles.no}>Rare</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Standard — 10+ years treating cricketers</td></tr>
                <tr><td>Visit access</td><td className={styles.no}>Weeks-out scheduling</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Same-day / next-business-day</td></tr>
                <tr><td>Cardiac (EKG) screening</td><td className={styles.no}>Often an extra step</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Included in every physical</td></tr>
                <tr><td>Concussion baseline &amp; return-to-play</td><td className={styles.no}>Uncommon</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Included, physician-guided</td></tr>
                <tr><td>Direct physician line</td><td className={styles.no}>No</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Yes — cell &amp; email</td></tr>
                <tr><td>Insurance billing delays</td><td className={styles.no}>Common</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>Membership-based, none</td></tr>
                <tr><td>National-team-level experience</td><td className={styles.no}>No</td><td className={`${styles.yes} ${styles["col-highlight"]}`}>6+ years, USA Cricket</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles["table-note"]}>Typical sports physical figures reflect general industry patterns, not any specific competitor or clinic — confirm phrasing before publishing.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.alt} id="about">
        <div className={styles.wrap}>
          <div className={styles["about-grid"]}>
            <div className={styles.reveal} data-reveal>
              <span className={styles.eyebrow}>Meet Dr. Parikh</span>
              <h2 style={{ fontSize: "30px", marginTop: "14px" }}>One physician, four disciplines your care actually needs.</h2>
            </div>
            <div className={styles.reveal} data-reveal>
              <p>
                Dr. Neesheet Parikh, DO is the founder and Chief Medical Officer of ParikhHealth, and
                Head Team Physician for USA Cricket. His training spans primary care and sports medicine
                — two disciplines he&apos;s spent his career refusing to treat as separate, because the
                athletes he cares for don&apos;t experience their health that way.
              </p>
              <p>
                Over more than a decade treating competitive cricketers — from junior academies to the
                national stage, from India to the West Indies to England and Pakistan — he built
                PitchFit as an independent private practice on purpose: no hospital system&apos;s volume
                targets, no insurance queue standing between an athlete and the physician who knows
                their history.
              </p>
              <ul className={styles["credential-list"]}>
                <li><strong>Primary Care</strong> — comprehensive, ongoing health management, not just the visits between injuries.</li>
                <li><strong>Sports Medicine</strong> — training load, injury prevention, and return-to-play built on real athletic-medicine training.</li>
                <li><strong>Team Physician, USA Cricket</strong> — six-plus years trusted with the national team at the sport&apos;s highest level.</li>
                <li><strong>Independent Private Practice</strong> — built around the athlete relationship, on a timeline the game actually moves at.</li>
              </ul>
            </div>
          </div>
          <div className={`${styles["note-bar"]} ${styles.reveal}`} data-reveal>
            <p>
              Not a competitive cricket athlete? Our general{" "}
              <Link href="/services/sports-medicine">Sports Medicine</Link> and{" "}
              <Link href="/services/concierge-medicine">Concierge Medicine</Link> programs bring the
              same standard of access to athletes of every sport and level.
            </p>
            <Link href="/services/sports-medicine" className={`${styles.btn} ${styles["btn-ghost"]}`}>Explore Sports Medicine</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Questions</span>
            <h2>Before you apply</h2>
          </div>
          <div className={styles.reveal} data-reveal>
            <div className={styles["faq-item"]}>
              <h3>Do I need to play at a national or elite level to join?</h3>
              <p>No. PitchFit is built around the demands of competitive cricket at every level, from junior academies to professional and national play. If you&apos;re not a cricket athlete, our general Sports Medicine and Concierge Medicine programs offer the same standard of access.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Does PitchFit membership replace my health insurance?</h3>
              <p>No. Membership covers direct physician access and the services described above. You&apos;ll still want insurance or major medical coverage for imaging, labs, hospitalization, and specialist referrals outside the program.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>How is this different from a standard sports physical?</h3>
              <p>A standard physical checks a box once a year. PitchFit is an ongoing relationship — the same physician manages your physical, your injuries, and your return-to-play, and stays reachable in between.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Is membership limited?</h3>
              <p>Yes — memberships are capped each year so every athlete gets real access to Dr. Parikh. Reach out to check current availability.</p>
            </div>
            <div className={styles["faq-item"]}>
              <h3>Where can I see the full program and apply?</h3>
              <p>The complete PitchFit platform, membership tiers, and Dr. Parikh&apos;s full story with USA Cricket live at pitchfit.cricket/elite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready to Apply?</span>
            <h2>Memberships are limited — every year, on purpose.</h2>
            <p>So every athlete who joins gets the attention they actually deserve. Explore the full PitchFit platform and apply, or call ParikhHealth with questions.</p>
            <div className={styles["hero-actions"]}>
              <a href="https://pitchfit.cricket/elite" className={`${styles.btn} ${styles["btn-primary"]}`} target="_blank" rel="noopener noreferrer">Explore PitchFit Elite</a>
              <a href={`tel:${SITE.phone.general}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>Call ParikhHealth</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
