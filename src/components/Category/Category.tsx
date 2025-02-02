import { useState } from 'react';
import { useLocation } from 'react-router';

import * as S from './Category.styled';

type CategoryProps = {
  categoryList: string[];
  handleFilter: (category: string) => void;
};

const Category = ({ categoryList, handleFilter }: CategoryProps) => {
  const [isSelected, setIsSelected] = useState<string>('All');

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.CategoryContainer $currentPath={currentPath}>
      {categoryList.map((category, index) => (
        <S.DetailedMajor
          key={index}
          $isSelected={isSelected === category}
          onClick={() => {
            setIsSelected(category);
            handleFilter(category);
          }}
        >
          {category}
        </S.DetailedMajor>
      ))}
    </S.CategoryContainer>
  );
};

export default Category;
