import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CalendarDays, MapPin, ShieldCheck, Users, ArrowRight, Globe, Plane } from "lucide-react"

export const metadata: Metadata = {
  title: "Fiestas Swinger en El Salvador — San Salvador y La Libertad | SwingerSV",
  description:
    "Fiestas swinger en El Salvador para parejas locales, del interior del país y extranjeros de vacaciones. Eventos privados en San Salvador y La Libertad. Validación rápida para visitantes. SwingerSV.",
  alternates: {
    canonical: "https://www.swingersv.com/fiestas-swinger-san-salvador",
  },
  openGraph: {
    title: "Fiestas Swinger en El Salvador | SwingerSV",
    description:
      "Fiestas swinger privadas en El Salvador para parejas locales, del interior del país y extranjeros de vacaciones. Discreción garantizada.",
    url: "https://www.swingersv.com/fiestas-swinger-san-salvador",
    images: [{ url: "https://www.swingersv.com/images/logo.png" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fiestas Swinger en El Salvador — Para locales, nacionales e internacionales",
  description:
    "Guía completa sobre las fiestas swinger en El Salvador organizadas por SwingerSV. Abierto a parejas de todo el país y extranjeros de vacaciones.",
  author: { "@type": "Organization", name: "SwingerSV" },
  publisher: { "@type": "Organization", name: "SwingerSV", url: "https://www.swingersv.com" },
  url: "https://www.swingersv.com/fiestas-swinger-san-salvador",
  inLanguage: "es",
}

export default function FiestasSwingerPage() {
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
              SwingerSV — El Salvador
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-[var(--font-playfair)] text-balance">
              Fiestas Swinger en El Salvador
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              La comunidad swinger más exclusiva y discreta de El Salvador. Organizamos
              fiestas privadas en San Salvador y La Libertad para parejas de la capital,
              del interior del país y visitantes extranjeros de vacaciones.
            </p>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="py-12 px-6">
          <div className="mx-auto max-w-4xl">

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              ¿Qué son las fiestas swinger de SwingerSV?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              SwingerSV organiza eventos privados y exclusivos para parejas de mente abierta
              en El Salvador. No somos un club fijo — somos una comunidad que rota entre
              diferentes ubicaciones en San Salvador y eventos especiales en la playa para
              garantizar la discreción de todos los asistentes. Cada fiesta es temática,
              cuidadosamente organizada y exclusiva para personas validadas.
            </p>

            {/* Quiénes nos visitan */}
            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              ¿Quiénes asisten a nuestras fiestas?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SwingerSV es un punto de encuentro para el lifestyle en toda la región.
              Nos visitan personas de todos los rincones del país y del extranjero:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {[
                {
                  icon: MapPin,
                  title: "Parejas de San Salvador",
                  desc: "La mayoría de nuestra comunidad está en la capital. Eventos en Colonia Escalón y diferentes zonas de San Salvador.",
                },
                {
                  icon: Users,
                  title: "Del interior del país",
                  desc: "Nos visitan parejas, singles y unicornios de Santa Ana, San Miguel, La Libertad, Sonsonate y todo El Salvador.",
                },
                {
                  icon: Plane,
                  title: "Extranjeros de vacaciones",
                  desc: "Parejas, singles y unicornios que visitan El Salvador y quieren conectar con el lifestyle local. Bienvenidos siempre.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 bg-card p-5">
                  <item.icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Visitantes internacionales */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 mb-8">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    ¿Estás de vacaciones en El Salvador?
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Si visitas El Salvador y quieres conectar con la comunidad swinger local,
                    escríbenos con anticipación. Tenemos un proceso de validación rápido para
                    visitantes internacionales. Somos el punto de referencia del lifestyle en
                    El Salvador para turistas de Guatemala, Honduras, México, Estados Unidos,
                    España y toda Latinoamérica.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              ¿Dónde se realizan las fiestas swinger en El Salvador?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nuestros eventos se realizan en diferentes zonas estratégicas del país:
            </p>

            <div className="grid gap-4 sm:grid-cols-3 mb-8">
              {[
                { icon: MapPin, lugar: "Colonia Escalón", desc: "San Salvador — zona exclusiva, segura y céntrica. Fácil acceso desde cualquier punto de la capital." },
                { icon: MapPin, lugar: "San Salvador", desc: "Diferentes colonias según el evento. Siempre en zonas seguras y de fácil acceso." },
                { icon: MapPin, lugar: "La Libertad", desc: "Eventos en playa y zonas costeras. Ideal para parejas que vienen del interior o de vacaciones." },
              ].map((item) => (
                <div key={item.lugar} className="rounded-xl border border-border/60 bg-card p-5">
                  <item.icon className="h-5 w-5 text-primary mb-2" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.lugar}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-border/40 bg-secondary/50 p-6 mb-8">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Ubicación confidencial: </span>
                La dirección exacta de cada fiesta se comparte únicamente con las personas
                validadas, 1 día antes del evento. Esto protege la privacidad de todos
                los asistentes, sean locales o visitantes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              Tipos de fiestas swinger que organizamos
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              {[
                { title: "Fiestas Disco", desc: "Ambiente de club privado con música, baile y zonas habilitadas para encuentros." },
                { title: "Pool Party", desc: "Eventos en piscina en La Libertad. El escenario ideal para conocer parejas en un ambiente relajado." },
                { title: "Fiestas Temáticas", desc: "Cada evento tiene una temática diferente — disfraces, colores, épocas. Salir de la zona de confort es parte del juego." },
                { title: "Reuniones de Chicas", desc: "Espacios exclusivos para mujeres de la comunidad. Celebraciones especiales y reuniones entre amigas." },
                { title: "Meet & Greet", desc: "Reuniones íntimas para que parejas nuevas o visitantes conozcan la comunidad sin presiones." },
                { title: "Eventos Especiales", desc: "Bacanales, eventos de temporada y fiestas sorpresa para la comunidad validada." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              ¿Cómo asistir? — Proceso de validación
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Para asistir a cualquier evento de SwingerSV es necesario pasar por un
              proceso de validación. Aplica igual para parejas locales, del interior del
              país y visitantes extranjeros. Si eres visitante escríbenos con anticipación
              para agilizar el proceso.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { num: "01", title: "Contáctanos por WhatsApp", desc: "Escríbenos como pareja, single o unicornio. Presentación inicial y primeras preguntas. Si eres extranjero indícalo desde el inicio." },
                { num: "02", title: "Prevalidación", desc: "Completar el formulario de registro. Sencillo, discreto y sin complicaciones." },
                { num: "03", title: "Validación", desc: "Revisión de perfiles y conversación directa para conocerlos. Para visitantes el proceso es más ágil." },
                { num: "04", title: "¡Bienvenidos!", desc: "Una vez validados reciben la ubicación del evento 1 día antes de la fiesta." },
              ].map((step) => (
                <div key={step.num} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-5">
                  <span className="text-2xl font-bold text-primary/30 font-[var(--font-playfair)] shrink-0">{step.num}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4 font-[var(--font-playfair)]">
              Reglas de oro — Las mismas para todos
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Las reglas de SwingerSV aplican por igual para locales, nacionales e
              internacionales. No hay excepciones.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              {[
                { icon: ShieldCheck, title: "NO es NO", desc: "El consentimiento es sagrado y no negociable en ningún momento ni circunstancia." },
                { icon: Users, title: "De parejas para parejas", desc: "Ambos miembros deben estar de acuerdo y disfrutar la experiencia juntos." },
                { icon: ShieldCheck, title: "Cada quien a su ritmo", desc: "No hay presiones. Cada pareja o persona decide hasta dónde quiere llegar." },
                { icon: ShieldCheck, title: "Cero fotos o videos", desc: "La privacidad es prioridad absoluta. Expulsión inmediata por incumplimiento." },
              ].map((rule) => (
                <div key={rule.title} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                  <rule.icon className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{rule.title}</h3>
                    <p className="text-xs text-muted-foreground">{rule.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground font-[var(--font-playfair)]">
                ¿Listos para su primera fiesta en El Salvador?
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Sean de San Salvador, del interior del país o estén de vacaciones —
                el ambiente swinger más exclusivo de El Salvador los está esperando.
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
                  href="https://wa.me/50369207547?text=Hola%2C%20nos%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20las%20fiestas%20swinger%20en%20El%20Salvador"
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
