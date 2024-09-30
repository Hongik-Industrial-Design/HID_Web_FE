import styled from "styled-components";

export const GalleryWrapper = styled.div`
  height: ${({ $height }) => $height + 242}px;
  margin-right: 64px;

  position: relative;

  overflow-x: hidden;
`;

export const GalleryContainer = styled.div`
  width: 100%;

  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;

  overflow-x: scroll;

  /* scroll-snap-type: x mandatory; // 가로 스냅 스크롤 기능 */

  /* // Safari, Chorme 에서 스크롤 바 숨기기
  &::-webkit-scrollbar {
    display: none;
  } */
`;
