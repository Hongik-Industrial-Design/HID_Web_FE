import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { GRADUATION_EXHIBITION_YEAR_LIST } from '@constants/Exhibition';
import { DropdownArrow } from '@icons/Arrow';

import * as S from './YearSelector.styled';

type YearSelectorProps = {
  selectedExhibitonYear: string;
  handleExhibitionYearChange: (year: string) => void;
};

const YearSelector = ({
  selectedExhibitonYear,
  handleExhibitionYearChange,
}: YearSelectorProps): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleDropdownClick = () => setIsDropdownOpen(!isDropdownOpen);

  const handleYearButtonClick = (year: string) => {
    handleExhibitionYearChange(year);
    setIsDropdownOpen(false);
  };

  return (
    <S.YearSelectorContainer>
      <S.YearSelectorTitle>Select Year</S.YearSelectorTitle>
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
    </S.YearSelectorContainer>
  );
};

export default YearSelector;
