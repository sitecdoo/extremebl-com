"use client";

import { Button } from "@/components/ui/button";
import { CalendarArrowDown, CalendarArrowUp } from "lucide-react";
import { useQueryState } from "nuqs";
import Typography from "../typography";

interface SortButtonProps {
  initialSortOrder: "asc" | "desc";
  text: string;
}

const SortButton = ({ initialSortOrder, text }: SortButtonProps) => {
  const [sortOrder, setSortOrder] = useQueryState("sort", {
    defaultValue: initialSortOrder,
    shallow: false,
    throttleMs: 500,
  });

  return (
    <div className="flex w-full flex-col sm:max-w-44">
      <Button
        variant="sort"
        size="small"
        className="flex w-full justify-between gap-3 rounded-lg sm:px-5"
        onClick={() => {
          const order = sortOrder === "desc" ? "asc" : "desc";
          setSortOrder(order);
        }}
      >
        <Typography fontWeight="bold" className="uppercase">
          {text}
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
