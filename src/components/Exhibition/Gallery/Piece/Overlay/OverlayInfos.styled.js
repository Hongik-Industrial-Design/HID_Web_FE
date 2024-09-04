import { colors } from "@styles/theme/colors";
import styled from "styled-components";

export const OverlayContainer = styled.div`
  width: 100%;
  height: 100%;

  background: ${colors.HID_Navy[900]};
  opacity: ${({ $isHovered }) => ($isHovered ? 0.5 : 0)};
  border-radius: 2px;

  position: absolute;
  top: 0;
  left: 0;

  transition: opacity 0.3s ease;

  .credit {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; // 텍스트가 컨테이너를 초과할 경우 ...(말 줄임표)으로 표시

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title {
    color: ${colors.HID_Grayscale[0]};
    font-size: 32px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -0.28px;
  }

  .author {
    color: ${colors.HID_Grayscale[100]};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  }
`;
