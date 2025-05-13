import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router';

import { HeaderHIDLogo } from '@icons/HIDLogo';
import { HamburgerIcon } from '@icons/Hamburger';
import { MagnifyGlassIconMobile } from '@icons/Search';
import Navbar from './Navbar/Navbar';
import Dropdown from '../Dropdown/Dropdown';

import { useDropdownStore } from '@stores/useDropdownStore';
import useDisableScroll from '@hooks/useDisableScroll';
import { isTouchDevice } from '@utils/device';

import * as S from './Header.styled';

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
    isHamburgerClicked,
    setIsHamburgerClicked,
  } = useDropdownStore();

  // GNB 내 SearchTab 전역 상태 관리 (Zustand)
  const handleSearchTab = () => {
    // 모바일 환경에서는 드롭다운 열려있을 시, 드롭다운 닫은 후에 검색 탭 열기
    if (isTouchDevice && hoveredNavbarOption !== '') {
      setHoveredNavbarOption('');
    }

    setSearchTabOpened(!isSearchTabOpened); // Mobile & Desktop both
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
    isSearchTabOpened || isHamburgerClicked || hoveredNavbarOption !== ''
  );

  // 모바일 & 데스크탑 고려 GNB 클릭 핸들러
  const handleGNBClick = () => {
    if (isSearchTabOpened) {
      setSearchTabOpened(false);
    }

    if (isTouchDevice && hoveredNavbarOption !== '') {
      setHoveredNavbarOption('');
    }
  };

  return (
    <>
      <S.HeaderContainer
        initial={{ y: 0 }}
        animate={{ y: isHidden ? '-100%' : '0%' }}
        exit={{ y: '-100%' }}
        transition={hideTransition}
        $isHomePage={isHomePage}
        $isNavbarHovered={hoveredNavbarOption !== ''}
        $isSearchTabOpened={isSearchTabOpened}
        $scrolled={scrollPosition > 1056}
      >
        <S.HamburgerButton
          onClick={() => setIsHamburgerClicked(!isHamburgerClicked)}
        >
          <HamburgerIcon
            $isActive={isHamburgerClicked}
            $isHomePage={isHomePage}
          />
        </S.HamburgerButton>

        <S.HomeLogo to="/" onClick={handleGNBClick}>
          <HeaderHIDLogo
            $isHomePage={isHomePage}
            $scrolled={scrollPosition > 1056}
            $isNavbarHovered={hoveredNavbarOption !== ''}
            $isSearchTabOpened={isSearchTabOpened}
          />
        </S.HomeLogo>

        <MagnifyGlassIconMobile $isHomePage={isHomePage} />

        <Navbar
          isHomePage={isHomePage}
          handleSearchTab={handleSearchTab}
          scrolled={scrollPosition > 1056}
          handleGNBClick={handleGNBClick}
        />
      </S.HeaderContainer>
      <Dropdown />
    </>
  );
};

export default Header;
