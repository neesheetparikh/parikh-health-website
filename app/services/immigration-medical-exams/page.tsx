import type { Metadata } from "next";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import s from "./immigration.module.css";

const PATH = "/services/immigration-medical-exams";

export const metadata: Metadata = {
  title: "Immigration Medical Exams (Form I-693) in Sunnyvale, CA",
  description:
    "USCIS immigration medical exams (Form I-693) in Sunnyvale, CA with Dr. Neesheet Parikh, DO, a USCIS-designated civil surgeon. Physician-led exams for adults, on-site vaccines, transparent self-pay pricing, and fast sealed-form turnaround.",
  alternates: { canonical: `${SITE.url}${PATH}` },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is a civil surgeon, and why can't my regular doctor sign Form I-693?",
    a: "A civil surgeon is a physician specifically designated by USCIS to perform immigration medical exams — a separate authorization from a standard medical license. USCIS won't accept a Form I-693 signed by a physician without that designation. Dr. Parikh is a USCIS-designated civil surgeon.",
  },
  {
    q: "How quickly will I get my sealed form?",
    a: "The main variable is your lab work, especially the TB blood test. We prioritize your results and complete, sign, and seal your form as soon as they're back. We'll give you a realistic timeline when you book.",
  },
  {
    q: "Does insurance cover the immigration medical exam?",
    a: "Generally no. Like most civil surgeons, we offer this as a self-pay service, and we'll tell you the total cost — including any vaccines or tests — before you're charged.",
  },
  {
    q: "What if I don't have my vaccination records?",
    a: "That's common, and it doesn't stop your exam. Dr. Parikh reviews what you have, and any missing required vaccines can be given on-site. In some cases a blood test can show immunity instead.",
  },
  {
    q: "Will a past mental health diagnosis or substance use history affect my exam?",
    a: "Every exam includes a mental health and substance-use history — it's standard, not a red flag on its own. Bring any relevant records so the exam reflects your full history accurately.",
  },
  {
    q: "Do I have to file Form I-693 with my Form I-485?",
    a: "In most cases, yes. Since December 2, 2024, USCIS may reject an I-485 filed without the completed I-693. If you've already filed or received a USCIS request for the exam, bring that notice and we'll go from there.",
  },
  {
    q: "My previous green card application was denied or withdrawn. Can I reuse my old I-693?",
    a: "Usually not. Since June 2025, a Form I-693 is generally valid only for the application it was submitted with, so a new filing typically needs a new exam.",
  },
  {
    q: "Is the COVID-19 vaccine still required?",
    a: "No. The CDC removed the COVID-19 vaccination requirement for immigration medical exams in January 2025. Other vaccine requirements still apply.",
  },
  {
    q: "Do you perform immigration exams for children?",
    a: "No. Our immigration exam service is for adult applicants age 18 and older, and we don't administer childhood vaccines. If your family includes minor applicants, the USCIS civil surgeon locator can help you find a civil surgeon who sees children.",
  },
  {
    q: "Do I need a referral or to be a current ParikhHealth patient?",
    a: "No. Anyone age 18 or older who needs a Form I-693 exam can book directly — no referral needed.",
  },
  {
    q: "Is this the same as the visa medical exam done outside the U.S.?",
    a: "No. Exams abroad are done by a Department of State panel physician. If you're applying for a green card from inside the United States, you need a civil surgeon exam like this one.",
  },
  {
    q: "Do I need to fill out anything before my visit?",
    a: "You don't need to bring a blank Form I-693 — we prepare it. Just bring your ID and the records on the checklist above. We'll review the information with you before Dr. Parikh signs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalProcedure",
      "@id": `${SITE.url}${PATH}#service`,
      name: "USCIS Immigration Medical Examination (Form I-693)",
      procedureType: "https://schema.org/NoninvasiveProcedure",
      howPerformed:
        "Performed in person by a USCIS-designated civil surgeon, including physical exam, vaccination review, tuberculosis blood testing, and other CDC-required screening.",
      provider: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const Check = () => (
  <span className={s.check}>
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  </span>
);

const Icon = ({ d }: { d: string }) => (
  <div className={s.icon}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={d} />
    </svg>
  </div>
);

const CHECKLIST = [
  ["Government-issued photo ID", "A passport is preferred; a driver's license or state ID also works."],
  ["Vaccination records", "From any country, in any language. Complete records mean fewer vaccines to give — and a lower total cost."],
  ["Prior lab results, if you have them", "Including past TB tests or chest X-rays, and any proof of immunity (titers)."],
  ["Relevant medical records", "Especially for any chronic condition, past TB treatment, or mental health or substance-use history."],
  ["A list of your current medications", "Name and dose for each."],
  ["Your USCIS case details, if available", "Your A-Number and any USCIS notice that asked for a medical exam."],
];

const FEATURES = [
  {
    d: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4zM9 12l2 2 4-4",
    t: "Designated by USCIS",
    p: "Only a USCIS-designated civil surgeon can sign Form I-693. Dr. Parikh holds that designation — so your form won't be rejected over who signed it.",
  },
  {
    d: "M12 4a4 4 0 100 8 4 4 0 000-8zM4 21c0-4 3.6-7 8-7s8 3 8 7",
    t: "Your exam is with the physician",
    p: "Dr. Parikh, double board-certified in Family Medicine and Sports Medicine, performs your exam himself and reviews every result before he signs.",
  },
  {
    d: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6",
    t: "One quoted price, no surprises",
    p: "We review your records first and tell you your total — exam, lab work, and any vaccines — before you come in.",
  },
  {
    d: "M18 2l4 4M7.5 20.5L19 9l-4-4L3.5 16.5 2 22l5.5-1.5zM14 6l4 4",
    t: "Vaccines given on-site",
    p: "Missing a required vaccine? We give it the same day, so you aren't sent elsewhere and asked to come back.",
  },
  {
    d: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v5l3 3",
    t: "Fast turnaround",
    p: "We prioritize your lab results and complete your sealed form as soon as they're in — no weeks of waiting on a busy clinic's backlog.",
  },
  {
    d: "M4 19V5a2 2 0 012-2h9l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2zM14 3v5h5M8 13h8M8 17h5",
    t: "Accuracy you can count on",
    p: "Every form is checked against current USCIS and CDC requirements before it's sealed, so it isn't returned for missing or outdated information.",
  },
];

const STEPS = [
  ["01", "Book your appointment", "Call or email us to schedule. We'll confirm you need a civil surgeon exam, quote your total cost, and tell you exactly what to bring."],
  ["02", "Your exam with Dr. Parikh", "A physical exam, a review of your medical history and vaccination records, and the blood work USCIS requires — including a TB blood test (IGRA)."],
  ["03", "Vaccines and results", "Any missing required vaccines are given on-site. We track your lab results and follow up promptly if anything needs a second look."],
  ["04", "Pick up your sealed form", "Once your results are in, Dr. Parikh completes and signs Form I-693 and seals it in the USCIS-required envelope — ready for you to file."],
];

export default function ImmigrationMedicalExamsPage() {
  const phone = SITE.phone.general;
  const tel = `tel:${phone.replace(/[^0-9]/g, "")}`;
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("Immigration Medical Exam (I-693)")}`;
  const rv = (cls: string) => `${cls} ${s.reveal}`;

  return (
    <div className={s.immigration}>
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.wrap}>
          <div className={s.heroGrid}>
            <div>
              <span className={s.eyebrow}>USCIS Form I-693 · Sunnyvale, CA</span>
              <h1>Your immigration medical exam, done right the first time.</h1>
              <p className={s.lead}>
                Dr. Neesheet Parikh, DO is a USCIS-designated civil surgeon, now performing Form I-693
                immigration medical exams at ParikhHealth in Sunnyvale. A board-certified physician handles
                your exam personally — clear pricing up front, vaccines on-site, and your sealed form back to
                you fast.
              </p>
              <div className={s.heroActions}>
                <a href={tel} className={`${s.btn} ${s.btnPrimary}`}>Call {phone} to Book</a>
                <a href="#process" className={`${s.btn} ${s.btnGhost}`}>See How It Works</a>
              </div>
              <div className={s.diffStrip}>
                <div className={s.diffChip}><span className={s.dot} />USCIS-designated civil surgeon</div>
                <div className={s.diffChip}><span className={s.dot} />Fast sealed-form turnaround</div>
                <div className={s.diffChip}><span className={s.dot} />Transparent self-pay pricing</div>
              </div>
            </div>
            <div className={rv(s.cardFrame)} data-reveal>
              <div className={s.rosterCard}>
                <div className={s.rosterTop}>
                  <div className={s.monogram}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <circle cx="9" cy="10" r="2" />
                      <path d="M6 17c0-1.7 1.3-3 3-3s3 1.3 3 3M14 9h4M14 13h4" />
                    </svg>
                  </div>
                  <div>
                    <div className={s.rosterName}>Immigration Medical Exam</div>
                    <div className={s.rosterRole}>Form I-693 · Neesheet Parikh, DO</div>
                  </div>
                </div>
                <div className={s.badge}>Now Scheduling in Sunnyvale</div>
                <div className={s.rosterStats}>
                  <div className={s.rosterStat}><span>Performed by</span><span>USCIS civil surgeon</span></div>
                  <div className={s.rosterStat}><span>Who we see</span><span>Adults 18+</span></div>
                  <div className={s.rosterStat}><span>Payment</span><span>Self-pay</span></div>
                  <div className={s.rosterStat}><span>Referral needed</span><span>No</span></div>
                  <div className={s.rosterStat}><span>Visits</span><span>Exam + results</span></div>
                </div>
                <div className={s.rosterFoot}>
                  Call for current pricing — we quote your total, including any vaccines or tests, before your visit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={s.wrap}><div className={s.seam} /></div>

      {/* HOW IT WORKS */}
      <section id="process">
        <div className={s.wrap}>
          <div className={rv(s.sectionHead)} data-reveal>
            <span className={s.eyebrow}>How It Works</span>
            <h2>Your exam, in four steps</h2>
            <p>
              High-volume immigration clinics are known for long waits, surprise fees, and rushed exams. We
              designed our process around each of those pain points.
            </p>
          </div>
          <div className={s.steps}>
            {STEPS.map(([n, t, p]) => (
              <div key={n} className={rv(s.stepCard)} data-reveal>
                <span className={s.stepNum}>{n}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO BRING */}
      <section className={s.alt} id="bring">
        <div className={s.wrap}>
          <div className={s.twoCol}>
            <div>
              <div className={rv(s.sectionHead)} data-reveal style={{ marginBottom: 28 }}>
                <span className={s.eyebrow}>Before Your Visit</span>
                <h2>What to bring</h2>
                <p>Coming prepared is the single best way to keep your visit short and your cost low.</p>
              </div>
              <ul className={rv(s.checklist)} data-reveal>
                {CHECKLIST.map(([t, d]) => (
                  <li key={t}>
                    <Check />
                    <div><strong>{t}</strong>{d}</div>
                  </li>
                ))}
              </ul>
              <p className={s.note}>You don&apos;t need to bring a blank Form I-693 — we prepare the form for you.</p>
            </div>
            <div className={rv(s.cardFrame)} data-reveal>
              <div className={`${s.rosterCard} ${s.visitCard}`}>
                <h3>Visit details</h3>
                <p className={s.sub}>Everything in one place before you call.</p>
                <div className={s.rosterStats}>
                  <div className={s.rosterStat}><span>Location</span><span>{SITE.address.street}, {SITE.address.city}</span></div>
                  <div className={s.rosterStat}><span>Book by phone</span><span><a href={tel}>{phone}</a></span></div>
                  <div className={s.rosterStat}><span>Book by email</span><span><a href={mailto}>{SITE.email}</a></span></div>
                  <div className={s.rosterStat}><span>Ages</span><span>18 and older</span></div>
                  <div className={s.rosterStat}><span>Insurance</span><span>Not billed</span></div>
                  <div className={s.rosterStat}><span>Pricing</span><span>Quoted up front</span></div>
                </div>
                <div className={s.rosterFoot}>
                  Children&apos;s immigration exams and childhood vaccines are not offered at this location.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARIKHHEALTH */}
      <section id="included">
        <div className={s.wrap}>
          <div className={rv(s.sectionHead)} data-reveal>
            <span className={s.eyebrow}>Why ParikhHealth</span>
            <h2>A physician-led exam, not a paperwork mill</h2>
            <p>Your green card case is too important for a rushed exam or a form that comes back with errors.</p>
          </div>
          <div className={s.grid}>
            {FEATURES.map((f) => (
              <div key={f.t} className={rv(s.featureCard)} data-reveal>
                <Icon d={f.d} />
                <h3>{f.t}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section className={s.calloutSection}>
        <div className={s.wrap}>
          <div className={rv(s.callout)} data-reveal>
            <span className={s.eyebrow}>A Word of Caution</span>
            <h2>Make sure your doctor is actually a civil surgeon.</h2>
            <p>
              Not every clinic that advertises &ldquo;immigration physicals&rdquo; is USCIS-designated. A Form
              I-693 signed by a non-designated physician will be rejected — and you&apos;ll need to pay for a
              new exam. You can confirm any physician&apos;s status with the USCIS civil surgeon locator before
              you book. Dr. Parikh&apos;s designation is current, and we&apos;re glad to answer questions about
              it when you call.
            </p>
          </div>
        </div>
      </section>

      <div className={s.wrap}><div className={s.seam} /></div>

      {/* ABOUT */}
      <section className={s.alt} id="about">
        <div className={s.wrap}>
          <div className={s.aboutGrid}>
            <div className={s.reveal} data-reveal>
              <span className={s.eyebrow}>Your Civil Surgeon</span>
              <h2 className={s.aboutTitle}>Neesheet Parikh, DO</h2>
            </div>
            <div className={s.reveal} data-reveal>
              <p>
                Dr. Neesheet Parikh is the founder and Chief Medical Officer of ParikhHealth, an independent
                practice in Sunnyvale offering primary care, sports medicine, and physical therapy under one
                roof. He is a USCIS-designated civil surgeon and personally performs every immigration medical
                exam at the practice.
              </p>
              <p>
                Many of our own patients and their families have gone through the green card process. We know
                how much is riding on this one form, and we treat it that way.
              </p>
              <ul className={s.credentialList}>
                <li><span><strong>USCIS-designated civil surgeon</strong> — authorized to complete and sign Form I-693.</span></li>
                <li><span><strong>Double board-certified</strong> — Family Medicine and Sports Medicine.</span></li>
                <li><span><strong>Founder, ParikhHealth</strong> — a 100% independently owned practice. Ask us about his work as Head Team Physician for USA Cricket.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDE */}
      <section id="guide">
        <div className={s.wrap}>
          <div className={rv(s.sectionHead)} data-reveal>
            <span className={s.eyebrow}>The I-693 Guide</span>
            <h2>What every applicant should know</h2>
          </div>
          <div className={rv(s.prose)} data-reveal>
            <h3>What is Form I-693?</h3>
            <p>
              Form I-693, Report of Immigration Medical Examination and Vaccination Record, documents that you
              meet the health requirements for a green card. It must be completed and signed by a physician USCIS
              has specifically designated as a civil surgeon — a regular doctor, even a specialist, cannot
              complete it.
            </p>
            <h3>Who needs this exam?</h3>
            <p>
              Most people applying to adjust status to lawful permanent resident (Form I-485) from inside the
              United States need a civil surgeon exam. Some applicants — for example, certain K-1 fiancé(e) visa
              holders examined abroad — may need only a vaccination update. If you&apos;re unsure which applies to
              you, call before booking and we&apos;ll help you sort it out.
            </p>
            <h3>When should I get the exam?</h3>
            <p>
              Since December 2, 2024, USCIS may reject a Form I-485 filed without the completed Form I-693. For
              most applicants, that means completing your exam before you file — so plan ahead and build in time
              for lab results.
            </p>
            <h3>What&apos;s included in the exam?</h3>
            <p>
              The exam follows the CDC&apos;s Technical Instructions for civil surgeons: a medical history and
              physical exam; a review of your vaccination record, with any missing required vaccines given; a
              tuberculosis screening using an IGRA blood test; age-appropriate blood and urine testing for certain
              infections; and a mental health and substance-use evaluation. Dr. Parikh documents all of this on
              Form I-693.
            </p>
            <h3>Which vaccines are required?</h3>
            <p>
              USCIS requires vaccines recommended by the CDC&apos;s Advisory Committee on Immunization Practices.
              For adults, that commonly includes Tdap or Td, MMR, polio, varicella, hepatitis A and B, and
              seasonal influenza when in season, plus others depending on age. The COVID-19 vaccine has not been
              required since January 2025. Requirements change periodically, so Dr. Parikh confirms current
              guidance at the time of your exam.
            </p>
            <h3>How long is Form I-693 valid?</h3>
            <p>
              Under a USCIS policy issued in June 2025, a Form I-693 is generally valid only for the specific
              application it&apos;s submitted with. If that application is withdrawn or denied, you&apos;ll usually
              need a new exam for any future filing.
            </p>
            <h3>How do I submit the form?</h3>
            <p>
              You&apos;ll receive your Form I-693 in a sealed envelope. If you&apos;re filing on paper, do not open
              it — include it unopened with your application. If you&apos;re filing online and USCIS allows you to
              upload the form, follow USCIS&apos;s current instructions and keep the original and envelope until
              your case is decided.
            </p>
            <h3>What does it cost?</h3>
            <p>
              Immigration medical exams are a self-pay service, and most health insurance plans don&apos;t cover
              them. Your total depends mainly on how many vaccines and tests you need — which is why bringing
              complete records saves money. Call us for current pricing; we&apos;ll give you your full quote before
              your visit.
            </p>
          </div>
        </div>
      </section>

      <div className={s.wrap}><div className={s.seam} /></div>

      {/* FAQ */}
      <section id="faq">
        <div className={s.wrap}>
          <div className={rv(s.sectionHead)} data-reveal>
            <span className={s.eyebrow}>Questions</span>
            <h2>Frequently asked questions</h2>
          </div>
          <div className={rv(s.faq)} data-reveal>
            {FAQS.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${s.alt} ${s.final}`} id="contact">
        <div className={s.wrap}>
          <div className={s.reveal} data-reveal>
            <span className={s.eyebrow}>Now Scheduling</span>
            <h2>Ready to schedule your immigration medical exam?</h2>
            <p>Call or email to book. We&apos;ll confirm what you need, quote your total, and get you on Dr. Parikh&apos;s schedule.</p>
            <div className={s.heroActions}>
              <a href={tel} className={`${s.btn} ${s.btnPrimary}`}>Call {phone}</a>
              <a href={mailto} className={`${s.btn} ${s.btnGhost}`}>Email Us</a>
            </div>
            <p className={s.contactLine}>{SITE.address.full}</p>
            <p className={s.disclaimer}>
              Immigration medical exams are performed by Neesheet Parikh, DO, a USCIS-designated civil surgeon,
              for adult applicants age 18 and older. Information on this page is general guidance reflecting USCIS
              and CDC requirements as of November 2026; requirements change, and we confirm current guidance at
              your exam. ParikhHealth does not provide legal advice — please consult an immigration attorney for
              questions about your case.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
