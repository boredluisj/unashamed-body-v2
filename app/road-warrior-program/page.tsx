"use client";

import { PageHeader } from "@/components/PageHeader";
import { Truck, Video, Package, ClipboardCheck, AlertTriangle, Battery, Gauge, Download, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function RoadWarriorPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader 
        title="Road Warrior Program" 
        description="Built for the road. Focused on your strength. Tailored for your schedule. Elite healthcare for long-haul drivers."
      />

      {/* Hero Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-sans font-thin uppercase tracking-tight">
              Running On <span className="text-primary italic">Empty?</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              If you’ve been dealing with low energy, weight gain, poor sleep, or low drive—you’re not alone. The road doesn’t have to be a dead end for your health.
            </p>
            <p className="text-lg text-gray-500 font-light italic">
              "Real, reliable care that moves with you so you can focus on the road, not the waiting room."
            </p>
            
            <div className="pt-4">
              <button
                 onClick={() => setIsBookingOpen(true)}
                className="px-10 py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-primary-dark transition-all shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95"
              >
                Start Your Refuel
              </button>
            </div>
          </div>
          
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group border border-white/5">
             <img 
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/68261329feeed78081e9c95a.jpeg"
              alt="Road Warrior Program"
              className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute bottom-8 left-8 right-8 luxury-card p-6 backdrop-blur-md bg-black/40 border-white/10">
               <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">Exclusive Program</span>
               <h3 className="text-xl font-bold text-white">Trucker Optimization</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Truckers Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-sans font-thin uppercase tracking-widest">Why Drivers Are at Risk</h2>
            <div className="h-[1px] w-24 bg-primary/40 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { title: "Sedition", icon: AlertTriangle, desc: "Long hours behind the wheel with limited movement." },
               { title: "Sleep Debt", icon: Battery, desc: "Disrupted schedules and night shifts taxing your recovery." },
               { title: "Restricted Diet", icon: Package, desc: "Limited food choices on the road impacting metabolic health." }
             ].map((r, i) => (
               <div key={i} className="luxury-card p-10 flex flex-col items-center text-center border-white/5 group hover:border-primary/20 transition-all">
                  <r.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{r.title}</h3>
                  <p className="text-gray-500 font-light">{r.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* How It Works - Trucker Style */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-serif font-black italic mb-6">Built for Your Lifestyle</h2>
           <p className="text-xl text-gray-500 font-light tracking-widest uppercase text-xs">Zero friction. Maximum results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
           <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-white/5" />
           {[
             { step: "01", title: "Virtual Consult", icon: Video, desc: "Telehealth visits while you take a break at the truck stop." },
             { step: "02", title: "Local Labs", icon: ClipboardCheck, desc: "Order labs to any LabCorp location on your route." },
             { step: "03", title: "Direct Shipping", icon: Truck, desc: "Medications shipped directly to you or your home base." },
             { step: "04", title: "Quarterly Check-ins", icon: Calendar, desc: "Managed on your terms, not monthly hassles." }
           ].map((s, i) => (
             <div key={i} className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-2xl shadow-primary/5">
                   <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider">{s.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{s.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Pricing & Add-ons */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="luxury-card p-12 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                 <h3 className="text-2xl font-bold uppercase tracking-[0.2em] mb-8">Quarterly Membership</h3>
                 <div className="space-y-6 mb-12">
                    <div className="flex justify-between items-center text-lg">
                       <span className="text-gray-300">Initial Consultation + Labs</span>
                       <span className="font-bold text-white">$200</span>
                    </div>
                    <p className="text-sm text-gray-500 italic">Quarterly billing includes all medications, follow-ups, and future lab work. No surprise costs.</p>
                 </div>
                 <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-5 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-xl"
                 >
                    Get Started for $300
                 </button>
              </div>

              <div className="luxury-card p-12 border-white/10 flex flex-col justify-between">
                 <div>
                    <div className="flex justify-between items-start mb-6">
                       <h3 className="text-2xl font-bold uppercase tracking-[0.2em]">Add-On Performance Lab</h3>
                       <span className="text-primary font-black text-2xl">+$45</span>
                    </div>
                    <p className="text-gray-400 font-light mb-8 italic">Perfect for truckers struggling with extreme fatigue, weight gain, or poor recovery.</p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex gap-3 items-center text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>DHEA-S (Adrenal & Stress Response)</span>
                       </li>
                       <li className="flex gap-3 items-center text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>IGF-1 (Growth Hormone Activity)</span>
                       </li>
                       <li className="flex gap-3 items-center text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>A1C (Long-term Metabolic Health)</span>
                       </li>
                    </ul>
                 </div>
                 <button 
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-5 bg-white/5 hover:bg-white/10 text-white font-black text-sm uppercase tracking-widest rounded-xl transition-all"
                 >
                    Upgrade My Labs
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Guide Download CTA */}
      <section className="py-24 text-center px-4">
         <div className="max-w-2xl mx-auto luxury-card p-12 border-white/5">
            <Download className="w-12 h-12 text-primary mx-auto mb-8 animate-bounce" />
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">Want Even More Clarity?</h3>
            <p className="text-gray-500 font-light mb-8">Download our free Road Warrior Health Guide designed specifically for the trucker lifestyle.</p>
            <a 
              href="https://storage.googleapis.com/msgsndr/VSqlfyiMHv6EpHAvboBv/media/682ba8590e2585ed10ff4041.png" 
              target="_blank"
              className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-gray-200 transition-all font-sans"
            >
               Order Free Guide
            </a>
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
