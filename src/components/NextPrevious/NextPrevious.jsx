/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ButtonContainer,
  LeftArrowButton,
  RightArrowButton,
  StyledLeftArrow,
  StyledRightArrow,
} from "./NextPrevious.styled";

const NextPrevious = ({ currentPage, totalPages }) => {
  console.log("Current page: ", currentPage);
  console.log("Total pages: ", totalPages);

  const [previousHovered, setPreviousHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  const navigate = useNavigate();

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
    <ButtonContainer>
      <LeftArrowButton
        onMouseEnter={handlePreviousButtonHover}
        onMouseLeave={handlePreviousButtonLeave}
        onClick={handlePreviousClick}
        disabled={currentPage === 1}
      >
        <StyledLeftArrow $isHovered={previousHovered} />
      </LeftArrowButton>
      <RightArrowButton
        onMouseEnter={handleNextButtonHover}
        onMouseLeave={handleNextButtonLeave}
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        <StyledRightArrow $isHovered={nextHovered} />
      </RightArrowButton>
    </ButtonContainer>
  );
};

export default NextPrevious;
