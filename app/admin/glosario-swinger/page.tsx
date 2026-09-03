import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Glosario Swinger — Términos del Lifestyle | SwingerSV",
  description:
    "Guía completa con todos los términos del ambiente swinger: HotWife, Cuckold, Unicornio, Lifestyle, Bacanal, SDC y más. Aprende el vocabulario del lifestyle en El Salvador con SwingerSV.",
  alternates: {
    canonical: "https://www.swingersv.com/glosario-swinger",
  },
  openGraph: {
    title: "Glosario Swinger — Términos del Lifestyle | SwingerSV",
    description:
      "Todos los términos del ambiente swinger explicados en español. HotWife, Cuckold, Unicornio, Lifestyle, Bacanal y más.",
    url: "https://www.swingersv.com/glosario-swinger",
    images: [{ url: "https://www.swingersv.com/images/logo.png" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Glosario Swinger — Términos del Lifestyle",
  description: "Guía completa con todos los términos del ambiente swinger y lifestyle.",
  author: { "@type": "Organization", name: "SwingerSV" },
  publisher: { "@type": "Organization", name: "SwingerSV", url: "https://www.swingersv.com" },
  url: "https://www.swingersv.com/glosario-swinger",
  inLanguage: "es",
}

const terminos = [
  {
    term: "Swinger",
    definition:
      "Persona o pareja que practica el intercambio sexual consensuado con otras parejas o individuos. El swinging es una práctica libre, abierta y basada en el consentimiento mutuo de todos los involucrados.",
  },
  {
    term: "Lifestyle",
    definition:
      "Término en inglés que se usa para referirse al estilo de vida swinger en general. Decir que alguien 'está en el lifestyle' significa que practica o participa en el ambiente swinger de forma activa.",
  },
  {
    term: "HotWife",
    definition:
      "Práctica donde una esposa o pareja tiene encuentros sexuales con otras personas mientras su pareja lo sabe, lo acepta y en muchos casos lo disfruta. A diferencia del cuckold, el HotWife no implica necesariamente humillación.",
  },
  {
    term: "Cuckold / Cornudo",
    definition:
      "Hombre que disfruta de ver o saber que su pareja tiene relaciones sexuales con otras personas. En el ambiente swinger esto es totalmente consensuado. Existe también el término 'Cuckqueen' para el caso inverso.",
  },
  {
    term: "Unicornio",
    definition:
      "Mujer soltera que participa en encuentros con parejas. Se les llama unicornios porque son escasas y muy bienvenidas en el ambiente swinger. En SwingerSV las unicornios tienen acceso libre a todos los eventos.",
  },
  {
    term: "Single",
    definition:
      "Hombre soltero que participa en el ambiente swinger. Para asistir a eventos de SwingerSV, un single debe ser invitado por una pareja activa o tener la recomendación de 3 parejas validadas.",
  },
  {
    term: "Bacanal",
    definition:
      "Fiesta o evento swinger de gran escala donde participan múltiples parejas simultáneamente. El término viene de las antiguas fiestas en honor a Baco, dios del vino.",
  },
  {
    term: "Soft Swap",
    definition:
      "Modalidad de intercambio donde las parejas se involucran sexualmente pero sin llegar a la penetración completa con la otra pareja. Ideal para parejas que están iniciando en el ambiente.",
  },
  {
    term: "Full Swap",
    definition:
      "Intercambio completo donde las parejas tienen relaciones sexuales completas con los miembros de la otra pareja. Es la modalidad más avanzada del swinging.",
  },
  {
    term: "Meet & Greet",
    definition:
      "Reunión informal donde parejas nuevas conocen a la comunidad swinger sin presión ni actividad sexual. Es el primer paso para muchas parejas que quieren explorar el ambiente.",
  },
  {
    term: "Validación",
    definition:
      "Proceso por el cual una pareja, single o unicornio es verificado y aceptado en la comunidad swinger. En SwingerSV todas las personas pasan por validación para garantizar un ambiente seguro.",
  },
  {
    term: "SDC",
    definition:
      "Swingers Date Club. Una de las plataformas internacionales más grandes para la comunidad swinger y lifestyle a nivel mundial. Muchas parejas de El Salvador también están en SDC.",
  },
  {
    term: "GangBang",
    definition:
      "Encuentro sexual donde una persona tiene relaciones con múltiples personas simultáneamente. Siempre consensuado entre todos los participantes.",
  },
  {
    term: "Orgía",
    definition:
      "Encuentro sexual grupal donde múltiples personas participan simultáneamente. En el ambiente swinger esto ocurre en un entorno seguro, consensuado y con reglas claras.",
  },
  {
    term: "Tríos",
    definition:
      "Encuentro sexual entre tres personas. Puede ser MHM (mujer, hombre, mujer) o MHH (mujer, hombre, hombre). Una de las fantasías más comunes entre parejas que se inician en el lifestyle.",
  },
  {
    term: "Voyeur / Voyeurista",
    definition:
      "Persona que disfruta observar a otras personas en situaciones sexuales. En el ambiente swinger hay espacios designados para voyeurs donde pueden observar sin participar.",
  },
  {
    term: "Exhibicionismo",
    definition:
      "Práctica de excitarse siendo observado en situaciones íntimas. En el ambiente swinger el exhibicionismo es muy común y aceptado dentro de los espacios habilitados para ello.",
  },
  {
    term: "Bisexual / Bi",
    definition:
      "Persona que siente atracción sexual hacia personas de más de un género. En el ambiente swinger la bisexualidad es muy común y aceptada tanto en hombres como en mujeres.",
  },
  {
    term: "Pareja Abierta",
    definition:
      "Relación donde ambos miembros tienen acuerdo de poder tener encuentros íntimos con otras personas. No todas las parejas abiertas son swingers, pero muchas se acercan al lifestyle.",
  },
  {
    term: "ITS / ETS",
    definition:
      "Infecciones de Transmisión Sexual / Enfermedades de Transmisión Sexual. En SwingerSV promovemos activamente la prevención y el cuidado de la salud sexual. Solicitamos exámenes recientes como parte del proceso de validación.",
  },
  {
    term: "No Touch / No Play",
    definition:
      "Regla que una pareja establece para indicar que no desean contacto físico con otras personas. Se respeta siempre y sin cuestionamientos en el ambiente swinger.",
  },
  {
    term: "Zone Play",
    definition:
      "Área habilitada específicamente para encuentros sexuales dentro de una fiesta swinger. Fuera de estas zonas, el comportamiento es social y festivo como en cualquier fiesta.",
  },
]

export default function GlosarioSwingerPage() {
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
              SwingerSV — Educación Sexual
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-[var(--font-playfair)] text-balance">
              Glosario Swinger — Términos del Lifestyle
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Guía completa con todos los términos del ambiente swinger explicados en
              español. Desde lo más básico hasta lo más específico del lifestyle.
            </p>
          </div>
        </section>

        {/* Glosario */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-4xl">
            <p className="text-muted-foreground leading-relaxed mb-10">
              Entender el vocabulario del ambiente swinger es el primer paso para
              navegar con confianza en el lifestyle. Aquí encontrarás todos los
              términos que necesitas conocer, explicados de forma clara y sin tabúes.
            </p>

            <div className="flex flex-col gap-4 mb-12">
              {terminos.map((item) => (
                <div
                  key={item.term}
                  id={item.term.toLowerCase().replace(/\s+/g, "-")}
                  className="rounded-xl border border-border/60 bg-card p-6 scroll-mt-24"
                >
                  <h2 className="text-lg font-bold text-primary mb-2 font-[var(--font-playfair)]">
                    {item.term}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground font-[var(--font-playfair)]">
                ¿Listos para vivir el lifestyle?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Ahora que conocen el vocabulario, el siguiente paso es unirse a la
                comunidad swinger más exclusiva de El Salvador.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90"
                >
                  Iniciar Prevalidación
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/fiestas-swinger-san-salvador"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Ver próximas fiestas
                </Link>
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
