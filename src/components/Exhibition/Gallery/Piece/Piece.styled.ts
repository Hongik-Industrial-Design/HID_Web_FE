import styled from 'styled-components';

export const PieceContainer = styled.div`
  width: fit-content;
  height: fit-content;

  position: relative;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  cursor: pointer;
`;

export const PieceImage = styled.img`
  width: 38.5rem;
  height: fit-content;

  border-radius: 2px;

  overflow: hidden;
`;
