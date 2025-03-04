import { JSX } from 'react/jsx-runtime';
import { useCallback, useState } from 'react';

import { GRADUATION_EXHIBITION_YEAR_LIST } from '@constants/Exhibition';

import AddArtworkButton from '@components/Button/AddArtwork/AddArtworkButton';
import YearSelector from '@components/YearSelector/YearSelector';

import * as S from './GraduationExhibition.styled';

const GraduationExhibition = (): JSX.Element => {
  const [selectedExhibitionYear, setSelectedExhibitonYear] = useState<string>(
    GRADUATION_EXHIBITION_YEAR_LIST[0]
  );

  // props로 넘겨줄 함수 메모이제이션 (useCallback)
  const handleExhibitionYearChange = useCallback((year: string) => {
    setSelectedExhibitonYear(year);
  }, []);

  return (
    <S.GraduationHeaderSection>
      <S.TitleYearSelectorContainer>
        <S.GraduationExhibitionTitle>
          Graduation Exhibition.
        </S.GraduationExhibitionTitle>
        {/* <S.Divider /> */}
        <YearSelector
          selectedExhibitonYear={selectedExhibitionYear}
          handleExhibitionYearChange={handleExhibitionYearChange}
        />
      </S.TitleYearSelectorContainer>
      <AddArtworkButton />
    </S.GraduationHeaderSection>
  );
};

export default GraduationExhibition;
