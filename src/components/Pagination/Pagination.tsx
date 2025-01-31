import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import * as S from './Pagination.styled';

type PaginationProps = {
  currentPage: number;
  handleCurrentPage: (page: number) => void;
  totalPages: number | undefined;
  isPreview: boolean;
};

const Pagination = ({
  currentPage,
  handleCurrentPage,
  totalPages,
  isPreview,
}: PaginationProps): JSX.Element => {
  const [startPage, setStartPage] = useState(1);
  const [currentPageSection, setCurrentPageSection] = useState(1);

  const endPage = isPreview
    ? Math.min(startPage + 4, Math.min(totalPages ?? 0, 10))
    : Math.min(startPage + 4, totalPages ?? 0);

  const totalPageSection = isPreview
    ? Math.min(Math.ceil((totalPages ?? 0) / 5), 2)
    : Math.ceil((totalPages ?? 0) / 5);

  const handlePreviousClick = () => {
    const newStartPage = startPage - 5;
    const newEndPage = startPage - 1;
    setCurrentPageSection(currentPageSection - 1);
    setStartPage(newStartPage);
    handleCurrentPage(newEndPage);
  };

  const handleNextClick = () => {
    const newStartPage = startPage + 5;
    setCurrentPageSection(currentPageSection + 1);
    setStartPage(newStartPage);
    handleCurrentPage(newStartPage);
  };

  const getPageNumbers = () => {
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <S.PaginationContainer>
      {currentPage > 5 && currentPageSection !== 1 && (
        <S.PreviousArrow onClick={handlePreviousClick} />
      )}
      {getPageNumbers().map((page) => (
        <S.PageButton
          key={page}
          onClick={() => handleCurrentPage(page)}
          $currentPage={currentPage === page}
        >
          {page}
        </S.PageButton>
      ))}
      {(totalPages ?? 0) > 5 && currentPageSection !== totalPageSection && (
        <S.NextArrow onClick={handleNextClick} />
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
