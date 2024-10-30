import { League_Spartan, Open_Sans } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  fallback: ["Open Sans"],
});
