import HIDLogo from "@assets/HID-logo.svg";
import { HeaderContainer, MainLogo } from "./Header.styled";
import Navbar from "./Navbar/Navbar";
import Dropdown from "./Navbar/Dropdown/Dropdown";

// eslint-disable-next-line react/prop-types
const Header = ({ isHovered, setIsHovered }) => {
  return (
    <>
      <HeaderContainer $isHovered={isHovered}>
        <MainLogo src={HIDLogo} alt="Hongik Industrial Design Logo" />
        <Navbar setIsHovered={setIsHovered} />
      </HeaderContainer>
      <Dropdown isHovered={isHovered} />
    </>
  );
};

export default Header;
