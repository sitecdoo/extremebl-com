"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";

type SearchFilterProps = {
  placeholder: string;
};

const SearchFilter = ({ placeholder }: SearchFilterProps) => {
  const [query, setQuery] = useQueryState("search", {
    shallow: false,
    throttleMs: 500,
  });
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger
      .withOptions({
        shallow: false,
        throttleMs: 500,
      })
      .withDefault(1),
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPage(1);
    if (value) {
      setQuery(value);
    } else {
      setQuery(null);
    }
  };

  return (
    <div className="relative flex w-full items-center sm:max-w-[33.1rem]">
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={query || ""}
        className="h-12 w-full border-neutrals-200 pl-8 pr-8 lg:h-14 lg:pl-12"
      />
      <Search className="absolute left-3 top-4 size-4 text-neutrals-400 lg:size-6" />
      {query && (
        <Button
          variant="transparent"
          className="absolute right-2 top-4 h-fit bg-inherit p-0 hover:bg-inherit hover:text-neutrals-400 active:bg-inherit lg:right-0 lg:top-0"
          onClick={() => setQuery(null)}
        >
          <X className="size-4 lg:size-6" />
        </Button>
      )}
    </div>
  );
};

export { SearchFilter };
