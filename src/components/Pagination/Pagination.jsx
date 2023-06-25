import React from "react";
import { useRouter } from "next/router";

const Pagination = ({ totalPages,page }) => {
  const router = useRouter();

  const handlePreviousPage = () => {
    if (page > 1) {
      const previousPage = page - 1;
      router.push(`?page=${previousPage}`);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      router.push(`?page=${nextPage}`);
    }
  };

  return (
    <div>
      {page > 1 && <button onClick={handlePreviousPage}>Previous Page</button>}
      {page < totalPages && <button onClick={handleNextPage}>Next Page</button>}
    </div>
  );
};

export default Pagination;
