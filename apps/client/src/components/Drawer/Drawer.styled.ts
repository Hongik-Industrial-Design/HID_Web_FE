import styled, { css } from 'styled-components';

export const DrawerContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  width: clamp(56rem, 48vw, 72rem);
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: rgba(9, 40, 122, 0.8);
  backdrop-filter: blur(32px);

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          transform: translateX(0);
          transition: transform 0.3s ease-in-out;
        `
      : css`
          transform: translateX(-100%);
          transition: transform 0.25s ease;
        `}

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const DrawerHeader = styled.header`
  width: 100%;
  height: fit-content;
  padding: 4rem;

  text-align: right;
`;

export const DrawerCloseButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem;
`;

export const DrawerContents = styled.main`
  flex-grow: 1;

  width: 100%;
  height: 100%;
  padding: 0.8rem 8rem 6.4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  overflow-y: auto;
`;

export const DrawerTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Title1}
  line-height: normal;
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  @media (max-width: 2560px) {
    font-size: clamp(4.4rem, 2.6vw, 4.8rem);
  }

  @media (max-width: 1920px) {
    font-size: clamp(4.4rem, 2.8vw, 4.8rem);
  }

  @media (max-width: 1440px) {
    font-size: clamp(4rem, 3vw, 4.4rem);
  }
`;

export const DrawerDescription = styled.p`
  flex-grow: 1;
  width: 100%;
  height: 100%;

  overflow-y: auto;

  ${({ theme }) => theme.fontStyles.Body1}
  font-size: clamp(2rem, 1vw, 2.2rem);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  @media (max-width: 1920px) {
    font-size: clamp(1.8rem, 1.2vw, 2rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 3.2vw, 2.2rem);
  }
`;

export const DrawerBackground = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(217, 217, 217, 0.3);

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          opacity: 1;
          backdrop-filter: blur(8px);
          z-index: 1000;
          transition:
            opacity 0.1s ease-in-out,
            backdrop-filter 0.2s ease-in;
          transition-delay: 0.1s;
        `
      : css`
          opacity: 0;
          z-index: -1;
          transition: opacity 0.2s ease-out;
          transition-delay: 0.1s;
        `}
`;
