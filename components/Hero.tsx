"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Shield, Activity, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";

const TEXT_ANIM = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export function Hero() {
  const clickSound = useLuxuryClick();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-200/5 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col items-start text-left">
            {/* Status Batch */}
            <motion.div 
              {...TEXT_ANIM}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-orange-100 shadow-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-secondary tracking-widest uppercase">Premier Men&apos;s Clinic | McDonough, GA</span>
            </motion.div>

            <motion.h1 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.2 }}
              className="text-7xl md:text-8xl font-serif font-black tracking-tighter text-secondary leading-[0.9] mb-8"
            >
              RECLAIM. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 italic">RISE.</span> <br />
              REPEAT.
            </motion.h1>

            <motion.p 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12 max-w-lg"
            >
              Concierge medical optimization for the high-performing man. Specialized in TRT, weight loss, and peptide therapy.
            </motion.p>

            <motion.div 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <Link 
                href="/contact"
                onClick={clickSound}
                className="group relative px-10 py-5 bg-secondary text-white font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-2xl shadow-gray-200"
              >
                <span className="relative z-10">Start Your Assessment</span>
                <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
              
              <Link 
                href="https://unashamedlabwork.com"
                onClick={clickSound}
                className="px-10 py-5 bg-white border border-gray-100 text-secondary font-bold rounded-full hover:bg-gray-50 transition-all active:scale-95"
              >
                Order Bloodwork
              </Link>
            </motion.div>

            {/* Micro Badges */}
            <motion.div 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.5 }}
              className="mt-16 flex flex-wrap gap-8 opacity-60"
            >
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Private Concierge</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity size={18} className="text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Evidence Based</span>
              </div>
            </motion.div>
          </div>

          <div className="relative hidden lg:block">
            {/* Visual Concept Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[4/5] bg-surface rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-white p-8 overflow-hidden group"
            >
              {/* Abstract High-Tech Pattern */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] text-[300px] font-black -rotate-12 pointer-events-none">
                VITAL
              </div>

              {/* Service Cards Overlay */}
              <div className="relative h-full flex flex-col justify-end">
                <div className="space-y-4">
                  {[
                    { label: "Free Testosterone", val: "Optimized", color: "bg-primary" },
                    { label: "Metabolic Age", val: "Decreasing", color: "bg-secondary" },
                    { label: "Cortisol Levels", val: "Controlled", color: "bg-orange-400" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1 + (i * 0.1) }}
                      className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between"
                    >
                      <span className="text-sm font-bold text-secondary uppercase tracking-tighter">{stat.label}</span>
                      <span className={cn("px-3 py-1 rounded-full text-[10px] font-black text-white uppercase", stat.color)}>
                        {stat.val}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Review Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-white max-w-[300px]"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-0.5 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
              <h4 className="text-secondary font-serif font-bold text-xl mb-3 leading-tight">&quot;A life-changing protocol for high-performers.&quot;</h4>
              <p className="text-gray-400 text-xs font-light leading-relaxed">- Private Review, McDonough Clinic</p>
            </motion.div>

            {/* Floating Orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-orange-200/30 rounded-full blur-[50px]" />
          </div>

        </div>
      </div>
    </section>
  );
}
