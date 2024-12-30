"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { parseAsInteger, useQueryState } from "nuqs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Typography from "../typography";
import { cn } from "@/lib/utils";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: (string | number)[];
}

const BlogPagination = ({
  currentPage,
  totalPages,
  pageNumbers,
}: BlogPaginationProps) => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger
      .withOptions({
        shallow: false,
        throttleMs: 500,
      })
      .withDefault(1),
  );

  const handlePageChange = async (newPage: number) => {
    await setPage(newPage);
    const blogSection = document.getElementById("scroll-to-post");
    blogSection?.scrollIntoView();
  };

  return (
    <Pagination className="flex justify-start">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <Button
              aria-disabled={currentPage === 1}
              aria-label="Go to previous page"
              size="default"
              className={cn(
                "gap-1 px-1 sm:px-2.5",
                currentPage === 1 ? "pointer-events-none opacity-50" : "",
              )}
              variant="ghost"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ArrowLeft className="size-6" />
            </Button>
          </PaginationItem>
        )}

        {pageNumbers.map((pageNumber, i) => (
          <PaginationItem key={i}>
            {pageNumber === "..." ? (
              <PaginationEllipsis />
            ) : (
              <Button
                variant="ghost"
                className={cn(
                  "hover:bg-transparent hover:lg:bg-neutrals-100",
                  currentPage === pageNumber
                    ? "text-blue-400"
                    : "text-gray-600",
                )}
                onClick={() => handlePageChange(Number(pageNumber))}
              >
                <Typography variant="body" fontWeight="bold">
                  {pageNumber}
                </Typography>
              </Button>
            )}
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <Button
              aria-label="Go to next page"
              size="default"
              variant="ghost"
              aria-disabled={currentPage === totalPages}
              className={cn(
                "gap-1 px-1 sm:px-2.5",
                currentPage === totalPages
                  ? "pointer-events-none opacity-50"
                  : "",
              )}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ArrowRight className="size-6" />
            </Button>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
