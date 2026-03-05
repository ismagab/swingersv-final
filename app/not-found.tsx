import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background to-transparent" />

        {/* Glow center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">

          {/* 404 number */}
          <div className="mb-6 relative">
            <p
              className="text-[160px] sm:text-[200px] font-bold leading-none font-[var(--font-playfair)] select-none"
              style={{
                background: "linear-gradient(135deg, #ffcc00 0%, #ff9900 50%, #ffcc00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 40px rgba(255,204,0,0.3))",
              }}
            >
              404
            </p>
          </div>

          {/* Divider line */}
          <div className="mx-auto mb-8 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Message */}
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            SwingerSV — Página no encontrada
          </p>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            Esta puerta está cerrada
          </h1>
          <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-muted-foreground">
            La página que buscas no existe o fue movida. Pero las mejores fiestas
            siempre están detrás de la puerta correcta — y esa está justo aquí.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,204,0,0.3)]"
            >
              Volver al Inicio
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Prevalidación
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {[
              { label: "Fiestas", href: "/#events" },
              { label: "Nosotros", href: "/#about" },
              { label: "Reglas", href: "/#rules" },
              { label: "Singles", href: "/#singles" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
