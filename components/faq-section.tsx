"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "¿Estoy obligado a participar?",
    a: "No. Nadie está obligado a nada. Todo depende del clic entre parejas. El NO es NO y siempre se respeta sin excepciones.",
  },
  {
    q: "¿Pueden ayudarme a convencer a mi pareja?",
    a: "No fomentamos obligar a nadie. Asistir a SwingerSV debe ser una decisión basada en comunicación, confianza y amor entre ambos.",
  },
  {
    q: "¿Es necesario participar con quien nos busque?",
    a: "No. Primero se conversa. Si hay atracción mutua, pueden usar las áreas privadas. Puerta abierta o cerrada — es decisión de cada pareja.",
  },
  {
    q: "Somos nuevos, ¿necesitamos experiencia previa?",
    a: "No. Muchas parejas inician sin experiencia. No es obligatorio interactuar, pero buscamos parejas con genuino interés en el ambiente, no solo curiosos que lleguen a observar.",
  },
  {
    q: "¿Qué puede verse en las fiestas?",
    a: "Conversaciones, conexiones, exhibicionismo, tríos o intercambios. Solo ves lo que cada pareja decide mostrar libremente.",
  },
  {
    q: "¿Hay singles o unicornios en las fiestas?",
    a: "Sí, siempre validados previamente. Su participación depende del clic y la química con cada pareja.",
  },
  {
    q: "¿Si mi pareja está en su período podemos asistir?",
    a: "Sí. Pueden asistir perfectamente a conocer parejas, socializar y hacer conexiones.",
  },
  {
    q: "¿Si tengo novia puedo asistir solo?",
    a: "Buscamos parejas estables, maduras y emocionalmente comprometidas. Los singles tienen un proceso de validación específico.",
  },
  {
    q: "¿Dónde son las fiestas?",
    a: "La ubicación exacta se comparte un día antes únicamente a las parejas reservadas o validadas. Es por seguridad y discreción de todos los asistentes.",
  },
  {
    q: "¿Hay membresía o cuota mensual?",
    a: "No. Solo se paga cover por pareja en cada evento para cubrir logística y alquiler del lugar.",
  },
  {
    q: "¿Es obligatorio el examen de ETS?",
    a: "Sí. Para ingresar por primera vez ambos deben presentar exámenes de ETS recientes. El uso de condón es siempre obligatorio. Trabajamos con ONGs para facilitar chequeos y garantizar la tranquilidad de toda la comunidad.",
  },
  {
    q: "¿Qué pasa si alguien sale positivo en exámenes de ETS?",
    a: "La ONG y el Ministerio de Salud dan seguimiento personalizado. Como comunidad no manejamos ni divulgamos resultados — la privacidad médica es absoluta.",
  },
  {
    q: "¿Qué pasa si alguien se sobrepasa conmigo o con mi pareja?",
    a: "Si sucede, acérquense inmediatamente a los organizadores y expliquen la situación. Manejamos un sistema de strikes: dependiendo de la gravedad, puede ser desde advertencia hasta expulsión inmediata. Trabajamos para que sea un espacio seguro para todos.",
  },
  {
    q: "¿Encontraremos modelos o parejas 'perfectas'?",
    a: "No buscamos cuerpos perfectos, sino afinidad y respeto. Hay diversidad de edades, cuerpos y estilos. Lo importante es la actitud.",
  },
  {
    q: "¿Y si no nos gusta el ambiente?",
    a: "Están en su pleno derecho de retirarse cuando quieran, sin ninguna presión ni cuestionamiento.",
  },
  {
    q: "¿Es obligatorio seguir la temática de las fiestas?",
    a: "Sí. La temática es parte de la experiencia — ayuda a salir de la rutina y le da variedad y emoción a la relación.",
  },
  {
    q: "¿Qué tipo de personas asisten?",
    a: "Parejas discretas, respetuosas y validadas que conocen y respetan la regla de oro: NO es NO.",
  },
  {
    q: "¿Qué pasa si encuentro a un conocido en la fiesta?",
    a: "La discreción es clave para todos. Si se sienten incómodos con la situación, pueden acudir a los organizadores discretamente.",
  },
  {
    q: "¿Ser swinger significa que podré intimar con cualquier pareja?",
    a: "No. Ser swinger no garantiza nada. Cada pareja busca su propia afinidad y tiene sus propios gustos. Es fundamental entrar con esta mentalidad para vivir una experiencia sana y respetuosa.",
  },
]

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border/60 bg-card overflow-hidden transition-all hover:border-primary/40">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3">
          <span className="shrink-0 text-xs font-bold text-primary/60 font-[var(--font-playfair)] mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold text-foreground leading-relaxed">
            {q}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 mt-0.5 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <div className="ml-7 border-l-2 border-primary/20 pl-4">
            <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Resolvemos tus dudas
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Todo lo que necesitas saber antes de dar el paso. Si tu duda no está
            aquí, escríbenos por WhatsApp.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto max-w-3xl flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        {/* Nota final */}
        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/30 bg-primary/5 p-6 text-center">
          <p className="text-sm leading-relaxed text-foreground">
            <span className="font-semibold text-primary">Recuerda: </span>
            No prometemos que la pasarán 100% perfecta, pero sí trabajamos para
            que sea un espacio seguro, respetuoso y discreto.{" "}
            <span className="font-semibold text-foreground">
              El ambiente lo pone cada pareja.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
