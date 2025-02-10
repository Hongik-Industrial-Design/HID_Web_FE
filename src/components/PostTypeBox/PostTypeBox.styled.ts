import styled, { css } from 'styled-components';

export const PostTypeBoxContainer = styled.div<{ $isNotice: boolean }>`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  ${({ $isNotice }) =>
    $isNotice
      ? css`
          ${({ theme }) => theme.fontStyles.Body3}
          padding: 0.4rem 1.6rem;
        `
      : css`
          ${({ theme }) => theme.fontStyles.Body3}
          padding: 0.4rem 1.4rem;
        `}

  color: ${({ theme }) => theme.colors.HID_Navy[900]};
  background-color: #e7eaf5;
`;
