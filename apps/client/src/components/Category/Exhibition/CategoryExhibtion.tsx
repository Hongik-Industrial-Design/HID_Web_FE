import { useLocation } from 'react-router';

import {
  GRADUATION_CATEGORY_LIST,
  STUDENT_CLUB_LIST,
} from '@constants/exhibitionCategory';
import {
  EXHIBIT_TYPE,
  ExhibitionBasicInfo,
} from '@client-types/exhibition.types';

import * as S from './CategoryExhibition.styled';

type CategoryProps = {
  exhibitType: EXHIBIT_TYPE;
  currentCategory: string;
  handleFilter: (key: keyof ExhibitionBasicInfo, club: string) => void;
};

const CategoryExhibition = ({
  exhibitType,
  currentCategory,
  handleFilter,
}: CategoryProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const CATEGORY_LIST =
    exhibitType === 'GRADUATION' ? GRADUATION_CATEGORY_LIST : STUDENT_CLUB_LIST;

  return (
    <S.CategoryContainer $currentPath={currentPath}>
      {CATEGORY_LIST.map((category, index) => (
        <S.DetailedMajor
          key={index}
          $isSelected={currentCategory === category}
          onClick={() => handleFilter('clubOrMajor', category)}
        >
          <S.CategoryButton $isSelected={currentCategory === category}>
            {category}
          </S.CategoryButton>
        </S.DetailedMajor>
      ))}
    </S.CategoryContainer>
  );
};

export default CategoryExhibition;
