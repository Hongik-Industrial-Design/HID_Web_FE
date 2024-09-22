import { colors } from "@styles/theme/colors";
import styled from "styled-components";

export const FacultyListContainer = styled.div`
  width: 100%;
  margin-top: 121px;
  padding-right: 158px;

  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const FacultyPageTitle = styled.h2`
  margin-left: 498px;

  ${({ theme }) => theme.fontStyles.Header1}
  letter-spacing: -0.28px;

  color: ${colors.HID_Grayscale[800]};

  span {
    color: #ffc700;
  }
`;

export const FacultyMainContent = styled.div`
  width: 100%;

  display: flex;
  gap: 194px;
`;
