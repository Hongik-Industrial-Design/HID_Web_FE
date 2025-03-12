// import { JSX } from 'react/jsx-runtime';

import { toast } from 'react-toastify';

export const showAlertAndScroll = (
  elementId: string,
  message: string
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    toast.error(message, {
      position: 'bottom-right',
    });
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
