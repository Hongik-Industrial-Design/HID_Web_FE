import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import * as S from './CategoryCommunity.styled';

type CategoryCommunityProps = {
  categoryList: string[];
  ScrollToTopRef: React.RefObject<HTMLDivElement | null>;
};

const CategoryCommunity = ({
  categoryList,
  ScrollToTopRef,
}: CategoryCommunityProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>(categoryList[0]);

  const handleFilterOption = (filterOption: string) => {
    setSelectedOption(filterOption);

    if (ScrollToTopRef.current) {
      ScrollToTopRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <S.CategoryContainer>
      {categoryList.map((filterOption, index) => (
        <S.FilterOption
          key={index}
          onClick={() => handleFilterOption(filterOption)}
          $selectedOption={filterOption === selectedOption}
        >
          {filterOption}
        </S.FilterOption>
      ))}
    </S.CategoryContainer>
  );
};

export default CategoryCommunity;
