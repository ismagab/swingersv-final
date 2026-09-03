import { neon } from "@neondatabase/serverless"

const connectionString = process.env.DATABASE_URL ?? ""

export const isDbConfigured = Boolean(connectionString)

// `sql` es una función de plantilla que ejecuta consultas parametrizadas
// de forma segura (evita inyección SQL) sobre Neon vía HTTP — ideal para
// funciones serverless de Next.js, sin manejo manual de conexiones/pool.
//
// Importante: este módulo SOLO debe importarse desde código de servidor
// (Server Components, Route Handlers). Nunca debe llegar al navegador,
// porque el connection string da acceso completo a la base de datos
// (a diferencia de Supabase, Neon no tiene una "anon key" pública segura
// para el cliente).
//
// Si DATABASE_URL no está configurado todavía, se usa un placeholder;
// el código que llama a `sql` siempre debe revisar `isDbConfigured` antes
// y usar datos de respaldo en su lugar, para que el sitio nunca truene.
export const sql = neon(connectionString || "postgres://user:pass@placeholder/db")
