import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function LongevityPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-surface text-center px-4">
        <h1 className="text-7xl font-serif font-bold text-secondary mb-8">Longevity & <span className="text-primary italic">Vitality</span></h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">A proactive choice to age with strength, clarity, and cellular resilience.</p>
        <a href="https://api.leadconnectorhq.com/widget/booking/CYwBztutyvQCWJTfuZSr" className="bg-primary text-white px-12 py-5 rounded-full font-bold">Design Your Protocol</a>
      </section>
      <Footer />
    </main>
  );
}
