import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TRTPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-serif font-bold text-secondary mb-6">Testosterone <span className="text-primary italic">Replacement</span> Therapy</h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Restore your energy and mental clarity with supervised TRT protocols tailored to your physiology.</p>
          <a href="https://app.gohighlevel.com/v2/preview/qpFvStkXcBZ7Z6n2dKDg" className="bg-primary text-white px-8 py-4 rounded-full font-bold">Book TRT Evaluation</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
