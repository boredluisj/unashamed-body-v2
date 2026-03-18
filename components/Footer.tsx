"use client";

import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { MapPin, Phone } from "lucide-react";

export function Footer() {
  const clickSound = useLuxuryClick();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-serif font-black tracking-tighter text-secondary mb-6 block">
              UNASHAMED<span className="text-primary italic">BODY</span>
            </Link>
            <p className="text-gray-400 leading-relaxed font-light mb-8 max-w-sm">
              McDonough&apos;s premier concierge medical clinic. We help men reclaim their vitality through evidence-based protocols and medical supervision.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">Services</h4>
            <div className="flex flex-col gap-4">
              {[
                { name: "TRT & Optimization", href: "/trt" },
                { name: "Medical Weight Loss", href: "/weight-loss" },
                { name: "Peptide Therapy", href: "/peptide-therapy" },
                { name: "Longevity Optimization", href: "/longevity" }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={clickSound}
                  className="text-gray-500 hover:text-primary transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-6">The Practice</h4>
            <div className="flex flex-col gap-4 text-gray-500 font-light">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>McDonough, GA</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>Private Client Line</span>
              </div>
              <p className="mt-4 text-xs italic opacity-60">By Appointment Only</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-light">
            © {new Date().getFullYear()} Unashamed Body. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-400 font-light">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
