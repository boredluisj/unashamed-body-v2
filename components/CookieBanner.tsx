"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";
import { Cookie, X } from "lucide-react";

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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-[100]"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-secondary text-lg">Cookies</h3>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-secondary p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              We use cookies to ensure you get the best experience on our site and to analyze our traffic for medical service improvements.
            </p>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="flex-1 bg-secondary text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-black transition-colors"
                onClickCapture={clickSound}
              >
                Accept All
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="flex-1 bg-gray-50 text-secondary py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors"
                onClickCapture={clickSound}
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
