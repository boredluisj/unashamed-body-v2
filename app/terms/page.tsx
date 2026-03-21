export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto luxury-glass p-8 md:p-12 border border-white/10 rounded-2xl">
        <h1 className="text-4xl font-serif mb-8 italic tracking-tight text-gradient">Terms of Service</h1>
        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Use of Site</h2>
            <p>Welcome to Unashamed Body And Wellness Group. By accessing or using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our site.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Medical Advice Disclaimer</h2>
            <p>The content provided on this website is for informational purposes only and is NOT intended as medical advice, diagnosis, or treatment. Always seek the advice of your provider or other qualified health providers with any questions you may have regarding a medical condition.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Telehealth Services</h2>
            <p>Our services include the provision of health care services via telehealth technology. By using these services, you understand and acknowledge the limitations of virtual medical care and consent to the use of electronic communications for your healthcare management.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Modifications</h2>
            <p>Unashamed Body And Wellness Group reserves the right to modify or replace these Terms of Service at any time. Your continued use of the site after any changes constitutes your acceptance of the new terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
