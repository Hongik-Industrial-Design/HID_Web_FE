import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import * as S from './NextPrevious.styled';

type NextPreviousProps = {
  currentPage: number;
  totalPages: number;
};

const NextPrevious = ({
  currentPage,
  totalPages,
}: NextPreviousProps): JSX.Element => {
  console.log('Current page: ', currentPage);
  console.log('Total pages: ', totalPages);

  const navigate = useNavigate();

  const [previousHovered, setPreviousHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      navigate(`/graduation/work/${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      navigate(`/graduation/work/${currentPage + 1}`);
    }
  };

  const handlePreviousButtonHover = () => {
    setPreviousHovered(true);
  };

  const handlePreviousButtonLeave = () => {
    setPreviousHovered(false);
  };

  const handleNextButtonHover = () => {
    setNextHovered(true);
  };

  const handleNextButtonLeave = () => {
    setNextHovered(false);
  };

  return (
    <S.ButtonContainer>
      <S.LeftArrowButton
        onMouseEnter={handlePreviousButtonHover}
        onMouseLeave={handlePreviousButtonLeave}
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        <S.StyledLeftArrow $isHovered={previousHovered} />
      </S.LeftArrowButton>
      <S.RightArrowButton
        onMouseEnter={handleNextButtonHover}
        onMouseLeave={handleNextButtonLeave}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <S.StyledRightArrow $isHovered={nextHovered} />
      </S.RightArrowButton>
    </S.ButtonContainer>
  );
};

export default NextPrevious;
