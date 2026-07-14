import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { SITE, SERVICES } from "@/content/site";

export const metadata: Metadata = {
  title: "Women's Health | ParikhHealth Sunnyvale CA",
  description:
    "Comprehensive women's primary care in Sunnyvale, CA — annual well-woman exams, Pap smears, contraception, menopause, PCOS, hormone health, pelvic floor co-management, and more. Dr. Neesheet Parikh, DO.",
};

const SECTIONS = [
  {
    title: "Preventive & Wellness",
    intro:
      "Preventive care is the foundation of women's health. We follow current USPSTF, ACOG, and ACR guidelines and tailor your screening schedule to your age, history, and risk factors.",
    items: [
      "Annual well-woman exams",
      "Pap smears / cervical cancer screening (every 3 years, or every 5 years with HPV co-test)",
      "Breast cancer screening — mammogram orders, clinical breast exams, risk assessment",
      "Osteoporosis screening — DEXA scan ordering and interpretation",
      "STI screening (HIV, gonorrhea, chlamydia, syphilis, hepatitis B & C)",
      "Immunizations — HPV vaccine, Tdap, influenza, RSV, COVID-19 boosters",
    ],
  },
  {
    title: "Reproductive & Gynecologic",
    intro:
      "From routine gynecologic concerns to complex hormonal conditions, we provide primary-level management and coordinate specialist care when needed.",
    items: [
      "Contraception management — pills, patch, ring, IUD counseling, Nexplanon",
      "Dysmenorrhea (painful periods) — evaluation and treatment",
      "Menorrhagia / abnormal uterine bleeding — workup and management",
      "PCOS (Polycystic Ovary Syndrome) — diagnosis, metabolic management, fertility counseling",
      "PMS / PMDD — symptom management, lifestyle and medication options",
      "Vaginitis — bacterial vaginosis, yeast infections, trichomoniasis",
      "UTIs / recurrent UTIs — treatment and prevention strategies",
      "Pelvic inflammatory disease (PID) — initial evaluation and management",
      "Endometriosis — diagnosis support, symptom management, OB/GYN co-management",
      "Uterine fibroids — monitoring, symptom management, referral coordination",
      "Ovarian cysts — monitoring, imaging coordination, referral when indicated",
    ],
  },
  {
    title: "Menopause & Hormones",
    intro:
      "Menopause is a natural transition — but it shouldn't disrupt your quality of life. We offer evidence-based hormone management tailored to your symptoms, history, and goals.",
    items: [
      "Perimenopause / menopause management — hot flashes, sleep, mood, and cognitive symptoms",
      "Hormone replacement therapy (HRT) — initiation, dose optimization, and long-term monitoring",
      "Genitourinary syndrome of menopause (GSM) — vaginal dryness, recurrent UTIs, discomfort",
      "Sexual dysfunction / low libido — evaluation and treatment options",
      "Premature ovarian insufficiency (POI) — diagnosis, hormone management, bone health",
    ],
  },
  {
    title: "Pregnancy-Adjacent",
    intro:
      "We support women before, during, and after pregnancy — coordinating closely with your OB/GYN throughout.",
    items: [
      "Preconception counseling — optimizing health before pregnancy",
      "Prenatal labs and first trimester care — coordinating early pregnancy workup",
      "Postpartum depression / anxiety — screening, counseling, medication management",
      "Lactation support — basic guidance and referral to lactation specialists",
    ],
  },
  {
    title: "Mental Health (Women-Specific)",
    intro:
      "Mental health and hormonal health are deeply connected. We screen routinely and provide integrated management for mood disorders with hormonal correlations.",
    items: [
      "Postpartum depression & anxiety — screening (EPDS), counseling, medication",
      "Perinatal mood disorders — management across pregnancy and postpartum",
      "Depression and anxiety with hormonal correlations — cycle-related mood changes, perimenopausal depression",
      "Eating disorders — initial evaluation, nutritional counseling coordination, specialist referral",
    ],
  },
  {
    title: "Cardiometabolic (Women-Specific Presentations)",
    intro:
      "Women experience cardiometabolic disease differently than men. We address these conditions with a sex-specific lens.",
    items: [
      "Hypertension in women — including history of pregnancy-related hypertension (preeclampsia)",
      "Metabolic syndrome / insulin resistance — often tied to PCOS, menopause, or thyroid dysfunction",
      "Thyroid disorders — hypothyroidism, Hashimoto's thyroiditis, hyperthyroidism screening",
      "Anemia — iron deficiency anemia, B12/folate deficiency, workup and management",
    ],
  },
  {
    title: "Musculoskeletal (Women-Specific)",
    intro:
      "Several musculoskeletal conditions disproportionately affect women. We manage these with a whole-body approach, coordinating physical therapy when appropriate.",
    items: [
      "Osteoporosis / osteopenia — DEXA interpretation, calcium/vitamin D optimization, medication management",
      "Hypermobility syndromes (EDS, benign hypermobility) — more prevalent in women",
      "Fibromyalgia — diagnosis, multimodal management, PT coordination",
      "Frozen shoulder (adhesive capsulitis) — evaluation and co-management with physical therapy",
    ],
  },
  {
    title: "Pelvic Floor (Co-management with Physical Therapy)",
    intro:
      "Our in-house physical therapy team allows us to provide seamless co-management for pelvic floor conditions — no referral delays, no fragmented care.",
    items: [
      "Urinary incontinence — stress, urge, and mixed incontinence evaluation and pelvic PT referral",
      "Pelvic organ prolapse — clinical evaluation, conservative management, urogynecology referral",
      "Interstitial cystitis / bladder pain syndrome — diagnosis support and multimodal management",
    ],
  },
];

