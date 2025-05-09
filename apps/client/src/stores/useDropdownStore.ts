import { GNBOptions } from '@layout/Header/Navbar/Navbar.types';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

// Navbar Hover 전역 상태 관리 (Zustand)
export const useDropdownStore = create(
  combine({ hoveredNavbarOption: '', isSearchTabOpened: false }, (set) => {
    return {
      setHoveredNavbarOption: (option: GNBOptions) => {
        set(() => ({
          hoveredNavbarOption: option,
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
