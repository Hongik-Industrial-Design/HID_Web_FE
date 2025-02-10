import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { SmallSearchIcon } from '@icons/Search';

import * as S from './SearchBar.styled';

type SearchBarProps = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: SearchBarProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 추후 검색 API 연동 시 구현
    console.log(query);
  };

  return (
    <S.SearchBarForm onSubmit={handleSubmit}>
      <S.SearchButton type="submit">
        <SmallSearchIcon $isFocused={isFocused} />
      </S.SearchButton>
      <S.SearchInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleSearchInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        spellCheck={false}
      />
    </S.SearchBarForm>
  );
};

export default SearchBar;
