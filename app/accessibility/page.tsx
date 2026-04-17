import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "ParikhHealth is committed to making our website accessible to all users.",
};

export default function AccessibilityPage() {
  return (
    <section className="bg-white pt-36 pb-24">
      <div className="site-container-narrow">
        <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">Legal</span>
        <h1 className="font-serif text-4xl font-semibold text-[#0F1F3D] mt-3 mb-8">
          Accessibility Statement
        </h1>
        <div className="prose prose-lg text-gray-600">
          <p>
            ParikhHealth is committed to ensuring digital accessibility for all users, including
            people with disabilities. We continually improve the user experience for everyone and
            apply relevant accessibility standards.
          </p>
          <h2>Conformance Status</h2>
          <p>
            We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
          </p>
          <h2>Technical Specifications</h2>
          <p>
            Our website relies on the following technologies for conformance: HTML, CSS, JavaScript.
          </p>
          <h2>Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you encounter
            accessibility barriers, please contact us at{" "}
            <a href="mailto:info@parikhhealth.com">info@parikhhealth.com</a> or call{" "}
            <a href="tel:408-266-3100">408-266-3100</a>.
          </p>
          <p>We try to respond to accessibility feedback within 2 business days.</p>
        </div>
      </div>
    </section>
  );
}
