import { MapPin, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Ubicación Confidencial",
    description:
      "La ubicación exacta de cada fiesta solo se comparte con las parejas validadas o en prevalidación 1 día antes de la fiesta o evento, por seguridad y discreción de todos los asistentes.",
  },
  {
    icon: ShieldCheck,
    title: "Parejas Validadas",
    description:
      "Cada pareja pasa por un proceso de validación antes de poder asistir a cualquier evento. Esto garantiza un ambiente seguro y respetuoso para todos. Nuestro objetivo es que nadie asista coaccionado o por presión.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Sobre Nosotros
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            Una comunidad de parejas para parejas
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            SwingerSV nació de la necesidad de crear una comunidad genuina para
            parejas de mente abierta en El Salvador. No somos un club y no
            contamos con un espacio propio — somos una comunidad que organiza
            fiestas privadas en diferentes puntos de San Salvador y eventos
            especiales en las playas. Todo con total discreción y seguridad.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-primary/40 hover:bg-secondary"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
