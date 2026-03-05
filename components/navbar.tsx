"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Fiestas", href: "#events" },
  { label: "Reglas", href: "#rules" },
  { label: "Reyes", href: "#kings" },
  { label: "Singles", href: "#singles" },
  { label: "Prevalidación", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar menú al hacer clic en un link
  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="SwingerSV — Comunidad Swinger en El Salvador"
              width={140}
              height={56}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="rounded-lg border border-primary/40 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
            >
              Registrarse
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex lg:hidden items-center justify-center rounded-lg border border-border/60 p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
          <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1" aria-label="Menú móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-border/40">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="flex w-full items-center justify-center rounded-lg border border-primary/40 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
              >
                Registrarse
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
