"use client"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { RulesSection } from "@/components/rules-section"
import { PrivacySection } from "@/components/privacy-section"
import { KingsSection } from "@/components/kings-section"
import { HostSection } from "@/components/host-section"
import { SinglesSection } from "@/components/singles-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SwingerSV",
  url: "https://swingersv.com",
  logo: "https://swingersv.com/images/logo.png",
  description:
    "Comunidad swinger en El Salvador de parejas para parejas. Fiestas swinger, tríos, HotWife, unicornios y lifestyle en San Salvador y La Libertad.",
  sameAs: ["https://x.com/swinger_sv"],
  areaServed: {
    "@type": "Country",
    name: "El Salvador",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <RulesSection />
        <PrivacySection />
        <KingsSection />
        <HostSection />
        <SinglesSection />
        <FaqSection />
        <ContactSection />
        <SiteFooter />
        <WhatsAppButton />
      </main>
    </>
  )
}