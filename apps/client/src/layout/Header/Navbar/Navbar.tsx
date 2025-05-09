import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { Location, useLocation } from 'react-router';

import { NavbarProps } from './Navbar.types';

import { ARCHIVE_YEAR_LIST } from '@constants/archive';

import { MagnifyGlassIcon } from '@icons/Search';

import { isTouchDevice } from '@utils/device';
import { useDropdownStore } from '@stores/useDropdownStore';

import * as S from './Navbar.styled';

const Navbar = ({
  isNavbarHovered,
  enterNavbar,
  leaveNavbar,
  isDropdownHover,
  handleSearchTab,
  isHomePage,
  scrolled,
  handleGNBClick,
}: NavbarProps): JSX.Element => {
  const location: Location = useLocation();
  const currentPath = location.pathname;

  const { isSearchTabOpened, setHoveredNavbarOption } = useDropdownStore();

  const [touchedOnce, setTouchedOnce] = useState<boolean>(false);

  const handleGraduationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isTouchDevice) return;

    e.preventDefault();

    if (!touchedOnce) {
      setHoveredNavbarOption('graduation'); // 드롭다운 열기
      setTouchedOnce(true);
    } else {
      setHoveredNavbarOption('');
      setTouchedOnce(false);
    }
  };

  return (
    <S.NavbarContainer
      $isNavbarHovered={isNavbarHovered}
      $isDropdownHover={isDropdownHover}
      $isHomePage={isHomePage}
      $isSearchTabOpened={isSearchTabOpened}
      $scrolled={scrolled}
    >
      {/* <S.NavItem
        $currentPage={currentPath.startsWith('/community')}
        $disableHighlightBar={isNavbarHovered || isDropdownHover}
        onMouseEnter={() => enterNavbar('community')}
        onMouseLeave={() => leaveNavbar()}
      >
        <S.NavItemLink to="/community">Community</S.NavItemLink>
      </S.NavItem> */}

      <S.NavItem
        $currentPage={currentPath.startsWith('/graduation')}
        $disableHighlightBar={isNavbarHovered || isDropdownHover}
        onMouseEnter={() => enterNavbar('graduation')}
        onMouseLeave={() => leaveNavbar()}
        onClick={handleGNBClick}
      >
        <S.NavItemLink
          to={`/graduation/${ARCHIVE_YEAR_LIST[0]}`}
          onClick={handleGraduationClick}
        >
          Graduation Exhibition
        </S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/student')}
        $disableHighlightBar={isNavbarHovered || isDropdownHover}
        onClick={handleGNBClick}
      >
        {/* 추후 0번 index로 기본값 설정 (BE 테스트 기본값 때문에 1번 index로 임시 설정) */}
        <S.NavItemLink to={`/student/${ARCHIVE_YEAR_LIST[0]}`}>
          Student Exhibition
        </S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/faculty')}
        onClick={handleGNBClick}
      >
        <S.NavItemLink to="/faculty">Faculty</S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/contact')}
        onClick={handleGNBClick}
      >
        <S.NavItemLink to="/contact">Contact</S.NavItemLink>
      </S.NavItem>

      <S.NavItem>
        <S.SearchButton onClick={handleSearchTab}>
          <MagnifyGlassIcon
            $isHomePage={isHomePage}
            $scrolled={scrolled}
            $isSearchTabOpened={isSearchTabOpened}
          />
        </S.SearchButton>
      </S.NavItem>
    </S.NavbarContainer>
  );
};

export default Navbar;
