"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function AdminLoginPage() {
  const [usuario, setUsuario] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [error, setError] = useState("")
  const [cargando, setCargando] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setCargando(true)

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, contrasena }),
    })

    setCargando(false)

    if (res.ok) {
      router.push("/admin")
      router.refresh()
    } else {
      const data = await res.json().catch(() => ({}))
      setError(data.error || "Error al iniciar sesión")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-border/60 bg-card p-8"
      >
        <Image
          src="/images/logo.png"
          alt="SwingerSV"
          width={140}
          height={56}
          className="mb-6 h-10 w-auto"
        />
        <h1 className="mb-1 text-lg font-semibold text-foreground">Panel de administración</h1>
        <p className="mb-6 text-sm text-muted-foreground">Eventos y Reyes de SwingerSV</p>

        <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Usuario
        </label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
          autoFocus
          className="mb-4 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />

        <label className="mb-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Contraseña
        </label>
        <input
          type="password"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
          className="mb-6 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />

        {error && (
          <p className="mb-4 rounded-lg border border-destructive/30 bg-destructive/5 p-2.5 text-center text-xs text-destructive-foreground">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={cargando}
          className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {cargando ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  )
}
