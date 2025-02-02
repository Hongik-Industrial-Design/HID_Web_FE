import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { HeaderHIDLogo } from '@icons/HIDLogo';
import Navbar from './Navbar/Navbar';
import Dropdown from './Dropdown/Dropdown';

import * as S from './Header.styled';

// Navbar Hover 전역 상태 관리 (Zustand)
const useDropdownStore = create(
  combine({ navbarOption: '' }, (set) => {
    return {
      setNavbarOption: (option: string) => {
        set(() => ({
          navbarOption: option,
        }));
      },
    };
  })
);

const Header = (): JSX.Element => {
  const location: Location = useLocation();
  const isHomePage = location.pathname === '/';

  // Navbar Hover 전역 상태 관리 (Zustand)
  const hoveredNavbarOption = useDropdownStore((state) => state.navbarOption);
  const setHoveredNavbarOption = useDropdownStore(
    (state) => state.setNavbarOption
  );

  const enterNavbarOption = (option: string) => {
    setHoveredNavbarOption(option);
  };

  const leaveNavbarOption = () => {
    setHoveredNavbarOption('');
  };

  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // Dropdown 컨테이너 hover시 Dropdown 컴포넌트 유지 (for better UX)
  const enterDropdown = () => setDropdownOpen(true);
  const leaveDropdown = () => setDropdownOpen(false);

  // HomePage의 배너 이미지 이후부터 dynamic styling 가능하게끔 scrollPosition 계산
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown 렌더링 시 Scroll 제어
  useEffect(() => {
    if (hoveredNavbarOption !== '' || isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [hoveredNavbarOption, isDropdownOpen]);

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
      <S.HeaderContainer
        $isHomePage={isHomePage}
        $isNavbarHovered={hoveredNavbarOption !== ''}
        $isDropdownOpen={isDropdownOpen}
        $scrolled={scrollPosition > 1056}
      >
        <S.HomeLogo to="/">
          <HeaderHIDLogo
            $isHomePage={isHomePage}
            $scrolled={scrollPosition > 1056}
            $isNavbarHovered={hoveredNavbarOption !== ''}
            $isDropdownOpen={isDropdownOpen}
          />
        </S.HomeLogo>

        <Navbar
          isHomePage={isHomePage}
          isNavbarHovered={hoveredNavbarOption !== ''}
          enterNavbar={enterNavbarOption}
          leaveNavbar={leaveNavbarOption}
          isDropdownOpen={isDropdownOpen}
          scrolled={scrollPosition > 1056}
        />
      </S.HeaderContainer>
      <Dropdown
        hoveredOption={hoveredNavbarOption}
        isDropdownOpen={isDropdownOpen}
        enterDropdown={enterDropdown}
        leaveDropdown={leaveDropdown}
      />
    </>
  );
};

export default Header;
