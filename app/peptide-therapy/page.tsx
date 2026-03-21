"use client";

import { PageHeader } from "@/components/PageHeader";
import { Zap, Activity, Heart, Shield, Dumbbell, TrendingUp } from "lucide-react";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function PeptideTherapyPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const peptides = [
    {
      name: "Sermorelin",
      category: "Growth Hormone Stimulator",
      benefit: "Stronger. Leaner. Better sleep.",
      desc: "Our go-to option for stimulating natural growth hormone release. Improves recovery, body composition, and anti-aging.",
      ideal: "Gym-goers, men over 30, those feeling sluggish",
      icon: TrendingUp
    },
    {
      name: "Pentadeca Arginate",
      category: "Tissue Repair Support",
      benefit: "Heal from within.",
      desc: "Supports soft tissue recovery, joint health, and gut lining integrity. A legal, effective alternative to BPC-157.",
      ideal: "Joint pain, leaky gut, surgery recovery",
      icon: Activity
    },
    {
      name: "PT-141 + B12",
      category: "Libido + Energy",
      benefit: "Reignite your sex drive.",
      desc: "Enhances sexual arousal and performance while B12 gives you a clean energy lift. Safe and fast-acting.",
      ideal: "Low desire, bedroom confidence, energy crashes",
      icon: Heart
    },
    {
      name: "Clomiphene Citrate",
      category: "Hormone & Fertility Support",
      benefit: "Boost T without shutdown.",
      desc: "Stimulates your body's own testosterone and sperm production. Perfect for preserving fertility.",
      ideal: "Younger men, trying to conceive, post-cycle therapy",
      icon: Shield
    },
    {
      name: "Semaglutide",
      category: "Weight Loss Injection",
      benefit: "Lose fat, not muscle.",
      desc: "Weekly injections to control hunger, improve metabolism, and shed stubborn fat.",
      ideal: "Men with weight loss goals or insulin resistance",
      icon: Dumbbell
    }
  ];

  const stacks = [
    { name: "Performance Stack", components: "Sermorelin + Clomiphene", savings: "Save $75", theme: "Strength, energy, hormone health" },
    { name: "Libido + Energy Stack", components: "PT-141 + B12 + Clomiphene", savings: "Save $50", theme: "Drive, performance, T support" },
    { name: "Recovery Stack", components: "Pentadeca Arginate + Sermorelin", savings: "Save $100", theme: "Injury, inflammation, stamina" },
    { name: "Complete Men's Stack", components: "Sermorelin + PT-141 + Clomiphene", savings: "Save $150", theme: "Full-spectrum optimization" }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader 
        title="Peptide Therapy" 
        description="Targeted support for recovery, libido, hormones, and vitality. Fully FDA-compliant medical optimization."
      />

      {/* Intro section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-sans font-thin uppercase tracking-tight mb-8">
          The Future of <span className="text-primary italic">Biotech Optimization</span>
        </h2>
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          Peptides are short chains of amino acids that act as signaling molecules in the body. We use them to precision-target specific biological functions, from growth hormone release to rapid tissue repair.
        </p>
      </section>

      {/* Peptide Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {peptides.map((p, i) => (
            <div key={i} className="luxury-card p-10 flex flex-col h-full group hover:border-primary/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-8 group-hover:border-primary/50 transition-colors">
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-primary/80">{p.category}</span>
                <h3 className="text-2xl font-bold mt-2">{p.name}</h3>
              </div>
              <p className="text-lg font-serif italic text-white/90 mb-4">"{p.benefit}"</p>
              <p className="text-gray-400 font-light mb-8 flex-grow leading-relaxed">{p.desc}</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest font-black text-gray-500 block mb-2">Ideal For:</span>
                <p className="text-sm text-gray-400 font-medium italic">{p.ideal}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Stacks */}
      <section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-sans font-thin uppercase tracking-widest">Performance Stacks</h2>
            <p className="text-gray-400 mt-4 font-light tracking-widest uppercase text-xs">Maximize results with curated combinations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stacks.map((s, i) => (
              <div key={i} className="luxury-card p-10 border-primary/10 hover:border-primary/40 transition-all flex justify-between items-center group">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold uppercase tracking-wider">{s.name}</h3>
                  <p className="text-gray-400 font-light italic">{s.components}</p>
                  <p className="text-sm text-primary font-bold uppercase tracking-widest pt-2">{s.theme}</p>
                </div>
                <div className="text-right">
                  <span className="block text-2xl font-serif font-black italic text-primary animate-pulse">{s.savings}</span>
                  <button 
                     onClick={() => setIsBookingOpen(true)}
                    className="mt-4 text-xs font-black uppercase tracking-widest border-b border-primary/50 pb-1 hover:border-primary transition-colors"
                  >
                    Select Stack
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Note & CTA */}
      <section className="py-32 max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-10">
          <p className="text-sm text-gray-500 font-light italic leading-relaxed">
            Note: The peptides listed represent our most popular options. We can source custom therapies through our compounding partners for specific goals like cognitive enhancement, immune support, or skin health.
          </p>
          <div className="h-[1px] w-24 bg-primary/30 mx-auto" />
          <h2 className="text-3xl md:text-5xl font-serif font-black italic">
            Optimize Your Biology
          </h2>
          <p className="text-xl text-gray-400 font-light mb-12">
            Peptide therapy starts at $225/month. Personalized plans and bundle savings available.
          </p>
          <button
             onClick={() => setIsBookingOpen(true)}
            className="px-14 py-6 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
          >
            Create Your Protocol
          </button>
        </div>
      </section>

      <GHLFormEmbed 
        type="calendar"
        embedUrl="https://app.gohighlevel.com/v2/preview/QJd9Fb7LQrsn4eyiqRNS?notrack=true"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
