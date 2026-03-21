"use client";

import { useCallback, useRef } from "react";

/**
 * useLuxuryClick hook
 * Provides a subtle, premium "click" sound/haptic experience for luxury UI interactions.
 */
export function useLuxuryClick() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playClick = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.02, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio might be blocked by browser policy until interaction
    }
  }, []);

  return playClick;
}
