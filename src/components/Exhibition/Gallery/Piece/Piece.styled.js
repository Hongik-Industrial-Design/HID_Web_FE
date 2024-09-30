import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const PieceContainer = styled.div`
  width: 517px;
  height: 507px;

  position: relative;

  border-radius: 2px;
  border: 1px solid ${colors.HID_Grayscale[200]};
  
  cursor: pointer;
  scroll-snap-align: start; // 각 작품의 시작 부분이 스냅됨
`;

export const PieceImage = styled.img`
  width: 100%;
  height: 100%;
  
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 2px;

  overflow: hidden;
`;
