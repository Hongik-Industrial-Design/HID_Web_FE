import styled, { css } from 'styled-components';

export const YearSelectorContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 1.2rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const YearSelectorTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  white-space: nowrap;
`;

export const YearSelectDropdownWrapper = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const YearSelectorButton = styled.button`
  position: relative;

  width: fit-content;
  min-width: 9.6rem;
  height: fit-content;
  padding: 0.8rem 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[600]};

  ${({ theme }) => theme.fontStyles.Body3}
  font-weight: 500;

  color: ${({ theme }) => theme.colors.HID_Grayscale[600]};
  background-color: transparent;
`;

export const YearSelectDropdownContainer = styled.ul`
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);

  width: 9rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[600]};
`;

export const GraduationExhibitionYearItem = styled.li`
  width: 100%;
  height: fit-content;
`;

export const YearButton = styled.button<{ $isSelected: boolean }>`
  position: relative;

  width: 100%;
  height: fit-content;
  padding: 1.2rem 0;
  text-align: center;

  ${({ theme }) => theme.fontStyles.Body4}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${({ theme }) => theme.colors.HID_Navy[600]};
      font-weight: 600;
    `}

  &:hover {
    color: ${({ $isSelected, theme }) =>
      !$isSelected && theme.colors.HID_Grayscale[600]};
  }

  // Hover Box
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
    opacity: 0;
    width: 0;
    height: 95%;
    border-radius: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
    border-right: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
    background-color: ${({ theme }) => theme.colors.HID_Grayscale[100]};

    transition:
      width 0.25s ease,
      opacity 0.2s ease-out;
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }

  transition:
    color 0.18s ease-out,
    width 0.2s ease,
    opacity 0.2s ease-out;
`;
