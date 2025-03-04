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
export const DetailInfoUnit = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 3.2rem;

  display: flex;
  align-items: center;
  gap: 10.8rem;
`;

export const DetailInfoInputLabel = styled.label`
  ${({ theme }) => theme.fontStyles.Title4};
  color: ${({ theme }) => theme.colors.HID_Grayscale[600]};
`;

// Title & SubTitle Input
