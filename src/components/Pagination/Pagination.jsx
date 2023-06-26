import React from "react";
import { useRouter } from "next/router";
import { Btn, BtnWrapper } from "./Pagination.styled";

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
    <BtnWrapper>
      {page > 1 && <Btn onClick={handlePreviousPage}>Previous Page</Btn>}
      {page < totalPages && <Btn onClick={handleNextPage}>Next Page</Btn>}
    </BtnWrapper>
  );
};

export default Pagination;
