import { useState } from 'react';

import { SearchIcon } from '@icons/Search';

import { LinkRightArrowIcon } from '@icons/Arrow';
import Keyword from '@components/Keyword/Keyword';

import * as S from './SearchTab.styled';

const SearchTab = () => {
  const keywordSuggestion = ['Service', 'Product', 'Company', 'Career'];

  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(query);
  };

  return (
    <S.SearchTabContainer>
      {/* Search Form */}
      <S.SearchForm onSubmit={handleSearch}>
        <S.SearchButton>
          <SearchIcon />
        </S.SearchButton>
        <S.SearchInput
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="hid.com 검색하기"
          autoFocus
        />
      </S.SearchForm>

      {/* Keyword Suggestion */}
      <S.KeywordSuggestionContainer>
        <S.LinkArrowBox>
          <LinkRightArrowIcon />
        </S.LinkArrowBox>
        <S.KeywordList>
          {keywordSuggestion.map((keyword) => (
            <S.KeywordItem key={keyword}>
              <S.KeywordLink>
                <Keyword keyword={keyword}></Keyword>
              </S.KeywordLink>
            </S.KeywordItem>
          ))}
        </S.KeywordList>
      </S.KeywordSuggestionContainer>
    </S.SearchTabContainer>
  );
};

export default SearchTab;
