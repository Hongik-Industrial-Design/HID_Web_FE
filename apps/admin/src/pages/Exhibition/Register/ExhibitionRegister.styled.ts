import styled, { css } from 'styled-components';

export const ExhibitionRegisterForm = styled.form`
  width: 100%;
  height: fit-content;

  // react-toastify 스타일 커스텀
  .Toastify__toast-container {
    width: 36rem;
    min-height: 8rem;

    ${({ theme }) => theme.fontStyles.Caption1}

    svg {
      fill: ${({ theme }) => theme.colors.HID_Alert.Error};
    }
  }

  .Toastify__toast-container--bottom-right {
    bottom: 4%;
    right: 2.5%;
  }

  .Toastify__progress-bar--error {
    background: ${({ theme }) => theme.colors.HID_Alert.Error};
  }

  .Toastify__toast-icon {
    margin-inline-end: 16px;
  }
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

export const ImagePreviewScrollContainer = styled.div<{
  $isImageDragging: boolean;
}>`
  width: 100%;
  height: fit-content;

  overflow-x: scroll;

  ${({ $isImageDragging }) =>
    $isImageDragging &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.HID_Navy[900]};
      border-radius: 8px;
      opacity: 0.5;
    `}

  transition: border-radius 0.1s ease-out, border 0.1s ease-out, opacity 0.1s ease-out;
`;

export const ImagePreviewContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

// Participants
export const ParticipantSection = styled(DetailInfoSection)``;

export const ParticipantList = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 6.4rem;

  overflow-x: scroll;
`;

// Save & Cancel Button
export const SaveCancelButtonSection = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
`;
