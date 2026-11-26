import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TEAM, SITE, TESTIMONIALS, primaryCredential } from "@/content/site";
import RevealObserver from "@/components/effects/RevealObserver";
import styles from "./profile.module.css";

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

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function ProviderPage({ params }: Params) {
  const { id } = await params;
  const provider = TEAM.find((m) => m.id === id);
  if (!provider) notFound();

  const cred = primaryCredential(provider);
  const isDoctor = ["DO", "MD"].includes(cred);
  const isClinician = ["DO", "MD", "PA-C"].includes(cred);
  const firstName = provider.name.split(" ")[0];
  const lastName = provider.name.split(" ").slice(-1)[0];
  const shortName = isDoctor ? `Dr. ${lastName}` : firstName;

  // Booking: explicit link → provider; clinicians without one → practice ZocDoc; PT team → appointments page
  const bookingHref = provider.bookingUrl ?? (isClinician ? SITE.booking.zocdocUrl : "/appointments");
  const bookingExternal = bookingHref.startsWith("http");

  const facts = [
    ...(provider.facts ?? [
      { label: "Role", value: provider.title.replace(/^.*?—\s*/, "") || provider.title },
      { label: "Credentials", value: provider.credentials },
    ]),
    ...(provider.acceptingNewPatients ? [{ label: "New patients", value: "Accepting" }] : []),
  ];

  const about = provider.about ?? [provider.bio];

  // Only show patient stories that are actually about this provider
  const stories = TESTIMONIALS.filter((t) => t.quote.includes(firstName) || t.quote.includes(lastName)).slice(0, 2);

  const otherClinicians = TEAM.filter(
    (m) => m.id !== provider.id && ["DO", "MD", "PA-C"].includes(primaryCredential(m))
  ).slice(0, 3);

  const isPhysician = ["DO", "MD"].includes(primaryCredential(provider));

  const providerSchema = {
    "@context": "https://schema.org",
    // Physicians (DO/MD) are typed Physician; PAs and therapists are people with a job title.
    "@type": isPhysician ? "Physician" : "Person",
    ...(isPhysician ? {} : { jobTitle: provider.title }),
    "@id": `${SITE.url}/providers/${provider.id}`,
    name: `${provider.name}, ${provider.credentials}`,
    url: `${SITE.url}/providers/${provider.id}`,
    ...(provider.image ? { image: `${SITE.url}${provider.image}` } : {}),
    description: provider.bio,
    ...(isPhysician ? { medicalSpecialty: ["PrimaryCare", "Musculoskeletal"] } : {}),
    knowsAbout: provider.specialties,
    ...(provider.facts?.find((f) => f.label === "Languages")
      ? { knowsLanguage: provider.facts.find((f) => f.label === "Languages")!.value.split(",").map((l) => l.trim()) }
      : {}),
    worksFor: { "@id": `${SITE.url}/#organization` },
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
    ...(isPhysician ? { isAcceptingNewPatients: provider.acceptingNewPatients } : {}),
    telephone: `+1-${SITE.phone.appointments}`,
  };

  const BookButton = ({ label }: { label: string }) =>
    bookingExternal || bookingHref.startsWith("mailto:") ? (
      <a
        href={bookingHref}
        className={`${styles.btn} ${styles["btn-primary"]}`}
        target={bookingExternal ? "_blank" : undefined}
        rel={bookingExternal ? "noopener noreferrer" : undefined}
      >
        {label}
      </a>
    ) : (
      <Link href={bookingHref} className={`${styles.btn} ${styles["btn-primary"]}`}>
        {label}
      </Link>
    );

  return (
    <div className={styles.profile}>
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(providerSchema) }} />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <Link href="/providers" className={styles.back}>
            ← Our Team
          </Link>
          <div className={styles["hero-grid"]}>
            <div>
              <span className={styles.eyebrow}>{provider.title}</span>
              <h1>
                {isDoctor ? `Dr. ${provider.name}` : provider.name}
                <span className={styles.creds}>{provider.credentials}</span>
              </h1>
              {provider.highlight && <div className={styles.highlight}>{provider.highlight}</div>}
              <p className={styles.lead}>{provider.bio}</p>
              <div className={styles.chips}>
                {provider.specialties.map((s) => (
                  <span key={s} className={styles.chip}>
                    {s}
                  </span>
                ))}
              </div>
              <div className={styles["hero-actions"]}>
                <BookButton label={`Book with ${shortName}`} />
                <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>
                  Call {SITE.phone.appointments}
                </a>
              </div>
              {provider.acceptingNewPatients && <div className={styles.status}>Accepting New Patients</div>}
            </div>

            <div className={`${styles["card-frame"]} ${styles.reveal}`} data-reveal>
              {provider.image ? (
                <Image
                  className={styles.portrait}
                  src={provider.image}
                  alt={`${provider.name}, ${provider.credentials}`}
                  width={560}
                  height={700}
                  priority
                />
              ) : (
                <div className={styles["portrait-placeholder"]}>{initials(provider.name)}</div>
              )}
              <div className={styles.facts}>
                {facts.map((f) => (
                  <div key={f.label} className={styles.fact}>
                    <span>{f.label}</span>
                    <span>{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <div className={styles.seam} />
      </div>

      {/* ABOUT */}
      <section>
        <div className={styles.wrap}>
          <div className={styles["about-grid"]}>
            <div className={`${styles["about-text"]} ${styles.reveal}`} data-reveal>
              <span className={styles.eyebrow}>About</span>
              <h2 style={{ fontSize: "clamp(25px, 2.8vw, 34px)", fontWeight: 600, margin: "14px 0 24px" }}>
                About {provider.name}, {provider.credentials}
              </h2>
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className={styles.reveal} data-reveal>
              <div className={styles["side-card"]}>
                <h3>Clinical Focus</h3>
                <ul className={styles["focus-list"]}>
                  {provider.specialties.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className={`${styles["side-card"]} ${styles.visit}`}>
                <h3>Visit ParikhHealth</h3>
                <p>{SITE.address.full}</p>
                <p>
                  <a href={`tel:${SITE.phone.appointments}`}>{SITE.phone.appointments}</a>
                </p>
                <p>Mon – Fri · 9:00 AM – 4:00 PM</p>
                <p style={{ marginTop: 12 }}>
                  <Link href="/contact">Get directions →</Link>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      {provider.education && (
        <section className={styles.alt}>
          <div className={styles.wrap}>
            <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
              <span className={styles.eyebrow}>Background</span>
              <h2>Education &amp; training</h2>
            </div>
            <ul className={`${styles.timeline} ${styles.reveal}`} data-reveal>
              {provider.education.map((e) => (
                <li key={e.label}>
                  <div className={styles["t-label"]}>{e.label}</div>
                  <div className={styles["t-value"]}>{e.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* SPORTS COVERAGE */}
      {provider.sportsCoverage && (
        <section>
          <div className={styles.wrap}>
            <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
              <span className={styles.eyebrow}>On the Sidelines</span>
              <h2>Sports coverage</h2>
            </div>
            <div className={styles["cover-grid"]}>
              {provider.sportsCoverage.map((c) => (
                <div key={c.label} className={`${styles["cover-card"]} ${styles.reveal}`} data-reveal>
                  <h3>{c.label}</h3>
                  <p>{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRESENTATIONS + AFFILIATIONS */}
      {(provider.presentations || provider.affiliations) && (
        <section className={styles.alt}>
          <div className={styles.wrap}>
            <div className={styles["two-col"]}>
              {provider.presentations && (
                <div className={styles.reveal} data-reveal>
                  <h2 className={styles["col-title"]}>Selected presentations</h2>
                  <ul className={styles["pres-list"]}>
                    {provider.presentations.map((p) => (
                      <li key={p.title}>
                        <div className={styles["pres-title"]}>{p.title}</div>
                        <div className={styles["pres-detail"]}>{p.detail}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {provider.affiliations && (
                <div className={styles.reveal} data-reveal>
                  <h2 className={styles["col-title"]}>Awards &amp; associations</h2>
                  <div className={styles["side-card"]}>
                    <ul className={styles["focus-list"]}>
                      {provider.affiliations.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* PATIENT STORIES — only ones that mention this provider */}
      {stories.length > 0 && (
        <section className={styles.alt}>
          <div className={styles.wrap}>
            <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
              <span className={styles.eyebrow}>Patient Stories</span>
              <h2>What patients say</h2>
            </div>
            <div className={styles["quote-grid"]}>
              {stories.map((t) => (
                <div key={t.author} className={`${styles.quote} ${styles.reveal}`} data-reveal>
                  <div className={styles.stars}>{"★".repeat(t.rating)}</div>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <div className={styles["quote-author"]}>{t.author}</div>
                  <div className={styles["quote-detail"]}>{t.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MEET THE TEAM */}
      <section>
        <div className={styles.wrap}>
          <div className={`${styles["section-head"]} ${styles.reveal}`} data-reveal>
            <span className={styles.eyebrow}>One Team</span>
            <h2>Meet the rest of the care team</h2>
          </div>
          <div className={styles["team-grid"]}>
            {otherClinicians.map((m) => (
              <Link key={m.id} href={`/providers/${m.id}`} className={`${styles["team-card"]} ${styles.reveal}`} data-reveal>
                <div className={styles["team-photo"]}>
                  {m.image ? (
                    <Image src={m.image} alt={`${m.name}, ${m.credentials}`} width={112} height={112} />
                  ) : (
                    initials(m.name)
                  )}
                </div>
                <div>
                  <div className={styles["team-name"]}>
                    {m.name}, {m.credentials}
                  </div>
                  <div className={styles["team-role"]}>{m.title}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles["team-more"]}>
            <Link href="/providers" className={`${styles.btn} ${styles["btn-ghost"]}`}>
              View the full team
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={`${styles.alt} ${styles.final}`}>
        <div className={styles.wrap}>
          <div className={styles.reveal} data-reveal>
            <span className={styles.eyebrow}>Ready When You Are</span>
            <h2>Book a visit with {shortName}.</h2>
            <p>
              {provider.acceptingNewPatients
                ? `${shortName} is accepting new patients at our Sunnyvale office.`
                : "Call our office to check availability."}
            </p>
            <div className={styles["hero-actions"]}>
              <BookButton label="Book an Appointment" />
              <a href={`tel:${SITE.phone.appointments}`} className={`${styles.btn} ${styles["btn-ghost"]}`}>
                Call ParikhHealth
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
