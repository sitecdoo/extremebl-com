"use client";

import { Button } from "@/components/ui/button";
import { CalendarArrowDown, CalendarArrowUp } from "lucide-react";
import { useQueryState } from "nuqs";
import Typography from "../typography";

interface SortButtonProps {
  initialSortOrder: "asc" | "desc";
}

const SortButton = ({ initialSortOrder }: SortButtonProps) => {
  const [sortOrder, setSortOrder] = useQueryState("sort", {
    defaultValue: initialSortOrder,
    shallow: false,
    throttleMs: 1000,
  });

  return (
    <div className="flex flex-col">
      <Button
        variant="sort"
        className="flex min-w-44 justify-between rounded-lg px-4 py-3 sm:min-w-52 sm:px-5"
        onClick={() => {
          const order = sortOrder === "desc" ? "asc" : "desc";
          setSortOrder(order);
        }}
      >
        <Typography fontWeight="bold" className="uppercase">
          Sortiraj
        </Typography>
        {sortOrder === "asc" ? (
          <CalendarArrowUp size={20} />
        ) : (
          <CalendarArrowDown size={20} />
        )}
      </Button>
    </div>
  );
};

export default SortButton;
