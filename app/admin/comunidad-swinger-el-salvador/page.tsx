import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Heart, ShieldCheck, Users, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Comunidad Swinger en El Salvador | SwingerSV",
  description:
    "Conoce la comunidad swinger más grande y discreta de El Salvador. Parejas reales, ambiente seguro, eventos exclusivos en San Salvador. SwingerSV — de parejas para parejas.",
  alternates: {
    canonical: "https://www.swingersv.com/comunidad-swinger-el-salvador",
  },
  openGraph: {
    title: "Comunidad Swinger en El Salvador | SwingerSV",
    description:
      "La comunidad swinger más exclusiva de El Salvador. Parejas reales, validación discreta y eventos privados en San Salvador y La Libertad.",
    url: "https://www.swingersv.com/comunidad-swinger-el-salvador",
    images: [{ url: "https://www.swingersv.com/images/logo.png" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comunidad Swinger en El Salvador — SwingerSV",
  description:
    "Todo sobre la comunidad swinger en El Salvador. Cómo funciona, cómo unirse y qué esperar en los eventos de SwingerSV.",
  author: { "@type": "Organization", name: "SwingerSV" },
  publisher: { "@type": "Organization", name: "SwingerSV", url: "https://www.swingersv.com" },
  url: "https://www.swingersv.com/comunidad-swinger-el-salvador",
  inLanguage: "es",
}

export default function ComunidadSwingerPage() {
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
              SwingerSV — De Parejas Para Parejas
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-[var(--font-playfair)] text-balance">
              Comunidad Swinger en El Salvador
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              SwingerSV es la comunidad swinger más exclusiva y discreta de El Salvador.
              Nacimos de la necesidad de crear un espacio genuino para parejas de mente
              abierta, lejos de los perfiles falsos y sin el anonimato vacío de las apps.
            </p>
          </div>
        </section>

        {/* Contenido */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-4xl">

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              ¿Qué es SwingerSV?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              SwingerSV nació en El Salvador como respuesta a la falta de espacios seguros
              y reales para parejas liberales. No somos un club con local fijo — somos una
              comunidad organizada que realiza fiestas privadas en diferentes puntos de
              San Salvador y eventos especiales en la playa. Llevamos años construyendo
              una red de parejas reales que se conocen cara a cara, con validación previa
              y discreción garantizada.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              ¿Cómo es la comunidad swinger en El Salvador?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El ambiente swinger en El Salvador ha crecido significativamente en los
              últimos años. Cada vez más parejas salvadoreñas y extranjeros que visitan
              el país se interesan en explorar su sexualidad de forma libre y consensuada.
              SwingerSV es el punto de encuentro más consolidado de esta comunidad, con
              parejas de todas las edades, estilos y backgrounds.
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {[
                { icon: Users, title: "Parejas reales", desc: "Todos los miembros pasan por validación. Cero perfiles falsos ni fotos robadas." },
                { icon: ShieldCheck, title: "100% discreta", desc: "No almacenamos datos personales. La ubicación se comparte 1 día antes del evento." },
                { icon: Heart, title: "Comunidad genuina", desc: "Ambiente de respeto, amistad y libertad. Cada pareja va a su propio ritmo." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 bg-card p-5">
                  <item.icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              ¿Quiénes pueden unirse a la comunidad swinger en El Salvador?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SwingerSV es principalmente una comunidad de parejas para parejas. Sin embargo
              también hay espacio para singles y unicornios bajo condiciones específicas:
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { tipo: "Parejas", desc: "El núcleo de la comunidad. Parejas de cualquier orientación, edad y estilo. Solo necesitan completar el proceso de validación." },
                { tipo: "Unicornios (Mujeres Solteras)", desc: "Las mujeres solteras tienen acceso libre a todos los eventos. Solo requieren una validación simple." },
                { tipo: "Singles (Hombres Solteros)", desc: "Pueden asistir si son invitados por una pareja activa o si tienen la recomendación de 3 parejas validadas." },
              ].map((item) => (
                <div key={item.tipo} className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="font-semibold text-primary text-sm mb-2">{item.tipo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              Salud sexual en la comunidad swinger
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En SwingerSV la salud sexual es una prioridad. Promovemos activamente la
              prevención de ITS y VIH entre todos los miembros de la comunidad.
              Solicitamos que las parejas cuenten con exámenes de ETS recientes como
              parte del proceso de validación, y fomentamos una cultura de cuidado
              y responsabilidad sexual entre todos los asistentes.
            </p>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-8">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Compromiso con la salud: </span>
                Trabajamos en coordinación con iniciativas de salud pública en El Salvador
                para promover la prevención de ITS/VIH. El bienestar de nuestra comunidad
                va más allá de las fiestas — es un estilo de vida responsable.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              Preguntas frecuentes sobre la comunidad swinger en El Salvador
            </h2>

            <div className="flex flex-col gap-4 mb-10">
              {[
                {
                  q: "¿Es necesario participar con quien nos busque en la fiesta?",
                  a: "No. En SwingerSV lo principal es el respeto. La regla de oro es NO es NO. Nunca hay presiones para participar con nadie.",
                },
                {
                  q: "¿Somos nuevos en el ambiente, pueden asistir?",
                  a: "Sí. Muchas parejas en nuestra comunidad iniciaron sin experiencia. El proceso de validación incluye una conversación para conocerlos y orientarlos.",
                },
                {
                  q: "¿Qué pasa si hacemos todo el proceso pero al final no nos gusta?",
                  a: "Están en su derecho de retirarse en cualquier momento. No hay compromisos ni presiones.",
                },
                {
                  q: "¿Hay parejas de todas las edades y físicos?",
                  a: "Sí. SwingerSV no se enfoca en cuerpos 'perfectos'. Buscamos parejas reales con actitud abierta y respetuosa.",
                },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground font-[var(--font-playfair)]">
                ¿Quieren ser parte de la comunidad?
              </h2>
              <p className="mb-6 text-muted-foreground">
                Inicien el proceso de prevalidación. Es rápido, discreto y sin compromisos.
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
                  href="https://wa.me/50369207547?text=Somos%20una%20pareja%20y%20nos%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20comunidad%20SwingerSV"
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
