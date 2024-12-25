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
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: (string | number)[];
}

const BlogPagination = ({ currentPage, totalPages }: BlogPaginationProps) => {
  const [page, setPage] = useQueryState(
    "page",
    parseAsInteger
      .withOptions({
        shallow: false,
        throttleMs: 500,
      })
      .withDefault(1),
  );

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <Button onClick={() => setPage(currentPage - 1)}>
              <ChevronLeft />
            </Button>
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <Button onClick={() => setPage(index + 1)}>{index + 1}</Button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {totalPages !== currentPage && (
          <PaginationItem>
            <Button onClick={() => setPage(currentPage + 1)}>
              <ChevronRight />
            </Button>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
