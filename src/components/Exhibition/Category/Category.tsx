import { useState } from 'react';
import { useLocation } from 'react-router';

import * as S from './Category.styled';

const Category = ({ handleFilter }) => {
  const [isSelected, setIsSelected] = useState('All');

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <S.CategoryContainer $currentPath={currentPath}>
        <S.DetailedMajor
          $isSelected={isSelected === 'All'}
          onClick={() => {
            setIsSelected('All');
            handleFilter('All');
          }}
        >
          All
        </S.DetailedMajor>
        <S.DetailedMajor
          $isSelected={isSelected === 'Smart Mobility'}
          onClick={() => {
            setIsSelected('Smart Mobility');
            handleFilter('Smart Mobility');
          }}
        >
          Smart Mobility
        </S.DetailedMajor>
        <S.DetailedMajor
          $isSelected={isSelected === 'Spatial'}
          onClick={() => {
            setIsSelected('Spatial');
            handleFilter('Spatial');
          }}
        >
          Spatial
        </S.DetailedMajor>
        <S.DetailedMajor
          $isSelected={isSelected === 'Product'}
          onClick={() => {
            setIsSelected('Product');
            handleFilter('Product');
          }}
        >
          Product
        </S.DetailedMajor>
        <S.DetailedMajor
          $isSelected={isSelected === 'Interaction'}
          onClick={() => {
            setIsSelected('Interaction');
            handleFilter('Interaction');
          }}
        >
          Interaction
        </S.DetailedMajor>
      </S.CategoryContainer>
    </>
  );
};

export default Category;
