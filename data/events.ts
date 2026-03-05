// ============================================================
// ARCHIVO CENTRAL DE EVENTOS — SwingerSV
// ============================================================
// Agrega, edita o elimina eventos SOLO aquí.
// El sitio web, el Schema de Google y las tarjetas se
// actualizan automáticamente en el próximo deploy.
//
// CÓMO AGREGAR UN EVENTO:
// 1. Copia un bloque { } existente
// 2. Pégalo al final del array
// 3. Cambia los datos
// 4. Push a GitHub → listo
//
// IMAGEN DEL AFICHE:
// - Sube la imagen a /public/images/eventos/
// - Escribe el nombre del archivo en el campo "image"
// - Ejemplo: image: "fiesta-disco-marzo.jpg"
// - Si no tienes afiche aún, deja image: null
// ============================================================

export interface Event {
  slug: string           // URL amigable: "fiesta-disco-marzo-2026"
  title: string          // Nombre del evento
  tag: string            // Etiqueta: "Próxima" | "Fiesta" | "Evento" | "Especial"
  date: string           // Texto visible: "Sábado 21 de Marzo, 2026"
  dateISO: string        // Fecha ISO para Schema y ordenamiento: "2026-03-21T20:00:00-06:00"
  dateISOEnd: string     // Fecha fin ISO: "2026-03-22T02:00:00-06:00"
  time: string           // Horario visible: "8:00 PM - 2:00 AM"
  location: string       // Ubicación visible: "Colonia Escalón, San Salvador"
  locationFull: string   // Para Schema: "San Salvador, El Salvador"
  spots: string          // "Acceso libre" | "Cupos limitados"
  image: string | null   // Nombre del archivo en /public/images/eventos/ o null
  highlight: boolean     // true = tarjeta destacada (solo el más próximo)
  whatsappText: string   // Texto pre-escrito para WhatsApp
}

export const events: Event[] = [
  {
    slug: "entre-chicas-dia-mujer-2026",
    title: "Entre Chicas — Reunión de esposas celebrando el Día de la Mujer",
    tag: "Próxima",
    date: "Sábado 07 de Marzo, 2026",
    dateISO: "2026-03-07T20:00:00-06:00",
    dateISOEnd: "2026-03-08T02:00:00-06:00",
    time: "8:00 PM - 2:00 AM",
    location: "San Salvador",
    locationFull: "San Salvador, El Salvador",
    spots: "Acceso libre",
    image: "/images/eventos/SwingerSV-entre-chicas-marzo-2026.jpg",
    highlight: true,
    whatsappText: "Somos%20parejas%20y%20nos%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20evento%20Entre%20Chicas%20del%207%20de%20Marzo",
  },
  {
    slug: "fiesta-disco-swingersv-marzo-2026",
    title: "Fiesta Disco SwingerSV",
    tag: "Fiesta",
    date: "Sábado 21 de Marzo, 2026",
    dateISO: "2026-03-21T20:00:00-06:00",
    dateISOEnd: "2026-03-22T02:00:00-06:00",
    time: "8:00 PM - 2:00 AM",
    location: "Colonia Escalón, San Salvador",
    locationFull: "Colonia Escalón, San Salvador, El Salvador",
    spots: "Cupos limitados",
    image: null, // Ejemplo: "fiesta-disco-marzo-2026.jpg"
    highlight: false,
    whatsappText: "Somos%20parejas%20y%20nos%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20la%20Fiesta%20Disco%20del%2021%20de%20Marzo",
  },
  {
    slug: "pool-party-playa-san-diego-abril-2026",
    title: "Evento Pool Party — Playa San Diego",
    tag: "Evento",
    date: "Sábado 18 de Abril, 2026",
    dateISO: "2026-04-18T17:00:00-06:00",
    dateISOEnd: "2026-04-19T02:00:00-06:00",
    time: "5:00 PM - 2:00 AM",
    location: "Playa San Diego, La Libertad",
    locationFull: "Playa San Diego, La Libertad, El Salvador",
    spots: "Cupos limitados",
    image: null, // Ejemplo: "pool-party-abril-2026.jpg"
    highlight: false,
    whatsappText: "Somos%20parejas%20y%20nos%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20el%20Pool%20Party%20del%2018%20de%20Abril",
  },

  // ← AGREGA NUEVOS EVENTOS AQUÍ ABAJO
]

// ============================================================
// FUNCIONES AUTOMÁTICAS — No tocar
// ============================================================

// Devuelve solo los 3 próximos eventos ordenados por fecha
export function getUpcomingEvents(): Event[] {
  const now = new Date()
  return events
    .filter((e) => new Date(e.dateISO) > now)
    .sort((a, b) => new Date(a.dateISO).getTime() - new Date(b.dateISO).getTime())
    .slice(0, 3)
    .map((e, i) => ({ ...e, highlight: i === 0 })) // El primero siempre destacado
}

// Devuelve todos los eventos para el Schema de Google
export function getAllEventsForSchema() {
  return getUpcomingEvents().map((event, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Event",
      name: event.title,
      startDate: event.dateISO,
      endDate: event.dateISOEnd,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: `${event.location} (ubicación confidencial)`,
        address: {
          "@type": "PostalAddress",
          addressLocality: event.locationFull,
          addressCountry: "SV",
        },
      },
      organizer: {
        "@type": "Organization",
        name: "SwingerSV",
        url: "https://www.swingersv.com",
      },
      offers: {
        "@type": "Offer",
        availability:
          event.spots === "Acceso libre"
            ? "https://schema.org/InStock"
            : "https://schema.org/LimitedAvailability",
        url: `https://wa.me/50369207547?text=${event.whatsappText}`,
      },
      image: event.image
        ? `https://www.swingersv.com/images/eventos/${event.image}`
        : "https://www.swingersv.com/images/logo.png",
    },
  }))
}
