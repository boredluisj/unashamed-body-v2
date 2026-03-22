import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Unashamed Body | Elite Men's Concierge Health Clinic",
  description: "Concierge men's health clinic in McDonough, GA. Personalized TRT, ED treatment, medical weight loss, and peptide therapy. No waiting rooms. Board-certified medical director.",
  icons: {
    icon: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_120/u_https://assets.cdn.filesafe.space/VSqlfyiMHv6EpHAvboBv/media/6819f228b614b1667e34666b.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Unashamed Body",
  "alternateName": "Unashamed Body Men's Health Clinic",
  "url": "https://unashamedbody.com",
  "telephone": "+14706881678",
  "email": "info@unashamedbody.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "920 Pavilion Court Suite 804B",
    "addressLocality": "McDonough",
    "addressRegion": "GA",
    "postalCode": "30252",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {"@type": "OpeningHoursSpecification","dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens": "09:00","closes": "20:00"}
  ],
  "medicalSpecialty": ["MensHealth","Endocrinology"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Men's Health Services",
    "itemListElement": [
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Testosterone Replacement Therapy"}},
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Erectile Dysfunction Treatment"}},
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Medical Weight Loss"}},
      {"@type": "Offer","itemOffered": {"@type": "MedicalTherapy","name": "Peptide Therapy"}}
    ]
  },
  "description": "Concierge men's health clinic in McDonough, GA. Personalized TRT, ED treatment, medical weight loss, and peptide therapy. No waiting rooms. Board-certified medical director.",
  "founder": {"@type": "Person","name": "Monique Mitchell","jobTitle": "Nurse Practitioner, Founder & CEO"},
  "employee": {"@type": "Person","name": "Dr. Bobby Gearing","jobTitle": "Medical Director, MD"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <link rel="preconnect" href="https://images.leadconnectorhq.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://api.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://assets.cdn.filesafe.space" />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-[#DC2626]/30 bg-[#0A0A0F] text-[#F0EFFF]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:font-medium focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
