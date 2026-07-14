"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/content/site";

interface ZocdocBookButtonProps {
  className?: string;
  children?: React.ReactNode;
  /** Optional doctor/practice-specific fallback URL (used before the widget script loads, and as a safety net). */
  fallbackUrl?: string;
}

/**
 * Renders Zocdoc's official "Book Online Button" widget so scheduling happens
 * in an on-page overlay instead of sending patients to zocdoc.com.
 *
 * This uses Zocdoc's documented embed pattern: an anchor tag with
 * class="zd-plugin" data-type="book-button" data-practice-id="<id>", plus
 * their widget script (offsiteschedule.zocdoc.com/plugin/embed) which
 * intercepts clicks on that anchor and opens the scheduler in a modal.
 *
 * Note: this requires "Book Online Button" to be turned on in the practice's
 * Zocdoc account (Zocdoc dashboard → Manage your products → Book Online
 * Button). Until that's enabled, the anchor still works as a normal link to
 * zocdocUrl/fallbackUrl.
 */
export default function ZocdocBookButton({
  className,
  children,
  fallbackUrl,
}: ZocdocBookButtonProps) {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://offsiteschedule.zocdoc.com/plugin/embed";
    document.body.appendChild(script);
  }, []);

  return (
    <a
      href={fallbackUrl ?? SITE.booking.zocdocUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`zd-plugin ${className ?? ""}`}
      data-type="book-button"
      data-practice-id={SITE.booking.zocdocPracticeId}
    >
      {children ?? (
        <>
          Book Now <ArrowRight size={18} />
        </>
      )}
    </a>
  );
}
