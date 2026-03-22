import { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Erectile Dysfunction at 40: It's More Common Than You Think | Unashamed Body",
  description:
    "ED in your 40s isn't inevitable. Here's what causes it and what actually works. Non-invasive ED treatment in McDonough, GA and telehealth.",
};

export default function EDat40() {
  return (
    <main className="min-h-screen bg-black">
      <PageHeader
        title="Erectile Dysfunction at 40"
        description="It's More Common Than You Think"
      />

      <article className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[#6B7280] uppercase tracking-widest mb-12 pb-8 border-b border-white/5">
          <span className="text-[#DC2626] font-black bg-[#DC2626]/10 px-3 py-1 rounded-full">ED Treatment</span>
          <span>January 25, 2025</span>
          <span>5 min read</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-[#9CA3AF] leading-relaxed space-y-8">

          <p className="text-[#F0EFFF] text-xl font-light leading-relaxed">
            Erectile dysfunction is often framed as an old man's problem. It's not. Studies consistently show that roughly 40% of men experience some degree of ED by age 40, and the prevalence increases by about 10% for every decade after that. What's less discussed is that ED at 40 is usually a signal, not a sentence.
          </p>

          <p>
            Most men who experience ED don't seek treatment. They assume it's stress, they avoid the conversation with their doctor, or they try an over-the-counter solution that doesn't address the underlying cause. The result is that a treatable condition silently gets worse while affecting relationships, confidence, and mental health.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#F0EFFF] mt-12 mb-4">
            What Actually Causes ED
          </h2>
          <p>
            Erectile function depends on healthy blood flow, normal testosterone levels, a functioning nervous system, and psychological state. Disruptions in any of these categories can produce ED. Understanding the cause determines the treatment.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">Vascular (Most Common in Men Over 40)</h3>
          <p>
            The same arterial disease process that contributes to heart disease also impairs the small blood vessels that enable erections. High blood pressure, elevated cholesterol, obesity, smoking, and diabetes all damage vascular function over time. ED is often an early warning sign of cardiovascular disease. Research shows that men who develop ED are significantly more likely to have a cardiac event within 5 years if the underlying vascular risk factors aren't addressed.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">Hormonal (Testosterone and Estrogen)</h3>
          <p>
            Low testosterone directly reduces libido and can impair the physical mechanisms behind erections. Elevated estrogen (common in men with excess body fat, since fat tissue converts testosterone to estrogen) further compounds the problem. Thyroid dysfunction is another hormonal cause often overlooked in men.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">Psychological</h3>
          <p>
            Performance anxiety, depression, relationship stress, and past negative experiences can all contribute to or perpetuate ED even when the physiological baseline is healthy. It's also worth noting that psychological and physical causes frequently overlap. A man who experienced one episode of ED due to stress can develop ongoing anxiety about performance that perpetuates the problem.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">Medications</h3>
          <p>
            Several commonly prescribed medications list ED as a side effect: antidepressants (SSRIs in particular), beta-blockers, certain blood pressure medications, and finasteride. If your ED developed shortly after starting a new medication, that connection is worth discussing with your provider.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#F0EFFF] mt-12 mb-4">
            What Actually Works
          </h2>
          <p>
            The right treatment depends on the cause, which is why a proper evaluation matters. But here are the approaches with the strongest evidence base:
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">PDE5 Inhibitors (Sildenafil, Tadalafil)</h3>
          <p>
            These are the well-known oral medications, Viagra and Cialis and their generic equivalents. They work by increasing blood flow to penile tissue. They're highly effective for vascular ED and have a strong safety profile. Tadalafil (daily low-dose) is particularly useful as it provides around-the-clock coverage without requiring timing around activity.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">Peptide Therapy (PT-141)</h3>
          <p>
            PT-141 (bremelanotide) works differently from PDE5 inhibitors. It acts on the central nervous system to increase sexual desire and arousal, rather than just improving blood flow. It's particularly effective for men who don't respond well to oral medications or who have a psychological component to their ED. When combined with TRT in men who also have low testosterone, the results are often significantly better than either approach alone.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">Testosterone Optimization</h3>
          <p>
            In men with low testosterone, restoring levels to an optimal range frequently improves ED on its own. Even when TRT isn't sufficient by itself, it creates a hormonal foundation that makes other treatments more effective.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">Lifestyle Factors</h3>
          <p>
            Regular aerobic exercise, weight loss in overweight men, reducing alcohol intake, and stopping smoking all have clinically meaningful effects on erectile function, especially when vascular factors are involved. These aren't optional add-ons; they're core to the treatment plan.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#F0EFFF] mt-12 mb-4">
            The Conversation You Keep Avoiding
          </h2>
          <p>
            ED carries an enormous amount of shame for men who experience it. That shame is what keeps most men from seeking help for years, sometimes decades. At Unashamed Body, it's one of the most common issues we treat. Our consultations are completely private, judgment-free, and handled with the same clinical professionalism as any other health concern.
          </p>
          <p>
            You don't have to accept this as part of aging. You don't have to have this conversation alone. And the sooner it's addressed, the more options are on the table.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 border border-[#DC2626]/20 rounded-3xl bg-[#DC2626]/5 text-center">
          <h3 className="text-2xl font-serif font-black text-[#F0EFFF] mb-3">Private. Judgment-free. Effective.</h3>
          <p className="text-[#9CA3AF] font-light mb-6 max-w-md mx-auto">
            Book a confidential consultation at Unashamed Body. In-person in McDonough or 100% via telehealth. Same-day appointments often available.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#DC2626]/20"
          >
            Book a Private Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Nav */}
        <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
          <Link href="/blog/trt-vs-testosterone-boosters" className="flex items-center gap-2 text-[#6B7280] hover:text-[#DC2626] text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Previous Post
          </Link>
          <Link href="/blog" className="flex items-center gap-2 text-[#6B7280] hover:text-[#DC2626] text-sm transition-colors">
            All Posts <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}
