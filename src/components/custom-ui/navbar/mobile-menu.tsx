"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Facebook, Instagram, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationItem } from "./navbar-config";
import Typography from "@/components/custom-ui/typography";
import Image from "next/image";
import LanguageSelector from "./language-selector";
import { useCallback, useEffect, useState } from "react";
import { Language, Languages } from "@/utils/dictionary";

const MobileMenu = ({
  languages,
  currentLanguage,
  navigation,
}: {
  languages: Languages;
  currentLanguage: Language;
  navigation: NavigationItem;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen == true)
      document.body.setAttribute("data-scroll-no-lock", "true");
    else document.body.removeAttribute("data-scroll-no-lock");
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="transparent" className="flex size-6 p-0">
            <Menu size={24} />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="h-full w-full overflow-y-auto border-none bg-blue-400"
        >
          <SheetHeader>
            <SheetTitle>
              <Image
                width="70"
                height="48"
                alt="extreme logo"
                src="/navbar-logo.svg"
                className="h-7 w-11 md:h-9 md:w-12 xl:h-11 xl:w-16"
              />
            </SheetTitle>
            <SheetDescription hidden />
          </SheetHeader>
          <nav className="flex h-full flex-col justify-between px-6">
            {/* Main Navigation */}
            <div>
              <div className="flex flex-col gap-5 pb-6 pt-12">
                {navigation.main.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-lg font-medium text-neutrals-50 hover:text-neutrals-200"
                    onClick={onClose}
                  >
                    <Typography variant="h4" fontWeight="bold">
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </div>

              {/* Secondary Navigation */}
              <div className="flex flex-col gap-4 py-4">
                {navigation.secondary.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-lg font-medium text-neutrals-50 hover:text-neutrals-200"
                    onClick={onClose}
                  >
                    <Typography>{item.label}</Typography>
                  </Link>
                ))}
              </div>
            </div>
            {/* Social Links */}

            <div className="flex items-center justify-between gap-2 pb-8 text-neutrals-50 lg:text-neutrals-800">
              <div className="flex gap-6">
                <div className="size-6">
                  <Link href="https://www.facebook.com/extremebl/">
                    <Facebook size={24} />
                  </Link>
                </div>
                <div className="size-6">
                  <Link href="https://www.facebook.com/extremebl/">
                    <Instagram size={24} />
                  </Link>
                </div>
              </div>
              <LanguageSelector
                languages={languages}
                currentLanguage={currentLanguage}
              />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
