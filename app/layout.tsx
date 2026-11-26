import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE, TEAM, SERVICES, primaryCredential } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Primary Care & Sports Medicine — Sunnyvale, CA`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "primary care Sunnyvale",
    "sports medicine Sunnyvale",
    "family doctor Sunnyvale CA",
    "physical therapy Sunnyvale",
    "concierge medicine Bay Area",
    "ParikhHealth",
    "Dr Neesheet Parikh",
    "doctor accepting new patients Sunnyvale",
    "osteopathic physician Sunnyvale",
    "sports physical Sunnyvale",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Primary Care & Sports Medicine`,
    description: SITE.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Primary Care & Sports Medicine`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE.url },
  verification: {
    google: "rjeDhH-2YElIeKbF-QumQFCG8KcEPmgdKlQQWifCSJg",
  },
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/og-image.jpg`,
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.description,
  telephone: `+1-${SITE.phone.appointments}`,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  // schema.org MedicalSpecialty enumeration values only; specifics go in knowsAbout.
  medicalSpecialty: ["PrimaryCare", "Musculoskeletal", "Physiotherapy"],
  knowsAbout: [
    "Family medicine",
    "Sports medicine",
    "Osteopathic manipulative treatment",
    "Physical therapy",
    "Pelvic floor physical therapy",
    "Concussion management",
    "Musculoskeletal ultrasound",
    "Concierge medicine",
    "Women's health",
    "Ayurvedic and integrative medicine",
    "Cricket sports medicine",
    "USCIS immigration medical exams (Form I-693)",
  ],
  areaServed: ["Sunnyvale", "Santa Clara", "San Jose", "Mountain View", "Cupertino", "Milpitas", "Fremont"].map(
    (name) => ({ "@type": "City", name })
  ),
  faxNumber: `+1-${SITE.phone.fax}`,
  availableService: SERVICES.map((s) => ({
    "@type": "MedicalTherapy",
    name: s.name,
    description: s.shortDesc,
    url: `${SITE.url}/services/${s.id}`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.score.toString(),
    reviewCount: SITE.rating.count.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: SITE.address.mapsUrl,
  sameAs: [
    SITE.social.google,
    SITE.booking.zocdocUrl,
    SITE.social.linkedin,
    SITE.social.facebook,
    SITE.social.instagram,
  ].filter(Boolean),
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Insurance",
  isAcceptingNewPatients: true,
};

const physicianSchemas = TEAM.filter((m) =>
  ["DO", "MD", "PA-C"].includes(primaryCredential(m))
).map((provider) => ({
  "@context": "https://schema.org",
  // Physicians are typed Physician; the PA is a Person with a job title.
  "@type": primaryCredential(provider) === "PA-C" ? "Person" : "Physician",
  ...(primaryCredential(provider) === "PA-C" ? { jobTitle: provider.title } : {}),
  "@id": `${SITE.url}/providers/${provider.id}`,
  name: `${provider.name}, ${provider.credentials}`,
  url: `${SITE.url}/providers/${provider.id}`,
  ...(provider.image ? { image: `${SITE.url}${provider.image}` } : {}),
  description: provider.bio,
  ...(primaryCredential(provider) === "PA-C"
    ? {}
    : { medicalSpecialty: ["PrimaryCare", "Musculoskeletal"] }),
  knowsAbout: provider.specialties,
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
    },
  },
  ...(primaryCredential(provider) === "PA-C" ? {} : { isAcceptingNewPatients: provider.acceptingNewPatients }),
  telephone: `+1-${SITE.phone.appointments}`,
}));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {physicianSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
