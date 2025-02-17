import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PropsWithChildren, useState } from "react";

import { ArrowLeft, Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";
import Typography from "../typography";
import { Button } from "@/components/ui/button";
import { Category } from "@/payload-types";
import { Dictionary } from "@/utils/dictionary";

type FilterSheetProps = PropsWithChildren<{
  filters: number[];
  clearAll: () => void;
  filterOptions: Category[];
  handleChange: (itemId: number, e: Event) => void;
  dict: Dictionary["blog"];
}>;

const FilterSheet = ({
  children,
  filters,
  clearAll,
  filterOptions,
  handleChange,
  dict,
}: FilterSheetProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent
          side="right"
          className="h-full w-full border-none bg-neutrals-50 py-5 [&>button]:hidden"
        >
          <SheetHeader>
            <SheetTitle className="flex justify-between pb-5">
              <SheetClose>
                <ArrowLeft className="size-6" />
              </SheetClose>
              <Button
                variant="transparent"
                className="flex items-center gap-x-2 p-0 text-neutrals-800 hover:bg-transparent active:bg-inherit"
                onClick={clearAll}
              >
                <Typography fontWeight="bold" className="text-base">
                  {dict.delete}
                </Typography>
                <Trash2 className="size-5" />
              </Button>
            </SheetTitle>
            <SheetDescription hidden />
          </SheetHeader>
          <nav className="flex h-full flex-col justify-between">
            <div className="mt-8 space-y-5">
              <Typography
                variant="h5"
                tag="h5"
                fontWeight="bold"
                className="text-neutrals-700"
              >
                {dict.category}
              </Typography>
              <div className="flex flex-wrap gap-3">
                {filterOptions.map((item) => (
                  <Button
                    key={item.id}
                    variant="filter"
                    className={cn(
                      "h-11 border-2 px-4 py-3",
                      filters.includes(item.id)
                        ? "border-blue-500 bg-blue-50 text-blue-500 hover:bg-blue-50 active:bg-blue-50"
                        : "border-neutrals-200 text-neutrals-500 hover:bg-neutrals-100 active:bg-neutrals-100",
                    )}
                    onClick={(e) =>
                      handleChange(item.id, e as unknown as Event)
                    }
                  >
                    <Typography fontWeight="bold" className="text-base">
                      {item.name}
                    </Typography>
                  </Button>
                ))}
              </div>
            </div>
            <Button
              variant="black"
              className="mb-14 w-full py-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              <Typography fontWeight="bold" className="text-base">
                {dict.button}
              </Typography>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default FilterSheet;
