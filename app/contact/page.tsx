import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-surface px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-serif font-bold text-secondary mb-4">Contact Our <span className="text-primary italic">Clinic</span></h1>
          <p className="text-gray-500">Practice details, hours, and direct messaging below.</p>
        </div>
        <iframe 
          src="https://app.gohighlevel.com/v2/preview/EvMNgI8K2JHws7sLjQqs" 
          className="w-full h-[700px] border-0 rounded-3xl shadow-2xl bg-white" 
          title="Contact Form"
        />
      </section>
      <Footer />
    </main>
  );
}
