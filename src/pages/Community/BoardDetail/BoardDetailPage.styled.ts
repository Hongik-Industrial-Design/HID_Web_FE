import styled, { css } from 'styled-components';

export const BoardDetailPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 6.8rem 15.8rem 7.1rem;
  margin-top: 70px;
`;

export const BreadScrumbSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 4.8rem;
  text-align: right;
`;

export const BoardDetailHeaderContainer = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 4rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const BoardTitleContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const BoardTitle = styled.h1`
  flex-grow: 1;

  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header1_KO};
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

export const DateViewCountContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: stretch;
  align-items: center;
  gap: 1.6rem;
`;

const dateViewCountStyles = css`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body1}
  line-height: 1;
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
`;

export const BoardDate = styled.span`
  ${dateViewCountStyles}
`;

export const BoardViewCount = styled.span`
  ${dateViewCountStyles}
`;

export const TinyDivider = styled.div`
  width: 1px;
  height: clamp(1.2rem, 1vw, 2rem); // Body1의 font-size와 동일한 값 적용

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[300]};
`;

export const BoldDivider = styled.div`
  width: 100%;
  height: 0.4rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;
