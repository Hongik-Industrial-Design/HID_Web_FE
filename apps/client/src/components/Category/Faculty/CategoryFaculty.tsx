import { useLocation } from 'react-router';

import { FACULTY_CATEGORY_LIST } from '@constants/facultyCategory';

import * as S from './CategoryFaculty.styled';

type CategoryFacultyProps = {
  currentCategory: string;
  handleFilter: (category: string) => void;
};

const CategoryFaculty = ({
  currentCategory,
  handleFilter,
}: CategoryFacultyProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.CategoryContainer $currentPath={currentPath}>
      {FACULTY_CATEGORY_LIST.map((category, index) => (
        <S.DetailedMajor
          key={index}
          $isSelected={currentCategory === category}
          onClick={() => handleFilter(category)}
        >
          <S.CategoryButton $isSelected={currentCategory === category}>
            {category}
          </S.CategoryButton>
        </S.DetailedMajor>
      ))}
    </S.CategoryContainer>
  );
};

export default CategoryFaculty;
