import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Phone, ShieldCheck, HeartPulse, Stethoscope, Users } from "lucide-react";
import { SITE, SERVICES } from "@/content/site";

export const metadata: Metadata = {
  title: "PitchFit | Elite Cricket Athlete Care by ParikhHealth",
  description:
    "PitchFit is ParikhHealth's membership-based athlete care program, led by Dr. Neesheet Parikh, DO — Head Team Physician for USA Cricket. Direct physician access, sports physicals, EKG & concussion screening, and injury management for competitive cricket athletes.",
};

const HIGHLIGHTS = [
  "Led by the Head Team Physician for USA Cricket",
  "Direct cell & email access to Dr. Parikh",
  "Same-day / next-business-day visits",
  "Full sports physical & cardiac (EKG) screening",
  "Concussion baseline testing & return-to-play protocol",
  "Injury prevention & management, cricket-specific",
  "Monthly member sessions with Dr. Parikh & guests",
  "Membership-based — no insurance barriers",
];

const CREDENTIALS = [
  {
    icon: Stethoscope,
    title: "Double Board Certified",
    detail: "Sports Medicine & Family Medicine physician, based in Sunnyvale, CA.",
  },
  {
    icon: ShieldCheck,
    title: "Head Team Physician, USA Cricket",
    detail: "6+ years traveling internationally with the national team at tours, camps, and competitions.",
  },
  {
    icon: HeartPulse,
    title: "10+ Years in Elite Cricket Care",
    detail: "Personally treated competitive cricketers from India, the West Indies, England, Pakistan, and beyond.",
  },
  {
    icon: Users,
    title: "A Global Medical Network",
    detail: "Direct relationships with physiotherapists and sports physicians across the cricket world.",
  },
];

export default function AthleteWellnessPage() {
  const related = SERVICES.filter((s) => s.id !== "athlete-wellness").slice(0, 3);

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">
            Featured Program
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            PitchFit
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Elite athlete care for competitive cricketers, led by Dr. Neesheet
            Parikh, DO — Head Team Physician for USA Cricket.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left: content */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-5">
                Where Elite Cricket Medicine in America Begins
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                PitchFit is ParikhHealth&apos;s membership-based athlete care
                program, built specifically around the physical demands of
                competitive cricket. Dr. Parikh has spent over a decade caring
                for cricketers at every level of the game — from junior
                academies to the national stage — and has served as Head Team
                Physician for USA Cricket for 6+ years, traveling
                internationally with the national team.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 text-base">
                Members get direct access to Dr. Parikh, same-day and
                next-business-day visits, full sports physicals, cardiac and
                concussion screening, and injury prevention and return-to-play
                management — all without the delays of traditional insurance
                billing.
              </p>

              {/* Credentials grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {CREDENTIALS.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="flex gap-4 bg-[#F8F7F4] rounded-2xl p-5 border border-gray-100">
                    <Icon size={20} className="text-[#111111] shrink-0 mt-1" />
                    <div>
                      <p className="font-serif font-semibold text-[#111111] text-sm mb-1">{title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div className="bg-[#F8F7F4] rounded-2xl p-7 mb-12">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <ShieldCheck size={16} className="text-[#111111] mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary CTA to PitchFit */}
              <div className="bg-[#111111] rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-xl font-semibold text-white mb-2">
                  See the Full Program & Apply
                </h3>
                <p className="text-sm text-white/60 mb-6 max-w-lg">
                  Membership tiers, the full PitchFit platform, and Dr.
                  Parikh&apos;s complete story with USA Cricket all live on
                  our dedicated site.
                </p>
                <a
                  href="https://pitchfit.cricket/elite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#111111] font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
                >
                  Explore PitchFit Elite <ArrowRight size={14} />
                </a>
              </div>

              <p className="text-sm text-gray-500">
                Not a competitive cricket athlete? Our general{" "}
                <Link href="/services/sports-medicine" className="text-[#111111] font-medium hover:underline">
                  Sports Medicine
                </Link>{" "}
                and{" "}
                <Link href="/services/concierge-medicine" className="text-[#111111] font-medium hover:underline">
                  Concierge Medicine
                </Link>{" "}
                programs are available for athletes of every sport and level.
              </p>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#111111] rounded-2xl p-7 text-white mb-6 sticky top-28">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Ready to Apply?
                </h3>
                <p className="text-sm text-white/60 mb-6">
                  Memberships are limited each year to ensure every athlete
                  gets the attention they deserve.
                </p>
                <a
                  href="https://pitchfit.cricket/elite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-white text-[#111111] hover:bg-gray-100 font-medium px-5 py-2.5 rounded-full text-sm transition-colors mb-3"
                >
                  Visit PitchFit.cricket
                </a>
                <a
                  href={`tel:${SITE.phone.appointments}`}
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  <Phone size={14} /> {SITE.phone.appointments}
                </a>
              </div>

              <h3 className="font-serif text-lg font-semibold text-[#111111] mb-4 mt-2">
                Other Services
              </h3>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link
                      href={`/services/${r.id}`}
                      className="flex items-center justify-between text-sm text-gray-600 hover:text-[#111111] py-2 border-b border-gray-100 group"
                    >
                      {r.name}
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#111111] transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
