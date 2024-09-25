/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import {
  ButtonContainer,
  GoToListText,
  StyledLeftArrow,
} from "./GoToList.styled";

const GoToList = ({ isHovered, setIsHovered }) => {
  return (
    <Link to="/graduation">
      <ButtonContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        $isHovered={isHovered}
      >
        <StyledLeftArrow $isHovered={isHovered} />
        <GoToListText $isHovered={isHovered}>Go To List</GoToListText>
      </ButtonContainer>
    </Link>
  );
};

export default GoToList;
