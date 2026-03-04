import { ShieldCheck, Heart, HandHeart, Users, Ban } from "lucide-react"

const rules = [
  {
    icon: ShieldCheck,
    title: "NO es NO",
    description:
      "El consentimiento es sagrado. Un 'no' se respeta siempre, sin excepciones, sin presiones y sin insistencias. Cualquier violacion a esta regla significa expulsion inmediata.",
  },
  {
    icon: Users,
    title: "De parejas, para parejas",
    description:
      "SwingerSV es una comunidad exclusiva de parejas para parejas. Buscamos que ambos miembros de cada pareja esten de acuerdo y disfruten de esta experiencia juntos.",
  },
  {
    icon: Heart,
    title: "Cada pareja va a su ritmo",
    description:
      "No hay presiones de nadie. Cada pareja decide hasta donde quiere llegar, a que ritmo y con quien. Respetamos los limites y tiempos de todos.",
  },
  {
    icon: HandHeart,
    title: "Sexualidad libre y sin coaccion",
    description:
      "Buscamos parejas que quieran disfrutar de su sexualidad de forma libre, consensuada y sin coaccion de nadie. La confianza y el respeto mutuo son la base de todo.",
  },
  {
    icon: Ban,
    title: "Cero prostitucion",
    description:
      "No se permite la prostitucion bajo ninguna circunstancia. Todo lo relacionado a SwingerSV es por puro placer y aceptacion mutua de cada pareja o asistente. Quien incumpla sera expulsado permanentemente.",
  },
]

export function RulesSection() {
  return (
    <section id="rules" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-28">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
              Nuestras Reglas de Oro
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
              Respeto, consentimiento y libertad
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              En SwingerSV la base de todo es el respeto mutuo. Estas reglas no
              son negociables y se aplican a todos los miembros sin excepcion.
              Quien no las cumpla sera removido permanentemente de la comunidad.
            </p>

            {/* Highlight box */}
            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm leading-relaxed text-foreground">
                <span className="font-semibold text-primary">
                  {"De parejas, para parejas: "}
                </span>
                SwingerSV es una comunidad donde cada pareja explora a su propio
                ritmo. Ambos miembros deben estar de acuerdo en participar. No
                aceptamos personas individuales ni situaciones donde uno de los
                dos no este comodo.
              </p>
            </div>
          </div>

          {/* Right — rule cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {rules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/40"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                  <rule.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">
                  {rule.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
