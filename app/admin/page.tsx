"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminEventsTab } from "@/components/admin/admin-events-tab"
import { AdminKingsTab } from "@/components/admin/admin-kings-tab"

export default function AdminPage() {
  const [tab, setTab] = useState<"events" | "kings">("events")
  const router = useRouter()

  async function cerrarSesion() {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground">Panel de administración</h1>
            <p className="text-sm text-muted-foreground">SwingerSV.com</p>
          </div>
          <button
            onClick={cerrarSesion}
            className="rounded-lg border border-border px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="mb-8 flex gap-2 border-b border-border/60">
          <button
            onClick={() => setTab("events")}
            className={`px-4 py-3 text-sm font-semibold transition-colors ${
              tab === "events"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Eventos
          </button>
          <button
            onClick={() => setTab("kings")}
            className={`px-4 py-3 text-sm font-semibold transition-colors ${
              tab === "kings"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Reyes
          </button>
        </div>

        {tab === "events" ? <AdminEventsTab /> : <AdminKingsTab />}
      </div>
    </div>
  )
}
