import { NextResponse, type NextRequest } from "next/server";
import { LANGUAGE_COOKIE, getLanguage } from "@/utils/dictionary";

export async function middleware(request: NextRequest) {
  const language = await getLanguage();

  if (request.cookies.get(LANGUAGE_COOKIE)?.value === language) return;

  // Set the locale cookie
  const response = NextResponse.next();
  response.cookies.set({
    name: LANGUAGE_COOKIE,
    value: language,
    path: "/",
  });

  return response;
}
