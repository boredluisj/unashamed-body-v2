"use client";

import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { CookieBanner } from "@/components/CookieBanner";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { useState } from "react";
import Link from "next/link";
import { Star, CheckCircle2, XCircle, ArrowRight, Clock } from "lucide-react";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A0F] text-[#F0EFFF] selection:bg-[#DC2626]/30">
      <Hero />
      
      {/* Stats Band */}
      <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-40px] md:mt-[-60px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 luxury-card p-6 md:p-10 rounded-3xl">
          {[
            { value: "500+", label: "Men Optimized" },
            { value: "0", label: "Monthly Hidden Fees" },
            { value: "100%", label: "Custom Protocols" },
            { value: "24/7", label: "Concierge Access" }
          ].map((stat, i) => (
            <div key={i} className="text-center border-r last:border-0 border-[#1E1E28] p-2">
              <div className="text-3xl md:text-5xl font-black font-serif text-[#F0EFFF] mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-[#9CA3AF] uppercase tracking-widest font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <ServiceGrid />

      {/* Differentiators: Us vs Them */}
      <section className="py-24 bg-[#0A0A0F] relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">
              The Unashamed <span className="text-[#DC2626] italic">Difference</span>
            </h2>
            <p className="text-[#9CA3AF] font-light text-xl">
              Why settle for cookie-cutter clinics when you can have elite concierge care?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Industry Standard (Them) */}
            <div className="bg-[#111118]/40 border border-[#1E1E28] rounded-3xl p-8 md:p-12 filter grayscale opacity-80 text-left">
              <h3 className="text-2xl font-bold text-gray-400 mb-8 pb-4 border-b border-gray-600/30">
                Typical "T-Mills"
              </h3>
              <ul className="space-y-6">
                {[
                  "One-size-fits-all generic dosing",
                  "Hidden lab fees and surprise bills",
                  "Waiting rooms and rushed 5-minute visits",
                  "Treated by whoever is on shift",
                  "Ignore root cause, just prescribe"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <XCircle className="w-6 h-6 text-gray-500 shrink-0 mt-0.5" />
                    <span className="text-gray-400 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unashamed Body (Us) */}
            <div className="luxury-card rounded-3xl p-8 md:p-12 border-[#DC2626]/40 relative overflow-hidden text-left">
              {/* Highlight background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/5 rounded-full blur-[80px]" />
              
              <h3 className="text-2xl font-bold text-[#F0EFFF] mb-8 pb-4 border-b border-[#1E1E28]">
                Unashamed Body
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "100% Custom protocols based on comprehensive labs",
                  "Transparent pricing. No hidden fees ever.",
                  "Zero wait times. Direct access to your doctor.",
                  "1-on-1 care with Dr. Gearing & Nurse Mitchell",
                  "Optimize full biology: testosterone, peptides, nutrition"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#DC2626] shrink-0 mt-0.5" />
                    <span className="text-[#F0EFFF] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0D0D15] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">
              Your Path to <span className="text-[#DC2626] italic">Optimization</span>
            </h2>
            <p className="text-[#9CA3AF] font-light text-xl">Three steps to reclaim your vitality.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#DC2626]/50 to-transparent" />
            
            {[
              { num: "01", title: "Discovery & Deep Labs", desc: "A comprehensive look under the hood. We check over 40+ biomarkers." },
              { num: "02", title: "Custom Protocol Strategy", desc: "We sit down (in person or telehealth) and map out your blueprint." },
              { num: "03", title: "Execute & Optimize", desc: "Your medication ships directly to you, with elite concierge tracking along the way." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-[#0A0A0F] border border-[#DC2626]/40 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                  <span className="text-3xl font-serif font-black text-[#DC2626]">{step.num}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-[#9CA3AF] font-light px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Trust / Testimonials Section */}
      <section className="py-32 bg-[#0D0D15] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">Patient <span className="text-[#DC2626] italic">Results.</span></h2>
            <p className="text-[#9CA3AF] font-light tracking-widest uppercase text-xs">Real Men. Real Transformations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Finally found a clinic that takes men's health seriously. Energy levels are back and mental fog is gone.", author: "Mark R.", role: "Business Executive" },
              { quote: "The Road Warrior program changed my life. Easy to stay healthy and maintain muscle while traveling.", author: "David L.", role: "Sales Director" },
              { quote: "Expert medical supervision for weight loss. Lost 30lbs and kept it off while building lean mass.", author: "James K.", role: "Attorney" }
            ].map((t, i) => (
              <div key={i} className="luxury-card p-10 rounded-[2rem] relative group border-[#1E1E28] hover:border-[#DC2626]/30 transition-all duration-500">
                <div className="flex gap-1 mb-6 border-b border-[#1E1E28] pb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-[#DC2626] text-[#DC2626]" />
                  ))}
                </div>
                <p className="text-lg font-light leading-relaxed mb-8 italic text-[#9CA3AF]">
                  "{t.quote}"
                </p>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-[#F0EFFF] text-lg">— {t.author}</span>
                  <span className="text-xs uppercase tracking-widest text-[#DC2626]/80 font-black mt-1">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-[#0A0A0F] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-3">
                From The <span className="text-[#DC2626] italic">Blog</span>
              </h2>
              <p className="text-[#9CA3AF] font-light text-lg">Evidence-based insights from our clinical team.</p>
            </div>
            <Link href="/blog" className="flex items-center gap-2 text-sm uppercase tracking-widest font-black text-[#DC2626] hover:text-[#F0EFFF] transition-colors">
              All Posts <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                slug: "/blog/low-testosterone-signs",
                tag: "TRT",
                title: "What Is Low Testosterone? 7 Signs You Shouldn't Ignore",
                excerpt: "Low T doesn't always look like you'd expect. Fatigue, brain fog, and mood changes compound with age.",
                date: "Jan 15, 2025",
                readTime: "5 min",
              },
              {
                slug: "/blog/trt-vs-testosterone-boosters",
                tag: "TRT",
                title: "TRT vs. Natural Testosterone Boosters: What Actually Works",
                excerpt: "Over-the-counter T boosters are a $5B industry. Here's what the research actually shows.",
                date: "Jan 20, 2025",
                readTime: "5 min",
              },
              {
                slug: "/blog/erectile-dysfunction-40s",
                tag: "ED Treatment",
                title: "Erectile Dysfunction at 40: It's More Common Than You Think",
                excerpt: "ED in your 40s isn't inevitable — it's a medical condition with identifiable causes and effective treatments.",
                date: "Jan 25, 2025",
                readTime: "5 min",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="group flex flex-col border border-[#1E1E28] rounded-2xl overflow-hidden hover:border-[#DC2626]/30 transition-all duration-300 bg-[#111118]/60 hover:bg-[#111118]"
              >
                <div className="px-6 pt-6 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#DC2626]/80 bg-[#DC2626]/10 px-3 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[#6B7280] text-xs">
                    <Clock className="w-3 h-3" aria-hidden="true" />{post.readTime}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-base font-serif font-bold text-[#F0EFFF] mb-3 leading-snug group-hover:text-[#DC2626] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm font-light leading-relaxed flex-1">{post.excerpt}</p>
                </div>
                <div className="px-6 pb-5 flex items-center justify-between border-t border-[#1E1E28] pt-4">
                  <span className="text-[#6B7280] text-xs">{post.date}</span>
                  <span className="flex items-center gap-1 text-[#DC2626] text-xs font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-[#0D0D15] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">
              Common <span className="text-[#DC2626] italic">Questions</span>
            </h2>
            <p className="text-[#9CA3AF] font-light text-xl">Straight answers to what men ask most.</p>
          </div>

          <div className="space-y-3 mb-12">
            {[
              {
                q: "What happens at my first appointment?",
                a: "A comprehensive consultation + 40+ biomarker lab panel at LabCorp. Results and a custom treatment plan delivered within 2 business days.",
              },
              {
                q: "Do you accept insurance?",
                a: "We're cash-pay by design — it removes restrictions so we can prescribe what's actually optimal for you. HSA/FSA cards are accepted.",
              },
              {
                q: "Can everything be done via telehealth?",
                a: "Yes. Consultations, follow-ups, and prescription management are all available remotely. You only visit LabCorp for your blood draw.",
              },
              {
                q: "How long before I see results from TRT?",
                a: "Most patients notice improvements in energy and mood within 2–4 weeks. Libido improves by weeks 4–6. Body composition changes over 3–6 months.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group border border-[#1E1E28] rounded-2xl overflow-hidden bg-[#111118]/40 hover:border-[#DC2626]/20 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                  <span className="text-base font-semibold text-[#F0EFFF]">{item.q}</span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[#DC2626] group-open:rotate-45 transition-transform text-lg font-light">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-[#9CA3AF] font-light leading-relaxed text-sm">{item.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 border border-[#DC2626]/30 text-[#DC2626] hover:bg-[#DC2626]/10 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-widest transition-all hover:scale-105"
            >
              View All FAQs <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-[#0A0A0F] text-[#F0EFFF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#DC2626]/5 blur-[120px] -z-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-serif font-black mb-10 leading-[1.1]">
            READY TO RECLAIM <br />
            <span className="text-[#DC2626] italic">YOUR PRIME?</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#9CA3AF] mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            Stop living in the fog. Skip the generic advice and waiting rooms. Start your elite transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-14 py-6 bg-[#DC2626] text-white font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#B91C1C] transition-all shadow-2xl shadow-[#DC2626]/20 hover:scale-105 active:scale-95"
            >
              Book Discovery Call
            </button>
            <Link 
              href="https://unashamedlabwork.com"
              target="_blank"
              className="px-12 py-6 bg-transparent border border-[#1E1E28] text-[#F0EFFF] font-black text-sm uppercase tracking-widest rounded-full hover:bg-[#111118] transition-all hover:border-[#9CA3AF]/30 active:scale-95"
            >
              Order Initial Labs
            </Link>
          </div>
        </div>
      </section>

      <CookieBanner />

      <GHLFormEmbed 
        type="calendar"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
