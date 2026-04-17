import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  ArrowRight,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { SITE, SERVICES, TESTIMONIALS, TEAM } from "@/content/site";
import { getAllPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ParikhHealth | Primary Care & Sports Medicine — Sunnyvale, CA",
  description:
    "ParikhHealth in Sunnyvale, CA offers exceptional primary care, sports medicine, physical therapy, and concierge medicine. Accepting new patients — book online today.",
};

// JSON-LD structured data for Google
function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "LocalBusiness"],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone.appointments,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.373,
      longitude: -122.002,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating.score,
      reviewCount: SITE.rating.count,
    },
    hasMap: SITE.address.mapsUrl,
    medicalSpecialty: [
      "FamilyMedicine",
      "SportsMedicine",
      "PhysicalTherapy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const FEATURED_SERVICES = SERVICES.slice(0, 4);

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <JsonLd />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100svh] flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #0F1F3D 0%, #1a3058 60%, #0d2847 100%)",
        }}
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C9A465 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ffffff 0%, transparent 40%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-[#C9A465] text-[#C9A465]"
                  />
                ))}
              </div>
              <span className="text-white/90 text-sm font-medium">
                {SITE.rating.score} · {SITE.rating.count} patient reviews
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6">
              Medicine the way
              <br />
              <em className="text-[#C9A465] not-italic">it should be.</em>
            </h1>

            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Primary care, sports medicine, and physical therapy — delivered by
              a team that takes the time to truly know you. Serving Sunnyvale
              and the greater Bay Area.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointments"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A465] hover:bg-[#b8912e] text-white font-medium px-8 py-4 rounded-full text-base transition-colors"
              >
                Book an Appointment
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-full text-base transition-colors"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Quick info row */}
            <div className="mt-16 flex flex-wrap gap-6">
              {[
                {
                  icon: MapPin,
                  text: SITE.address.city + ", " + SITE.address.state,
                },
                { icon: Clock, text: "Mon – Fri  9 AM – 4 PM" },
                { icon: Phone, text: SITE.phone.appointments },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <Icon size={14} className="text-[#C9A465]" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 48"
            className="w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48L60 42.7C120 37.3 240 26.7 360 21.3C480 16 600 16 720 18.7C840 21.3 960 26.7 1080 29.3C1200 32 1320 32 1380 32L1440 32V48H1380C1320 48 1200 48 1080 48C960 48 840 48 720 48C600 48 480 48 360 48C240 48 120 48 60 48H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-100">
            {[
              { value: "15+", label: "Years in Practice" },
              { value: "201+", label: "5-Star Reviews" },
              { value: "8", label: "Specialty Services" },
              { value: "3", label: "Expert Providers" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center px-6"
              >
                <span className="font-serif text-4xl font-semibold text-[#0F1F3D] mb-1">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <section className="bg-[#F8F7F4] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
              What We Offer
            </span>
            <h2 className="font-serif text-4xl font-semibold text-[#0F1F3D] mt-3 mb-4">
              Comprehensive Care Under One Roof
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From annual physicals to sports rehabilitation, we bring a full
              spectrum of medical expertise to our Sunnyvale practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {FEATURED_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#C9A465]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0F1F3D]/5 flex items-center justify-center mb-5 group-hover:bg-[#C9A465]/10 transition-colors">
                  <div className="w-4 h-4 rounded-full bg-[#C9A465]" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
                <span className="flex items-center gap-1 text-xs font-semibold text-[#C9A465]">
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0F1F3D] font-medium border border-[#0F1F3D]/20 hover:border-[#0F1F3D] px-6 py-3 rounded-full transition-colors text-sm"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
                Our Philosophy
              </span>
              <h2 className="font-serif text-4xl font-semibold text-[#0F1F3D] mt-3 mb-5 leading-snug">
                Medicine That Sees
                <br />
                the Whole Person
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We believe the best medical care is built on relationship, not
                transactions. Every patient deserves time, attention, and a
                provider who knows their history — not just their last visit.
              </p>
              <ul className="space-y-4">
                {[
                  "Board-certified physicians with subspecialty training",
                  "In-house physical therapy with state-of-the-art Fit3D scanning",
                  "Integrated team approach — your providers talk to each other",
                  "Same-day sick visits available",
                  "Concierge membership option for maximum access",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-[#C9A465] mt-0.5 shrink-0"
                    />
                    <span className="text-gray-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#0F1F3D] hover:bg-[#1a2f5a] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
                >
                  About Our Practice <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Team preview */}
            <div className="grid grid-cols-1 gap-4">
              {TEAM.map((member) => (
                <Link
                  key={member.id}
                  href="/providers"
                  className="group flex items-center gap-5 bg-[#F8F7F4] hover:bg-[#0F1F3D] rounded-2xl p-5 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#0F1F3D]/10 group-hover:bg-white/10 flex items-center justify-center shrink-0 transition-colors overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-[#C9A465]/30" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-[#0F1F3D] group-hover:text-white transition-colors">
                      {member.name},{" "}
                      <span className="font-normal">{member.credentials}</span>
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-white/60 transition-colors">
                      {member.title}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="ml-auto text-gray-300 group-hover:text-white/50 transition-colors"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────────── */}
      <section className="bg-[#0F1F3D] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
              Patient Stories
            </span>
            <h2 className="font-serif text-4xl font-semibold text-white mt-3">
              What Our Patients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={14}
                      className="fill-[#C9A465] text-[#C9A465]"
                    />
                  ))}
                </div>
                <blockquote className="text-white/80 text-sm leading-relaxed italic flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-white font-medium text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 text-white/60 text-sm">
              <Star size={14} className="fill-[#C9A465] text-[#C9A465]" />
              {SITE.rating.score} average rating · {SITE.rating.count} verified
              reviews on Google
            </div>
          </div>
        </div>
      </section>

      {/* ── EDUCATION PREVIEW ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
                Health Education
              </span>
              <h2 className="font-serif text-4xl font-semibold text-[#0F1F3D] mt-3">
                From Our Providers
              </h2>
            </div>
            <Link
              href="/education"
              className="hidden md:flex items-center gap-1.5 text-sm text-[#0F1F3D] font-medium hover:text-[#C9A465] transition-colors"
            >
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/education/${post.slug}`}
                className="group"
              >
                <div className="bg-[#F8F7F4] rounded-2xl overflow-hidden h-40 mb-5 group-hover:opacity-90 transition-opacity" />
                <span className="text-xs font-semibold text-[#C9A465] uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#0F1F3D] mt-1.5 mb-2 group-hover:text-[#C9A465] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>·</span>
                  <span>{post.readingTime} read</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 md:hidden">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 text-[#0F1F3D] font-medium text-sm"
            >
              View All Articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-semibold text-white mb-4">
            Ready to Experience Exceptional Care?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            New and existing patients welcome. Appointments available Monday
            through Friday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A465] hover:bg-[#b8912e] text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE.phone.appointments}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              <Phone size={18} />
              Call {SITE.phone.appointments}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
