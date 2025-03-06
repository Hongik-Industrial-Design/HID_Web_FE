import styled, { css } from 'styled-components';

export const DeleteImageButtonContainer = styled.button<{
  $isImageHovered: boolean;
}>`
  position: absolute;
  top: 1.8rem;
  right: 1.8rem;
  z-index: 100;

  width: 3.2rem;
  height: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[900]};

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  opacity: 0;

  ${({ $isImageHovered }) =>
    $isImageHovered &&
    css`
      opacity: 1;
    `};

  transition: opacity 0.24s ease-out;
`;
