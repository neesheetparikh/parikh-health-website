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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md",
        scrolled ? "shadow-sm border-b border-gray-100" : "border-b border-gray-100"
      )}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={cn(
                "font-serif text-xl font-semibold tracking-tight transition-colors",
                "text-[#111111]"
              )}
            >
              ParikhHealth
            </span>
            <span
              className={cn(
                "text-xs font-light tracking-widest uppercase transition-colors",
                "text-gray-400"
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
                  "text-sm font-medium tracking-wide hover:text-[#111111] transition-colors",
                  "text-[#1a1a1a]"
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
                "text-[#111111] hover:text-[#333333]"
              )}
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
            className={cn(
              "lg:hidden p-2 rounded-md",
              "text-[#111111]"
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
                className="text-base font-medium text-[#1a1a1a] hover:text-[#111111] py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
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
                className="bg-[#111111] text-white text-sm font-medium px-5 py-3 rounded-full text-center"
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
