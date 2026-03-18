import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-serif font-bold text-secondary mb-8">Elevating Men's <span className="text-primary italic">Vitality.</span></h1>
          <div className="prose prose-lg text-gray-500 font-light space-y-6">
            <p>Unashamed Body isn't a traditional clinic. We are a concierge medical practice dedicated to bio-optimization, hormone restoration, and metabolic health.</p>
            <p>Based in McDonough, GA, we serve men who refuse to let age dictate their output. Our protocols are board-certified, evidence-based, and focused on clinical precision.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
