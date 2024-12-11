import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Typography from "@/components/custom-ui/typography";

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
  return (
    <Pagination className="flex justify-start">
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`/blog?page=${currentPage - 1}`}
              aria-disabled={currentPage === 1}
              className={
                currentPage === 1 ? "pointer-events-none opacity-50" : ""
              }
            />
          </PaginationItem>
        )}

        {pageNumbers.map((pageNumber, i) => (
          <PaginationItem key={i}>
            {pageNumber === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={`/blog?page=${pageNumber}`}
                isActive={currentPage === pageNumber}
              >
                <Typography variant="body" fontWeight="bold">
                  {pageNumber}
                </Typography>
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={`/blog?page=${currentPage + 1}`}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
