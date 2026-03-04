"use client"

import { CalendarDays, MapPin, Clock, Users } from "lucide-react"

const upcomingEvents = [
  {
    title: "Noche de Parejas - Edicion Gold",
    date: "Sabado 15 de Marzo, 2026",
    time: "9:00 PM - 3:00 AM",
    location: "Zona Exclusiva, San Salvador",
    spots: "Cupos limitados",
    tag: "Proxima",
    highlight: true,
  },
  {
    title: "Pool Party Privada",
    date: "Sabado 29 de Marzo, 2026",
    time: "2:00 PM - 10:00 PM",
    location: "San Diego, La Libertad",
    spots: "Cupos limitados",
    tag: "Playa",
    highlight: false,
  },
  {
    title: "Noche Sensual - Abril",
    date: "Sabado 12 de Abril, 2026",
    time: "9:00 PM - 3:00 AM",
    location: "Zona Exclusiva, San Salvador",
    spots: "Cupos limitados",
    tag: "Especial",
    highlight: false,
  },
]

export function EventsSection() {
  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Proximas Fiestas
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            Eventos que vienen
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Nuestras fiestas son exclusivas para parejas validadas. La ubicacion
            exacta se comparte solo 1 dia antes del evento por seguridad y
            discrecion.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.title}
              className={`group relative flex flex-col rounded-xl border p-6 transition-all hover:border-primary/40 ${
                event.highlight
                  ? "border-primary/30 bg-primary/5"
                  : "border-border/60 bg-card"
              }`}
            >
              {/* Tag */}
              <span
                className={`mb-4 inline-flex w-fit rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${
                  event.highlight
                    ? "bg-primary/20 text-primary"
                    : "bg-accent/20 text-accent-foreground"
                }`}
              >
                {event.tag}
              </span>

              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {event.title}
              </h3>

              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-4 w-4 shrink-0 text-primary/70" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 shrink-0 text-primary/70" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-primary/70" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 shrink-0 text-primary/70" />
                  <span>{event.spots}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40">
                <a
                  href="https://wa.me/50369207547?text=Somos%20parejas%20y%20nos%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20SwingerSV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
                >
                  Solicitar informacion
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 mx-auto max-w-2xl rounded-xl border border-border/40 bg-secondary/50 p-5 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Nota importante:</span>{" "}
            La ubicacion exacta de cada fiesta se envia unicamente a las parejas
            validadas, 1 dia antes del evento. Esto garantiza la seguridad y
            discrecion de todos los asistentes.
          </p>
        </div>
      </div>
    </section>
  )
}
