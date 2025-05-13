import styled, { css } from 'styled-components';

export const DropdownBackground = styled.div<{
  $isRendered: boolean;
  $isActive: boolean;
}>`
  position: fixed;
  top: 0;
  z-index: -1;

  width: 100vw;
  height: 100vh;

  opacity: 0;
  background-color: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(8px);

  transition: opacity 0.25s ease-in-out;

  ${({ $isRendered, $isActive }) =>
    ($isRendered || $isActive) &&
    css`
      opacity: 1;
      z-index: 10;
    `};

  @media (max-width: 768px) {
    background-color: rgba(128, 128, 128, 0.6);
    backdrop-filter: blur(50px);

    transform: translateY(-80%);

    transition:
      transform 0.3s ease,
      opacity 0.25s ease-in-out;

    ${({ $isRendered, $isActive }) =>
      ($isRendered || $isActive) &&
      css`
        transform: translateY(0);
        opacity: 1;
        z-index: 10;
      `};
  }
`;

export const DropdownContainer = styled.div<{
  $isRendered: boolean;
  $isActive: boolean;
}>`
  position: fixed;
  top: 70px;
  z-index: 1;

  width: 100%;
  height: fit-content;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  transition: opacity 0.25s ease-out;

  opacity: ${({ $isRendered, $isActive }) =>
    $isRendered || $isActive ? 1 : 0};

  z-index: ${({ $isRendered, $isActive }) => ($isRendered || $isActive) && 100};

  @media (max-width: 768px) {
    background: transparent;
    z-index: 100;

    transform: translateX(60%);

    ${({ $isRendered }) =>
      $isRendered &&
      css`
        transform: translateY(0);
      `}

    transition:
            transform 0.3s ease,
            opacity 0.25s ease-in-out;
  }
`;
