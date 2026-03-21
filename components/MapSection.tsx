"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function MapSection() {
  return (
    <section className="py-24 bg-[#0A0A0F] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">
            Visit Our <span className="text-[#DC2626] italic">Clinic</span>
          </h2>
          <p className="text-[#9CA3AF] font-light text-xl">
            Experience elite concierge care in person at our McDonough location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 space-y-4">
            <div className="luxury-card p-8 rounded-3xl h-full flex flex-col justify-between border-white/5 bg-white/[0.02]">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Location</h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed">
                      804 Pavilion Court Suite B<br />McDonough, GA 30253
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Phone className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Phone</h3>
                    <p className="text-gray-400 font-light text-sm">
                      <a href="tel:+14706881678" className="hover:text-white transition-colors">470-688-1678</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Mail className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Email</h3>
                    <p className="text-gray-400 font-light text-sm">
                      <a href="mailto:info@unashamedbodyandwellness.com" className="hover:text-white transition-colors text-xs truncate max-w-[180px] block">info@unashamedbodyandwellness.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Clock className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-1">Hours</h3>
                    <p className="text-gray-400 font-light text-sm">
                      Mon - Sat: 9:00am - 8:00pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-8">
                <a 
                  href="https://www.google.com/maps/dir//804+Pavilion+Ct+b,+McDonough,+GA+30253,+USA/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-[#DC2626] font-black text-[10px] uppercase tracking-widest hover:gap-4 transition-all"
                >
                  Get Directions <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2 relative min-h-[400px] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl shadow-black/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.6721410847!2d-84.1744153247533!3d33.43179105023771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f45bcc31a5e26b%3A0xfdcc691248068276!2s804%20Pavilion%20Ct%20b%2C%20McDonough%2C%20GA%2030253%2C%20USA!5e0!3m2!1sde!2sde!4v1774099855114!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            ></iframe>
            
            {/* Overlay Gradient to blend in */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] group-hover:shadow-none transition-all duration-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
