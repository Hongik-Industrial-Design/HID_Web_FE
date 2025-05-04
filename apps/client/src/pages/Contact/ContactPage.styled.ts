import styled from 'styled-components';
import { colors } from '@styles/theme/colors';

export const ContactPageContainer = styled.div`
  width: 100%;
  padding: 6.8rem 15.8rem;

  display: flex;
  flex-direction: column;
  gap: 7.2rem;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1}
  color: ${colors.HID_Grayscale[800]};

  span {
    color: #ffc700;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10.8rem;
`;

export const HIDInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 2.4rem;
`;

export const WebAdmin = styled.div`
  display: flex;
  gap: 14rem;
`;
