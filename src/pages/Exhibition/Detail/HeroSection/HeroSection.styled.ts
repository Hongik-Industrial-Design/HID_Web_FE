import styled from 'styled-components';

export const HeroSectionContainer = styled.section`
  position: relative;

  width: 100%;
  height: fit-content;
  padding-top: 25.7rem;
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

export const TinyThumbnailList = styled.ul`
  width: 17.9rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const TinyThumbnailItem = styled.li`
  width: 100%;
  height: fit-content;

  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const TinyThumbnail = styled.img`
  width: 100%;
  height: fit-content;
`;

export const PrimartThumbnailFrame = styled.div`
  width: fit-content;
  height: 58.3rem;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const PrimaryThumbnail = styled.img`
  height: 100%;
`;

// Content Area
export const ContentArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
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
  width: 65.6rem;
  height: fit-content;

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

// Footer
export const ContentFooter = styled.section`
  width: 100%;
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconList = styled.ul`
  width: fit-content;
  height: fit-content;

  display: flex;
  gap: 1.6rem;
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
`;

export const SocialIcon = styled.img`
  width: 70%;
`;

export const RoutingArea = styled.div`
  display: flex;
  gap: 3.2rem;
`;
