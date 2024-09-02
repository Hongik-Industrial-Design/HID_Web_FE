import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: ${({ $isHovered }) => ($isHovered ? "block" : "none")};
  width: 1920px;
  height: 392px;
  position: absolute;
  top: 49px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  position: relative;
  top: 40px;
  left: 158px;

  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: #262626;

  span {
    color: #ffc700;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  gap: 24px;
  height: 216px;

  position: absolute;
  top: 120px;
  left: 158px;
`;

export const Year = styled.p`
  color: #262626;
  font-size: 24px;
  font-weight: 300;
`;
