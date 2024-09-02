import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 24px;

  margin-top: 200px;
  margin-left: 158px;
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
