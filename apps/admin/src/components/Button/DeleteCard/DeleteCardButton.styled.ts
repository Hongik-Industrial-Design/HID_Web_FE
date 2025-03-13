import styled from 'styled-components';

export const DeleteCardButtonContainer = styled.button`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 10;

  width: 2.6rem;
  height: 2.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[900]};

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;
