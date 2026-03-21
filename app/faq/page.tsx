import { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Unashamed Body Men\'s Health Clinic',
  description: 'Answers to the most common questions about TRT, ED treatment, medical weight loss, and concierge men\'s health care at Unashamed Body in McDonough, GA.',
};

const faqs = [
  {
    question: 'What happens during my first appointment?',
    answer: 'Your first appointment is a comprehensive new patient consultation ($199). We review your health history, perform an in-depth discussion of your symptoms and goals, and order over 40 biomarkers through a full lab panel at LabCorp. Within 2 business days you receive your results and a custom treatment plan designed around your specific biology.',
  },
  {
    question: 'How does Testosterone Replacement Therapy (TRT) work?',
    answer: 'TRT replaces or supplements your body\'s natural testosterone production to restore levels to an optimal range. After reviewing your bloodwork, Dr. Gearing prescribes a personalized protocol — typically weekly self-administered injections. Medication, syringes, and all supplies are shipped directly to your door. We monitor your levels regularly and adjust dosing as needed.',
  },
  {
    question: 'Is my treatment completely private?',
    answer: 'Absolutely. All consultations are HIPAA-compliant and confidential. Telehealth sessions happen on a secure, encrypted platform. Medications arrive in discreet, unmarked packaging. Our concierge model means you\'re never sitting in a waiting room around other patients.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'We are a cash-pay practice, which is intentional. Insurance restrictions often prevent providers from ordering the comprehensive labs and prescribing the optimal protocols that patients actually need. Many clients use HSA or FSA cards to pay for their care.',
  },
  {
    question: 'Is lab work included in the pricing?',
    answer: 'Yes. Your new patient consultation ($199) includes a full LabCorp panel covering testosterone (free and total), thyroid, adrenal, liver, kidney, metabolic, and cardiovascular markers. Follow-up labs are included in your ongoing monthly plan.',
  },
  {
    question: 'How long before I see results from TRT?',
    answer: 'Most patients notice improvements in energy, mental clarity, and mood within 2–4 weeks. Libido and sexual function typically improve by weeks 4–6. Muscle composition and body fat changes become visible over 3–6 months. Results vary based on your starting levels and protocol adherence.',
  },
  {
    question: 'Can I do everything online via telehealth?',
    answer: 'Yes. The entire patient journey — consultation, lab review, prescription management, and follow-ups — can be handled remotely via our secure telehealth platform. You visit a local LabCorp for your blood draw, then everything else is handled virtually. Medications ship directly to your home.',
  },
  {
    question: 'What is the Road Warrior program?',
    answer: 'The Road Warrior program ($175/month, billed quarterly) is designed specifically for truck drivers and professionals who travel frequently. Consultations happen via telehealth while you\'re on the road, and medications can be shipped to truck stops or any address you specify. You get the same concierge-level care regardless of where you are.',
  },
  {
    question: 'Do you treat erectile dysfunction (ED)?',
    answer: 'Yes. We offer multiple non-invasive ED treatment pathways tailored to the underlying cause — whether vascular, hormonal, or psychological. Options may include oral medications, peptide therapy (PT-141), or addressing root cause hormonal imbalances. All consultations are judgment-free and completely private.',
  },
  {
    question: 'Is medical weight loss available for women too?',
    answer: 'Yes. Our Medical Weight Loss program ($275/month) is available to both men and women. It includes a full initial consultation and lab work at no extra cost, a personalized dosing protocol, weekly injection support (Semaglutide/GLP-1), and ongoing clinician check-ins. A Weight Loss Plus tier ($425/month) with additional support is also available.',
  },
  {
    question: 'What is peptide therapy?',
    answer: 'Peptides are short chains of amino acids that signal specific biological processes. The peptides we use — including Sermorelin (growth hormone stimulator), Pentadeca Arginate (healing and recovery), and PT-141 (libido and energy) — are used to support muscle growth, fat loss, sleep quality, and recovery. They\'re often combined with TRT for enhanced results.',
  },
  {
    question: 'Do I need to come in person or can everything be done remotely?',
    answer: 'Both options are available. You can visit our clinic at 920 Pavilion Court Suite 804B, McDonough, GA 30252 for in-person consultations, or you can manage your entire care plan remotely via telehealth. The only in-person requirement is your LabCorp blood draw, which can be done at any LabCorp location nationwide.',
  },
  {
    question: 'What is Unashamed Mind?',
    answer: 'Unashamed Mind ($150/month as an add-on, $200 standalone) is a mental health support service integrated with your physical health optimization. It includes consultations with a psychiatric NP, confidential medication management, and mental health coaching — all via our HIPAA-compliant platform. Mental and hormonal health are deeply connected, and we treat both.',
  },
  {
    question: 'How is Unashamed Body different from other men\'s health clinics?',
    answer: 'Most "T-mills" use one-size-fits-all dosing, have rushed appointments, hidden fees, and no consistent provider. At Unashamed Body, you receive 1-on-1 care directly from Monique Mitchell, NP and Dr. Bobby Gearing, MD every single time. Your protocol is built from comprehensive labs. There are no waiting rooms, no hidden fees, and no templates.',
  },
  {
    question: 'How do I get started?',
    answer: 'Book a new patient consultation online or call us at 470-688-1678. You can also email info@unashamedbody.com. Your first appointment includes comprehensive labs and a personalized care plan. No referral needed.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHeader
        title="FAQ"
        description="Everything you need to know about concierge men's health care at Unashamed Body."
      />

      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:border-[#DC2626]/30 transition-colors duration-300"
            >
              <summary className="flex items-center justify-between gap-4 p-6 md:p-8 cursor-pointer list-none">
                <h2 className="text-base md:text-lg font-semibold text-[#F0EFFF] leading-snug">
                  {faq.question}
                </h2>
                <span className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-[#DC2626] group-open:rotate-45 transition-transform duration-300 text-lg font-light">
                  +
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <p className="text-[#9CA3AF] font-light leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center border border-[#DC2626]/20 rounded-3xl p-10 md:p-14 bg-[#DC2626]/5">
          <h2 className="text-2xl md:text-3xl font-serif font-black text-[#F0EFFF] mb-4">
            Still have questions?
          </h2>
          <p className="text-[#9CA3AF] font-light mb-8 max-w-lg mx-auto">
            Call us at{' '}
            <a href="tel:+14706881678" className="text-[#DC2626] font-medium">
              470-688-1678
            </a>{' '}
            or email{' '}
            <a href="mailto:info@unashamedbody.com" className="text-[#DC2626] font-medium">
              info@unashamedbody.com
            </a>
            . We respond within one business day.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#DC2626] hover:bg-[#B91C1C] text-white px-10 py-4 rounded-full font-semibold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#DC2626]/20"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
