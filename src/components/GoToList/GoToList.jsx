import { ButtonContainer } from "./GoToList.styled";

import leftArrow from "@assets/arrows/left-arrow_full.svg";

const GoToList = () => {
  return (
    <>
      <ButtonContainer>
        <img src={leftArrow} alt="left-arrow" className="left-arrow" />
        <div className="text">Go To List</div>
      </ButtonContainer>
    </>
  );
};

export default GoToList;
