"use client";

import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "TRT", href: "/trt" },
  { name: "Weight Loss", href: "/weight-loss" },
  { name: "Peptides", href: "/peptide-therapy" },
  { name: "ED", href: "/ed-treatment" },
  { name: "Road Warrior", href: "/road-warrior" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const clickSound = useLuxuryClick();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 luxury-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-serif font-bold tracking-tight text-secondary flex items-center gap-2"
              onClick={clickSound}
            >
              UNASHAMED<span className="text-primary italic">BODY</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-secondary/70 hover:text-primary transition-colors"
                onClick={clickSound}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://api.leadconnectorhq.com/widget/booking/CYwBztutyvQCWJTfuZSr"
              target="_blank"
              className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              onClick={clickSound}
            >
              Book Discovery Call
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                clickSound();
              }}
              className="text-secondary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-secondary hover:text-primary border-b border-gray-50"
                onClick={() => {
                  setIsOpen(false);
                  clickSound();
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://api.leadconnectorhq.com/widget/booking/CYwBztutyvQCWJTfuZSr"
              target="_blank"
              className="block w-full text-center bg-primary text-white py-4 rounded-xl mt-4 font-semibold"
              onClick={() => {
                setIsOpen(false);
                clickSound();
              }}
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
