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
import { SitePopups } from "@/components/site-popups"
import { getUpcomingEvents } from "@/data/events"
import { getKings } from "@/data/kings"

// Revalida cada 60 segundos: los cambios hechos desde /admin (eventos y
// reyes) se reflejan en el sitio en poco tiempo, sin necesidad de un
// nuevo despliegue.
export const revalidate = 60

export default async function HomePage() {
  const [events, kings] = await Promise.all([getUpcomingEvents(), getKings()])

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection events={events} />
      <RulesSection />
      <PrivacySection />
      <KingsSection kings={kings} />
      <HostSection />
      <SinglesSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
      <WhatsAppButton />
      <SitePopups events={events} />
    </main>
  )
}