export default function WomensHealthPage() {
  const related = SERVICES.filter((s) => s.id !== "womens-health").slice(0, 3);

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <span className="text-white/40 text-sm font-semibold tracking-widest uppercase">
            Our Services
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            Women&apos;s Health
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Compassionate, comprehensive primary care for women at every stage of life — from your first well-woman exam to menopause management and beyond.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Left: content */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-5">
                Women&apos;s Health at ParikhHealth
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                Women&apos;s health is a specialty unto itself — and it deserves a provider who treats it that way. At ParikhHealth in Sunnyvale, CA, Dr. Neesheet Parikh, DO and Kinnari Shah, PA-C provide primary-level women&apos;s health care with the depth and thoroughness that women deserve.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10 text-base">
                We don&apos;t rush. We listen. Whether you&apos;re navigating a new diagnosis, trying to optimize your hormones, managing a chronic condition, or simply overdue for your annual exam, we&apos;re here to be your long-term partner in health.
              </p>

              {/* Quick highlights */}
              <div className="bg-[#F8F7F4] rounded-2xl p-7 mb-12">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-4">
                  What&apos;s Included
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Annual well-woman exams",
                    "Pap smears & cervical cancer screening",
                    "Clinical breast exams",
                    "Contraception counseling & management",
                    "Menstrual health & hormone discussions",
                    "STI screening & sexual health",
                    "Menopause & perimenopause support",
                    "Referrals to OB/GYN when needed",
                  ].map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#111111] mt-0.5 shrink-0" />
                      <span className="text-sm text-gray-600">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed sections */}
              <div className="space-y-12">
                {SECTIONS.map((section, i) => (
                  <div key={i}>
                    <h2 className="font-serif text-2xl font-semibold text-[#111111] mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {section.intro}
                    </p>
                    <ul className="space-y-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                          <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* CTA block */}
              <div className="bg-[#F8F7F4] rounded-2xl p-8 mt-14">
                <h3 className="font-serif text-xl font-semibold text-[#111111] mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  Book a women&apos;s health appointment with Dr. Parikh or Kinnari Shah, PA-C — same-week availability most weeks.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/appointments"
                    className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    Book an Appointment <ArrowRight size={14} />
                  </Link>
                  <a
                    href={`tel:${SITE.phone.appointments}`}
                    className="inline-flex items-center justify-center gap-2 border border-[#111111]/20 hover:border-[#111111] text-[#111111] font-medium px-6 py-3 rounded-full text-sm transition-colors"
                  >
                    <Phone size={14} /> Call Us
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-[#111111] rounded-2xl p-7 text-white mb-6 sticky top-28">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  Contact Us
                </h3>
                <div className="space-y-3 text-sm text-white/70 mb-6">
                  <p>{SITE.address.full}</p>
                  <p>Phone: {SITE.phone.appointments}</p>
                  <p>Hours: Mon–Fri, 9:00 AM – 4:00 PM</p>
                </div>
                <Link
                  href="/appointments"
                  className="block text-center bg-white text-[#111111] hover:bg-gray-100 font-medium px-5 py-2.5 rounded-full text-sm transition-colors mb-3"
                >
                  Book Online
                </Link>
                <Link
                  href="/contact"
                  className="block text-center border border-white/20 hover:border-white text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  Send Us a Message
                </Link>
              </div>

              <h3 className="font-serif text-lg font-semibold text-[#111111] mb-4 mt-2">
                Other Services
              </h3>
              <ul className="space-y-2">
                {related.map((r) => (
                  <li key={r.id}>
                    <Link
                      href={`/services/${r.id}`}
                      className="flex items-center justify-between text-sm text-gray-600 hover:text-[#111111] py-2 border-b border-gray-100 group"
                    >
                      {r.name}
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-[#111111] transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
