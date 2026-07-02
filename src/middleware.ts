import { NextResponse, type NextRequest } from "next/server";
import { Language, LANGUAGE_COOKIE, LANGUAGES } from "@/utils/dictionary";

const ADMIN_ROUTE = "/admin";
const LEGACY_ROUTES: Record<string, string> = {
  "/djeca": "/djeca-penjanje",
  "/odrasli": "/odrasli-penjanje",
};

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the path is /admin or starts with /admin/
  if (pathname === ADMIN_ROUTE || pathname.startsWith(`${ADMIN_ROUTE}/`)) {
    return NextResponse.next();
  }

  // Get the preferred language from the cookie or default to 'en'
  const languageCookie = request.cookies.get(LANGUAGE_COOKIE);
  let language = languageCookie ? languageCookie.value : "sr";

  // Ensure the language is valid, default to 'en' if not
  if (!LANGUAGES.includes(language as Language)) {
    language = "sr";
  }

  const redirectToLegacyRoute = (locale: string, legacyPathname: string) => {
    const destination = LEGACY_ROUTES[legacyPathname];
    if (!destination) return null;

    const newUrl = new URL(`/${locale}${destination}`, request.url);
    const response = NextResponse.redirect(newUrl, 308);

    response.cookies.set({
      name: LANGUAGE_COOKIE,
      value: locale,
      path: "/",
    });

    return response;
  };

  // Check if the pathname already includes a locale
  const pathnameHasLocale = LANGUAGES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  const currentLocale = pathnameHasLocale ? pathname.split("/")[1] : language;
  const pathnameWithoutLocale = pathnameHasLocale
    ? pathname.replace(`/${currentLocale}`, "") || "/"
    : pathname;
  const legacyRedirect = redirectToLegacyRoute(
    currentLocale,
    pathnameWithoutLocale,
  );

  if (legacyRedirect) {
    return legacyRedirect;
  }

  // If the pathname doesn't have a locale, redirect to the appropriate language
  if (!pathnameHasLocale) {
    const newUrl = new URL(
      `/${language}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
      request.url,
    );

    const response = NextResponse.redirect(newUrl);

    // Set or update the language cookie
    response.cookies.set({
      name: LANGUAGE_COOKIE,
      value: language,
      path: "/",
    });

    return response;
  }

  // If the pathname has a locale but it doesn't match the cookie, update the cookie
  if (currentLocale !== language) {
    const response = NextResponse.next();
    response.cookies.set({
      name: LANGUAGE_COOKIE,
      value: currentLocale,
      path: "/",
    });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|admin|public).*)",
  ],
};
