/* eslint-disable react/prop-types */
// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { NavItem, NavItemsContainer } from "./Navbar.styled";
import SearchButton from "./SearchButton/SearchButton";

const Navbar = ({
  isHovered,
  setIsHovered,
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
        <NavItem
        // $isActive={activeMenu === "Faculty"}
        // onClick={() => setActiveMenu("Faculty")}
        >
          Faculty
        </NavItem>
        <Link to="/graduation">
          <NavItem
            $currentPage={currentPath.startsWith("/graduation")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Graduation Exhibition
          </NavItem>
        </Link>
        <NavItem
          $currentPage={currentPath.startsWith("/student")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Student Exhibition
        </NavItem>
        <NavItem
        // $isActive={activeTab === "CourseTrack"}
        // onClick={() => setActiveTab("CourseTrack")}
        >
          CourseTrack
        </NavItem>
        <NavItem
        // $isActive={activeTab === "Community"}
        // onClick={() => setActiveTab("Community")}
        >
          Community
        </NavItem>
        <NavItem
        // $isActive={activeTab === "Contact"}
        // onClick={() => setActiveTab("Contact")}
        >
          Contact
        </NavItem>
        <SearchButton isHomePage={isHomePage} scrolled={scrolled} />
      </NavItemsContainer>
    </>
  );
};

export default Navbar;
