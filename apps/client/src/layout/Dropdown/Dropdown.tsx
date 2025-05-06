import { JSX } from 'react/jsx-runtime';

import { DropdownProps } from './Dropdown.types';

import GraduationTab from './Graduation/GraduationTab';
// import CommunityTab from './Community/CommunityTab';
import SearchTab from './Search/SearchTab';
import MobileDropdown from './Mobile/MobileDropdown';

import useDisableScroll from '@hooks/useDisableScroll';

import * as S from './Dropdown.styled';

const Dropdown = ({
  hoveredOption,
  hoveredDropdown,
  enterDropdown,
  leaveDropdown,
  isSearchTabOpened,
  handleSearchTab,
  isHamburgerClicked,
  setIsHamburgerClicked,
}: DropdownProps): JSX.Element => {
  useDisableScroll(isHamburgerClicked);

  return (
    <>
      <S.DropdownBackground
        $isRendered={
          hoveredOption !== '' || isSearchTabOpened || isHamburgerClicked
        }
        $isActive={hoveredDropdown !== '' || isSearchTabOpened}
        onClick={handleSearchTab}
      />
      <S.DropdownContainer
        $isRendered={
          hoveredOption !== '' || isSearchTabOpened || isHamburgerClicked
        }
        $isActive={hoveredDropdown !== '' || isSearchTabOpened}
      >
        {(hoveredOption === 'graduation' ||
          hoveredDropdown === 'graduation') && (
          <GraduationTab
            isRendered={hoveredOption === 'graduation'}
            isActive={hoveredDropdown === 'graduation'}
            enterDropdown={enterDropdown}
            leaveDropdown={leaveDropdown}
          />
        )}
        {/* {(hoveredOption === 'community' || hoveredDropdown === 'community') && (
          <CommunityTab
            isRendered={hoveredOption === 'community'}
            isActive={hoveredDropdown === 'community'}
            enterDropdown={enterDropdown}
            leaveDropdown={leaveDropdown}
          />
        )} */}
        {isHamburgerClicked && (
          <MobileDropdown setIsHamburgerClicked={setIsHamburgerClicked} />
        )}
      </S.DropdownContainer>

      {hoveredOption === '' &&
        hoveredDropdown === '' &&
        !isHamburgerClicked &&
        isSearchTabOpened && <SearchTab />}
    </>
  );
};

export default Dropdown;
