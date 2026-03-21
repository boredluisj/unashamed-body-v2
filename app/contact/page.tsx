"use client";

import { PageHeader } from "@/components/PageHeader";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

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
                    920 Pavilion Court Suite 804B<br />McDonough, GA 30252
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
            
            {/* Map Embed Placeholder / Link */}
            <div className="pt-8">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=920+Pavilion+Court+Suite+804B+McDonough+GA+30252" 
                target="_blank" 
                className="block relative aspect-video rounded-2xl overflow-hidden border border-white/10 group"
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-sm">
                  <span className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest">Open in Google Maps</span>
                </div>
                <img 
                  src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://firebasestorage.googleapis.com/v0/b/highlevel-backend.appspot.com/o/location%2FVSqlfyiMHv6EpHAvboBv%2Fimages%2FnvWn8vi9glfs6qR7jb1V%2FEjQ5MjAgUGF2aWxpb24gQ3Qgc3VpdGUgODA0YiwgTWNEb25vdWdoLCBHQSAzMDI1MywgVVNBIkEaPwoxEi8KFAoSCWUYNS7MW_SIEUpEan-n70TTEJgHKhQKEglz4fIxzFv0iBGwEXXurdMtSRIKc3VpdGUgODA0Yg%2Fmap-20YItqD5b8.jpg?alt=media" 
                  alt="Location Map" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="luxury-card p-8 md:p-12 rounded-3xl border-white/5 bg-white/[0.02]">
            <h2 className="text-2xl font-sans font-thin text-white mb-10 uppercase tracking-tight">
              Send a Message
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-4">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-4">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 ml-4">How can we help?</label>
                <textarea 
                  rows={4}
                  placeholder="Your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <div className="pt-4 space-y-4">
                <p className="text-[10px] text-gray-500 font-light leading-relaxed">
                  By submitting this form, I consent to receive transactional and marketing messages related to services. Message frequency may vary. Reply STOP to opt-out.
                </p>
                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
