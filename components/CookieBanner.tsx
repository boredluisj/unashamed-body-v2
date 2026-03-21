"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const clickSound = useLuxuryClick();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
    clickSound();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "false");
    setIsVisible(false);
    clickSound();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[100]"
        >
          <div className="bg-[#0D0D15] border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif font-bold text-white text-base mb-1">We use cookies</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                  We use cookies to improve your experience and analyze site usage. No data is sold to third parties.{" "}
                  <Link href="/privacy-1" className="text-white/70 underline underline-offset-2 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 bg-[#DC2626] hover:bg-[#B91C1C] text-white py-2.5 rounded-xl text-sm font-semibold transition-colors"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white py-2.5 rounded-xl text-sm font-medium transition-colors border border-white/10"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
