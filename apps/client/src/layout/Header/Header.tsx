import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router';

import { HoveredOption } from './Navbar/Navbar.types';
import { HoveredDropdown } from '@layout/Dropdown/Dropdown.types';

import { HeaderHIDLogo } from '@icons/HIDLogo';
import { HamburgerIcon } from '@icons/Hamburger';
import { MagnifyGlassIconMobile } from '@icons/Search';
import Navbar from './Navbar/Navbar';
import Dropdown from '../Dropdown/Dropdown';

import { useDropdownStore } from '@stores/useDropdownStore';

import * as S from './Header.styled';
import useDisableScroll from '@hooks/useDisableScroll';

const Header = (): JSX.Element => {
  const location: Location = useLocation();
  const isHomePage = location.pathname === '/';

  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const hideTransition = {
    type: 'tween',
    duration: 0.24,
    ease: 'easeInOut',
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollGap = currentScrollY - lastScrollY;

      if (scrollGap > 0 && currentScrollY > 70) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Navbar Hover 전역 상태 관리 (Zustand)
  const {
    hoveredNavbarOption,
    setHoveredNavbarOption,
    isSearchTabOpened,
    setSearchTabOpened,
  } = useDropdownStore();

  const enterNavbarOption = (option: HoveredOption) => {
    setHoveredNavbarOption(option);
  };

  const leaveNavbarOption = () => {
    setHoveredNavbarOption('');
  };

  // GNB 내 SearchTab 전역 상태 관리 (Zustand)
  const handleSearchTab = () => {
    if (!isHamburgerClicked) {
      setSearchTabOpened(!isSearchTabOpened);
    }
  };

  const [hoveredDropdown, setHoveredDropdown] = useState<HoveredDropdown>('');
  const [isHamburgerClicked, setIsHamburgerClicked] = useState<boolean>(false);

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

  // 검색 탭 Open or Hamburger 메뉴 열렸을 때 스크롤 방지
  useDisableScroll(
    isSearchTabOpened ||
      isHamburgerClicked ||
      hoveredNavbarOption !== '' ||
      hoveredDropdown !== ''
  );

  return (
    <>
      <S.HeaderContainer
        initial={{ y: 0 }}
        animate={{ y: isHidden ? '-100%' : '0%' }}
        exit={{ y: '-100%' }}
        transition={hideTransition}
        $isHomePage={isHomePage}
        $isNavbarHovered={hoveredNavbarOption !== ''}
        $isDropdownHover={hoveredDropdown !== ''}
        $isSearchTabOpened={isSearchTabOpened}
        $scrolled={scrollPosition > 1056}
      >
        <S.HamburgerButton
          onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
        >
          <HamburgerIcon $isHomePage={isHomePage} />
        </S.HamburgerButton>

        <S.HomeLogo to="/" onClick={() => setIsHamburgerClicked(false)}>
          <HeaderHIDLogo
            $isHomePage={isHomePage}
            $scrolled={scrollPosition > 1056}
            $isNavbarHovered={hoveredNavbarOption !== ''}
            $isDropdownHover={hoveredDropdown !== ''}
            $isSearchTabOpened={isSearchTabOpened}
          />
        </S.HomeLogo>

        <MagnifyGlassIconMobile $isHomePage={isHomePage} />

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
        isHamburgerClicked={isHamburgerClicked}
        setIsHamburgerClicked={setIsHamburgerClicked}
      />
    </>
  );
};

export default Header;
