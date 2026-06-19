"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, Mail, MessageSquare, Printer } from "lucide-react";
import { SITE } from "@/content/site";

export default function ContactPage() {
  return (
    <>
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
            Get in Touch
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            We&apos;re here for you. Reach out by phone, text, or email —
            whichever is easiest for you.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-white py-24" id="message">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

            {/* Phone */}
            <a
              href={`tel:${SITE.phone.general}`}
              className="group bg-[#F8F7F4] hover:bg-[#111111] rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#111111]/8 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                <Phone size={20} className="text-[#111111] group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-white/50 uppercase tracking-widest mb-2 transition-colors">
                Call Us
              </p>
              <p className="font-serif text-xl font-semibold text-[#111111] group-hover:text-white transition-colors">
                {SITE.phone.general}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-white/60 mt-1 transition-colors">
                Mon – Fri, 9 AM – 4 PM
              </p>
            </a>

            {/* Text */}
            <a
              href={`sms:${SITE.phone.general}`}
              className="group bg-[#F8F7F4] hover:bg-[#111111] rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#111111]/8 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                <MessageSquare size={20} className="text-[#111111] group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-white/50 uppercase tracking-widest mb-2 transition-colors">
                Text Us
              </p>
              <p className="font-serif text-xl font-semibold text-[#111111] group-hover:text-white transition-colors">
                {SITE.phone.general}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-white/60 mt-1 transition-colors">
                Send us a text anytime
              </p>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SITE.email}`}
              className="group bg-[#F8F7F4] hover:bg-[#111111] rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#111111]/8 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                <Mail size={20} className="text-[#111111] group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-white/50 uppercase tracking-widest mb-2 transition-colors">
                Email Us
              </p>
              <p className="font-serif text-xl font-semibold text-[#111111] group-hover:text-white transition-colors break-all">
                {SITE.email}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-white/60 mt-1 transition-colors">
                We reply within one business day
              </p>
            </a>

            {/* Fax */}
            <div className="bg-[#F8F7F4] rounded-2xl p-8">
              <div className="w-11 h-11 rounded-xl bg-[#111111]/8 flex items-center justify-center mb-6">
                <Printer size={20} className="text-[#111111]" />
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Fax
              </p>
              <p className="font-serif text-xl font-semibold text-[#111111]">
                {SITE.phone.fax}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Available 24 hours
              </p>
            </div>

            {/* Address */}
            <a
              href={SITE.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F8F7F4] hover:bg-[#111111] rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#111111]/8 group-hover:bg-white/10 flex items-center justify-center mb-6 transition-colors">
                <MapPin size={20} className="text-[#111111] group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs font-semibold text-gray-400 group-hover:text-white/50 uppercase tracking-widest mb-2 transition-colors">
                Our Location
              </p>
              <p className="font-serif text-xl font-semibold text-[#111111] group-hover:text-white transition-colors leading-snug">
                {SITE.address.street}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-white/60 mt-1 transition-colors">
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </p>
            </a>

            {/* Hours */}
            <div className="bg-[#F8F7F4] rounded-2xl p-8">
              <div className="w-11 h-11 rounded-xl bg-[#111111]/8 flex items-center justify-center mb-6">
                <Clock size={20} className="text-[#111111]" />
              </div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Office Hours
              </p>
              {SITE.hours.map((h) => (
                <div key={h.day} className="mb-1">
                  <p className="font-serif text-base font-semibold text-[#111111]">{h.day}</p>
                  <p className="text-sm text-gray-500">{h.hours}</p>
                </div>
              ))}
            </div>

            {/* Book appointment CTA */}
            <div className="bg-[#111111] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">
                  Ready to be seen?
                </p>
                <p className="font-serif text-xl font-semibold text-white leading-snug">
                  Book an appointment online in minutes
                </p>
              </div>
              <a
                href={SITE.booking.zocdocUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#111111] font-medium text-sm px-6 py-3 rounded-full transition-colors"
              >
                Book Now →
              </a>
            </div>

          </div>

          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 mb-10" style={{ height: "400px" }}>
            <iframe
              title="ParikhHealth Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639986591798!2d-122.01699368468902!3d37.37249597198487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e5b1f4b0c1%3A0x8b0f3b6e3b0f3b6e!2s1299+Oakmead+Pkwy%2C+Sunnyvale%2C+CA+94085!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Emergency notice */}
          <div className="bg-red-50 border border-red-100 rounded-2xl px-8 py-6 text-center max-w-2xl mx-auto">
            <p className="text-sm text-red-700 font-medium">
              For medical emergencies, call <strong>911</strong> or go to your nearest emergency room.
              Do not use this page for urgent medical concerns.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
