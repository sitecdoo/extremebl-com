"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Category } from "@/payload-types";
import { useSearchParams } from "next/navigation";
import { useQueryState } from "nuqs";

interface FilterDropdownProps {
  filterOptions: Category[];
  onFilterChange: (categoryIds: string[] | null) => void;
  isPending?: boolean;
}

export function FilterDropdown({
  filterOptions,
  isPending = false,
}: FilterDropdownProps) {
  const [filters, setFilters] = useQueryState("categoryIds", {
    shallow: false,
    throttleMs: 0,
  });
  const searchParams = useSearchParams();
  const currentFilters = searchParams.get("categoryIds")?.split(",") || [];

  const clearAll = () => {
    setFilters(null);
  };

  const toggleFilter = (filterId: string) => {
    const newFilters = currentFilters.includes(filterId)
      ? currentFilters.filter((id) => id !== filterId)
      : [...currentFilters, filterId];

    setFilters(newFilters.length > 0 ? newFilters.join(",") : null);
    // onFilterChange(newFilters.length > 0 ? newFilters : null);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-10 justify-between px-3 text-left font-normal"
          disabled={isPending}
        >
          <span>Filters {isPending && "..."}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[280px] rounded-md border bg-white p-0 shadow-md"
        align="start"
      >
        <div className="flex items-center justify-between border-b px-4 py-2">
          <span className="text-sm font-medium">
            {currentFilters.length} selected
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-primary hover:bg-transparent hover:text-primary/80"
            onClick={clearAll}
          >
            <span className="text-sm font-medium">Izbriši sve</span>
          </Button>
        </div>
        <ScrollArea className="max-h-[300px]">
          <div className="p-0">
            {filterOptions.map((option) => (
              <Button
                key={option.id}
                className="relative flex w-full cursor-pointer items-center justify-between rounded-sm px-3 py-3 hover:bg-accent data-[state=selected]:bg-accent/50"
                data-state={
                  currentFilters.includes(option.id.toString())
                    ? "selected"
                    : "default"
                }
                onClick={() => toggleFilter(option.id.toString())}
              >
                <span className="text-sm">{option.name}</span>
                {currentFilters.includes(option.id.toString()) && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
