import styled from 'styled-components';

export const MemberCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const ProfileImageFrame = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem;
`;

export const ProfileImage = styled.img`
  width: 19.2rem;
  aspect-ratio: 1 / 1;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  @media (max-width: 1920px) {
    width: clamp(16rem, 12vw, 19.2rem);
  }
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const MemberName = styled.h3`
  ${({ theme }) => theme.fontStyles.Title2};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  @media (max-width: 1920px) {
    font-size: clamp(2.4rem, 1.6vw, 3.2rem);
  }
`;

export const Divider = styled.div`
  width: 4rem;
  height: 2px;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

export const MemberMajor = styled.h4`
  ${({ theme }) => theme.fontStyles.Body1};
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

export const MemberEmail = styled.a<{ $emailHovered: boolean }>`
  position: relative;

  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body2};
  font-size: clamp(1.6rem, 1.2vw, 2rem);
  color: ${({ theme }) => theme.colors.HID_Navy[900]};

  &::after {
    content: '';
    width: ${({ $emailHovered }) => ($emailHovered ? '100%' : 0)};
    height: 3px;

    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);

    background-color: ${({ theme }) => theme.colors.HID_Navy[200]};
    transition: width 0.2s ease;
  }

  @media (max-width: 1920px) {
  }
`;
