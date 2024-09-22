import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const FacultyListPageWrapper = styled.div`
  width: 100%;
  margin-top: 121px;
  padding-right: 158px;
  padding-bottom: 239px;

  display: flex;
  justify-content: center;
  gap: 194px;

  .category-margin {
    padding-top: 120px;

    position: relative;
  }
`;

export const FacultyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const FacultyPageTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Header1}
  letter-spacing: -0.28px;

  color: ${colors.HID_Grayscale[800]};

  span {
    color: #ffc700;
  }
`;
