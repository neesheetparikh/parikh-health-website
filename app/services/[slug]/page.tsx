import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { SERVICES, SITE } from "@/content/site";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)" }}
      >
        <div className="site-container">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            {service.name}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-[#0F1F3D] mb-5">
                About This Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-base">
                {service.description}
              </p>

              <h3 className="font-serif text-2xl font-semibold text-[#0F1F3D] mb-5">
                What&apos;s Included
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      className="text-[#C9A465] mt-0.5 shrink-0"
                    />
                    <span className="text-sm text-gray-600">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-[#F8F7F4] rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-[#0F1F3D] mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  Book an appointment to discuss {service.name.toLowerCase()}{" "}
                  with one of our providers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/appointments"
                    className="inline-flex items-center justify-center gap-2 bg-[#0F1F3D] hover:bg-[#1a2f5a] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    Book an Appointment <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`tel:${SITE.phone.appointments}`}
                    className="inline-flex items-center justify-center gap-2 border border-[#0F1F3D]/20 hover:border-[#0F1F3D] text-[#0F1F3D] font-medium px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    <Phone size={14} /> Call Us
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#0F1F3D] rounded-2xl p-7 text-white mb-6">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Contact Us
                </h3>
                <div className="space-y-3 text-sm text-white/70 mb-6">
                  <p>{SITE.address.full}</p>
                  <p>Phone: {SITE.phone.appointments}</p>
                  <p>
                    Hours: Mon–Fri, 9:00 AM – 4:00 PM
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="block text-center bg-[#C9A465] hover:bg-[#b8912e] text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Send Us a Message
                </Link>
              </div>

              <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mb-4">
                Other Services
              </h3>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link
                      href={`/services/${r.id}`}
                      className="flex items-center justify-between text-sm text-gray-600 hover:text-[#0F1F3D] py-2 border-b border-gray-100 group"
                    >
                      {r.name}
                      <ArrowRight
                        size={14}
                        className="text-gray-300 group-hover:text-[#C9A465] transition-colors"
                      />
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
