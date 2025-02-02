import { JSX } from 'react/jsx-runtime';

import { GraduationTabProps } from '../Dropdown.types';

import exhibitionLogo from '@assets/svgs/logos/2024_newnormal.svg';

import * as S from './GraduationTab.styled';

const GraduationTab = ({
  isRendered,
  isActive,
  enterDropdown,
  leaveDropdown,
}: GraduationTabProps): JSX.Element => {
  const exhibitionInfos = {
    title: 'New Normal',
    description:
      'Cheems is a modular console that uses generative AI to enable players to create games. It responds to the rising trend of players wanting to shape their own gaming experiences.',
    timeline: [2025, 2024, 2023, 2021, 2020],
  };

  return (
    <S.GraduationTabContainer
      $isRendered={isRendered}
      $isActive={isActive}
      onMouseEnter={() => enterDropdown('graduation')}
      onMouseLeave={() => leaveDropdown()}
    >
      <S.GraduationPreview>
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
      </S.GraduationPreview>
    </S.GraduationTabContainer>
  );
};

export default GraduationTab;
