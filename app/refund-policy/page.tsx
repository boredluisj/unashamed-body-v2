export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-surface pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto luxury-glass p-8 md:p-12 border border-white/10 rounded-2xl">
        <h1 className="text-4xl font-serif mb-8 italic tracking-tight text-gradient">Refund Policy</h1>
        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Medications & Services</h2>
            <p>Due to the clinical nature of our services and specialized pharmacy regulations, all medications and nutritional supplements are non-refundable once they have been dispensed or shipped.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Clinical Consultations</h2>
            <p>The fee for your New Patient Consultation ($199) or specialized Road Warrior Consultation ($200) covers the cost of medical visit time and laboratory processing. These fees are non-refundable once labs have been drawn or the consultation session has occurred.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Subscriptions</h2>
            <p>Membership subscriptions provide continuous medical access and medications. You may cancel your subscription at any time with 30 days notice to prevent future quarterly billing cycles, though partial refunds for the current cycle are not available.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Contact Us</h2>
            <p>If you have any questions about this Refund Policy, please contact us at:</p>
            <ul className="mt-4 space-y-2">
              <li className="text-primary underline underline-offset-4">info@unashamedbodyandwellness.com</li>
              <li>470-688-1678</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
