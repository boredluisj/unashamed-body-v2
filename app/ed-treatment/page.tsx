import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function EDPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-white text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-secondary mb-6">Peak <span className="text-primary italic">Sexual</span> Wellness</h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">Discreet, medically supervised ED protocols to restore confidence and performance.</p>
        <a href="https://app.gohighlevel.com/v2/preview/itrpsCuLeBfeQWoOjue6" className="bg-secondary text-white px-10 py-4 rounded-full font-bold">Schedule Private Consultation</a>
      </section>
      <Footer />
    </main>
  );
}
