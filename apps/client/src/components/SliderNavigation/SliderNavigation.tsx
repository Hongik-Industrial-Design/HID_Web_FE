import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { LeftArrow, RightArrow } from '@icons/Arrow';

import * as S from './SliderNavigation.styled';

type SliderNavigationProps = {
  handlePreviousClick: () => void;
  handleNextClick: () => void;
};

const SliderNavigation = ({
  handlePreviousClick,
  handleNextClick,
}: SliderNavigationProps): JSX.Element => {
  const [previousHovered, setPreviousHovered] = useState<boolean>(false);
  const [nextHovered, setNextHovered] = useState<boolean>(false);

  const handlePreviousHover = () => setPreviousHovered(true);
  const handlePreviousLeave = () => setPreviousHovered(false);

  const handleNextHover = () => setNextHovered(true);
  const handleNextLeave = () => setNextHovered(false);

  return (
    <S.SliderNavigationContainer>
      <S.LeftArrowButton
        onMouseEnter={handlePreviousHover}
        onMouseLeave={handlePreviousLeave}
        onClick={() => handlePreviousClick()}
        // disabled={currentPage === 1}
      >
        <LeftArrow $isHovered={previousHovered} />
      </S.LeftArrowButton>
      <S.RightArrowButton
        onMouseEnter={handleNextHover}
        onMouseLeave={handleNextLeave}
        onClick={() => handleNextClick()}
        // disabled={currentPage === totalPages}
      >
        <RightArrow $isHovered={nextHovered} />
      </S.RightArrowButton>
    </S.SliderNavigationContainer>
  );
};

export default SliderNavigation;
