"use client";

import { PageHeader } from "@/components/PageHeader";
import { Brain, ShieldCheck, HeartPulse, Video, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function MentalHealthPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader 
        title="Unashamed Mind Support" 
        description="Confidential, judgment-free support for stress, anxiety, and depression. Because mental strength is the foundation of physical excellence."
      />

      {/* Partnership Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
           <span className="text-[10px] tracking-widest uppercase font-black text-gray-500">In Partnership With</span>
           <span className="text-xs font-serif font-black italic text-primary">Unashamed Minds</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-sans font-thin uppercase tracking-tight mb-8">
          Mental Clarity. <span className="text-primary italic">Emotional Strength.</span>
        </h2>
        <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
          Your mental health matters just as much as your physical health. We've created a space where you can get the support you need to feel clear, focused, and back in control of your life.
        </p>
      </section>

      {/* Program Details */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 relative aspect-square rounded-3xl overflow-hidden group border border-white/5">
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/68261329feeed78081e9c95a.jpeg" 
                  alt="Mental Health Partnership" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                />
             </div>

             <div className="order-1 lg:order-2 space-y-10">
                <h3 className="text-2xl font-bold uppercase tracking-widest text-primary/80">Support Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   {[
                     { title: "Psychiatric Care", icon: HeartPulse, desc: "Monthly telehealth sessions with a psychiatric nurse practitioner." },
                     { title: "Med Management", icon: ShieldCheck, desc: "Full medication management if clinically appropriate." },
                     { title: "Supportive Coaching", icon: MessageSquare, desc: "Confidential mental health coaching to navigate life's stressors." },
                     { title: "Virtual Platform", icon: Video, desc: "Secure, HIPAA-compliant virtual care from your home or road." }
                   ].map((item, i) => (
                     <div key={i} className="space-y-4">
                        <item.icon className="w-6 h-6 text-primary" />
                        <h4 className="text-white font-bold uppercase tracking-wider text-sm">{item.title}</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>
                <div className="pt-6 border-t border-white/5 uppercase">
                   <p className="text-xs text-gray-500 tracking-widest italic">Stand-alone support or seamless pair with hormone protocols.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ & CTA */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
         <div className="text-center mb-20">
            <h2 className="text-3xl font-sans font-thin uppercase tracking-widest mb-4">Game Plan for Wellness</h2>
            <div className="h-[1px] w-24 bg-primary/30 mx-auto" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="luxury-card p-10 group">
               <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Effect on TRT?</h4>
               <p className="text-gray-400 font-light text-sm leading-relaxed italic">
                 "Designed to enhance your results. Improved mental clarity supports better habits, sleep, motivation, and consistency."
               </p>
            </div>
            <div className="luxury-card p-10 group">
               <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Confidentiality</h4>
               <p className="text-gray-400 font-light text-sm leading-relaxed italic">
                 "Absolutely. 100% HIPAA-compliant. Your sessions and treatment plans are private, secure, and judgment-free."
               </p>
            </div>
         </div>

         <div className="luxury-card p-12 md:p-20 text-center border-primary/20 bg-gradient-to-t from-primary/5 to-transparent rounded-[3rem]">
            <h3 className="text-4xl md:text-6xl font-serif font-black italic mb-8">Ready to Feel Strong?</h3>
            <p className="text-xl text-gray-400 font-light mb-12">Total emotional wellness for just <span className="text-primary font-bold animate-pulse">$150/month</span>.</p>
            <button
               onClick={() => setIsBookingOpen(true)}
              className="px-14 py-6 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all hover:scale-105"
            >
              Secure Initial Session
            </button>
         </div>
      </section>

      <GHLFormEmbed 
        type="calendar"
        embedUrl="https://app.gohighlevel.com/v2/preview/sb7VpA0YbsitEkGxie7h?notrack=true"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
