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
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden transition-all"
    >
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ 
          background: `radial-gradient(circle at top right, ${accentColor}, transparent 70%)` 
        }}
      />

      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-2xl font-serif font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-500 font-light leading-relaxed mb-8">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center text-sm font-bold text-secondary hover:text-primary transition-colors gap-2 group/link"
          onClick={clickSound}
        >
          Explore Service
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div 
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  );
}
