"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  Printer,
} from "lucide-react";
import { SITE } from "@/content/site";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  isPatient: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  isPatient: "yes",
};

const SUBJECTS = [
  "General Question",
  "Appointment Request",
  "Prescription Refill",
  "Test Results",
  "Billing / Insurance",
  "Concierge Medicine Inquiry",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[ParikhHealth] ${form.subject} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "—"}\nPatient: ${form.isPatient === "yes" ? "Yes — existing patient" : "No — new patient"}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm(INITIAL);
  };

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
            Get in Touch
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            We&apos;re Here to Help
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Questions, concerns, or just want to say hello — send us a message
            and we&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white py-24" id="message">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8 text-sm">
                For urgent medical concerns, please call us directly at{" "}
                <a
                  href={`tel:${SITE.phone.appointments}`}
                  className="text-[#111111] font-medium"
                >
                  {SITE.phone.appointments}
                </a>
                . For emergencies, call 911.
              </p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-10 text-center">
                  <CheckCircle2
                    size={40}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h3 className="font-serif text-2xl font-semibold text-[#111111] mb-2">
                    Message Sent
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. We&apos;ll respond within one
                    business day. For urgent matters, please call us.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Are you a patient? */}
                  <div>
                    <label className="block text-sm font-medium text-[#111111] mb-2">
                      Are you a current patient?
                    </label>
                    <div className="flex gap-4">
                      {["yes", "no"].map((val) => (
                        <label
                          key={val}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="isPatient"
                            value={val}
                            checked={form.isPatient === val}
                            onChange={handleChange}
                            className="accent-black"
                          />
                          <span className="text-sm text-gray-600 capitalize">
                            {val === "yes" ? "Yes, existing patient" : "No, I'm new"}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(408) 555-0100"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-[#111111] mb-1.5"
                      >
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black bg-white"
                      >
                        <option value="">Select a subject</option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#111111] mb-1.5"
                    >
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black resize-none"
                    />
                  </div>

                  {/* Disclaimer */}
                  <p className="text-xs text-gray-400">
                    Do not include personal health information or medical records
                    in this form. For urgent medical concerns, call us or visit
                    the nearest emergency room.
                  </p>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] disabled:opacity-60 text-white font-medium px-8 py-4 rounded-full transition-colors text-sm"
                  >
                    {status === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#F8F7F4] rounded-2xl p-7">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">
                        Appointments
                      </p>
                      <a
                        href={`tel:${SITE.phone.appointments}`}
                        className="text-sm font-medium text-[#111111] hover:text-[#111111] transition-colors"
                      >
                        {SITE.phone.appointments}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">
                        General
                      </p>
                      <a
                        href={`tel:${SITE.phone.general}`}
                        className="text-sm font-medium text-[#111111] hover:text-[#111111] transition-colors"
                      >
                        {SITE.phone.general}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Printer size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">
                        Fax
                      </p>
                      <span className="text-sm font-medium text-[#111111]">
                        {SITE.phone.fax}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-sm font-medium text-[#111111] hover:text-[#111111] transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide font-medium">
                        Office Hours
                      </p>
                      {SITE.hours.map((h) => (
                        <p key={h.day} className="text-sm text-gray-600">
                          {h.day}: {h.hours}
                        </p>
                      ))}
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">
                        Address
                      </p>
                      <a
                        href={SITE.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#111111] hover:text-[#111111] transition-colors"
                      >
                        {SITE.address.street}
                        <br />
                        {SITE.address.city}, {SITE.address.state}{" "}
                        {SITE.address.zip}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-48">
                <iframe
                  title="ParikhHealth location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.4907348944505!2d-122.00517!3d37.372908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e0de6f2cd7%3A0x84b5c1ec3c99f7f5!2s1299%20Oakmead%20Pkwy%2C%20Sunnyvale%2C%20CA%2094085!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="bg-[#111111] rounded-2xl p-6 text-white">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  Ready to Book?
                </h3>
                <p className="text-sm text-white/60 mb-4">
                  Schedule your appointment online in minutes.
                </p>
                <Link
                  href="/appointments"
                  className="block text-center bg-[#111111] hover:bg-[#333333] text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
