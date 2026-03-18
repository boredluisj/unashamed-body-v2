import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      <Hero />
      
      <ServiceGrid />

      {/* Trust Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { quote: "Finally found a clinic that takes men&apos;s health seriously. energy levels are back.", author: "Mark R." },
              { quote: "The Road Warrior program changed my life. Easy to stay healthy on the road.", author: "David L." },
              { quote: "Expert medical supervision for weight loss. Lost 30lbs.", author: "James K." }
            ].map((t, i) => (
              <div key={i} className="bg-surface p-8 rounded-3xl border border-gray-100 italic shadow-sm hover:shadow-md transition-shadow">
                &quot;{t.quote}&quot;
                <p className="not-italic font-bold mt-4 text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link 
              href="/trt"
              className="text-primary font-bold hover:underline underline-offset-8 decoration-2"
            >
              See our transformation protocols →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(254,148,24,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-serif font-bold mb-8">Ready to reclaim your <span className="text-primary italic">Vitality?</span></h2>
          <p className="text-xl text-gray-400 mb-12 font-light">
            Skip the waiting rooms. Get started with a private medical evaluation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact"
              className="px-10 py-5 bg-primary text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-xl shadow-primary/20"
            >
              Book Discovery Call
            </Link>
            <Link 
              href="https://unashamedlabwork.com"
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all"
            >
              Order Initial Labs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
