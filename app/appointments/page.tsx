import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, MapPin, CheckCircle2, ArrowRight, Video, Building2, Stethoscope, ShieldCheck, MessageSquare, Activity } from "lucide-react";
import { SITE, ACCEPTED_PLANS, TEAM } from "@/content/site";
import ZocdocBookButton from "@/components/booking/ZocdocBookButton";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule an appointment with ParikhHealth in Sunnyvale, CA. New and existing patients welcome. Primary care, sports medicine, and physical therapy.",
};

export default function AppointmentsPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
            Scheduling
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            Book an Appointment
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            New and existing patients welcome. Choose your preferred booking
            method below.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main: booking widget area */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-3">
                Book Online
              </h2>
              <p className="text-gray-500 mb-8">
                Use our online booking system to choose your provider, service
                type, and preferred time.
              </p>

              {/* Booking embed */}
              <div className="bg-[#F8F7F4] rounded-2xl border border-gray-100 overflow-hidden">
                {SITE.booking.provider === "zocdoc" && SITE.booking.zocdocUrl ? (
                  <div className="p-10 text-center">
                    <ZocdocBookButton className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-8 py-4 rounded-full transition-colors text-base cursor-pointer" />
                    <p className="text-xs text-gray-400 mt-5">
                      Scheduling powered by ZocDoc — HIPAA-compliant and free
                      for patients. Pick your provider, visit type, and time —
                      right here on our site.
                    </p>
                  </div>
                ) : SITE.booking.provider === "calendly" && SITE.booking.calendlyUrl ? (
                  <iframe
                    src={SITE.booking.calendlyUrl}
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Book an appointment"
                  />
                ) : (
                  <div className="p-10 text-center">
                    <p className="text-gray-500 mb-4">
                      Online booking is being configured. Please call or message
                      us directly.
                    </p>
                    <a
                      href={`tel:${SITE.phone.appointments}`}
                      className="inline-flex items-center gap-2 bg-[#111111] text-white font-medium px-7 py-3.5 rounded-full text-sm"
                    >
                      <Phone size={16} /> Call or Text to Book
                    </a>
                  </div>
                )}
              </div>

              {/* New vs Existing */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif text-lg font-semibold text-[#111111] mb-3">
                    New Patient?
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Select "New Patient" when booking',
                      "Arrive 15 min early for paperwork",
                      "Bring your insurance card and ID",
                      "List any current medications",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-[#111111] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="text-sm text-[#111111] font-medium hover:underline"
                  >
                    Have questions? Contact us →
                  </Link>
                </div>
                <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif text-lg font-semibold text-[#111111] mb-3">
                    Existing Patient?
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Select "Established Patient" when booking',
                      "Same-day sick visits available — call us",
                      "Telehealth options available",
                      "Prescription refills: allow 48 hrs",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-500">
                        <CheckCircle2 size={14} className="text-[#111111] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${SITE.phone.appointments}`}
                    className="text-sm text-[#111111] font-medium hover:underline"
                  >
                    Call for same-day availability →
                  </a>
                </div>
              </div>

              {/* In-person vs telehealth */}
              <div className="mt-16">
                <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-3">
                  In-Person or Telehealth — Your Choice
                </h2>
                <p className="text-gray-500 mb-6 max-w-2xl">
                  When you book online, you can choose the visit format that
                  works best for you. Not every visit type is eligible for
                  telehealth, so if you&apos;re not sure, our front desk can
                  help you pick the right one.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4 bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100">
                    <Building2 size={20} className="text-[#111111] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#111111] mb-1">
                        In-Person Visits
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Physical exams, procedures, physical therapy, and most
                        new patient visits are done in our Sunnyvale office.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100">
                    <Video size={20} className="text-[#111111] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-[#111111] mb-1">
                        Telehealth Visits
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Available for select visit types — including
                        follow-ups, medication management, and minor illness
                        consultations. When booking online, filter by
                        &quot;video visit&quot; to see telehealth availability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Choosing a provider */}
              <div className="mt-16">
                <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-3">
                  Not Sure Which Provider to See?
                </h2>
                <p className="text-gray-500 mb-6 max-w-2xl">
                  Our online booking lets you choose a specific provider for
                  your visit type — you don&apos;t have to see the same person
                  for everything.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {TEAM.filter((m) => ["DO", "PA-C"].includes(m.credentials)).map((m) => (
                    <div key={m.id} className="flex gap-4 border border-gray-100 rounded-2xl p-5">
                      <Stethoscope size={18} className="text-[#111111] shrink-0 mt-1" />
                      <div>
                        <p className="font-serif font-semibold text-[#111111]">
                          {m.name}, {m.credentials}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {m.specialties.join(" · ")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-5">
                  Physical therapy, pelvic health, and rehab? See our{" "}
                  <Link href="/providers" className="text-[#111111] font-medium hover:underline">
                    full care team
                  </Link>{" "}
                  to pick the right specialist.
                </p>
              </div>

              {/* Insurance summary */}
              <div className="mt-16">
                <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-3">
                  Insurance We Accept
                </h2>
                <p className="text-gray-500 mb-6 max-w-2xl">
                  We accept most major PPO plans. Coverage varies by employer
                  and plan year, so we recommend verifying benefits before your
                  visit.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {ACCEPTED_PLANS.map((plan) => (
                    <div key={plan.name} className="flex items-start gap-3 bg-[#F8F7F4] rounded-xl p-4 border border-gray-100">
                      <ShieldCheck size={16} className="text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-[#111111] text-sm">{plan.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{plan.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/insurance"
                  className="inline-flex items-center gap-1.5 text-sm text-[#111111] font-medium hover:underline"
                >
                  Full insurance details & self-pay options <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Call or Text */}
              <div className="bg-[#111111] rounded-2xl p-7 text-white">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Call/Text for Appointment
                </h3>
                <p className="text-sm text-white/60 mb-5">
                  Our front desk is happy to schedule you directly — call or
                  text, whichever&apos;s easier.
                </p>
                <a
                  href={`tel:${SITE.phone.appointments}`}
                  className="flex items-center gap-2 text-lg font-semibold hover:text-[#111111] transition-colors"
                >
                  <Phone size={18} className="text-[#111111]" />
                  {SITE.phone.appointments}
                </a>
                <a
                  href={`sms:${SITE.phone.appointments.replace(/-/g, "")}`}
                  className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mt-3"
                >
                  <MessageSquare size={15} className="text-[#111111]" />
                  Text us instead
                </a>
              </div>

              {/* Physical Therapy scheduling */}
              <div className="border border-gray-100 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-3 flex items-center gap-2">
                  <Activity size={18} className="text-[#111111]" /> Physical Therapy
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  PT appointments are scheduled directly with our PT team —
                  text us at {SITE.phone.appointments} to set up your session.
                </p>
                <a
                  href={`sms:${SITE.phone.appointments.replace(/-/g, "")}`}
                  className="flex items-center gap-2 text-sm font-medium text-[#111111] hover:underline"
                >
                  <MessageSquare size={15} /> Text to Schedule PT
                </a>
              </div>

              {/* Hours */}
              <div className="border border-gray-100 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-[#111111]" /> Office Hours
                </h3>
                <ul className="space-y-2">
                  {SITE.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between text-sm text-gray-600"
                    >
                      <span>{h.day}</span>
                      <span className="font-medium text-[#111111]">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="border border-gray-100 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#111111]" /> Location
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {SITE.address.full}
                </p>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#111111] font-medium hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              {/* Concierge note */}
              <div className="bg-black/5 border border-black/10 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-2">
                  Concierge Patients
                </h3>
                <p className="text-sm text-gray-500">
                  Concierge members contact Dr. Parikh directly for same-day
                  scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
