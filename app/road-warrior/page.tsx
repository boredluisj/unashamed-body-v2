import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RoadWarriorPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-secondary text-white text-center">
        <h1 className="text-7xl font-serif font-bold mb-8">The <span className="text-primary italic">Road Warrior</span> Program</h1>
        <p className="text-xl text-gray-300 mb-12">Built specifically for the needs of professional drivers.</p>
        <a href="https://app.gohighlevel.com/v2/preview/rZBeAfDYQhX9yt3TajtD" className="bg-primary text-white px-12 py-5 rounded-full font-bold">Get On The Program</a>
      </section>
      <Footer />
    </main>
  );
}
