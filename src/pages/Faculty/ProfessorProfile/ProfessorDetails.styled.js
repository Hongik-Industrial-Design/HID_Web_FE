import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 64px;
`;

export const DetailSectionTitle = styled.h2`
  margin-bottom: 22px;

  ${({ theme }) => theme.fontStyles.Title3}
  color: ${colors.HID_Grayscale[800]};
`;

export const DetailsDescriptionText = styled.p`
  ${({ theme }) => theme.fontStyles.Body3}
  color: ${colors.HID_Grayscale[700]};
`;

export const BoldDivider = styled.div`
  width: 100%;
  height: 4px;

  margin-bottom: 24px;

  background-color: ${colors.HID_Grayscale[900]};
`;

export const SubtleDivider = styled.div`
  height: 1px;

  background-color: ${colors.HID_Grayscale[200]};
`;

export const DetailsDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 15px;
`;

export const EventYearBox = styled.div`
  width: 134px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between; // 경력의 내용이 길어질 경우 연도와 경력 아래 Subtleline을 정렬하기 위함
  gap: 15px;
`;

export const CareerEntry = styled.div`
  width: 100%;

  display: flex;
  gap: 24px;
`;

export const CareerContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MajorSection = styled.div`
  width: 100%;
`;

export const BiographySection = styled.div`
  width: 100%;
`;

export const AwardsSection = styled.div`
  width: 100%;
`;

export const WorksSection = styled.div`
  width: 100%;
`;
