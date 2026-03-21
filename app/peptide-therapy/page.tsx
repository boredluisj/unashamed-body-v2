"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { ChevronRight, Zap, Target, ShieldPlus, HeartPulse } from "lucide-react";

export default function PeptidePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/4 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Bio-Optimization</span>
              <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight">
                Peptide <span className="text-gradient">Therapy</span>
              </h1>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
                Unlock your body&apos;s potential for healing, recovery, and longevity with advanced peptide protocols. We specialize in precision signaling for cellular repair.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary text-black px-10 py-5 rounded-2xl font-black shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group"
                >
                  Consult an Expert <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2574&auto=format&fit=crop"
                alt="Peptide Therapy McDonough"
                className="relative z-10 rounded-3xl border border-white/10 shadow-2xl grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Peptides */}
      <section className="py-24 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">Precision <span className="text-gradient">Protocols</span></h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">Peptides are short chains of amino acids that signal your cells to perform specific, life-enhancing functions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Healing & Recovery", 
                icon: ShieldPlus, 
                title: "BPC-157",
                desc: "The 'Body Protection Compound' designed to accelerate tissue, joint, and gut repair." 
              },
              { 
                name: "Growth & Longevity", 
                icon: Target, 
                title: "CJC-1295 / Ipamorelin",
                desc: "Naturally stimulates growth hormone for better sleep, fat loss, and lean muscle gain." 
              },
              { 
                name: "Vitality & Drive", 
                icon: HeartPulse, 
                title: "PT-141",
                desc: "A powerful peptide for enhancing sexual desire and overcoming performance challenges." 
              },
            ].map((p, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-black border border-white/5 hover:border-primary/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <p.icon className="w-8 h-8" />
                </div>
                <span className="text-primary text-xs font-black uppercase tracking-widest mb-2 block">{p.name}</span>
                <h4 className="text-2xl font-serif font-bold text-white mb-4">{p.title}</h4>
                <p className="text-gray-500 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="p-12 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h3 className="text-3xl font-serif font-bold mb-6 italic text-primary">Biology, Optimized.</h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                  Unlike broad-spectrum medications, peptides are highly targeted. They act as precise keys, unlocking your body&apos;s natural ability to repair, regenerate, and thrive. Whether you&apos;re an athlete recovering from injury or a high-performer seeking longevity, our protocols are tailored to your goals.
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif font-black text-white">99%</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Purity Standards</span>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif font-black text-white">24/7</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Medical Support</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">Advanced <br /> <span className="text-gradient">Molecular</span> Support</h2>
              <div className="space-y-6">
                {[
                  "Accelerated Joint Repair",
                  "Improved Body Composition",
                  "Restorative Sleep Cycles",
                  "Enhanced Cognitive Function",
                  "Immune System Modulation",
                  "Inflammation Management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-bold uppercase tracking-[0.1em] text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-black mb-8 italic">
            Elite Signaling.
          </h2>
          <p className="text-black/80 text-xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed">
            Advanced peptide protocols starting at $225/mo. Includes medical oversight and custom signaling strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-black text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl"
            >
              BOOK YOUR PROTOCOL
            </button>
          </div>
        </div>
      </section>

      {/* Inline Booking Section */}
      <section id="book-inline" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black mb-4 tracking-tight italic text-gradient">Schedule Your Protocol Review</h2>
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
