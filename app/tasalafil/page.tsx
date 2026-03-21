"use client";

import { PageHeader } from "@/components/PageHeader";
import { Shield, Truck, Zap, Calendar, Heart, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function TadalafilPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const pricing = [
    { dose: "2.5 mg", startPrice: 30, sixtyDay: 50, ninetyDay: 60, tag: "Beginner" },
    { dose: "5 mg", startPrice: 35, sixtyDay: 60, ninetyDay: 75, tag: "Standard" },
    { dose: "10 mg", startPrice: 40, sixtyDay: 70, ninetyDay: 90, tag: "Performance" }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader 
        title="Performance Optimization" 
        description="Address the root causes of ED with medical, hormonal, and lifestyle solutions. Genuine medication, affordable and convenient."
      />

      {/* Intro Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-sans font-thin uppercase tracking-tight">
              Spontaneous <span className="text-primary italic">Performance.</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Our ED treatments address the root cause of poor sexual performance through a combination of medical, hormonal, and lifestyle solutions — without just masking symptoms with pills.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Improved Erectile Function",
                "Restored Confidence",
                "Enhanced Intimacy",
                "Root Cause Identification"
              ].map((benefit, i) => (
                <div key={i} className="flex gap-3 items-center text-gray-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <button
               onClick={() => setIsBookingOpen(true)}
              className="px-10 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5">
             <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/68226a917345a918f5c970c8.jpeg"
              alt="Performance Optimization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Subscription Features */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-thin uppercase tracking-widest">Daily Tadalafil Subscription</h2>
            <p className="text-gray-400 mt-4 font-light">FDA-approved medication delivered directly and discreetly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: "Licensed Providers", icon: Shield, desc: "Prescribed and monitored by licensed US medical professionals." },
              { title: "Free Discreet Shipping", icon: Truck, desc: "Ships in plain packaging directly to your door at no extra cost." },
              { title: "Always Ready", icon: Zap, desc: "Daily low-dosing allows for sexual activity whenever the time is right." }
            ].map((f, i) => (
              <div key={i} className="luxury-card p-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-4">{f.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((p, i) => (
              <div key={i} className={`luxury-card p-10 relative flex flex-col ${i === 2 ? 'border-primary/40' : ''}`}>
                <div className="absolute top-6 right-6 px-3 py-1 bg-white/5 rounded-full">
                   <span className="text-[10px] uppercase tracking-widest font-black text-primary">{p.tag}</span>
                </div>
                <h3 className="text-3xl font-serif font-black italic text-white mb-8">{p.dose} <span className="text-sm font-sans not-italic text-gray-500 uppercase tracking-widest">Daily</span></h3>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-gray-400">30-Day Supply</span>
                    <span className="text-2xl font-bold">${p.startPrice}</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-4">
                    <span className="text-gray-400">60-Day Supply</span>
                    <span className="text-2xl font-bold">${p.sixtyDay}</span>
                  </div>
                  <div className="flex justify-between items-end text-primary">
                    <span className="font-bold">90-Day Best Value</span>
                    <span className="text-3xl font-serif font-black italic">${p.ninetyDay}</span>
                  </div>
                </div>

                <button 
                   onClick={() => setIsBookingOpen(true)}
                  className="w-full mt-10 py-4 bg-white/5 hover:bg-primary text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all"
                >
                  Select Dose
                </button>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-gray-500 font-light italic">Free & discreet shipping is included in all prices.</p>
        </div>
      </section>

      {/* How it Works / FAQ */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-10">
            <h2 className="text-3xl font-sans font-thin uppercase tracking-tight">Understanding <span className="text-primary italic">Tadalafil</span></h2>
            <div className="space-y-6">
              <div className="luxury-card p-8">
                 <h3 className="text-lg font-bold uppercase tracking-wider mb-4 flex gap-3 items-center">
                   <Heart className="w-5 h-5 text-primary" /> Spontaneity
                 </h3>
                 <p className="text-gray-400 font-light leading-relaxed">
                   Daily intake of lower doses allows for sexual activity whenever the time is right, without the need to plan 60 minutes ahead.
                 </p>
              </div>
              <div className="luxury-card p-8">
                 <h3 className="text-lg font-bold uppercase tracking-wider mb-4 flex gap-3 items-center">
                   <Calendar className="w-5 h-5 text-primary" /> Consistency
                 </h3>
                 <p className="text-gray-400 font-light leading-relaxed">
                   Take at the same time every day. Individuals should typically start with 2.5mg for at least one month to assess tolerance.
                 </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-primary/80 mb-8">FAQ</h2>
            {[
              { q: "Are Tadalafil and Cialis the same?", a: "Yes. Tadalafil is the active ingredient in Cialis. Both provide the same benefits." },
              { q: "Will I have an erection all day?", a: "No. Tadalafil works by improving blood flow during sexual arousal. Erections only occur in response to stimulation." },
              { q: "How long does it take to work?", a: "Generally 30-60 minutes as needed, or immediate readiness if taken as a daily subscription." }
            ].map((faq, i) => (
              <div key={i} className="border-b border-white/10 pb-6">
                <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-500 font-light">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GHLFormEmbed 
        type="calendar"
        embedUrl="https://app.gohighlevel.com/v2/preview/itrpsCuLeBfeQWoOjue6"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
