import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SERVICES } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "ParikhHealth offers primary care, sports medicine, physical therapy, concierge medicine, cosmetics, corporate health, osteopathic manipulative therapy, and in-home medical services in Sunnyvale, CA.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)" }}
      >
        <div className="site-container">
          <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-2xl leading-tight">
            Comprehensive Medical Services
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            From preventive care to complex rehabilitation — everything you need,
            coordinated under one roof by a team that knows you.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group flex gap-6 bg-[#F8F7F4] hover:bg-[#0F1F3D] rounded-2xl p-7 border border-transparent hover:border-[#0F1F3D] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-[#C9A465]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif text-xl font-semibold text-[#0F1F3D] group-hover:text-white transition-colors mb-1.5">
                    {service.name}
                  </h2>
                  <p className="text-sm text-gray-500 group-hover:text-white/60 transition-colors leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <ul className="space-y-1.5">
                    {service.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-white/50 transition-colors"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#C9A465]" />
                        {h}
                      </li>
                    ))}
                    {service.highlights.length > 3 && (
                      <li className="text-xs text-[#C9A465]">
                        +{service.highlights.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
                <ChevronRight
                  size={18}
                  className="text-gray-300 group-hover:text-white/50 self-center shrink-0 transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="site-container-narrow text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#0F1F3D] mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-500 mb-8">
            Start with a primary care visit and we&apos;ll guide you to the
            right care — no referral runaround required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-[#0F1F3D] hover:bg-[#1a2f5a] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Book an Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-[#0F1F3D]/20 hover:border-[#0F1F3D] text-[#0F1F3D] font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
