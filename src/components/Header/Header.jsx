import HIDLogo from "@assets/HID-logo.svg";
import { HeaderContainer, MainLogo } from "./Header.styled";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <MainLogo src={HIDLogo} alt="Hongik Industrial Design Logo" />
      <Navbar />
    </HeaderContainer>
  );
};

export default Header;
