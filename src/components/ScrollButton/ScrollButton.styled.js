import styled from "styled-components";

export const ScrollContainer = styled.div`
  opacity: ${({ $isScrolled }) => ($isScrolled ? 1 : 0)};
  transition: opacity 0.5s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;
  padding: 10px;

  position: absolute;
  z-index: 999; // 그리드보다 확실하게 앞에 위치하게 함
  top: 50%;
  ${({ $arrowType }) => ($arrowType === "left" ? "left: 5%" : "right: 5%")};
  transform: translateY(-50%);

  background: #d2d2d7a3;
  border-radius: 36px;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

export const Arrow = styled.img`
  width: 10px;
  height: 17px;
  flex-shrink: 0;
  fill: #0000008f;
`;
