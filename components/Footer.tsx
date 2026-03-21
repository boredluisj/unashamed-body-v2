"use client";

import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { MapPin, Phone, Mail } from "lucide-react";
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
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6819f228b614b1667e34666b.jpeg" 
                  alt="Unashamed Body" 
                  className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>
              <p className="text-gray-500 leading-relaxed font-light text-sm">
                McDonough&apos;s premier concierge medical clinic. We help high-performing men reclaim their vitality through evidence-based protocols and luxury medical supervision.
              </p>
              <div className="flex gap-6">
                {[
                  {
                    name: "TikTok",
                    href: "https://www.tiktok.com/@unashamed_body",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
                      </svg>
                    ),
                  },
                  {
                    name: "YouTube",
                    href: "https://www.youtube.com/@UnashamedBody",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/unashamed_body",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Unashamed Body on ${social.name}`}
                    className="text-gray-600 hover:text-primary transition-all transform hover:scale-125"
                    onClick={clickSound}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h4 className="text-xs uppercase tracking-[0.3em] font-black text-primary/60">Services</h4>
              <ul className="space-y-4">
                {[
                  { name: "Treatments", href: "/treatments" },
                  { name: "TRT Therapy", href: "/trt" },
                  { name: "Weight Loss", href: "/mwl" },
                  { name: "Peptide Therapy", href: "/peptide-therapy" },
                  { name: "ED Treatment", href: "/tasalafil" },
                  { name: "Road Warrior", href: "/road-warrior-program" },
                  { name: "Mental Health", href: "/mental-health-add-on" },
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
              <Link href="/privacy-1" className="hover:text-[#DC2626] transition-colors">Privacy Policy</Link>
              <Link href="/tos" className="hover:text-[#DC2626] transition-colors">Terms of Service</Link>
              <Link href="/refund" className="hover:text-[#DC2626] transition-colors">Refund Policy</Link>
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
