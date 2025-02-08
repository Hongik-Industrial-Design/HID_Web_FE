import { SearchIcon } from '@icons/Search';

import * as S from './SearchTab.styled';

const SearchTab = () => {
  return (
    <S.SearchTabContainer>
      <S.SearchInputContainer>
        <S.SearchButton>
          <SearchIcon />
        </S.SearchButton>
      </S.SearchInputContainer>
    </S.SearchTabContainer>
  );
};

export default SearchTab;
