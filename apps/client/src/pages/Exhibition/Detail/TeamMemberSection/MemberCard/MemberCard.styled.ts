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
  height: 19.2rem;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const MemberName = styled.h3`
  ${({ theme }) => theme.fontStyles.Title2};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
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
`;
