import styled from 'styled-components';

export const OverviewContainer = styled.div`
  width: 100%;
  padding: 10.4rem 0 16.3rem 15.8rem;

  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const OverviewHeader = styled.div`
  width: 100%;
  padding-right: 15.4rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3.6rem;
`;

export const IntroductionText = styled.h1`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Header1};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};

    user-select: auto;
    -webkit-user-select: auto;
  }
`;
