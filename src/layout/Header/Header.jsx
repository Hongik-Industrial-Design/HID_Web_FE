import { useEffect, useState } from "react";
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // HomePage 배너 이후 dynamic styling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dropdown 렌더링 시 Scroll 제어
  useEffect(() => {
    if (isHovered || isDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isHovered, isDropdownOpen]);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  // IntersectionObserver를 사용한 방식
  // const targetRef = useRef(null);
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setIsSticky(!entry.isIntersecting);
  //     },
  //     { threshold: 0 }
  //   );

  //   if (targetRef.current) {
  //     observer.observe(targetRef.current);
  //   }

  //   return () => {
  //     if (targetRef.current) {
  //       observer.unobserve(targetRef.current);
  //     }
  //   };
  // }, []);

  return (
    <>
      <HeaderContainer
        $isHovered={isHovered}
        $isHomePage={isHomePage}
        $scrolled={scrollPosition > 1056}
        $dropdownOpen={isDropdownOpen}
      >
        <Link to="/">
          {isHomePage ? (
            <MainLogo
              src={HIDHomeLogo}
              alt="Hongik Industrial Design Home Logo"
            />
          ) : (
            <MainLogo src={HIDLogo} alt="Hongik Industrial Design Logo" />
          )}
        </Link>
        <Navbar
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          isDropdownOpen={isDropdownOpen}
          isHomePage={isHomePage}
          scrolled={scrollPosition > 1056}
        />
      </HeaderContainer>
      <Dropdown
        isHovered={isHovered}
        isDropdownOpen={isDropdownOpen}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default Header;
