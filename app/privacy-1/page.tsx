import { PageHeader } from "@/components/PageHeader";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <PageHeader title="Privacy Policy" description="How we protect and manage your personal and medical information." />
      
      <article className="py-24 px-4 max-w-4xl mx-auto prose prose-invert font-light leading-relaxed">
        <div className="space-y-16">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-6">1. Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-black uppercase mb-2">Personal</h3>
                <p className="text-gray-400 text-sm italic">Name, DOB, address, phone, email.</p>
              </div>
              <div>
                <h3 className="text-sm font-black uppercase mb-2">Health (PHI)</h3>
                <p className="text-gray-400 text-sm italic">Medical history, lab results, treatments.</p>
              </div>
              <div>
                <h3 className="text-sm font-black uppercase mb-2">Payment</h3>
                <p className="text-gray-400 text-sm italic">Billing info secured by 3rd party processors.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-6">2. Use of Information</h2>
            <ul className="list-none space-y-4 text-gray-400 italic">
              <li>• Providing medical consultations and concierge treatment</li>
              <li>• Processing payments and scheduling</li>
              <li>• HIPAA compliance and legal obligations</li>
              <li>• Clinical communication regarding your care</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-primary mb-6">3. SMS & Communication</h2>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              By providing your number, you consent to receive SMS/voice messages regarding appointments, labs, and health services.
            </p>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-xs uppercase tracking-widest text-gray-500">
              Reply STOP to opt-out • Message/Data rates apply • We never share numbers for marketing.
            </div>
          </section>

          <section className="pt-12 border-t border-white/5">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-4">Contact Privacy Officer</h2>
            <p className="text-gray-400 text-sm">
              info@unashamedbodyandwellness.com<br />
              470-688-1678
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
