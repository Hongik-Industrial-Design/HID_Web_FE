import styled, { css } from 'styled-components';

export const CategoryContainer = styled.aside`
  width: fit-content;
  height: fit-content;
`;

export const FilterOptionList = styled.ul`
  min-width: 110px;

  position: sticky;
  top: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
`;

export const FilterOption = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const FilterOptionButton = styled.button<{ $selectedOption: boolean }>`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Title4}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  ${({ $selectedOption }) =>
    $selectedOption &&
    css`
      color: ${({ theme }) => theme.colors.HID_Navy[900]};
      font-weight: 700;
    `}

  transition: font-weight 0.12s ease, color 0.12s ease;

  white-space: nowrap;
`;
