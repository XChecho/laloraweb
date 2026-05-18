import { auth } from "@/auth"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  const isAdminRoute = nextUrl.pathname.startsWith('/admin')
  const isLoginPage = nextUrl.pathname.startsWith('/login')

  if (isAdminRoute && !isLoggedIn) {
    return Response.redirect(new URL('/login/', nextUrl))
  }

  if (isLoginPage && isLoggedIn) {
    return Response.redirect(new URL('/admin/', nextUrl))
  }
})

export const config = {
  matcher: ['/admin/:path*', '/login/'],
}
