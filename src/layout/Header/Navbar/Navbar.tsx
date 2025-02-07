import { JSX } from 'react/jsx-runtime';
import { Location, useLocation } from 'react-router';

import { NavbarProps } from './Navbar.types';

import { MagnifyGlassIcon } from '@icons/Search';

import * as S from './Navbar.styled';

const Navbar = ({
  isNavbarHovered,
  enterNavbar,
  leaveNavbar,
  isDropdownHover,
  isHomePage,
  scrolled,
}: NavbarProps): JSX.Element => {
  const timeline = [2025, 2024, 2023, 2022, 2021];

  const location: Location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.NavbarContainer
      $isNavbarHovered={isNavbarHovered}
      $isDropdownHover={isDropdownHover}
      $isHomePage={isHomePage}
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
        <S.NavItemLink to={`/graduation/${timeline[1]}`}>
          Graduation Exhibition
        </S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/student')}
        $disableHighlightBar={isNavbarHovered || isDropdownHover}
      >
        <S.NavItemLink to="/student">Student Exhibition</S.NavItemLink>
      </S.NavItem>

      <S.NavItem $currentPage={currentPath.startsWith('/faculty')}>
        <S.NavItemLink to="/faculty">Faculty</S.NavItemLink>
      </S.NavItem>

      <S.NavItem $currentPage={currentPath.startsWith('/contact')}>
        <S.NavItemLink to="/contact">Contact</S.NavItemLink>
      </S.NavItem>

      <S.NavItem>
        <S.SearchButton>
          <MagnifyGlassIcon $isHomePage={isHomePage} $scrolled={scrolled} />
        </S.SearchButton>
      </S.NavItem>

      {/* <S.NavItem $currentPage={currentPath.startsWith('/course-track')}>
        <S.NavItemLink to="/course-track">CourseTrack</S.NavItemLink>
      </S.NavItem> */}
    </S.NavbarContainer>
  );
};

export default Navbar;
