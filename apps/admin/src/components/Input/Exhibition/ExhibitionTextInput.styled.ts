import styled from 'styled-components';

export const ExhibitionTextInput = styled.input`
  width: 38rem;
  height: fit-content;
  padding: 0.8rem 1.6rem;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[400]};

  background: transparent;
  color: ${({ theme }) => theme.colors.HID_Grayscale[700]};

  ${({ theme }) => theme.fontStyles.Body3};

  &::placeholder {
    color: ${({ theme }) => theme.colors.HID_Grayscale[400]};

    transition: color 0.1s ease-out;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.HID_Navy[900]};
    color: ${({ theme }) => theme.colors.HID_Navy[900]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.HID_Navy[900]};
    }
  }

  transition: border-color 0.1s ease-out;
`;
