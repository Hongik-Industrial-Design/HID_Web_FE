import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;

  position: absolute;
  top: 200px;
  left: 498px;
`;
