import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import * as S from './CategoryCommunity.styled';

type CategoryCommunityProps = {
  categoryList: string[];
  scrollToTopRef: React.RefObject<HTMLDivElement | null>;
};

const CategoryCommunity = ({
  categoryList,
  scrollToTopRef,
}: CategoryCommunityProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>(categoryList[0]);

  const handleFilterOption = (filterOption: string) => {
    setSelectedOption(filterOption);

    if (scrollToTopRef.current) {
      scrollToTopRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <S.CategoryContainer>
      <S.FilterOptionList>
        {categoryList.map((filterOption, index) => (
          <S.FilterOption key={index}>
            <S.FilterOptionButton
              onClick={() => handleFilterOption(filterOption)}
              $selectedOption={filterOption === selectedOption}
            >
              {filterOption}
            </S.FilterOptionButton>
          </S.FilterOption>
        ))}
      </S.FilterOptionList>
    </S.CategoryContainer>
  );
};

export default CategoryCommunity;
