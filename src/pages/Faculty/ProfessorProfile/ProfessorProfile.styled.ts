import styled, { css } from 'styled-components';

export const ProfessorProfileWrapper = styled.div`
  width: 100%;
  padding: 6.8rem 15.8rem 18.5rem 15.8rem;
  margin-top: 70px;

  display: flex;
  flex-direction: column;
  gap: 6.4rem;
`;

// Header
export const ProfessorProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.8rem;
`;

export const ProfessorProfilePageTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

// Main Section
export const ProfessorProfileMainSection = styled.main`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 20.6rem;
`;

export const ProfileStickyContainer = styled.div`
  position: relative;

  width: fit-content;
  min-height: 100vh; // Sticky 효과를 위해 최소 높이 설정
`;

export const ProfileContainer = styled.section`
  position: sticky;
  top: 10%;

  width: 45rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 3.6rem;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: fit-content;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const ProfessorInfos = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProfessorType = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ProfessorNameContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfessorName = styled.h1`
  ${({ theme }) => theme.fontStyles.Title1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const ProfessorDrawerButton = styled.button<{
  $isHovered: boolean;
}>`
  position: relative;

  width: fit-content;
  height: fit-content;
  padding: 0.8rem 1.6rem;

  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Navy[900]};

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.HID_Navy[900]};

  overflow: hidden;

  ${({ $isHovered }) =>
    $isHovered
      ? css`
          border-color: #7488c8;
          color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
          transition: all 0.15s ease-in-out;
        `
      : css`
          border-color: ${({ theme }) => theme.colors.HID_Navy[900]};
          color: ${({ theme }) => theme.colors.HID_Navy[900]};
          transition: all 0.15s ease-out;
        `}

  &:active {
    border-color: ${({ theme }) => theme.colors.HID_Navy[900]};
    color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
    transform: scale(0.99);

    transition:
      transform 0.1s ease-out,
      border-color 0.1s ease-out,
      color 0.1s ease-out;
  }

  // Background Animation
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #7488c8;

    ${({ $isHovered }) =>
      $isHovered
        ? css`
            transform: translateY(0);
            transition: transform 0.15s ease-in-out;
          `
        : css`
            transform: translateY(100%);
            transition: transform 0.15s ease-out;
          `}
  }

  &:active::after {
    background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
    transition: background-color 0.1s ease-out;
  }
`;

const roleMajorStyles = css`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

export const ProfessorRole = styled.span`
  ${roleMajorStyles}
`;

export const ProfessorMajor = styled.span`
  ${roleMajorStyles}
`;

export const ProfileEmail = styled.a<{ $emailHovered: boolean }>`
  position: relative;

  width: fit-content;
  height: fit-content;
  margin-top: 2.8rem;

  ${({ theme }) => theme.fontStyles.Body1}
  color: ${({ theme }) => theme.colors.HID_Navy[900]};

  &::after {
    content: '';
    width: ${({ $emailHovered }) => ($emailHovered ? '100%' : 0)};
    height: 3px;

    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);

    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.HID_Navy[200]};
    transition: width 0.25s ease;
  }
`;
