"use client";

import { Activity, Shield, Thermometer, Zap, Target, Flame } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "TRT Optimization",
    description: "Bio-identical hormone restoration designed for peak vitality and cognitive focus.",
    icon: Activity,
    href: "/trt",
    accentColor: "bg-primary",
    key: "trt"
  },
  {
    title: "Weight Loss",
    description: "Medically supervised GLP-1 protocols for sustainable metabolic transformation.",
    icon: Flame,
    href: "/weight-loss",
    accentColor: "bg-secondary",
    key: "weight"
  },
  {
    title: "Peptide Therapy",
    description: "Advanced cellular recovery and healing protocols using GH secretagogues.",
    icon: Zap,
    href: "/peptide-therapy",
    accentColor: "bg-orange-500",
    key: "peptide"
  },
  {
    title: "ED Treatment",
    description: "Restoring natural performance with modern medical protocols and absolute discretion.",
    icon: Target,
    href: "/ed-treatment",
    accentColor: "bg-red-500",
    key: "ed"
  },
  {
    title: "Road Warrior Program",
    description: "Optimization for the professional traveler. Stay at your peak, anywhere in the world.",
    icon: Thermometer,
    href: "/road-warrior",
    accentColor: "bg-blue-600",
    key: "road"
  },
  {
    title: "Longevity Protocol",
    description: "Bio-hacking and preventative care to maximize your performance span.",
    icon: Shield,
    href: "/longevity",
    accentColor: "bg-emerald-600",
    key: "longevity"
  }
];

export function ServiceGrid() {
  return (
    <section id="services" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Our Medical <span className="text-primary italic">Specialties</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-light text-lg">
            We don&apos;t just treat symptoms. We optimize your biology using the latest in medical science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.key} 
              {...service} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
