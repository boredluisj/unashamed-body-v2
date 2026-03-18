"use client";

import { ServiceCard } from "./ServiceCard";
import { Activity, Zap, Scale, HeartPulse, Truck, Brain } from "lucide-react";

const SERVICES = [
  {
    title: "TRT Therapy",
    description: "Personalized Testosterone Replacement Therapy to restore energy, focus, and drive.",
    icon: Zap,
    href: "/trt",
    accentColor: "#FE9418",
  },
  {
    title: "Weight Loss",
    description: "Medical weight loss solutions like Semaglutide & Tirzepatide under professional supervision.",
    icon: Scale,
    href: "/weight-loss",
    accentColor: "#10B981",
  },
  {
    title: "Peptide Therapy",
    description: "Advanced anti-aging and recovery protocols using Sermorelin, BPC-157, and more.",
    icon: Activity,
    href: "/peptide-therapy",
    accentColor: "#3B82F6",
  },
  {
    title: "ED Treatment",
    description: "Discreet and high-performance solutions for erectile health and confidence.",
    icon: HeartPulse,
    href: "/ed-treatment",
    accentColor: "#F43F5E",
  },
  {
    title: "Road Warrior",
    description: "Specially designed health programs for the unique needs of truckers and travelers.",
    icon: Truck,
    href: "/road-warrior",
    accentColor: "#6366F1",
  },
  {
    title: "Longevity Support",
    description: "Holistic mental and physical support protocols for long-term health and vitality.",
    icon: Brain,
    href: "/longevity",
    accentColor: "#8B5CF6",
  },
];

export function ServiceGrid() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Our Medical <span className="text-primary italic">Specialties</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-light text-lg">
            We don't just treat symptoms. We optimize your biology using the latest in medical science.
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
