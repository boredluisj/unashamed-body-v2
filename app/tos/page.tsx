import { PageHeader } from "@/components/PageHeader";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader title="Terms of Service" description="Governing the use of our website and telehealth platform." />
      
      <article className="py-24 px-4 max-w-4xl mx-auto space-y-16">
        {[
          { title: "Eligibility", content: "You must be 18 years or older. By accessing our site or booking, you agree to abide by these terms." },
          { title: "Medical Disclaimer", content: "Content is informational only and does not replace professional evaluation. Treatment eligibility is determined by licensed clinicians." },
          { title: "Payment & Booking", content: "All services must be prepaid. Lab requisitions must be completed prior to your consultation." },
          { title: "Cancellations", content: "24-hour notice is required for rescheduling. Missed appointments may incur fees or forfeiture." }
        ].map((item, i) => (
          <section key={i} className="group">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-6 transition-colors group-hover:text-white">{i + 1}. {item.title}</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed italic border-l border-white/10 pl-8 group-hover:border-primary/50 transition-all">"{item.content}"</p>
          </section>
        ))}

        <section className="p-12 bg-white/[0.02] border border-white/5 rounded-[2rem]">
           <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-white">Full Agreement</h3>
           <p className="text-gray-500 text-sm font-light leading-relaxed">
             By using Unashamed Body & Wellness Group services, you acknowledge that you have read and understood these terms. We reserve the right to modify these terms at any time.
           </p>
        </section>
      </article>
    </main>
  );
}
