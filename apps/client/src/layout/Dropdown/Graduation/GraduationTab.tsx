import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { GraduationTabProps } from '../Dropdown.types';
import { GRADUATION_DROPDOWN_CONTENT } from '@constants/archive';

import * as S from './GraduationTab.styled';
import { isTouchDevice } from '@utils/device';
import { useDropdownStore } from '@stores/useDropdownStore';
import { useExhibitionYearStore } from '@stores/useExhibitionYearStore';

interface ExhibitionInfos {
  year: number;
  title: string;
  description: string;
}

const GraduationTab = ({
  isRendered,
  isActive,
}: GraduationTabProps): JSX.Element => {
  const { setHoveredNavbarOption } = useDropdownStore();
  const { setSelectedYear } = useExhibitionYearStore();

  const [hoveredYear, setHoveredYear] = useState<number | null>(null);
  const [dropdownInfos, setDropdownInfos] = useState<
    ExhibitionInfos | undefined
  >(GRADUATION_DROPDOWN_CONTENT.infos[0]);

  const handleHoveredYear = (year: number | null) => {
    setHoveredYear(year);
  };

  const handleDropdownInfos = (year: number) => {
    const hoveredExhibitionInfos = GRADUATION_DROPDOWN_CONTENT.infos.find(
      (info) => info.year === year
    );

    setDropdownInfos(hoveredExhibitionInfos);
  };

  const handleMouseEnter = (year: number) => {
    if (isTouchDevice) return;

    handleHoveredYear(year);
    handleDropdownInfos(year);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    handleHoveredYear(null);
  };

  const handlePosterMobileClick = (year: number) => {
    setSelectedYear('graduation', year.toString()); // 전시 연도(Global) 상태 업데이트

    if (!isTouchDevice) return;

    handleHoveredYear(year);
    handleDropdownInfos(year);
    setHoveredNavbarOption('');
  };

  return (
    <S.GraduationTabContainer
      $isRendered={isRendered}
      $isActive={isActive}
      onMouseEnter={() => setHoveredNavbarOption('graduation')}
      onMouseLeave={() => setHoveredNavbarOption('')}
    >
      {/* Infos */}
      <S.ExhibitionInfos>
        <S.ExhibitionTitle>{dropdownInfos?.title}</S.ExhibitionTitle>
        <S.InfoDivider />
        <S.ExhibitionDescription>
          {dropdownInfos?.description}
        </S.ExhibitionDescription>
      </S.ExhibitionInfos>

      {/* Poster */}
      <S.ExhibitionPosterContainer>
        <S.ExhibitonPosterList>
          {GRADUATION_DROPDOWN_CONTENT.timeline.map((year) => (
            <S.ExhibitonPosterItem
              key={year}
              onClick={handlePosterMobileClick.bind(null, Number(year))}
              onMouseEnter={handleMouseEnter.bind(null, Number(year))}
              onMouseLeave={handleMouseLeave}
            >
              <S.ExhibitonLink to={`/graduation/${year}`}>
                <S.ExhibitionPoster
                  src={`/Dropdown-Poster/${year}_DD_Thumbnail.jpg`}
                  alt={`${year}_DD_Thumbnail`}
                  $isHovered={hoveredYear === Number(year)}
                />
              </S.ExhibitonLink>
              <S.OverlappedYearContainer
                $isHovered={hoveredYear === Number(year)}
              >
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
