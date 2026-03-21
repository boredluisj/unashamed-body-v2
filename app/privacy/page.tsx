export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-surface pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto luxury-glass p-8 md:p-12 border border-white/10 rounded-2xl">
        <h1 className="text-4xl font-serif mb-8 italic tracking-tight text-gradient">Privacy Policy</h1>
        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Introduction</h2>
            <p>At Unashamed Body And Wellness Group, your privacy is our priority. This Privacy Policy explains how we collect, use, and share information from our clients and website visitors.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Information We Collect</h2>
            <p>We collect information you provide directly to us, including your name, email address, phone number, and medical history needed for consultations. This information is treated with the highest level of confidentiality and is HIPAA-compliant.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">SMS & Communications</h2>
            <p>We do not share your mobile information with third parties for marketing purposes. All text messaging is strictly for service updates, appointment reminders, and clinical communications you have consented to.</p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-white mb-4 italic">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
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
