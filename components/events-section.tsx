"use client"

import { useState } from "react"
import Image from "next/image"
import { CalendarDays, MapPin, Clock, Users, ImageOff, X } from "lucide-react"
import { getUpcomingEvents, type Event } from "@/data/events"

const upcomingEvents = getUpcomingEvents()

function ImageLightbox({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Imagen a pantalla completa */}
      <div
        className="relative w-full max-w-2xl aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        {event.image && (
          <Image
            src={`/images/eventos/${event.image}`}
            alt={`Afiche ${event.title} — SwingerSV`}
            fill
            className="object-contain rounded-xl"
            sizes="100vw"
            priority
          />
        )}
      </div>
    </div>
  )
}

export function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Próximas Fiestas
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            Eventos que vienen
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Nuestras fiestas son exclusivas para parejas validadas. La ubicación
            exacta se comparte solo 1 día antes del evento por seguridad y
            discreción.
          </p>
        </div>

        {/* Event cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.slug}
              className={`group relative flex flex-col rounded-xl border overflow-hidden transition-all hover:border-primary/40 ${
                event.highlight
                  ? "border-primary/30 bg-primary/5"
                  : "border-border/60 bg-card"
              }`}
            >
              {/* Afiche — solo esto abre el lightbox */}
              <div
                className={`relative w-full aspect-[4/3] overflow-hidden bg-secondary/40 ${event.image ? "cursor-zoom-in" : ""}`}
                onClick={() => event.image && setSelectedEvent(event)}
              >
                {event.image ? (
                  <Image
                    src={`/images/eventos/${event.image}`}
                    alt={`Afiche ${event.title} — SwingerSV`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/30">
                    <ImageOff className="h-10 w-10" />
                    <span className="text-xs uppercase tracking-widest">Afiche próximamente</span>
                  </div>
                )}

                {/* Tag */}
                <span className={`absolute top-3 left-3 inline-flex rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${
                  event.highlight
                    ? "bg-primary/80 text-primary-foreground"
                    : "bg-black/60 text-white"
                }`}>
                  {event.tag}
                </span>
              </div>

              {/* Info completa — igual que antes */}
              <div className="flex flex-col flex-1 p-6">
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
                    href={`https://wa.me/50369207547?text=${event.whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
                  >
                    Solicitar información
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 mx-auto max-w-2xl rounded-xl border border-border/40 bg-secondary/50 p-5 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Nota importante:</span>{" "}
            La ubicación exacta de cada fiesta se envía únicamente a las parejas
            validadas, 1 día antes de la fiesta o evento. Esto garantiza la
            seguridad y discreción de todos los asistentes.
          </p>
        </div>
      </div>

      {/* Lightbox — solo imagen grande con X */}
      {selectedEvent && (
        <ImageLightbox event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  )
}
