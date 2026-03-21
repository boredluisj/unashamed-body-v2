"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { Truck, MapPin, Zap, ChevronRight, Shield, Activity } from "lucide-react";

export default function RoadWarriorPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <picture>
          <img
            src="https://images.unsplash.com/photo-1519003722824-192d99201ed0?q=80&w=2670&auto=format&fit=crop"
            alt="Trucking on the Open Road"
            className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[0.5] scale-110 animate-pulse-slow"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[160px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-xl px-6 py-3 rounded-full text-primary border border-primary/30 text-xs font-black uppercase tracking-[0.3em] mb-10">
              <Truck className="w-4 h-4" />
              <span>The Original Road Warrior Protocol</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-serif font-black mb-10 leading-none">
              Health for the <br />
              <span className="text-gradient">Long Haul.</span>
            </h1>
            <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed mb-12">
              The road is your life, but it shouldn&apos;t be your limit. We provide the elite medical support truckers need to optimize energy, shed weight, and maintain peak hormonal health—wherever the highway takes you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary text-black px-12 py-6 rounded-2xl font-black shadow-[0_20px_50px_rgba(234,88,12,0.3)] hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
              >
                START YOUR PROTOCOL <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-32 bg-white/5 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-serif font-black leading-tight italic">
                Built For The <br />
                <span className="text-gradient font-black">Modern Driver.</span>
              </h2>
              <div className="space-y-10">
                {[
                  { 
                    icon: MapPin, 
                    title: "Anywhere Medicine", 
                    desc: "100% remote consultations and medication delivery to your terminal, home, or preferred stop." 
                  },
                  { 
                    icon: Zap, 
                    title: "Fatigue Management", 
                    desc: "Sophisticated TRT and Peptide stacks designed to combat the mental and physical fog of life on the move." 
                  },
                  { 
                    icon: Activity, 
                    title: "Sustainable Weight Loss", 
                    desc: "Medical weight management protocols that work with driver-typical diets and restricted movement." 
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-all border border-primary/20">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-3 font-serif italic tracking-wide">{item.title}</h4>
                      <p className="text-gray-400 font-light leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group p-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[3rem]">
              <div className="bg-black/40 backdrop-blur-3xl rounded-[2.9rem] p-12 border border-white/10 shadow-2xl">
                <h3 className="text-3xl font-serif font-bold text-white mb-8 italic">The Process</h3>
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Comprehensive Lab Draw", desc: "We order specific panels that look beyond the surface." },
                    { step: "02", title: "Provider Tele-Consult", desc: "Speak with experts who understand the driver lifestyle." },
                    { step: "03", title: "Monthly Medication Flow", desc: "Consistent, discrete shipping to keep you on schedule." },
                  ].map((p, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <span className="text-primary font-black text-xl font-serif">{p.step}</span>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{p.title}</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-5 rounded-xl border border-primary text-primary font-black hover:bg-primary hover:text-black transition-all tracking-widest text-sm"
                  >
                    READY TO ROLL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-12 inline-block">
             <Shield className="w-16 h-16 text-primary mx-auto mb-6 opacity-50" />
          </div>
          <p className="text-3xl md:text-4xl font-serif font-light italic text-gray-300 leading-snug mb-10">
            &quot;We don&apos;t just care about your labs. We care about the life you lead behind the wheel. We make health possible for the professional traveler.&quot;
          </p>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>
      </section>

      {/* Inline Booking Section */}
      <section id="book-inline" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black mb-4 tracking-tight italic text-gradient">Schedule Your Evaluation</h2>
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
