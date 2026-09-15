import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// PT is served with no locale prefix ("/", "/services", ...). EN keeps an
// explicit "/en" prefix. "/pt/*" URLs redirect to their unprefixed form so
// there's a single canonical URL per page.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/pt" || pathname.startsWith("/pt/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/pt" ? "/" : pathname.slice(3);
    return NextResponse.redirect(url);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/pt${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Skip _next internals and any path with a file extension (public/ assets)
    "/((?!_next|.*\\..*).*)",
  ],
};
