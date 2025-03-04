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
