import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TEAM } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Providers",
  description:
    "Meet the ParikhHealth team — Dr. Neesheet Parikh (DO), Kinnari Shah (PA-C), and Miral Patel (PT). Exceptional primary care and sports medicine providers in Sunnyvale, CA.",
};

export default function ProvidersPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)" }}
      >
        <div className="site-container">
          <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
            Our Team
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            Providers Who Know You
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Our team of board-certified physicians, physician assistants, and
            physical therapists work in close coordination — so your care is
            always connected.
          </p>
        </div>
      </section>

      {/* Provider cards */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="space-y-16">
            {TEAM.map((member, idx) => (
              <div
                key={member.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Photo */}
                <div
                  className={`bg-[#F8F7F4] rounded-3xl h-[480px] flex items-center justify-center ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <span className="text-gray-300 text-sm">
                    {member.name} photo
                  </span>
                </div>

                {/* Bio */}
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="mb-2">
                    <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
                      {member.title}
                    </span>
                  </div>
                  <h2 className="font-serif text-4xl font-semibold text-[#0F1F3D] mb-1">
                    {member.name}
                  </h2>
                  <p className="text-[#C9A465] font-medium text-lg mb-6">
                    {member.credentials}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-[#0F1F3D] uppercase tracking-wide mb-3">
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

                  <Link
                    href="/appointments"
                    className="inline-flex items-center gap-2 bg-[#0F1F3D] hover:bg-[#1a2f5a] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
                  >
                    Book with {member.name.split(" ")[0]} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)" }}
      >
        <div className="site-container-narrow text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-4">
            Ready to Meet Your Provider?
          </h2>
          <p className="text-white/70 mb-8">
            All three providers are currently accepting new patients.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 bg-[#C9A465] hover:bg-[#b8912e] text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            Book an Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
