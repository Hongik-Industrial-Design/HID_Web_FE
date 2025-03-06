import styled from 'styled-components';

export const ExhibitionRegisterContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ArtworkInfoTitle = styled.h1`
  margin-bottom: 6.4rem;

  ${({ theme }) => theme.fontStyles.Header1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

// Detail Info
export const DetailInfoSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 8rem;
`;

export const DetailInfoTitle = styled.h2`
  margin-bottom: 4rem;

  ${({ theme }) => theme.fontStyles.Header2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

// Major, Title, SubTitle, Description
export const DetailInfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding-left: 2.4rem;

  display: flex;
  flex-direction: column;
`;

// Major, Title, SubTitle
export const MajorTitleSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 6.4rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const DetailInfoUnit = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const DetailInfoInputLabel = styled.label`
  min-width: 16rem; // 정렬을 위해서 최소 너비 설정

  ${({ theme }) => theme.fontStyles.Title4}
  color: ${({ theme }) => theme.colors.HID_Grayscale[600]};
`;

// Description
export const DescriptionSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const DescriptionLabel = styled(DetailInfoInputLabel)`
  margin-bottom: 4rem;
`;

export const DescriptionUnit = styled(DetailInfoUnit)`
  padding-left: 6.4rem;
  margin-bottom: 4.8rem;

  align-items: flex-start;
  gap: 0;
`;

export const DescriptionDivider = styled.hr`
  width: 1px;
  height: 12px;
  margin-right: 3.2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[300]};
`;

export const LanguageDescriptionContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.8rem;
`;

export const LanguageDescriptionLabel = styled.label`
  ${({ theme }) => theme.fontStyles.Title5};
  color: ${({ theme }) => theme.colors.HID_Grayscale[600]};
`;

// SNS Link
export const SocialLinkSection = styled(DetailInfoUnit)`
  align-items: flex-start;
`;

export const SocialLinkContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2.4rem;
`;

export const SocialLinkForm = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

// Video
export const ExhibitionVideoSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 8rem;
`;

export const VideoLinkContainer = styled.section`
  width: fit-content;
  height: fit-content;
  padding-left: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

// Images
export const ExhibitonImageSection = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 8rem;
`;

export const ImagePreviewScrollContainer = styled.div`
  width: 100%;
  height: fit-content;

  overflow-x: scroll;
`;

export const ImagePreviewContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;
