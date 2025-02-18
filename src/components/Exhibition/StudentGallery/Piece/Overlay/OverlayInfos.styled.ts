import styled from 'styled-components';

export const OverlayInfosContainer = styled.div<{ $isPieceHovered: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  padding: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
  opacity: ${({ $isPieceHovered }) => ($isPieceHovered ? 0.5 : 0)};
  border-radius: 2px;

  transition: opacity 0.2s ease-in-out;
`;

export const PieceInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const PieceTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Title3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
  text-align: center;
`;

export const PieceSubTitle = styled.span`
  ${({ theme }) => theme.fontStyles.SubTitle1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[100]};
  text-align: center;
`;
