import styled from 'styled-components';

export const FacultyListPageWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 7rem 15.8rem 21.7rem 15.8rem;
  margin-top: 70px;

  display: flex;
  justify-content: center;
  gap: clamp(10rem, 10vw, 19.3rem);
`;

export const CategoryStickyContainer = styled.section`
  position: relative;
`;

export const FacultyListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const FacultyPageTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};

    user-select: auto;
    -webkit-user-select: auto;
  }
`;
