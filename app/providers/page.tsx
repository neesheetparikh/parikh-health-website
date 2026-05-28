import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TEAM, SUPPORT_STAFF, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Team | ParikhHealth",
  description:
    "Meet the full ParikhHealth team — physicians, physician assistants, physical therapists, and support staff dedicated to exceptional care in Sunnyvale, CA.",
};

const CLINICAL_PROVIDERS = TEAM.filter((m) =>
  ["DO", "PA-C"].includes(m.credentials)
);
const PT_TEAM = TEAM.filter((m) =>
  ["PT", "PTA"].includes(m.credentials)
);

export default function ProvidersPage() {
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
            Meet Our Team
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Physicians, physician assistants, physical therapists, and a
            dedicated support staff — all working together so your care is
            always connected.
          </p>
        </div>
      </section>

      {/* ── CLINICAL PROVIDERS ───────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="mb-14">
            <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
              Physicians & Physician Assistants
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#111111] mt-2">
              Clinical Providers
            </h2>
          </div>

          <div className="space-y-16">
            {CLINICAL_PROVIDERS.map((member, idx) => (
              <div
                key={member.id}
                className={`grid lg:grid-cols-2 gap-12 items-center`}
              >
                {/* Photo */}
                <div
                  className={`bg-[#F8F7F4] rounded-3xl h-[440px] overflow-hidden flex items-center justify-center ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={600}
                      height={440}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-gray-300 text-sm">{member.name} photo</span>
                  )}
                </div>

                {/* Bio */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-[#111111] text-xs font-semibold tracking-widest uppercase">
                    {member.title}
                  </span>
                  <h2 className="font-serif text-4xl font-semibold text-[#111111] mt-2 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-gray-500 font-medium text-lg mb-6">
                    {member.credentials}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">{member.bio}</p>

                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-[#111111] uppercase tracking-wide mb-3">
                      Specialties
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {member.specialties.map((s) => (
                        <li
                          key={s}
                          className="text-sm bg-[#F8F7F4] text-gray-600 px-3 py-1 rounded-full border border-gray-100"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {member.acceptingNewPatients && (
                    <div className="flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 px-4 py-2 rounded-full w-fit mb-8">
                      <CheckCircle2 size={14} />
                      Accepting New Patients
                    </div>
                  )}

                  <a
                    href={member.bookingUrl ?? SITE.booking.zocdocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
                  >
                    Book with {member.name.split(" ")[0]} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHYSICAL THERAPY TEAM ────────────────────────────────────────── */}
      <section className="bg-[#F8F7F4] py-24">
        <div className="site-container">
          <div className="mb-14">
            <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
              Rehabilitation
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#111111] mt-2">
              Physical Therapy Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PT_TEAM.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                {/* Photo */}
                <div className="bg-[#F8F7F4] rounded-2xl h-52 overflow-hidden flex items-center justify-center mb-6">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={208}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <span className="text-gray-300 text-sm">{member.name} photo</span>
                  )}
                </div>

                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {member.title}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#111111] mt-1 mb-3">
                  {member.name},{" "}
                  <span className="font-normal text-gray-500">{member.credentials}</span>
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {member.bio}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <li
                      key={s}
                      className="text-xs bg-[#F8F7F4] text-gray-500 px-3 py-1 rounded-full border border-gray-100"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT TEAM ─────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="mb-14">
            <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
              Behind the Scenes
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#111111] mt-2">
              Support Team
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              Our clinical staff is backed by a dedicated team who make sure every visit runs smoothly from the moment you call to the moment you leave.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {SUPPORT_STAFF.map((member) => (
              <div
                key={member.name}
                className="bg-[#F8F7F4] rounded-2xl px-5 py-6 border border-gray-100"
              >
                <p className="font-serif font-semibold text-[#111111] text-base leading-snug">
                  {member.name}
                </p>
                <p className="text-sm text-gray-500 mt-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container-narrow text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-4">
            Ready to Meet Your Team?
          </h2>
          <p className="text-white/70 mb-8">
            Our providers are currently accepting new patients.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#111111] font-medium px-8 py-4 rounded-full transition-colors"
          >
            Book an Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
