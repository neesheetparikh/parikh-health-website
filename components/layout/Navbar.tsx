"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Primary Care", href: "/services/primary-care" },
      { label: "Sports Medicine", href: "/services/sports-medicine" },
      { label: "Physical Therapy", href: "/services/physical-therapy" },
      { label: "Concierge Medicine", href: "/services/concierge-medicine" },
      { label: "Athlete Wellness", href: "/services/athlete-wellness" },
      { label: "Women's Health", href: "/services/womens-health" },
      { label: "Aesthetic Services", href: "/services/cosmetics" },
    ],
  },
  { label: "Team", href: "/providers" },
  { label: "Education", href: "/education" },
  {
    label: "Patients",
    href: "/new-patients",
    children: [
      { label: "New Patients", href: "/new-patients" },
      { label: "Insurance & Plans", href: "/insurance" },
      { label: "FAQ", href: "/faq" },
      { label: "Patient Reviews", href: "/reviews" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md",
        scrolled ? "shadow-sm border-b border-gray-100" : "border-b border-gray-100"
      )}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-serif text-xl font-semibold tracking-tight text-[#111111]">
              ParikhHealth
            </span>
            <span className="text-xs font-light tracking-widest uppercase text-gray-400">
              Sunnyvale, CA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] hover:text-[#111111] transition-colors">
                    {link.label}
                    <ChevronDown size={13} className={cn("transition-transform", activeDropdown === link.href ? "rotate-180" : "")} />
                  </button>
                  {activeDropdown === link.href && (
                    <div className="absolute top-full left-0 pt-2 w-52 z-50">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#111111] hover:bg-[#F8F7F4] transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide hover:text-[#111111] transition-colors text-[#1a1a1a]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone.appointments}`}
              className="flex items-center gap-1.5 text-sm font-medium text-[#111111] hover:text-[#333333] transition-colors"
            >
              <Phone size={14} />
              {SITE.phone.appointments}
            </a>
            <Link
              href="/appointments"
              className="bg-[#111111] hover:bg-[#333333] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-[#111111]"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="site-container flex flex-col gap-1 py-6">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-[#1a1a1a] hover:text-[#111111] py-2"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1 mb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-gray-500 hover:text-[#111111] py-1.5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3 mt-2">
              <a
                href={`tel:${SITE.phone.appointments}`}
                className="flex items-center gap-2 text-sm text-[#111111]"
              >
                <Phone size={14} />
                {SITE.phone.appointments}
              </a>
              <Link
                href="/appointments"
                onClick={() => setOpen(false)}
                className="bg-[#111111] text-white text-sm font-medium px-5 py-3 rounded-full text-center block"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
