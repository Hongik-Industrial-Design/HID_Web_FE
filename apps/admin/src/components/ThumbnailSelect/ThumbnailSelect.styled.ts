import styled, { css } from 'styled-components';

export const ThumbnailSelectContainer = styled.div<{
  $isImageHovered: boolean;
}>`
  position: absolute;
  bottom: 1.8rem;
  right: 1.8rem;
  z-index: 10;

  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  opacity: 0;

  ${({ $isImageHovered }) =>
    $isImageHovered &&
    css`
      opacity: 1;
    `};

  transition: opacity 0.24s ease-out;
`;

export const ThumbnailSelectText = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;

export const ThumbnailCheckBoxContainer = styled.label<{
  $isThumbnailChecked: boolean;
}>`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1.5px solid ${({ theme }) => theme.colors.HID_Navy[900]};

  cursor: pointer;

  ${({ $isThumbnailChecked }) =>
    $isThumbnailChecked &&
    css`
      border: none;
      background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
    `}
`;

export const ThumbnailSelectCheckBox = styled.input`
  display: none;
`;
