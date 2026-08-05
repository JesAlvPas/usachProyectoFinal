'use client'

import { useRouter, useSearchParams } from 'next/navigation';

export default function Pagination({ currentPage = 1, totalPages = 1 }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  const maxVisiblePages = 3;
  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const visiblePages = [];
  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  return (
    <nav 
      aria-label="Paginación"
      className="w-full max-w-full my-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 px-1 overflow-hidden"
    >
      {currentPage > 1 && (
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="h-8 px-2.5 sm:h-12 sm:px-6 flex items-center justify-center rounded-lg bg-[#F9F1E7] text-black font-light text-xs sm:text-sm hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer shrink-0 whitespace-nowrap"
        >
          Prev
        </button>
      )}

      <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
        {visiblePages.map((page) => {
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center rounded-lg text-xs sm:text-sm transition-colors cursor-pointer shrink-0 ${
                isActive
                  ? 'bg-[#B88E2F] text-white font-medium'
                  : 'bg-[#F9F1E7] text-black font-light hover:bg-[#B88E2F] hover:text-white'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {currentPage < totalPages && (
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="h-8 px-2.5 sm:h-12 sm:px-6 flex items-center justify-center rounded-lg bg-[#F9F1E7] text-black font-light text-xs sm:text-sm hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer shrink-0 whitespace-nowrap"
        >
          Next
        </button>
      )}
    </nav>
  );
}