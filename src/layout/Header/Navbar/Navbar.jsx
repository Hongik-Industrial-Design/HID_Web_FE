import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavItem, NavItemsContainer } from "./Navbar.styled";
import SearchButton from "./SearchButton/SearchButton";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setIsHovered, isHomePage, scrolled }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <NavItemsContainer $isHomePage={isHomePage} $scrolled={scrolled}>
        <NavItem
          $isActive={activeMenu === "Faculty"}
          onClick={() => setActiveMenu("Faculty")}
        >
          Faculty
        </NavItem>
        <Link to="/graduation">
          <NavItem
            // $isActive={activeMenu === "Graduation Exhibition"}
            $currentPage={currentPath === "/graduation"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setActiveMenu("Graduation Exhibition")}
          >
            Graduation Exhibition
          </NavItem>
        </Link>
        <NavItem
          $isActive={activeMenu === "Student Exhibition"}
          onClick={() => setActiveMenu("Student Exhibition")}
        >
          Student Exhibition
        </NavItem>
        <NavItem
          $isActive={activeMenu === "CourseTrack"}
          onClick={() => setActiveMenu("CourseTrack")}
        >
          CourseTrack
        </NavItem>
        <NavItem
          $isActive={activeMenu === "Community"}
          onClick={() => setActiveMenu("Community")}
        >
          Community
        </NavItem>
        <NavItem
          $isActive={activeMenu === "Contact"}
          onClick={() => setActiveMenu("Contact")}
        >
          Contact
        </NavItem>
        <SearchButton />
      </NavItemsContainer>
    </>
  );
};

export default Navbar;
