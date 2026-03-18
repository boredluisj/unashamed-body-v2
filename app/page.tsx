import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <ServiceGrid />
      <section className="py-24 bg-white border-t border-gray-50 text-center">
        <h2 className="text-4xl font-serif font-bold text-secondary mb-12">Patient <span className="text-primary italic">Transformations</span></h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { quote: "Finally found a clinic that takes men's health seriously. energy levels are back.", author: "Mark R." },
            { quote: "The Road Warrior program changed my life. Easy to stay healthy on the road.", author: "David L." },
            { quote: "Expert medical supervision for weight loss. Lost 30lbs.", author: "James K." }
          ].map((t, i) => (
            <div key={i} className="bg-surface p-8 rounded-3xl border border-gray-100 italic">
              "{t.quote}" <p className="not-italic font-bold mt-4 text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <CookieBanner />
    </main>
  );
}
