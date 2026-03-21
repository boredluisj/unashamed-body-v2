"use client";

import { PageHeader } from "@/components/PageHeader";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function IntakeFormPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader 
        title="Patient Intake" 
        description="Please complete the secure form below to establish your clinical profile. All information is HIPAA-protected."
      />
      
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="luxury-card p-4 md:p-8 border-primary/20 bg-white/[0.01]">
          <GHLFormEmbed 
            type="form"
            isOpen={true}
            onClose={() => {}}
            isInline={true}
          />
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-xs uppercase tracking-widest font-light italic">
          Secure, Encrypted Data Transmission • HIPAA Compliant
        </div>
      </section>
    </main>
  );
}
