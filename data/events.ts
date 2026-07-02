export type Event = {
  slug: string
  title: string
  date: string
  time: string
  location: string
  spots: string
  tag: string
  highlight: boolean
  image: string | null
  ctaType: "form" | "whatsapp"
  whatsappText?: string
}

// ── Eventos ──────────────────────────────────────────────────
// Agrega, edita o quita eventos aquí. Se muestran en el orden
// en que aparecen en este arreglo (recomendado: cronológico).
const events: Event[] = [
  {
    slug: "xxxtreme-julio-2026",
    title: "XXXtreme: ¿Te atreves a jugar?",
    date: "Sábado 18 de julio, 2026",
    time: "6:00 PM",
    location: "San Salvador",
    spots: "Cover $25 — Cupo limitado",
    tag: "Próximo evento",
    highlight: true,
    image: "xxxtreme-julio-2026.jpg",
    ctaType: "whatsapp",
    whatsappText: encodeURIComponent(
      "Hola, quiero información sobre la fiesta XXXtreme del 18 de julio 2026 en San Salvador."
    ),
  },
  {
    slug: "survivor-juegos-prohibidos-agosto-2026",
    title: "Survivor: Juegos Prohibidos",
    date: "Sábado 22 de agosto, 2026",
    time: "Pronto más información",
    location: "San Diego, La Libertad",
    spots: "Validación requerida",
    tag: "Próximamente",
    highlight: false,
    image: "survivor-juegos-prohibidos-agosto-2026.png",
    ctaType: "form",
  },
  {
    slug: "patrio-septiembre-2026",
    title: "Pa'Trio — Elección de Rey y Reina SwingerSV 2026",
    date: "Sábado 19 de septiembre, 2026",
    time: "Pronto más información",
    location: "San Salvador",
    spots: "Validación requerida",
    tag: "Próximamente",
    highlight: false,
    image: "patrio-septiembre-2026.png",
    ctaType: "form",
  },
]

export function getUpcomingEvents(): Event[] {
  return events
}
