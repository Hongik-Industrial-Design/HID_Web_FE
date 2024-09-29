/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

import { ArrowButton, ButtonContainer } from "./NextPrevious.styled";

import leftArrow from "@assets/arrows/left-arrow.svg";
import rightArrow from "@assets/arrows/right-arrow.svg";

const NextPrevious = ({ currentPage, totalPages }) => {
  console.log("Current page: ", currentPage);
  console.log("Total pages: ", totalPages);

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

  return (
    <ButtonContainer>
      <ArrowButton onClick={handlePreviousClick}>
        <img src={leftArrow} alt="left-arrow" />
      </ArrowButton>
      <ArrowButton onClick={handleNextClick}>
        <img src={rightArrow} alt="right-arrow" />
      </ArrowButton>
    </ButtonContainer>
  );
};

export default NextPrevious;
