import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { SITE, TESTIMONIALS } from "@/content/site";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description: `ParikhHealth has a ${SITE.rating.score}-star rating from ${SITE.rating.count}+ verified patient reviews in Sunnyvale, CA. Read what our patients say.`,
  alternates: { canonical: `${SITE.url}/reviews` },
};

const EXTENDED_REVIEWS = [
  ...TESTIMONIALS,
  {
    quote: "I've been seeing Dr. Parikh for three years and he's the best doctor I've had. He listens, explains everything, and never rushes. I drive 45 minutes because it's worth it.",
    author: "Michelle T.",
    detail: "Primary Care Patient",
    rating: 5,
  },
  {
    quote: "Harshit is phenomenal. My back pain was debilitating and after 8 weeks of PT I was back to normal. The whole team at ParikhHealth is exceptional.",
    author: "Robert K.",
    detail: "Physical Therapy Patient",
    rating: 5,
  },
  {
    quote: "As an athlete, I need a doctor who gets it. Dr. Parikh understands sports injuries, recovery timelines, and what it means to get back to competing. He's the best.",
    author: "Ananya M.",
    detail: "PitchFit Member",
    rating: 5,
  },
  {
    quote: "Sonia helped me recover from hip replacement surgery faster than anyone expected. Her knowledge and encouragement kept me going every session.",
    author: "Linda W.",
    detail: "Physical Therapy Patient",
    rating: 5,
  },
  {
    quote: "The concierge membership pays for itself. I texted Dr. Parikh on a Sunday about my son's injury and had a plan within the hour. That's real medicine.",
    author: "Kevin S.",
    detail: "Concierge Member",
    rating: 5,
  },
  {
    quote: "Kinnari caught a thyroid issue that two previous doctors missed. She's thorough, caring, and incredibly knowledgeable. I trust her completely with my health.",
    author: "Divya P.",
    detail: "Patient since 2022",
    rating: 5,
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE.name,
  url: SITE.url,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.score.toString(),
    reviewCount: SITE.rating.count.toString(),
    bestRating: "5",
    worstRating: "1",
  },
  review: EXTENDED_REVIEWS.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.author },
    reviewBody: r.quote,
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating.toString(),
      bestRating: "5",
    },
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

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
            What Our Patients Say
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={22} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white text-xl font-semibold">{SITE.rating.score}</span>
            <span className="text-white/60 text-lg">
              from {SITE.rating.count}+ verified reviews on Google
            </span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-white py-24">
        <div className="site-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {EXTENDED_REVIEWS.map((review, i) => (
              <div key={i} className="bg-[#F8F7F4] rounded-2xl p-7 border border-gray-100 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">{review.author}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{review.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a review CTA */}
          <div className="bg-[#111111] rounded-3xl p-12 text-center text-white">
            <h2 className="font-serif text-3xl font-semibold mb-4">
              Been a Patient? Share Your Experience.
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Your review helps other patients in Sunnyvale find quality care — and it takes less than a minute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-[#111111] font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
              >
                Leave a Google Review <ArrowRight size={16} />
              </a>
              <a
                href="https://www.healthgrades.com/physician/dr-neesheet-parikh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
              >
                Review on Healthgrades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="site-container-narrow text-center">
          <h2 className="font-serif text-3xl font-semibold text-[#111111] mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-500 mb-8">
            Join {SITE.rating.count}+ patients who trust ParikhHealth for their care.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-medium px-8 py-4 rounded-full transition-colors"
          >
            Book an Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
