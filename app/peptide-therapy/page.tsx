import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PeptidePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-secondary text-white text-center px-4">
        <h1 className="text-6xl font-serif font-bold mb-6">Peptide <span className="text-primary italic">Therapy</span></h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Advanced cellular healing and recovery protocols for performance and longevity.</p>
        <a href="https://app.gohighlevel.com/v2/preview/QJd9Fb7LQrsn4eyiqRNS" className="bg-primary text-white px-8 py-4 rounded-full font-bold">Consult a Peptide Expert</a>
      </section>
      <Footer />
    </main>
  );
}
