import Image from "next/image"

const galleryItems = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Ambiente de fiesta tipo lounge con iluminacion dorada",
    label: "Nuestras Fiestas",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Cocteleria artesanal en ambiente exclusivo",
    label: "Cocteleria",
    span: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Area VIP con ambiente sofisticado",
    label: "Ambiente VIP",
    span: "",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Evento privado con decoracion elegante",
    label: "Eventos Privados",
    span: "md:col-span-2",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Espacio exclusivo con iluminacion dramatica",
    label: "Exclusividad",
    span: "",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Celebracion con champagne y luces doradas",
    label: "Celebraciones",
    span: "",
  },
]

export function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Estilo de Vida
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            Asi vivimos nuestras experiencias
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            No somos un club, somos una comunidad. Organizamos fiestas en
            distintas zonas de San Salvador y eventos en la playa en San Diego,
            La Libertad. No contamos con espacio propio, lo que nos permite
            variar ambientes y mantener la exclusividad de cada encuentro.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-xl ${item.span}`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <span className="text-sm font-medium uppercase tracking-wider text-primary">
                    {item.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location disclaimer */}
        <div className="mt-10 mx-auto max-w-2xl rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Sobre la ubicacion:</span>{" "}
            Por seguridad y discrecion de nuestros asistentes, la ubicacion exacta
            de cada fiesta se comunica unicamente a las parejas validadas, 1 dia
            antes del evento.
          </p>
        </div>
      </div>
    </section>
  )
}
