"use client";

import { PageHeader } from "@/components/PageHeader";
import { ServiceGrid } from "@/components/ServiceGrid";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function TreatmentsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F0EFFF] selection:bg-[#DC2626]/30">
      <PageHeader 
        title="Treatments" 
        description="Every option is clinically backed and customized to your goals. Elite medical optimization tailored for men."
      />

      {/* Services Grid (Reused from Homepage) */}
      <div className="pt-12">
        <ServiceGrid />
      </div>

      {/* Process Section (How It Works) */}
      <section className="py-24 bg-[#0D0D15] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">
              Your Path to <span className="text-[#DC2626] italic">Optimization</span>
            </h2>
            <p className="text-[#9CA3AF] font-light text-xl">The Unashamed Body Process.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#DC2626]/50 to-transparent" />
            
            {[
              { num: "01", title: "Schedule Consultation", desc: "Book a convenient telehealth or in-person appointment using our online system." },
              { num: "02", title: "Complete Forms & Labs", desc: "Get necessary labs done and complete our secure, HIPAA-compliant medical forms." },
              { num: "03", title: "Meet Your Provider", desc: "Review your results, discuss symptoms, and outline your goals with an expert." },
              { num: "04", title: "Start Custom Plan", desc: "Receive a tailored protocol designed to help you look, feel, and perform at your best." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-[#0A0A0F] border border-[#DC2626]/40 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-black">
                  <span className="text-3xl font-serif font-black text-[#DC2626]">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-[#9CA3AF] font-light px-2 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-12 py-5 bg-[#DC2626] text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#B91C1C] transition-all shadow-2xl shadow-[#DC2626]/20 hover:scale-105 active:scale-95"
            >
              Start The Process
            </button>
          </div>
        </div>
      </section>

      <GHLFormEmbed 
        type="calendar"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
