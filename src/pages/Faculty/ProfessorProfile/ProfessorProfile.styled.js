import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const ProfessorProfileWrapper = styled.div`
  width: 100%;
  margin-top: 121px;
  padding: 0 158px;
  padding-bottom: 239px;

  display: flex;
  flex-direction: column;
  gap: 64px;

  /* padding: 0 158px 239px 158px; */
`;

export const ProfessorProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfessorProfilePageTitle = styled.div`
  ${({ theme }) => theme.fontStyles.Header1}
  letter-spacing: -0.28px;

  span {
    color: ${colors.HID_YellowDot};
  }
`;

export const ProfessorProfileMainSection = styled.div`
  width: 100%;

  display: flex;
  /* justify-content: space-between; */
  gap: 206px;
`;

export const ProfileStickyContainer = styled.div`
  width: 450px;

  flex-shrink: 0;

  position: relative;
`;

export const ProfileContainer = styled.div`
  width: 100%;

  display: inline-flex;
  flex-direction: column;

  position: sticky;
  top: 10%;
`;

export const ProfileImage = styled.img`
  width: 100%;

  border: 1px solid ${colors.HID_Grayscale[200]};
  border-radius: 2px;
`;

export const ProfileName = styled.div`
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  font-style: normal;

  .name {
    height: 40px;

    font-size: 40px;
    font-weight: 600;
    line-height: 40px;

    color: ${colors.HID_Grayscale[800]};
  }

  .role {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
  }

  .title {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;

    color: ${colors.HID_Grayscale[900]};
  }

  .specialty {
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;

    color: ${colors.HID_Grayscale[900]};
  }
`;

export const ProfileEmail = styled.a`
  align-self: flex-start;

  margin-top: 26px;

  font-style: normal;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;

  color: ${colors.HID_Navy[900]};

  position: relative;

  &::after {
    content: "";
    height: 3px;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ $emailHovered }) => ($emailHovered ? "100%" : 0)};
    background-color: ${colors.HID_Navy[200]};
    transition: width 0.3s ease;
  }
`;

export const ProfileDescription = styled.p`
  width: 100%;
  margin-top: 80px;

  font-style: normal;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;

  color: ${colors.HID_Grayscale[700]};
`;
