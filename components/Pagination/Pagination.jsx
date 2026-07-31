'use client'
export default function Pagination({ currentPage = 1, totalPages = 3, onPageChange }) {
  return (
    <nav className="flex items-center justify-center gap-4 my-8" aria-label="Paginación">
      {/* Botón Prev (opcional/condicional) */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          className="h-12 px-6 flex items-center justify-center rounded-lg bg-[#F9F1E7] text-black font-light text-sm hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer"
        >
          Prev
        </button>
      )}

      {/* Botones de números */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange && onPageChange(page)}
            className={`h-12 w-12 flex items-center justify-center rounded-lg text-sm transition-colors cursor-pointer ${
              isActive
                ? 'bg-[#B88E2F] text-white font-medium'
                : 'bg-[#F9F1E7] text-black font-light hover:bg-[#B88E2F] hover:text-white'
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Botón Next */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          className="h-12 px-6 flex items-center justify-center rounded-lg bg-[#F9F1E7] text-black font-light text-sm hover:bg-[#B88E2F] hover:text-white transition-colors cursor-pointer"
        >
          Next
        </button>
      )}
    </nav>
  );
}