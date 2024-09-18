import { colors } from "@styles/theme/colors";
import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 100%;
  padding: 120px 153px 256px 158px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  gap: 72px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1}
  letter-spacing: -0.28px;

  color: ${colors.HID_Grayscale[800]};

  span {
    color: #ffc700;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 108px;
`;

export const HIDInfo = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

export const WebAdmin = styled.div`
    display: flex;
    gap: 140px;
`;
