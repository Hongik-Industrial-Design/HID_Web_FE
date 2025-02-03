import styled from 'styled-components';

export const TeamMembersSection = styled.section`
  width: 100%;
  height: fit-content;
  padding: 8.8rem 15.8rem 9.9rem 15.8rem;

  display: flex;
  flex-direction: column;
  gap: 8rem;
`;

export const TeamMembersContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;
