import { Star } from "lucide-react";
import Link from "next/link";
import { useLuxuryClick } from "@/hooks/useLuxuryClick";

export default function About() {
  const clickSound = useLuxuryClick();

  return (
    <main className="min-h-screen bg-surface">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-serif font-bold text-secondary mb-8">Elevating Men&apos;s <span className="text-primary italic">Vitality.</span></h1>
            <div className="prose prose-lg text-gray-500 font-light space-y-6">
              <p>Unashamed Body isn&apos;t a traditional clinic. We are a concierge medical practice dedicated to bio-optimization, hormone restoration, and metabolic health.</p>
              <p>
                Located in the heart of McDonough, we are more than just a clinic. We are a concierge performance center dedicated to hormone optimization, metabolic health, and peak performance.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                onClick={clickSound}
                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200/50"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Personalized", text: "No cookie-cutter protocols. Every treatment plan is uniquely designed." },
              { title: "Evidence-Based", text: "We rely on the latest peer-reviewed science to deliver results." },
              { title: "Privacy-First", text: "Concierge care means direct access and total discretion." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-secondary mb-4">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
