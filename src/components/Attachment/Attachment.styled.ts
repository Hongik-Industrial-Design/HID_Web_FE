import styled, { css } from 'styled-components';

export const AttachmentContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const AttachmentButton = styled.button`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

export const ClipIconBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AttachmentText = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body2_KO}
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;

export const AttachmentFileCount = styled.span`
  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.HID_Navy[900]};
`;

export const DownArrowIconBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 0.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Dropdown
export const AttachmentDropdownContainer = styled.div<{
  $isDropdownOpen: boolean;
}>`
  ${({ $isDropdownOpen }) =>
    $isDropdownOpen
      ? css`
          z-index: 100;
          opacity: 1;
          transition:
            opacity 0.3s ease,
            z-index 0.3s ease;
        `
      : css`
          z-index: -1;
          opacity: 0;
          transition:
            opacity 0.3s ease-out,
            z-index 0.3s ease-out;
        `}

  position: absolute;
  top: 160%;
  right: 0;

  width: fit-content;
  height: fit-content;
  padding: 1.8rem 2.4rem;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 24px 0px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(24px);
`;

export const AttachmentFileList = styled.ul`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

export const AttachmentFileItem = styled.li`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const AttachmentFileIconBox = styled.div`
  width: 2.8rem;
  height: 2.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AttachmentFileItemLink = styled.a`
  position: relative;

  width: fit-content;
  height: fit-content;

  ${({ theme }) => theme.fontStyles.Headline1_KO}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
  }

  white-space: nowrap;
`;
