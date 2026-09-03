import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/admin/login" || pathname.startsWith("/api/auth")) {
    return NextResponse.next()
  }

  if (pathname.startsWith("/admin")) {
    const session = request.cookies.get("admin_session")
    if (!session || session.value !== "authenticated") {
      const loginUrl = new URL("/admin/login", request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
