"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typography from "../typography";
import FilterSheet from "./filter-sheet";
import { FilterDropdown } from "./filter-dropdown";
import { parseAsArrayOf, parseAsInteger, useQueryState } from "nuqs";
import { Category } from "@/payload-types";

const FilterWrapper = ({ filterOptions }: { filterOptions: Category[] }) => {
  const [filters, setFilters] = useQueryState(
    "categoryIds",
    parseAsArrayOf(parseAsInteger)
      .withOptions({
        shallow: false,
        throttleMs: 0,
      })
      .withDefault([]),
  );

  const handleChange = (itemId: number, e: Event) => {
    e.preventDefault();

    setFilters((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };

  const clearAll = () => {
    setFilters(null);
  };

  const trigger = (
    <Button
      className={cn(
        "flex w-full justify-between gap-2 rounded-lg sm:px-5",
        filters.length > 0 &&
          "bg-blue-50 text-blue-600 hover:bg-blue-50 active:bg-blue-50 data-[state=open]:bg-blue-50 data-[state=open]:text-blue-600 lg:bg-blue-50",
      )}
      variant="filter"
      size="small"
    >
      <Typography fontWeight="bold" className="uppercase">
        Filteri
      </Typography>
      <Filter className="size-5 lg:size-6" />
    </Button>
  );
  return (
    <div className="w-full">
      <FilterSheet
        filters={filters}
        clearAll={clearAll}
        filterOptions={filterOptions}
        handleChange={handleChange}
      >
        {trigger}
      </FilterSheet>
      <FilterDropdown
        filters={filters}
        clearAll={clearAll}
        filterOptions={filterOptions}
        handleChange={handleChange}
      >
        {trigger}
      </FilterDropdown>
    </div>
  );
};
export default FilterWrapper;
