import { JSX } from 'react/jsx-runtime';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { Outlet } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import * as S from './Layout.styled';

// Navbar Hover 전역 상태 관리 (Zustand)
const useDropdownStore = create(
  combine({ isHovered: false }, (set) => {
    return {
      setIsHovered: (hover: boolean) => {
        set(() => ({
          isHovered: hover,
        }));
      },
    };
  })
);

const Layout = (): JSX.Element => {
  // Navbar Hover 전역 상태 관리 (Zustand)
  const isNavbarHovered = useDropdownStore((state) => state.isHovered);
  const setIsNavbarHovered = useDropdownStore((state) => state.setIsHovered);

  const handleNavbarHover = () => {
    setIsNavbarHovered(!isNavbarHovered);
  };

  return (
    <S.TopLevelContainer>
      <Header
        isNavbarHovered={isNavbarHovered}
        handleNavbarHover={handleNavbarHover}
      />
      <S.Contents>
        <Outlet />
      </S.Contents>
      <Footer />
    </S.TopLevelContainer>
  );
};

export default Layout;
