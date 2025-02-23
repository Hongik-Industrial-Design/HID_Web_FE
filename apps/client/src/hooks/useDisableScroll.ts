import { useEffect } from 'react';

const useDisableScroll = (isActive: boolean) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isActive]);
};

export default useDisableScroll;
