import { UserCheck, Users, Star, ShieldCheck } from "lucide-react"

const WHATSAPP_NUMBER = "50369207547"
const UNICORN_MESSAGE =
  "Hola, soy mujer soltera (Unicornio) y me gustaría saber más sobre SwingerSV"
const UNICORN_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(UNICORN_MESSAGE)}`

export function SinglesSection() {
  return (
    <section id="singles" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            Singles y Unicornios
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-[var(--font-playfair)] text-balance">
            También hay espacio para ti
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Aunque SwingerSV es de parejas para parejas, entendemos que el
            ambiente swinger incluye a personas individuales que comparten
            nuestros valores de respeto y discreción.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Singles card */}
          <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
              <Users className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground font-[var(--font-playfair)]">
              Singles (Hombres Solteros)
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Los hombres solteros pueden asistir a nuestras fiestas bajo las
              siguientes condiciones:
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <UserCheck className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Invitación de una pareja:{" "}
                  </span>
                  Un single puede asistir únicamente si una pareja activa de la
                  comunidad lo invita.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Validación por 3 parejas:{" "}
                  </span>
                  Si 3 parejas validadas de la comunidad recomiendan a un
                  single, este obtiene libre acceso a las fiestas porque se ha
                  ganado la confianza del ambiente.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Mismas reglas:{" "}
                  </span>
                  Aplican exactamente las mismas reglas de oro: NO es NO, respeto
                  absoluto y cero presiones.
                </p>
              </div>
            </div>
          </div>

          {/* Unicorns card */}
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-7 w-7 text-primary"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-foreground font-[var(--font-playfair)]">
              Unicornios (Mujeres Solteras)
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Las mujeres solteras, conocidas en el ambiente como
              {" "}<span className="font-semibold text-primary">Unicornios</span>,
              tienen el <span className="font-semibold text-foreground">100% de acceso</span> a
              nuestras fiestas. Su presencia es bienvenida siempre.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              Solo necesitan completar un proceso simple de validación para
              garantizar la seguridad de todos. Las mismas reglas de oro aplican
              para ellas: respeto, consentimiento y libertad.
            </p>

            <a
              href={UNICORN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-[#fff] transition-all hover:opacity-90 hover:shadow-lg hover:shadow-[#25D366]/30"
            >
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M16.004 2.667A13.26 13.26 0 0 0 2.73 15.94a13.18 13.18 0 0 0 1.796 6.629L2.667 29.333l6.982-1.832A13.27 13.27 0 0 0 16.004 29.333 13.334 13.334 0 1 0 16.004 2.667Zm0 24.29a11.02 11.02 0 0 1-5.608-1.534l-.403-.239-4.173 1.094 1.114-4.073-.263-.418a10.95 10.95 0 0 1-1.684-5.847 11.018 11.018 0 1 1 11.017 11.018Z"
                  fill="#fff"
                />
                <path
                  d="M22.86 18.896c-.374-.188-2.215-1.093-2.559-1.218-.344-.125-.594-.188-.844.188-.25.374-.969 1.218-1.188 1.468-.218.25-.437.28-.812.094-.374-.188-1.58-.583-3.01-1.857-1.113-.991-1.864-2.215-2.083-2.59-.219-.374-.023-.576.164-.763.169-.168.375-.437.562-.656.188-.218.25-.374.375-.624.125-.25.063-.468-.031-.656-.094-.188-.844-2.034-1.156-2.784-.305-.731-.614-.632-.844-.643-.218-.01-.468-.013-.718-.013s-.656.094-1 .468c-.344.375-1.312 1.282-1.312 3.126s1.343 3.626 1.531 3.876c.187.25 2.644 4.036 6.406 5.66.895.386 1.593.616 2.138.789.898.286 1.715.246 2.361.149.72-.108 2.216-.906 2.529-1.781.313-.875.313-1.625.219-1.781-.094-.157-.344-.25-.719-.438Z"
                  fill="#fff"
                />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
