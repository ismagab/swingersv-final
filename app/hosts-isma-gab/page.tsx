import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, Heart, ShieldCheck, Mic } from "lucide-react"

export const metadata: Metadata = {
  title: "Isma & Gab — Hosts de SwingerSV | Pareja Swinger en El Salvador",
  description:
    "Conoce a Isma y Gab, la pareja detrás de SwingerSV. Organizadores de fiestas swinger, creadores del podcast SEXPERIENCIA y promotores de salud sexual en El Salvador.",
  alternates: {
    canonical: "https://www.swingersv.com/hosts-isma-gab",
  },
  openGraph: {
    title: "Isma & Gab — Hosts de SwingerSV",
    description:
      "La pareja detrás de la comunidad swinger más exclusiva de El Salvador. Organizadores, podcasters y promotores de salud sexual.",
    url: "https://www.swingersv.com/hosts-isma-gab",
    images: [{ url: "https://www.swingersv.com/isma-gab.jpg" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isma & Gab",
  description:
    "Pareja swinger bisexual de El Salvador. Organizadores de SwingerSV, creadores del podcast SEXPERIENCIA y promotores de salud sexual e ITS/VIH.",
  url: "https://www.swingersv.com/hosts-isma-gab",
  sameAs: [
    "https://www.atom.bio/ismagab",
    "https://x.com/swinger_sv",
  ],
  worksFor: {
    "@type": "Organization",
    name: "SwingerSV",
    url: "https://www.swingersv.com",
  },
}

export default function HostsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-16 px-6">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
              SwingerSV — Los Hosts
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-[var(--font-playfair)] text-balance">
              Conoce a Isma & Gab
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              La pareja detrás de SwingerSV. Organizadores de las fiestas más exclusivas
              de El Salvador, creadores del podcast SEXPERIENCIA y promotores de salud
              sexual en la comunidad.
            </p>
          </div>
        </section>

        {/* Foto y presentación */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-4xl">

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border/60">
                <Image
                  src="/isma-gab.jpg"
                  alt="Isma y Gab — Hosts de SwingerSV, pareja swinger en El Salvador"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
                  ¿Quiénes son Isma & Gab?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Isma y Gab son una pareja salvadoreña ambos bisexuales, apasionados por
                  crear espacios seguros para la comunidad swinger y lifestyle en El Salvador.
                  Son los fundadores y organizadores de SwingerSV, la comunidad swinger más
                  exclusiva y discreta del país.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Llevan años construyendo una comunidad basada en el respeto, la confianza
                  y la libertad sexual consensuada. Su misión es que cada pareja salvadoreña
                  pueda explorar su sexualidad en un entorno real, seguro y sin prejuicios.
                </p>
                <a
                  href="https://www.atom.bio/ismagab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
                >
                  Ver todas sus redes
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Lo que hacen */}
            <h2 className="text-2xl font-bold text-foreground mb-6 font-[var(--font-playfair)]">
              Más allá de las fiestas
            </h2>
            <div className="grid gap-6 sm:grid-cols-3 mb-12">
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <Heart className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Organizadores de SwingerSV</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Desde fiestas disco hasta pool parties en la playa, Isma y Gab organizan
                  cada evento con atención al detalle, discreción total y ambiente cuidado.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <Mic className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Podcast SEXPERIENCIA</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Creadores del podcast SEXPERIENCIA, donde hablan sobre lifestyle, sexualidad,
                  consejos para parejas y guías sobre el ambiente swinger en El Salvador.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-6">
                <ShieldCheck className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Promotores de Salud Sexual</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Activos promotores de prevención de ITS/VIH en El Salvador. Han participado
                  en reuniones con el Ministerio de Salud y ONGs para proteger a la comunidad.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              Su filosofía
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Para Isma y Gab, el lifestyle no es solo fiestas — es una forma de vida basada
              en la comunicación, la honestidad y el respeto mutuo entre parejas. Creen que
              la sexualidad libre y consensuada fortalece las relaciones en lugar de
              destruirlas, siempre que exista una base sólida de confianza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Su comunidad SwingerSV nació de la frustración con los perfiles falsos y los
              espacios poco seguros. Quisieron crear algo diferente: un lugar donde las
              parejas salvadoreñas se conocieran cara a cara, con validación real y
              discreción garantizada.
            </p>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground font-[var(--font-playfair)]">
                ¿Quieren conocer a Isma & Gab?
              </h2>
              <p className="mb-6 text-muted-foreground">
                La mejor forma de conocerlos es en una de sus fiestas. Inicien el proceso
                de prevalidación y sean parte de la comunidad.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
                >
                  Iniciar Prevalidación
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/50369207547?text=Hola%20Isma%20y%20Gab%2C%20nos%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20SwingerSV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <SiteFooter />
        <WhatsAppButton />
      </main>
    </>
  )
}
