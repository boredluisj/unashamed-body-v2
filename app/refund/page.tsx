import { PageHeader } from "@/components/PageHeader";

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader title="Refund Policy" description="Clear terms regarding lab orders and medical services." />
      
      <article className="py-24 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="luxury-card p-10 bg-white/5">
            <h2 className="text-primary font-black uppercase tracking-widest text-sm mb-6">Lab Orders</h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 italic">
              "All lab test purchases are final once submitted. No refunds issued once a requisition form is generated."
            </p>
            <ul className="text-xs text-gray-500 space-y-2 uppercase tracking-tighter">
              <li>• $25 Processing fee for early cancellations</li>
              <li>• 3–6 Month validity window</li>
              <li>• Use it or lose it policy</li>
            </ul>
          </div>

          <div className="luxury-card p-10 border-white/10">
            <h2 className="text-white font-black uppercase tracking-widest text-sm mb-6">Missed Appointments</h2>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-6 italic">
              "Failure to complete your lab draw within the window results in expiration. Retests only granted for technical lab errors."
            </p>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              Does not apply to client-related issues (fasting failure, lateness).
            </p>
          </div>
        </div>

        <div className="mt-16 p-12 text-center border-t border-white/5">
           <h3 className="text-lg font-serif font-black italic mb-4">Questions?</h3>
           <p className="text-gray-400 text-sm uppercase tracking-widest">info@unashamedbodyandwellness.com</p>
        </div>
      </article>
    </main>
  );
}
