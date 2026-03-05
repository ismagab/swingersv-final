import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { GallerySection } from "@/components/gallery-section"
import { RulesSection } from "@/components/rules-section"
import { PrivacySection } from "@/components/privacy-section"
import { KingsSection } from "@/components/kings-section"
import { HostSection } from "@/components/host-section"
import { SinglesSection } from "@/components/singles-section"
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
    "Comunidad swinger en El Salvador de parejas para parejas. Fiestas swinger, trios, HotWife, cuckold, cornudos, unicornios, GangBang, orgias y lifestyle en San Salvador y La Libertad. SDC El Salvador.",
  sameAs: ["https://x.com/swinger_sv"],
  areaServed: {
    "@type": "Country",
    name: "El Salvador",
  },
  keywords:
    "SwingerSV, swinger El Salvador, comunidad swinger en El Salvador, fiestas swinger El Salvador, trios El Salvador, HotWife El Salvador, cuckold, cornudos, unicornios El Salvador, GangBang El Salvador, orgias El Salvador, lifestyle El Salvador, SDC El Salvador",
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
        {/* <GallerySection /> */}
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
