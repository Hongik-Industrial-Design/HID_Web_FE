import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const HeroSectionContainer = styled.div`
  display: flex;
  gap: 160px;

  position: relative;

  width: 100%;

  padding-top: 257px;
  margin-bottom: 134px;
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  gap: 27px;

  flex-shrink: 0;

  .secondary {
    width: 100%;
    height: 179px;

    border: 1px solid ${colors.HID_Grayscale[200]};
  }

  .primary {
    width: 582px;
    height: 582px;

    border-radius: 2px;
    border: 1px solid ${colors.HID_Grayscale[200]};
  }
`;

export const TinyThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 179px;
`;

export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ContentHeader = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  .title {
    ${({ theme }) => theme.fontStyles.Header2}
    color: ${colors.HID_Grayscale[800]};
  }

  .type {
    ${({ theme }) => theme.fontStyles.Title3}
    color: ${colors.HID_Grayscale[900]};
  }

  .author {
    font-style: normal;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;

    color: ${colors.HID_Grayscale[500]};
  }

  .divider {
    width: 1px;
    height: 14px;

    margin: 0 8px;

    color: ${colors.HID_Grayscale[300]};
  }
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  width: 656px;

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${colors.HID_Grayscale[700]};
`;

export const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 219px;

  margin-top: auto;
`;

export const SocialIcons = styled.div`
  display: inline-flex;
  gap: 8px;

  .icon {
    width: 40px;
    height: 40px;

    cursor: pointer;
  }
`;

export const RoutingArea = styled.div`
  display: flex;
  gap: 32px;
`;
