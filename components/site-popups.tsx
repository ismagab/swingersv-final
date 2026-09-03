"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, CalendarDays, Globe2 } from "lucide-react"
import type { Event } from "@/data/events"

const EVENT_STORAGE_KEY = "swingersv_popup_evento_fecha"
const FOREIGN_STORAGE_KEY = "swingersv_popup_extranjero_fecha"
const WHATSAPP_NUMBER = "50369207547"

// Texto del popup para visitantes de otros países. A diferencia del popup
// de la fiesta (que se administra desde /admin porque depende de datos que
// cambian seguido), este mensaje es fijo y se edita aquí directamente.
const FOREIGN_POPUP_TEXT = {
  eyebrow: "Visitante internacional",
  title: "¡Bienvenido/a desde fuera de El Salvador!",
  body:
    "SwingerSV recibe parejas extranjeras que visitan el país. Si vienes de viaje y quieres conocer nuestra comunidad o asistir a una fiesta durante tu estadía, escríbenos y con gusto te orientamos.",
  cta: "Escribir por WhatsApp",
}

type PopupKind = "event" | "foreign" | null

/**
 * Controla ambos popups del sitio para que nunca se superpongan:
 * 1) Si hay una fiesta próxima y no se ha mostrado hoy, se muestra primero.
 * 2) Si el visitante parece venir de otro país y no se le ha mostrado hoy
 *    ese aviso, se muestra apenas el popup de fiesta no aplique o se cierre.
 */
export function SitePopups({ events }: { events: Event[] }) {
  const [active, setActive] = useState<PopupKind>(null)
  const [nextEvent, setNextEvent] = useState<Event | null>(null)

  // true una vez que ya sabemos si el popup de evento debía mostrarse (y,
  // si se mostró, ya fue cerrado). Antes de eso, el popup de extranjero espera.
  const [eventStageDone, setEventStageDone] = useState(false)
  // true si detectamos que el visitante es de otro país y aún no se le mostró hoy
  const [foreignPending, setForeignPending] = useState(false)
  const [foreignShown, setForeignShown] = useState(false)

  // Paso 1: evaluar si corresponde mostrar el popup de la fiesta próxima
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10)
    const lastShown = localStorage.getItem(EVENT_STORAGE_KEY)

    if (events.length > 0 && lastShown !== today) {
      const proximo = events.find((e) => e.isoDate >= today) ?? events[0]
      const timer = setTimeout(() => {
        setNextEvent(proximo)
        setActive("event")
        localStorage.setItem(EVENT_STORAGE_KEY, today)
      }, 900)
      return () => clearTimeout(timer)
    }

    // No aplica el popup de fiesta hoy: el paso queda resuelto de inmediato
    setEventStageDone(true)
  }, [events])

  // Paso 2: detectar si el visitante parece venir de otro país (por IP)
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10)
    if (localStorage.getItem(FOREIGN_STORAGE_KEY) === today) return

    let cancelled = false

    fetch("https://ipapi.co/json/")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (cancelled || !data?.country_code) return
        if (data.country_code !== "SV") {
          setForeignPending(true)
        }
      })
      .catch(() => {
        // Si falla la detección, simplemente no se muestra este popup
      })

    return () => {
      cancelled = true
    }
  }, [])

  // Paso 3: cuando el popup de evento ya se resolvió y hay un aviso de
  // extranjero pendiente, mostrarlo (una sola vez por día).
  useEffect(() => {
    if (eventStageDone && foreignPending && !foreignShown && active === null) {
      const today = new Date().toISOString().slice(0, 10)
      const timer = setTimeout(() => {
        setActive("foreign")
        setForeignShown(true)
        localStorage.setItem(FOREIGN_STORAGE_KEY, today)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [eventStageDone, foreignPending, foreignShown, active])

  function closeEventPopup() {
    setActive(null)
    setEventStageDone(true)
  }

  function closeForeignPopup() {
    setActive(null)
  }

  if (active === "event" && nextEvent) {
    const mensaje = encodeURIComponent(
      `Hola, quiero información sobre "${nextEvent.title}" (${nextEvent.date}).`
    )

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={closeEventPopup}
      >
        <div
          className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-primary/30 bg-card"
          style={{ boxShadow: "0 0 40px 10px rgba(255,204,0,0.15)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeEventPopup}
            aria-label="Cerrar"
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          >
            <X className="h-4 w-4" />
          </button>

          {nextEvent.image && (
            <div className="relative aspect-[4/3] w-full bg-secondary/40">
              <Image
                src={`/images/eventos/${nextEvent.image}`}
                alt={`Afiche ${nextEvent.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 384px"
                priority
              />
            </div>
          )}

          <div className="p-6">
            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary">
              <CalendarDays className="h-3.5 w-3.5" />
              Próxima fiesta
            </p>
            <h3 className="mb-2 text-lg font-bold text-foreground">{nextEvent.title}</h3>
            <p className="mb-1 text-sm text-muted-foreground">{nextEvent.date}</p>
            <p className="mb-5 text-sm text-muted-foreground">{nextEvent.spots}</p>

            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg bg-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                Consultar por WhatsApp
              </a>
              <button
                onClick={closeEventPopup}
                className="rounded-lg border border-border px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                Ahora no
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (active === "foreign") {
    const mensaje = encodeURIComponent(
      "Hola, soy una pareja de visita en El Salvador y quiero saber más sobre SwingerSV."
    )

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        onClick={closeForeignPopup}
      >
        <div
          className="relative w-full max-w-sm rounded-2xl border border-primary/30 bg-card p-6"
          style={{ boxShadow: "0 0 40px 10px rgba(255,204,0,0.15)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeForeignPopup}
            aria-label="Cerrar"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-muted-foreground transition-colors hover:bg-black/50 hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Globe2 className="h-6 w-6 text-primary" />
          </div>

          <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-primary">
            {FOREIGN_POPUP_TEXT.eyebrow}
          </p>
          <h3 className="mb-3 text-lg font-bold text-foreground">
            {FOREIGN_POPUP_TEXT.title}
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
            {FOREIGN_POPUP_TEXT.body}
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-primary px-4 py-3 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
          >
            {FOREIGN_POPUP_TEXT.cta}
          </a>
        </div>
      </div>
    )
  }

  return null
}
