import {
  GRADUATION_CATEGORY_LIST,
  STUDENT_CLUB_LIST,
} from '@constants/exhibitionCategory';
import {
  EXHIBIT_TYPE,
  EXHIBITION_CATEGORY_TYPE,
} from '@client-types/exhibition.types';

import * as S from './CategoryExhibition.styled';

type CategoryProps = {
  exhibitType: EXHIBIT_TYPE;
  currentCategory: string;
  handleFilter: (club: EXHIBITION_CATEGORY_TYPE) => void;
};

const CategoryExhibition = ({
  exhibitType,
  currentCategory,
  handleFilter,
}: CategoryProps) => {
  const CATEGORY_LIST: EXHIBITION_CATEGORY_TYPE[] =
    exhibitType === 'GRADUATION' ? GRADUATION_CATEGORY_LIST : STUDENT_CLUB_LIST;

  return (
    <S.CategoryContainer $isGraduation={exhibitType === 'GRADUATION'}>
      {CATEGORY_LIST.map((category, index) => (
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

export default CategoryExhibition;
