import { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "What Is Low Testosterone? 7 Signs You Shouldn't Ignore | Unashamed Body",
  description:
    "Learn the 7 most common signs of low T in men — and why ignoring them gets worse with age. TRT clinic serving McDonough, GA and the greater Atlanta area.",
};

export default function LowTestosteroneSigns() {
  return (
    <main className="min-h-screen bg-black">
      <PageHeader
        title="What Is Low Testosterone?"
        description="7 Signs You Shouldn't Ignore"
      />

      <article className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-[#6B7280] uppercase tracking-widest mb-12 pb-8 border-b border-white/5">
          <span className="text-[#DC2626] font-black bg-[#DC2626]/10 px-3 py-1 rounded-full">TRT</span>
          <span>January 15, 2025</span>
          <span>5 min read</span>
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-[#9CA3AF] leading-relaxed space-y-8">

          <p className="text-[#F0EFFF] text-xl font-light leading-relaxed">
            Testosterone is the hormone that fuels a man's energy, drive, body composition, and sexual function. And after age 30, it declines at roughly 1% per year. That sounds gradual — but the cumulative effect can be dramatic by the time most men seek help.
          </p>

          <p>
            The problem is that low testosterone doesn't always announce itself clearly. Many men write off the symptoms as stress, aging, or just "how things are now." But low T is a treatable medical condition, and the sooner it's addressed, the better the outcomes.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#F0EFFF] mt-12 mb-4">
            The 7 Most Common Signs of Low Testosterone
          </h2>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">1. Persistent Fatigue</h3>
          <p>
            This isn't ordinary tiredness. Men with low T often describe feeling exhausted no matter how much they sleep — like running on empty from the moment they wake up. Testosterone plays a direct role in energy metabolism and red blood cell production, so low levels translate directly into low energy.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">2. Decreased Libido</h3>
          <p>
            A reduced sex drive is one of the most recognized symptoms of low T, but it's often the last thing men connect to a hormonal issue. If your interest in sex has declined significantly over months or years, that's your biology talking — not your relationship or your stress level.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">3. Brain Fog and Poor Concentration</h3>
          <p>
            Testosterone receptors are present throughout the brain. When levels drop, many men notice difficulty concentrating, slower recall, and a general mental dullness. If you're finding it harder to stay sharp at work or feel mentally "off," low T is worth ruling out.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">4. Mood Changes and Irritability</h3>
          <p>
            Low testosterone is closely linked to depression, anxiety, and irritability. Many men with low T describe a flattened emotional state — less motivation, less optimism, shorter fuse. These mood changes are physiological, not psychological weakness.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">5. Unexplained Weight Gain (Especially Around the Abdomen)</h3>
          <p>
            Testosterone helps regulate fat distribution. When it drops, fat tends to accumulate in the midsection while muscle mass decreases — even without significant changes in diet or activity. This shift also increases cardiovascular risk over time.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">6. Loss of Muscle Mass and Strength</h3>
          <p>
            Testosterone is anabolic — it drives muscle protein synthesis. Men with low T often notice that workouts stop producing results, or that they're losing muscle even while training regularly. This is a direct biological effect, not a training problem.
          </p>

          <h3 className="text-lg font-bold text-[#F0EFFF] mt-8 mb-2">7. Sleep Disturbances</h3>
          <p>
            Low testosterone disrupts sleep quality, often contributing to insomnia or non-restorative sleep. The relationship is bidirectional — poor sleep also suppresses testosterone production, creating a compounding cycle that worsens both problems over time.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#F0EFFF] mt-12 mb-4">
            What's Considered "Low"?
          </h2>
          <p>
            A standard lab reference range lists "normal" testosterone as 300–1,000 ng/dL. But normal is not the same as optimal. Many men in the low-to-mid range experience significant symptoms even though their number technically falls within range. That's why comprehensive testing and a clinical evaluation matter — not just a single number.
          </p>
          <p>
            At Unashamed Body, your new patient lab panel checks total testosterone, free testosterone, SHBG, estradiol, thyroid, adrenal function, and more than 40 additional biomarkers. We treat the whole picture, not a single data point.
          </p>

          <h2 className="text-2xl font-serif font-bold text-[#F0EFFF] mt-12 mb-4">
            What To Do Next
          </h2>
          <p>
            If you recognize yourself in 3 or more of these signs, a hormonal evaluation is the right next step. Testing is straightforward — a simple blood draw at a local LabCorp — and results come back within days.
          </p>
          <p>
            You don't have to accept low energy, declining performance, or mood changes as an inevitable part of getting older. These are treatable conditions, and the men who address them early see the best results.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 border border-[#DC2626]/20 rounded-3xl bg-[#DC2626]/5 text-center">
          <h3 className="text-2xl font-serif font-black text-[#F0EFFF] mb-3">Sound familiar?</h3>
          <p className="text-[#9CA3AF] font-light mb-6 max-w-md mx-auto">
            Book a new patient consultation at Unashamed Body. Includes comprehensive labs and a personalized treatment plan — all in one appointment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#DC2626]/20"
          >
            Book Your Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Nav */}
        <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
          <Link href="/blog" className="flex items-center gap-2 text-[#6B7280] hover:text-[#DC2626] text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Blog
          </Link>
          <Link href="/blog/trt-vs-testosterone-boosters" className="flex items-center gap-2 text-[#6B7280] hover:text-[#DC2626] text-sm transition-colors">
            Next Post <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}
