import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ParikhHealth privacy policy — how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-36 pb-24">
      <div className="site-container-narrow">
        <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">Legal</span>
        <h1 className="font-serif text-4xl font-semibold text-[#111111] mt-3 mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600">
          <p className="text-sm text-gray-400 mb-8">Last updated: {new Date().getFullYear()}</p>
          <h2>1. Information We Collect</h2>
          <p>
            ParikhHealth collects information you provide directly to us, such as when you submit a
            contact form, book an appointment, or communicate with us. This may include your name,
            email address, phone number, and the content of your messages.
          </p>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, schedule appointments,
            and provide medical services. We do not sell, trade, or otherwise transfer your personal
            information to third parties.
          </p>
          <h2>3. HIPAA</h2>
          <p>
            As a healthcare provider, we are subject to the Health Insurance Portability and
            Accountability Act (HIPAA). Our Notice of Privacy Practices, provided at your first
            visit, describes in detail how we handle your protected health information.
          </p>
          <h2>4. Website Analytics</h2>
          <p>
            We may use analytics tools (such as Google Analytics) to understand how visitors use our
            website. This data is anonymized and does not include personal health information.
          </p>
          <h2>5. Contact</h2>
          <p>
            For privacy-related questions, contact us at{" "}
            <a href="mailto:info@parikhhealth.com">info@parikhhealth.com</a> or{" "}
            <Link href="/contact">via our contact form</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
