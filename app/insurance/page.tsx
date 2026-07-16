import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { SITE, ACCEPTED_PLANS, NOT_ACCEPTED_PLANS } from "@/content/site";

export const metadata: Metadata = {
  title: "Insurance & Accepted Plans",
  description: "ParikhHealth accepts most major PPO insurance plans in Sunnyvale, CA. View accepted plans and learn about self-pay and concierge options.",
  alternates: { canonical: `${SITE.url}/insurance` },
};

export default function InsurancePage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <span className="text-white/50 text-sm font-semibold tracking-widest uppercase">
            ParikhHealth
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            Insurance & Accepted Plans
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            We accept most major PPO insurance plans. If you don&apos;t see yours listed, call us — we can verify your benefits before your visit.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">

              {/* Accepted plans */}
              <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-8">
                Accepted Insurance Plans
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {ACCEPTED_PLANS.map((plan) => (
                  <div key={plan.name} className="flex items-start gap-3 bg-[#F8F7F4] rounded-xl p-5 border border-gray-100">
                    <CheckCircle2 size={17} className="text-green-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#111111] text-sm">{plan.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{plan.notes}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Not accepted */}
              <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-6">
                Plans We Do Not Accept
              </h2>
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 mb-12">
                <ul className="space-y-2 mb-5">
                  {NOT_ACCEPTED_PLANS.map((plan) => (
                    <li key={plan} className="flex items-center gap-3 text-sm text-gray-700">
                      <span className="w-4 h-4 rounded-full border-2 border-orange-300 shrink-0" />
                      {plan}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-700 leading-relaxed pt-4 border-t border-orange-100">
                  Have one of these plans and still want to see us? You&apos;re
                  welcome to pay cash for your visit, or join our{" "}
                  <Link href="/services/concierge-medicine" className="font-medium text-[#111111] hover:underline">
                    Concierge Medicine
                  </Link>{" "}
                  program for direct access to Dr. Parikh, independent of
                  insurance.
                </p>
              </div>

              {/* Important notes */}
              <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-6">
                Important Insurance Information
              </h2>
              <div className="space-y-5 text-gray-600 text-sm leading-relaxed">
                <p>
                  <strong className="text-[#111111]">Always verify your benefits first.</strong> Even if your plan is listed above, coverage specifics — deductibles, copays, in-network status — vary by employer and plan year. We recommend calling the member services number on the back of your insurance card to confirm ParikhHealth is in-network before your first visit.
                </p>
                <p>
                  <strong className="text-[#111111]">Physical therapy benefits are separate.</strong> PT services are billed to insurance but are subject to your plan&apos;s PT-specific benefits, which may differ from medical benefits. Your PT benefits (copay, sessions per year, deductible) should be verified separately.
                </p>
                <p>
                  <strong className="text-[#111111]">Aesthetic services are not covered by insurance.</strong> Botox, microneedling, PRP treatments, and other aesthetic services are self-pay only.
                </p>
                <p>
                  <strong className="text-[#111111]">Concierge membership fees are not covered by insurance.</strong> The membership fee is a separate charge for enhanced access. Standard clinical services rendered during concierge visits are still billed to your insurance as normal.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Self-pay */}
              <div className="bg-[#F8F7F4] rounded-2xl p-7 mb-6">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">
                  Self-Pay Options
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Don&apos;t have insurance or prefer to pay out-of-pocket? We offer transparent self-pay rates for all services. Call us for current pricing.
                </p>
                <a
                  href={`tel:${SITE.phone.appointments}`}
                  className="flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-gray-600 transition-colors"
                >
                  <Phone size={14} />
                  {SITE.phone.appointments}
                </a>
              </div>

              {/* Verify coverage */}
              <div className="bg-[#111111] rounded-2xl p-7 text-white mb-6">
                <h3 className="font-serif text-xl font-semibold mb-3">
                  Verify Your Coverage
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-5">
                  Call us before your first visit and our team will help verify your in-network status and estimate your out-of-pocket costs.
                </p>
                <a
                  href={`tel:${SITE.phone.appointments}`}
                  className="block text-center bg-white text-[#111111] font-medium px-5 py-2.5 rounded-full text-sm hover:bg-white/90 transition-colors"
                >
                  Call {SITE.phone.appointments}
                </a>
              </div>

              {/* Concierge note */}
              <div className="border border-gray-200 rounded-2xl p-7">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">
                  No Insurance?
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Our Concierge Medicine and PitchFit memberships work alongside or independently of insurance — providing direct access to Dr. Parikh without the need for traditional insurance billing.
                </p>
                <Link
                  href="/services/concierge-medicine"
                  className="flex items-center gap-1 text-sm font-medium text-[#111111] hover:text-gray-600 transition-colors"
                >
                  Learn about Concierge Medicine <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="site-container-narrow text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-4">
            Questions About Your Coverage?
          </h2>
          <p className="text-gray-500 mb-8">
            Our team is happy to help you understand your benefits before your first visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phone.appointments}`}
              className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              <Phone size={16} /> Call {SITE.phone.appointments}
            </a>
            <Link
              href="/appointments"
              className="inline-flex items-center justify-center gap-2 border border-[#111111]/20 hover:border-[#111111] text-[#111111] font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
            >
              Book an Appointment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
