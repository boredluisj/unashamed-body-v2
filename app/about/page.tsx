"use client";

import { PageHeader } from "@/components/PageHeader";
import { ShieldCheck, Stethoscope, Video } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <PageHeader 
        title="About Us" 
        description="We won't stop until you're feeling better than you have in years. Guiding you on your journey to renewed strength, confidence, and vitality."
      />

      {/* Team Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-sans font-thin text-white mb-20 text-center tracking-tight uppercase">
          Meet The Team
        </h2>

        <div className="space-y-32">
          {/* Profile 1: Monique */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/68209d6875a08ec302e3e7cd.jpeg"
                alt="Monique Mitchell"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-primary/80 uppercase tracking-[0.2em] text-sm font-bold mb-4">Board Certified Nurse Practitioner, Founder & CEO</h3>
                <h4 className="text-4xl md:text-5xl font-serif font-light text-white italic">Monique Mitchell</h4>
              </div>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p>
                  Welcome to Unashamed Body & Wellness Group! My name is Monique Mitchell, and I am dedicated to helping men reclaim their vitality, confidence, and overall quality of life. With over 12 years of experience in healthcare—spanning emergency medicine, primary care, urgent care, and cardiology—I've seen firsthand how low testosterone and related health issues can significantly impact a man's well-being.
                </p>
                <p>
                  Throughout my career, I worked with many men facing challenges like decreased energy, diminished libido, and weight struggles. However, I often found myself limited by corporate policies that prevented me from providing the personalized care these men truly needed. That realization fueled my passion to make a difference on my own terms.
                </p>
                <p>
                  In response, I founded Unashamed Body & Wellness Group—an environment where men can access safe, effective, and customized treatments including testosterone replacement therapy, erectile dysfunction solutions, peptide therapy, and weight management.
                </p>
                <p>
                  My mission is simple: to make every man who walks through my doors a sharper, stronger, and better version of himself. I am committed to your health, your confidence, and your future. Let's work together to unlock your full potential.
                </p>
              </div>
            </div>
          </div>

          {/* Profile 2: Dr. Gearing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <h3 className="text-primary/80 uppercase tracking-[0.2em] text-sm font-bold mb-4">Medical Director</h3>
                <h4 className="text-4xl md:text-5xl font-serif font-light text-white italic">Dr. Bobby Gearing, MD</h4>
              </div>
              <div className="space-y-6 text-gray-400 font-light leading-relaxed">
                <p>
                  Hey Guys, and welcome to our Men's Health driven clinic! Originally from Rochester, NY, I am excited to now serve the Atlanta community with a dedicated focus on men's health and wellness. I graduated from Ross University School of Medicine in 2008 and completed my residency and chief residency at the State University of New York Downstate Medical Center in 2012.
                </p>
                <p>
                  Over the past 10 years, I have gained extensive hands-on experience in hormone replacement therapy and weight loss solutions, helping men regain their vitality and improve their quality of life. I recognize the unique needs of men when it comes to hormonal health and am passionate about providing personalized, effective treatment options—especially testosterone replacement therapy—that help men feel their best again.
                </p>
                <p>
                  At Unashamed Body & Wellness Group, we are committed to breaking down stigmas around men's health and empowering our patients to achieve optimal wellness without shame or hesitation.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6820a4573cb6ae880666f1fb.jpeg"
                alt="Dr. Bobby Gearing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 border-t border-white/5 relative bg-black/50">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-thin tracking-widest uppercase text-white mb-6">
              Committed To Your Well-Being
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Science-Based & Personalized",
                description: "We never rely on templates or trends—your treatment plan is tailored specifically to your unique physiology.",
                icon: Stethoscope
              },
              {
                title: "In-Clinic or Telehealth",
                description: "Experience the same level of high-touch concierge care whether you visit us physically or connect virtually.",
                icon: Video
              },
              {
                title: "100% HIPAA-Compliant",
                description: "Secure medical forms, encrypted telehealth portals, and private digital access to your treatment team.",
                icon: ShieldCheck
              }
            ].map((value, i) => (
              <div key={i} className="luxury-card p-8 text-center group">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50">
                  <value.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
