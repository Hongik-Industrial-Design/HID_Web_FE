import { ToastOptions } from 'react-toastify';
import { JSX } from 'react/jsx-runtime';

type RegisterToastMessageProps = {
  closeToast: () => void;
  toastProps: ToastOptions;
};

export const RegisterToastMessage = ({
  closeToast,
  toastProps,
}: RegisterToastMessageProps): JSX.Element => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button>Retry</button>
    <button onClick={closeToast}>Close</button>
  </div>
);
