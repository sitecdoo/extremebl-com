"use client";

import { Filter, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Category } from "@/payload-types";
import Typography from "../typography";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useState } from "react";

type FilterDropdownProps = PropsWithChildren<{
  filterOptions: Category[];
  handleChange: (itemId: number, e: Event) => void;
  clearAll: () => void;
  filters: number[];
}>;

export function FilterDropdown({
  filterOptions,
  handleChange,
  clearAll,
  filters,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden sm:block">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            className={cn(
              "flex w-full gap-2 rounded-lg sm:max-w-36 sm:px-5",
              filters.length > 0 &&
                "bg-blue-50 text-blue-600 hover:bg-blue-50 active:bg-blue-50 data-[state=open]:bg-blue-50 data-[state=open]:text-blue-600 lg:bg-blue-50",
            )}
            variant="filter"
            size="small"
          >
            <Typography fontWeight="bold" className="uppercase">
              Filteri
            </Typography>
            <Filter className="size-5 lg:size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="relative min-w-96 bg-neutrals-100"
          align="end"
        >
          <div className="mb-3 flex items-center justify-between gap-2 bg-inherit pl-4 pt-1">
            <Typography variant="caption" className="text-neutrals-500">
              {filters.length} selected
            </Typography>
            <Button
              variant="transparent"
              className="flex items-center gap-x-2 text-neutrals-800 active:bg-inherit lg:mx-4 lg:my-3 lg:p-0"
              onClick={clearAll}
            >
              <Typography fontWeight="bold" variant="body-sm">
                Izbriši sve
              </Typography>
              <Trash2 className="size-4" strokeWidth={2.5} />
            </Button>
          </div>
          <ScrollArea className="flex max-h-64">
            {filterOptions.map((item) => (
              <DropdownMenuCheckboxItem
                className={cn(
                  "mt-1 h-12 rounded-lg bg-neutrals-50 text-neutrals-500 first:mt-0 data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-600",
                  filters.includes(item.id) && "bg-blue-50 text-blue-600",
                  filterOptions.length <= 5 ? "mr-0" : "mr-4",
                )}
                key={item.id}
                checked={filters.includes(item.id)}
                onSelect={(e) => handleChange(item.id, e)}
              >
                <Typography fontWeight="bold" className="lg:text-base">
                  {item.name}
                </Typography>
              </DropdownMenuCheckboxItem>
            ))}
          </ScrollArea>
          <div
            className={cn(
              "absolute bottom-2 right-1 -z-10 h-64 w-[0.563rem] rounded-60 bg-white",
              filterOptions.length <= 5 && "hidden",
            )}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
