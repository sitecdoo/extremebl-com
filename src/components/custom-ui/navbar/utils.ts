"use server";

import { cookies } from "next/headers";
import { LANGUAGE_COOKIE } from "@/utils/dictionary";
import { revalidateTag } from "next/cache";

export const changeLanguage = async (value: string) => {
  const cookieList = await cookies();

  cookieList.set(LANGUAGE_COOKIE, value, { path: "/" });

  revalidateTag("dict");
};
