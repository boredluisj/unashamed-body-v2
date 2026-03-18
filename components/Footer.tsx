"use client";

import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  const clickSound = useLuxuryClick();

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link 
              href="/" 
              className="text-3xl font-serif font-bold tracking-tight text-white flex items-center gap-2"
              onClick={clickSound}
            >
              UNASHAMED<span className="text-primary italic">BODY</span>
            </Link>
            <p className="text-gray-400 leading-relaxed font-light">
              McDonough's premier concierge medical clinic. We help men reclaim their vitality through evidence-based protocols and medical supervision.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold border-b border-white/10 pb-2">Medical Services</h4>
            <ul className="space-y-4">
              {[
                { name: "TRT Therapy", href: "/trt" },
                { name: "Weight Loss", href: "/weight-loss" },
                { name: "Peptide Therapy", href: "/peptide-therapy" },
                { name: "ED Treatment", href: "/ed-treatment" },
                { name: "Road Warrior Health", href: "/road-warrior" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
                    onClick={clickSound}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold border-b border-white/10 pb-2">Our Practice</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 font-light">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>2116 Hwy S, Suite 100<br />McDonough, GA 30252</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 font-light">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(678) 123-4567</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-serif font-bold border-b border-white/10 pb-2">Get Started</h4>
            <Link
              href="https://api.leadconnectorhq.com/widget/booking/CYwBztutyvQCWJTfuZSr"
              target="_blank"
              className="block text-center bg-primary hover:bg-orange-600 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/10"
              onClick={clickSound}
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
