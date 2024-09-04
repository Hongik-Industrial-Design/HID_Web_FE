import styled from "styled-components";

export const GalleryWrapper = styled.div`
  width: 100%;
  height: ${({ $height }) => $height + 238}px;
  
  padding-right: 64px;

  position: relative;

  flex-grow: 1;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;

  width: 100%;

  overflow-x: scroll;
  /* scroll-snap-type: x mandatory; // 가로 스냅 스크롤 기능 */

  /* // Safari, Chorme 에서 스크롤 바 숨기기
  &::-webkit-scrollbar {
    display: none;
  } */
`;
