import { useState } from 'react';

import * as S from './Pagination.styled';

// eslint-disable-next-line react/prop-types
const Pagination = ({ currentPage, setCurrentPage, totalPages, isPreview }) => {
  const [startPage, setStartPage] = useState(1);
  const [currentPageSection, setCurrentPageSection] = useState(1);

  const endPage = isPreview
    ? Math.min(startPage + 4, Math.min(totalPages, 10))
    : Math.min(startPage + 4, totalPages);

  const totalPageSection = isPreview
    ? Math.min(Math.ceil(totalPages / 5), 2)
    : Math.ceil(totalPages / 5);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePreviousClick = () => {
    const newStartPage = startPage - 5;
    const newEndPage = startPage - 1;
    setCurrentPageSection(currentPageSection - 1);
    setStartPage(newStartPage);
    setCurrentPage(newEndPage);
  };

  const handleNextClick = () => {
    const newStartPage = startPage + 5;
    setCurrentPageSection(currentPageSection + 1);
    setStartPage(newStartPage);
    setCurrentPage(newStartPage);
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
          onClick={() => handlePageClick(page)}
          $currentPage={currentPage === page}
        >
          {page}
        </S.PageButton>
      ))}
      {totalPages > 5 && currentPageSection !== totalPageSection && (
        <S.NextArrow onClick={handleNextClick} />
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
