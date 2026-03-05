import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="SwingerSV - De Parejas Para Parejas — Comunidad Swinger en El Salvador"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              La comunidad más exclusiva y discreta para adultos de mente
              abierta en El Salvador. Explora, conecta y disfruta con total
              privacidad.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "/#hero" },
                { label: "Nosotros", href: "/#about" },
                { label: "Fiestas", href: "/#events" },
                { label: "Reglas de Oro", href: "/#rules" },
                { label: "Reyes", href: "/#kings" },
                { label: "Singles", href: "/#singles" },
                { label: "Registro", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
              Comunidad
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Fiestas Swinger en El Salvador", href: "/fiestas-swinger-san-salvador" },
                { label: "Comunidad Swinger SV", href: "/comunidad-swinger-el-salvador" },
                { label: "Glosario Swinger", href: "/glosario-swinger" },
                { label: "Conoce a los Hosts", href: "/hosts-isma-gab" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
              Red Social
            </h4>
            <a
              href="https://x.com/swinger_sv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-lg border border-border/60 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@swinger_sv</span>
            </a>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Síguenos en X para enterarte de las próximas fiestas y novedades
              de la comunidad.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-border/40 pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            {/* +18 notice */}
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent bg-accent/20 text-xs font-bold text-accent-foreground">
                +18
              </span>
              <p className="text-xs text-muted-foreground">
                Este sitio es exclusivamente para personas mayores de 18 años.
              </p>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">
              {"© 2026 SwingerSV. Todos los derechos reservados."}
            </p>
          </div>

          {/* Legal */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 sm:justify-start">
            {[
              { label: "Términos de Uso", href: "/terminos-de-uso" },
              { label: "Política de Privacidad", href: "/politica-de-privacidad" },
              { label: "Aviso Legal", href: "/aviso-legal" },
            ].map((legal) => (
              <Link
                key={legal.href}
                href={legal.href}
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {legal.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
