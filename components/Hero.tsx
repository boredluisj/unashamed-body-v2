"use client";

import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const clickSound = useLuxuryClick();
  const [particles, setParticles] = useState<Array<{ id: number, size: number, tx: string, ty: string, duration: string, left: string, top: string }>>([]);

  useEffect(() => {
    // Generate particles client-side to avoid hydration mismatch
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 300 + 100, // 100px to 400px
      tx: `${Math.random() * 200 - 100}px`,
      ty: `${Math.random() * 200 - 100}px`,
      duration: `${Math.random() * 10 + 10}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0F] pt-20">
      <style dangerouslySetInnerHTML={{__html: `
        .particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%);
          animation: particle-float var(--duration) ease-in-out infinite alternate;
        }
        @keyframes particle-float {
          0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          100% { transform: translate(var(--tx), var(--ty)) scale(1.2); opacity: 0.6; }
        }
      `}} />
      
      {/* Background Media */}
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6819f390035071dfb1ced878.jpeg"
          className="h-full w-full object-cover scale-[1.02] filter brightness-[0.4] contrast-[1.1]"
        >
          <source src="https://storage.googleapis.com/msgsndr/VSqlfyiMHv6EpHAvboBv/media/68230f6a16cf721592980f74.mp4" type="video/mp4" />
        </video>
        {/* Aceternity-style Hero Highlight (subtle radial gradient overlay) */}
        <div className="absolute inset-0 bg-[#0A0A0F]/60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-10" />
        
        {/* Floating particles (keeping them for extra depth) */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle z-0"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              /* @ts-ignore - css variables */
              "--tx": p.tx,
              "--ty": p.ty,
              "--duration": p.duration,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        {/* Floating trust badges above headline */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["Concierge Care — No Waiting Rooms", "Board-Certified Medical Director", "Telehealth + In-Person Available"].map((badge, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111118]/80 border border-[#1E1E28] backdrop-blur-sm">
              <span className="text-[#DC2626] text-sm">✓</span>
              <span className="text-xs font-medium tracking-wide text-[#9CA3AF] uppercase">{badge}</span>
            </div>
          ))}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tighter text-[#F0EFFF] mb-6 leading-[1.1]">
          Reclaim Your Power.<br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 text-white italic px-2">Unashamed.</span>
            {/* Highlight Background */}
            <span className="absolute inset-0 bg-[#DC2626]/20 -rotate-2 rounded-lg scale-110 z-0" />
            <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#DC2626]/80 -rotate-1 z-0 rounded-full" />
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#9CA3AF] font-light mb-12 leading-relaxed">
          Concierge men&apos;s health care in McDonough, GA. Personalized TRT, ED treatment, and weight loss — no waiting rooms, no cookie-cutter plans.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            onClick={clickSound}
            className="group w-full sm:w-auto px-8 py-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          >
            <span className="flex items-center justify-center gap-2">
              Book a Consultation
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          
          <Link
            href="/services"
            onClick={clickSound}
            className="group w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#111118] text-[#F0EFFF] font-medium rounded-full transition-all border border-[#1E1E28] flex items-center justify-center gap-2 hover:border-[#9CA3AF]/30"
          >
            See Our Treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
