"use client";

import { PageHeader } from "@/components/PageHeader";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <PageHeader 
        title="Get In Touch" 
        description="Our care is intentional and concierge-level. Reach out to start your optimization journey today."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-sans font-thin text-white mb-8 uppercase tracking-tight">
                Clinic Information
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-12 max-w-md">
                Whether you prefer in-clinic visits or the convenience of telehealth, our team is ready to provide elite medical supervision.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Location</h3>
                  <p className="text-gray-400 font-light text-lg">
                    804 Pavilion Court Suite B<br />McDonough, GA 30253
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Phone</h3>
                  <p className="text-gray-400 font-light text-lg">
                    <a href="tel:+14706881678" className="hover:text-white transition-colors">470-688-1678</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Email</h3>
                  <p className="text-gray-400 font-light text-lg">
                    <a href="mailto:info@unashamedbodyandwellness.com" className="hover:text-white transition-colors">info@unashamedbodyandwellness.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Assistance Hours</h3>
                  <div className="text-gray-400 font-light text-lg space-y-1">
                    <p>Mon - Sat: 9:00am - 8:00pm</p>
                    <p>Sunday: CLOSED</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Embed */}
            <div className="pt-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group bg-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6721410847!2d-84.1744153247533!3d33.43179105023771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f45bcc31a5e26b%3A0xfdcc691248068276!2s804%20Pavilion%20Ct%20b%2C%20McDonough%2C%20GA%2030253%2C%20USA!5e0!3m2!1sde!2sde!4v1774099855114!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="luxury-card p-0 rounded-3xl border-white/5 bg-white/[0.02] overflow-hidden">
            <GHLFormEmbed 
              type="form"
              isInline={true}
              isOpen={true}
              onClose={() => {}}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
