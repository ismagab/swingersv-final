import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Términos de Uso | SwingerSV",
  description: "Términos y condiciones de uso de SwingerSV. Comunidad swinger exclusiva para mayores de 18 años en El Salvador.",
  alternates: {
    canonical: "https://www.swingersv.com/terminos-de-uso",
  },
  robots: { index: false, follow: false },
}

export default function TerminosDeUsoPage() {
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
            Términos de Uso
          </h1>
          <p className="mb-12 text-sm text-muted-foreground">
            Última actualización: marzo 2026
          </p>

          <div className="flex flex-col gap-10 text-sm leading-relaxed text-muted-foreground">

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                1. Aceptación de los Términos
              </h2>
              <p>
                Al acceder y utilizar el sitio web www.swingersv.com (en adelante "el Sitio"),
                así como al participar en cualquier evento, actividad o comunicación organizada
                por SwingerSV, usted acepta de forma expresa, voluntaria e irrevocable los
                presentes Términos de Uso en su totalidad. Si no está de acuerdo con alguno
                de estos términos, deberá abstenerse de utilizar el Sitio y de participar en
                cualquier actividad organizada por SwingerSV.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                2. Restricción de Edad — Solo Mayores de 18 Años
              </h2>
              <p className="mb-3">
                SwingerSV es una plataforma y comunidad <span className="font-semibold text-foreground">exclusivamente para personas mayores de 18 años</span>.
                El acceso, registro y participación en cualquier actividad organizada por
                SwingerSV está estrictamente prohibido para menores de edad.
              </p>
              <p className="mb-3">
                Al utilizar este Sitio y al completar el formulario de registro, usted declara
                y garantiza bajo su entera responsabilidad que:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Tiene 18 años de edad o más.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Ambos miembros de la pareja o la persona individual son mayores de 18 años.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> La información proporcionada en el formulario de registro es verídica y correcta.</li>
              </ul>
              <p className="mt-3">
                SwingerSV se reserva el derecho de verificar la mayoría de edad de cualquier
                participante y de expulsar de forma inmediata y permanente a cualquier persona
                que haya proporcionado información falsa respecto a su edad, así como de tomar
                las acciones legales correspondientes.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                3. Naturaleza Consensuada de las Actividades
              </h2>
              <p className="mb-3">
                Todas las actividades, encuentros e interacciones que ocurren en el marco de
                los eventos organizados por SwingerSV son de naturaleza <span className="font-semibold text-foreground">estrictamente consensuada</span>.
                Esto significa que:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Toda participación es libre, voluntaria y sin presión de ningún tipo.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> El consentimiento puede ser retirado en cualquier momento por cualquier participante.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Un "NO" expresado por cualquier persona debe ser respetado de forma inmediata y sin cuestionamientos.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Ningún participante puede ser presionado, coaccionado ni manipulado para participar en actividad alguna.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Ambos miembros de cada pareja deben haber expresado su acuerdo voluntario previo a participar.</li>
              </ul>
              <p className="mt-3">
                Cualquier conducta que viole el principio de consentimiento resultará en
                expulsión inmediata y permanente de la comunidad, y podrá ser reportada
                ante las autoridades competentes de la República de El Salvador.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                4. Prohibición Absoluta de Prostitución
              </h2>
              <p className="mb-3">
                SwingerSV tiene una política de <span className="font-semibold text-foreground">cero tolerancia hacia cualquier forma de prostitución</span>,
                comercio sexual o intercambio de servicios sexuales por dinero u otros bienes.
              </p>
              <p className="mb-3">
                Queda estrictamente prohibido:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Ofrecer, solicitar o acordar servicios sexuales a cambio de dinero, regalos, favores o cualquier otra contraprestación.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Utilizar los eventos o canales de comunicación de SwingerSV para promover, facilitar o coordinar actividades de prostitución.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Asistir a eventos de SwingerSV con fines comerciales o lucrativos de naturaleza sexual.</li>
              </ul>
              <p className="mt-3">
                Toda actividad dentro de SwingerSV es por placer mutuo, libre y consensuado
                entre adultos. Cualquier violación a esta política resultará en expulsión
                inmediata, permanente y podrá ser denunciada ante las autoridades competentes.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                5. Prohibición del Uso de Estupefacientes y Sustancias Ilegales
              </h2>
              <p className="mb-3">
                SwingerSV prohíbe de forma absoluta el consumo, distribución, venta o
                posesión de <span className="font-semibold text-foreground">drogas, estupefacientes o cualquier sustancia ilegal</span> en
                el marco de sus eventos y actividades.
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Queda prohibido asistir a eventos bajo los efectos de sustancias ilegales.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Queda prohibido introducir, ofrecer o distribuir sustancias ilegales en cualquier evento.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> SwingerSV no se hace responsable por las acciones de participantes que infrinjan esta norma.</li>
              </ul>
              <p className="mt-3">
                Cualquier persona detectada consumiendo o distribuyendo sustancias ilegales
                será expulsada de forma inmediata del evento y de la comunidad, y el caso
                podrá ser reportado ante las autoridades de la República de El Salvador.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                6. Privacidad y Confidencialidad
              </h2>
              <p className="mb-3">
                La privacidad y discreción son valores fundamentales de SwingerSV. En consecuencia:
              </p>
              <ul className="flex flex-col gap-2 pl-4">
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Queda estrictamente prohibido tomar fotografías, videos o cualquier tipo de grabación de otros participantes sin su consentimiento explícito.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> Queda prohibido revelar la identidad, datos personales o participación de terceros en eventos de SwingerSV.</li>
                <li className="flex items-start gap-2"><span className="text-primary shrink-0">•</span> La ubicación de los eventos es información confidencial que no puede ser compartida con personas no validadas.</li>
              </ul>
              <p className="mt-3">
                La violación de estas normas de privacidad resultará en expulsión inmediata
                y permanente, y podrá dar lugar a acciones legales por parte de los afectados.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                7. Proceso de Validación y Responsabilidad
              </h2>
              <p>
                SwingerSV realiza un proceso de validación previo para todos los participantes.
                Sin embargo, dicho proceso no garantiza el comportamiento de los participantes
                durante los eventos. Cada participante es responsable de sus propias acciones
                y decisiones. SwingerSV, sus organizadores y anfitriones no son responsables
                por incidentes, daños o perjuicios derivados del comportamiento individual
                de los participantes durante los eventos.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                8. Modificaciones a los Términos
              </h2>
              <p>
                SwingerSV se reserva el derecho de modificar los presentes Términos de Uso
                en cualquier momento. Las modificaciones entrarán en vigencia desde el momento
                de su publicación en el Sitio. El uso continuado del Sitio o la participación
                en eventos de SwingerSV después de dichas modificaciones implica la aceptación
                de los nuevos términos.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                9. Legislación Aplicable
              </h2>
              <p>
                Los presentes Términos de Uso se rigen por las leyes vigentes de la
                República de El Salvador. Cualquier controversia derivada del uso del
                Sitio o de la participación en actividades de SwingerSV será sometida
                a los tribunales competentes de El Salvador.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-foreground font-[var(--font-playfair)]">
                10. Contacto
              </h2>
              <p>
                Para cualquier consulta relacionada con estos Términos de Uso puede
                contactarnos a través de WhatsApp al número +503 6920-7547 o mediante
                el formulario de contacto disponible en el Sitio.
              </p>
            </div>

            <div className="rounded-xl border border-primary/30 bg-primary/5 p-6">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Importante: </span>
                Al completar el formulario de registro y participar en cualquier evento
                de SwingerSV, usted confirma haber leído, comprendido y aceptado en su
                totalidad los presentes Términos de Uso.
              </p>
            </div>

            <div className="flex gap-6 pt-4 border-t border-border/40">
              <Link href="/politica-de-privacidad" className="text-sm text-primary hover:underline">
                Política de Privacidad
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
