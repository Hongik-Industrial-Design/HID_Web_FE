import styled from 'styled-components';
import { Link } from 'react-router';

export const NewsEventCardContainer = styled(Link)`
  width: 29.8rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const CardThumbnail = styled.img`
  width: 100%;
  height: 29.9rem;

  border-radius: 2px 2px 0 0;
`;

export const CardInfos = styled.div`
  width: 100%;
  padding: 1.2rem;

  display: flex;
  flex-direction: column;

  border-radius: 0 0 2px 2px;
  border-top: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[50]};

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;

export const CardDate = styled.span`
  width: fit-content;
  height: fit-content;
  margin-bottom: 0.4rem;

  ${({ theme }) => theme.fontStyles.Headline2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
`;

export const CardTitle = styled.span`
  width: fit-content;
  height: fit-content;
  margin-bottom: 1.2rem;

  ${({ theme }) => theme.fontStyles.Title5}
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;
