import styled from 'styled-components';

export const YoutubeEmbedWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 22.5rem 15.8rem 13.4rem;

  @media (max-width: 1920px) {
    padding-top: clamp(16rem, 12vw, 22.5rem);
    padding-bottom: clamp(10rem, 7vw, 13.4rem);
    padding-left: clamp(8.4rem, 11vw, 15.8rem);
    padding-right: clamp(8.4rem, 11vw, 15.8rem);
  }

  @media (max-width: 1440px) {
    padding-bottom: clamp(8rem, 6vw, 10rem);
  }

  @media (max-width: 1200px) {
    padding: 16rem 8.4rem clamp(5rem, 6.4vw, 13.4rem);
  }

  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: clamp(0.4rem, 1.2vw, 2.4rem);
  }
`;

export const HeroSectionContainer = styled.section`
  position: relative;

  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;
  gap: 16rem;

  @media (max-width: 1920px) {
    gap: clamp(12rem, 8vw, 16rem);
  }

  @media (max-width: 1440px) {
    gap: clamp(8rem, 6vw, 12rem);
  }

  @media (max-width: 1200px) {
    gap: clamp(6rem, 4vw, 8rem);
  }

  @media (max-width: 768px) {
    padding: 4.8rem 3.2rem 0; // 태블릿 view부터 Youtube Padding 제거
    flex-direction: column;
    gap: clamp(2rem, 4.8vw, 2.8rem);
  }
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
  height: fit-content;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const PrimaryThumbnail = styled.img`
  width: 56rem;
  height: fit-content;
  aspect-ratio: 1 / 1;

  @media (max-width: 2560px) {
    width: clamp(64rem, 32vw, 80rem);
  }

  @media (max-width: 1920px) {
    width: clamp(56rem, 36vw, 64rem);
  }

  @media (max-width: 1440px) {
    width: clamp(48rem, 40vw, 56rem);
  }

  @media (max-width: 1200px) {
    width: clamp(36rem, 44vw, 48rem);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Content Area
export const ContentArea = styled.section`
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
  gap: 1.6rem;

  @media (max-width: 1920px) {
    gap: clamp(1.6rem, 1.2vw, 2rem);
  }

  @media (max-width: 1440px) {
    gap: clamp(1.2rem, 1.2vw, 1.6rem);
  }
`;

// Title
export const ArtworkTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Title2}
  font-size: clamp(2.8rem, 1.8vw, 3.6rem);
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  @media (max-width: 1200px) {
    font-size: clamp(2.4rem, 1.4vw, 2.8rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(2.8rem, 6.4vw, 3.6rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2.4rem, 7.6vw, 2.8rem);
  }
`;

export const ArtworkSubTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.SubTitle2}
  font-size: clamp(1.8rem, 1.2vw, 2.2rem);
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
  margin-bottom: 0.8rem;

  @media (max-width: 1200px) {
    margin-bottom: 1.2rem;
    font-size: clamp(1.4rem, 1.4vw, 1.8rem);
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    font-size: clamp(1.8rem, 3.6vw, 2.2rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.4rem, 4.8vw, 1.8rem);
  }
`;

// Author
export const AuthorContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  flex-wrap: wrap;
`;

export const AuthorUnit = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const AuthorName = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  font-size: clamp(1.4rem, 1vw, 1.8rem);
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  @media (max-width: 768px) {
    font-size: clamp(1.4rem, 3.6vw, 1.8rem);
  }
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

  @media (max-width: 1920px) {
    margin: clamp(3.2rem, 2vw, 4.8rem) 0 clamp(2.8rem, 2.4vw, 4rem) 0;
    gap: clamp(2.4rem, 1.6vw, 3.6rem);
  }

  @media (max-width: 768px) {
    margin: clamp(2.8rem, 4.8vw, 3.2rem) 0 clamp(3.2rem, 5.4vw, 3.6rem) 0;
  }
`;

export const DescriptionEnglish = styled.p`
  ${({ theme }) => theme.fontStyles.Body3}
  font-size: clamp(1.2rem, 0.8vw, 1.6rem);
  color: ${({ theme }) => theme.colors.HID_Grayscale[700]};

  @media (max-width: 1440px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 2.8vw, 1.4rem);
  }
`;

export const DescriptionKorean = styled.p`
  ${({ theme }) => theme.fontStyles.Body3_KO}
  font-size: clamp(1.2rem, 0.8vw, 1.6rem);
  color: ${({ theme }) => theme.colors.HID_Grayscale[700]};

  @media (max-width: 1440px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 2.8vw, 1.4rem);
  }
`;

// Keyword
export const KeywordContainer = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 1200px) {
    margin-bottom: 3.2rem;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

// Footer
export const ContentFooter = styled.section`
  width: 100%;
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.6rem;

  @media (max-width: 768px) {
    margin-top: 1.2rem;
  }
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
  aspect-ratio: 1 / 1;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  &:hover {
    transform: scale(1.2);
  }

  transition: transform 0.2s ease;

  @media (max-width: 1200px) {
    width: clamp(3.2rem, 3.2vw, 4rem);
  }

  @media (max-width: 768px) {
    width: 3.6rem;
  }

  @media (max-width: 480px) {
    width: clamp(3.2rem, 9vw, 3.6rem);
  }
`;

export const RoutingArea = styled.div`
  display: flex;
  gap: 3.2rem;
`;
