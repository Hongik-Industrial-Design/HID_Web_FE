import { ArrowButton, ButtonContainer } from "./NextPrevious.styled";

import leftArrow from "@assets/arrows/left-arrow.svg";
import rightArrow from "@assets/arrows/right-arrow.svg";

const NextPrevious = () => {
  return (
    <>
      <ButtonContainer>
        <ArrowButton>
          <img src={leftArrow} alt="left-arrow" />
        </ArrowButton>
        <ArrowButton>
          <img src={rightArrow} alt="right-arrow" />
        </ArrowButton>
      </ButtonContainer>
    </>
  );
};

export default NextPrevious;
