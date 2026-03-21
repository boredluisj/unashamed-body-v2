"use client";

import { ServiceCard } from "./ServiceCard";
import { Activity, Zap, Scale, HeartPulse, Truck, Brain } from "lucide-react";

const SERVICES = [
  {
    title: "TRT Therapy",
    description: "Personalized Testosterone Replacement Therapy to restore energy, focus, and drive.",
    icon: Zap,
    href: "/trt",
    accentColor: "#DC2626", // Red Primary
  },
  {
    title: "Weight Loss",
    description: "Medical weight loss solutions like Semaglutide & Tirzepatide under professional supervision.",
    icon: Scale,
    href: "/weight-loss",
    accentColor: "#DC2626",
  },
  {
    title: "Peptide Therapy",
    description: "Advanced anti-aging and recovery protocols using Sermorelin, BPC-157, and more.",
    icon: Activity,
    href: "/peptide-therapy",
    accentColor: "#DC2626",
  },
  {
    title: "ED Treatment",
    description: "Discreet and high-performance solutions for erectile health and confidence.",
    icon: HeartPulse,
    href: "/ed-treatment",
    accentColor: "#DC2626",
  },
  {
    title: "Road Warrior",
    description: "Specially designed health programs for the unique needs of truckers and travelers.",
    icon: Truck,
    href: "/road-warrior",
    accentColor: "#DC2626",
  },
  {
    title: "Longevity Support",
    description: "Holistic mental and physical support protocols for long-term health and vitality.",
    icon: Brain,
    href: "/longevity",
    accentColor: "#DC2626",
  },
];

export function ServiceGrid() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-[#F0EFFF] mb-4">
            Our Medical <span className="text-[#DC2626] italic">Specialties</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#9CA3AF] font-light text-lg">
            We don&apos;t just treat symptoms. We optimize your biology using the latest in medical science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
