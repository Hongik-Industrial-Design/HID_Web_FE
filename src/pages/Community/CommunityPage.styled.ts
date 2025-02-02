import styled from 'styled-components';
import { colors } from '@styles/theme/colors';

export const CommunityPageContainer = styled.div`
  width: 100%;
  padding-left: 158px;
  padding-right: 161px;
  margin-top: 125px;
  margin-bottom: 233px;

  display: flex;
  flex-direction: column;
  gap: 120px;
`;

// News & Event Section
export const NewsEventWrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 180px;
`;

export const NewsEventCategoryContainer = styled.div`
  position: relative;
  margin: 100px 0;
`;

export const NewsEventContainer = styled.div`
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
  background-color: ${colors.HID_Grayscale[800]};
`;

export const NewsEventTitle = styled.div`
  ${({ theme }) => theme.fontStyles.Header1}

  color: ${colors.HID_Grayscale[800]};

  .dot {
    color: ${colors.HID_YellowDot};
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
