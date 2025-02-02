import { JSX } from 'react/jsx-runtime';

import { GraduationTabProps } from '../Dropdown.types';

import exhibitionLogo from '@assets/icons/svgs/logos/2024_newnormal.svg';

import * as S from './GraduationTab.styled';

const GraduationTab = ({
  timeline,
  isNavbarHovered,
  isDropdownOpen,
}: GraduationTabProps): JSX.Element => {
  const exhibitionInfos = {
    title: 'New Normal',
    description:
      'Cheems is a modular console that uses generative AI to enable players to create games. It responds to the rising trend of players wanting to shape their own gaming experiences.',
    timeline: timeline,
  };

  return (
    <S.ExhibitionTabContainer
      $isNavbarHovered={isNavbarHovered}
      $isDropdownOpen={isDropdownOpen}
    >
      <S.ExhibitionPreview>
        <S.ExhibitionLogoContainer>
          <S.ExhibitionLogo src={exhibitionLogo} alt="2024 New Normal" />
        </S.ExhibitionLogoContainer>
        <S.ExhibitionInfos>
          <S.ExhibitionTitle>{exhibitionInfos.title}</S.ExhibitionTitle>
          <S.InfoDivider />
          <S.ExhibitionDescription>
            {exhibitionInfos.description}
          </S.ExhibitionDescription>
        </S.ExhibitionInfos>
      </S.ExhibitionPreview>
    </S.ExhibitionTabContainer>
  );
};

export default GraduationTab;
