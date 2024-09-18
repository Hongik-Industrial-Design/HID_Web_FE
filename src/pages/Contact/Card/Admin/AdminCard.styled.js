import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const AdminCardContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AdminCardTitle = styled.h3`
  font-style: normal;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`;

export const PersonalCardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PersonalCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;

  color: ${colors.HID_Grayscale[700]};
`;

export const PersonalName = styled.p`
  font-weight: 500;
`;

export const PersonalMail = styled.p`
  font-size: 14px;
`;
