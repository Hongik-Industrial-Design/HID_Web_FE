import styled from "styled-components";

export const OverviewContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 80px;

  padding-left: 158px;
  padding-bottom: 254px;
  margin-top: 240px;
`;

export const OverviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding-right: 158px;
`

export const IntroductionText = styled.div`
  width: 595px;

  ${({ theme }) => theme.fontStyles.Header1};
  letter-spacing: -0.28px;

  span {
    color: #ffc700;
  }
`;
