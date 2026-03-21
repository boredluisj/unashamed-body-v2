"use client";

import { Check, Info } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";
import { useState } from "react";

const PricingTier = ({
  title,
  price,
  period,
  description,
  features,
  ctaText = "Book An Appointment",
  onCtaClick,
  highlight = false
}: any) => {
  return (
    <div className={`p-8 rounded-2xl border ${highlight ? 'border-primary/50 bg-primary/5' : 'border-white/10 bg-white/5'} luxury-glass transition-all duration-300 hover:scale-[1.02]`}>
      <h3 className="text-2xl font-serif mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-4xl font-bold text-primary">{price}</span>
        {period && <span className="text-white/60">{period}</span>}
      </div>
      <p className="text-white/70 mb-6 text-sm italic">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature: string, i: number) => (
          <li key={i} className="flex gap-2 text-sm text-white/80">
            <Check className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 hover:scale-110" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={onCtaClick}
        className="w-full py-4 rounded-full bg-primary text-black font-semibold hover:bg-primary-hover transition-colors duration-300"
      >
        {ctaText}
      </button>
    </div>
  );
};

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  const openForm = (url: string) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-gradient tracking-tight">Transparent Pricing</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Personalized health optimization with no hidden fees. Every plan includes clinical monitoring by a licensed provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <PricingTier
            title="New Patient Appointment"
            price="$199"
            description="The baseline for establishing as a new patient."
            features={[
              "Initial clinical consultation",
              "Extensive blood work (LabCorp)",
              "Thyroid, Adrenal, Liver, Kidney panels",
              "Testosterone levels (Free & Total)",
              "Metabolic & Cardiovascular health",
              "Plan results delivered within 2 days"
            ]}
            onCtaClick={() => openForm("https://app.gohighlevel.com/v2/preview/EvMNgI8K2JHws7sLjQqs?notrack=true")}
            highlight={true}
          />

          <PricingTier
            title="Injectable TRT"
            price="$195"
            period="/month"
            description="Billed quarterly at $585 per cycle."
            features={[
              "All follow-up provider appointments",
              "Prescribed medications (HCG if req.)",
              "All supplies (syringes, pads, bags)",
              "Free shipping to your home",
              "Concierge provider support",
              "Medication management & reviews"
            ]}
            onCtaClick={() => openForm("https://app.gohighlevel.com/v2/preview/EvMNgI8K2JHws7sLjQqs?notrack=true")}
          />

          <PricingTier
            title="Medical Weight Loss"
            price="$275"
            period="/month"
            description="Weekly injection therapy (Semaglutide)."
            features={[
              "Initial consultation + Free labs",
              "Weekly injection support",
              "Personalized dosing protocol",
              "Ongoing clinician check-ins",
              "Access to Weight Loss Plus ($425)",
              "Available for both Men and Women"
            ]}
            onCtaClick={() => openForm("https://app.gohighlevel.com/v2/preview/7sPEF9hASlDFio4Z3E6U")}
          />

          <PricingTier
            title="Peptide Optimization"
            price="$225"
            period="/month"
            description="Growth Hormone & Repair protocols."
            features={[
              "Sermorelin (GH Stimulator)",
              "Pentadeca Arginate (Healing)",
              "PT-141 + B12 (Libido/Energy)",
              "Ongoing wellness monitoring",
              "Medications included in plan",
              "Discreet Home Delivery"
            ]}
            onCtaClick={() => openForm("https://app.gohighlevel.com/v2/preview/EvMNgI8K2JHws7sLjQqs?notrack=true")}
          />

          <PricingTier
            title="Road Warrior"
            price="$175"
            period="/month"
            description="Specialized for Truckers. Billed quarterly."
            features={[
              "Initial $200 Consultation",
              "Telehealth while on break",
              "Meds shipped to truck stops",
              "Low-T symptom monitoring",
              "Supplies and shipping included",
              "Performance Lab Add-ons ($45)"
            ]}
            onCtaClick={() => openForm("https://app.gohighlevel.com/v2/preview/rZBeAfDYQhX9yt3TajtD?notrack=true")}
          />

          <PricingTier
            title="Unashamed Mind"
            price="$150"
            period="/month"
            description="Mental Health Support & Management."
            features={[
              "Psychiatric NP Consultations",
              "Confidential Medication Management",
              "Mental Health Coaching",
              "HIPAA-compliant platform",
              "$200 as stand-alone service",
              "Judgment-free support"
            ]}
            onCtaClick={() => openForm("https://app.gohighlevel.com/v2/preview/sb7VpA0YbsitEkGxie7h?notrack=true")}
          />
        </div>

        <section className="mt-20 p-12 rounded-3xl bg-white/5 border border-white/10 luxury-glass text-center">
          <Info className="w-12 h-12 text-primary mx-auto mb-6 transition-transform duration-300 hover:rotate-12" />
          <h2 className="text-3xl font-serif mb-6">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="text-primary font-semibold mb-2">Is lab work included?</h4>
              <p className="text-white/60">Yes. All new patient consultations ($199) include a full lab panel used to build your clinical treatment plan.</p>
            </div>
            <div>
              <h4 className="text-primary font-semibold mb-2">Do you accept insurance?</h4>
              <p className="text-white/60">We are cash-pay to ensure high-quality care without insurance restrictions. Many clients use HSA/FSA cards.</p>
            </div>
          </div>
        </section>
      </div>
    </div>

      <GHLFormEmbed
        type="calendar"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </main>
  );
}
