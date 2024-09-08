import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Contents, TopLevelContainer } from "./Layout.styled";

// eslint-disable-next-line react/prop-types
const Layout = ({ children, isHovered, setIsHovered }) => {
  return (
    <TopLevelContainer>
      <Header isHovered={isHovered} setIsHovered={setIsHovered} />
      <Contents>{children}</Contents>
      <Footer />
    </TopLevelContainer>
  );
};

export default Layout;
