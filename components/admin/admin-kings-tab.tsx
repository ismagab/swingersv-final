"use client"

import { useEffect, useState } from "react"
import { Plus, Trash2 } from "lucide-react"

type KingRow = {
  id: string
  name: string
  image: string
  elected_date: string
  reign_until: string
  description: string
  sort_order: number
}

const inputClasses =
  "w-full rounded-lg border border-border bg-input px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
const labelClasses = "mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground"

export function AdminKingsTab() {
  const [kings, setKings] = useState<KingRow[]>([])
  const [cargando, setCargando] = useState(true)
  const [guardando, setGuardando] = useState(false)
  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    cargar()
  }, [])

  async function cargar() {
    setCargando(true)
    const res = await fetch("/api/kings")
    if (res.ok) {
      const data = await res.json()
      setKings(data.kings || [])
    }
    setCargando(false)
  }

  function actualizar(id: string, campo: keyof KingRow, valor: string | number) {
    setKings((prev) => prev.map((k) => (k.id === id ? { ...k, [campo]: valor } : k)))
  }

  async function guardar() {
    setGuardando(true)
    setMensaje("")
    const res = await fetch("/api/kings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kings }),
    })
    setGuardando(false)
    setMensaje(res.ok ? "Cambios guardados correctamente." : "Hubo un error al guardar.")
  }

  async function agregarReinado() {
    const maxOrder = kings.reduce((max, k) => Math.max(max, k.sort_order), 0)
    const nuevo = {
      name: "Nuevos Reyes",
      image: "/images/king1.jpg",
      elected_date: "",
      reign_until: "",
      description: "",
      sort_order: maxOrder + 1,
    }
    const res = await fetch("/api/kings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    })
    if (res.ok) {
      cargar()
    } else {
      setMensaje("No se pudo agregar el nuevo reinado.")
    }
  }

  async function eliminarReinado(id: string) {
    if (!confirm("¿Eliminar este reinado? Esta acción no se puede deshacer.")) return
    const res = await fetch(`/api/kings?id=${id}`, { method: "DELETE" })
    if (res.ok) {
      setKings((prev) => prev.filter((k) => k.id !== id))
    } else {
      setMensaje("No se pudo eliminar el reinado.")
    }
  }

  if (cargando) {
    return <p className="text-sm text-muted-foreground">Cargando reyes...</p>
  }

  return (
    <div className="flex flex-col gap-6">
      {kings.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No hay reyes configurados todavía en la base de datos. Agrega el primer reinado
          con el botón de abajo, o carga filas iniciales desde el editor SQL (ver README).
        </p>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {kings.map((king) => (
          <div key={king.id} className="relative rounded-xl border border-border/60 bg-card p-5">
            <button
              onClick={() => eliminarReinado(king.id)}
              aria-label="Eliminar reinado"
              className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </button>

            <label className={labelClasses}>Nombre de los reyes</label>
            <input
              className={inputClasses}
              value={king.name}
              onChange={(e) => actualizar(king.id, "name", e.target.value)}
            />

            <label className={`${labelClasses} mt-3`}>Foto (ruta en /images/)</label>
            <input
              className={inputClasses}
              value={king.image}
              onChange={(e) => actualizar(king.id, "image", e.target.value)}
            />

            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <label className={labelClasses}>Elegidos en</label>
                <input
                  className={inputClasses}
                  placeholder="Septiembre 2025"
                  value={king.elected_date}
                  onChange={(e) => actualizar(king.id, "elected_date", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClasses}>Reinado hasta</label>
                <input
                  className={inputClasses}
                  placeholder="Septiembre 2026"
                  value={king.reign_until}
                  onChange={(e) => actualizar(king.id, "reign_until", e.target.value)}
                />
              </div>
            </div>

            <label className={`${labelClasses} mt-3`}>Descripción</label>
            <textarea
              rows={3}
              className={`${inputClasses} resize-none`}
              value={king.description}
              onChange={(e) => actualizar(king.id, "description", e.target.value)}
            />

            <label className={`${labelClasses} mt-3`}>
              Orden (mayor número = reinado más reciente)
            </label>
            <input
              type="number"
              className={inputClasses}
              value={king.sort_order}
              onChange={(e) => actualizar(king.id, "sort_order", Number(e.target.value))}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={guardar}
          disabled={guardando}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {guardando ? "Guardando..." : "Guardar cambios"}
        </button>
        <button
          onClick={agregarReinado}
          className="flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
        >
          <Plus className="h-4 w-4" />
          Agregar reinado
        </button>
        {mensaje && <p className="text-sm text-muted-foreground">{mensaje}</p>}
      </div>
    </div>
  )
}
