import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  const { usuario, contrasena } = await request.json()

  const ADMIN_USER = process.env.ADMIN_USER
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

  if (!ADMIN_USER || !ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "El panel admin no está configurado (faltan variables de entorno)." },
      { status: 500 }
    )
  }

  if (usuario === ADMIN_USER && contrasena === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 horas
    })
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json(
    { ok: false, error: "Usuario o contraseña incorrectos" },
    { status: 401 }
  )
}
