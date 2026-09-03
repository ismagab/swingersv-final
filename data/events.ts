import { sql, isDbConfigured } from "@/lib/db"

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

// ── Datos de respaldo ────────────────────────────────────────
// Se usan solo si la base de datos no está configurada todavía o si ocurre
// un error de conexión, para que el sitio nunca se caiga por falta
// de datos. Una vez conectado Neon, los eventos reales se
// administran desde /admin.
const fallbackEvents: Event[] = [
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

// ── Fila tal como se guarda en la tabla `events` de Neon ──
type EventRow = {
  slug: string
  title: string
  date_label: string
  iso_date: string
  time_label: string
  location: string
  spots: string
  tag: string
  highlight: boolean
  image: string | null
  cta_type: "form" | "whatsapp"
  whatsapp_text: string | null
  active: boolean
  sort_order: number
}

function rowToEvent(row: EventRow): Event {
  return {
    slug: row.slug,
    title: row.title,
    date: row.date_label,
    isoDate: row.iso_date,
    time: row.time_label,
    location: row.location,
    spots: row.spots,
    tag: row.tag,
    highlight: row.highlight,
    image: row.image,
    ctaType: row.cta_type,
    whatsappText: row.whatsapp_text ?? undefined,
  }
}

/**
 * Trae los eventos activos desde Neon, ordenados por `sort_order`.
 * Si la base de datos no está configurada o falla la consulta, regresa los
 * datos de respaldo para que el sitio siga funcionando.
 */
export async function getUpcomingEvents(): Promise<Event[]> {
  if (!isDbConfigured) {
    return fallbackEvents
  }

  try {
    const rows = (await sql`
      SELECT * FROM events
      WHERE active = true
      ORDER BY sort_order ASC
    `) as EventRow[]

    return rows.map(rowToEvent)
  } catch (err) {
    console.error("[SwingerSV] Error leyendo eventos de Neon:", err)
    return fallbackEvents
  }
}

// ── Datos estructurados (Schema.org) ────────────────────────
// Usado en layout.tsx para generar el JSON-LD de eventos.
export async function getAllEventsForSchema() {
  const events = await getUpcomingEvents()
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
