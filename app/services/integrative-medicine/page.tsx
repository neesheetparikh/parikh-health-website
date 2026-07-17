import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight, ArrowLeft, Phone, Leaf, Bone, Users } from "lucide-react";
import { SITE, SERVICES, TEAM } from "@/content/site";

export const metadata: Metadata = {
  title: "Integrative Medicine | ParikhHealth Sunnyvale CA",
  description:
    "Integrative medicine in Sunnyvale, CA — Mansi Parikh, DPT, AP and Dr. Neesheet Parikh, DO combine Ayurvedic principles, personalized nutrition, and osteopathic manipulative treatment for whole-person care. Concierge Medicine members get a fully collaborative Ayurveda + Western treatment plan.",
};

const PROVIDER_ROLES: Record<string, { icon: typeof Leaf; role: string; blurb: string }> = {
  "mansi-parikh": {
    icon: Leaf,
    role: "Ayurvedic Medicine",
    blurb:
      "Mansi leads the Ayurvedic side of the program — consultations, personalized nutrition, herbal support, and lifestyle medicine rooted in traditional Ayurvedic principles.",
  },
  "neesheet-parikh": {
    icon: Bone,
    role: "Osteopathic Manipulative Treatment",
    blurb:
      "Dr. Parikh brings his osteopathic training into the program — hands-on structural and musculoskeletal treatment that complements Mansi's Ayurvedic approach.",
  },
};

const HIGHLIGHTS = [
  "Ayurvedic consultations & personalized care plans",
  "Osteopathic Manipulative Treatment (OMT)",
  "Whole-person, root-cause approach",
  "Nutrition & herbal support",
  "Lifestyle & stress management",
  "Integrative women's health support",
];

export default function IntegrativeMedicinePage() {
  const related = SERVICES.filter((s) => s.id !== "integrative-medicine").slice(0, 3);
  const providers = TEAM.filter((m) => m.id in PROVIDER_ROLES);

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
            Integrative Medicine
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Whole-person care that pairs Ayurvedic tradition with modern
            medicine — led together by Mansi Parikh, DPT, AP and Dr.
            Neesheet Parikh, DO.
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
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                Our integrative medicine program looks beyond symptoms to
                address root causes — combining time-tested Ayurvedic
                principles, personalized nutrition, and herbal support with
                Dr. Parikh&apos;s osteopathic manipulative treatment. It&apos;s
                a complementary approach designed to work alongside your
                primary care, not replace it, with a particular focus on
                women&apos;s health and sustainable lifestyle change.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 text-base">
                Mansi and Dr. Parikh work directly together on shared
                patients, so the Ayurvedic and Western sides of your care are
                never siloed — they&apos;re coordinated as one plan.
              </p>

              {/* Meet Your Providers */}
              <h3 className="font-serif text-2xl font-semibold text-[#111111] mb-5">
                Meet Your Providers
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {providers.map((provider) => {
                  const meta = PROVIDER_ROLES[provider.id];
                  const Icon = meta.icon;
                  return (
                    <div
                      key={provider.id}
                      className="bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100"
                    >
                      <div className="bg-white rounded-2xl h-40 overflow-hidden flex items-center justify-center mb-5">
                        {provider.image ? (
                          <Image
                            src={provider.image}
                            alt={provider.name}
                            width={320}
                            height={160}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <span className="text-gray-300 text-sm">{provider.name} photo</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon size={16} className="text-[#111111] shrink-0" />
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                          {meta.role}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-semibold text-[#111111] mb-2">
                        {provider.name},{" "}
                        <span className="font-normal text-gray-500">{provider.credentials}</span>
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {meta.blurb}
                      </p>
                      <Link
                        href={`/providers/${provider.id}`}
                        className="text-sm text-[#111111] font-medium hover:underline"
                      >
                        View Profile
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Concierge combo callout */}
              <div className="bg-[#111111] rounded-2xl p-8 mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <Users size={18} className="text-white/70" />
                  <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                    Concierge Medicine Members
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  A Truly Combined Treatment Plan
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6 max-w-xl">
                  Patients enrolled in Concierge Medicine get the most
                  seamless version of this program — Mansi and Dr. Parikh
                  collaborate directly on your care, blending Ayurvedic and
                  Western medicine into a single, coordinated treatment plan
                  rather than two separate opinions.
                </p>
                <Link
                  href="/services/concierge-medicine"
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-100 text-[#111111] font-medium px-6 py-3 rounded-full text-sm transition-colors"
                >
                  Learn About Concierge Medicine <ArrowRight size={14} />
                </Link>
              </div>

              {/* What's Included */}
              <div className="bg-[#F8F7F4] rounded-2xl p-7 mb-12">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#111111] mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#F8F7F4] rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  Book an integrative medicine consult with Mansi Parikh or
                  Dr. Parikh.
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
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Contact Us
                </h3>
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
