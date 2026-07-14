"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { SITE } from "@/content/site";

interface ZocdocBookButtonProps {
  className?: string;
  children?: React.ReactNode;
  /** Optional doctor/practice-specific URL override. */
  fallbackUrl?: string;
}

/**
 * Opens Zocdoc booking in an on-page modal (iframe embed) instead of
 * navigating away or opening a separate browser window/tab, so patients
 * never leave parikhhealth.com.
 *
 * Note: some booking platforms block being framed by other sites (via
 * X-Frame-Options / CSP) for security reasons. If Zocdoc does this, the
 * iframe will appear blank — the visible "open in a new tab" link below
 * it is the fallback for that case.
 */
export default function ZocdocBookButton({
  className,
  children,
  fallbackUrl,
}: ZocdocBookButtonProps) {
  const [open, setOpen] = useState(false);
  const url = fallbackUrl ?? SITE.booking.zocdocUrl;

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href={url}
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        className={className}
      >
        {children ?? (
          <>
            Book Now <ArrowRight size={18} />
          </>
        )}
      </a>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Book an appointment"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-2xl h-[88vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 shrink-0">
              <span className="text-sm font-medium text-gray-500">
                Book an Appointment — ZocDoc
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <iframe
              src={url}
              title="Book an appointment with ZocDoc"
              className="flex-1 w-full"
            />
            <div className="px-5 py-2.5 border-t border-gray-100 text-center shrink-0">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
              >
                Trouble loading? Open in a new tab
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
