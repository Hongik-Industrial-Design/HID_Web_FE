import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { HeaderContainer, StyledHIDHomeLogo } from "./Header.styled";

import Navbar from "./Navbar/Navbar";
import Dropdown from "./Navbar/Dropdown/Dropdown";

// eslint-disable-next-line react/prop-types
const Header = ({ isHovered, setIsHovered }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // HomePage의 배너 이미지 이후부터 dynamic styling 가능하게끔 scrollPosition 계산
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

  // Dropdown 컨테이너 hover시 Dropdown 컴포넌트 유지 (for better UX)
  const enterDropdown = () => {
    setDropdownOpen(true);
  };

  const leaveDropdown = () => {
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
        $dropdownOpen={isDropdownOpen}
        $isHomePage={isHomePage}
        $scrolled={scrollPosition > 1056}
      >
        <Link to="/">
          <StyledHIDHomeLogo
            $isHomePage={isHomePage}
            $scrolled={scrollPosition > 1056}
            $isHovered={isHovered}
            $dropdownOpen={isDropdownOpen}
          />
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
        enterDropdown={enterDropdown}
        leaveDropdown={leaveDropdown}
      />
    </>
  );
};

export default Header;
