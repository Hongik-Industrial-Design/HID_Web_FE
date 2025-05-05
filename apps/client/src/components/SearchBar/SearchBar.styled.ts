import styled from 'styled-components';

export const SearchBarForm = styled.form`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);

  display: flex; /* 아이콘 크기에 맞춤 */

  width: fit-content;
  height: fit-content;
  padding: 0.4rem;
`;

export const SearchInput = styled.input`
  width: 30rem;
  height: fit-content;
  padding: 1rem 1.6rem;
  padding-left: 4.2rem;
  text-align: right;

  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
  background-color: transparent;

  ${({ theme }) => theme.fontStyles.Body3};
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  &::selection {
    background-color: ${({ theme }) => theme.colors.HID_Grayscale[600]};
    color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.HID_Navy[900]};
    color: ${({ theme }) => theme.colors.HID_Navy[900]};
    background-color: rgba(9, 40, 122, 0.04);

    transition:
      background-color 0.2s ease-in-out,
      border 0.2s ease-in,
      color 0.2s ease-in;

    &::placeholder {
      color: ${({ theme }) => theme.colors.HID_Navy[900]};
      transition: color 0.2s ease-in;
    }
  }

  transition:
    background-color 0.2s ease-out,
    border 0.2s ease-out,
    color 0.2s ease-out;

  @media (max-width: 1200px) {
    width: 24rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;
