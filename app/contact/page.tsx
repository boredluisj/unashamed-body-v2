import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-surface px-4">
        <h1 className="text-5xl font-serif font-bold text-secondary mb-8">Contact Our <span className="text-primary italic">Clinic</span></h1>
        <iframe src="https://app.gohighlevel.com/v2/preview/EvMNgI8K2JHws7sLjQqs" className="w-full h-[600px] border-0 rounded-2xl" />
      </section>
      <Footer />
    </main>
  );
}
