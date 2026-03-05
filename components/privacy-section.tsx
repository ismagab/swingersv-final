import { Lock, Eye, MapPin, UserCheck } from "lucide-react"

const protocols = [
  {
    icon: Lock,
    title: "Discreción Total",
    description:
      "No almacenamos información personal en el sitio web. Tu privacidad está protegida porque simplemente no guardamos datos sensibles en línea.",
  },
  {
    icon: Eye,
    title: "Anonimato Garantizado",
    description:
      "Lo que pasa en nuestras fiestas se queda en nuestras fiestas. No se permiten fotos ni videos. Protegemos la identidad de todos los asistentes.",
  },
  {
    icon: MapPin,
    title: "Ubicación Confidencial",
    description:
      "La dirección del evento se comparte solo con parejas validadas, 1 día antes. Esto protege tanto el lugar como a todos los asistentes.",
  },
  {
    icon: UserCheck,
    title: "Validación de Parejas",
    description:
      "Cada pareja pasa por un proceso de validación previo para garantizar que todos los asistentes son personas reales y de confianza.",
  },
]

export function PrivacySection() {
  return (
    <section id="privacy" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — copy */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Seguridad y Discreción
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
              Tu privacidad es nuestra prioridad
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              Entendemos que la discreción es fundamental para nuestra comunidad.
              No almacenamos información personal en este sitio web. Todo el
              proceso de validación y comunicación se maneja de forma directa y
              privada para proteger a todos nuestros miembros.
            </p>

            {/* Highlight box */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm leading-relaxed text-foreground">
                <span className="font-semibold text-primary">
                  {"Compromiso de cero tolerancia: "}
                </span>
                Cualquier persona que tome fotos, videos, o que intente
                comprometer la privacidad de otro miembro será expulsada de forma
                inmediata y permanente de la comunidad.
              </p>
            </div>
          </div>

          {/* Right — protocol cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {protocols.map((protocol) => (
              <div
                key={protocol.title}
                className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                  <protocol.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {protocol.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {protocol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
