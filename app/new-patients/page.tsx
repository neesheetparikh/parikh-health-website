import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Clock, MapPin, Calendar } from "lucide-react";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "New Patients | What to Expect",
  description: "New to ParikhHealth? Here's everything you need to know before your first visit — what to bring, what to expect, insurance info, and how to book.",
  alternates: { canonical: `${SITE.url}/new-patients` },
};

const WHAT_TO_BRING = [
  "Photo ID (driver's license or passport)",
  "Insurance card (front and back)",
  "List of current medications and dosages",
  "List of known allergies",
  "Previous medical records (if available — not required for your first visit)",
  "Referral form (if required by your insurance plan)",
  "Payment method for any copays or self-pay fees",
];

const STEPS = [
  {
    step: "01",
    title: "Book Your Appointment",
    desc: "Schedule online through ZocDoc or call us at " + SITE.phone.appointments + ". Let us know you're a new patient and what brings you in.",
  },
  {
    step: "02",
    title: "Complete Intake Forms",
    desc: "You'll receive a link to complete your new patient paperwork online before your visit. This saves time and lets your provider review your history in advance.",
  },
  {
    step: "03",
    title: "Your First Visit",
    desc: "Plan to arrive 10 minutes early. Your first visit is unhurried — we want to get to know you, not just your chief complaint. Expect a thorough review of your health history and goals.",
  },
  {
    step: "04",
    title: "Your Care Plan",
    desc: "Before you leave, you'll have a clear understanding of next steps — whether that's labs, a follow-up, a referral, or a treatment plan. We don't leave you guessing.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <span className="text-white/50 text-sm font-semibold tracking-widest uppercase">
            Welcome to ParikhHealth
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            New Patient Information
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            We&apos;re so glad you found us. Here&apos;s everything you need to know before your first visit.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="mb-16">
            <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
              Getting Started
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#111111] mt-2">
              Your First Visit in 4 Steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {STEPS.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-serif font-semibold text-gray-100 mb-4">{s.step}</div>
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-3">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* What to bring */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-6">
                What to Bring
              </h2>
              <ul className="space-y-3">
                {WHAT_TO_BRING.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical info */}
            <div className="space-y-6">
              <div className="bg-[#F8F7F4] rounded-2xl p-7">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-5">
                  Visit Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#111111]">Location</p>
                      <p className="text-sm text-gray-500">{SITE.address.full}</p>
                      <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#111111] underline mt-1 block">Get directions</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#111111]">Hours</p>
                      <p className="text-sm text-gray-500">Monday – Friday: 9:00 AM – 4:00 PM</p>
                      <p className="text-sm text-gray-500">Saturday – Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-[#111111]">Phone</p>
                      <a href={`tel:${SITE.phone.appointments}`} className="text-sm text-gray-500 hover:text-[#111111] transition-colors">{SITE.phone.appointments}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] rounded-2xl p-7 text-white">
                <h3 className="font-serif text-xl font-semibold mb-3">Ready to Book?</h3>
                <p className="text-sm text-white/70 mb-5">
                  We are currently accepting new patients across all services.
                </p>
                <div className="space-y-3">
                  <a
                    href={SITE.booking.zocdocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-[#111111] font-medium px-5 py-3 rounded-full text-sm hover:bg-white/90 transition-colors"
                  >
                    <Calendar size={14} /> Book Online
                  </a>
                  <a
                    href={`tel:${SITE.phone.appointments}`}
                    className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-medium px-5 py-3 rounded-full text-sm transition-colors"
                  >
                    <Phone size={14} /> Call {SITE.phone.appointments}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance quick note */}
      <section className="bg-[#F8F7F4] py-16">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-2">
                Questions About Insurance?
              </h2>
              <p className="text-gray-500 text-sm">
                We accept most major PPO plans. Verify your coverage before your first visit.
              </p>
            </div>
            <Link
              href="/insurance"
              className="shrink-0 inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
            >
              View Accepted Plans <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
