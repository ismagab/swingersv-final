"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Crown } from "lucide-react"

const kings = [
  {
    id: 1,
    name: "Esposos Rodríguez",
    image: "/images/king1.jpg",
    electedDate: "Septiembre 2025",
    reignUntil: "Septiembre 2026",
    description: "Reconocidos por su carisma y respeto, muy queridos en la comunidad.",
  },
  {
    id: 2,
    name: "Esposos Axel y Gaby",
    image: "/images/king2.jpg",
    electedDate: "Mayo 2024",
    reignUntil: "Septiembre 2025",
    description: "Embajadores del respeto y la confianza en cada evento.",
  },
  {
    id: 3,
    name: "Esposos R y K",
    image: "/images/king3.jpg",
    electedDate: "Mayo 2023",
    reignUntil: "Mayo 2024",
    description: "Pioneros en fortalecer los lazos de la comunidad SwingerSV.",
  },
  {
    id: 4,
    name: "Esposos SanSan",
    image: "/images/king4.jpg",
    electedDate: "Abril 2022",
    reignUntil: "Mayo 2023",
    description: "Su energía y entusiasmo marcaron un antes y un después.",
  },
]

export function KingsSection() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    if (index < 0) setCurrent(kings.length - 1)
    else if (index >= kings.length) setCurrent(0)
    else setCurrent(index)
  }, [])

  const king = kings[current]

  return (
    <section id="kings" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <Crown className="h-4 w-4" />
            Salón de Reyes SwingerSV
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            Los Reyes de SwingerSV
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Cada reinado reconoce a la pareja que mejor representa los valores
            de nuestra comunidad: respeto, confianza y libertad.
          </p>
        </div>

        {/* Carousel */}
        <div className="mx-auto max-w-4xl">
          <div className="relative rounded-2xl border border-border/60 bg-card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-2">
              {/* Image side */}
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src={king.image}
                  alt={`Reyes de SwingerSV — ${king.name}, elegidos en ${king.electedDate}`}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Crown badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-lg bg-primary/90 px-3 py-1.5">
                  <Crown className="h-3.5 w-3.5 text-primary-foreground" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                    {current === 0 ? "Reyes Actuales" : `Reinado #${kings.length - current}`}
                  </span>
                </div>
              </div>

              {/* Info side */}
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <h3 className="mb-2 text-2xl font-bold text-foreground font-[var(--font-playfair)]">
                  {king.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {king.description}
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      Elegidos
                    </span>
                    <span className="text-sm text-foreground">
                      {king.electedDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      Reinado hasta
                    </span>
                    <span className="text-sm text-foreground">
                      {king.reignUntil}
                    </span>
                  </div>
                </div>

                {/* Dots */}
                <div className="mt-8 flex items-center gap-2">
                  {kings.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Ver reyes ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        i === current
                          ? "w-6 bg-primary"
                          : "w-2 bg-border hover:bg-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Reyes anteriores"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => goTo(current + 1)}
              aria-label="Siguientes reyes"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-background/80 backdrop-blur-sm transition-all hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
