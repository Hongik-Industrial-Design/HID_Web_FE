import styled, { css } from 'styled-components';

export const PostTypeBoxContainer = styled.div<{
  $isNotice: boolean;
  $isBoardDetailPage: boolean;
}>`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;

  ${({ $isNotice, $isBoardDetailPage }) =>
    $isBoardDetailPage
      ? css`
          ${({ theme }) => theme.fontStyles.Body3}
          padding: 0.6rem 2rem;
        `
      : $isNotice
        ? css`
            ${({ theme }) => theme.fontStyles.Body3}
            padding: 0.4rem 1.6rem;
          `
        : css`
            ${({ theme }) => theme.fontStyles.Headline2}
            padding: 0.4rem 1.4rem;
          `}

  color: ${({ theme }) => theme.colors.HID_Navy[900]};
  background-color: #e7eaf5;
`;
