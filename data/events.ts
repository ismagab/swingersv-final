export type Event = {
  slug: string
  title: string
  date: string
  isoDate: string
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
    isoDate: "2026-07-18",
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
    isoDate: "2026-08-22",
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
    isoDate: "2026-09-19",
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

// ── Datos estructurados (Schema.org) ────────────────────────
// Usado en layout.tsx para generar el JSON-LD de eventos.
export function getAllEventsForSchema() {
  return events.map((event) => ({
    "@type": "Event",
    name: event.title,
    startDate: event.isoDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.location,
        addressCountry: "SV",
      },
    },
    image: event.image ? `https://www.swingersv.com/images/eventos/${event.image}` : undefined,
    description: `${event.title} — ${event.spots}`,
    organizer: {
      "@type": "Organization",
      name: "SwingerSV",
      url: "https://www.swingersv.com",
    },
  }))
}
