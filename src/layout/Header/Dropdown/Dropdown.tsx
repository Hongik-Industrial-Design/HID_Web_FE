import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { DropdownProps } from './Dropdown.types';

import GraduationTab from './Graduation/GraduationTab';

import * as S from './Dropdown.styled';

const Dropdown = ({
  hoveredOption,
  isDropdownOpen,
  enterDropdown,
  leaveDropdown,
}: DropdownProps): JSX.Element => {
  const [timeline, setTimeline] = useState<number[]>([]);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get('/data/timeline.json');
        setTimeline(response.data);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchTimelineData();
  }, []);

  return (
    <>
      <S.DropdownBackground
        $isNavbarHovered={hoveredOption !== ''}
        $isDropdownOpen={isDropdownOpen}
      />
      <S.DropdownContainer
        $isNavbarHovered={hoveredOption !== ''}
        $isDropdownOpen={isDropdownOpen}
        onMouseEnter={enterDropdown}
        onMouseLeave={leaveDropdown}
      >
        <GraduationTab
          timeline={timeline}
          isNavbarHovered={hoveredOption === 'graduation'}
          isDropdownOpen={isDropdownOpen}
        />
      </S.DropdownContainer>
    </>
  );
};

export default Dropdown;
