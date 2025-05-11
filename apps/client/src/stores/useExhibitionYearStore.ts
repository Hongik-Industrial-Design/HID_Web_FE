import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { ARCHIVE_YEAR_LIST } from '@constants/archive';

export const useExhibitionYearStore = create(
  combine(
    {
      selectedYear: {
        graduation: ARCHIVE_YEAR_LIST[0],
        club: ARCHIVE_YEAR_LIST[0],
      },
    },
    (set) => {
      return {
        setSelectedYear: (type: 'graduation' | 'club', year: string) => {
          set((state) => ({
            selectedYear: {
              ...state.selectedYear,
              [type]: year,
            },
          }));
        },
      };
    }
  )
);
