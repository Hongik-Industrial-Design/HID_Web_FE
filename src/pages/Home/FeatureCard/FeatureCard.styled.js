import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const FeatureCardContainer = styled.div`
  width: 632px;

  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const FeatureCardImage = styled.img`
  width: 100%;
  height: 632px;

  border-radius: 2px 2px 0 0;
  border: 1px solid ${colors.HID_Grayscale[200]};
`;

export const FeatureCardInfoContainer = styled.div`
  width: 100%;
  padding: 32px;
  padding-bottom: 48px;

  background-color: ${colors.HID_Grayscale[0]};
  border-radius: 0 0 2px 2px;
`;

export const FeatureCardInfo = styled.div`
  width: 100%;
  padding: 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  .title {
  }

  .description {
  }
`;

export const FeatureCardDate = styled.div`
  ${({ theme }) => theme.fontStyles.Headline}
  color: ${colors.HID_Grayscale[400]};
`;

export const FeatureCardContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .title {
    ${({ theme }) => theme.fontStyles.Header2};
    font-weight: 600;
    letter-spacing: -0.28px;

    color: ${colors.HID_Grayscale[900]};
  }

  .description {
    font-style: normal;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;

    color: ${colors.HID_Grayscale[700]};
  }
`;
