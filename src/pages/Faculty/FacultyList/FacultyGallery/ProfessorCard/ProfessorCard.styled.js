import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const ProfessorContainer = styled.div`
  width: 404px;
  height: 405px;

  position: relative;

  cursor: pointer;
`;

export const ProfessorThumbnail = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 2px;
  border: 1px solid ${colors.HID_Grayscale[200]};
`;

export const ProfessorOverlay = styled.div`
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transition: opacity 0.3s ease-out;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 2px;

  background-color: #09287a80;

  .name {
    ${({ theme }) => theme.fontStyles.Display}
    font-weight: 600;

    color: ${colors.HID_Grayscale[0]};
  }

  .major {
    font-style: normal;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;

    color: ${colors.HID_Grayscale[100]};
  }
`;
