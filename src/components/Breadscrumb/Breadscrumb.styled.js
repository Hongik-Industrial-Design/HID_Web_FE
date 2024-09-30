import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const BreadscrumbContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  position: absolute;
  position: ${({ $facultyPage }) => $facultyPage && "static"};
  top: 102px;
  right: 0; // HeroSection content 오른쪽 끝이랑 일치하게끔!

  .current-page {
    font-weight: 500;
    color: ${colors.HID_Navy[900]};
  }
`;

export const BreadScrumbUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;

    color: ${colors.HID_Grayscale[500]};

    white-space: nowrap;
    cursor: pointer;
  }

  .forward-arrow {
    width: 14px;
    height: 14px;
  }
`;
