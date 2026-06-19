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
