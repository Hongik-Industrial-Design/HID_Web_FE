import styled from 'styled-components';

export const HeroSectionContainer = styled.section`
  position: relative;

  width: 100%;
  max-width: 70%;
  height: fit-content;
  padding-top: 25.7rem;
  margin: 0 auto;
  margin-bottom: 13.4rem;

  display: flex;
  justify-content: center;
  gap: 16rem;
`;

// Thumbnail
export const ThumbnailContainer = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 2.7rem;
`;

export const PrimaryThumbnailFrame = styled.div`
  width: fit-content;
  height: 65.4rem;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const PrimaryThumbnail = styled.img`
  height: 100%;
`;

// Content Area
export const ContentArea = styled.section`
  position: relative; // BreadScrumb의 포지셔닝을 위함

  display: flex;
  flex-direction: column;
`;

// Header (Title & Author)
export const ContentHeader = styled.section`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
`;

// Title
export const ArtworkTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Title2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const ArtworkSubTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.SubTitle2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

// Author
export const AuthorContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const AuthorUnit = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const AuthorName = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
`;

export const AuthorDivider = styled.div`
  width: 0.1rem;
  height: 1.6rem;
  background-color: ${({ theme }) => theme.colors.HID_Grayscale[300]};
`;

// Description
export const ArtworkDescriptionSection = styled.section`
  width: fit-content;
  height: fit-content;
  margin: 4.8rem 0 4rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.6rem;
`;

export const DescriptionEnglish = styled.p`
  ${({ theme }) => theme.fontStyles.Body3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[700]};
`;

export const DescriptionKorean = styled.p`
  ${({ theme }) => theme.fontStyles.Body3_KO}
  color: ${({ theme }) => theme.colors.HID_Grayscale[700]};
`;

// Keyword
export const KeywordContainer = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

// Footer
export const ContentFooter = styled.section`
  width: 100%;
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.6rem;
`;

export const SocialIconList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 1.8rem;
`;

export const SocialIconItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const SocialIconLink = styled.a`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  &:hover {
    transform: scale(1.2);
  }

  transition: transform 0.2s ease;
`;

export const SocialIcon = styled.img`
  width: 70%;
`;

export const RoutingArea = styled.div`
  display: flex;
  gap: 3.2rem;
`;
