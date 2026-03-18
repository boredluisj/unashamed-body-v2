"use client";

import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const clickSound = useLuxuryClick();

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Labs", href: "https://unashamedlabwork.com" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8">
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500",
        "bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
      )}>
        {/* Logo */}
        <Link 
          href="/" 
          onClick={clickSound}
          className="text-2xl font-serif font-black tracking-tighter text-secondary group"
        >
          UNASHAMED<span className="text-primary transition-colors group-hover:text-orange-600 italic">BODY</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={clickSound}
              className="text-sm font-bold text-secondary/60 hover:text-primary transition-colors tracking-widest uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={clickSound}
            className="px-6 py-2.5 bg-secondary text-white text-xs font-bold rounded-full hover:bg-primary transition-all shadow-lg hover:shadow-primary/20 tracking-widest uppercase"
          >
            Discovery Call
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => {
            setIsOpen(!isOpen);
            clickSound();
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-4 right-4 mt-4 p-8 bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl transition-all duration-300 origin-top",
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      )}>
        <div className="flex flex-col gap-6 items-center text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                clickSound();
              }}
              className="text-xl font-serif font-bold text-secondary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => {
              setIsOpen(false);
              clickSound();
            }}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl"
          >
            Book Discovery Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
