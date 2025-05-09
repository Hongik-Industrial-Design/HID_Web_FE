import { JSX } from 'react/jsx-runtime';

import { DropdownProps } from './Dropdown.types';

import GraduationTab from './Graduation/GraduationTab';
import SearchTab from './Search/SearchTab';
import MobileDropdown from './Mobile/MobileDropdown';
// import CommunityTab from './Community/CommunityTab';

import { useDropdownStore } from '@stores/useDropdownStore';
import { isTouchDevice } from '@utils/device';

import * as S from './Dropdown.styled';

const Dropdown = ({
  hoveredDropdown,
  enterDropdown,
  leaveDropdown,
  isHamburgerClicked,
  setIsHamburgerClicked,
}: DropdownProps): JSX.Element => {
  const {
    hoveredNavbarOption,
    setHoveredNavbarOption,
    isSearchTabOpened,
    setSearchTabOpened,
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
        $isActive={hoveredDropdown !== '' || isSearchTabOpened}
        onClick={handleBackgroundClick}
      />
      <S.DropdownContainer
        $isRendered={hoveredNavbarOption !== '' || isHamburgerClicked}
        $isActive={hoveredDropdown !== ''}
      >
        {(hoveredNavbarOption === 'graduation' ||
          hoveredDropdown === 'graduation') && (
          <GraduationTab
            isRendered={hoveredNavbarOption === 'graduation'}
            isActive={hoveredDropdown === 'graduation'}
            enterDropdown={enterDropdown}
            leaveDropdown={leaveDropdown}
          />
        )}
        {/* {(hoveredNavbarOption === 'community' || hoveredDropdown === 'community') && (
          <CommunityTab
            isRendered={hoveredNavbarOption === 'community'}
            isActive={hoveredDropdown === 'community'}
            enterDropdown={enterDropdown}
            leaveDropdown={leaveDropdown}
          />
        )} */}
        {isHamburgerClicked && (
          <MobileDropdown setIsHamburgerClicked={setIsHamburgerClicked} />
        )}
      </S.DropdownContainer>

      {hoveredNavbarOption === '' &&
        hoveredDropdown === '' &&
        !isHamburgerClicked &&
        isSearchTabOpened && <SearchTab />}
    </>
  );
};

export default Dropdown;
