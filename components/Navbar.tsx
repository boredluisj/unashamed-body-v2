"use client";

import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

const NAV_LINKS = [
  { name: "Treatments", href: "/treatments" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const clickSound = useLuxuryClick();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 luxury-glass border-b border-white/5 bg-black/40 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className="flex items-center gap-4 group"
                onClick={clickSound}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all" />
                  <img
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6819f228b614b1667e34666b.jpeg"
                    alt="Unashamed Body"
                    className="h-16 w-auto object-contain transition-transform group-hover:scale-105 relative z-10 mix-blend-screen"
                    style={{ maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 90%)' }}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] font-black text-gray-400 hover:text-primary transition-all hover:scale-105"
                  onClick={clickSound}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsBookingOpen(true);
                  clickSound();
                }}
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl shadow-[#DC2626]/20 transition-all hover:scale-105 active:scale-95"
              >
                Book A Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                  clickSound();
                }}
                className="text-white p-2 hover:bg-white/5 rounded-xl transition-all"
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 top-24 bg-black/95 backdrop-blur-3xl lg:hidden transition-all duration-500 z-40 transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}>
          <div className="flex flex-col items-center justify-center h-full space-y-12 pb-24">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-3xl font-serif font-black italic tracking-wider text-white hover:text-primary transition-all hover:scale-110"
                onClick={() => {
                  setIsOpen(false);
                  clickSound();
                }}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsBookingOpen(true);
                clickSound();
              }}
              className="bg-[#DC2626] text-white px-12 py-6 rounded-full text-lg font-black tracking-widest uppercase shadow-2xl shadow-[#DC2626]/40"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      <GHLFormEmbed 
        type="calendar"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
