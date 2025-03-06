import styled, { css } from 'styled-components';

export const ArtistInfoCardContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  gap: 2.8rem;
`;

export const ArtistImageContainer = styled.label`
  width: 18rem;
  height: 18rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[300]};

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[200]};

  cursor: pointer;
`;

export const ProfileSelectFileInput = styled.input`
  display: none;
`;

export const PlusIconContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.HID_Grayscale[500]};
`;

export const AddProfileImageText = styled.span`
  ${({ theme }) => theme.fontStyles.Caption2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
`;

export const ArtistTextInfoContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

const FocusAnimation = css`
  &::placeholder {
    color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
    transition: color 0.2s ease-out;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
    }
  }

  transition: border-color 0.2s ease-out;
`;

export const ArtistNameInput = styled.input`
  width: 24rem;
  height: fit-content;
  padding: 0.8rem 0.6rem;
  margin-bottom: 2.4rem;

  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.HID_Grayscale[400]};

  background: transparent;

  ${({ theme }) => theme.fontStyles.SubTitle2}
  font-size: 2.6rem;
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  ${FocusAnimation}
`;

export const ArtistMajorInput = styled.input`
  width: 24rem;
  height: fit-content;
  padding: 0.8rem 0.6rem;
  margin-bottom: 1.6rem;

  border: none;
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.HID_Grayscale[400]};

  background: transparent;

  ${({ theme }) => theme.fontStyles.Body2}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  ${FocusAnimation}
`;

export const ArtistEmailInput = styled(ArtistMajorInput)`
  margin: 0;
`;
