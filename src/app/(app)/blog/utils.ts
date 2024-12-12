type GetPageNumbersProps = {
  totalPages: number;
  currentPage: number;
};

export const getPageNumbers = ({
  totalPages,
  currentPage,
}: GetPageNumbersProps) => {
  const pageNumbers: (number | string)[] = [];
  if (totalPages <= 4) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show first page
  pageNumbers.push(1);

  // Calculate range around current page
  let start = Math.max(2, currentPage - 1);
  let end = Math.min(totalPages - 1, currentPage + 1);

  // Add ellipsis if needed before middle range
  if (start > 2) {
    pageNumbers.push("...");
  }

  // Add middle range
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  // Add ellipsis if needed after middle range
  if (end < totalPages - 1) {
    pageNumbers.push("...");
  }

  // Always show last page
  pageNumbers.push(totalPages);

  return pageNumbers;
};
