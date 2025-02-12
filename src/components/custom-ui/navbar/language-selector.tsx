"use client";

import * as React from "react";
import { ChevronDown, Earth } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { changeLanguage } from "./utils";
import Link from "next/link";
import { Language, Languages } from "@/utils/dictionary";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Typography from "../typography";

const LanguageSelector = ({
  languages,
  currentLanguage,
}: {
  languages: Languages;
  currentLanguage: Language;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const pathname = usePathname();
  const redirectedPathname = (language: Language) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = language;
    return segments.join("/");
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="transparent"
          size="icon"
          className="size-12 gap-0 p-0 text-neutrals-50 hover:bg-inherit hover:text-neutrals-200 active:bg-inherit lg:size-8 lg:text-neutrals-800 hover:lg:bg-neutrals-75 hover:lg:text-inherit xl:size-12"
        >
          <Earth className="size-6 lg:size-4 xl:size-6" />
          <ChevronDown
            className={cn(
              "size-6 transition-transform duration-200 lg:size-4 xl:size-6",
              isOpen && "rotate-180",
            )}
          />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="w-48 p-0 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]"
        collisionPadding={10}
      >
        <DropdownMenuItem className="p-0">
          <ToggleGroup
            type="single"
            defaultValue="Srpski"
            className="flex w-full flex-col bg-neutrals-100 p-3"
          >
            {languages.map((lang, index) => (
              <ToggleGroupItem
                key={index}
                value={lang}
                onClick={() => changeLanguage(lang)}
                className={cn(
                  "h-10 w-full justify-between rounded-sm p-0 hover:bg-neutrals-50 hover:text-neutrals-900 data-[state=on]:pointer-events-none data-[state=on]:bg-neutrals-50",
                  lang === currentLanguage &&
                    "bg-neutrals-50 text-neutrals-900",
                )}
              >
                <Link
                  className="flex w-full px-3 py-2"
                  href={redirectedPathname(lang)}
                >
                  <Typography
                    variant="body-sm"
                    className="p-3 text-neutrals-900"
                  >
                    {lang === "en" ? "English" : "Srpski"}
                  </Typography>
                </Link>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
