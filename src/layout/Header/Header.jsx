import { Link } from "react-router-dom";

import { HeaderContainer, MainLogo } from "./Header.styled";

import HIDLogo from "@assets/HID-logo.svg";
import Navbar from "./Navbar/Navbar";
import Dropdown from "./Navbar/Dropdown/Dropdown";

// eslint-disable-next-line react/prop-types
const Header = ({ isHovered, setIsHovered }) => {
  return (
    <>
      <HeaderContainer $isHovered={isHovered}>
        <Link to="/">
          <MainLogo src={HIDLogo} alt="Hongik Industrial Design Logo" />
        </Link>
        <Navbar setIsHovered={setIsHovered} />
      </HeaderContainer>
      <Dropdown isHovered={isHovered} />
    </>
  );
};

export default Header;
