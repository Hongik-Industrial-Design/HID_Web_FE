import { useEffect, useState } from 'react';

import { BREAK_POINTS } from '@constants/breakPoint';

const getItemsPerPage = (width: number) => {
  const matchedBreakpoint = BREAK_POINTS.find((bp) => width > bp.breakpoint);
  return matchedBreakpoint ? matchedBreakpoint.items : 6; // 480px 이하일 때 6개
};

export const useResponsiveItemCount = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(() =>
    getItemsPerPage(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage(window.innerWidth);
      setItemsPerPage((prev) =>
        prev !== newItemsPerPage ? newItemsPerPage : prev
      );
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return itemsPerPage;
};
