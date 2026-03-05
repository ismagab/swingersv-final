import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Política de Privacidad | SwingerSV",
  description: "Política de privacidad y tratamiento de datos personales de SwingerSV.",
  alternates: {
    canonical: "https://www.swingersv.com/politica-de-privacidad",
  },
  robots: { index: false, follow: false },
}

export default function PoliticaPrivacidadPage() {
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
            Política de Privacidad
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">
            Última actualización: marzo 2026
          </p>

          <div className="flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                1. Responsable del Tratamiento de Datos
              </h2>
              <p>
                SwingerSV es una comunidad privada de adultos con sede en El Salvador.
                El responsable del tratamiento de los datos personales recopilados a través
                del Sitio www.swingersv.com y del proceso de registro es el equipo organizador
                de SwingerSV, contactable a través de WhatsApp al número +503 6920-7547.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                2. Datos que Recopilamos
              </h2>
              <p className="mb-3">
                A través del formulario de registro en el Sitio, recopilamos los siguientes
                datos personales de forma voluntaria:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Nombres de ambos miembros de la pareja.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Números de teléfono/WhatsApp.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Edades de ambos miembros.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Tiempo de relación o matrimonio.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Información sobre experiencia en el ambiente swinger.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Información sobre exámenes de ETS/ITS (de forma opcional).</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Redes sociales de pareja (de forma opcional).</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                3. Almacenamiento de Datos
              </h2>
              <p className="mb-3">
                SwingerSV <span className="font-semibold text-foreground">no almacena datos personales en el Sitio web</span> ni
                en bases de datos en línea. El formulario de registro envía la información
                directamente a través de WhatsApp al equipo organizador, donde es tratada
                de forma privada y confidencial únicamente para el proceso de validación.
              </p>
              <p>
                Una vez completado el proceso de validación, la información proporcionada
                se utiliza exclusivamente para la comunicación con los participantes sobre
                eventos y actividades de SwingerSV.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                4. Finalidad del Tratamiento de Datos
              </h2>
              <p className="mb-3">Los datos recopilados se utilizan exclusivamente para:</p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Verificar la identidad y mayoría de edad de los participantes.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Realizar el proceso de validación de nuevos miembros.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Comunicar información sobre próximos eventos y actividades.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Garantizar la seguridad y discreción de todos los participantes.</li>
              </ul>
              <p className="mt-3">
                Los datos personales <span className="font-semibold text-foreground">no serán compartidos, vendidos ni cedidos
                a terceros</span> bajo ninguna circunstancia.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                5. Confidencialidad y Discreción
              </h2>
              <p className="mb-3">
                SwingerSV se compromete a tratar toda la información personal de sus
                miembros con el más alto nivel de confidencialidad y discreción. En
                particular:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> La identidad de los miembros no será revelada a otros participantes sin su consentimiento.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> La información sobre la participación en eventos es estrictamente confidencial.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> No se publican listas de miembros ni información identificable en el Sitio.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Las ubicaciones de los eventos se comparten únicamente con participantes validados.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                6. Derechos del Usuario
              </h2>
              <p className="mb-3">
                De acuerdo con la legislación aplicable en El Salvador, los usuarios tienen
                derecho a:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Acceso:</span> Solicitar información sobre los datos personales que SwingerSV posee sobre usted.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Rectificación:</span> Solicitar la corrección de datos incorrectos o desactualizados.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Eliminación:</span> Solicitar la eliminación de sus datos personales y baja de la comunidad.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> <span className="font-semibold text-foreground">Oposición:</span> Oponerse al tratamiento de sus datos en cualquier momento.</li>
              </ul>
              <p className="mt-3">
                Para ejercer cualquiera de estos derechos, contáctenos por WhatsApp al
                número +503 6920-7547.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                7. Cookies y Tecnologías de Seguimiento
              </h2>
              <p>
                El Sitio puede utilizar cookies y tecnologías de análisis de tráfico web
                como Vercel Analytics para medir el rendimiento y uso del Sitio. Estos
                datos son anónimos y estadísticos, y no permiten identificar a usuarios
                individuales. No se utilizan cookies para publicidad ni para compartir
                información con terceros.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                8. Seguridad de los Datos
              </h2>
              <p>
                SwingerSV adopta medidas razonables para proteger la información personal
                de sus miembros. Sin embargo, dado que la comunicación se realiza a través
                de aplicaciones de mensajería como WhatsApp, la seguridad también depende
                de las medidas implementadas por dichas plataformas. Recomendamos a los
                usuarios utilizar versiones actualizadas de estas aplicaciones para mayor
                seguridad.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                9. Modificaciones a la Política de Privacidad
              </h2>
              <p>
                SwingerSV se reserva el derecho de actualizar esta Política de Privacidad
                en cualquier momento. Las modificaciones serán publicadas en el Sitio con
                indicación de la fecha de última actualización. El uso continuado del Sitio
                implica la aceptación de la política vigente.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                10. Contacto
              </h2>
              <p>
                Para cualquier consulta relacionada con esta Política de Privacidad o el
                tratamiento de sus datos personales, puede contactarnos por WhatsApp al
                número +503 6920-7547.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Compromiso: </span>
                La privacidad y discreción de nuestros miembros es nuestra prioridad
                absoluta. Tratamos cada dato personal con el máximo respeto y
                confidencialidad.
              </p>
            </div>

            <div className="flex gap-6 pt-4 border-t border-border/40">
              <Link href="/terminos-de-uso" className="text-sm text-primary hover:underline">
                Términos de Uso
              </Link>
              <Link href="/aviso-legal" className="text-sm text-primary hover:underline">
                Aviso Legal
              </Link>
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
