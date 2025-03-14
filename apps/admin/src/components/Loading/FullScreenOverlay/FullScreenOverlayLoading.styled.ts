import styled from 'styled-components';

export const FullScreenOverlayLoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.6rem;

  ${({ theme }) => theme.fontStyles.Caption1};
  color: ${({ theme }) => theme.colors.HID_Navy[900]};

  background: rgba(245, 245, 245, 0.6);
`;
