import styled, { css } from 'styled-components';

export const CategoryContainer = styled.ul<{ $isGraduation: boolean }>`
  position: sticky;
  top: ${({ $isGraduation }) => ($isGraduation ? '15%' : '28%')};

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 1200px) {
    width: 100%;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[100]};
    position: static;
    flex-direction: row;
    column-gap: 4rem;
    row-gap: 2.8rem;
    flex-wrap: wrap;
  }
`;

export const DetailedMajor = styled.li<{
  $isSelected: boolean;
}>`
  width: fit-content;
  min-width: 15rem;
  height: fit-content;

  @media (max-width: 1200px) {
    width: fit-content;
    min-width: 0;
    height: fit-content;
  }
`;

export const CategoryButton = styled.button<{ $isSelected: boolean }>`
  width: fit-content;
  height: fit-content;

  white-space: nowrap;

  ${({ theme }) => theme.fontStyles.Title4}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${({ theme }) => theme.colors.HID_Navy[900]};
      font-weight: 700;
    `}

  transition:
    font-weight 0.12s ease, color 0.12s ease;
`;
