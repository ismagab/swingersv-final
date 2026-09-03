"use client"

import { useEffect, useState } from "react"

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

const inputClasses =
  "w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
const labelClasses = "mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground"

export function AdminEventsTab() {
  const [events, setEvents] = useState<EventRow[]>([])
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    cargar()
  }, [])

  async function cargar() {
    setCargando(true)
    const res = await fetch("/api/events")
    if (res.ok) {
      const data = await res.json()
      setEvents(data.events || [])
    }
    setCargando(false)
  }

  function actualizar(slug: string, campo: keyof EventRow, valor: string | boolean) {
    setEvents((prev) =>
      prev.map((ev) => (ev.slug === slug ? { ...ev, [campo]: valor } : ev))
    )
  }

  async function guardar() {
    setGuardando(true)
    setMensaje("")
    const res = await fetch("/api/events", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ events }),
    })
    setGuardando(false)
    setMensaje(res.ok ? "Cambios guardados correctamente." : "Hubo un error al guardar.")
  }

  if (cargando) {
    return <p className="text-sm text-muted-foreground">Cargando eventos...</p>
  }

  if (events.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No hay eventos configurados todavía en la base de datos. Agrega filas a la tabla{" "}
        <code>events</code> desde el editor SQL de Neon (ver README) y luego
        recarga esta página para editarlas aquí.
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 md:grid-cols-2">
        {events.map((ev) => (
          <div key={ev.slug} className="rounded-xl border border-border/60 bg-card p-5">
            <label className={labelClasses}>Nombre del evento</label>
            <input
              className={inputClasses}
              value={ev.title}
              onChange={(e) => actualizar(ev.slug, "title", e.target.value)}
            />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <label className={labelClasses}>Fecha (texto visible)</label>
                <input
                  className={inputClasses}
                  placeholder="Sábado 18 de julio, 2026"
                  value={ev.date_label}
                  onChange={(e) => actualizar(ev.slug, "date_label", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Fecha (AAAA-MM-DD)</label>
                <input
                  type="date"
                  className={inputClasses}
                  value={ev.iso_date}
                  onChange={(e) => actualizar(ev.slug, "iso_date", e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <label className={labelClasses}>Hora</label>
                <input
                  className={inputClasses}
                  value={ev.time_label}
                  onChange={(e) => actualizar(ev.slug, "time_label", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Ubicación</label>
                <input
                  className={inputClasses}
                  value={ev.location}
                  onChange={(e) => actualizar(ev.slug, "location", e.target.value)}
                />
              </div>
            </div>

            <label className={`${labelClasses} mt-3`}>
              Cupos / cover (ej: "Cover $25 — Cupo limitado")
            </label>
            <input
              className={inputClasses}
              value={ev.spots}
              onChange={(e) => actualizar(ev.slug, "spots", e.target.value)}
            />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <label className={labelClasses}>Etiqueta</label>
                <input
                  className={inputClasses}
                  placeholder="Próximo evento / Próximamente"
                  value={ev.tag}
                  onChange={(e) => actualizar(ev.slug, "tag", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Imagen (archivo en /images/eventos/)</label>
                <input
                  className={inputClasses}
                  value={ev.image ?? ""}
                  onChange={(e) => actualizar(ev.slug, "image", e.target.value)}
                />
              </div>
            </div>

            <div className="mt-3 flex items-center gap-6">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={ev.active}
                  onChange={(e) => actualizar(ev.slug, "active", e.target.checked)}
                />
                Visible en el sitio
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={ev.highlight}
                  onChange={(e) => actualizar(ev.slug, "highlight", e.target.checked)}
                />
                Destacado
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={guardar}
          disabled={guardando}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {guardando ? "Guardando..." : "Guardar cambios"}
        </button>
        {mensaje && <p className="text-sm text-muted-foreground">{mensaje}</p>}
      </div>
    </div>
  )
}
