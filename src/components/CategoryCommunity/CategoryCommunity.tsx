import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import * as S from './CategoryCommunity.styled';

const CategoryCommunity = ({ categoryList, ScrollToTopRef }): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState(categoryList[0]);

  const handleFilterOption = (filterOption) => {
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
