import { JSX } from 'react/jsx-runtime';

import GraduationTab from './Graduation/GraduationTab';
import SearchTab from './Search/SearchTab';
import MobileDropdown from './Mobile/MobileDropdown';
// import CommunityTab from './Community/CommunityTab';

import { useDropdownStore } from '@stores/useDropdownStore';
import { isTouchDevice } from '@utils/device';

import * as S from './Dropdown.styled';

const Dropdown = (): JSX.Element => {
  const {
    hoveredNavbarOption,
    setHoveredNavbarOption,
    isSearchTabOpened,
    setSearchTabOpened,
    isHamburgerClicked,
  } = useDropdownStore();

  const handleBackgroundClick = () => {
    if (isTouchDevice && hoveredNavbarOption === 'graduation') {
      setHoveredNavbarOption(''); // Dropdown 닫기 (Mobile)
      return;
    }

    setSearchTabOpened(false); // 검색 탭 닫기 (Desktop & Mobile)
  };

  return (
    <>
      <S.DropdownBackground
        $isRendered={
          hoveredNavbarOption !== '' || isSearchTabOpened || isHamburgerClicked
        }
        $isActive={hoveredNavbarOption !== '' || isSearchTabOpened}
        onClick={handleBackgroundClick}
      />
      <S.DropdownContainer
        $isRendered={hoveredNavbarOption !== '' || isHamburgerClicked}
        $isActive={hoveredNavbarOption !== ''}
      >
        {(hoveredNavbarOption === 'graduation' ||
          hoveredNavbarOption === 'graduation') && (
          <GraduationTab
            isRendered={hoveredNavbarOption === 'graduation'}
            isActive={hoveredNavbarOption === 'graduation'}
          />
        )}
        {/* {(hoveredNavbarOption === 'community' || hoveredNavbarOption === 'community') && (
          <CommunityTab
            isRendered={hoveredNavbarOption === 'community'}
            isActive={hoveredNavbarOption === 'community'}
            
          />
        )} */}
        {isHamburgerClicked && <MobileDropdown />}
      </S.DropdownContainer>

      {hoveredNavbarOption === '' &&
        hoveredNavbarOption === '' &&
        !isHamburgerClicked &&
        isSearchTabOpened && <SearchTab />}
    </>
  );
};

export default Dropdown;
