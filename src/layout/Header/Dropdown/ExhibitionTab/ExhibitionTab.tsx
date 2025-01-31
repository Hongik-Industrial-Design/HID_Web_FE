import { JSX } from 'react/jsx-runtime';

import { ExhibitionTabProps } from '../Dropdown.types';

import * as S from './ExhibitonTab.styled';

const ExhibitionTab = ({
  exhibitonType,
  timeline,
  isNavbarHovered,
  isDropdownOpen,
}: ExhibitionTabProps): JSX.Element => {
  return (
    <S.ExhibitionTabContainer
      $isNavbarHovered={isNavbarHovered}
      $isDropdownOpen={isDropdownOpen}
    >
      <S.Title>
        All {exhibitonType} Exhibition<span>.</span>
      </S.Title>
      <S.Timeline>
        {timeline.map((time, index) => (
          <S.Year key={index}>{time}</S.Year>
        ))}
      </S.Timeline>
    </S.ExhibitionTabContainer>
  );
};

export default ExhibitionTab;
