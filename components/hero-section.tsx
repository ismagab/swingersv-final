import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />
      {/* Gold gradient from bottom */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Overline */}
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Comunidad Exclusiva para Adultos
        </p>

        {/* Main headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl font-[var(--font-playfair)] text-balance">
          Explora tu libertad con{" "}
          <span className="text-primary">discrecion</span> en El Salvador
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Un espacio seguro, privado y sofisticado para parejas y personas de
          mente abierta que buscan experiencias unicas.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,204,0,0.3)]"
          >
            {"Unete a la Comunidad"}
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {"Conocer mas"}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Desplazarse hacia abajo">
          <ArrowDown className="h-5 w-5 text-primary/60" />
        </a>
      </div>
    </section>
  )
}
