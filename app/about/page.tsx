import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Heart, Award, Users } from "lucide-react";
import { TEAM, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ParikhHealth — our story, philosophy, and the team behind your care. Primary care and sports medicine in Sunnyvale, CA.",
};

const VALUES = [
  {
    icon: Heart,
    title: "Compassionate Care",
    body: "Every patient deserves to feel heard. We take time — not just enough time, but real time — to understand your concerns, your history, and your goals.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    body: "Board-certified, evidence-based, and continually learning. We hold ourselves to the highest standard of medical practice.",
  },
  {
    icon: Users,
    title: "Integrated Team Approach",
    body: "Your physician, physician assistant, and physical therapist communicate directly. You benefit from coordinated, cohesive care under one roof.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        }}
      >
        <div className="site-container">
          <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
            Our Story
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            Medicine Built on Relationship
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            ParikhHealth was founded on a simple conviction: that the best
            healthcare happens when providers and patients build a genuine,
            lasting partnership — not a series of disconnected transactions.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
                Who We Are
              </span>
              <h2 className="font-serif text-4xl font-semibold text-[#111111] mt-3 mb-5 leading-snug">
                A Different Kind of Practice
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  ParikhHealth is an independent primary care and sports
                  medicine practice located in Sunnyvale, California. We are not
                  affiliated with a large hospital network or corporate health
                  system — which means our first obligation is always to you,
                  our patient.
                </p>
                <p>
                  Our team brings together expertise in family medicine, sports
                  medicine, physician assistant care, and physical therapy. By
                  housing all of these disciplines in a single practice, we can
                  offer a level of coordination and continuity that fragmented
                  care simply cannot match.
                </p>
                <p>
                  We serve patients from Sunnyvale, Santa Clara, Cupertino,
                  Mountain View, and across the greater Bay Area.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  "Independently owned — no corporate quotas",
                  "Accepting new patients",
                  "Both in-person and telehealth available",
                  "Bilingual care available",
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#111111]" />
                    <span className="text-sm text-gray-600">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F8F7F4] rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-300 text-sm">
                Practice photo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F7F4] py-24">
        <div className="site-container">
          <div className="text-center mb-14">
            <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
              Our Values
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#111111] mt-3">
              What Guides Everything We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#111111]/5 flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-[#111111]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="text-center mb-14">
            <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
              The Team
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#111111] mt-3">
              Meet Your Providers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {TEAM.map((member) => (
              <div
                key={member.id}
                className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#F8F7F4] h-64 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-gray-300 text-sm">Photo</div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#111111]">
                    {member.name},{" "}
                    <span className="font-normal text-[#111111]">
                      {member.credentials}
                    </span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 mb-4">
                    {member.title}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                  {member.acceptingNewPatients && (
                    <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Accepting New Patients
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/providers"
              className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Full Provider Profiles <ArrowRight size={16} />
            </Link>
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
            Ready to Meet the Team?
          </h2>
          <p className="text-white/70 mb-8">
            Book an appointment and experience care that puts you first.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            Book an Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
