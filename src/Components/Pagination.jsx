export default function Pagination({ currentPage, totalResults, onPageChange }) {
  const totalPages = Math.ceil(totalResults / 10);
  const maxVisible = 5; // max number of page buttons to show

  const createPageNumbers = () => {
    const pages = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const handleClick = (page) => {
    if (page === '...') return;
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mt-6 space-x-1">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        Prev
      </button>

      {createPageNumbers().map((page, idx) => (
        <button
          key={idx}
          onClick={() => handleClick(page)}
          disabled={page === '...'}
          className={`px-3 py-1 border rounded ${
            page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
          } ${page === '...' ? 'cursor-default' : ''}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
