import { NextResponse, type NextRequest } from "next/server";
import { Language, LANGUAGE_COOKIE, LANGUAGES } from "@/utils/dictionary";

const ADMIN_ROUTE = "/admin";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the path is /admin or starts with /admin/
  if (pathname === ADMIN_ROUTE || pathname.startsWith(`${ADMIN_ROUTE}/`)) {
    return NextResponse.next();
  }

  // Get the preferred language from the cookie or default to 'en'
  const languageCookie = request.cookies.get(LANGUAGE_COOKIE);
  let language = languageCookie ? languageCookie.value : "en";

  // Ensure the language is valid, default to 'en' if not
  if (!LANGUAGES.includes(language as Language)) {
    language = "en";
  }

  // Check if the pathname already includes a locale
  const pathnameHasLocale = LANGUAGES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

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
  const currentLocale = pathname.split("/")[1];
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
