import { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './CategoryCommunity.styled';

const CategoryCommunity = ({ categoryList, ScrollToTopRef }) => {
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

CategoryCommunity.propTypes = {
  categoryList: PropTypes.array.isRequired,
  ScrollToTopRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLElement),
  }),
};

export default CategoryCommunity;
