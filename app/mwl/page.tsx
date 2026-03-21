"use client";

import { PageHeader } from "@/components/PageHeader";
import { Gauge, Apple, Target, ShieldCheck, HelpCircle } from "lucide-react";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function MedicalWeightLossPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader 
        title="Medical Weight Loss" 
        description="Clinical weight management for men and women. Safely and sustainably lose weight under expert medical guidance."
      />

      {/* Hero Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-sans font-thin tracking-tight uppercase">
              Control <span className="text-primary italic">Your Biology</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Our medical weight management program is designed to help you safely and sustainably lose weight under the guidance of a healthcare provider, using clinical tools like appetite suppressants, peptide therapies, and hormone balancing.
            </p>
            
            <div className="space-y-6 pt-4">
              <h3 className="text-xl font-bold uppercase tracking-widest text-primary/80">The Roadmap</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Metabolic & Hormonal Assessment",
                  "Custom Nutrition & Supplement Plan",
                  "Optional GLP-1 & Lipotropic Meds",
                  "Monthly Professional Check-ins"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-center text-gray-400 font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <button
                 onClick={() => setIsBookingOpen(true)}
                className="px-10 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
              >
                Start Your Journey
              </button>
            </div>
          </div>
          
          <div className="relative aspect-square rounded-3xl overflow-hidden group border border-white/5">
            <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/684971028beb4ba2bda641dd.jpeg"
              alt="Medical Weight Loss"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Faster Fat Loss",
                desc: "Clinically proven methods to shed pounds more efficiently than diet alone.",
                icon: Target
              },
              {
                title: "Optimized Metabolism",
                desc: "Support your body's natural fat-burning ability with targeted clinical treatment.",
                icon: Gauge
              },
              {
                title: "Appetite Control",
                desc: "Medications and coaching to help reduce cravings and emotional eating behaviors.",
                icon: Apple
              },
              {
                title: "Reduced Risk",
                desc: "Lower your chances of diabetes, high blood pressure, and chronic heart disease.",
                icon: ShieldCheck
              }
            ].map((benefit, i) => (
              <div key={i} className="luxury-card p-8 group hover:border-primary/30 transition-all text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors mb-6">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">{benefit.title}</h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Note */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="luxury-card p-12 rounded-3xl border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <div className="flex gap-6 items-start mb-8">
            <HelpCircle className="w-10 h-10 text-primary shrink-0" />
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white font-medium mb-2 uppercase text-sm tracking-widest">Q: Is this only for men?</p>
                  <p className="text-gray-400 font-light leading-relaxed">
                    While we specialize in men's health, our weight loss program is available to any adult who qualifies medically—including women. If you're ready to lose weight and improve your health, we're here to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consult CTA */}
      <section className="py-24 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-black mb-8 italic">
          Ready to Start?
        </h2>
        <p className="text-xl text-gray-400 font-light mb-12">
          Your journey begins with a one-on-one consult and in-depth lab review. <span className="text-primary font-bold">Cost is FREE for a limited time.</span>
        </p>
        <button
           onClick={() => setIsBookingOpen(true)}
          className="px-14 py-6 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
        >
          Inquire Within
        </button>
      </section>

      <GHLFormEmbed 
        type="calendar"
        embedUrl="https://app.gohighlevel.com/v2/preview/7sPEF9hASlDFio4Z3E6U"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
