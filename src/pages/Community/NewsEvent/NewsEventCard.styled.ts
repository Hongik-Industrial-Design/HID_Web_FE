import styled from 'styled-components';
import { colors } from '@styles/theme/colors';

export const NewsEventCardContainer = styled.a`
  width: 302px;
  border-radius: 2px;

  display: flex;
  flex-direction: column;

  border: 1px solid ${colors.HID_Grayscale[200]};
`;

export const CardThumbnail = styled.img`
  width: 100%;
  height: 300px;

  border-bottom: 1px solid ${colors.HID_Grayscale[200]};
`;

export const CardInfos = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${colors.HID_Grayscale[0]};

  .date {
    ${({ theme }) => theme.fontStyles.Headline2}
    color: ${colors.HID_Grayscale[400]};
  }

  .title {
    margin-top: 5px;
    margin-bottom: 12px;

    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;

    color: ${colors.HID_Grayscale[900]};
  }

  .category {
    width: fit-content;
    padding: 4px 6px;
    border-radius: 2px;

    ${({ theme }) => theme.fontStyles.Headline2}
    color: ${colors.HID_Navy[900]};
    background-color: ${colors.HID_Navy[50]};
  }
`;
