import { JSX } from 'react/jsx-runtime';

import * as S from './ExhibitonTab.styled';

const ExhibitionTab = ({
  exhibitonType,
  timeline,
  isNavbarHovered,
  isDropdownOpen,
}): JSX.Element => {
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
