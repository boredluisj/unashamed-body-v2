"use client";

import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export function Footer() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const clickSound = useLuxuryClick();

  return (
    <>
      <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            {/* Brand Column */}
            <div className="space-y-8">
              <Link 
                href="/" 
                className="flex items-center gap-4 group"
                onClick={clickSound}
              >
                <img 
                  src="/images/logo.png" 
                  alt="Unashamed Body" 
                  className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                  style={{ mixBlendMode: 'lighten' }}
                />
              </Link>
              <p className="text-gray-500 leading-relaxed font-light text-sm">
                McDonough&apos;s premier concierge medical clinic. We help high-performing men reclaim their vitality through evidence-based protocols and luxury medical supervision.
              </p>
              <div className="flex gap-6">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/unashamedbody" },
                  { icon: Instagram, href: "https://www.instagram.com/unashamedbody" },
                  { icon: Youtube, href: "https://www.youtube.com/@UnashamedBody" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="text-gray-600 hover:text-primary transition-all transform hover:scale-125"
                    onClick={clickSound}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary/60">Services</h4>
              <ul className="space-y-4">
                {[
                  { name: "Services", href: "/services" },
                  { name: "TRT Therapy", href: "/services/trt" },
                  { name: "Weight Loss", href: "/services/weight-loss" },
                  { name: "Peptide Therapy", href: "/services/peptide-therapy" },
                  { name: "ED Treatment", href: "/services/ed" },
                  { name: "Road Warrior", href: "/services/road-warrior" },
                  { name: "Mental Health", href: "/services/mental-health" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#DC2626] transition-all flex items-center gap-3 text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Info */}
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary/60">Location</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-400 text-sm font-light leading-relaxed">
                  <MapPin className="w-5 h-5 text-[#DC2626] shrink-0 opacity-60" />
                  <span>920 Pavilion Court Suite 804B<br />McDonough, GA 30252</span>
                </li>
                <li className="flex items-center gap-4 text-gray-400 text-sm font-light">
                  <Phone className="w-5 h-5 text-[#DC2626] shrink-0 opacity-60" />
                  <span><a href="tel:+14706881678">470-688-1678</a></span>
                </li>
                <li className="flex items-center gap-4 text-gray-400 text-sm font-light">
                  <Mail className="w-5 h-5 text-[#DC2626] shrink-0 opacity-60" />
                  <span><a href="mailto:info@unashamedbody.com">info@unashamedbody.com</a></span>
                </li>
              </ul>
            </div>

            {/* CTA Column */}
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary/60">Next Step</h4>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                Ready to take control? Book your discovery call with our medical experts today.
              </p>
              <button
                onClick={() => {
                  setIsBookingOpen(true);
                  clickSound();
                }}
                className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white py-4 rounded-full font-semibold text-sm transition-all shadow-2xl shadow-[#DC2626]/20 hover:scale-[1.02]"
              >
                Book A Consultation
              </button>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 text-center text-gray-600 text-[10px] font-medium tracking-tight space-y-6 max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 uppercase tracking-[0.2em] mb-4">
              <Link href="/privacy-policy" className="hover:text-[#DC2626] transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-[#DC2626] transition-colors">Terms of Service</Link>
            </div>
            <p className="uppercase tracking-[0.2em]">© {new Date().getFullYear()} Unashamed Body & Wellness. ALL RIGHTS RESERVED.</p>
            <p className="leading-relaxed opacity-50">
              INDIVIDUAL RESULTS MAY VARY. MEDICAL SERVICES ARE SUBJECT TO PHYSICIAN APPROVAL. 
              INFORMATION PROVIDED IS FOR EDUCATIONAL PURPOSES AND NOT A SUBSTITUTE FOR PROFESSIONAL MEDICAL ADVICE.
            </p>
          </div>
        </div>
      </footer>

      <GHLFormEmbed 
        type="calendar"
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
