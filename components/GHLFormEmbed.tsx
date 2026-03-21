"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";

interface GHLFormEmbedProps {
  type: "calendar" | "form" | "quiz";
  embedUrl?: string;
  isOpen: boolean;
  onClose: () => void;
  isInline?: boolean;
}

export function GHLFormEmbed({ type, embedUrl, isOpen, onClose, isInline }: GHLFormEmbedProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || (!isOpen && !isInline)) return null;

  // Default URLs from brand analysis
  const defaultUrls = {
    calendar: "https://api.leadconnectorhq.com/widget/booking/CYwBztutyvQCWJTfuZSr",
    form: "https://api.leadconnectorhq.com/widget/form/EvMNgI8K2JHws7sLjQqs", 
    quiz: "https://api.leadconnectorhq.com/widget/quiz/1Upghd1k5mnzFXRDQ7fu",
  };

  const finalUrl = embedUrl || defaultUrls[type];

  const iframeContent = (
    <div className={cn("w-full h-full", !isInline && "pt-12 md:pt-0")}>
      <iframe
        src={finalUrl}
        style={{ width: "100%", height: "100%", border: "none" }}
        id={`ghl-${type}-embed`}
        title={`${type} Embed`}
      />
    </div>
  );

  if (isInline) {
    return <div className="w-full h-[800px]">{iframeContent}</div>;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl h-[80vh] bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Iframe */}
        {iframeContent}
      </div>
    </div>
  );
}
