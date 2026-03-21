"use client";

import { Brain, Shield, Heart, Zap, Sparkles, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { useState } from "react";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";

export default function MentalHealthPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = useLuxuryClick();

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex-grow pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold mb-8 backdrop-blur-sm">
            <Brain className="w-4 h-4" />
            UNASHAMED MINDS
          </div>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 text-gradient tracking-tight italic">Mental Clarity.</h1>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 text-white/90">Emotional Strength. Total Wellness.</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
            Your mental health matters just as much as your physical performance. In partnership with Unashamed Minds, we offer confidential, judgment-free support tailored for men who want to feel better and think clearer.
          </p>
        </div>

        {/* Value Prop Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            { 
              icon: <Shield className="w-6 h-6" />, 
              title: "100% Confidential", 
              desc: "Discreet, HIPAA-compliant virtual care platform keeps your sessions private." 
            },
            { 
              icon: <Zap className="w-6 h-6" />, 
              title: "Medication Management", 
              desc: "Clinical evaluation and management of medications if clinically appropriate." 
            },
            { 
              icon: <MessageCircle className="w-6 h-6" />, 
              title: "Supportive Coaching", 
              desc: "Mental health coaching that works alongside your hormone or weight loss plan." 
            }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 luxury-glass transition-all duration-300 hover:scale-[1.02]">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif mb-4 italic">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* The Program */}
        <section className="p-12 md:p-20 rounded-[3rem] bg-white/5 border border-white/10 luxury-glass mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 tracking-tight italic">Mental health IS physical health.</h2>
              <div className="space-y-6 mb-12">
                <p className="text-white/70 leading-relaxed">
                  Depression, anxiety, and burnout are often intensified by hormonal imbalances. Our program aligns your mental and physical optimization for true elite performance.
                </p>
                <div className="space-y-4">
                  {[
                    "One telehealth session per month",
                    "Psychiatric NP evaluation",
                    "Discreet home shipping of meds",
                    "Fits seamlessly into TRT/Peptide plans"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/80">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 rounded-full bg-primary text-black font-bold hover:bg-primary-hover transition-all"
                >
                  Get Started — $150/mo add-on
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/68261329feeed78081e9c95a.jpeg" 
                alt="Mental Clarity" 
                className="rounded-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 p-8 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl max-w-xs">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm font-light italic text-white/80">
                  "Improved mental clarity supports better habits, better sleep, and more consistency."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standalone Section */}
        <section className="text-center">
          <h2 className="text-3xl font-serif mb-8 italic text-white/90">Need stand-alone support?</h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto">
            While many pair this with hormone therapy, our mental health package is available as a stand-alone service for $200/month.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-primary hover:text-white underline-offset-8 transition-colors duration-300 font-serif text-xl"
          >
            Standalone Enrollment
          </button>
        </section>
      </div>
    </div>

      {/* Inline Booking Section */}
      <section id="book-inline" className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-black mb-4 tracking-tight italic text-gradient">Schedule Your Consultation</h2>
            <p className="text-gray-400 font-light">Select a time that works for you to speak with our clinical team.</p>
          </div>
          <div className="bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden luxury-glass shadow-2xl shadow-primary/5">
            <GHLFormEmbed 
              type="calendar"
              embedUrl="https://app.gohighlevel.com/v2/preview/sb7VpA0YbsitEkGxie7h?notrack=true"
              isOpen={true}
              onClose={() => {}}
              isInline={true}
            />
          </div>
        </div>
      </section>

      <GHLFormEmbed 
        type="form"
        embedUrl="https://app.gohighlevel.com/v2/preview/sb7VpA0YbsitEkGxie7h?notrack=true"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
