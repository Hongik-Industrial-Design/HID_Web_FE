import { Link, useLocation } from "react-router-dom";

import { HeaderContainer, MainLogo } from "./Header.styled";

import HIDLogo from "@assets/HID-logo.svg";
import HIDHomeLogo from "@assets/HID-home-logo.svg";
import Navbar from "./Navbar/Navbar";
import Dropdown from "./Navbar/Dropdown/Dropdown";

// eslint-disable-next-line react/prop-types
const Header = ({ isHovered, setIsHovered }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <HeaderContainer $isHovered={isHovered} $isHomePage={isHomePage}>
        <Link to="/">
          {isHomePage ? (
            <MainLogo src={HIDHomeLogo} alt="Hongik Industrial Design Home Logo" />
          ) : (
            <MainLogo src={HIDLogo} alt="Hongik Industrial Design Logo" />
          )}
        </Link>
        <Navbar setIsHovered={setIsHovered} isHomePage={isHomePage} />
      </HeaderContainer>
      <Dropdown isHovered={isHovered} />
    </>
  );
};

export default Header;
