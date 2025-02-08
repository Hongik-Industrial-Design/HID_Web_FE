import styled, { css } from 'styled-components';

export const CategoryContainer = styled.div<{ $currentPath: string }>`
  position: sticky;
  top: ${({ $currentPath }) => $currentPath === '/faculty' && '18%'};
  top: ${({ $currentPath }) => $currentPath === '/graduation' && '15%'};
  top: ${({ $currentPath }) => $currentPath === '/student' && '15%'};

  display: inline-flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const DetailedMajor = styled.p<{ $isSelected: boolean }>`
  min-width: 15rem;
  white-space: nowrap;

  ${({ theme }) => theme.fontStyles.Title4}
  font-weight: 500;
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${({ theme }) => theme.colors.HID_Navy[900]};
      font-weight: 700;
    `}

  transition:
    font-weight 0.12s ease, color 0.12s ease;
`;
