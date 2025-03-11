import styled from 'styled-components';

export const GraduationHeaderSection = styled.header`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TitleYearSelectorContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const GraduationExhibitionTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }

  white-space: nowrap;
`;

export const Divider = styled.hr`
  width: 2px;
  height: 24px;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
`;

export const YearSelectorContainer = styled.div`
  width: fit-content;
  height: fit-content;
  margin-left: 1.2rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const YearSelectorTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  white-space: nowrap;
`;
