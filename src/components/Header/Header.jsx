import HIDLogo from "@assets/HID-logo.svg";
import { HeaderContainer, MainLogo } from "./Header.styled";
import Navbar from "./Navbar/Navbar";
import Dropdown from "./Navbar/Dropdown/Dropdown";
import { Link } from "react-router-dom";

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
