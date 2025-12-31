/**
 * Pagination Component
 * Reusable pagination with page navigation
 */

'use client';

import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const renderPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (!showEllipsis) {
      // Show all pages if total is 7 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PageButton
            key={i}
            page={i}
            isActive={i === currentPage}
            onClick={() => onPageChange(i)}
          />,
        );
      }
    } else {
      // Show ellipsis for many pages
      pages.push(
        <PageButton
          key={1}
          page={1}
          isActive={1 === currentPage}
          onClick={() => onPageChange(1)}
        />,
      );

      if (currentPage > 3) {
        pages.push(
          <span key="ellipsis1" className="px-2 text-gray-400">
            ...
          </span>,
        );
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(
          <PageButton
            key={i}
            page={i}
            isActive={i === currentPage}
            onClick={() => onPageChange(i)}
          />,
        );
      }

      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="ellipsis2" className="px-2 text-gray-400">
            ...
          </span>,
        );
      }

      pages.push(
        <PageButton
          key={totalPages}
          page={totalPages}
          isActive={totalPages === currentPage}
          onClick={() => onPageChange(totalPages)}
        />,
      );
    }

    return pages;
  };

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Pagination"
    >
      {/* Previous button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full w-9 h-9"
        aria-label="Previous page"
      >
        ‹
      </Button>

      {/* Page numbers */}
      <div className="flex items-center gap-1">{renderPageNumbers()}</div>

      {/* Next button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full w-9 h-9"
        aria-label="Next page"
      >
        ›
      </Button>
    </nav>
  );
}

interface PageButtonProps {
  page: number;
  isActive: boolean;
  onClick: () => void;
}

function PageButton({ page, isActive, onClick }: PageButtonProps) {
  return (
    <Button
      variant={isActive ? 'default' : 'outline'}
      size="icon"
      onClick={onClick}
      className={`rounded-full w-9 h-9 ${
        isActive ? 'bg-gray-800 text-white' : 'hover:bg-gray-100'
      }`}
      aria-label={`Page ${page}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {page}
    </Button>
  );
}
