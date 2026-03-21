"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { ChevronRight, Scale, Zap, ShieldCheck, Heart } from "lucide-react";

export default function WeightLossPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full -translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Medical Weight Loss</span>
              <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight">
                Sustainable <span className="text-gradient">Results.</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                Stop the cycle of temporary fixes. Our medically supervised GLP-1 protocols using Semaglutide and Tirzepatide help you achieve lasting metabolic transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary text-black px-10 py-5 rounded-2xl font-black shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
                >
                  Start Your Journey <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2670&auto=format&fit=crop"
                alt="Medical Weight Loss McDonough"
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Protocol */}
      <section className="py-24 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">The <span className="text-gradient">Solution</span></h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">We don&apos;t just give you a prescription; we provide a medically monitored ecosystem for success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Semaglutide", 
                desc: "A powerful once-weekly injection that mimics natural satiety hormones to reduce hunger and cravings." 
              },
              { 
                icon: Scale, 
                title: "Tirzepatide", 
                desc: "The next-generation GLP-1/GIP agonist that targets multiple metabolic pathways for superior fat loss." 
              },
              { 
                icon: ShieldCheck, 
                title: "Medical Oversight", 
                desc: "Continuous monitoring to manage side effects, adjust dosing, and ensure safe, rapid results." 
              },
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-black border border-white/5 hover:border-primary/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">{item.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-[3rem] border border-white/5 backdrop-blur-3xl">
              <h3 className="text-3xl font-serif font-bold mb-6 italic text-primary">Beyond the Scale.</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                &ldquo;Weight loss is about more than aesthetics—it&apos;s about metabolic freedom. Our patients experience improved heart health, better blood sugar regulation, and a renewed sense of confidence that impacts every area of their life.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Medical Director, Unashamed Body</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-10 leading-tight">Elite <br /> <span className="text-gradient">Transformation</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Controlled Appetite",
                  "Better Blood Sugar",
                  "Increased Energy",
                  "Heart Health Support",
                  "Fast & Safe Progress",
                  "Metabolic Reset",
                  "No Crash Diets",
                  "Personalized Coaching"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <Heart className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-wide text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Work CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-black mb-8 italic">
            Eat Like a Normal Person.
          </h2>
          <p className="text-black/80 text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            Metabolic optimization starting at $275/mo (Semaglutide) or $425/mo (Tirzepatide). No restrictive diets, just clinical science.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-black text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl"
            >
              BOOK YOUR EVALUATION
            </button>
          </div>
        </div>
      </section>

      {/* Inline Booking Section */}
      <section id="book-inline" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black mb-4 tracking-tight italic text-gradient">Schedule Your Transformation</h2>
            <p className="text-gray-400 font-light">Select a time that works for you to speak with our clinical team.</p>
          </div>
          <div className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden luxury-glass shadow-2xl shadow-primary/5">
            <GHLFormEmbed 
              type="calendar"
              isOpen={true}
              onClose={() => {}}
              isInline={true}
            />
          </div>
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
