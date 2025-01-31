import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { DropdownProps } from './Dropdown.types';

import ExhibitionTab from './ExhibitionTab/ExhibitionTab';

import * as S from './Dropdown.styled';

const Dropdown = ({
  isNavbarHovered,
  isDropdownOpen,
  enterDropdown,
  leaveDropdown,
}: DropdownProps): JSX.Element => {
  const [timeline, setTimeline] = useState<number[]>([]);

  useEffect(() => {
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get('/data/timeline.json');
        const timelineData = response.data;

        console.log(timelineData);

        const reorderedData = reverseArray(timelineData);
        console.log(reorderedData);

        setTimeline(reorderedData);
      } catch (error) {
        console.error('Error occured: ', error);
      }
    };

    fetchTimelineData();
  }, []);

  const reverseArray = (arr: number[]): number[] => {
    return [...arr].reverse();
  };

  return (
    <>
      <S.DropdownBackground
        $isNavbarHovered={isNavbarHovered}
        $isDropdownOpen={isDropdownOpen}
      />
      <S.DropdownContainer
        $isNavbarHovered={isNavbarHovered}
        $isDropdownOpen={isDropdownOpen}
        onMouseEnter={enterDropdown}
        onMouseLeave={leaveDropdown}
      >
        <ExhibitionTab
          exhibitonType={'Graduation'}
          timeline={timeline}
          isNavbarHovered={isNavbarHovered}
          isDropdownOpen={isDropdownOpen}
        />
      </S.DropdownContainer>
    </>
  );
};

export default Dropdown;
