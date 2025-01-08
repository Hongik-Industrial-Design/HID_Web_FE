import { Link, useLocation } from 'react-router';

import { NavItem, NavItemsContainer } from './Navbar.styled';

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
    <>
      <NavItemsContainer
        $isHovered={isHovered}
        $dropdownOpen={isDropdownOpen}
        $isHomePage={isHomePage}
        $scrolled={scrolled}
      >
        <Link to="/faculty">
          <NavItem
            $currentPage={currentPath.startsWith('/faculty')}
            // $isActive={activeMenu === "Faculty"}
            // onClick={() => setActiveMenu("Faculty")}
          >
            Faculty
          </NavItem>
        </Link>
        <Link to="/graduation">
          <NavItem
            $currentPage={currentPath.startsWith('/graduation')}
            onMouseEnter={() => handleNavbarHover()}
            onMouseLeave={() => handleNavbarHover()}
          >
            Graduation Exhibition
          </NavItem>
        </Link>
        <NavItem
        // $currentPage={currentPath.startsWith("/student")}
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        >
          Student Exhibition
        </NavItem>
        <NavItem
        // $isActive={activeTab === "CourseTrack"}
        // onClick={() => setActiveTab("CourseTrack")}
        >
          CourseTrack
        </NavItem>
        <Link to="/community">
          <NavItem
            $currentPage={currentPath.startsWith('/community')}
            onMouseEnter={() => handleNavbarHover()}
            onMouseLeave={() => handleNavbarHover()}
          >
            Community
          </NavItem>
        </Link>
        <Link to="/contact">
          <NavItem
            $currentPage={currentPath.startsWith('/contact')}
            // $isActive={activeTab === "Contact"}
            // onClick={() => setActiveTab("Contact")}
          >
            Contact
          </NavItem>
        </Link>
        <SearchButton isHomePage={isHomePage} scrolled={scrolled} />
      </NavItemsContainer>
    </>
  );
};

export default Navbar;
