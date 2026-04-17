"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Providers", href: "/providers" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={cn(
                "font-serif text-xl font-semibold tracking-tight transition-colors",
                scrolled ? "text-[#0F1F3D]" : "text-white"
              )}
            >
              ParikhHealth
            </span>
            <span
              className={cn(
                "text-xs font-light tracking-widest uppercase transition-colors",
                scrolled ? "text-[#C9A465]" : "text-[#C9A465]"
              )}
            >
              Sunnyvale, CA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide hover:text-[#C9A465] transition-colors",
                  scrolled ? "text-[#1a1a1a]" : "text-white/90"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phone.appointments}`}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors",
                scrolled ? "text-[#0F1F3D]" : "text-white/80 hover:text-white"
              )}
            >
              <Phone size={14} />
              {SITE.phone.appointments}
            </a>
            <Link
              href="/appointments"
              className="bg-[#C9A465] hover:bg-[#b8912e] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={cn(
              "lg:hidden p-2 rounded-md",
              scrolled ? "text-[#0F1F3D]" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="site-container flex flex-col gap-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[#1a1a1a] hover:text-[#C9A465] py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phone.appointments}`}
                className="flex items-center gap-2 text-sm text-[#0F1F3D]"
              >
                <Phone size={14} />
                {SITE.phone.appointments}
              </a>
              <Link
                href="/appointments"
                onClick={() => setOpen(false)}
                className="bg-[#C9A465] text-white text-sm font-medium px-5 py-3 rounded-full text-center"
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
