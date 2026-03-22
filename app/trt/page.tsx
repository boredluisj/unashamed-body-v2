"use client";

import { PageHeader } from "@/components/PageHeader";
import { Zap, Brain, Dumbbell, Heart, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function TRTPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader 
        title="Testosterone Therapy" 
        description="Medically supervised TRT to restore your energy, focus, muscle mass, and libido. Reclaim your edge with precision protocols."
      />

      {/* Hero Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-sans font-thin tracking-tight uppercase">
              Why <span className="text-primary italic">TRT?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Testosterone Replacement Therapy (TRT) is designed for men experiencing symptoms of low testosterone such as fatigue, weight gain, depression, brain fog, or reduced sex drive.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase tracking-widest text-white/90">What To Expect</h3>
              <ul className="space-y-4">
                {[
                  "Comprehensive lab work to evaluate hormone levels",
                  "Personalized treatment plan (Injections, Gels, or Pellets)",
                  "Ongoing monitoring and expert medical adjustments"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-gray-400 font-light">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-10 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Book Consultation
            </button>
          </div>
          
          <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden group border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6820c2dae698d67e54b97d18.jpeg"
              alt="Testosterone Therapy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-sans font-thin tracking-widest uppercase mb-6">
              Benefits of Optimization
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Increased Energy & Vitality",
                desc: "Restore your stamina. Feel alert, focused, and capable throughout the day, whether working, training, or with family.",
                icon: Zap
              },
              {
                title: "Mental Clarity & Mood",
                desc: "Reduce brain fog and improve memory. Testosterone supports brain health and emotional balance for sharper cognitive function.",
                icon: Brain
              },
              {
                title: "Muscle Mass & Fat Loss",
                desc: "Boost muscle protein synthesis. Notice greater gains in lean muscle and strength when combined with proper nutrition.",
                icon: Dumbbell
              },
              {
                title: "Restored Sex Drive",
                desc: "Restore natural desire and enhance performance. TRT helps resolve issues with Consistent blood flow and overall satisfaction.",
                icon: Heart
              }
            ].map((benefit, i) => (
              <div key={i} className="luxury-card p-10 group hover:border-primary/30 transition-all">
                <div className="flex gap-8 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors shrink-0">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4">{benefit.title}</h3>
                    <p className="text-gray-400 font-light leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Work CTA */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <div className="luxury-card p-12 md:p-20 rounded-[3rem] border-primary/20 relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
          <h2 className="text-3xl md:text-5xl font-serif font-black mb-8 italic">
            Proven Solutions for Real Men
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12 max-w-2xl mx-auto">
            Every option is clinically backed and customized to your goals. Take the first step by ordering your initial lab work.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
               onClick={() => setIsBookingOpen(true)}
              className="px-12 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20"
            >
              Start Consultation
            </button>
            <a 
              href="https://unashamedlabwork.com" 
              target="_blank"
              className="px-12 py-5 bg-transparent border border-white/10 text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-white/5 transition-all"
            >
              Order Labs
            </a>
          </div>
        </div>
      </section>

      <GHLFormEmbed 
        type="calendar"
        embedUrl="https://app.gohighlevel.com/v2/preview/qpFvStkXcBZ7Z6n2dKDg?notrack=true"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
