"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

const inputClasses =
  "rounded-lg border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary w-full"
const labelClasses =
  "text-xs font-medium uppercase tracking-wider text-muted-foreground"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    const payload = {
      name1: formData.get("name1"),
      name2: formData.get("name2"),
      whatsapp1: formData.get("whatsapp1"),
      whatsapp2: formData.get("whatsapp2"),
      age1: formData.get("age1"),
      age2: formData.get("age2"),
      relationshipTime: formData.get("relationship-time"),
      fantasies: formData.get("fantasies"),
      etsExam: formData.get("ets-exam"),
      healthCommitment: formData.get("health-commitment"),
      socialMedia: formData.get("social-media"),
    }

    const textoMensaje =
      `*Nueva Solicitud de Pareja - SwingerSV*%0A%0A` +
      `*Persona 1:* ${payload.name1} (${payload.age1} años)%0A` +
      `*Persona 2:* ${payload.name2} (${payload.age2} años)%0A` +
      `*WhatsApp 1:* ${payload.whatsapp1}%0A` +
      `*WhatsApp 2:* ${payload.whatsapp2}%0A` +
      `*Tiempo de relación:* ${payload.relationshipTime}%0A` +
      `*Fantasías:* ${payload.fantasies}%0A` +
      `*Examen ETS:* ${payload.etsExam}%0A` +
      `*Compromiso salud:* ${payload.healthCommitment}%0A` +
      `*Redes:* ${payload.socialMedia || "No indicaron"}`

    const miNumero = "50369207547"
    const whatsappUrl = `https://wa.me/${miNumero}?text=${textoMensaje}`

    try {
      window.open(whatsappUrl, "_blank")
      setSubmitted(true)
    } catch (err) {
      setError("No se pudo abrir WhatsApp. Por favor, intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Registro de Parejas
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            ¿Quieren ser parte de la comunidad?
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Completen el siguiente formulario como pareja. Toda la información
            será enviada de forma privada a nuestro equipo. Nos comunicaremos
            por WhatsApp.
          </p>
        </div>

        {/* Form */}
        {submitted ? (
          <div className="rounded-xl border-2 border-primary bg-primary/5 p-12 text-center"
            style={{ boxShadow: "0 0 30px 6px rgba(255,204,0,0.25), 0 0 80px 20px rgba(255,204,0,0.10)" }}>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-foreground">
              ¡Solicitud enviada!
            </h3>
            <p className="text-sm text-muted-foreground">
              Gracias por su interés. Revisaremos su solicitud y nos
              comunicaremos por WhatsApp de forma discreta en las próximas 24-48
              horas.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border-2 border-primary bg-card p-8 sm:p-10"
            style={{ boxShadow: "0 0 30px 6px rgba(255,204,0,0.25), 0 0 80px 20px rgba(255,204,0,0.10)" }}
          >
            {/* Section: Datos de la pareja */}
            <div className="mb-8">
              <h3 className="mb-1 text-sm font-semibold text-primary uppercase tracking-wider">
                Datos de la Pareja
              </h3>
              <p className="mb-6 text-xs text-muted-foreground">
                Necesitamos los datos de ambos miembros de la pareja.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name1" className={labelClasses}>Nombre completo — Persona 1</label>
                  <input id="name1" name="name1" type="text" required placeholder="Nombre completo" className={inputClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name2" className={labelClasses}>Nombre completo — Persona 2</label>
                  <input id="name2" name="name2" type="text" required placeholder="Nombre completo" className={inputClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="whatsapp1" className={labelClasses}>WhatsApp — Persona 1</label>
                  <input id="whatsapp1" name="whatsapp1" type="tel" required placeholder="+503 0000-0000" className={inputClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="whatsapp2" className={labelClasses}>WhatsApp — Persona 2</label>
                  <input id="whatsapp2" name="whatsapp2" type="tel" required placeholder="+503 0000-0000" className={inputClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="age1" className={labelClasses}>Edad — Persona 1</label>
                  <input id="age1" name="age1" type="number" min={18} required placeholder="18+" className={inputClasses} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="age2" className={labelClasses}>Edad — Persona 2</label>
                  <input id="age2" name="age2" type="number" min={18} required placeholder="18+" className={inputClasses} />
                </div>
              </div>
            </div>

            {/* Section: Relación */}
            <div className="mb-8 border-t border-border/40 pt-8">
              <h3 className="mb-1 text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre su Relación
              </h3>
              <p className="mb-6 text-xs text-muted-foreground">
                Queremos conocerlos mejor como pareja.
              </p>
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="relationship-time" className={labelClasses}>
                    ¿Cuánto tiempo llevan de relación o matrimonio?
                  </label>
                  <input
                    id="relationship-time"
                    name="relationship-time"
                    type="text"
                    required
                    placeholder="Ej: 3 años de matrimonio, 5 años de relación..."
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="fantasies" className={labelClasses}>
                    ¿Cuáles son las fantasías ya cumplidas o son nuevos en el ambiente?
                  </label>
                  <textarea
                    id="fantasies"
                    name="fantasies"
                    rows={3}
                    required
                    placeholder="Cuéntenos si ya tienen experiencia en el ambiente swinger o si son nuevos. Mencionen fantasías cumplidas si aplica..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>
            </div>

            {/* Section: Salud */}
            <div className="mb-8 border-t border-border/40 pt-8">
              <h3 className="mb-1 text-sm font-semibold text-primary uppercase tracking-wider">
                Salud Sexual
              </h3>
              <p className="mb-6 text-xs text-muted-foreground">
                La salud es prioridad para toda la comunidad.
              </p>
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="ets-exam" className={labelClasses}>
                    Último examen de ETS (indicar el mes y año)
                  </label>
                  <input
                    id="ets-exam"
                    name="ets-exam"
                    type="text"
                    required
                    placeholder="Ej: Enero 2026, o 'No nos hemos realizado'"
                    className={inputClasses}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="health-commitment" className={labelClasses}>
                    ¿Están dispuestos a cuidar su salud sexual y la del ambiente?
                  </label>
                  <select
                    id="health-commitment"
                    name="health-commitment"
                    required
                    className={inputClasses}
                    defaultValue=""
                  >
                    <option value="" disabled>Seleccionen una opción</option>
                    <option value="si">Sí, estamos dispuestos a realizarnos exámenes</option>
                    <option value="ya-tenemos">Ya contamos con exámenes recientes</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Redes sociales — opcional */}
            <div className="mb-8 border-t border-border/40 pt-8">
              <h3 className="mb-1 text-sm font-semibold text-primary uppercase tracking-wider">
                Redes Sociales <span className="text-muted-foreground normal-case font-normal">(opcional)</span>
              </h3>
              <p className="mb-6 text-xs text-muted-foreground">
                Si tienen perfiles de pareja swinger, compartan sus redes.
              </p>
              <div className="flex flex-col gap-2">
                <label htmlFor="social-media" className={labelClasses}>
                  Redes sociales de pareja swinger
                </label>
                <textarea
                  id="social-media"
                  name="social-media"
                  rows={2}
                  placeholder="Ej: Instagram @pareja_sv, Telegram, SDC, etc. Si no tienen, dejen en blanco."
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            {/* Consent checkboxes */}
            <div className="border-t border-border/40 pt-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="mutual-consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-border accent-primary shrink-0"
                  />
                  <label htmlFor="mutual-consent" className="text-xs leading-relaxed text-muted-foreground">
                    Confirmamos que ambos miembros de la pareja están de acuerdo
                    en participar en las actividades de SwingerSV de forma libre
                    y voluntaria.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="age-consent"
                    required
                    className="mt-1 h-4 w-4 rounded border-border accent-primary shrink-0"
                  />
                  <label htmlFor="age-consent" className="text-xs leading-relaxed text-muted-foreground">
                    Confirmamos que ambos somos mayores de 18 años y aceptamos
                    las reglas de la comunidad, incluyendo que NO es NO, que cada
                    pareja va a su ritmo y que no se permite la prostitución.
                  </label>
                </div>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-center text-sm text-destructive-foreground">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,204,0,0.3)] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar Solicitud de Pareja
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
