import styled from 'styled-components';

export const DropdownBackground = styled.div<{
  $isRendered: boolean;
  $isActive: boolean;
}>`
  position: fixed;
  top: 0;
  z-index: -1;
  z-index: ${({ $isRendered, $isActive }) => ($isRendered || $isActive) && 10};

  width: 100vw;
  height: 100vh;

  background-color: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(8px);

  transition: opacity 0.25s ease-in-out;

  opacity: ${({ $isRendered, $isActive }) =>
    $isRendered || $isActive ? 1 : 0};
`;

export const DropdownContainer = styled.div<{
  $isRendered: boolean;
  $isActive: boolean;
}>`
  position: fixed;
  top: 66px;
  z-index: 1;

  width: 100%;
  height: fit-content;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  transition: opacity 0.25s ease-out;

  opacity: ${({ $isRendered, $isActive }) =>
    $isRendered || $isActive ? 1 : 0};

  z-index: ${({ $isRendered, $isActive }) => ($isRendered || $isActive) && 100};
`;
