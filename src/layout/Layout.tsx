import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { Outlet } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/Footer';

import * as S from './Layout.styled';

const useDropdownStore = create(
  combine({ isHovered: false }, (set) => {
    return {
      setIsHovered: (hover) => {
        set(() => ({
          isHovered: hover,
        }));
      },
    };
  })
);

const Layout = () => {
  // Navbar Hover 전역 상태 관리 (Zustand)
  const isDropdownHovered = useDropdownStore((state) => state.isHovered);
  const setIsDropdownHovered = useDropdownStore((state) => state.setIsHovered);

  const handleNavbarHover = () => {
    setIsDropdownHovered(!isDropdownHovered);
  };

  return (
    <S.TopLevelContainer>
      <Header
        isHovered={isDropdownHovered}
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
