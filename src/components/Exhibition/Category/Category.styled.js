import styled from "styled-components";

export const CategoryContainer = styled.div`
  position: sticky;
  top: ${({ $currentPath }) => $currentPath === "/faculty" && "253px"};

  display: inline-flex;
  flex-direction: column;
  gap: 24px;

  margin-left: 158px;

  white-space: nowrap;
`;

export const DetailedMajor = styled.p`
  // Title 3
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;

  cursor: pointer;

  color: ${({ $isSelected }) => ($isSelected ? "#09287A" : "#7B7B7B")};
  font-weight: ${({ $isSelected }) => ($isSelected ? 600 : 400)};
  transition: font-weight 0.15s ease, color 0.3s ease;
`;
