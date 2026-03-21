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
  imageUrl?: string;
  bookingUrl?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, accentColor, imageUrl, bookingUrl }: ServiceCardProps) {
  const clickSound = useLuxuryClick();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative luxury-card rounded-2xl p-8 overflow-hidden transition-all duration-300 min-h-[320px] flex flex-col justify-end"
    >
      {/* Background Image with Overlay */}
      {imageUrl && (
        <>
          <div className="absolute inset-0 z-0">
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent z-0" />
          </div>
        </>
      )}

      {/* Accent Background decoration (only if no image) */}
      {!imageUrl && (
        <div 
          className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500"
          style={{ 
            background: `radial-gradient(circle at top right, ${accentColor}, transparent 70%)` 
          }}
        />
      )}

      <div className="relative z-10 w-full">
        <div 
          className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center border border-[#1E1E28] group-hover:border-[#DC2626]/30 bg-[#0D0D15]/80 backdrop-blur-md shadow-lg transition-all duration-500 group-hover:scale-110"
        >
          <Icon className="w-6 h-6 text-[#DC2626]" />
        </div>

        <h3 className="text-2xl font-serif font-bold text-[#F0EFFF] mb-3 group-hover:text-[#DC2626] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-[#9CA3AF] font-light leading-relaxed mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <Link
            href={href}
            className="inline-flex items-center text-xs font-semibold tracking-wide text-[#F0EFFF] hover:text-[#DC2626] transition-colors gap-2 group/link uppercase"
            onClick={clickSound}
          >
            Details
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold tracking-widest text-white bg-[#DC2626] px-4 py-2 rounded-full hover:bg-[#B91C1C] transition-all gap-2 shadow-lg shadow-black/20 uppercase"
              onClick={clickSound}
            >
              Book Now
            </a>
          )}
        </div>
      </div>

      {/* Subtle border bottom accent */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ease-out z-20"
        style={{ backgroundColor: accentColor }}
      />
    </motion.div>
  );
}
