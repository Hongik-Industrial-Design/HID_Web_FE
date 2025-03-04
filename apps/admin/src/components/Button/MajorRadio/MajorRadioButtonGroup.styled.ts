import styled from 'styled-components';

export const MajorRadioButtonList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 2.8rem;
`;

export const MajorRadioButtonItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const MajorRadioButtonLabel = styled.label`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  cursor: pointer;
`;

export const MajorRadioInput = styled.input<{ $isSelected: boolean }>`
  position: relative;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[500]};

  appearance: none;

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ $isSelected }) => ($isSelected ? '1.2rem' : '0')};
    height: ${({ $isSelected }) => ($isSelected ? '1.2rem' : '0')};
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.HID_Navy[600]};

    transition: all 0.2s ease;
  }
`;

export const MajorRadioButtonName = styled.span`
  ${({ theme }) => theme.fontStyles.Title6};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.HID_Grayscale[600]};
`;
