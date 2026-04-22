import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Tag, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { SITE } from "@/content/site";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: post.title,
    description: post.excerpt,
    url: `${SITE.url}/education/${post.slug}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: SITE.name,
      url: SITE.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <section
        className="pt-36 pb-16"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" }}
      >
        <div className="site-container-article">
          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All Articles
          </Link>
          <span className="text-[#111111] text-sm font-semibold tracking-widest uppercase">
            {post.category}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white mt-3 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <User size={13} />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readingTime} read
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-16">
        <div className="site-container-article">
          <div className="grid lg:grid-cols-[1fr_280px] gap-16">
            {/* Content */}
            <article>
              <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[#111111] prose-a:text-[#111111] prose-a:no-underline hover:prose-a:underline max-w-none text-gray-700">
                <MDXRemote source={post.content} />
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-full"
                    >
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Book CTA */}
              <div className="bg-[#111111] rounded-2xl p-6 text-white sticky top-28">
                <h3 className="font-serif text-lg font-semibold mb-3">
                  Have Questions?
                </h3>
                <p className="text-sm text-white/60 mb-5">
                  Our providers are happy to discuss anything you read here at
                  your next visit.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/appointments"
                    className="block text-center bg-[#111111] hover:bg-[#333333] text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                  >
                    Book an Appointment
                  </Link>
                  <Link
                    href="/contact"
                    className="block text-center border border-white/20 hover:border-white/50 text-white font-medium px-5 py-2.5 rounded-full text-sm transition-colors"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-[#111111] uppercase tracking-wide mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/education/${r.slug}`}
                        className="group flex items-start gap-3"
                      >
                        <div className="w-14 h-14 rounded-xl bg-[#F8F7F4] shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-[#111111] group-hover:text-[#111111] transition-colors leading-snug">
                            {r.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {r.readingTime} read
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/education"
                    className="flex items-center gap-1 text-xs font-semibold text-[#111111] mt-5 hover:underline"
                  >
                    All Articles <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
