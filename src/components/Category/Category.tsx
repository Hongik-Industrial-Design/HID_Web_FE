import { useLocation } from 'react-router';

import {
  GRADUATION_CATEGORY_LIST,
  STUDENT_CLUB_LIST,
} from '@constants/exhibitionCategory';
import { SelectStudentExhibition } from '@pages/Exhibition/Student/StudentExhibition';

import * as S from './Category.styled';

type CategoryProps = {
  currentCategory: string;
  handleFilter: (key: keyof SelectStudentExhibition, club: string) => void;
};

const Category = ({ currentCategory, handleFilter }: CategoryProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const CATEGORY_LIST = currentPath.includes('/student')
    ? STUDENT_CLUB_LIST
    : GRADUATION_CATEGORY_LIST;

  return (
    <S.CategoryContainer $currentPath={currentPath}>
      {CATEGORY_LIST.map((category, index) => (
        <S.DetailedMajor
          key={index}
          $isSelected={currentCategory === category}
          onClick={() => handleFilter('club', category)}
        >
          <S.CategoryButton $isSelected={currentCategory === category}>
            {category}
          </S.CategoryButton>
        </S.DetailedMajor>
      ))}
    </S.CategoryContainer>
  );
};

export default Category;
