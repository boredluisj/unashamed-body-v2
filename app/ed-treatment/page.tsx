"use client";

import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { ChevronRight, ShieldCheck, Lock, CheckCircle2, Zap } from "lucide-react";

export default function EDPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/68226a917345a918f5c970c8.jpeg"
            alt="Performance"
            className="w-full h-full object-cover opacity-50 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="flex items-center gap-3 text-primary font-bold mb-6 text-sm tracking-[0.3em] uppercase">
              <Lock className="w-4 h-4" />
              <span>Discrete & Professional</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-black mb-8 leading-tight italic tracking-tighter">
              Reclaim Your <br /> <span className="text-primary">Confidence.</span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12 max-w-2xl">
              Performance shouldn&apos;t be a source of stress. Our discreet, medically supervised protocols involve pharmaceutical solutions and restorative therapies designed for lasting results.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-black px-12 py-6 rounded-2xl font-black shadow-2xl hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 group"
            >
              Start Private Consultation <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: "Confidentiality First", 
                desc: "Your records are strictly private. We prioritize discretion in every step of the process from consultation to delivery.", 
                icon: ShieldCheck 
              },
              { 
                title: "Precision Medicine", 
                desc: "We analyze your hormone levels and vascular health to provide a protocol that addresses the root cause, not just symptoms.", 
                icon: CheckCircle2 
              },
              { 
                title: "Direct Access", 
                desc: "No waiting in lines at a retail pharmacy. All medications are fulfilled by elite compounding partners and shipped to your door.", 
                icon: Zap 
              },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-black border border-white/5 hover:border-primary/20 transition-all">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-serif font-bold text-white mb-4 italic tracking-wide">{item.title}</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Restorative Therapy Info */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/682b9ec7d1702b4be4387bb4.jpeg" 
                alt="Medical Wellness" 
                className="relative z-10 rounded-[3rem] border border-white/10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">Advanced <span className="text-gradient">Restoration</span></h2>
              <div className="space-y-8">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-primary font-bold mb-2 tracking-widest uppercase text-xs">Vascular Optimization</h4>
                  <p className="text-gray-400 font-light">Improving blood flow is critical. We combine pharmaceutical support with hormone optimization for a multi-modality approach.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-primary font-bold mb-2 tracking-widest uppercase text-xs">Pharmaceutical Precision</h4>
                  <p className="text-gray-400 font-light">Access to high-purity Sildenafil and Tadalafil in custom dosages that aren&apos;t available at standard pharmacies.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <h4 className="text-primary font-bold mb-2 tracking-widest uppercase text-xs">Hormone Synergy</h4>
                  <p className="text-gray-400 font-light">Often, ED is a symptom of Low-T. We address the endocrine system as a whole to ensure peak physiological performance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-black mb-6 italic tracking-tighter uppercase leading-[0.85]">
            Performance <br />
            <span className="opacity-80">On Demand.</span>
          </h2>
          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-black font-black text-2xl tracking-tight">Starting at $85/month</p>
            <p className="text-black/60 font-medium max-w-sm">Discrete delivery of clinical-grade Tadalafil 5mg or 10mg protocols.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-12 py-6 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-2xl border-4 border-black/10"
          >
            ORDER PROTOCOL DISCREETLY
          </button>
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
              embedUrl="https://app.gohighlevel.com/v2/preview/itrpsCuLeBfeQWoOjue6"
              isOpen={true}
              onClose={() => {}}
              isInline={true}
            />
          </div>
        </div>
      </section>

      <GHLFormEmbed 
        type="calendar"
        embedUrl="https://app.gohighlevel.com/v2/preview/itrpsCuLeBfeQWoOjue6"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
