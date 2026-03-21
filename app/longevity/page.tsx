"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { Brain, Heart, Sparkles, ChevronRight, Activity, Shield } from "lucide-react";

export default function LongevityPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[160px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-in fade-in slide-in-from-top-12 duration-1000">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Elite Wellness Optimization</span>
            <h1 className="text-6xl md:text-9xl font-serif font-black mb-10 leading-none">
              Live <span className="text-gradient">Limitless.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed mb-12">
              Aging is a biological process that we can influence. Our longevity protocols redefine the human experience through precision medicine, NAD+ therapy, and performance optimization.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-black px-12 py-6 rounded-2xl font-black shadow-2xl hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Design Your Protocol <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Brain, 
                title: "Cognitive Fortitude", 
                desc: "Neuro-protective protocols designed to enhance focus, memory, and long-term brain health through targeted supplementation and hormone balance." 
              },
              { 
                icon: Heart, 
                title: "Vascular Vitality", 
                desc: "Advanced cardiovascular monitoring and metabolic support to ensure your heart and circulatory system perform at peak levels for decades." 
              },
              { 
                icon: Sparkles, 
                title: "Cellular Restoration", 
                desc: "Harness the power of NAD+ and custom peptide blends to flip the switch on cellular repair and mitochondrial efficiency." 
              },
            ].map((item, i) => (
              <div key={i} className="group p-12 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-500 text-left backdrop-blur-sm">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-black transition-all">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 italic tracking-wide">{item.title}</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Longevity Philosophy */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight italic">
                Optimization is the <br /><span className="text-gradient">Ultimate Wealth.</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Metabolic Resiliency</h4>
                    <p className="text-gray-400 font-light">We don&apos;t just look at blood sugar. We analyze your metabolic flexibility to ensure you thrive under any physiological demand.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Immune Fortification</h4>
                    <p className="text-gray-400 font-light">Customized protocols that strengthen your body&apos;s natural defenses, focusing on lowering systemic inflammation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-4 border border-primary/30 rounded-[3rem] -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2640&auto=format&fit=crop" 
                alt="Elite Performance Optimization"
                className="rounded-[3rem] grayscale-[0.3] hover:grayscale-0 transition-all duration-700 shadow-2xl translate-x-4 -translate-y-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif font-black text-black mb-10 italic">Your Future Self <br /> Will Thank You.</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-110 active:scale-95 transition-all shadow-2xl"
          >
            BEGIN YOUR OPTIMIZATION
          </button>
        </div>
      </section>

      <GHLFormEmbed 
        type="calendar"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
