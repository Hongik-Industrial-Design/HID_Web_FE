import styled from "styled-components";

export const PieceContainer = styled.div`
  width: 517px;
  height: 507px;
  border-radius: 2px;

  position: relative;

  cursor: pointer;
  scroll-snap-align: start; // 각 작품의 시작 부분이 스냅됨
`;

export const PieceImage = styled.img`
  width: 100%;
  height: 507px;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;
`;
