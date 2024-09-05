import { colors } from "@styles/theme/colors";
import styled from "styled-components";

export const BreadscrumbContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  position: absolute;
  top: 98px;
  right: 0;

  span {
    font-style: normal;
    font-size: 14px;
    font-weight: 300;
    line-height: 14px;

    color: ${colors.HID_Grayscale[500]};

    cursor: pointer;
  }

  .forward-arrow {
    width: 14px;
    height: 14px;
  }

  .current-page {
    font-weight: 500;
    color: ${colors.HID_Navy[900]};
  }
`;
