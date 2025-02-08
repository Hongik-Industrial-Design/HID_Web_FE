import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { HoveredOption } from './Navbar/Navbar.types';
import { HoveredDropdown } from '@layout/Dropdown/Dropdown.types';

import { HeaderHIDLogo } from '@icons/HIDLogo';
import Navbar from './Navbar/Navbar';
import Dropdown from '../Dropdown/Dropdown';

import * as S from './Header.styled';

// Navbar Hover 전역 상태 관리 (Zustand)
const useDropdownStore = create(
  combine({ navbarOption: '', isSearchTabOpened: false }, (set) => {
    return {
      setNavbarOption: (option: string) => {
        set(() => ({
          navbarOption: option,
        }));
      },
      setSearchTabOpened: (isOpened: boolean) => {
        set(() => ({
          isSearchTabOpened: isOpened,
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

  const enterNavbarOption = (option: HoveredOption) => {
    setHoveredNavbarOption(option);
  };

  const leaveNavbarOption = () => {
    setHoveredNavbarOption('');
  };

  // GNB 내 SearchTab 전역 상태 관리 (Zustand)
  const isSearchTabOpened = useDropdownStore(
    (state) => state.isSearchTabOpened
  );

  const setSearchTabOpened = useDropdownStore(
    (state) => state.setSearchTabOpened
  );

  const handleSearchTab = () => setSearchTabOpened(!isSearchTabOpened);

  const [hoveredDropdown, setHoveredDropdown] = useState<HoveredDropdown>('');

  // Dropdown 컨테이너 hover시 Dropdown 컴포넌트 유지 (for better UX)
  const enterDropdown = (type: HoveredDropdown) => {
    setHoveredDropdown(type);
    setSearchTabOpened(false); // SearchTab 닫기
  };

  const leaveDropdown = () => {
    setHoveredDropdown('');
    setSearchTabOpened(false); // SearchTab 닫기
  };

  // HomePage의 배너 이미지 이후부터 dynamic styling 가능하게끔 scrollPosition 계산
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown 렌더링 시 Scroll 제어
  useEffect(() => {
    if (hoveredNavbarOption !== '' || hoveredDropdown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [hoveredNavbarOption, hoveredDropdown]);

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
        $isDropdownHover={hoveredDropdown !== ''}
        $isSearchTabOpened={isSearchTabOpened}
        $scrolled={scrollPosition > 1056}
      >
        <S.HomeLogo to="/">
          <HeaderHIDLogo
            $isHomePage={isHomePage}
            $scrolled={scrollPosition > 1056}
            $isNavbarHovered={hoveredNavbarOption !== ''}
            $isDropdownHover={hoveredDropdown !== ''}
            $isSearchTabOpened={isSearchTabOpened}
          />
        </S.HomeLogo>

        <Navbar
          isHomePage={isHomePage}
          isNavbarHovered={hoveredNavbarOption !== ''}
          enterNavbar={enterNavbarOption}
          leaveNavbar={leaveNavbarOption}
          isDropdownHover={hoveredDropdown !== ''}
          isSearchTabOpened={isSearchTabOpened}
          handleSearchTab={handleSearchTab}
          scrolled={scrollPosition > 1056}
        />
      </S.HeaderContainer>
      <Dropdown
        hoveredOption={hoveredNavbarOption}
        enterDropdown={enterDropdown}
        leaveDropdown={leaveDropdown}
        hoveredDropdown={hoveredDropdown}
        isSearchTabOpened={isSearchTabOpened}
        handleSearchTab={handleSearchTab}
      />
    </>
  );
};

export default Header;
