"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playClick = useLuxuryClick();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const floatY1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const floatRotate1 = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const floatRotate2 = useTransform(scrollYProgress, [0, 1], [0, -8]);

  const TEXT_ANIM = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center pt-28 pb-20 overflow-hidden bg-white">
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ scale: bgScale }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/5 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop"
          alt="Premium Medical Consulting"
          className="w-full h-full object-cover object-center scale-105"
        />
        
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-pulse" />
        <div className="absolute -bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] mix-blend-multiply opacity-40 animate-pulse delay-500" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div>
            <motion.div 
              {...TEXT_ANIM}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-orange-100 shadow-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-secondary tracking-widest uppercase">Premier Men's Clinic | McDonough, GA</span>
            </motion.div>

            <motion.h1 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif font-bold text-secondary mb-6 leading-[0.95] tracking-tight"
            >
              Reclaim Your <br/>
              <span className="text-primary italic font-light drop-shadow-sm">Masculine Edge.</span>
            </motion.h1>

            <motion.p 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed font-light max-w-xl"
            >
              Advanced hormone optimization and medical weight loss built for men who refuse to settle. No shortcuts. Just results.
            </motion.p>

            <motion.div 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <a 
                href="https://api.leadconnectorhq.com/widget/booking/CYwBztutyvQCWJTfuZSr"
                target="_blank"
                onMouseDown={playClick}
                className="w-full sm:w-auto bg-secondary text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                Schedule Evaluation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services"
                onMouseDown={playClick}
                className="w-full sm:w-auto bg-white/80 backdrop-blur-md border border-gray-100 text-secondary px-10 py-5 rounded-full font-bold hover:bg-white transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-sm"
              >
                Our Specialties
              </a>
            </motion.div>

            <motion.div 
              {...TEXT_ANIM}
              transition={{ ...TEXT_ANIM.transition, delay: 0.4 }}
              className="mt-16 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Board-Certified <br/> Specialists</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary opacity-60">Rapid Lab <br/> Turnaround</span>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:block relative h-[600px] perspective-[1000px]">
            <motion.div 
              style={{ y: floatY1, rotateZ: floatRotate1 }}
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-10 w-80 bg-white/80 backdrop-blur-2xl border border-white p-8 rounded-[40px] shadow-2xl z-20"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="Patient" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-black">+2K</div>
                </div>
                <div className="flex gap-0.5 text-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
              <h4 className="text-secondary font-serif font-bold text-xl mb-3 leading-tight">"A life-changing protocol for high-performers."</h4>
              <p className="text-gray-400 text-xs font-light leading-relaxed">- Private Review, McDonough Clinic</p>
            </motion.div>

            <motion.div 
              style={{ y: floatY2, rotateZ: floatRotate2 }}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-[10%] bottom-20 w-64 bg-secondary/95 backdrop-blur-3xl text-white p-8 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/10 z-10"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <div className="text-5xl font-serif font-bold text-white mb-2 italic">100%</div>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Personalized Care <br /> Clinical Precision</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
