import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  // Don't render pagination if there's only one page
  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Generate page numbers, limiting to a reasonable range
  const getPageNumbers = () => {
    const pages = [];
    const maxDisplayedPages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxDisplayedPages / 2));
    let endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1);

    // Adjust if we're at the end of the range
    if (endPage - startPage + 1 < maxDisplayedPages) {
      startPage = Math.max(1, endPage - maxDisplayedPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-button previous"
        disabled={currentPage === 1}
        onClick={handlePrevious}
        aria-label="Go to previous page"
      >
        &laquo; Previous
      </button>

      <div className="pagination-pages">
        {getPageNumbers().map(page => (
          <button
            key={page}
            className={`pagination-page ${page === currentPage ? 'active' : ''}`}
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="pagination-button next"
        disabled={currentPage === totalPages}
        onClick={handleNext}
        aria-label="Go to next page"
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default Pagination;
