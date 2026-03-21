"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { ChevronRight, CheckCircle2, FlaskRound as Flask, ClipboardCheck, Activity } from "lucide-react";

export default function TRTPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"calendar" | "quiz">("calendar");

  const openModal = (type: "calendar" | "quiz") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Medical Excellence</span>
              <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight">
                TRT <span className="text-gradient">McDonough</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                Stop living with low energy, brain fog, and weight gain. Our medically supervised Testosterone Replacement Therapy (TRT) restores your edge and vitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => openModal("calendar")}
                  className="bg-primary text-black px-10 py-5 rounded-2xl font-black shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
                >
                  Book Your Evaluation <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => openModal("quiz")}
                  className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  Take the TRT Quiz
                </button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2670&auto=format&fit=crop"
                alt="TRT Therapy McDonough"
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">Our <span className="text-gradient">Process</span></h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto italic">How we customize your journey to optimal performance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Flask, title: "Lab Work", desc: "Comprehensive blood panels to identify your exact baseline." },
              { icon: ClipboardCheck, title: "Evaluation", desc: "One-on-one consult with our board-certified medical team." },
              { icon: Activity, title: "Personalized Plan", desc: "A tailored protocol monitored weekly for peak results." },
            ].map((step, i) => (
              <div key={i} className="relative p-10 rounded-3xl bg-black border border-white/5 hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{step.desc}</p>
                <div className="absolute top-10 right-10 text-5xl font-serif font-black text-white/5">0{i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8">What to <span className="text-gradient">Expect.</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Increased Motivation",
                  "Enhanced Libido",
                  "Better Sleep Quality",
                  "Increased Lean Muscle",
                  "Mental Focus & Clarity",
                  "Reduction in Body Fat",
                  "Balanced Mood",
                  "Improved Recovery"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-wide text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-[3rem] border border-white/5 backdrop-blur-3xl">
              <h3 className="text-3xl font-serif font-bold mb-6 italic text-primary">Stop Living in the Fog.</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 italic">
                &ldquo;You don&apos;t have to feel like this. Modern medicine allows us to optimize your biology so you can show up as the best version of yourself for your family, your business, and your future.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">Unashamed Medical Team</span>
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
            Ready to See Your Numbers?
          </h2>
          <p className="text-black/80 text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            Order your comprehensive panel directly for $199. Includes full lab processing and a clinical consult to build your custom protocol.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => openModal("calendar")}
              className="inline-block bg-black text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl"
            >
              BOOK CONSULTATION
            </button>
            <div className="flex items-center gap-2 text-black/60 font-serif italic text-sm">
              <span>* Billed quarterly at $195/month once treatment begins.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Booking Section */}
      <section id="book-inline" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black mb-4 tracking-tight italic">Schedule Your Transformation</h2>
            <p className="text-gray-400 font-light">Select a time that works for you to speak with our clinical team.</p>
          </div>
          <div className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden luxury-glass">
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
        type={modalType}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
