import { JSX } from 'react/jsx-runtime';

import { SearchButtonProps } from '../Navbar.types';

import * as S from './SearchButton.styled';

const SearchButton = ({
  isHomePage,
  scrolled,
}: SearchButtonProps): JSX.Element => {
  return (
    <S.IconContainer>
      <S.StyledMagnifyLens $isHomePage={isHomePage} $scrolled={scrolled} />
      <S.MagnifyHandle $isHomePage={isHomePage} $scrolled={scrolled} />
    </S.IconContainer>
  );
};

export default SearchButton;
