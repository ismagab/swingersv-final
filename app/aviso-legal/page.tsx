import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Aviso Legal | SwingerSV",
  description: "Aviso legal de SwingerSV. Comunidad swinger privada para adultos en El Salvador.",
  alternates: {
    canonical: "https://www.swingersv.com/aviso-legal",
  },
  robots: { index: false, follow: false },
}

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            SwingerSV — Legal
          </p>
          <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground font-[var(--font-playfair)]">
            Aviso Legal
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">
            Última actualización: marzo 2026
          </p>

          <div className="flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                1. Identificación
              </h2>
              <p>
                El presente Aviso Legal regula el acceso y uso del sitio web www.swingersv.com
                (en adelante "el Sitio"), así como la participación en las actividades
                organizadas por SwingerSV, comunidad privada de adultos con sede en la
                República de El Salvador.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                2. Naturaleza del Sitio y la Comunidad
              </h2>
              <p className="mb-3">
                SwingerSV es una <span className="font-semibold text-foreground">comunidad privada de adultos</span> que
                organiza eventos de encuentro social y de lifestyle para personas mayores
                de 18 años en El Salvador. El Sitio tiene carácter informativo y sirve
                como punto de contacto para el proceso de validación de nuevos miembros.
              </p>
              <p>
                SwingerSV no es un club de alterne, ni un servicio de prostitución, ni
                una plataforma de citas. Es una comunidad privada basada en el respeto
                mutuo, el consentimiento y la libertad sexual entre adultos.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                3. Contenido para Adultos — Acceso Restringido
              </h2>
              <p className="mb-3">
                El Sitio contiene información y referencias a contenido de naturaleza
                sexual para adultos. El acceso está <span className="font-semibold text-foreground">estrictamente prohibido
                para personas menores de 18 años</span>.
              </p>
              <p className="mb-3">
                Al acceder al Sitio, el usuario declara expresamente:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Ser mayor de 18 años de edad.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Acceder voluntariamente a contenido de naturaleza adulta.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> No encontrarse en un lugar donde el acceso a este tipo de contenido esté prohibido por ley.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Asumir plena responsabilidad por el acceso y uso del Sitio.</li>
              </ul>
              <p className="mt-3">
                SwingerSV no se hace responsable por el acceso de menores de edad al
                Sitio cuando dicho acceso se produzca mediante la falsificación de datos
                o elusión de los controles establecidos.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                4. Prohibiciones Absolutas
              </h2>
              <p className="mb-3">
                SwingerSV establece las siguientes prohibiciones absolutas que aplican
                a todos los usuarios del Sitio y participantes en sus eventos:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Menores de edad:</span> Queda absolutamente prohibido el acceso, registro o participación de personas menores de 18 años en cualquier actividad de SwingerSV.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Prostitución:</span> Queda absolutamente prohibida cualquier forma de prostitución, comercio sexual o intercambio de servicios sexuales por dinero u otros bienes.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Estupefacientes:</span> Queda absolutamente prohibido el consumo, distribución, venta o posesión de drogas, estupefacientes o sustancias ilegales en el marco de los eventos.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Coacción:</span> Queda absolutamente prohibida cualquier forma de presión, coacción o manipulación para obligar a participar en actividades sexuales.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Grabaciones no consentidas:</span> Queda absolutamente prohibido fotografiar, grabar o difundir imágenes de otros participantes sin su consentimiento expreso.</li>
              </ul>
              <p className="mt-3">
                El incumplimiento de cualquiera de estas prohibiciones resultará en
                expulsión inmediata y permanente, y podrá ser denunciado ante las
                autoridades competentes de la República de El Salvador conforme a la
                legislación penal vigente.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                5. Exención de Responsabilidad
              </h2>
              <p className="mb-3">
                SwingerSV y sus organizadores no serán responsables por:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Las acciones, comportamientos o decisiones individuales de los participantes durante los eventos.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Daños, perjuicios o lesiones derivados del comportamiento de terceros participantes.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> El uso indebido del Sitio por parte de usuarios que proporcionen información falsa.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Interrupciones, errores técnicos o indisponibilidad temporal del Sitio.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Consecuencias derivadas del acceso de menores de edad mediante falsificación de datos.</li>
              </ul>
              <p className="mt-3">
                Cada participante asume plena responsabilidad personal por sus acciones
                y decisiones antes, durante y después de los eventos organizados por
                SwingerSV.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                6. Propiedad Intelectual
              </h2>
              <p>
                El nombre "SwingerSV", el logotipo, el diseño del Sitio y todos los
                contenidos publicados en www.swingersv.com son propiedad de SwingerSV
                y están protegidos por las leyes de propiedad intelectual aplicables.
                Queda prohibida su reproducción, distribución o uso sin autorización
                expresa y por escrito de SwingerSV.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                7. Legislación Aplicable y Jurisdicción
              </h2>
              <p>
                El presente Aviso Legal se rige por las leyes vigentes de la República
                de El Salvador. Para cualquier controversia derivada del acceso o uso
                del Sitio, o de la participación en actividades de SwingerSV, las partes
                se someten a los tribunales competentes de El Salvador, renunciando
                expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                8. Contacto
              </h2>
              <p>
                Para cualquier consulta relacionada con este Aviso Legal puede contactarnos
                a través de WhatsApp al número +503 6920-7547 o mediante el formulario
                de contacto disponible en el Sitio.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Declaración final: </span>
                SwingerSV es una comunidad que opera dentro del marco legal de El Salvador,
                basada en el respeto, el consentimiento y la libertad sexual entre adultos
                responsables. Cualquier actividad ilegal está expresamente prohibida y
                será denunciada ante las autoridades competentes.
              </p>
            </div>

            <div className="flex gap-6 pt-4 border-t border-border/40">
              <Link href="/terminos-de-uso" className="text-sm text-primary hover:underline">
                Términos de Uso
              </Link>
              <Link href="/politica-de-privacidad" className="text-sm text-primary hover:underline">
                Política de Privacidad
              </Link>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
