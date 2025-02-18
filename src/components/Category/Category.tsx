import { useLocation } from 'react-router';

import {
  graduationCategoryList,
  studentClubList,
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

  const categoryList =
    currentPath === '/student' ? studentClubList : graduationCategoryList;

  return (
    <S.CategoryContainer $currentPath={currentPath}>
      {categoryList.map((category, index) => (
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
