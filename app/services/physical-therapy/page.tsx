import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ArrowLeft, Phone, HeartPulse } from "lucide-react";
import { SITE, SERVICES, TEAM } from "@/content/site";

export const metadata: Metadata = {
  title: "Physical Therapy | ParikhHealth Sunnyvale CA",
  description:
    "In-house physical therapy in Sunnyvale, CA — orthopedic and sports injury rehab, post-operative recovery, and pelvic floor physical therapy with Sonia Sharma, PT. Miral Patel, Sonia Sharma, and Harshit Bhatwala, PT, and Vaishali Parab, PTA.",
};

const PT_TEAM = TEAM.filter((m) => ["PT", "PTA"].includes(m.credentials));

export default function PhysicalTherapyPage() {
  const service = SERVICES.find((s) => s.id === "physical-therapy")!;
  const related = SERVICES.filter((s) => s.id !== "physical-therapy").slice(0, 3);

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
            Our Services
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            Physical Therapy
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Orthopedic and sports injury rehabilitation, post-operative recovery, and
            pelvic floor physical therapy — all in-house, all coordinated with your
            medical team.
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
                Physical Therapy at ParikhHealth
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                Our in-house physical therapy team treats the full range of orthopedic
                and sports injuries, guides patients through post-operative recovery, and
                provides pelvic floor physical therapy — all under one roof with your
                primary care and sports medicine team. No referral delays, no fragmented
                care, no starting your history over with someone new.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 text-base">
                Every plan is one-on-one and built around your specific injury, surgery,
                or goals — not a generic protocol.
              </p>

              {/* Meet Your PT Team */}
              <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-5">
                Meet Your Physical Therapy Team
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {PT_TEAM.map((member) => (
                  <div
                    key={member.id}
                    className="bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="bg-white rounded-2xl h-40 overflow-hidden flex items-center justify-center mb-5">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={208}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <span className="text-gray-300 text-sm">{member.name} photo</span>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {member.title}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#111111] mt-1 mb-2">
                      {member.name},{" "}
                      <span className="font-normal text-gray-500">{member.credentials}</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {member.bio}
                    </p>
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {member.specialties.map((s) => (
                        <li
                          key={s}
                          className="text-xs bg-white text-gray-500 px-3 py-1 rounded-full border border-gray-100"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/providers/${member.id}`}
                      className="text-sm text-[#111111] font-medium hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pelvic Floor PT callout */}
              <div className="bg-[#111111] rounded-2xl p-8 mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <HeartPulse size={18} className="text-white/70" />
                  <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Pelvic Floor Physical Therapy
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  Specialized Care, Led by Sonia Sharma, PT
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xl">
                  Sonia treats pelvic pain, urinary incontinence, postpartum recovery, and
                  pelvic organ prolapse alongside her orthopedic and sports rehabilitation
                  work — coordinating directly with our Women&apos;s Health team so nothing
                  gets lost between referrals.
                </p>
                <Link
                  href="/providers/sonia-sharma"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#111111] font-medium px-6 py-3 rounded-full text-sm transition-colors"
                >
                  Meet Sonia Sharma <ArrowRight size={14} />
                </Link>
              </div>

              {/* Quick highlights */}
              <div className="bg-[#F8F7F4] rounded-2xl p-7 mb-12">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#111111] mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conditions treated */}
              {service.conditionsTreated && (
                <div className="mb-14">
                  <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-5">
                    {service.detailHeading || "Conditions We Treat"}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                    {service.conditionsTreated.map((group) => (
                      <div key={group.category}>
                        <h4 className="text-sm font-semibold text-[#111111] uppercase tracking-wide mb-3">
                          {group.category}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-gray-600"
                            >
                              <CheckCircle2 size={14} className="text-[#111111] mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA block */}
              <div className="bg-[#F8F7F4] rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  Book a physical therapy evaluation with Miral, Sonia, or Harshit —
                  same-week availability most weeks.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/appointments"
                    className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    Book an Appointment <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`tel:${SITE.phone.appointments}`}
                    className="inline-flex items-center justify-center gap-2 border border-[#111111]/20 hover:border-[#111111] text-[#111111] font-medium px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    <Phone size={14} /> Call Us
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#111111] rounded-2xl p-7 text-white mb-6 sticky top-28">
                <h3 className="font-serif text-xl font-semibold mb-4">Contact Us</h3>
                <div className="space-y-3 text-sm text-white/70 mb-6">
                  <p>{SITE.address.full}</p>
                  <p>Phone: {SITE.phone.appointments}</p>
                  <p>Hours: Mon–Fri, 9:00 AM – 4:00 PM</p>
                </div>
                <Link
                  href="/appointments"
                  className="block text-center bg-white text-[#111111] hover:bg-gray-100 font-medium px-5 py-2.5 rounded-full text-sm transition-colors mb-3"
                >
                  Book Online
                </Link>
                <Link
                  href="/contact"
                  className="block text-center border border-white/20 hover:border-white text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Send Us a Message
                </Link>
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
