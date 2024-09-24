import { colors } from "@styles/theme/colors";
import styled from "styled-components";

export const CategoryContainer = styled.div`
  position: sticky;
  top: ${({ $currentPath }) => $currentPath === "/faculty" && "253px"};

  display: inline-flex;
  flex-direction: column;
  gap: 24px;

  margin-left: 158px;
`;

export const DetailedMajor = styled.p`
  max-width: 144px;
  white-space: nowrap;

  ${({ theme }) => theme.fontStyles.Title2}
  font-weight: 400;

  cursor: pointer;

  color: ${({ $isSelected }) =>
    $isSelected ? `${colors.HID_Navy[900]}` : `${colors.HID_Grayscale[500]}`};
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 400)};
  transition: font-weight 0.12s ease, color 0.12s ease;
`;
