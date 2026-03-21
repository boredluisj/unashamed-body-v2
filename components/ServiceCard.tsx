"use client";

import { motion } from "framer-motion";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  accentColor: string;
}

export function ServiceCard({ title, description, icon: Icon, href, accentColor }: ServiceCardProps) {
  const clickSound = useLuxuryClick();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative luxury-card rounded-2xl p-8 overflow-hidden transition-all duration-300"
    >
      {/* Accent Background decoration */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
        style={{ 
          background: `radial-gradient(circle at top right, ${accentColor}, transparent 70%)` 
        }}
      />

      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center border border-[#1E1E28] group-hover:border-[#DC2626]/30 bg-[#0D0D15] shadow-lg transition-all duration-500 group-hover:scale-110"
        >
          <Icon className="w-6 h-6 text-[#DC2626]" />
        </div>

        <h3 className="text-2xl font-serif font-bold text-[#F0EFFF] mb-3 group-hover:text-[#DC2626] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-[#9CA3AF] font-light leading-relaxed mb-8">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center text-sm font-semibold tracking-wide text-[#F0EFFF] hover:text-[#DC2626] transition-colors gap-2 group/link uppercase"
          onClick={clickSound}
        >
          Explore Service
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Subtle border bottom accent */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  );
}
