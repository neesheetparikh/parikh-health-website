import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about ParikhHealth — appointments, insurance, concierge medicine, physical therapy, and more.",
  alternates: { canonical: `${SITE.url}/faq` },
};

const FAQS = [
  {
    category: "Appointments & Access",
    items: [
      {
        q: "How do I book an appointment at ParikhHealth?",
        a: `You can book online through ZocDoc at any time, or call us directly at ${SITE.phone.appointments} Monday through Friday, 9 AM – 4 PM. New patients are always welcome.`,
      },
      {
        q: "Are you accepting new patients?",
        a: "Yes — ParikhHealth is currently accepting new patients for primary care, sports medicine, physical therapy, and concierge medicine. All providers on our team are welcoming new patients.",
      },
      {
        q: "What are your office hours?",
        a: "We are open Monday through Friday, 9:00 AM to 4:00 PM. We are closed on weekends. Concierge and PitchFit members have extended access to Dr. Parikh outside standard hours.",
      },
      {
        q: "Do you offer same-day appointments?",
        a: "Same-day sick visits are available for established patients on a first-come, first-served basis. Concierge Medicine and PitchFit members receive guaranteed same-day or next-day availability.",
      },
      {
        q: "Do you offer telehealth visits?",
        a: "Yes, we offer telehealth appointments for select visit types — including follow-ups, medication management, and minor illness consultations. Call our office to confirm if your visit qualifies.",
      },
    ],
  },
  {
    category: "Insurance & Billing",
    items: [
      {
        q: "What insurance plans do you accept?",
        a: "ParikhHealth accepts most major PPO insurance plans including Aetna, Blue Shield, Cigna, United Healthcare, and others. We recommend calling your insurance company to confirm in-network status before your visit. For a full list, visit our Insurance page or call us at " + SITE.phone.appointments + ".",
      },
      {
        q: "Do you accept HMO or Medi-Cal plans?",
        a: "We do not currently accept HMO plans or Medi-Cal. We accept PPO insurance plans and self-pay patients.",
      },
      {
        q: "What is the cost of a visit without insurance?",
        a: "Self-pay rates vary by visit type. We offer transparent pricing for self-pay patients — please call our office at " + SITE.phone.appointments + " to get current rates for the type of visit you need.",
      },
      {
        q: "Do you bill insurance for physical therapy?",
        a: "Yes. Our in-house physical therapy team bills most major PPO insurance plans. PT visits are typically subject to your plan's deductible and copay. Please verify PT benefits with your insurance prior to your first appointment.",
      },
    ],
  },
  {
    category: "Primary Care & Sports Medicine",
    items: [
      {
        q: "What is the difference between primary care and sports medicine at ParikhHealth?",
        a: "Primary care covers your overall health — annual exams, chronic disease management, sick visits, preventive screenings, and referrals. Sports medicine focuses specifically on musculoskeletal injuries, athletic performance, injury prevention, and return-to-sport. Dr. Parikh is board-certified in both, so many patients see him for both needs in the same practice.",
      },
      {
        q: "Can Dr. Parikh be my primary care doctor AND my sports medicine doctor?",
        a: "Absolutely — this is one of the things that makes ParikhHealth unique. Dr. Parikh manages both the whole-person primary care relationship and the sports medicine side. There's no need for separate providers.",
      },
      {
        q: "Do you offer osteopathic manipulative therapy (OMT)?",
        a: "Yes. Dr. Parikh is a Doctor of Osteopathic Medicine (DO) and is trained in OMT — hands-on manipulation of the muscles, joints, and spine to improve function and reduce pain. OMT is available as part of your visit.",
      },
      {
        q: "Do you perform sports physicals?",
        a: "Yes, we offer pre-participation sports physicals for athletes of all ages, from youth to adult. These can often be done same-week. Call " + SITE.phone.appointments + " to schedule.",
      },
    ],
  },
  {
    category: "Physical Therapy",
    items: [
      {
        q: "Do I need a referral for physical therapy?",
        a: "In California, you can see a physical therapist without a physician referral for up to 12 visits or 45 days, whichever comes first. However, some insurance plans require a referral for coverage — check with your plan. Our PT team can advise you when you call.",
      },
      {
        q: "What conditions does your physical therapy team treat?",
        a: "Our PTs specialize in orthopedic and sports rehabilitation — including knee, shoulder, hip, and back injuries; post-surgical recovery; ACL and rotator cuff rehabilitation; balance and gait issues; and general musculoskeletal pain. We use evidence-based protocols and the Fit3D body scanner to track your progress.",
      },
      {
        q: "What is the Fit3D scanner?",
        a: "The Fit3D scanner is a state-of-the-art body composition and posture analysis tool. It creates a 3D model of your body to precisely track changes in composition, symmetry, and posture over time — giving our PT team objective data to measure your progress and tailor your program.",
      },
    ],
  },
  {
    category: "Concierge Medicine & PitchFit",
    items: [
      {
        q: "What is concierge medicine?",
        a: "Concierge medicine is a membership-based model where you pay a monthly or annual fee for a higher level of access and service. At ParikhHealth, concierge members get same-day availability, extended visit times, Dr. Parikh's direct phone number, and care coordination for specialists — all in addition to standard insurance billing.",
      },
      {
        q: "How much does the concierge membership cost?",
        a: "Please call our office at " + SITE.phone.appointments + " for current membership pricing. Fees vary based on membership level and coverage included.",
      },
      {
        q: "What is PitchFit?",
        a: "PitchFit is our membership-based athlete care program, led by Dr. Parikh in his role as Head Team Physician for USA Cricket. Members get direct cell access to Dr. Parikh, same-day appointments for injuries, sports physicals, cardiac and concussion screening, and return-to-sport planning. Visit pitchfit.cricket for full program details.",
      },
      {
        q: "Can I use my insurance with a concierge membership?",
        a: "Yes. Concierge membership is a separate fee for the enhanced access and service — we still bill your insurance for covered services as we normally would. The membership fee covers the relationship and access, not the clinical services.",
      },
    ],
  },
  {
    category: "Location & Logistics",
    items: [
      {
        q: "Where is ParikhHealth located?",
        a: `We are located at ${SITE.address.full}. We serve patients from Sunnyvale, Santa Clara, Mountain View, Cupertino, San Jose, and the surrounding Bay Area.`,
      },
      {
        q: "Is there parking available?",
        a: "Yes, free parking is available in the lot outside our building at 1299 Oakmead Parkway.",
      },
      {
        q: "How do I contact ParikhHealth?",
        a: `Call us at ${SITE.phone.appointments}, email us at ${SITE.email}, or use the contact form on our website. Our office is open Monday through Friday, 9 AM – 4 PM.`,
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <span className="text-white/50 text-sm font-semibold tracking-widest uppercase">
            ParikhHealth
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Everything you need to know before your first visit — and beyond.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-16">
            {FAQS.map((category) => (
              <div key={category.category}>
                <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-8 pb-4 border-b border-gray-100">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, i) => (
                    <details key={i} className="group border border-gray-100 rounded-2xl overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-medium text-[#111111] hover:bg-[#F8F7F4] transition-colors">
                        <span>{item.q}</span>
                        <ChevronDown size={18} className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-5">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="site-container-narrow text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-500 mb-8">
            Call us at {SITE.phone.appointments} or send us a message — we&apos;re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Send Us a Message <ArrowRight size={16} />
            </Link>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 border border-[#111111]/20 hover:border-[#111111] text-[#111111] font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
