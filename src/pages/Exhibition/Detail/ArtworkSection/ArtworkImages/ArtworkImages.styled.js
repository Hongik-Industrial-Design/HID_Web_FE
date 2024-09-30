import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const ArtworkImageContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 64px;

  flex-shrink: 0;
`;

export const DetailImage = styled.img`
  width: 100%;

  border-radius: 2px;
  border: 1px solid ${colors.HID_Grayscale[200]};
`;
