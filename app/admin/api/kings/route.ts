import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { sql, isDbConfigured } from "@/lib/db"

async function requireAdmin() {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")
  return session?.value === "authenticated"
}

const EDITABLE_COLUMNS = [
  "name",
  "image",
  "elected_date",
  "reign_until",
  "description",
  "sort_order",
] as const

export async function GET() {
  if (!isDbConfigured) {
    return NextResponse.json({ error: "La base de datos no está configurada" }, { status: 500 })
  }

  try {
    const kings = await sql`SELECT * FROM kings ORDER BY sort_order DESC`
    return NextResponse.json({ kings })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }
  if (!isDbConfigured) {
    return NextResponse.json({ error: "La base de datos no está configurada" }, { status: 500 })
  }

  const body = await request.json()
  const { kings } = body

  if (!Array.isArray(kings)) {
    return NextResponse.json(
      { error: 'Formato inválido: se espera un arreglo "kings"' },
      { status: 400 }
    )
  }

  try {
    const results = []
    for (const king of kings) {
      const { id, ...campos } = king
      if (!id) continue

      const entries = Object.entries(campos).filter(([key]) =>
        (EDITABLE_COLUMNS as readonly string[]).includes(key)
      )
      if (entries.length === 0) continue

      const setClause = entries.map(([key], i) => `${key} = $${i + 2}`).join(", ")
      const values = entries.map(([, value]) => value)

      const query = `UPDATE kings SET ${setClause} WHERE id = $1 RETURNING *`
      const updated = await sql(query, [id, ...values])
      results.push(updated[0])
    }

    return NextResponse.json({ kings: results })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST — agrega un nuevo reinado (ej. tras una nueva elección de Rey y Reina)
export async function POST(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }
  if (!isDbConfigured) {
    return NextResponse.json({ error: "La base de datos no está configurada" }, { status: 500 })
  }

  const king = await request.json()

  try {
    const [created] = await sql`
      INSERT INTO kings (name, image, elected_date, reign_until, description, sort_order)
      VALUES (${king.name}, ${king.image}, ${king.elected_date}, ${king.reign_until}, ${king.description}, ${king.sort_order})
      RETURNING *
    `
    return NextResponse.json({ king: created })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// DELETE — elimina un reinado por id (?id=...)
export async function DELETE(request: Request) {
  if (!(await requireAdmin())) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 })
  }
  if (!isDbConfigured) {
    return NextResponse.json({ error: "La base de datos no está configurada" }, { status: 500 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) {
    return NextResponse.json({ error: "Falta el parámetro id" }, { status: 400 })
  }

  try {
    await sql`DELETE FROM kings WHERE id = ${id}`
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
