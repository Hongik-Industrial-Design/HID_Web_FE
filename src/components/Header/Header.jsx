import HIDLogo from "@assets/HID-logo.svg";
import { HeaderContainer, MainLogo } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <MainLogo src={HIDLogo} alt="Hongik Industrial Design Logo" />
    </HeaderContainer>
  );
};

export default Header;
