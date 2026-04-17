import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Health Education & Blog",
  description:
    "Evidence-based health education, practice news, and wellness tips from the providers at ParikhHealth in Sunnyvale, CA.",
};

export default function EducationPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      {/* Header */}
      <section
        className="pt-36 pb-20"
        style={{ background: "linear-gradient(135deg, #0F1F3D 0%, #1a3058 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-[#C9A465] text-sm font-semibold tracking-widest uppercase">
            Health Education
          </span>
          <h1 className="font-serif text-5xl font-semibold text-white mt-3 mb-5 max-w-xl leading-tight">
            From Our Providers
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Evidence-based health education, wellness tips, practice news, and
            the latest in primary care and sports medicine — written by your own
            providers.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-14">
            <span className="text-xs font-semibold text-[#0F1F3D] bg-[#0F1F3D]/5 px-4 py-1.5 rounded-full">
              All Topics
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full cursor-pointer hover:border-[#C9A465] hover:text-[#C9A465] transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured posts */}
          {featured.length > 0 && (
            <div className="mb-16">
              <h2 className="font-serif text-2xl font-semibold text-[#0F1F3D] mb-8">
                Featured Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/education/${post.slug}`}
                    className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-[#F8F7F4] h-52" />
                    <div className="p-6">
                      <span className="text-xs font-semibold text-[#C9A465] uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-[#0F1F3D] mt-1.5 mb-2 group-hover:text-[#C9A465] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <span>{post.author}</span>
                          <span>·</span>
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-semibold text-[#0F1F3D] group-hover:text-[#C9A465] transition-colors">
                          {post.readingTime} read <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All posts */}
          {rest.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl font-semibold text-[#0F1F3D] mb-8">
                All Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/education/${post.slug}`}
                    className="group"
                  >
                    <div className="bg-[#F8F7F4] rounded-2xl h-40 mb-4" />
                    <span className="text-xs font-semibold text-[#C9A465] uppercase tracking-wide">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#0F1F3D] mt-1.5 mb-2 group-hover:text-[#C9A465] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>·</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
