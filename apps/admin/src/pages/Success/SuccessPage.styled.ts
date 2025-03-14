import styled from 'styled-components';

export const SuccessPageContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;

  ${({ theme }) => theme.fontStyles.Header2};
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;
