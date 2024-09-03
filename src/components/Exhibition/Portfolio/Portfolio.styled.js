import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;
  overflow-x: auto; // 가로 스크롤 허용

  position: absolute;
  top: 200px;
  left: 498px;
`;

export const Piece = styled.img`
  width: 517px;
  height: 507px;
  border-radius: 2px;
`;
