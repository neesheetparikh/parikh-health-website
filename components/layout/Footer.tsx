import Link from "next/link";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { SITE } from "@/content/site";


const SERVICES_LINKS = [
  { label: "Primary Care", href: "/services/primary-care" },
  { label: "Sports Medicine", href: "/services/sports-medicine" },
  { label: "Physical Therapy", href: "/services/physical-therapy" },
  { label: "Concierge Medicine", href: "/services/concierge-medicine" },
  { label: "Women's Health", href: "/services/womens-health" },
  { label: "Cosmetic Services", href: "/services/cosmetics" },
  { label: "Athlete Wellness", href: "/services/athlete-wellness" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/providers" },
  { label: "Book Appointment", href: "/appointments" },
  { label: "Education & Blog", href: "/education" },
  { label: "Contact", href: "/contact" },
  { label: "Patient Messages", href: "/contact#message" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Main footer */}
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-5">
              <span className="font-serif text-2xl font-semibold">
                ParikhHealth
              </span>
              <span className="text-xs text-white/60 tracking-widest uppercase mt-1">
                Sunnyvale, CA
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              Exceptional primary care and sports medicine for every stage of
              life — delivered with compassion, precision, and respect.
            </p>
            <a
              href={SITE.booking.zocdocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white hover:bg-white/90 text-[#111111] text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Book an Appointment
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-white/60 mt-0.5 shrink-0" />
                <a
                  href={SITE.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-white/60 shrink-0" />
                <a
                  href={`tel:${SITE.phone.general}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {SITE.phone.general}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-white/60 shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-white/60 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-0.5">
                  {SITE.hours.map((h) => (
                    <span key={h.day} className="text-sm text-white/70">
                      {h.day}: {h.hours}
                    </span>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-3 py-5">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ParikhHealth. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-white/40 hover:text-white/70 transition-colors"
            >
              Accessibility
            </Link>
            <span className="text-xs text-white/40">
              HIPAA Compliant Practice
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
