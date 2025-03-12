import { JSX } from 'react/jsx-runtime';
import { Location, useLocation } from 'react-router';

import { ARCHIVE_YEAR_LIST } from '@constants/archiveYear';

import { NavbarProps } from './Navbar.types';

import { MagnifyGlassIcon } from '@icons/Search';

import * as S from './Navbar.styled';

const Navbar = ({
  isNavbarHovered,
  enterNavbar,
  leaveNavbar,
  isDropdownHover,
  isSearchTabOpened,
  handleSearchTab,
  isHomePage,
  scrolled,
}: NavbarProps): JSX.Element => {
  const location: Location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.NavbarContainer
      $isNavbarHovered={isNavbarHovered}
      $isDropdownHover={isDropdownHover}
      $isHomePage={isHomePage}
      $isSearchTabOpened={isSearchTabOpened}
      $scrolled={scrolled}
    >
      <S.NavItem
        $currentPage={currentPath.startsWith('/community')}
        $disableHighlightBar={isNavbarHovered || isDropdownHover}
        onMouseEnter={() => enterNavbar('community')}
        onMouseLeave={() => leaveNavbar()}
      >
        <S.NavItemLink to="/community">Community</S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/graduation')}
        $disableHighlightBar={isNavbarHovered || isDropdownHover}
        onMouseEnter={() => enterNavbar('graduation')}
        onMouseLeave={() => leaveNavbar()}
      >
        <S.NavItemLink to={`/graduation/${ARCHIVE_YEAR_LIST[0]}`}>
          Graduation Exhibition
        </S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/student')}
        $disableHighlightBar={isNavbarHovered || isDropdownHover}
      >
        {/* 추후 0번 index로 기본값 설정 (BE 테스트 기본값 때문에 1번 index로 임시 설정) */}
        <S.NavItemLink to={`/student/${ARCHIVE_YEAR_LIST[0]}`}>
          Student Exhibition
        </S.NavItemLink>
      </S.NavItem>

      <S.NavItem $currentPage={currentPath.startsWith('/faculty')}>
        <S.NavItemLink to="/faculty">Faculty</S.NavItemLink>
      </S.NavItem>

      <S.NavItem $currentPage={currentPath.startsWith('/contact')}>
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

      {/* <S.NavItem $currentPage={currentPath.startsWith('/course-track')}>
        <S.NavItemLink to="/course-track">CourseTrack</S.NavItemLink>
      </S.NavItem> */}
    </S.NavbarContainer>
  );
};

export default Navbar;
