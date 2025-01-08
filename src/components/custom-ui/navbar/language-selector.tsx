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

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="transparent"
          size="icon"
          className="size-12 gap-0 p-0 text-neutrals-50 hover:bg-inherit hover:text-neutrals-200 active:bg-inherit lg:size-8 lg:text-neutrals-800 hover:lg:bg-[#F8F7F2] hover:lg:text-inherit xl:size-12"
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
      <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()}>
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Srpski</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
