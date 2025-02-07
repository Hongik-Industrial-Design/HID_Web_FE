import styled from 'styled-components';
import { Link } from 'react-router';

export const FeatureCardLink = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const FeatureCardContainer = styled.div`
  width: 49.8rem;
  height: fit-content;
  padding-right: 2.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 2px;
`;

export const FeatureCardImage = styled.img`
  width: 100%;
  height: fit-content;

  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const FeatureCardInfoContainer = styled.div`
  width: 100%;
  padding: 3.2rem 3.2rem 4.8rem 3.2rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;

export const FeatureCardInfo = styled.div`
  width: 100%;
  padding: 0.8rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const FeatureCardDate = styled.span`
  ${({ theme }) => theme.fontStyles.Headline1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
`;

export const FeatureCardTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Title3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

export const FeatureCardDescription = styled.p`
  ${({ theme }) => theme.fontStyles.Body1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[700]};
`;
