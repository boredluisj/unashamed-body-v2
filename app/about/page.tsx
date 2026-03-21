"use client";

import { useState } from "react";
import { Star, ChevronRight, Shield, Award, Users } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-in fade-in slide-in-from-left-12 duration-1000">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Our Mission</span>
            <h1 className="text-6xl md:text-9xl font-serif font-black mb-12 leading-none italic">
              Redefining the <br />
              <span className="text-gradient">Standard of Care.</span>
            </h1>
            <div className="prose prose-xl prose-invert text-gray-400 font-light space-y-8 max-w-2xl">
              <p className="leading-relaxed">
                Unashamed Body isn&apos;t just a clinic. We are a concierge performance center dedicated to hormone optimization, metabolic health, and peak human performance.
              </p>
              <p className="leading-relaxed border-l-2 border-primary/30 pl-8 italic">
                &quot;We don&apos;t treat papers. We treat people. If your labs are &apos;normal&apos; but you feel like a shadow of yourself, we have a problem.&quot;
              </p>
            </div>

            <div className="mt-16 flex flex-wrap gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-6 bg-primary text-black font-black rounded-2xl hover:bg-orange-600 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-3 group"
              >
                JOIN THE MOVEMENT <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="py-32 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield,
                title: "Concierge Privacy", 
                text: "Direct access to providers and total discretion in an elite clinical environment designed for high-performers." 
              },
              { 
                icon: Award,
                title: "Evidence-Based", 
                text: "We rely on the latest peer-reviewed longevity science and clinical data to deliver safe, effective, life-changing results." 
              },
              { 
                icon: Users,
                title: "Patient-First", 
                text: "No cookie-cutter protocols. Every optimization plan is uniquely designed for your biomarkers and specific life goals." 
              }
            ].map((item, i) => (
              <div key={i} className="group p-12 rounded-[3rem] bg-black border border-white/5 hover:border-primary/30 transition-all duration-500 backdrop-blur-xl">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-black transition-all">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-6 italic tracking-wide">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed mb-8">{item.text}</p>
                <div className="w-12 h-1 bg-white/10 group-hover:w-full group-hover:bg-primary transition-all duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-32 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute inset-4 border border-primary/30 rounded-[3rem] -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop" 
                alt="Medical Excellence" 
                className="rounded-[3rem] grayscale-[0.2] hover:grayscale-0 transition-all duration-700 shadow-2xl translate-x-4 -translate-y-4"
              />
            </div>
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-serif font-black italic text-gradient leading-tight">The Unashamed <br /> Difference.</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Located in the heart of McDonough, we are more than just a clinic. We are a concierge performance center. We understand that aging is a biological process that we can influence.
              </p>
              <ul className="space-y-6">
                {["Elite Diagnostic Testing", "Direct Provider Communication", "Custom Compound Medications", "Continuous Health Optimization"].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold group">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-all" />
                    <span className="font-serif italic text-lg tracking-wide">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
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
