import { sql, isDbConfigured } from "@/lib/db"

export type King = {
  id: string
  name: string
  image: string
  electedDate: string
  reignUntil: string
  description: string
  sortOrder: number
}

// Datos de respaldo — se usan solo si la base de datos no está configurada
// todavía o si ocurre un error de conexión, para que el sitio nunca
// se caiga por falta de datos.
export const fallbackKings: King[] = [
  {
    id: "fallback-1",
    name: "Esposos Rodríguez",
    image: "/images/king1.jpg",
    electedDate: "Septiembre 2025",
    reignUntil: "Septiembre 2026",
    description: "Reconocidos por su carisma y respeto, muy queridos en la comunidad.",
    sortOrder: 1,
  },
  {
    id: "fallback-2",
    name: "Esposos Axel y Gaby",
    image: "/images/king2.jpg",
    electedDate: "Mayo 2024",
    reignUntil: "Septiembre 2025",
    description: "Embajadores del respeto y la confianza en cada evento.",
    sortOrder: 2,
  },
  {
    id: "fallback-3",
    name: "Esposos R y K",
    image: "/images/king3.jpg",
    electedDate: "Mayo 2023",
    reignUntil: "Mayo 2024",
    description: "Pioneros en fortalecer los lazos de la comunidad SwingerSV.",
    sortOrder: 3,
  },
  {
    id: "fallback-4",
    name: "Esposos SanSan",
    image: "/images/king4.jpg",
    electedDate: "Abril 2022",
    reignUntil: "Mayo 2023",
    description: "Su energía y entusiasmo marcaron un antes y un después.",
    sortOrder: 4,
  },
]

// ── Fila tal como se guarda en la tabla `kings` de Neon ───
type KingRow = {
  id: string
  name: string
  image: string
  elected_date: string
  reign_until: string
  description: string
  sort_order: number
}

function rowToKing(row: KingRow): King {
  return {
    id: row.id,
    name: row.name,
    image: row.image,
    electedDate: row.elected_date,
    reignUntil: row.reign_until,
    description: row.description,
    sortOrder: row.sort_order,
  }
}

/**
 * Trae los reyes desde Neon, ordenados por `sort_order` descendente
 * (el reinado más reciente primero). Si la base de datos no está configurada o
 * falla la consulta, regresa los datos de respaldo.
 */
export async function getKings(): Promise<King[]> {
  if (!isDbConfigured) {
    return fallbackKings
  }

  try {
    const rows = (await sql`
      SELECT * FROM kings
      ORDER BY sort_order DESC
    `) as KingRow[]

    return rows.map(rowToKing)
  } catch (err) {
    console.error("[SwingerSV] Error leyendo reyes de Neon:", err)
    return fallbackKings
  }
}
