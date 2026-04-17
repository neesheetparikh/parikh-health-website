import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section
      className="min-h-[80vh] flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)" }}
    >
      <div className="text-center px-6">
        <span className="font-serif text-8xl font-semibold text-[#C9A465]">404</span>
        <h1 className="font-serif text-3xl font-semibold text-white mt-4 mb-3">
          Page Not Found
        </h1>
        <p className="text-white/60 mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#C9A465] hover:bg-[#b8912e] text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
          >
            Go Home <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-medium px-7 py-3.5 rounded-full text-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
