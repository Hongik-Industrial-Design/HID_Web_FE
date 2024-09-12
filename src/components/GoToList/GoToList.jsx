/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import { ButtonContainer } from "./GoToList.styled";
import leftArrow from "@assets/arrows/left-arrow_full.svg";


const GoToList = ({ isHovered, setIsHovered }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <Link to="/graduation">
      <ButtonContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        $isHovered={isHovered}
        $isActive={isActive === true}
      >
        <img src={leftArrow} alt="left-arrow" className="left-arrow" />
        <div className="text">Go To List</div>
      </ButtonContainer>
    </Link>
  );
};

export default GoToList;
