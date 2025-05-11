import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { useSearchStore } from '@stores/useSearchStore';

import { SmallSearchIcon } from '@icons/Search';

import * as S from './SearchBar.styled';

type SearchBarProps = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: SearchBarProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const { setSearchTerm, isQueryEnabled, setIsQueryEnabled } = useSearchStore();

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // console.log('SearchBar 입력 값: ', query);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query.trim() === '') {
      if (isQueryEnabled) {
        setIsQueryEnabled(false);
      }
      return;
    }

    setSearchTerm(query);
    setIsQueryEnabled(true);
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
