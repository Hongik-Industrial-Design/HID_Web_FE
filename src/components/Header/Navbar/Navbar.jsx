import { useState } from "react";

import { NavItem, NavItemsContainer } from "./Navbar.styled";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setIsHovered }) => {
  const [activeMenu, setActiveMenu] = useState("Graduation Exhibition");

  return (
    <>
      <NavItemsContainer>
        <NavItem
          $isActive={activeMenu === "Faculty"}
          onClick={() => setActiveMenu("Faculty")}
        >
          Faculty
        </NavItem>
        <Link to="/graduation">
          <NavItem
            $isActive={activeMenu === "Graduation Exhibition"}
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
      </NavItemsContainer>
    </>
  );
};

export default Navbar;
