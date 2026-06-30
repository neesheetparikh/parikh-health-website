import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { CONDITIONS, TEAM, SERVICES, SITE } from "@/content/site";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CONDITIONS.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const condition = CONDITIONS.find((c) => c.id === slug);
  if (!condition) return {};
  return {
    title: `${condition.name} | ParikhHealth Sunnyvale`,
    description: condition.shortDesc + ` ParikhHealth serves patients in Sunnyvale, Santa Clara, and the Bay Area.`,
    keywords: condition.keywords,
    alternates: { canonical: `${SITE.url}/conditions/${condition.id}` },
  };
}

export default async function ConditionPage({ params }: Params) {
  const { slug } = await params;
  const condition = CONDITIONS.find((c) => c.id === slug);
  if (!condition) notFound();

  const providers = TEAM.filter((m) => condition.providers.includes(m.id));
  const relatedService = SERVICES.find((s) => s.id === condition.serviceLink);
  const otherConditions = CONDITIONS.filter((c) => c.id !== slug).slice(0, 4);

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: condition.name,
    description: condition.description,
    possibleTreatment: condition.treatments.map((t) => ({
      "@type": "MedicalTherapy",
      name: t,
    })),
    recognizingAuthority: {
      "@type": "MedicalOrganization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionSchema) }}
      />

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
            <ArrowLeft size={14} /> Services & Conditions
          </Link>
          <span className="text-white/50 text-sm font-semibold tracking-widest uppercase">
            ParikhHealth — Sunnyvale, CA
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-2xl leading-tight">
            {condition.name}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            {condition.shortDesc}
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-6">
                Our Approach
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-10">
                {condition.description}
              </p>

              <h3 className="font-serif text-2xl font-semibold text-[#111111] mb-5">
                Treatment Options
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-12">
                {condition.treatments.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#111111] mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600">{t}</span>
                  </li>
                ))}
              </ul>

              {/* Providers */}
              {providers.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-serif text-2xl font-semibold text-[#111111] mb-6">
                    Your Care Team
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {providers.map((p) => (
                      <Link
                        key={p.id}
                        href={`/providers/${p.id}`}
                        className="flex items-center gap-3 bg-[#F8F7F4] hover:bg-gray-100 rounded-xl px-4 py-3 transition-colors border border-gray-100"
                      >
                        <div>
                          <p className="text-sm font-semibold text-[#111111]">{p.name}, {p.credentials}</p>
                          <p className="text-xs text-gray-500">{p.title}</p>
                        </div>
                        <ArrowRight size={14} className="text-gray-300 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Book CTA inline */}
              <div className="bg-[#F8F7F4] rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-2">
                  Ready to Get Evaluated?
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  ParikhHealth serves patients from Sunnyvale, Santa Clara, Mountain View, Cupertino, and San Jose.
                  New patients welcome.
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
                    <Phone size={14} /> {SITE.phone.appointments}
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Related service */}
              {relatedService && (
                <div className="bg-[#111111] rounded-2xl p-7 text-white mb-6">
                  <span className="text-white/50 text-xs font-semibold tracking-widest uppercase">Related Service</span>
                  <h3 className="font-serif text-xl font-semibold mt-2 mb-3">{relatedService.name}</h3>
                  <p className="text-sm text-white/70 mb-5">{relatedService.shortDesc}</p>
                  <Link
                    href={`/services/${relatedService.id}`}
                    className="flex items-center gap-1 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              )}

              {/* Contact */}
              <div className="bg-[#F8F7F4] rounded-2xl p-7 mb-6">
                <h3 className="font-serif text-lg font-semibold text-[#111111] mb-4">Contact Us</h3>
                <div className="space-y-2 text-sm text-gray-500 mb-5">
                  <p>{SITE.address.full}</p>
                  <p>Phone: {SITE.phone.appointments}</p>
                  <p>Mon–Fri: 9:00 AM – 4:00 PM</p>
                </div>
                <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#111111] underline">Get directions</a>
              </div>

              {/* Other conditions */}
              <h3 className="font-serif text-lg font-semibold text-[#111111] mb-4">Other Conditions We Treat</h3>
              <ul className="space-y-1">
                {otherConditions.map((c) => (
                  <li key={c.id}>
                    <Link
                      href={`/conditions/${c.id}`}
                      className="flex items-center justify-between text-sm text-gray-600 hover:text-[#111111] py-2 border-b border-gray-100 group"
                    >
                      {c.name}
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-[#111111] transition-colors" />
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
