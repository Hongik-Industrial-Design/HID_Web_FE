import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router';

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

  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = useLocation();

  const [query, setQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const { setSearchTerm, isQueryEnabled, setIsQueryEnabled } = useSearchStore();
  const { selectedYear } = useExhibitionYearStore();

  const [params] = useSearchParams();
  const searchTitle = params.get('q');

  useEffect(() => {
    searchInputRef.current?.blur();
  }, [pathname, searchTitle]);

  useEffect(() => {
    setIsQueryEnabled(!!searchTitle);
    if (searchTitle) {
      setSearchTerm(searchTitle);
    }
  }, [searchTitle]);

  useEffect(() => {
    if (!isFocused && query !== searchTitle) {
      setQuery(searchTitle || '');
    }
  }, [isFocused, searchTitle, query, setQuery]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 검색어가 변경되지 않았을 시에는 검색 수행 x (히스토리 관리)
    if (isQueryEnabled && searchTitle === query) return;

    const exhibitionSearchPath =
      exhibitType === 'GRADUATION' ? 'graduation' : 'student';
    const exhibitTypeKey = exhibitType.toLowerCase() as 'graduation' | 'club';

    const exhibitBasePath = `/${exhibitionSearchPath}/${selectedYear[exhibitTypeKey]}`;
    const targetPath = query.trim()
      ? `${exhibitBasePath}/search?q=${encodeURIComponent(query)}`
      : exhibitBasePath;

    if (!query.trim() && isQueryEnabled) {
      setIsQueryEnabled(false);
    }

    navigate(targetPath);
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
        ref={searchInputRef}
      />
    </S.SearchBarForm>
  );
};

export default SearchBar;
