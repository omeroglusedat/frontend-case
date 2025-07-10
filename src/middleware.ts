import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);


export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/' || pathname.split('/').length < 3)
    return NextResponse.redirect(new URL('/tr/urunler', request.url));


  const res = intlMiddleware(request);
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
  ]
};