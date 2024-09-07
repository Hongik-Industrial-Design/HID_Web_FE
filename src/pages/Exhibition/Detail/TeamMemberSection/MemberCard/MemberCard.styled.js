import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const MemberCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
`;

export const ProfileImage = styled.img`
  width: 240px;
  height: 240px;

  border-radius: 240px;
  border: 1px solid ${colors.HID_Grayscale[200]};

  flex-shrink: 0;
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  font-style: normal;
  font-weight: 500;

  .name {
    font-size: 40px;
    line-height: 40px;

    color: ${colors.HID_Grayscale[800]};
  }

  .specialty {
    font-size: 24px;
    line-height: 32px;

    color: ${colors.HID_Grayscale[900]};
  }
`;
