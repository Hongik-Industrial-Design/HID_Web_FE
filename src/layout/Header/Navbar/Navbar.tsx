import { JSX } from 'react/jsx-runtime';
import { Link, useLocation } from 'react-router';

import { NavbarProps } from './Navbar.types';

import SearchButton from './SearchButton/SearchButton';

import * as S from './Navbar.styled';

const Navbar = ({
  isNavbarHovered,
  handleNavbarHover,
  isDropdownOpen,
  isHomePage,
  scrolled,
}: NavbarProps): JSX.Element => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.NavItemsContainer
      $isNavbarHovered={isNavbarHovered}
      $isDropdownOpen={isDropdownOpen}
      $isHomePage={isHomePage}
      $scrolled={scrolled}
    >
      <Link to="/faculty">
        <S.NavItem
          $currentPage={currentPath.startsWith('/faculty')}
          // $isActive={activeMenu === "Faculty"}
          // onClick={() => setActiveMenu("Faculty")}
        >
          Faculty
        </S.NavItem>
      </Link>
      <Link to="/graduation">
        <S.NavItem
          $currentPage={currentPath.startsWith('/graduation')}
          onMouseEnter={() => handleNavbarHover()}
          onMouseLeave={() => handleNavbarHover()}
        >
          Graduation Exhibition
        </S.NavItem>
      </Link>
      <S.NavItem
      // $currentPage={currentPath.startsWith("/student")}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      >
        Student Exhibition
      </S.NavItem>
      <S.NavItem
      // $isActive={activeTab === "CourseTrack"}
      // onClick={() => setActiveTab("CourseTrack")}
      >
        CourseTrack
      </S.NavItem>
      <Link to="/community">
        <S.NavItem
          $currentPage={currentPath.startsWith('/community')}
          onMouseEnter={() => handleNavbarHover()}
          onMouseLeave={() => handleNavbarHover()}
        >
          Community
        </S.NavItem>
      </Link>
      <Link to="/contact">
        <S.NavItem
          $currentPage={currentPath.startsWith('/contact')}
          // $isActive={activeTab === "Contact"}
          // onClick={() => setActiveTab("Contact")}
        >
          Contact
        </S.NavItem>
      </Link>
      <SearchButton isHomePage={isHomePage} scrolled={scrolled} />
    </S.NavItemsContainer>
  );
};

export default Navbar;
