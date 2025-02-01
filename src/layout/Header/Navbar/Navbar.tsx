import { JSX } from 'react/jsx-runtime';
import { Location, useLocation } from 'react-router';

import { NavbarProps } from './Navbar.types';

import { MagnifyGlassIcon } from '@icons/Search';

import * as S from './Navbar.styled';

const Navbar = ({
  isNavbarHovered,
  handleNavbarHover,
  isDropdownOpen,
  isHomePage,
  scrolled,
}: NavbarProps): JSX.Element => {
  const location: Location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.NavbarContainer
      $isNavbarHovered={isNavbarHovered}
      $isDropdownOpen={isDropdownOpen}
      $isHomePage={isHomePage}
      $scrolled={scrolled}
    >
      <S.NavItem
        $currentPage={currentPath.startsWith('/community')}
        // onMouseEnter={() => handleNavbarHover()}
        // onMouseLeave={() => handleNavbarHover()}
      >
        <S.NavItemLink to="/community">Community</S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/graduation')}
        onMouseEnter={() => handleNavbarHover()}
        onMouseLeave={() => handleNavbarHover()}
      >
        <S.NavItemLink to="/graduation">Graduation Exhibition</S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/student')}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
      >
        <S.NavItemLink to="/student">Student Exhibition</S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/course-track')}
        // $isActive={activeTab === "CourseTrack"}
        // onClick={() => setActiveTab("CourseTrack")}
      >
        <S.NavItemLink to="/course-track">CourseTrack</S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/faculty')}
        // $isActive={activeMenu === "Faculty"}
        // onClick={() => setActiveMenu("Faculty")}
      >
        <S.NavItemLink to="/faculty">Faculty</S.NavItemLink>
      </S.NavItem>

      <S.NavItem
        $currentPage={currentPath.startsWith('/contact')}
        // $isActive={activeTab === "Contact"}
        // onClick={() => setActiveTab("Contact")}
      >
        <S.NavItemLink to="/contact">Contact</S.NavItemLink>
      </S.NavItem>

      <S.NavItem>
        <S.SearchButton>
          <MagnifyGlassIcon $isHomePage={isHomePage} $scrolled={scrolled} />
        </S.SearchButton>
      </S.NavItem>
    </S.NavbarContainer>
  );
};

export default Navbar;
