import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function WeightLossPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-surface text-center">
        <h1 className="text-6xl font-serif font-bold text-secondary mb-6">Sustainable <span className="text-primary italic">Transformation</span></h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Using GLP-1 medications like Semaglutide under professional supervision.</p>
        <a href="https://app.gohighlevel.com/v2/preview/7sPEF9hASlDFio4Z3E6U" className="bg-primary text-white px-8 py-4 rounded-full font-bold">Start Weight Loss</a>
      </section>
      <Footer />
    </main>
  );
}
