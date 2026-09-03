import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { sql, isDbConfigured } from "@/lib/db"

async function requireAdmin() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return session?.value === "authenticated"
}

// Columnas editables desde el panel admin — sirve como lista blanca para
// que el PUT nunca ejecute SQL dinámico con nombres de columna arbitrarios.
const EDITABLE_COLUMNS = [
  "title",
  "date_label",
  "iso_date",
  "time_label",
  "location",
  "spots",
  "tag",
  "highlight",
  "image",
  "cta_type",
  "whatsapp_text",
  "active",
  "sort_order",
] as const

// GET — usado por el panel admin para cargar los eventos actuales
// (incluye inactivos, a diferencia de getUpcomingEvents() del sitio público)
export async function GET() {
  if (!isDbConfigured) {
    return NextResponse.json({ error: "La base de datos no está configurada" }, { status: 500 })
  }

  try {
    const events = await sql`SELECT * FROM events ORDER BY sort_order ASC`
    return NextResponse.json({ events })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT — actualiza uno o varios eventos (protegido)
export async function PUT(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }
  if (!isDbConfigured) {
    return NextResponse.json({ error: "La base de datos no está configurada" }, { status: 500 })
  }

  const body = await request.json()
  const { events } = body

  if (!Array.isArray(events)) {
    return NextResponse.json(
      { error: 'Formato inválido: se espera un arreglo "events"' },
      { status: 400 }
    )
  }

  try {
    const results = []
    for (const evento of events) {
      const { slug, ...campos } = evento
      if (!slug) continue

      // Construir solo con columnas permitidas, presentes en el objeto recibido
      const entries = Object.entries(campos).filter(([key]) =>
        (EDITABLE_COLUMNS as readonly string[]).includes(key)
      )
      if (entries.length === 0) continue

      const setClause = entries.map(([key], i) => `${key} = $${i + 2}`).join(", ")
      const values = entries.map(([, value]) => value)

      const query = `UPDATE events SET ${setClause} WHERE slug = $1 RETURNING *`
      const updated = await sql(query, [slug, ...values])
      results.push(updated[0])
    }

    return NextResponse.json({ events: results })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
