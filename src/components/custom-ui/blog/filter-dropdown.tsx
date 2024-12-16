"use client";

import * as React from "react";
import { Check, Filter, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Category } from "@/payload-types";
import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";
import Typography from "../typography";
import { cn } from "@/lib/utils";

interface FilterDropdownProps {
  filterOptions: Category[];
}

export function FilterDropdown({ filterOptions }: FilterDropdownProps) {
  const [filters, setFilters] = useQueryState("categoryIds", {
    defaultValue: "",
    shallow: false,
    throttleMs: 0,
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const searchParams = useSearchParams();
  const currentFilters = searchParams.get("categoryIds")?.split(",") || [];

  const clearAll = () => {
    setFilters(null);
  };

  const handleCheckedChange = (itemId: string, e: Event) => {
    // Prevent the dropdown from closing
    e.preventDefault();
    setFilters((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id: string) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  // const handleCheckedChange = (filterId: string, e: Event) => {
  //   e.preventDefault();
  //   const newFilters = currentFilters.includes(filterId)
  //     ? currentFilters.filter((id) => id !== filterId)
  //     : [...currentFilters, filterId];

  //   setFilters(newFilters.length > 0 ? newFilters.join(",") : null);
  //   // onFilterChange(newFilters.length > 0 ? newFilters : null);
  // };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            "flex min-w-44 justify-between gap-2 rounded-lg sm:min-w-36 sm:px-5",
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
            variant="ghost"
            className="flex items-center gap-x-2 text-neutrals-800 active:bg-inherit lg:mx-4 lg:my-3 lg:p-0"
            onClick={() => clearAll()}
          >
            <Typography fontWeight="bold" variant="body-sm">
              Izbriši sve
            </Typography>
            <Trash2 className="size-4" strokeWidth={2.5} />
          </Button>
        </div>
        <ScrollArea className="flex h-96">
          {filterOptions.map((item) => (
            <DropdownMenuCheckboxItem
              className={cn(
                "mr-4 mt-1 h-12 rounded-lg bg-neutrals-50 text-neutrals-500 first:mt-0 data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-600",
                filters.includes(String(item.id)) && "bg-blue-50 text-blue-600",
              )}
              key={item.id}
              checked={filters.includes(String(item.id))}
              onSelect={(e) => handleCheckedChange(String(item.id), e)}
            >
              <Typography fontWeight="bold" className="lg:text-base">
                {item.name}
              </Typography>
            </DropdownMenuCheckboxItem>
          ))}
        </ScrollArea>
        <div className="absolute bottom-2 right-1 -z-10 h-96 w-[0.563rem] rounded-60 bg-white" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
