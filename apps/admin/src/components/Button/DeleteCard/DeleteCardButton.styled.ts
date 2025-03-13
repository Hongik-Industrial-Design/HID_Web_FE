import styled from 'styled-components';

export const DeleteCardButtonContainer = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  width: 2.8rem;
  height: 2.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[900]};

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;
