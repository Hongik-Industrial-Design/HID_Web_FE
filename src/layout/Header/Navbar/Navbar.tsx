import { Link, useLocation } from 'react-router';

import * as S from './Navbar.styled';

import SearchButton from './SearchButton/SearchButton';

const Navbar = ({
  isHovered,
  handleNavbarHover,
  isDropdownOpen,
  isHomePage,
  scrolled,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <S.NavItemsContainer
      $isHovered={isHovered}
      $dropdownOpen={isDropdownOpen}
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
