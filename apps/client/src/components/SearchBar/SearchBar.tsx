import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { EXHIBIT_TYPE } from '@client-types/exhibition.types';

import { useSearchStore } from '@stores/useSearchStore';
import { useExhibitionYearStore } from '@stores/useExhibitionYearStore';

import { SmallSearchIcon } from '@icons/Search';

import * as S from './SearchBar.styled';

type SearchBarProps = {
  exhibitType: EXHIBIT_TYPE;
  placeholder: string;
};

const SearchBar = ({
  exhibitType,
  placeholder,
}: SearchBarProps): JSX.Element => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>('');
  const { setSearchTerm, isQueryEnabled, setIsQueryEnabled } = useSearchStore();

  const { selectedYear } = useExhibitionYearStore();

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // console.log('SearchBar 입력 값: ', query);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const exhibitionSearchPath =
      exhibitType === 'GRADUATION' ? 'graduation' : 'student';
    const exhibitTypeKey = exhibitType.toLowerCase() as 'graduation' | 'club';

    if (query.trim() === '') {
      if (isQueryEnabled) {
        setIsQueryEnabled(false);
        navigate(
          `/${exhibitType.toLowerCase()}/${selectedYear[exhibitTypeKey]}`
        );
      }
      return;
    }

    setSearchTerm(query);
    setIsQueryEnabled(true);

    navigate(
      `/${exhibitionSearchPath}/${selectedYear[exhibitTypeKey]}/search?title=${encodeURIComponent(query)}`
    );
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
