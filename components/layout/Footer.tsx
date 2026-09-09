import Link from "next/link";
import { SITE } from "@/content/site";
import styles from "./Footer.module.css";

const SERVICES_LINKS = [
  { label: "Primary Care", href: "/services/primary-care" },
  { label: "Sports Medicine", href: "/services/sports-medicine" },
  { label: "Physical Therapy", href: "/services/physical-therapy" },
  { label: "Concierge Medicine", href: "/services/concierge-medicine" },
  { label: "Women's Health", href: "/services/womens-health" },
  { label: "Integrative Medicine", href: "/services/integrative-medicine" },
  { label: "Aesthetic Services", href: "/services/cosmetics" },
  { label: "PitchFit", href: "/services/athlete-wellness" },
];

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/providers" },
  { label: "Book Appointment", href: "/appointments" },
  { label: "Education & Blog", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.seam} />
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles["footer-top"]}>
            {/* BRAND */}
            <div>
              <div className={styles["f-brand-mark"]}>ParikhHealth</div>
              <span className={styles["f-brand-loc"]}>Sunnyvale, CA</span>
              <p className={styles["f-tagline"]}>
                Primary care, sports medicine, physical therapy, aesthetics,
                and women&apos;s health — five specialties, one team, one
                Sunnyvale practice. Led by Dr. Neesheet Parikh, DO, team
                physician for USA Cricket.
              </p>
              <Link href="/appointments" className={styles["f-cta"]}>
                Book an Appointment
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </Link>
            </div>

            {/* SERVICES */}
            <nav aria-label="Services">
              <div className={styles["f-col-label"]}>Services</div>
              <ul className={styles["f-links"]}>
                {SERVICES_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* QUICK LINKS */}
            <nav aria-label="Quick links">
              <div className={styles["f-col-label"]}>Quick Links</div>
              <ul className={styles["f-links"]}>
                {QUICK_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CONTACT */}
            <div>
              <div className={styles["f-col-label"]}>Contact</div>
              <address className={styles["f-address"]}>
                <div className={styles["f-contact-item"]}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <a href={SITE.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {SITE.address.street}<br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </a>
                </div>
                <div className={styles["f-contact-item"]}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .3 2 .6 3a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c1 .3 2 .5 3 .6a2 2 0 011.7 2z" /></svg>
                  <a href={`tel:${SITE.phone.general}`}>{SITE.phone.general}</a>
                </div>
                <div className={styles["f-contact-item"]}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /><path d="M4 6l8 7 8-7" /></svg>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
                <div className={styles["f-contact-item"]}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
                  <div>
                    {SITE.hours.map((h, i) => (
                      i === 0 ? (
                        <p key={h.day}>{h.day}: {h.hours}</p>
                      ) : (
                        <p key={h.day} className={styles["f-hours-day"]}>{h.day}: {h.hours}</p>
                      )
                    ))}
                  </div>
                </div>
              </address>
            </div>
          </div>

          <div className={styles["footer-bottom"]}>
            <span className={styles["f-copyright"]}>© {new Date().getFullYear()} ParikhHealth. All rights reserved.</span>
            <div className={styles["f-legal"]}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/accessibility">Accessibility</Link>
              <span className={styles["f-hipaa"]}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
                HIPAA Compliant Practice
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
