import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { GraduationTabProps } from '../Dropdown.types';

import * as S from './GraduationTab.styled';

const exhibitionInfos = {
  title: 'New Normal',
  description:
    'Cheems is a modular console that uses generative AI to enable players to create games. It responds to the rising trend of players wanting to shape their own gaming experiences.',
  timeline: [2025, 2024, 2023, 2022, 2021],
};

const GraduationTab = ({
  isRendered,
  isActive,
  enterDropdown,
  leaveDropdown,
}: GraduationTabProps): JSX.Element => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const handleHoveredYear = (year: number | null) => {
    setHoveredYear(year);
  };

  return (
    <S.GraduationTabContainer
      $isRendered={isRendered}
      $isActive={isActive}
      onMouseEnter={() => enterDropdown('graduation')}
      onMouseLeave={() => leaveDropdown()}
    >
      <S.ExhibitionInfos>
        <S.ExhibitionTitle>{exhibitionInfos.title}</S.ExhibitionTitle>
        <S.InfoDivider />
        <S.ExhibitionDescription>
          {exhibitionInfos.description}
        </S.ExhibitionDescription>
      </S.ExhibitionInfos>
      <S.ExhibitionPosterContainer>
        <S.ExhibitonPosterList>
          {exhibitionInfos.timeline.map((year) => (
            <S.ExhibitonPosterItem
              key={year}
              onMouseEnter={() => handleHoveredYear(year)}
              onMouseLeave={() => handleHoveredYear(null)}
            >
              <S.ExhibitonLink href={`/graduation/${year}`}>
                <S.ExhibitionPoster
                  src={`/Dropdown-Poster/${year}_DD_Thumbnail.jpg`}
                  alt={`${year}_DD_Thumbnail`}
                  $isHovered={hoveredYear === year}
                />
              </S.ExhibitonLink>
              <S.OverlappedYearContainer $isHovered={hoveredYear === year}>
                <S.ExhibitionYear>{year}</S.ExhibitionYear>
              </S.OverlappedYearContainer>
            </S.ExhibitonPosterItem>
          ))}
        </S.ExhibitonPosterList>
      </S.ExhibitionPosterContainer>
    </S.GraduationTabContainer>
  );
};

export default GraduationTab;
