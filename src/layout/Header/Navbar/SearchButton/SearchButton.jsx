import { IconContainer, MagnifyHandle } from "./SearchButton.styled";

import MagnifyLens from "@assets/circle.svg?react";

const SearchButton = () => {
  return (
    <IconContainer>
      <MagnifyLens />
      <MagnifyHandle />
    </IconContainer>
  );
};

export default SearchButton;
