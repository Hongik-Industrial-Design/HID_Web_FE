/* eslint-disable react/prop-types */
import {
  IconContainer,
  MagnifyHandle,
  StyledMagnifyLens,
} from "./SearchButton.styled";

const SearchButton = ({ isHomePage, scrolled }) => {
  return (
    <IconContainer>
      <StyledMagnifyLens $isHomePage={isHomePage} $scrolled={scrolled} />
      <MagnifyHandle $isHomePage={isHomePage} $scrolled={scrolled} />
    </IconContainer>
  );
};

export default SearchButton;
