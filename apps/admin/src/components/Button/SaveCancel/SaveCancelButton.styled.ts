import styled, { css } from 'styled-components';

export const SaveCancelButtonContainer = styled.button<{
  $isSaveButton: boolean;
}>`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;

  ${({ theme }) => theme.fontStyles.Body4}
  font-weight: 600;

  ${({ $isSaveButton }) =>
    $isSaveButton
      ? css`
          color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
          background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
        `
      : css`
          border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[500]};
          color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
          background: transparent;
        `}
`;
