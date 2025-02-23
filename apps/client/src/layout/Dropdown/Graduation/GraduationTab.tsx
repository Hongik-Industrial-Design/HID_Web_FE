import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { GraduationTabProps } from '../Dropdown.types';

import * as S from './GraduationTab.styled';

const exhibitionInfos = {
  timeline: [2025, 2024, 2023, 2022, 2021],
  infos: [
    {
      year: 2025,
      title: 'New Normal',
      description:
        'Redefining the standard for a rapidly changing world. This exhibition explores the evolving relationship between society and design, presenting innovative perspectives that reflect the shifting norms of our time.',
    },
    {
      year: 2024,
      title: 'DESIGN•A',
      description:
        'Opening new possibilities in design. This exhibition showcases a harmonious blend of creativity and functionality, pushing the boundaries of conventional design thinking to inspire a sublime and meaningful approach.',
    },
    {
      year: 2023,
      title: 'Inter-',
      description:
        'The aesthetics of connection and interaction. This exhibition delves into the harmony between diverse elements, highlighting the importance of interplay in creating impactful design solutions.',
    },
    {
      year: 2022,
      title: 'Any Wise',
      description:
        'Moments of wise choices in design. Through insightful and thought-provoking works, this exhibition emphasizes the importance of wisdom and intuition in the creative process, celebrating meaningful design decisions.',
    },
    {
      year: 2021,
      title: 'Without',
      description:
        'Creativity born from absence. This exhibition invites viewers into a world of design inspired by what is missing, demonstrating how limitations can give rise to limitless creativity and imaginative solutions.',
    },
  ],
};

interface ExhibitionInfos {
  year: number;
  title: string;
  description: string;
}

const GraduationTab = ({
  isRendered,
  isActive,
  enterDropdown,
  leaveDropdown,
}: GraduationTabProps): JSX.Element => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [dropdownInfos, setDropdownInfos] = useState<
    ExhibitionInfos | undefined
  >(exhibitionInfos.infos[0]);

  const handleHoveredYear = (year: number | null) => {
    setHoveredYear(year);
  };

  const handleDropdownInfos = (year: number) => {
    const hoveredExhibitionInfos = exhibitionInfos.infos.find(
      (info) => info.year === year
    );

    setDropdownInfos(hoveredExhibitionInfos);
  };

  const handleMouseEnter = (year: number) => {
    handleHoveredYear(year);
    handleDropdownInfos(year);
  };

  const handleMouseLeave = () => {
    handleHoveredYear(null);
  };

  return (
    <S.GraduationTabContainer
      $isRendered={isRendered}
      $isActive={isActive}
      onMouseEnter={() => enterDropdown('graduation')}
      onMouseLeave={() => leaveDropdown()}
    >
      <S.ExhibitionInfos>
        <S.ExhibitionTitle>{dropdownInfos?.title}</S.ExhibitionTitle>
        <S.InfoDivider />
        <S.ExhibitionDescription>
          {dropdownInfos?.description}
        </S.ExhibitionDescription>
      </S.ExhibitionInfos>
      <S.ExhibitionPosterContainer>
        <S.ExhibitonPosterList>
          {exhibitionInfos.timeline.map((year) => (
            <S.ExhibitonPosterItem
              key={year}
              onMouseEnter={handleMouseEnter.bind(null, year)}
              onMouseLeave={handleMouseLeave}
            >
              <S.ExhibitonLink to={`/graduation/${year}`}>
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
