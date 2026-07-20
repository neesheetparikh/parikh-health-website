"use client";

import { ArrowRight } from "lucide-react";
import { SITE } from "@/content/site";

interface ZocdocBookButtonProps {
  className?: string;
  children?: React.ReactNode;
  /** Optional doctor/practice-specific URL override. */
  fallbackUrl?: string;
}

/**
 * Opens Zocdoc booking in a centered popup window rather than a full page
 * navigation, so patients stay oriented on parikhhealth.com while booking.
 *
 * We previously tried embedding Zocdoc in an <iframe> directly on the page.
 * That broke Zocdoc's booking flow: browsers increasingly block or partition
 * cookies/storage for third-party iframes as a privacy protection, so Zocdoc
 * couldn't persist form progress between steps and kept clearing patients'
 * information. A popup window is a real, separate first-party browsing
 * context (same as visiting Zocdoc directly), so its session storage works
 * normally — while still feeling like part of the booking experience rather
 * than a jarring full-tab redirect.
 */
export default function ZocdocBookButton({
  className,
  children,
  fallbackUrl,
}: ZocdocBookButtonProps) {
  const url = fallbackUrl ?? SITE.booking.zocdocUrl;

  const openBookingPopup = (e: React.MouseEvent) => {
    e.preventDefault();

    const width = 720;
    const height = 840;
    // Center relative to the current screen.
    const left = window.screenX + Math.max(0, (window.outerWidth - width) / 2);
    const top = window.screenY + Math.max(0, (window.outerHeight - height) / 2);

    const features = [
      `width=${width}`,
      `height=${height}`,
      `left=${Math.round(left)}`,
      `top=${Math.round(top)}`,
      "resizable=yes",
      "scrollbars=yes",
      "status=no",
      "toolbar=no",
      "menubar=no",
      "location=no",
    ].join(",");

    const popup = window.open(url, "zocdoc_booking", features);

    // Popup blocked (rare on a direct click, but handle it) — fall back to
    // a normal new-tab navigation so booking always works.
    if (!popup) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      popup.focus();
    }
  };

  return (
    <a href={url} onClick={openBookingPopup} className={className}>
      {children ?? (
        <>
          Book Now <ArrowRight size={18} />
        </>
      )}
    </a>
  );
}
