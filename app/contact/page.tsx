"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { GHLFormEmbed } from "@/components/GHLFormEmbed";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-40 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Connect With Us</span>
                <h1 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-tight italic">
                  Contact Our <br />
                  <span className="text-gradient">Elite Clinic.</span>
                </h1>
                <p className="text-xl text-gray-400 font-light leading-relaxed max-w-lg">
                  Direct concierge access to medical optimization. Whether you have a question or are ready to begin, our team is here to assist.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white mb-2 italic tracking-wide">Visit Us</h4>
                    <p className="text-gray-500 font-light leading-relaxed">
                      101 Hampton Point Drive Suite 1<br />
                      McDonough, Ga 30253
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white mb-2 italic tracking-wide">Direct Line</h4>
                    <p className="text-gray-500 font-light">(678) 432-8228</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white mb-2 italic tracking-wide">Concierge Email</h4>
                    <p className="text-gray-500 font-light">care@unashamedbody.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif font-bold text-white mb-2 italic tracking-wide">Clinical Hours</h4>
                    <p className="text-gray-500 font-light">
                      Mon - Fri: 9:00 AM - 5:00 PM<br />
                      Sat - Sun: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full -z-10" />
              <div className="bg-white/5 backdrop-blur-3xl p-1 md:p-12 rounded-[3.5rem] border border-white/10 shadow-3xl">
                <div className="mb-10 text-center lg:text-left">
                  <div className="flex items-center gap-3 mb-4 lg:justify-start justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-serif font-bold text-white italic tracking-wide">Send Us A Message</h3>
                  </div>
                  <p className="text-gray-400 font-light italic">
                    High-level inquiries only. For medical consultations, please book a discovery call.
                  </p>
                </div>
                
                <div className="rounded-[2.5rem] overflow-hidden border border-white/5">
                  <GHLFormEmbed 
                    type="form"
                    isOpen={true}
                    onClose={() => {}}
                    isInline={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
