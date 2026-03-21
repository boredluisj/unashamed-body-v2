import { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Men's Health Blog | Unashamed Body",
  description: "Evidence-based articles on TRT, erectile dysfunction, medical weight loss, and men's hormonal health from the providers at Unashamed Body in McDonough, GA.",
};

const posts = [
  {
    slug: 'low-testosterone-signs',
    title: "What Is Low Testosterone? 7 Signs You Shouldn't Ignore",
    excerpt:
      "Low T doesn't always look like you'd expect. Fatigue, brain fog, and mood changes are just as common as low libido — and they compound with age. Here's how to know if your testosterone is the problem.",
    date: 'January 15, 2025',
    readTime: '5 min read',
    tag: 'TRT',
  },
  {
    slug: 'trt-vs-testosterone-boosters',
    title: 'TRT vs. Natural Testosterone Boosters: What Actually Works',
    excerpt:
      "Over-the-counter testosterone supplements are a $5 billion industry — and most of them do very little. Here's what the research actually shows about supplements vs. medically supervised TRT.",
    date: 'January 20, 2025',
    readTime: '5 min read',
    tag: 'TRT',
  },
  {
    slug: 'erectile-dysfunction-40s',
    title: "Erectile Dysfunction at 40: It's More Common Than You Think",
    excerpt:
      "ED in your 40s isn't a character flaw or an inevitable part of aging. It's a medical condition with identifiable causes and effective treatments. Here's what you need to know.",
    date: 'January 25, 2025',
    readTime: '5 min read',
    tag: 'ED Treatment',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <PageHeader
        title="The Blog"
        description="Evidence-based insights on men's hormonal health, performance, and vitality from our clinical team."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border border-white/10 rounded-2xl overflow-hidden hover:border-[#DC2626]/30 transition-all duration-300 bg-white/[0.02] hover:bg-white/[0.04]"
            >
              {/* Tag + read time */}
              <div className="px-6 pt-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#DC2626]/80 bg-[#DC2626]/10 px-3 py-1 rounded-full">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1.5 text-[#6B7280] text-xs">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h2 className="text-lg font-serif font-bold text-[#F0EFFF] mb-3 leading-snug group-hover:text-[#DC2626] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#6B7280] font-light text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-[#6B7280] text-xs">{post.date}</span>
                <span className="flex items-center gap-1 text-[#DC2626] text-xs font-semibold group-hover:gap-2 transition-all">
                  Read more <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
