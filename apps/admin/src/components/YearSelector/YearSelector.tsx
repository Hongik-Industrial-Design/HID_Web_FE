import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { GRADUATION_EXHIBITION_YEAR_LIST } from '@constants/Exhibition';
import { DetailInfoFormData } from '@schemas/registerSchema';

import { DropdownArrow } from '@icons/Arrow';

import * as S from './YearSelector.styled';

type YearSelectorProps = {
  selectedExhibitonYear: string;
  handleExhibitionYearChange: (
    field: keyof DetailInfoFormData,
    year: string
  ) => void;
};

const YearSelector = ({
  selectedExhibitonYear,
  handleExhibitionYearChange,
}: YearSelectorProps): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdownClick = () => setIsDropdownOpen(!isDropdownOpen);

  const handleYearButtonClick = (year: string) => {
    handleExhibitionYearChange('year', year);
    setIsDropdownOpen(false);
  };

  return (
    <S.YearSelectDropdownWrapper>
      <S.YearSelectorButton onClick={handleDropdownClick}>
        {selectedExhibitonYear}
        <DropdownArrow />
      </S.YearSelectorButton>
      {isDropdownOpen && (
        <S.YearSelectDropdownContainer>
          {GRADUATION_EXHIBITION_YEAR_LIST.map((year) => (
            <S.GraduationExhibitionYearItem key={year}>
              <S.YearButton
                onClick={() => handleYearButtonClick(year)}
                $isSelected={selectedExhibitonYear === year}
              >
                {year}
              </S.YearButton>
            </S.GraduationExhibitionYearItem>
          ))}
        </S.YearSelectDropdownContainer>
      )}
    </S.YearSelectDropdownWrapper>
  );
};

export default YearSelector;
