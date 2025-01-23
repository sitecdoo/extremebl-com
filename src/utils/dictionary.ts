import "server-only";
import { cookies, headers } from "next/headers";
import en from "@/translations/en.json";
import sr from "@/translations/sr.json";

export const LANGUAGE_COOKIE = "LOCALE";
export const LANGUAGES = ["sr", "en"] as const;

export type Languages = typeof LANGUAGES;
export type Language = (typeof LANGUAGES)[number];

const dictionaries = {
  en,
  sr,
};

export const getLanguage = async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  const locale = cookieStore.get(LANGUAGE_COOKIE)?.value as Language;
  if (LANGUAGES.includes(locale)) return locale;

  const acceptedLanguage = headersList
    .get("Accept-Language")
    ?.split(";")
    .map((lang) => lang.split("-").at(0))
    .find((lang) => LANGUAGES.includes(lang as Language));

  const language = acceptedLanguage || "en";

  return language as Language;
};

export const getDictionary = async (lang?: Language) => {
  const language = lang || (await getLanguage());
  const dict = dictionaries[language];
  return dict;
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
