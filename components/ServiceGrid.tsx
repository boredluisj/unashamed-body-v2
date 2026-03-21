"use client";

import { ServiceCard } from "./ServiceCard";
import { Activity, Zap, Scale, HeartPulse, Truck, Brain } from "lucide-react";

const SERVICES = [
  {
    title: "TRT Therapy",
    description: "Personalized Testosterone Replacement Therapy to restore energy, focus, and drive.",
    icon: Zap,
    href: "/trt",
    accentColor: "#DC2626",
    imageUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6819f390035071dfb1ced878.jpeg",
    bookingUrl: "https://app.gohighlevel.com/v2/preview/qpFvStkXcBZ7Z6n2dKDg?notrack=true",
  },
  {
    title: "Weight Loss",
    description: "Medical weight loss solutions like Semaglutide & Tirzepatide under professional supervision.",
    icon: Scale,
    href: "/mwl",
    accentColor: "#DC2626",
    imageUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6819f4d7b614b14dd734668b.jpeg",
    bookingUrl: "https://app.gohighlevel.com/v2/preview/7sPEF9hASlDFio4Z3E6U",
  },
  {
    title: "Peptide Therapy",
    description: "Advanced anti-aging and recovery protocols using Sermorelin, BPC-157, and more.",
    icon: Activity,
    href: "/peptide-therapy",
    accentColor: "#DC2626",
    imageUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/681bc70668230f6a27cf7201.jpeg",
    bookingUrl: "https://app.gohighlevel.com/v2/preview/QJd9Fb7LQrsn4eyiqRNS?notrack=true",
  },
  {
    title: "ED Treatment",
    description: "Discreet and high-performance solutions for erectile health and confidence.",
    icon: HeartPulse,
    href: "/tasalafil",
    accentColor: "#DC2626",
    imageUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6819f44f5351de0061e88863.jpeg",
    bookingUrl: "https://app.gohighlevel.com/v2/preview/itrpsCuLeBfeQWoOjue6",
  },
  {
    title: "Road Warrior",
    description: "Specially designed health programs for the unique needs of truckers and travelers.",
    icon: Truck,
    href: "/road-warrior-program",
    accentColor: "#DC2626",
    imageUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6823101668230f2f5acf724c.jpeg",
    bookingUrl: "https://api.leadconnectorhq.com/widget/booking/CYwBztutyvQCWJTfuZSr",
  },
  {
    title: "Unashamed Minds",
    description: "Psychiatric support and mental health coaching designed for high-performing men.",
    icon: Brain,
    href: "/mental-health-add-on",
    accentColor: "#DC2626",
    imageUrl: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/681bc7fac6118d7ef26aa1e6.jpeg",
    bookingUrl: "https://app.gohighlevel.com/v2/preview/sb7VpA0YbsitEkGxie7h?notrack=true",
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
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              accentColor={service.accentColor}
              imageUrl={service.imageUrl}
              bookingUrl={service.bookingUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
