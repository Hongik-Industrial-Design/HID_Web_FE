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
  margin: 100px 0;
`;

export const NewsEventContainer = styled.section`
  width: 100%;
  min-width: 1080px;
  max-width: 1520px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NewsEventTitleSection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const BoldDivider = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const NewsEventTitle = styled.div`
  ${({ theme }) => theme.fontStyles.Header1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

export const NewsEventCardGridContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NewsEventCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
`;
