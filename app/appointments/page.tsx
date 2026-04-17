import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE } from "@/content/site";

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
        style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)" }}
      >
        <div className="site-container">
          <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
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
              <h2 className="font-serif text-3xl font-semibold text-[#0F1F3D] mb-3">
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
                    <p className="text-gray-500 text-sm mb-6">
                      We use ZocDoc for secure, easy online scheduling.
                    </p>
                    <a
                      href={SITE.booking.zocdocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0F1F3D] hover:bg-[#1a2f5a] text-white font-medium px-8 py-4 rounded-full transition-colors text-base"
                    >
                      Book on ZocDoc <ArrowRight size={18} />
                    </a>
                    <p className="text-xs text-gray-400 mt-4">
                      ZocDoc is HIPAA-compliant and free for patients.
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
                      className="inline-flex items-center gap-2 bg-[#0F1F3D] text-white font-medium px-7 py-3.5 rounded-full text-sm"
                    >
                      <Phone size={16} /> Call to Book
                    </a>
                  </div>
                )}
              </div>

              {/* New vs Existing */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mb-3">
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
                        <CheckCircle2 size={14} className="text-[#C9A465] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="text-sm text-[#C9A465] font-medium hover:underline"
                  >
                    Have questions? Contact us →
                  </Link>
                </div>
                <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mb-3">
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
                        <CheckCircle2 size={14} className="text-[#C9A465] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`tel:${SITE.phone.appointments}`}
                    className="text-sm text-[#C9A465] font-medium hover:underline"
                  >
                    Call for same-day availability →
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Call */}
              <div className="bg-[#0F1F3D] rounded-2xl p-7 text-white">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Prefer to Call?
                </h3>
                <p className="text-sm text-white/60 mb-5">
                  Our front desk is happy to schedule you directly.
                </p>
                <a
                  href={`tel:${SITE.phone.appointments}`}
                  className="flex items-center gap-2 text-lg font-semibold hover:text-[#C9A465] transition-colors"
                >
                  <Phone size={18} className="text-[#C9A465]" />
                  {SITE.phone.appointments}
                </a>
              </div>

              {/* Hours */}
              <div className="border border-gray-100 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-[#C9A465]" /> Office Hours
                </h3>
                <ul className="space-y-2">
                  {SITE.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between text-sm text-gray-600"
                    >
                      <span>{h.day}</span>
                      <span className="font-medium text-[#0F1F3D]">{h.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="border border-gray-100 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-[#C9A465]" /> Location
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {SITE.address.full}
                </p>
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#C9A465] font-medium hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              {/* Concierge note */}
              <div className="bg-[#C9A465]/10 border border-[#C9A465]/20 rounded-2xl p-7">
                <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mb-2">
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
