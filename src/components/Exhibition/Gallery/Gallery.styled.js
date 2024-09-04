import styled from "styled-components";

export const GallerWrapper = styled.div`
  width: 70vw;
  height: ${({ $height }) => $height + 238}px;

  position: relative;
  top: 200px;
  left: 498px;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;

  width: 100%;

  position: relative;
  top: 0;
  left: 0;

  overflow-x: scroll;
  /* scroll-snap-type: x mandatory; // 가로 스냅 스크롤 기능 */

  /* // Safari, Chorme 에서 스크롤 바 숨기기
  &::-webkit-scrollbar {
    display: none;
  } */
`;
