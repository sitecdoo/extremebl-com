import { leagueSpartan, openSans } from "@/styles/fonts";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/custom-ui/footer";
import Navbar from "@/components/custom-ui/navbar/navbar";
import { Toaster } from "@/components/ui/sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return ["en,sr"].map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.variable} ${openSans.variable} bg-neutrals-50 font-league-spartan antialiased`}
      >
        <div className="relative overflow-x-clip">
          <NextTopLoader color="#517B83" height={4} showSpinner={false} />
          <Navbar />
          <div className="mx-auto flex w-full max-w-[108rem] flex-col items-center overflow-clip px-4 lg:px-12 3xl:overflow-x-visible">
            <NuqsAdapter>{children}</NuqsAdapter>
          </div>
          <Footer />
        </div>
        <Toaster
          position="top-center"
          toastOptions={{
            classNames: {
              error: "bg-red-500 border-0",
              success: "bg-green-500 border-0",
            },
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-4W4SS60P0P" />
    </html>
  );
}
