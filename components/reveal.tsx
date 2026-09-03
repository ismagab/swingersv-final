"use client"

import { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Retraso en milisegundos antes de animar, útil para escalonar elementos hijos */
  delay?: number
  as?: "div" | "section"
}

/**
 * Envuelve contenido y lo revela con una transición suave (opacidad + desplazamiento)
 * la primera vez que entra en el viewport. Usa IntersectionObserver, así que no
 * afecta el renderizado inicial en servidor ni el contenido visible para buscadores:
 * el contenido siempre está en el HTML, solo se anima su aparición visual.
 */
export function Reveal({ children, className = "", delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Si el navegador no soporta IntersectionObserver, mostrar de inmediato
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as
  return (
    <Tag
      ref={ref as never}
      className={`reveal-on-scroll ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  )
}
