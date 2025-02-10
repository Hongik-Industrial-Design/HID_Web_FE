import styled from 'styled-components';

// News & Event Section
export const NewsEventWrapper = styled.section`
  width: 100%;
  height: fit-content;
  padding-top: 14.8rem;

  display: flex;
  gap: 23.3rem;
`;

export const NewsEventCategoryContainer = styled.div`
  position: relative;
  margin: 10rem 0;
`;

export const NewsEventContainer = styled.section`
  width: 100%;
  min-width: 1080px;
  height: fit-content;
`;

export const NewsEventTitleSection = styled.section`
  width: 100%;
  height: fit-content;
  margin: 0 1.6rem 3.2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BoldDivider = styled.div`
  width: 100%;
  height: 0.4rem;
  margin-bottom: 2.8rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const NewsEventTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

export const NewsEventCardGridContainer = styled.section`
  width: 100%;
  height: fit-content;

  overflow-x: scroll;
`;

export const NewsEventCardGrid = styled.ul`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, 1fr);
  gap: 2.4rem 2.3rem;
`;

export const NewsEventCardItem = styled.li`
  width: fit-content;
  height: fit-content;
`;
