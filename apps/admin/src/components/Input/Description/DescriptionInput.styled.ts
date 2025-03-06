import styled from 'styled-components';

export const DescriptionTextarea = styled.textarea<{ $isKorean: boolean }>`
  width: 66rem;
  height: 20rem;
  padding: 1.6rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[400]};

  ${({ $isKorean, theme }) =>
    $isKorean ? theme.fontStyles.Body3_KO : theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
  background: transparent;

  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
    transition: color 0.2s ease-out;
  }

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.HID_Grayscale[700]};
    border-color: ${({ theme }) => theme.colors.HID_Grayscale[700]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.HID_Grayscale[700]};
    }
  }

  transition:
    color 0.2s ease,
    border-color 0.2s ease;
`;
