import styled, { css } from 'styled-components';

export const BoardDetailPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 6.8rem 15.8rem;
`;

export const BreadScrumbSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 4.8rem;
  text-align: right;
`;

// Board Detail Header
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

// Article Section
export const AritcleSectionContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding: 2.4rem 0 8rem;
`;

// Attachment Section
export const AttachmentContainer = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 4rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// Content Section
export const PostContentSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 0 16rem;

  @media (max-width: 1440px) {
    padding: 0 10rem;
  }

  @media (max-width: 1080px) {
    padding: 0 4rem;
  }
`;

export const PostImageContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 3.2rem;
`;

export const PostImage = styled.img`
  width: 100%;
  height: fit-content;
`;

export const PostText = styled.p`
  width: 100%;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body3_KO};
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

// Post Footer Divider
export const PostFooterDivider = styled.div`
  width: 100%;
  height: 2px;
  margin-bottom: 3.2rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[300]};
`;

// Post Footer
export const PostFooterContainer = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
