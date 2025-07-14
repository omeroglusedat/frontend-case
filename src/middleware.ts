import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);


export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/' || pathname.split('/').length < 3)
    return NextResponse.redirect(new URL('/tr/urunler/1', request.url));


  const res = intlMiddleware(request);
  return res;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};