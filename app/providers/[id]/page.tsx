import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Calendar, Star } from "lucide-react";
import { TEAM, SITE, TESTIMONIALS } from "@/content/site";

interface Params {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TEAM.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const provider = TEAM.find((m) => m.id === id);
  if (!provider) return {};
  return {
    title: `${provider.name}, ${provider.credentials} | ParikhHealth`,
    description: provider.bio,
    alternates: { canonical: `${SITE.url}/providers/${provider.id}` },
    openGraph: {
      title: `${provider.name}, ${provider.credentials} | ParikhHealth`,
      description: provider.bio,
      images: provider.image ? [{ url: provider.image }] : [],
    },
  };
}

export default async function ProviderPage({ params }: Params) {
  const { id } = await params;
  const provider = TEAM.find((m) => m.id === id);
  if (!provider) notFound();

  const isPhysician = ["DO", "MD", "PA-C"].includes(provider.credentials);
  const isPT = ["PT", "PTA"].includes(provider.credentials);

  // Provider-specific schema
  const providerSchema = {
    "@context": "https://schema.org",
    "@type": isPhysician ? "Physician" : "MedicalBusiness",
    "@id": `${SITE.url}/providers/${provider.id}`,
    name: `${provider.name}, ${provider.credentials}`,
    url: `${SITE.url}/providers/${provider.id}`,
    description: provider.bio,
    medicalSpecialty: provider.specialties,
    worksFor: {
      "@type": "MedicalClinic",
      name: SITE.name,
      url: SITE.url,
    },
    workLocation: {
      "@type": "MedicalClinic",
      name: SITE.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.state,
        postalCode: SITE.address.zip,
        addressCountry: "US",
      },
    },
    isAcceptingNewPatients: provider.acceptingNewPatients,
    telephone: `+1-${SITE.phone.appointments}`,
  };

  const otherProviders = TEAM.filter((m) => m.id !== provider.id).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(providerSchema) }}
      />

      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <Link
            href="/providers"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Our Team
          </Link>
          <div className="flex items-end gap-6">
            <div>
              <span className="text-white/50 text-sm font-semibold tracking-widest uppercase">
                {provider.title}
              </span>
              <h1 className="font-serif text-5xl font-semibold text-white mt-2 mb-3 leading-tight">
                {provider.name}
              </h1>
              <p className="text-white/60 text-xl font-light">{provider.credentials}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Bio column */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              {/* Photo — mobile only */}
              <div className="lg:hidden bg-[#F8F7F4] rounded-3xl h-80 overflow-hidden flex items-center justify-center mb-10">
                {provider.image ? (
                  <Image
                    src={provider.image}
                    alt={`${provider.name}, ${provider.credentials}`}
                    width={700}
                    height={320}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                ) : (
                  <span className="text-gray-300 text-sm">{provider.name}</span>
                )}
              </div>

              <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-6">
                About {provider.name.split(" ")[0]}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base mb-10">
                {provider.bio}
              </p>

              {/* Specialties */}
              <div className="mb-10">
                <h3 className="text-xs font-semibold text-[#111111] uppercase tracking-widest mb-4">
                  Clinical Focus
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {provider.specialties.map((s) => (
                    <div key={s} className="flex items-center gap-3">
                      <CheckCircle2 size={15} className="text-[#111111] shrink-0" />
                      <span className="text-sm text-gray-600">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accepting patients badge */}
              {provider.acceptingNewPatients && (
                <div className="flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 px-4 py-3 rounded-xl w-fit mb-10 border border-green-100">
                  <CheckCircle2 size={15} />
                  Currently accepting new patients
                </div>
              )}

              {/* Book CTA */}
              {"bookingUrl" in provider && provider.bookingUrl && (
                <div className="bg-[#F8F7F4] rounded-2xl p-8 mb-10">
                  <h3 className="font-serif text-xl font-semibold text-[#111111] mb-2">
                    Book with {provider.name.split(" ")[0]}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    Appointments available Monday – Friday. New patients welcome.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={(provider as { bookingUrl?: string }).bookingUrl ?? SITE.booking.zocdocUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
                    >
                      <Calendar size={14} />
                      Book an Appointment
                    </a>
                    <a
                      href={`tel:${SITE.phone.appointments}`}
                      className="inline-flex items-center justify-center gap-2 border border-[#111111]/20 hover:border-[#111111] text-[#111111] font-medium px-6 py-3 rounded-full text-sm transition-colors"
                    >
                      <Phone size={14} />
                      {SITE.phone.appointments}
                    </a>
                  </div>
                </div>
              )}

              {!("bookingUrl" in provider && (provider as { bookingUrl?: string }).bookingUrl) && (
                <div className="bg-[#F8F7F4] rounded-2xl p-8 mb-10">
                  <h3 className="font-serif text-xl font-semibold text-[#111111] mb-2">
                    Book Physical Therapy
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    PT appointments can be booked through our main scheduling line.
                  </p>
                  <a
                    href={`tel:${SITE.phone.appointments}`}
                    className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    <Phone size={14} />
                    {SITE.phone.appointments}
                  </a>
                </div>
              )}

              {/* Patient testimonials (show 1-2 relevant ones) */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#111111] mb-6">
                  Patient Stories
                </h3>
                <div className="space-y-4">
                  {TESTIMONIALS.slice(0, 2).map((t, i) => (
                    <div key={i} className="bg-[#F8F7F4] rounded-2xl p-6 border border-gray-100">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={13} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <p className="text-xs font-semibold text-[#111111]">{t.author}</p>
                      <p className="text-xs text-gray-400">{t.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="order-1 lg:order-2">
              {/* Photo — desktop */}
              <div className="hidden lg:block bg-[#F8F7F4] rounded-3xl overflow-hidden mb-8 h-[480px]">
                {provider.image ? (
                  <Image
                    src={provider.image}
                    alt={`${provider.name}, ${provider.credentials}`}
                    width={560}
                    height={480}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-300 text-sm">{provider.name}</span>
                  </div>
                )}
              </div>

              {/* Practice info */}
              <div className="bg-[#111111] rounded-2xl p-7 text-white mb-6">
                <h3 className="font-serif text-lg font-semibold mb-4">Visit ParikhHealth</h3>
                <div className="space-y-3 text-sm text-white/70">
                  <p>{SITE.address.full}</p>
                  <p>Phone: {SITE.phone.appointments}</p>
                  <p>Mon – Fri: 9:00 AM – 4:00 PM</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-5 block text-center bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Get Directions
                </Link>
              </div>

              {/* Other providers */}
              <h3 className="font-serif text-lg font-semibold text-[#111111] mb-4">
                Meet the Team
              </h3>
              <ul className="space-y-2">
                {otherProviders.map((m) => (
                  <li key={m.id}>
                    <Link
                      href={`/providers/${m.id}`}
                      className="flex items-center justify-between text-sm text-gray-600 hover:text-[#111111] py-2 border-b border-gray-100 group"
                    >
                      <span>
                        {m.name},{" "}
                        <span className="text-gray-400">{m.credentials}</span>
                      </span>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#111111] transition-colors" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/providers"
                    className="flex items-center justify-between text-sm text-[#111111] font-medium py-2 group"
                  >
                    View full team
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-[#111111] transition-colors" />
                  </Link>
                </li>
              </ul>
            </div>
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
            Ready to Be a Patient?
          </h2>
          <p className="text-white/70 mb-8">
            {SITE.name} is currently accepting new patients. Book online or call us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#111111] font-medium px-8 py-4 rounded-full transition-colors"
            >
              Book an Appointment <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE.phone.appointments}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              <Phone size={16} />
              {SITE.phone.appointments}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
