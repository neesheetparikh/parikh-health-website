import type { Metadata } from "next";
import { SITE } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import FaqInteractive, { type FaqCategory } from "@/components/faq/FaqInteractive";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about ParikhHealth — appointments, insurance, primary care, sports medicine, physical therapy, concierge medicine, and more.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const CATEGORIES: FaqCategory[] = [
  {
    id: "appointments",
    label: "Appointments & Access",
    items: [
      {
        q: "How do I book an appointment?",
        keywords: "book appointment schedule",
        a: (
          <>
            Book online anytime through{" "}
            <a href="/appointments" target="_blank" rel="noopener">
              ZocDoc
            </a>
            , or call our office at{" "}
            <a href={`tel:${SITE.phone.appointments}`}>{SITE.phone.appointments}</a> Monday through
            Friday, 9 AM – 4 PM. New patients are always welcome.
          </>
        ),
      },
      {
        q: "Are you accepting new patients?",
        keywords: "accepting new patients",
        a: "Yes. Every provider on our team — primary care, sports medicine, physical therapy, and concierge medicine — is currently welcoming new patients.",
      },
      {
        q: "What are your office hours?",
        keywords: "office hours open closed weekend",
        a: "We're open Monday through Friday, 9:00 AM to 4:00 PM, and closed on weekends. Concierge Medicine and PitchFit members have extended access to Dr. Parikh outside these hours.",
      },
      {
        q: "Do you offer same-day appointments?",
        keywords: "same day sick visit urgent",
        a: "Same-day sick visits are available for established patients on a first-come, first-served basis. Concierge Medicine and PitchFit members receive guaranteed same-day or next-day availability.",
      },
      {
        q: "Do you offer telehealth visits?",
        keywords: "telehealth virtual video visit",
        a: "Yes, for select visit types — including follow-ups, medication management, and minor illness consultations. Call our office to confirm whether your visit qualifies.",
      },
    ],
  },
  {
    id: "insurance",
    label: "Insurance & Billing",
    items: [
      {
        q: "What insurance plans do you accept?",
        keywords: "insurance plans accepted ppo aetna blue shield cigna united",
        a: (
          <>
            We accept most major PPO plans, including Aetna, Blue Shield, Cigna, and United Healthcare.
            We recommend confirming in-network status with your insurer before your visit — call us at{" "}
            <a href={`tel:${SITE.phone.appointments}`}>{SITE.phone.appointments}</a> for a full list.
          </>
        ),
      },
      {
        q: "Do you accept HMO or Medi-Cal plans?",
        keywords: "hmo medi-cal medicaid",
        a: "Not currently. We accept PPO insurance plans and self-pay patients.",
      },
      {
        q: "What does a visit cost without insurance?",
        keywords: "cost self pay price without insurance",
        a: (
          <>
            Self-pay rates vary by visit type. We keep our self-pay pricing transparent — call{" "}
            <a href={`tel:${SITE.phone.appointments}`}>{SITE.phone.appointments}</a> for current rates
            for the visit you need.
          </>
        ),
      },
      {
        q: "Do you bill insurance for physical therapy?",
        keywords: "physical therapy insurance billed deductible copay",
        a: "Yes. Our in-house physical therapy team bills most major PPO plans. PT visits are typically subject to your plan's deductible and copay, so we recommend verifying your PT benefits before your first appointment.",
      },
    ],
  },
  {
    id: "primary-sports",
    label: "Primary Care & Sports Medicine",
    items: [
      {
        q: "What's the difference between primary care and sports medicine here?",
        keywords: "difference primary care sports medicine",
        a: "Primary care covers your overall health — annual exams, chronic disease management, sick visits, preventive screenings, and referrals. Sports medicine focuses on musculoskeletal injuries, athletic performance, injury prevention, and return-to-sport. Our physicians are trained in both, so many patients get both kinds of care from the same team.",
      },
      {
        q: "What does it mean that Dr. Parikh is team physician for USA Cricket?",
        keywords: "dr parikh usa cricket team physician credentials",
        a: "Dr. Neesheet Parikh serves as team physician for USA Cricket, managing the health and performance of athletes competing at the national level — the same standard of injury care, screening, and return-to-play judgment he brings to every patient at ParikhHealth.",
      },
      {
        q: "Can one doctor be both my primary care and my sports medicine physician?",
        keywords: "same doctor primary care and sports medicine",
        a: "Yes — this is core to how ParikhHealth is built. Our physicians manage both the whole-person primary care relationship and the sports medicine side, so you don't need to see separate providers for each.",
      },
      {
        q: "Do you offer osteopathic manipulative therapy (OMT)?",
        keywords: "osteopathic manipulative therapy omt do",
        a: "Yes. Dr. Parikh is a Doctor of Osteopathic Medicine (DO) trained in OMT — hands-on treatment of the muscles, joints, and spine to improve function and reduce pain — available as part of your visit.",
      },
      {
        q: "Do you perform sports physicals?",
        keywords: "sports physical pre-participation",
        a: (
          <>
            Yes, for athletes of all ages, youth through adult. These can often be scheduled the same
            week — call <a href={`tel:${SITE.phone.appointments}`}>{SITE.phone.appointments}</a> to
            book.
          </>
        ),
      },
      {
        q: "Is ParikhHealth part of a hospital system?",
        keywords: "private practice independent not hospital system",
        a: "No — ParikhHealth is an independent private practice. That independence is deliberate: it lets our physicians make decisions based on what's right for you, not a system's volume targets.",
      },
    ],
  },
  {
    id: "pt",
    label: "Physical Therapy",
    items: [
      {
        q: "Do I need a referral for physical therapy?",
        keywords: "referral required physical therapy direct access",
        a: "In California, you can see a physical therapist without a physician referral for up to 12 visits or 45 days, whichever comes first. Some insurance plans still require a referral for coverage, so check with your plan — our PT team can advise you when you call.",
      },
      {
        q: "What conditions does your physical therapy team treat?",
        keywords: "conditions treated knee shoulder hip back acl rotator cuff",
        a: "Our PTs specialize in orthopedic and sports rehabilitation — knee, shoulder, hip, and back injuries; post-surgical recovery; ACL and rotator cuff rehab; balance and gait issues; and general musculoskeletal pain. Progress is tracked against evidence-based protocols throughout your plan of care.",
      },
      {
        q: "Do you offer pelvic floor physical therapy?",
        keywords: "pelvic floor women's health pt",
        a: "Yes, our physical therapy team includes a pelvic floor specialist for patients dealing with pelvic pain, postpartum recovery, and related conditions. Call our office to ask about scheduling with the right PT for your needs.",
      },
    ],
  },
  {
    id: "womens-integrative",
    label: "Women's Health & Integrative Medicine",
    items: [
      {
        q: "Who provides women's health care at ParikhHealth?",
        keywords: "women's health who provides care",
        a: "Women's health is woven into care across our whole primary care team, rather than routed to a single specialist — so it's part of the same relationship you already have with your provider, not a separate visit with someone new.",
      },
      {
        q: "What is integrative medicine, and is it available here?",
        keywords: "integrative medicine ayurvedic omt",
        a: "Yes. Our integrative medicine approach combines conventional care with complementary approaches — including Ayurvedic medicine and osteopathic manipulative treatment — for patients who want a broader set of tools alongside standard primary care.",
      },
    ],
  },
  {
    id: "concierge",
    label: "Concierge Medicine & PitchFit",
    items: [
      {
        q: "What is concierge medicine?",
        keywords: "what is concierge medicine membership",
        a: "Concierge medicine is a membership-based model: you pay a monthly or annual fee for a higher level of access and service. ParikhHealth concierge members get same-day availability, extended visit times, a direct line to Dr. Parikh, and coordinated specialist care — in addition to standard insurance billing for clinical services.",
      },
      {
        q: "How much does concierge membership cost?",
        keywords: "concierge membership cost price how much",
        a: (
          <>
            Call our office at <a href={`tel:${SITE.phone.appointments}`}>{SITE.phone.appointments}</a>{" "}
            for current membership pricing — fees vary by membership level and what&apos;s included.
          </>
        ),
      },
      {
        q: "What is PitchFit?",
        keywords: "pitchfit cricket athlete program",
        a: (
          <>
            PitchFit is our membership-based athlete care program, led by Dr. Parikh in his role as team
            physician for USA Cricket. Members get direct access to Dr. Parikh, same-day injury
            appointments, sports physicals, cardiac and concussion screening, and return-to-sport
            planning. Full program details are at{" "}
            <a href="https://pitchfit.cricket" target="_blank" rel="noopener">
              pitchfit.cricket
            </a>
            .
          </>
        ),
      },
      {
        q: "Can I use my insurance alongside a concierge membership?",
        keywords: "concierge insurance both together",
        a: "Yes. The membership fee is separate from — and in addition to — your insurance. We still bill your insurance for covered clinical services as usual; the membership covers the enhanced access and relationship.",
      },
    ],
  },
  {
    id: "location",
    label: "Location & Logistics",
    items: [
      {
        q: "Where is ParikhHealth located?",
        keywords: "where located address sunnyvale",
        a: (
          <>
            We&apos;re at{" "}
            <a href={SITE.address.mapsUrl} target="_blank" rel="noopener">
              {SITE.address.full}
            </a>
            , serving patients from Sunnyvale, Santa Clara, Mountain View, Cupertino, San Jose, and the
            wider Bay Area.
          </>
        ),
      },
      {
        q: "Is there parking available?",
        keywords: "parking available free",
        a: "Yes, free parking is available in the lot outside our building.",
      },
      {
        q: "How do I contact ParikhHealth?",
        keywords: "contact phone email support",
        a: (
          <>
            Call <a href={`tel:${SITE.phone.appointments}`}>{SITE.phone.appointments}</a>, email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>, or use the contact form on our website.
            Our office is open Monday through Friday, 9 AM – 4 PM.
          </>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className={styles.faq}>
      <RevealObserver />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={`${styles["hero-inner"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>Frequently Asked Questions</span>
            <h1>Everything you need to know before your first visit — and beyond.</h1>
            <p className={styles.lead}>
              ParikhHealth is an independent, physician-led practice offering primary care, sports
              medicine, physical therapy, and more under one roof — led by Dr. Neesheet Parikh, team
              physician for USA Cricket. Search below or browse by topic.
            </p>
          </div>
        </div>
      </section>

      <FaqInteractive categories={CATEGORIES} />

      <div className={styles.wrap}><div className={styles.seam} /></div>

      {/* FINAL CTA */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles.callout} ${styles.reveal}`} data-reveal>
            <div>
              <span className={styles.eyebrow} style={{ color: "var(--teal-bright)" }}>
                Still Have Questions?
              </span>
              <h2>Our team is happy to talk it through.</h2>
              <p>Call our office or send a message — a real person from the ParikhHealth team will get back to you.</p>
            </div>
            <div className={styles["callout-actions"]}>
              <a href="/contact" className={`${styles.btn} ${styles["btn-primary"]}`}>Send Us a Message</a>
              <a href="/appointments" className={`${styles.btn} ${styles["btn-ghost"]}`}>Book an Appointment</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
