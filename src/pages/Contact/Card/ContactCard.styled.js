import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const ContactCardContainer = styled.div`
  width: 383px;
  
  display: inline-flex;
  flex-direction: column;
  gap: 26px;

`;

export const CardTitle = styled.h2`
  font-style: normal;
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
`;

export const Divider = styled.div`
  width: 383px;
  height: 4px;

  background-color: ${colors.HID_Grayscale[800]};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SingleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: ${({ $type }) => $type === "Admission" && `${colors.HID_Navy[900]}`};
`;

export const SingleInfoTitle = styled.h3`
  font-style: normal;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`;

export const AdmissionPageLink = styled.a`
  font-style: normal;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
`;

export const SingleInfoContent = styled.p`
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;

  color: ${colors.HID_Grayscale[700]};
`;

export const SocialLink = styled.a`
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;

  color: ${colors.HID_Grayscale[700]};
`;

export const CloudyDivider = styled.div`
  width: 383px;
  height: 1px;

  background-color: ${colors.HID_Grayscale[200]};
`;
