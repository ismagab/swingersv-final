"use client"

import { useState } from "react"
import Image from "next/image"
import { CalendarDays, MapPin, Clock, Users, ImageOff, X, MessageCircle } from "lucide-react"
import { getUpcomingEvents, type Event } from "@/data/events"

const upcomingEvents = getUpcomingEvents()

function Lightbox({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-card border border-border/60 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm hover:bg-black/80 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Imagen grande */}
        <div className="relative w-full aspect-[4/3]">
          {event.image ? (
            <Image
              src={`/images/eventos/${event.image}`}
              alt={`Afiche ${event.title} — SwingerSV`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary/40 text-muted-foreground/30">
              <ImageOff className="h-12 w-12" />
              <span className="text-xs uppercase tracking-widest">Afiche próximamente</span>
            </div>
          )}
          <span className={`absolute top-3 left-3 inline-flex rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${
            event.highlight ? "bg-primary/80 text-primary-foreground" : "bg-black/60 text-white"
          }`}>
            {event.tag}
          </span>
        </div>

        {/* Info del evento */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-semibold text-foreground leading-snug">
            {event.title}
          </h3>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground mb-6">
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
          <a
            href={`https://wa.me/50369207547?text=${event.whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 border border-primary/40 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/20"
          >
            <MessageCircle className="h-4 w-4" />
            Solicitar información
          </a>
        </div>
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
            exacta se comparte solo 1 día antes del evento por seguridad y discreción.
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
              {/* Afiche — toca para abrir lightbox */}
              <div
                className="relative w-full aspect-[4/3] overflow-hidden bg-secondary/40 cursor-pointer"
                onClick={() => setSelectedEvent(event)}
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
                <span className={`absolute top-3 left-3 inline-flex rounded-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm ${
                  event.highlight ? "bg-primary/80 text-primary-foreground" : "bg-black/60 text-white"
                }`}>
                  {event.tag}
                </span>
                {/* Hint hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold uppercase tracking-widest bg-black/50 px-3 py-2 rounded-lg backdrop-blur-sm">
                    Ver detalle
                  </span>
                </div>
              </div>

              {/* Título + botón */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="mb-4 text-base font-semibold text-foreground leading-snug cursor-pointer hover:text-primary transition-colors"
                  onClick={() => setSelectedEvent(event)}
                >
                  {event.title}
                </h3>
                <div className="mt-auto">
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

      {/* Lightbox */}
      {selectedEvent && (
        <Lightbox event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  )
}
