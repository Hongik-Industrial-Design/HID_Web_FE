import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 96px 158px;

  background: ${colors.HID_Grayscale[0]};
  border-top: 2px solid ${colors.HID_Grayscale[50]};
`;

export const ContactInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`

export const Infos = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 20px;

  margin-right: 737px;

  font-size: 14px;
  line-height: normal;
  color: ${colors.HID_Grayscale[400]};

  .address {
    font-weight: 500;
    line-height: 18px;
  }

  .contact {
    font-weight: 400;
  }

  .copyright {
    font-weight: 300;
  }
`;

export const SocialIconContainer = styled.div`
  display: inline-flex;
  gap: 16px;
`;

export const SocialIcon = styled.img`
    width: 48px;
    height: 48px;

    cursor: pointer;
`
