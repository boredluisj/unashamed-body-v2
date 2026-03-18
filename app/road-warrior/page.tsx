import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function RoadWarriorPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 bg-secondary text-white text-center px-4">
        <h1 className="text-7xl font-serif font-bold mb-8">The <span className="text-primary italic">Road Warrior</span> Program</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">Built specifically for the health and vitality needs of professional drivers and nomads.</p>
        <a href="https://app.gohighlevel.com/v2/preview/rZBeAfDYQhX9yt3TajtD" className="bg-primary text-white px-12 py-5 rounded-full font-bold">Join The Program</a>
      </section>
      <Footer />
    </main>
  );
}
